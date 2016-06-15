(function (window) {

    //cookie操作对象
    var cookie = (function () {

        var document = window.document,
            toString = {}.toString,
            Date = window.Date;

        /**
         * 设置cookie函数
         * @param {string} key 键
         * @param {string} val 值
         * @param {Date|number} days 过期时间|过期天数
         * @param {number} hours 过期小时数
         */
        function setItem(key, val, days, hours) {
            var str = key + '=' + encodeURIComponent(val);

            var expire;
            //days参数是一个日期
            if (toString.call(days) === '[object Date]') {
                expire = days;
            }
            //过期天数
            else if (typeof  days === 'number') {
                expire = new Date();
                expire.setDate(expire.getDate() + days);
            }
            //过期小时数
            else if (typeof  hours === 'number') {
                expire = new Date();
                expire.setHours(expire.getHours() + hours);
            }

            expire && (str += ';expires=' + expire.toUTCString());
            document.cookie = str;
        }

        //获取
        function getItem(key) {
            var cookie = document.cookie,
                index = cookie.indexOf(key + '=');

            if (index !== -1) {
                var start = index + key.length + 1,
                    end = cookie.indexOf(';', start);

                //最后一个
                end === -1 && (end = cookie.length);
                return decodeURIComponent(cookie.slice(start, end));
            }
        }

        //清除
        function removeItem(key) {
            document.cookie = key + '=_;expires=' + new Date().toUTCString();
        }

        return {
            setItem   : setItem,
            getItem   : getItem,
            removeItem: removeItem
        };
    })();


    //CommonJS
    if (typeof exports === 'object') {
        return module.exports = cookie;
    }

    //添加到全局
    window.cookie = cookie;

})(window);