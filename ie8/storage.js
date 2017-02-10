(function (window) {

    //storage操作对象
    var storage = (function () {

        var localStorage = window.localStorage,
            Date = window.Date,
            toString = {}.toString,
            //过期时间前缀
            expirePrefix = '_expire_';

        //IE8-
        if (!localStorage) {
            return;
        }

        /**
         * 设置localStorage函数
         * @param {string} key 键
         * @param {string} val 值
         * @param {Date|number} days 过期时间|过期天数
         * @param {number} hours 过期小时数
         */
        function setItem(key, val, days, hours) {
            //如设值为空
            if (val === undefined || val === null) {
                return;
            }

            var expire, now = new Date();

            //days参数是一个日期
            if (toString.call(days) === '[object Date]') {
                expire = +days;
            }
            //过期天数
            else if (typeof days === 'number') {
                expire = now.setDate(now.getDate() + days);
            }
            //过期小时数
            else if (typeof hours === 'number') {
                expire = now.setHours(now.getHours() + hours);
            }
            //默认过期天数为1天
            else {
                expire = now.setDate(now.getDate() + 1);
            }

            localStorage.setItem(key, val);
            localStorage.setItem(expirePrefix + key, expire);
        }

        //获取
        function getItem(key) {
            var date = new Date(),
                expire = localStorage.getItem(expirePrefix + key);

            //判断过期时间,如未过期
            if (expire && +expire > +date) {
                return localStorage.getItem(key);
            }
            //已过期就清除
            else {
                removeItem(key);
                return null;
            }
        }

        //清除
        function removeItem(key) {
            localStorage.removeItem(key);
            localStorage.removeItem(expirePrefix + key);
        }

        return {
            setItem: setItem,
            getItem: getItem,
            removeItem: removeItem
        };
    })();


    //CommonJS
    if (typeof exports === 'object') {
        return module.exports = storage;
    }

    //添加到全局
    window.storage = storage;

})(window);