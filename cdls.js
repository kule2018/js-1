(function (window) {

    var cdls = (function () {
        var document = window.document, ifrEl,
            isNoPrefix = document.hidden !== undefined,
            hidden = isNoPrefix ? 'hidden' : 'webkitHidden',
            visibilitychange = isNoPrefix ? 'visibilitychange' : 'webkitvisibilitychange';

        return function (opts) {
            opts || (opts = {});

            var cdls = {
                getItem: getItem,
                refreshLs: refreshLs
            };

            // 收到信息事件
            window.addEventListener('message', function (evt) {
                var data = evt.data;
                if (data.id === 'cdls') {
                    cdls.lsData = data.data;
                }
            }, false);

            // 刷新ls函数
            function refreshLs() {
                if (!ifrEl) {
                    ifrEl = document.createElement('iframe');
                    ifrEl.style.display = 'none';
                    document.body.appendChild(ifrEl);
                }
                ifrEl.src = opts.cdlsUrl;
            }

            // 刷新数据
            refreshLs();

            // 获取项函数
            function getItem(key) {
                return cdls.lsData[key];
            }

            // visibilitychange事件
            document.addEventListener(visibilitychange, function () {
                // 页面重新显示时刷新ls
                document[hidden] && refreshLs();
            });

            return cdls;
        };
    })();
    

    if (typeof exports === 'object') {
        return moduels.exports = cdls;
    }

    window.cdls = cdls;

})(window);