/**
 * 通用弹框
 */

(function () {
    // 初始化html
    var html = '<div id="pi-alert"><div class="pi-box">' +
        '<h2 class="pi-head"></h2><p class="pi-msg"></p><p>' +
        '<a class="pi-btn-ok"></a></p></div></div>' +
        '<div id="pi-confirm"><div class="pi-box">' +
        '<h2 class="pi-head"></h2><p class="pi-msg"></p><p>' +
        '<a class="pi-btn-cancel"></a><a class="pi-btn-ok"></a></p></div></div>';

    $(document.body).append(html);

    // 是否是微信
    var isWx = 0;// /MicroMessenger/gi.test(navigator.userAgent);

    // alert方法
    var alert = (function () {
        var $alert = $('#pi-alert'),
            $head = $alert.find('.pi-head'),
            $msg = $alert.find('.pi-msg'),
            $btnOk = $alert.find('.pi-btn-ok'),
            opts;

        // 打开
        function open() {
            // 打开窗口
            $alert.addClass('visible');

            // 响应事件
            var onOpen = opts.onOpen;
            typeof onOpen === 'function' && onOpen();
        }

        // 关闭
        function close() {
            // 关闭窗口
            $alert.removeClass('visible');

            // 响应事件
            var onClose = opts.onClose;
            typeof onClose === 'function' && onClose();
        }

        // 确定按钮点击
        $alert.on('click', '.pi-btn-ok', function () {
            // disabled时,不响应
            if ($btnOk.hasClass('disabled')) {
                return;
            }

            // 关闭
            close();

            // 响应事件放在靠后
            var btnOkClick = opts.btnOkClick;
            typeof btnOkClick === 'function' && btnOkClick();
        }).on('click', function (evt) {
            // 点击背景时关闭窗口
            opts.isHideOnBgClick && $(evt.target).closest('.pi-box').length === 0 && close();
        });

        return function (options) {
            // 配置项
            typeof options !== 'object' && (options = {
                msg: options
            });
            opts = $.extend({}, alert.defaults, options);

            // 初始化tag
            $alert.attr('data-pi-tag', opts.tag);
            // 显示内容
            $head.html(opts.head);
            $msg.html(opts.msg);
            $btnOk.text(opts.okTxt);

            // 打开 如果是微信,需要延时,因为微信的点击事件有bug,会误触发alert容器的点击事件
            isWx ? setTimeout(open, 300) : open();
        };
    })();
    alert.defaults = {
        head: '提示',
        msg: '内容',
        okTxt: '确定',
        // 是否在点击背景时隐藏
        isHideOnBgClick: true
    };


    // confirm方法
    var confirm = (function () {
        var $confirm = $('#pi-confirm'),
            $head = $confirm.find('.pi-head'),
            $msg = $confirm.find('.pi-msg'),
            $btnOk = $confirm.find('.pi-btn-ok'),
            $btnCancel = $confirm.find('.pi-btn-cancel'),
            opts;

        // 打开
        function open() {
            // 打开窗口
            $confirm.addClass('visible');

            // 响应事件
            var onOpen = opts.onOpen;
            typeof onOpen === 'function' && onOpen();
        }

        // 关闭
        function close() {
            // 关闭窗口
            $confirm.removeClass('visible');

            // 响应事件
            var onClose = opts.onClose;
            typeof onClose === 'function' && onClose();
        }

        // 确定和取消按钮点击
        $confirm.on('click', '.pi-btn-ok', function () {
            // disabled时,不响应
            if ($btnOk.hasClass('disabled')) {
                return;
            }

            // 关闭
            close();

            // 响应事件放在靠后
            var btnOkClick = opts.btnOkClick;
            typeof btnOkClick === 'function' && btnOkClick();
        }).on('click', '.pi-btn-cancel', function () {
            // 关闭
            close();

            // 响应事件放在靠后
            var btnCancelClick = opts.btnCancelClick;
            typeof btnCancelClick === 'function' && btnCancelClick();
        }).on('click', function (evt) {
            // 点击背景时关闭窗口
            opts.isHideOnBgClick && $(evt.target).closest('.pi-box').length === 0 && close();
        });

        return function (options) {
            // 配置项
            typeof options !== 'object' && (options = {
                msg: options
            });
            // 配置项
            opts = $.extend({}, confirm.defaults, options);

            // 设置内容
            $head.html(opts.head);
            $msg.html(opts.msg);
            $btnOk.text(opts.okTxt);
            $btnCancel.text(opts.cancelTxt);

            // 打开 如果是微信,需要延时,因为微信的点击事件有bug,会误触发confirm容器的点击事件
            isWx ? setTimeout(open, 300) : open();
        };
    })();
    confirm.defaults = $.extend({}, alert.defaults, {
        cancelTxt: '取消'
    });


    // 导出对象
    window._alert = {
        alert: alert,
        confirm: confirm
    };
})();
