(function (window) {

    var cdls = (function () {
        var document = window.document,
            // message事件key
            GET_ALL_DATA_KEY = 'getAllData',
            SET_ITEM_KEY = 'setItem',
            REMOVE_ITEM_KEY = 'removeItem',
            CLEAR_KEY = 'clear',
            // visibilitychange事件相关key
            isNoPrefix = document.hidden !== undefined,
            hidden = isNoPrefix ? 'hidden' : 'webkitHidden',
            visibilitychange = isNoPrefix ? 'visibilitychange' : 'webkitvisibilitychange';

        return function (opts) {
            opts || (opts = {});

            var cdlsUrl = opts.cdlsUrl;
            if (!cdlsUrl) {
                return console.log('cdlsUrl不能为空');
            }

            var ifrEl,
                cdls = {
                    reloadData: reloadData,
                    allData: {},

                    getItem: getItem,
                    setItem: setItem,
                    removeItem: removeItem,
                    clear: clear
                };

            // 发送数据函数
            function postMessage(data) {
                ifrEl.contentWindow.postMessage(data, cdlsUrl);
            }

            // 刷新数据函数
            function reloadData() {
                postMessage({
                    id: GET_ALL_DATA_KEY
                });
            }

            // 获取项函数
            function getItem(key) {
                return cdls.allData[key] || null;
            }

            // 设置项函数
            function setItem(key, val) {
                // 发送更新数据信息
                postMessage({
                    id: SET_ITEM_KEY,
                    key: key,
                    val: val
                });

                // 同步allData中数据
                cdls.allData[key] = val;
            }

            // 移除项函数
            function removeItem(key) {
                // 发送更新数据信息
                postMessage({
                    id: REMOVE_ITEM_KEY,
                    key: key
                });

                // 同步allData中数据
                cdls.allData[key] = null;
            }

            // 删除所有
            function clear() {
                // 发送更新数据信息
                postMessage({
                    id: CLEAR_KEY
                });

                // 同步allData中数据
                cdls.allData = {};
            }


            // 初始化函数
            function init() {
                ifrEl = document.createElement('iframe');
                ifrEl.style.display = 'none';
                ifrEl.src = cdlsUrl;
                document.body.appendChild(ifrEl);

                initEvent();
            }

            // 初始化事件
            function initEvent() {
                // 收到信息事件
                window.addEventListener('message', function (evt) {
                    var data = evt.data;
                    if (data.id === GET_ALL_DATA_KEY) {
                        cdls.allData = data.data;

                        // ready
                        cdls.ready = true;

                        // success
                        var success = opts.success;
                        typeof success === 'function' && success(cdls.allData, cdls);
                    }
                }, false);

                // visibilitychange事件
                document.addEventListener(visibilitychange, function () {
                    // 页面重新显示时刷新ls
                    !document[hidden] && reloadData();
                }, false);
            }


            // 初始化
            init();

            return cdls;
        };
    })();


    if (typeof exports === 'object') {
        return moduels.exports = cdls;
    }

    window.cdls = cdls;

})(window);