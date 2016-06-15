(function (window) {

    //storage操作对象
    var storage = (function () {

        var localStorage = window.localStorage,
            Date = window.Date,
        //过期时间前缀
            expirePrefix = '_expire_';

        //IE8-
        if (!localStorage) {
            return;
        }

        //设置
        function setItem(key, val, days, hours, mins) {
            if (val === undefined || val === null) {
                return;
            }

            var date = new Date();

            //过期天数
            if (typeof  days === 'number') {
                date.setDate(date.getDate() + days);
            }
            //过期小时数
            else if (typeof  hours === 'number') {
                date.setHours(date.getHours() + hours);
            }
            //过期分钟数
            else if (typeof  mins === 'number') {
                date.setMinutes(date.getMinutes() + mins);
            }
            //默认过期天数为1天
            else {
                date.setDate(date.getDate() + 1);
            }

            localStorage.setItem(key, val);
            localStorage.setItem(expirePrefix + key, +date);
        }

        //获取
        function getItem(key) {
            var date = new Date(),
                expire = localStorage.getItem(expirePrefix + key);

            //判断过期时间
            if (+expire > +date) {
                return localStorage.getItem(key);
            }
        }

        //清除
        function clearItem(key) {
            localStorage.setItem(expirePrefix + key, +new Date());
        }

        return {
            setItem  : setItem,
            getItem  : getItem,
            clearItem: clearItem
        };
    })();


    //CommonJS
    if (typeof exports === 'object') {
        return module.exports = storage;
    }

    //添加到全局
    window.storage = storage;

})(window);