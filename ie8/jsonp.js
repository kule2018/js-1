(function (window) {

    //跨域请求对象
    var jsonp = (function () {

        var document = window.document,
            bodyEl = document.body,
            JSON = window.JSON,
            //低于IE8
            isLteIE8 = !window.addEventListener;

        //获取uid函数
        var getUid = (function () {
            var uid = 0;
            return function () {
                return ++uid;
            }
        })();

        //加载js函数
        var getScript = (function () {
            var headEl = document.getElementsByTagName('head')[0];

            return function (url, fn) {
                var isJs = /(\.js)$/.test(url),
                    scriptEl = document.createElement('script');

                //type
                scriptEl.type = 'text/javascript';

                //onload
                if (isLteIE8) {
                    scriptEl.onreadystatechange = function () {
                        if (scriptEl.readyState === 'loaded' || scriptEl.readyState === 'complete') {
                            scriptEl.onreadystatechange = null;

                            typeof fn === 'function' && fn();
                            !isJs && scriptEl.parentNode.removeChild(scriptEl);
                        }
                    };
                }
                else {
                    scriptEl.onload = function () {
                        typeof fn === 'function' && fn();
                        !isJs && scriptEl.parentNode.removeChild(scriptEl);
                    };
                }

                //请求
                scriptEl.src = url;
                headEl.appendChild(scriptEl);
            };
        })();

        //对象转查询字符串函数
        function obj2str(obj) {
            var array = [];
            for (var p in obj) {
                array.push(p + '=' + encodeURIComponent(obj[p]));
            }
            return array.join('&');
        }

        //扩展函数
        var extend = (function () {
            var tmpArray = [],
                forEach = tmpArray.forEach,
                slice = tmpArray.slice;

            return function (obj) {
                //$.extend({}, defaults[, obj])
                forEach.call(slice.call(arguments, 1), function (item) {
                    for (var p in item) {
                        obj[p] = item[p];
                    }
                });
                return obj;
            };
        })();

        //回调函数
        function callback(rs, opts) {
            //回调函数
            var cb = opts.callback;
            typeof cb === 'function' && cb(rs);

            //成功或失败回调函数
            var success = opts.success,
                error = opts.error;
            rs.status === 200 ? typeof success === 'function' && success(rs.data) : typeof error === 'function' && error(rs.msg);
        }


        //get数据函数
        function get(opts) {
            opts = extend({}, get.defaults, opts);

            var cbName = 'jsonpcb' + getUid();

            //将回调函数添加到全局变量
            window[cbName] = function (rs) {
                //回调
                callback(rs, opts);

                //释放回调函数
                window[cbName] = null;
            };

            //url中添加callback
            var url = opts.url;
            url += (url.indexOf('?') === -1 ? '?' : '&') + 'callback=' + cbName;

            //拼接data
            var data = opts.data;
            data && (url += '&' + obj2str(data));

            getScript(url);
        }

        //get数据默认配置项
        get.defaults = {};


        //push数据函数
        var push = (function () {
            //回调函数对象
            var msgcb = {};

            //消息函数
            function onMsg(evt) {
                var data = JSON.parse(evt.data);
                msgcb[data.id](data.rs);
            }

            //绑定消息事件
            isLteIE8 ? window.attachEvent('onmessage', onMsg) : window.addEventListener('message', onMsg, false);

            return function (opts) {
                opts = extend({}, push.defaults, opts);

                //iframe
                var ifrId = 'jsonpifr' + getUid(), ifrEl,
                    tmpEl = document.createElement('div');
                tmpEl.innerHTML = '<iframe id="' + ifrId + '" name="' + ifrId + '" style="display: none;"></iframe>';
                ifrEl = tmpEl.childNodes[0];
                bodyEl.appendChild(ifrEl);

                //响应函数
                msgcb[ifrId] = function (rs) {
                    //回调
                    callback(JSON.parse(rs), opts);

                    //释放回调函数
                    msgcb[ifrId] = null;

                    //删除节点
                    bodyEl.removeChild(ifrEl);
                    !formId && bodyEl.removeChild(formEl);
                };

                //form
                var formId = opts.formId, formEl;
                //带file的form提交
                if (formId) {
                    formEl = document.getElementById(formId);
                    formEl.enctype = 'multipart/form-data';
                }
                else {
                    formEl = document.createElement('form');
                    formEl.style.display = 'none';
                }
                var url = opts.url;
                formEl.action = url + (url.indexOf('?') !== -1 ? '&' : '?') + 'jsonp=' + ifrId;
                formEl.method = opts.method;
                formEl.target = ifrId;
                //遍历data,加到form
                var data = opts.data;
                for (var p in data) {
                    var inputEl = document.createElement('input');

                    inputEl.type = 'hidden';
                    inputEl.name = p;
                    inputEl.value = data[p];
                    formEl.appendChild(inputEl);
                }

                //提交
                !formId && bodyEl.appendChild(formEl);
                formEl.submit();
            };

        })();

        //push数据默认配置项
        push.defaults = {
            method: 'POST'
        };


        return {
            getScript: getScript,
            get: get,
            push: push
        };

    })();


    //CommonJS
    if (typeof exports === 'object') {
        return module.exports = jsonp;
    }

    //添加到全局
    window.jsonp = jsonp;

})(window);