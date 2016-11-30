(function (window) {

    //参数操作对象
    var query = (function () {
        var encodeURIComponent = window.encodeURIComponent,
            decodeURIComponent = window.decodeURIComponent,
            search = location.search.slice(1);

        //将对象转为参数字符函数
        function stringify(obj, isNotnull) {
            if (typeof obj !== 'object') return;

            var array = [];
            for (var p in obj) {
                var val = obj[p],
                    kvStr = p + '=' + encodeURIComponent(val);

                //是否只拼接非空
                isNotnull ? val && array.push(kvStr) : array.push(kvStr);
            }
            return array.join('&');
        }

        //将参数字符转为对象函数
        function parse(qstr) {
            if (typeof qstr !== 'string' || qstr.length === 0) return;

            var obj = {},
                kvs = qstr.split('&');
            for (var i = 0, len = kvs.length; i < len; i++) {
                var kv = kvs[i].split('=');
                obj[kv[0]] = decodeURIComponent(kv[1]);
            }
            return obj;
        }

        //获取参数函数
        function getItem(key, queryStr) {
            var obj = parse(queryStr || search);
            return obj && obj[key];
        }

        return {
            stringify: stringify,
            parse: parse,
            getItem: getItem
        };
    })();


    //CommonJS
    if (typeof exports === 'object') {
        return module.exports = query;
    }

    //添加到全局
    window.query = query;

})(window);


// 查询字符操作对象
/*
var query = (function() {
    var Object = window.Object,
        decodeURIComponent = window.decodeURIComponent,
        encodeURIComponent = window.encodeURIComponent;

    // 查询字符转为对象
    function parse(str) {
        str || (str = location.search.slice(1));
        if (str) {
            var rs = {};
            str.split('&').forEach(function(item) {
                var kvs = item.split('=');
                rs[kvs[0]] = decodeURIComponent(kvs[1]);
            });
            return rs;
        }
        return null;
    }

    // 对象转为查询字符
    function stringify(obj) {
        Object.keys(obj).map(function(key) {
            return key + '=' + encodeURIComponent(obj[key]);
        }).join('&');
    }

    return {
        parse: parse,
        stringify: stringify
    };
})();*/
