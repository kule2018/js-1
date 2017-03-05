(function (window) {

    // 查询字符操作对象
    var query = (function () {
        var Object = window.Object,
            location = window.location,
            decodeURIComponent = window.decodeURIComponent,
            encodeURIComponent = window.encodeURIComponent,
            query = {
                queryData: parse(),
                getItem: getItem,
                parse: parse,
                stringify: stringify
            };

        // 获取项
        function getItem(key) {
            if (!key) {
                return;
            }
            return query.queryData[key];
        }

        // 查询字符转为对象
        function parse(str) {
            str || (str = location.search.slice(1));

            var rs = {};
            // 字符
            if (typeof str === 'string' && str) {
                str.split('&').forEach(function (item) {
                    var kv = item.split('='),
                        key = kv[0],
                        val = kv[1];
                    val !== undefined && (rs[key] = decodeURIComponent(val));
                });
            }
            return rs;
        }

        // 对象转为查询字符
        function stringify(obj) {
            return Object.keys(obj).map(function (key) {
                return key + '=' + encodeURIComponent(obj[key]);
            }).join('&');
        }

        return query;
    })();


    // CommonJS
    if (typeof exports === 'object') {
        return module.exports = query;
    }

    // 添加到全局
    window.query = query;

})(window);
