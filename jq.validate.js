/*
 * jq.validate.js
 * 验证插件
 */
(function (window, $) {

    var $doc = $(document);

    //格式验证对象
    var patrn = {
        tel   : {
            txt: '手机',
            reg: /(^1[34578]\d{9}$)|(^(([0\+]\d{2,3})?(0\d{2,3}))(\d{7,8})(-(\d{3,}))?$)/
        },
        email : {
            txt: '邮箱',
            reg: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/
        },
        idcard: {
            txt: '身份证',
            reg: /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{4}$/
        }
    };


    $.validate = function (opts) {
        opts = $.extend({}, $.validate.defaults, opts);

        //配置项
        var $inputs = opts.$inputs,
            rsType = opts.rsType,
            $msg = opts.$msg,
            validated = opts.validated,
            unValidated = opts.unValidated,
            isShowMsg = opts.isShowMsg,
            fieldNullable = opts.fieldNullable,
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

        var rs, isRsObj = rsType === 'object';
        //遍历输入元素
        for (var i = 0, len = $inputs.length; i < len; i++) {
            var $input = $inputs.eq(i),
                inputEl = $input[0],
            //优先读取data-value属性,否则表单元素读取value属性,否则读取text
                value = $input.filter('[data-value]').length > 0 ? $input.attr('data-value') : (isFormEl(inputEl) ? inputEl.value : $input.text()),
                type = $input.attr('type'),
                msg = $input.attr('data-msg'),
                field = inputEl.id || $input.attr('data-field');

            //重置输入框样式
            $input.removeClass('error');

            //非空验证(data-msg属性非空)
            if (msg && value === '') {
                return onError(msg + '不能为空', $input);
            }

            //格式验证
            var ptn = patrn[type];
            if (ptn && !ptn.reg.test(value)) {
                return onError(ptn.txt + '格式无效', $input);
            }

            //如果字段不能为空时,值为空就跳过保存值
            if (!fieldNullable && value === '') {
                continue;
            }
            //保存值
            rs || (rs = isRsObj ? {} : []);
            isRsObj ? field && (rs[field] = value) : rs.push(value);
        }
        //验证通过回调
        typeof validated === 'function' && validated(rs);

        return rs;
    };
    $.validate.defaults = {
        //输入元素
        $inputs      : null,
        //结果类型(默认为对象,否则为数组)
        rsType       : 'object',
        //显示信息元素
        $msg         : null,
        //验证通过回调
        validated    : null,
        //验证不通过回调
        unValidated  : null,
        //是否显示提示信息
        isShowMsg    : true,
        //字段可为空
        fieldNullable: true,
        //是否焦点(默认为移动端不焦点,pc端焦点)
        isFocus      : !/(iPhone|iPod|android)/i.test(navigator.userAgent)
    };
    //判断是否为表单元素函数
    var isFormEl = $.validate.isFormEl = function (el) {
        return /(select|input|textarea)/i.test(el.tagName);
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