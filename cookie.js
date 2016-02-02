(function (window) {

    //cookie操作对象
    var cookie = (function () {

        var document = window.document,
            Date = window.Date;

        //设置
        function setItem(key, val, days, hours) {
            var str = key + '=' + encodeURIComponent(val);

            var date = new Date();
            if (typeof  days === 'number') {
                date.setDate(date.getDate() + days);
                str += ';expires=' + date.toUTCString();
            }
            else if (typeof  hours === 'number') {
                date.setHours(date.getHours() + hours);
                str += ';expires=' + date.toUTCString();
            }
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
        function clearItem(key) {
            var date = new Date();
            document.cookie = key + '=_;expires=' + date.toUTCString();
        }

        return {
            setItem  : setItem,
            getItem  : getItem,
            clearItem: clearItem
        };
    })();


    //CommonJS
    if (typeof exports === 'object') {
        module.exports = cookie;
        return;
    }

    //添加到全局
    window.cookie = cookie;

})(window);