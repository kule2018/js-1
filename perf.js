(function (window) {

    var perf = (function () {

        //打印函数
        function logPerfInfo(fn, times, start, end, msgEl) {
            var fnStr = fn + '';

            fnStr = fnStr.slice(fnStr.indexOf('{') + 1);
            fnStr = fnStr.slice(0, fnStr.length - 1);

            var logStr = fnStr + ' 运行' + times + '次时长：' + (end - start).toFixed(2) + 'ms';
            msgEl ? msgEl.textContent += logStr + '\n' : console.log(logStr);
        }

        //支持performance
        var performance = window.performance;
        if (performance) {
            var mark = performance.mark || performance.webkitMark || performance.msMark || performance.mozMark;

            //支持performance.mark
            if (mark) {
                var getEntriesByName = performance.getEntriesByName || performance.webkitGetEntriesByName || performance.msGetEntriesByName || performance.mozGetEntriesByName;

                return function (fn, times, msgEl) {
                    //默认运行100万次
                    times || (times = 999999);

                    var rand = Date.now();

                    //开始时间
                    mark.call(performance, 'start' + rand);
                    for (var i = 0; i < times; i++) {
                        fn();
                    }
                    //结束时间
                    mark.call(performance, 'end' + rand);

                    var start = getEntriesByName.call(performance, 'start' + rand)[0].startTime,
                        end = getEntriesByName.call(performance, 'end' + rand)[0].startTime;

                    logPerfInfo(fn, times, start, end, msgEl);
                };
            }
        }

        //不支持performance.mark
        return function (fn, times, msgEl) {
            //默认运行100万次
            times || (times = 999999);

            //开始时间
            var start = +new Date;
            for (var i = 0; i < times; i++) {
                fn();
            }
            //结束时间
            var end = +new Date;

            logPerfInfo(fn, times, start, end, msgEl);
        };

    })();


    //CommonJS
    if (typeof exports === 'object') {
        return module.exports = perf;
    }

    window.perf = perf;

})(window);