/*
 * jq.validate.js
 * 验证插件
 */
(function (window, $) {

    var $doc = $(document);


    $.validate = function (opts) {
        opts = $.extend({}, $.validate.defaults, opts);

        //配置项
        var $inputs = opts.$inputs,
            rsType = opts.rsType,
            $msg = opts.$msg,
            validated = opts.validated,
            unValidated = opts.unValidated,
            isShowMsg = opts.isShowMsg,
            isFocus = opts.isFocus;

        //验证不通过函数
        function onError(msg, $input) {
            //验证不通过回调
            typeof unValidated === 'function' && unValidated(msg);
            //显示验证信息
            isShowMsg && ($msg ? $msg.text(msg) : alert(msg));
            //焦点
            isFocus && $input[0].focus();
            $input.addClass('error');
        }

        var rs = rsType === 'object' ? {} : [];
        //遍历输入元素
        for (var i = 0, len = $inputs.length; i < len; i++) {
            var $input = $inputs.eq(i),
                inputEl = $input[0],
            //是否为表单元素
                isFormEl = /(select|input|textarea)/i.test(inputEl.tagName),
            //表单元素读取value属性,否则读取text
                value = isFormEl ? inputEl.value : $.trim($input.text()),
                type = inputEl.type,
                msg = $input.attr('data-msg'),
                field = inputEl.id || $input.attr('data-field');

            //非空验证(data-msg属性非空)
            if (msg && value === '') {
                return onError(msg + '不能为空', $input);
            }

            //手机验证
            if (type === 'tel') {
                var patrnTel = /^1[34578]\d{9}$/;
                if (!patrnTel.test(value)) {
                    return onError('手机格式无效', $input);
                }
            }

            //email验证
            if (type === 'email') {
                var patrnEmail = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/;
                if (!patrnEmail.test(value)) {
                    return onError('email格式无效', $input);
                }
            }

            //保存值
            rsType === 'object' ? field && (rs[field] = value) : rs.push(value);
        }
        //验证通过回调
        typeof validated === 'function' && validated(rs);

        return rs;
    };
    $.validate.defaults = {
        //输入元素
        $inputs    : null,
        //结果类型(默认为对象,否则为数组)
        rsType     : 'object',
        //显示信息元素
        $msg       : null,
        //验证通过回调
        validated  : null,
        //验证不通过回调
        unValidated: null,
        //是否显示提示信息
        isShowMsg  : true,
        //是否焦点(默认为移动端不焦点,pc端焦点)
        isFocus    : !/(iPhone|iPod|android)/i.test(navigator.userAgent)
    };


    $.fn.validate = function (opts) {
        opts = $.extend({}, $.fn.validate.defaults, opts);

        //配置项
        var btnOkSel = opts.btnOkSel,
            inputSel = opts.inputSel;

        //每个元素执行
        return this.each(function () {

            //变量
            var $this = $(this),
                $inputs = $this.find(inputSel).not('.not');

            //初始化函数
            function init() {

                //初始化事件
                initEvent();
            }

            //初始化事件函数
            function initEvent() {

                //确定点击
                $doc.on('click', btnOkSel, function () {
                    $.validate($.extend({}, opts, {
                        $inputs: $inputs
                    }));
                });
            }


            //初始化
            init();

        });
    };
    $.fn.validate.defaults = {
        //确定按钮选择器
        btnOkSel: '.btn_ok',
        //输入元素选择
        inputSel: 'input,select,textarea'
    };

})(window, $);