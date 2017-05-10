webpackJsonp([1], [, , , , , , , , , , , function(e, t, i) {
  var n = i(12);
  "string" == typeof n && (n = [[e.id, n, ""]]);
  i(90)(n, {});
  n.locals && (e.exports = n.locals)
}
  , function(e, t, i) {
    t = e.exports = i(13)(),
      t.i(i(14), ""),
      t.i(i(15), ""),
      t.i(i(16), ""),
      t.i(i(23), ""),
      t.i(i(24), ""),
      t.i(i(32), ""),
      t.i(i(37), ""),
      t.i(i(49), ""),
      t.i(i(52), ""),
      t.i(i(57), ""),
      t.i(i(59), ""),
      t.i(i(63), ""),
      t.i(i(69), ""),
      t.i(i(73), ""),
      t.i(i(74), ""),
      t.push([e.id, "", ""])
  }
  , function(e, t) {
    e.exports = function() {
      var e = [];
      return e.toString = function() {
        for (var e = [], t = 0; t < this.length; t++) {
          var i = this[t];
          i[2] ? e.push("@media " + i[2] + "{" + i[1] + "}") : e.push(i[1])
        }
        return e.join("")
      }
        ,
        e.i = function(t, i) {
          "string" == typeof t && (t = [[null, t, ""]]);
          for (var n = {}, a = 0; a < this.length; a++) {
            var o = this[a][0];
            "number" == typeof o && (n[o] = !0)
          }
          for (a = 0; a < t.length; a++) {
            var r = t[a];
            "number" == typeof r[0] && n[r[0]] || (i && !r[2] ? r[2] = i : i && (r[2] = "(" + r[2] + ") and (" + i + ")"),
              e.push(r))
          }
        }
        ,
        e
    }
  }
  , function(e, t, i) {
    t = e.exports = i(13)(),
      t.push([e.id, "", ""])
  }
  , function(e, t, i) {
    t = e.exports = i(13)(),
      t.push([e.id, '#pi-alert,#pi-confirm{position:fixed;top:-200px;bottom:-200px;width:100%;background:rgba(0,0,0,.5);z-index:9999;color:#999;-webkit-transition:all .3s ease;transition:all .3s ease;visibility:hidden;opacity:0}#pi-alert.visible,#pi-confirm.visible{visibility:visible;opacity:1}#pi-alert.visible .pi-box,#pi-confirm.visible .pi-box{-webkit-transform:none;transform:none}#pi-alert .pi-box,#pi-confirm .pi-box{position:fixed;left:50%;top:50%;width:290px;margin-left:-145px;margin-top:-120px;text-align:center;border-radius:8px;background:#fff;overflow:hidden;-webkit-transition:-webkit-transform .3s ease;transition:transform .3s ease;-webkit-transform:scale3d(1.2,1.2,1);transform:scale3d(1.2,1.2,1)}#pi-alert .pi-head,#pi-confirm .pi-head{font-size:18px;color:#333;padding-top:15px}#pi-alert .pi-msg,#pi-confirm .pi-msg{padding:15px 25px;line-height:1.5;position:relative}#pi-alert .pi-msg:after,#pi-confirm .pi-msg:after{content:"";position:absolute;left:15px;right:15px;height:1px;bottom:0;background:#eee;-webkit-transform:scaleY(.5);transform:scaleY(.5)}#pi-alert [class^=pi-btn],#pi-confirm [class^=pi-btn]{display:inline-block;width:40%;margin:10px 5px;line-height:1.6}#pi-alert .pi-btn-ok,#pi-confirm .pi-btn-ok{color:#09f}#pi-alert .pi-btn-ok{width:85%}', ""])
  }
  , function(e, t, i) {
    t = e.exports = i(13)(),
      t.i(i(17), ""),
      t.i(i(18), ""),
      t.push([e.id, '.commentsWrap{margin-bottom:20px;padding:0 15px;font-size:14px}.main-comment{position:relative}.commentsWrap .sub-title{position:relative;margin:0 0 18px;padding-top:70px}.commentsWrap .sub-title .title-text{font-size:17px;color:#333;line-height:16px;padding-left:8px;font-weight:700;text-align:center;letter-spacing:7px}.commentsWrap .sub-hot-title{height:30px}.commentsWrap .sub-hot-title:before{content:" ";display:block;width:35px;height:4px;background:#333;position:absolute;left:50%;bottom:0;margin-left:-17px}.commentsWrap .title-tab{text-align:center;margin-top:12px;color:#bbb;letter-spacing:4px}.commentsWrap .title-tab>div{display:inline-block;vertical-align:middle}.commentsWrap .title-tab .child-tab{text-indent:4px}.commentsWrap .title-tab .child-tab.current{color:#333}.commentsWrap .title-tab .child-tab.tabDisable{color:#bbb}.commentsWrap .title-tab .child-tab-apart{content:"";display:inline-block;width:3px;height:12px;background:#333;vertical-align:middle;-webkit-transform:skewX(-30deg);transform:skewX(-30deg)}.commentsWrap .title-tab .child-tab-apart.tabDisable{opacity:.3}.mycomment-list .myCommentBtnUp,.mycomment-list>li{display:none}.mycomment-list.on>li,.mycomment-list>li:first-of-type{display:list-item}.mycomment-list.on .myCommentBtnUp{display:inline-block}.mycomment-list.on .myCommentBtnDown{display:none}.myCommentBtn{line-height:30px;color:#999;text-align:center}.myCommentBtn>div{position:relative;width:50px;display:inline-block}.myCommentBtnDown:after,.myCommentBtnDown:before{border:5px solid transparent;border-top:6px solid #f9f9f9;width:0;height:0;position:absolute;bottom:9px;right:-7px;content:" "}.myCommentBtnDown:before{border-top-color:#999;right:-7px;bottom:7px}.myCommentBtnUp:after,.myCommentBtnUp:before{border:5px solid transparent;border-bottom:6px solid #f9f9f9;width:0;height:0;position:absolute;bottom:11px;right:-7px;content:" "}.myCommentBtnUp:before{border-bottom-color:#999;right:-7px;bottom:13px}.maincomment-list:after,.maincomment-list:before{display:block;text-align:center;color:#bbb;font-size:12px}.maincomment-list.tab-loading:before{content:"\\6B63\\5728\\52A0\\8F7D\\4E2D...";padding:120px 0 400px}.maincomment-list:after{content:"\\52A0\\8F7D\\4E2D...";line-height:40px;visibility:hidden}.maincomment-list.more-loading:after{visibility:visible}.inner-app .maincomment-list:after,.page-share .maincomment-list:after{display:none!important}.commentsWrap .comment-list-li{padding:15px 0 12px;position:relative;padding-left:39px;-webkit-transition:all .3s ease;transition:all .3s ease}.commentsWrap .comment-list-li.hidden{opacity:0;height:0;padding:0;overflow:hidden}.commentsWrap .comment-list-li:after{content:"";position:absolute;height:1px;bottom:0;right:0;left:39px;background:#eee;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.commentsWrap .userInfoBody{color:#bbb;position:relative}.commentsWrap .userImg{position:absolute;left:0;width:30px;height:30px;border-radius:50%;box-shadow:0 0 1px rgba(0,0,0,.3)}.commentsWrap .userName{line-height:16px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-right:90px}.commentsWrap .dateAndLocate{font-size:12px;padding-top:3px}.commentsWrap .agree-wrap{float:right;color:#999;line-height:32px;font-size:12px}.commentsWrap .agree-wrap>:not(div){float:left}.commentsWrap .agree-wrap>span:after{content:"";margin:7px 0 0 5px;float:right;height:18px;width:18px;background-size:100% 100%}.commentsWrap .agreeCnt{position:relative}.commentsWrap .agreeCnt:before{content:attr(data-cnt)}.commentsWrap .agreeCnt:after{background-image:url(' + i(20) + ")}.commentsWrap .agreeCnt .agreeAnimate{position:absolute;right:-15px;top:-6px;color:#f1635e;opacity:0}.commentsWrap .agreeAnimating .agreeAnimate{-webkit-animation:agreeNum 1s forwards ease-in-out;animation:agreeNum 1s forwards ease-in-out}@-webkit-keyframes agreeNum{0%{opacity:1}to{-webkit-transform:translate3d(0,-8px,0);opacity:0}}@keyframes agreeNum{0%{opacity:1}to{transform:translate3d(0,-8px,0);opacity:0}}.commentsWrap .agreeCnt.hadAgreeCnt{color:#f1635e}.commentsWrap .agreeCnt.hadAgreeCnt:after{background-image:url(" + i(21) + ')}.comment-more-opener{width:32px;line-height:32px;margin-left:8px;text-align:center;font-family:Arial;font-weight:700}.inner-app .comment-more-opener,.page-share .comment-more-opener{display:none!important}.comment-more-opener:before{content:"\\B7   \\B7   \\B7"}.comment-more{position:absolute;right:0;top:-28px;line-height:28px;color:#fff;background:#333;font-size:12px;border-radius:8px;display:table;white-space:nowrap;-webkit-transition:all .3s ease;transition:all .3s ease;visibility:hidden;opacity:0;-webkit-transform:translate3d(0,-3px,0);transform:translate3d(0,-3px,0)}.comment-more.visible{visibility:visible;opacity:1;-webkit-transform:none;transform:none}.comment-more:before{content:"";position:absolute;right:13px;bottom:-3px;width:6px;height:6px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:#333}.comment-more>a{display:table-cell;padding:0 14px;position:relative}.comment-more>a:not(:first-of-type):before{content:"";position:absolute;left:0;top:5px;bottom:5px;width:1px;background:hsla(0,0%,100%,.2);-webkit-transform:scaleX(.5);transform:scaleX(.5)}.commentsWrap .commentTextObj{line-height:160%;table-layout:fixed;word-break:break-all;overflow:hidden;font-size:16px;margin-top:7px;position:relative;max-height:8em}.commentsWrap .commentTextObj>p{white-space:pre-wrap}.commentsWrap .commentTextObj .showAllTheComment{display:none;position:absolute;right:0;bottom:4px;color:#bbb;font-size:13px;line-height:180%;border-radius:.9em;background:#fff;padding:0 10px}.commentsWrap .commentTextObj.expandable .showAllTheComment{display:inline-block!important}.commentsWrap .commentTextObj.expanded{max-height:none!important}.commentsWrap .commentTextObj.expanded .showAllTheComment{display:none!important}.commentsWrap .commentReply{padding-left:14px;margin-top:8px;font-size:13px;position:relative}.commentsWrap .commentReply:before{content:"";position:absolute;left:0;width:3px;top:0;bottom:6px;background:#eee}.commentsWrap .commentReplyList>li{padding-top:14px}.commentsWrap .commentReplyList>li:first-child{padding-top:0}.commentsWrap .commentReply .replyName{color:#bbb;display:block}.commentsWrap .commentReply .commentTextObj{font-size:15px;max-height:3.2em}.commentsWrap .commentReply .commentTextObj .showAllTheComment{bottom:1px}.commentsWrap .comment-detail-link{color:#bbb;margin-top:5px}.commentsWrap .comment-detail-link:after{content:"";display:inline-block;width:7px;height:7px;box-shadow:1px 1px 0 0 #bbb;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);position:relative;top:-1px}.commentsWrap .comment-detail-link .commentsCnt:before{content:attr(data-cnt)}.commentsWrap .sofa{padding-top:6px;display:block;margin:0 auto;width:152px;text-align:center;margin-top:11px;font-size:13px;color:#333;padding-bottom:20px}.commentsWrap .sofa:active{opacity:.6}.inner-app .commentsWrap .sofa,.page-share .commentsWrap .sofa{display:none!important}.commentsWrap .sofa:before{content:"";display:block;margin:0 auto;width:124px;height:57px;margin-bottom:15px;background:url(' + i(22) + ");background-size:100% 100%}.comment-footer{position:absolute;bottom:0;left:0;width:100%;text-align:center;line-height:40px;color:#aaa;font-size:12px}.inner-app .maincomment-list:after,.page-share .comment-footer{display:none!important}.report-reason{font-size:13px;line-height:260%;margin:0 -15px}.report-reason>a{display:inline-block;width:80px;margin:3px;border-radius:2.6em;border:1px solid #eee}.report-reason>a.selected{color:#09f;border-color:#09f}#pi-alert .pi-btn-ok.disabled{color:#bbb}", ""])
  }
  , function(e, t, i) {
    t = e.exports = i(13)(),
      t.push([e.id, ".comment-more.UCTransparentMode{background:#333!important}.agreeCnt.UCTransparentMode:not(.hadAgreeCnt):before,.comment-detail-link.UCTransparentMode,.commentsCnt.UCTransparentMode:before,.dateAndLocate.UCTransparentMode,.replyName.UCTransparentMode,.userName.UCTransparentMode{opacity:.5!important}.showAllTheComment.UCTransparentMode{background:#333!important;color:#999!important}", ""])
  }
  , function(e, t, i) {
    t = e.exports = i(13)(),
      t.push([e.id, "div.comment-more.UCUNNIC.UCUNNIC_Done:not(.UCNightMode_transparentBkg){background-color:#000!important}.comment-detail-link.UCUNNIC,.dateAndLocate.UCUNNIC,.replyName.UCUNNIC,.showAllTheComment.UCUNNIC,.userName.UCUNNIC{color:#888!important}.comment-more-opener.UCUNNIC{color:#fff!important}.agreeCnt.UCUNNIC:after,.commentsWrap .agreeCnt.UCUNNIC:after{background-image:url(" + i(19) + ")}", ""])
  }
  , function(e, t, i) {
    e.exports = i.p + "e56eb1cafd3b4608f6629b4f09b95ef8.png"
  }
  , function(e, t, i) {
    e.exports = i.p + "b460a1a597f4438bda3283a3da2e67d1.png"
  }
  , function(e, t, i) {
    e.exports = i.p + "3e7bdcdf0e8b50c3bfcd200d3f96cc2d.png"
  }
  , function(e, t, i) {
    e.exports = i.p + "3afe18bf7f6624cbb8bdd9dbbe799a0b.png"
  }
  , function(e, t, i) {
    t = e.exports = i(13)(),
      t.push([e.id, '.tags{padding:0 15px;margin-top:20px;font-size:16px}.tags .tag-name:after,.tags .tag-name:before{content:"#"}.event-tag-info{padding-top:20px;position:relative}.event-tag-info:before{content:"";position:absolute;top:0;left:0;right:0;border-top:1px solid #eee;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.event-tag-info .tag{display:block}.event-tag-info .tag:active{opacity:.8}.event-tag-info .img{width:100px;height:65px;float:left;margin-right:10px;vertical-align:top}.event-tag-info .summary{color:#bbb;font-size:12px;line-height:150%;height:3em;padding-top:5px;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.query-tags{margin:20px 0;height:1.85em;overflow:hidden;font-size:14px;line-height:185%}.query-tags .tag{position:relative;display:inline-block;color:#333;letter-spacing:2px;padding:0 13px;margin:0 10px 2px 0}.query-tags .tag:before{content:"";position:absolute;left:0;top:0;width:200%;height:200%;box-sizing:border-box;border:1px solid #e2e2e2;border-radius:6px;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5);transform:scale(.5);z-index:-1}.query-tags .tag:active:before{background:#eee}', ""])
  }
  , function(e, t, i) {
    t = e.exports = i(13)(),
      t.push([e.id, ".night,.night section .media_info .sub-title,.night section a.visited h3{color:#373737}.night .ad_label,.night .item_info,.night .subject_label,.night section .media_info .desc,.night section .media_info .text{color:#505050}.night .list_content{background:#111}.night .list_img_holder,.night .list_img_holder_large,.night section .media_avatar,.night section .section_title{opacity:.5}.night #search highlight{color:#935656!important}.night .subject_label{background-color:#935656}.night section .arrow,.night section .channel_link{background:url(" + i(25) + ") no-repeat 100%;background-size:21px}.night .list_action{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAYCAYAAACfpi8JAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAdhJREFUeNrElrlKA1EUhidjjIUECxsXBMFCH8AdA0GwVGfcwAcQbWy00gfIKwgqYqtRJqKtC0QtRBFcQMFCXLDW2BiR+B/5B0IywczNMgc+JszMPeefk3v/e32GYWgOEQAG6QENvKcSn+AFXAIL7ICk/dCyrL+r7jDQBLdgGhyBARAEPkVqwSBzzTD3SGZRf9rvChABQ2CKA4sR8vUPZBmEwRLoAovgJ7MjIqKbLxRLhFNI7k7Widg3bSFjYJjd+NBKHwm7nmmaUlvzYbIG2LZJcKKQNM5rSGFsL9gALTJHxsG9ogiJvgI6cwruwITOJbqpeRdS2xAhHeDQQyEHoF2E1IEnD4U8g3oRUpXudOUOOKvUDuguV0fKATucnsXzTa6X+IN9+b7od5E0l0+k3BbN1ZEENzVPAs4qhpoUIW+g0cNV0yQaRMiVoj0XK/rBuQiJicV6KERqx0RIFLRyA1KJ4wL2KTn9tYkGP81sHqzywbvLZKp/aw1YA3MwtS/bR6QrezxPlmMFBVlrFyKimYa2AK7BGY9zpYowa9ywZpahydlxFoyCFfDILXqfG9O3YuFqLtEQJ2YzBWz956zb0jIemEwecMVnKhWFyAe8gguwzmmQtcn+CjAAXWttjlwasRIAAAAASUVORK5CYII=) no-repeat 100% 100%;background-size:17px}.night section .list_action{background-position:23px 28px}.night .item_info .cmt{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAATlJREFUeNpi/P//PwMtARMDjQELMicwMFAVSHUAsQsQ85Fh3icg3gPEFevXr78NEmCEBRHQcHUgdQiIW4F4CVDBO1JNB5ohBKRigLgaiO2AZtxkAFkAwgEBAWuBOB/GpwQDzSkHmQdiI8cBKFgWUynoZwOxG5iFZOt/arge3TyapyL6JlO0FAFKTXlAPAmYGqpJESPWByVAzAPVTKoYURb0APFXkMvIEEOA0VREigWfoGUJxQBqzhd0C0ClYCyVHJ4CxLvQ8wEoDR8E2g4qXhcD0/R7MlwuCHVkMRDboxTXSEV2GxC7AjEvFjNuQYvzZUAH/EEzHGTQZyDeDcRV4KIa3QIiXOgApBqAWBLdIpAFQDYjuh5GcupkbBYB8W+qWYDFIikgVsVmAbVyrQMQH8Amx0jrZgtAgAEAyEmDjjAAxT0AAAAASUVORK5CYII=) no-repeat 0;background-size:12px}.night .list_btn{color:#67778b;border-color:#67778b}.night .list_btn:active{color:#505050;background-color:#67778b}.night .list_btn:visited{color:#363636;border-color:#363636}.night .action_menu span,.night .icon_ad,.night .icon_fav,.night .icon_hot,.night .icon_recommend{opacity:.4}.night .relate_video a:link,.night .tc_tip a,.night a,.night article,.night h1,.night h2,.night h3,.night h4,.night h5,.night h6,.night header #toggle_img a,.night header .source,.night header .time,.night p,.night section{color:gray}.night .adHead .homeBtnSmall,.night .quickComment .hasagree span,.night .tags li a{color:#7e4e17}.night .showEnd{background:#7e4e17}.night .showEnd a{color:#191919}.night .sub-title{border-left:4px solid #7e4e17}.night section img{opacity:.5}.night .newsflowList li,.night .tags,.night section .line{border-bottom:1px solid #333}.night .list li{border-bottom:1px solid #282828}.night .quickComment .agreed{background-image:url(" + i(26) + ")}.night .quickComment .agreeContent{background-image:url(" + i(27) + ")}.night .quickComment .hasagree{background-image:url(" + i(28) + ")}.night .shareIconWeixin{background-image:url(" + i(29) + ")}.night .shareIconFriends{background-image:url(" + i(30) + ")}.night .shareIconBlog{background-image:url(" + i(31) + ")}", ""])
  }
  , function(e, t, i) {
    e.exports = i.p + "resources/png/channel_arrow_night.a3710f0375b52ab521197dac9ffc143a.png?force-show=1"
  }
  , function(e, t, i) {
    e.exports = i.p + "d8a58c509518e6cadc45488f7d1b60e0.png"
  }
  , function(e, t, i) {
    e.exports = i.p + "21a3ca5d19cc0a5f0fdf0222d4d84ff4.png"
  }
  , function(e, t, i) {
    e.exports = i.p + "f861e9353deab52eb0a9223d5f56f8e4.png"
  }
  , function(e, t, i) {
    e.exports = i.p + "4f08650e8b0b1d764d4570b14cdd971f.png"
  }
  , function(e, t, i) {
    e.exports = i.p + "196bf21732afb080f8983ad350746b3e.png"
  }
  , function(e, t, i) {
    e.exports = i.p + "b8b1f55980d657e61aad62eb3e26203d.png"
  }
  , function(e, t, i) {
    t = e.exports = i(13)(),
      t.push([e.id, '.guesslike{margin:20px 15px}.guesslike .sub-title{width:100px;margin:0 auto;text-align:center;position:relative;margin-top:43px;font-size:17px;color:#333;font-weight:700;letter-spacing:7px;padding-left:7px}.guesslike .title-border{width:35px;height:4px;background-color:#333;margin:0 auto;margin-top:10px}.list{background:#fff}.list li{padding:10px;line-height:1.35em;position:relative}.list li:before{z-index:-1;content:"";position:absolute;top:0;left:0;border-bottom:1px solid #f2f2f2;box-sizing:border-box;width:200%;height:200%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:left top;transform-origin:left top}.list a{display:block;width:100%;height:100%;zoom:1;overflow:hidden;color:#333}.list li:after{visibility:hidden;display:block;font-size:0;content:"";clear:both;height:0}.list li{zoom:1}.list .newsimg{float:right;margin-left:18px}.list .newsimg,.list .newsimg img{width:105px;height:70px}.list .text{word-break:break-all;font-size:14px;line-height:19px}.list .text p:first-child{max-height:55px;font-size:16px;margin-bottom:16px;overflow-y:hidden;text-align:justify}.list .text p.content_humor{overflow-y:inherit;max-height:inherit}.list-col3{margin:5px 0;padding-bottom:10px}.list-col3 div{float:left;width:33.33%}.list-col3 .col3{height:70px;width:105px;overflow:hidden;display:inline-block;background:url(' + i(33) + ") no-repeat 0 0;background-size:105px 70px}.list-col3 div p.col3-0{text-align:left}.list-col3 div p.col3-1{text-align:center}.list-col3 div p.col3-2{text-align:right}.list-col3 div img{width:100%}.date2,.t2{margin-left:5px}.date2{font-size:12px;color:#b5b5b5}.ico-video{background:url(" + i(34) + ") 1px no-repeat;background-size:24px 15px}.ico-img,.ico-video{display:inline-block;margin:0 3px;width:26px;height:15px;vertical-align:-2px}.ico-img{background:url(" + i(35) + ") 1px no-repeat;background-size:24px 15px}.ico-tag{border-radius:3px;margin:0 3px;padding-left:2px;padding-right:2px;height:16px;line-height:16px;text-align:center;text-indent:0;font-size:12px;float:left;margin-top:0;vertical-align:middle;display:table-cell;margin-right:3px}.ico-recommend{color:#3296ff;border:1px solid #3296ff}li a p.date .ico-recommend{color:#3296ff!important;border:1px solid #3296ff}li a p.date .ico-topic{color:#ff8e42!important;border:1px solid #ff8e42}li a p.date .ico-img{display:inline-block;margin:0 3px;width:26px;height:15px;background:url(" + i(35) + ") 1px no-repeat;background-size:24px 15px}li a p.date .ico-hot{color:#ff3232!important;border:1px solid #ff3232}li a p.date .ico-video{display:inline-block;margin:0 3px;width:26px;height:15px;background:url(" + i(34) + ") 1px no-repeat;background-size:24px 15px}.ico-banner{color:#fff;border:1px solid #ff5a00;background-color:#ff5a00}.list .date{font-size:12px;color:#b5b5b5;position:absolute;bottom:5px;left:10px;margin-bottom:0}.list .picsInfo{font-size:10px;color:#b0b0b0}.list .picsInfo .time{float:left;display:inline-block;color:#b5b5b5}.list .picsInfo .picsNum{float:right;display:inline-block;padding-left:20px;background:url(" + i(36) + ") no-repeat 5px 40%;background-size:13px 13px;line-height:20px}.list li .cmt{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAURJREFUeNpi/P//PwMtARMDjQELMmfWrFmqQKoDiF2AmI8M8z4B8R4grkhLS7sNEmCEBRHQcHUgdQiIW4F4CVDBO1JNB5ohBKRigLgaiO2AZtxE9kEbCAMFJ5EbHFBHTQJaxAk1Lxg5DkDBsphKQT8biN3QI5mPnGDB4xMe+qcipMiixPVE5wNQavoMpUkVI8qCEmg45pEhRpQFPUD8FZTsyBDDHwdQUA3F5IjhtwA9ogZ1YYdswSdoWUIxgJrzBd0CUCkYSyWHpwDxLvQ4AEXUQaDtoOJ1MTAe3pPhckGoI4uB2B6luEYqskGloCsQ82Ix4xY0Qy0DOuAPmuH/oRluNxBXgYpqDAuIcKEDkGoAYkl0i0AWANmM6HoYyamTsVkExL+pZgEWi6SAWBWbBQwgCyjFM2fOdADiA9jkGGndbAEIMABUsMVtdZLV6wAAAABJRU5ErkJggg==) no-repeat 0;background-size:12px;padding-left:16px;margin-left:10px}", ""])
  }
  , function(e, t, i) {
    e.exports = i.p + "resources/png/loading.2cb3eed5dec01f9af187961b33892d8d.png?force-show=1"
  }
  , function(e, t, i) {
    e.exports = i.p + "resources/png/ico_video.cd1e1eda504594ea436c1191415d232f.png?force-show=1"
  }
  , function(e, t, i) {
    e.exports = i.p + "resources/png/ico_img.37598f86964ab0df246470cbfb5d5fc3.png?force-show=1"
  }
  , function(e, t, i) {
    e.exports = i.p + "resources/png/picBg.5c691c2f7311bc38b988a8a68db601c7.png?force-show=1"
  }
  , function(e, t, i) {
    t = e.exports = i(13)(),
      t.push([e.id, ".share table td{height:35px;font-size:13px}.share table td a{height:35px;width:35px;margin:0 auto;display:block}.shareIconWeixin{background:url(" + i(38) + ") no-repeat 0 0;background-size:35px 35px}.shareIconFriends{background:url(" + i(39) + ") no-repeat 0 0;background-size:35px 35px}.shareIconBlog{background:url(" + i(40) + ") no-repeat 0 0;background-size:35px 35px}.xissShareWrap{margin-bottom:15px;margin-top:20px;color:#999;font-size:12px}.xissShareBody{text-align:center;margin-bottom:30px}.xissShareBody .shareBtnWrap{display:inline-block;width:57px;margin-left:5px;margin-right:5px;text-align:center}.xissShareBody .shareBtn{display:inline-block;width:37px;height:37px}.xissShareBody .shareText{display:inline-block;top:5px}.xissShareBody .share2Friend{background:url(" + i(41) + ");background-size:37px 37px}.xissShareBody .share2Friends{background:url(" + i(42) + ");background-size:37px 37px}.xissShareBody .share2Weibo{background:url(" + i(43) + ");background-size:37px 37px}.xissShareBody .share2More{background:url(" + i(44) + ');background-size:37px 37px}.xissShareTitle{font-size:12px;padding-left:10px;padding-right:10px;margin-top:10px;margin-bottom:10px;color:#bababa}.xissShareTitle #left,.xissShareTitle #right{float:left;margin:0 0 0 -34px;width:50%}.xissShareTitle #main{width:66px;float:left;text-align:center}.xissShareTitle #left .inner,.xissShareTitle #right .inner{margin:0 0 0 34px;border-bottom:1px solid #eee;height:8px}.xissShareWrap .animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}@-webkit-keyframes bounce{0%,20%,53%,80%,to{-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1);-webkit-transform:translateZ(0);transform:translateZ(0)}40%,43%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-6px,0);transform:translate3d(0,-6px,0)}70%{-webkit-animation-timing-function:cubic-bezier(.755,.05,.855,.06);animation-timing-function:cubic-bezier(.755,.05,.855,.06);-webkit-transform:translate3d(0,-3px,0);transform:translate3d(0,-3px,0)}90%{-webkit-transform:translate3d(0,-1px,0);transform:translate3d(0,-1px,0)}}.bounce{-webkit-animation-name:bounce;animation-name:bounce;-webkit-transform-origin:center bottom;transform-origin:center bottom}.share-middle{padding-top:25px;padding-bottom:25px;margin-top:35px;margin-bottom:12px;text-align:center;position:relative}.share-middle:after{z-index:-1;content:"";position:absolute;top:0;left:0;border-top:1px solid #f2f2f2;border-bottom:1px solid #f2f2f2;box-sizing:border-box;width:200%;height:200%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:left top;transform-origin:left top}.share-middle p{padding:0;margin:35px 0 28px}.share-middle .share-title{padding-right:16px}.share-middle .share-friend,.share-middle .share-friends,.share-middle .share-title{color:#333;font-size:14px;line-height:24px;letter-spacing:5px}.share-middle .share-friend:before{content:"";display:inline-block;width:32px;height:27px;background:url(' + i(45) + ') no-repeat 0 0;background-size:32px 27px;vertical-align:bottom;padding-right:8px}.share-middle .share-friends{margin-left:12px}.share-middle .share-friends:before{content:"";display:inline-block;width:32px;height:27px;background:url(' + i(46) + ") no-repeat 0 0;background-size:32px 27px;vertical-align:bottom;padding-right:8px}.share-right-wrap{display:inline-block;width:67%;height:37px;font-size:14px}.share-right-wrap .article-share-btns{text-align:center}.share-right-wrap .article-share-wechat{color:#333;display:inline-block;background:url(" + i(47) + ") no-repeat 0 4px;background-size:32px 27px;padding-left:39px}.share-right-wrap .article-share-friends{margin-left:23px;color:#333;display:inline-block;background:url(" + i(48) + ") no-repeat 0 4px;background-size:27px 27px;padding-left:36px}.share-right-wrap .animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.app-gree-iflow .like-share-wrap{display:none!important}", ""])
  }
  , function(e, t, i) {
    e.exports = i.p + "d5823902a62864dc3a96878de167db3b.png"
  }
  , function(e, t, i) {
    e.exports = i.p + "6c1ec59ad2782fd81ac6cec0b8836ba8.png"
  }
  , function(e, t, i) {
    e.exports = i.p + "beb9596c86d8e57781f61178ddb255cd.png"
  }
  , function(e, t, i) {
    e.exports = i.p + "resources/png/xissShareFriend.c493f54f353c3690fbfe48f5b1c2812b.png?force-show=1"
  }
  , function(e, t, i) {
    e.exports = i.p + "resources/png/xissShareFriends.e2afa0a7b4e70511ee653090eb7cb562.png?force-show=1"
  }
  , function(e, t, i) {
    e.exports = i.p + "resources/png/xissShareWeibo.711fadba90e48c80e2b2d0039929fdde.png?force-show=1"
  }
  , function(e, t, i) {
    e.exports = i.p + "resources/png/xissShareMore.6f24fc77e3a1a6e1e85ae52bc257dcb1.png?force-show=1"
  }
  , function(e, t, i) {
    e.exports = i.p + "resources/png/ad-share-friend.868eebb9616ec2d1607ceb4f5a0dc1e5.png?force-show=1"
  }
  , function(e, t, i) {
    e.exports = i.p + "resources/png/ad-share-friends.ba5248fa03d29f2d724434a1777896f9.png?force-show=1"
  }
  , function(e, t, i) {
    e.exports = i.p + "resources/png/v2.2-wechat.15703727dd09c84be5a9a9a73a759b6c.png?force-show=1"
  }
  , function(e, t, i) {
    e.exports = i.p + "resources/png/v2.2-friends.56c4f72104c523846939ea8a5e0b1352.png?force-show=1"
  }
  , function(e, t, i) {
    t = e.exports = i(13)(),
      t.push([e.id, '.body-mask{top:0;right:0;bottom:0;left:0;background-color:rgba(0,0,0,.5)}.body-mask,.body-win{position:fixed;z-index:999}.body-win{bottom:50%;left:50%}.body-win .body-win-wrap{top:100px;width:200px;position:relative;left:-50%;padding:10px 20px;text-align:center;background-color:#fff;font-size:14px;border-radius:3px}.attitudeGuideWin .body-win-wrap{padding:0;width:290px;position:relative;text-align:left}.attitudeGuideWin .body-win-title{padding:17px 14px;padding-bottom:0;text-align:left;padding-left:60px;font-size:16px}.attitudeGuideWin .body-win-title:before{content:" ";width:45px;height:45px;position:absolute;top:-20px;left:14px}.attitudeGuideWin .attitude-like .body-win-title:before{background:url(' + i(50) + ") no-repeat 0 -45px;background-size:45px 90px}.attitudeGuideWin .attitude-dislike .body-win-title:before{background:url(" + i(50) + ') no-repeat 0 0;background-size:45px 90px}.attitudeText{margin-top:17px;margin-left:15px;margin-right:15px;border:1px solid #e2e2e2;background-color:#fafafa;border-radius:1px;height:70px;width:258px;text-align:left}.attitudeText div{color:#bbb;font-size:14px;margin:8px}.attitudeGuideWin .attitude-like .attitudeText div:before{content:" ";border-left:2px solid #e85f5f;padding-left:4px}.attitudeGuideWin .attitude-dislike .attitudeText div:before{content:" ";border-left:2px solid #3095ef;padding-left:4px}.attitudeGuideWin .attitudeDontShow{margin:10px 16px;font-size:12px;color:#bbb}.attitudeGuideWin .attitudeDontShow:before{content:" ";width:10px;height:10px;background:url(' + i(51) + ") no-repeat 0 -10px;background-size:10px 20px;display:inline-block;float:left;margin-top:4px;margin-right:6px}.attitudeGuideWin .hadChecked:before{background:url(" + i(51) + ") no-repeat 0 0;background-size:10px 20px}.attitudeGuideWin .attitudeCancel{width:50%;height:46px;border-top:1px solid #e2e2e2;border-right:1px solid #e2e2e2;color:#a3a3a3}.attitudeGuideWin .attitude-like .attitudeSubmit{width:50%;height:46px;border-top:1px solid #e2e2e2;color:#e85f5f}.attitudeGuideWin .attitude-dislike .attitudeSubmit{width:50%;height:46px;border-top:1px solid #e2e2e2;color:#329bde}.body-win-footer{width:100%;text-align:center;border-collapse:collapse;font-size:16px}", ""])
  }
  , function(e, t, i) {
    e.exports = i.p + "resources/png/attitudeGuide.6c7fb17d0c42305eb93fbae7bf1f1f36.png?force-show=1"
  }
  , function(e, t, i) {
    e.exports = i.p + "resources/png/attitudeGuideCheck.f676a5a8daad4ec805980f2e26094126.png?force-show=1"
  }
  , function(e, t, i) {
    t = e.exports = i(13)(),
      t.push([e.id, '.newsflowList li{padding-top:10px;padding-bottom:10px;line-height:1.35em;border-bottom:1px solid #f0f0f0;position:relative}.newsflowList a{display:block;width:100%;zoom:1;overflow:hidden;color:#333}.newsflowList li:after{visibility:hidden;display:block;font-size:0;content:"";clear:both;height:0}.newsflowList li{zoom:1}.newsflowList .newsimg{float:right;margin-left:10px;width:105px;height:70px}.newsflowList .newsimg img{width:105px;height:70px;background:url(' + i(53) + ") #efefef no-repeat 50%;background-size:41px 10px}.newsflowList .text{word-break:break-all;font-size:14px;line-height:19px}.newsflowList .text p:first-child{max-height:55px;font-size:16px;padding-bottom:4px;margin-bottom:16px;overflow-y:hidden}.newsflowList .text p.content_humor{overflow-y:inherit;max-height:inherit}.date2,.t2{margin-left:5px}.date2{font-size:12px;color:#b5b5b5}.ico-video{background:url(" + i(54) + ") 1px no-repeat;background-size:24px 15px}.ico-img,.ico-video{display:inline-block;margin:0 3px;width:26px;height:15px;vertical-align:-2px}.ico-img{background:url(" + i(55) + ") 1px no-repeat;background-size:24px 15px}.ico-tag{border-radius:3px;margin:0 3px;padding-left:2px;padding-right:2px;height:16px;line-height:16px;text-align:center;text-indent:0;font-size:12px;float:left;margin-top:0;vertical-align:middle;display:table-cell;margin-right:3px}.ico-recommend{color:#3296ff;border:1px solid #3296ff}.newsflowList a p.date .ico-recommend{color:#3296ff!important;border:1px solid #3296ff}.newsflowList a p.date .ico-topic{color:#ff8e42!important;border:1px solid #ff8e42}.newsflowList a p.date .ico-img{display:inline-block;margin:0 3px;width:26px;height:15px;background:url(" + i(55) + ") 1px no-repeat;background-size:24px 15px}.newsflowList a p.date .ico-hot{color:#ff3232!important;border:1px solid #ff3232}.newsflowList a p.date .ico-video{display:inline-block;margin:0 3px;width:26px;height:15px;background:url(" + i(54) + ") 1px no-repeat;background-size:24px 15px}.ico-banner{color:#fff;border:1px solid #ff5a00;background-color:#ff5a00}.newsflowList .date{font-size:12px;color:#b5b5b5;position:absolute;bottom:5px;left:0;margin-bottom:0}.newsflowList .picsInfo{font-size:10px;color:#b0b0b0}.newsflowList .picsInfo .time{float:left;display:inline-block;color:#b5b5b5}.newsflowList .picsInfo .picsNum{float:right;display:inline-block;padding-left:20px;background:url(" + i(56) + ") no-repeat 5px 40%;background-size:13px 13px;line-height:20px}.newsflowList li .cmt{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAURJREFUeNpi/P//PwMtARMDjQELMmfWrFmqQKoDiF2AmI8M8z4B8R4grkhLS7sNEmCEBRHQcHUgdQiIW4F4CVDBO1JNB5ohBKRigLgaiO2AZtxE9kEbCAMFJ5EbHFBHTQJaxAk1Lxg5DkDBsphKQT8biN3QI5mPnGDB4xMe+qcipMiixPVE5wNQavoMpUkVI8qCEmg45pEhRpQFPUD8FZTsyBDDHwdQUA3F5IjhtwA9ogZ1YYdswSdoWUIxgJrzBd0CUCkYSyWHpwDxLvQ4AEXUQaDtoOJ1MTAe3pPhckGoI4uB2B6luEYqskGloCsQ82Ix4xY0Qy0DOuAPmuH/oRluNxBXgYpqDAuIcKEDkGoAYkl0i0AWANmM6HoYyamTsVkExL+pZgEWi6SAWBWbBQwgCyjFM2fOdADiA9jkGGndbAEIMABUsMVtdZLV6wAAAABJRU5ErkJggg==) no-repeat 0;background-size:12px;padding-left:16px;margin-left:10px}", ""])
  }
  , function(e, t, i) {
    e.exports = i.p + "099bb41ded70f9e06501e2f3a9cc3fdd.png"
  }
  , function(e, t, i) {
    e.exports = i.p + "cd1e1eda504594ea436c1191415d232f.png"
  }
  , function(e, t, i) {
    e.exports = i.p + "37598f86964ab0df246470cbfb5d5fc3.png"
  }
  , function(e, t, i) {
    e.exports = i.p + "5c691c2f7311bc38b988a8a68db601c7.png"
  }
  , function(e, t, i) {
    t = e.exports = i(13)(),
      t.push([e.id, "section{position:relative;color:#333;font-family:Microsoft Yahei,Simsun,Gotham-Medium,Arial}section .line{height:1px;padding:0;overflow:hidden;border:none;border-bottom:1px solid #e0e0e0}section.taobaoAd{display:none}section .media_link{display:block;padding:12px 10px;text-decoration:none;-webkit-tap-highlight-color:rgba(0,0,0,.1);-webkit-touch-callout:none}section .arrow,section .channel_link{background:url(" + i(58) + ") no-repeat 100%;background-size:21px}section a.visited h3,section a:visited h3{color:#aaa}section .web_link .list_img_holder{margin-left:10px}section .web_link .web_link_content{margin:8px 0 0;font-size:12px;line-height:1.4em;color:#707070}section .media_avatar{border-radius:10px;border:none;margin-right:10px;box-shadow:0 0 1px rgba(0,0,0,.2);overflow:hidden}section .media_avatar img{width:50px;height:50px;display:block}section .media_subscribe{position:absolute;right:15px;top:50%;margin-top:-15px}section .media_info{padding-right:70px}section .media_info h3{margin:5px 0}section .media_info .desc{color:#999;font-size:12px}section .media_info .text{color:#999;font-size:11px}", ""]);
  }
  , function(e, t, i) {
    e.exports = i.p + "resources/png/channel_arrow.c73094bb387a2e9363ba1c78935aef47.png?force-show=1"
  }
  , function(e, t, i) {
    t = e.exports = i(13)(),
      t.push([e.id, ".night .adHead .ucbroswerLogo{background-image:url(" + i(60) + ")}.night .adHead .homeBtn{background-image:url(" + i(61) + ")}.night .adHead .homeBtnSmall{background-image:url(" + i(62) + ")}.night .adHead{background-color:#222}.night .adHead .adhead-text span.adMainText{color:gray}.night .adHead .adhead-text span.adSubText{color:#565656}.night .adHead .adBtn{background:#7e4317;color:#bf823c;border:2px solid #7e4317}.night .adHead .homeBtn{border-right:1px solid #333}.night .head-fixed{border-bottom:1px solid #333}", ""])
  }
  , function(e, t, i) {
    e.exports = i.p + "resources/png/night_ad-ucbroswer.13cc6c21381ec9297097700c9994d9a5.png?force-show=1"
  }
  , function(e, t, i) {
    e.exports = i.p + "resources/png/night_home-btn.1f9110d9da91352df4e64c83ab20f1f5.png?force-show=1"
  }
  , function(e, t, i) {
    e.exports = i.p + "resources/png/night_home-btn-small.b38bd2fef17a0e6823b4f9c731a97281.png?force-show=1"
  }
  , function(e, t, i) {
    t = e.exports = i(13)(),
      t.push([e.id, ".articleLike{margin:10px 0 0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-top:5px;width:100%}.articleLike .like-dislike{display:table;height:38px;width:100%;padding-bottom:10px}.articleLike .dislike-wrap,.articleLike .like-wrap{display:table-cell;vertical-align:middle;text-align:center}.dislike-block{background-color:rgba(0,0,0,.5);position:fixed;top:-200px;left:0;bottom:-200px;width:100%;z-index:10001;margin:auto;display:none}.dislike-wrap{text-align:center;vertical-align:middle}.dislike-content{background-color:#fff;border-radius:5px;width:100%}.dislike-bg{position:fixed;z-index:10002;top:40%;left:50%;display:block;text-align:center;vertical-align:middle;margin-top:-150px}.dislike-bg h2{color:#333;font-size:16px;line-height:60px}.dislike-bg ul{overflow:hidden}.dislike-bg ul li{float:left;border:1px solid #e9e9e9;border-radius:18px;padding:8px 16px;color:#666;width:32%;margin-left:4%;margin-bottom:4%;font-size:12px;line-height:normal}.dislike-bg .selected{color:#2696ff;border:1px solid #2696ff}.dislike-bg .report{display:inline-block;height:40px;line-height:30px;color:#bbb;font-size:14px}.dislike-bg .btn{height:50px;line-height:50px;border-top:1px solid #eee;margin:0 15px;color:#ddd}.dislike-bg .btn a{color:#2696ff}.dislike-bg .btn .disabled{color:#ddd}.articleLike .like-btn{border:1px solid #f7c9c9;border-radius:6px;padding:4px 12px 8px;min-width:100px;color:#f15959}.articleLike .like-btn,.articleLike .like-btn i{position:relative;font-size:14px;display:inline-block}.articleLike .like-btn i{width:20px;height:20px;top:5px}.articleLike .like i{background:url(" + i(64) + ") 50% no-repeat;background-size:20px 20px;margin-right:4px}.articleLike .liked i{background:url(" + i(65) + ") 50% no-repeat;background-size:20px 20px;margin-right:4px}.articleLike .like-btn .move-like{color:#f36666;position:absolute;right:5px;opacity:0}.articleLike .like-btn .like-up{top:3px}.articleLike .like-btn .like-down{top:-10px}.articleLike span{color:#999;font-size:12px}.articleLike .animated{-webkit-animation-duration:1s;-webkit-animation-fill-mode:forwards;-webkit-animation-iteration-count:1}.articleLike .fadeOutUp{-webkit-animation-name:fadeOutUp;animation-name:fadeOutUp}.fadeOutDown{-webkit-animation-name:fadeOutDown;animation-name:fadeOutDown}.articleLike .dislike-btn{position:relative;font-size:14px;display:inline-block;border:1px solid #d1d2d5;border-radius:6px;padding:4px 12px 8px;min-width:100px;color:#2f3546}.articleLike .dislike-wrap .disabled{opacity:.7;-khtml-opacity:.7}.articleLike .dislike-btn i{height:20px;width:20px;display:inline-block;background:url(" + i(66) + ') 50% no-repeat;background-size:20px 20px;position:relative;top:5px}.like-left-wrap{display:inline-block;height:37px;font-size:14px;position:relative}.like-left-wrap:after{z-index:-1;content:"";position:absolute;top:0;left:0;border-right:1px solid #f2f2f2;box-sizing:border-box;width:200%;height:200%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:left top;transform-origin:left top}.like-left-wrap .article-like-btn{display:inline-block;background:url(' + i(67) + ") no-repeat 0 4px;background-size:27px 23px;padding-left:30px}.like-left-wrap .article-like-btn.liked{background:url(" + i(68) + ') no-repeat 0 4px;background-size:27px 23px}.like-left-wrap .article-like-btn:before{content:""}.like-left-wrap .article-like-btn .move-like{color:#f76464;position:absolute;right:5px;opacity:0}.like-left-wrap .article-like-btn .like-down,.like-left-wrap .article-like-btn .like-up{top:3px}.like-left-wrap .animated{-webkit-animation-duration:1s;-webkit-animation-fill-mode:forwards;-webkit-animation-iteration-count:1}.like-left-wrap .fadeOutUp{-webkit-animation-name:fadeOutUp;animation-name:fadeOutUp}.like-left-wrap .fadeOutDown{-webkit-animation-name:fadeOutDown;animation-name:fadeOutDown}@-webkit-keyframes fadeOutUp{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}to{opacity:0;-webkit-transform:translateY(-20px);transform:translateY(-20px)}}@-webkit-keyframes fadeOutDown{0%{opacity:1;-webkit-transform:translateY(0);transform:translateY(0)}to{opacity:0;-webkit-transform:translateY(20px);transform:translateY(20px)}}', ""])
  }
  , function(e, t, i) {
    e.exports = i.p + "f04d97591c2d579279f4baa3947c2105.png"
  }
  , function(e, t, i) {
    e.exports = i.p + "feede8f72d4aeb063959dd7a4cc753b5.png"
  }
  , function(e, t, i) {
    e.exports = i.p + "6d6c0289586d231260ced1e626ef6e92.png"
  }
  , function(e, t, i) {
    e.exports = i.p + "resources/png/v2.2-article-like.e19b468acf9a8dc81aa9e1b3bbddebdd.png?force-show=1"
  }
  , function(e, t, i) {
    e.exports = i.p + "resources/png/v2.2-article-liked.1c80026d14123b3074aed8132c9e3af9.png?force-show=1"
  }
  , function(e, t, i) {
    t = e.exports = i(13)(),
      t.push([e.id, '.relate{margin:20px 15px}.relate .item{display:block;padding:0}.relate .sub-title{width:100px;margin:0 auto;text-align:center;position:relative;margin-top:43px;font-size:17px;color:#333;line-height:16px;font-weight:700;letter-spacing:7px;padding-left:7px}.relate .title-border{width:35px;height:4px;background-color:#333;margin:0 auto;margin-top:10px}.relate .sub-item{height:103px;position:relative}.relate .sub-item:after{z-index:-1;content:"";position:absolute;top:0;left:0;border-bottom:1px solid #f2f2f2;box-sizing:border-box;width:200%;height:200%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:left top;transform-origin:left top}.relate .sub-item:first-child{margin-top:20px}.relate .sub-item:first-child:after{border-top:1px solid #f2f2f2}.relate .sub-item-img{position:relative}.relate .sub-item-noimg{height:75px}.relate .sub-item-noimg .sub-orterInfo{border-bottom:none}.relate .sub-item-img .sub-img{width:110px;height:83px;position:absolute;right:0;padding-top:10px;overflow:hidden}.relate .sub-item-img .sub-img i{position:absolute;bottom:5px;font-size:10px;display:inline-block;right:5px;color:#fff;padding:2px 4px;background:rgba(0,0,0,.7)}.relate .sub-item-img .sub-img img{width:110px;height:83px;background:url(' + i(70) + ") #efefef no-repeat 50%;background-size:41px 10px}.relate .sub-item-img .sub-img .video-icon{position:absolute;right:7px;bottom:8px;width:17px;height:17px;display:block;background:url(" + i(71) + ') no-repeat 0 0;background-size:17px 17px}.relate .sub-item-img .sub-content{padding-right:129px}.relate .sub-item-img .sub-orterInfo,.relate .sub-item-img:last-child .sub-content{border-bottom:none}.sub-orterInfoWemedia{position:relative;color:#ffa800;font-size:10px;border-radius:1px;padding:2px 4px;line-height:12px;margin-right:4px}.sub-orterInfoWemedia:after{z-index:-1;content:"";position:absolute;top:0;left:0;border:1px solid #ffa800;border-radius:1px;box-sizing:border-box;width:200%;height:200%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:left top;transform-origin:left top}.relate .sub-item-img .item-text{height:50px;font-size:16px;overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;white-space:normal;line-height:25px}.relate-simple-keyword{background:none;border:1px solid #f9f9f9}.relate-simple-keyword .sub-title:before{border-bottom:1px solid #eee}.relate-simple-keyword .sub-title p{background:#fff}.relate .item-text{line-height:25px;height:25px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-top:15px}.relate .sub-orterInfo{margin-top:10px;padding-bottom:10px;color:#bbb;font-size:12px;line-height:14px;border-bottom:1px solid #f2f2f2}.relate .item:last-child .sub-orterInfo{border-bottom:none}.relate .sub-orterInfoSource{padding-right:7px}.relate .sub-relate{text-align:center;line-height:50px;position:relative}.relate .sub-relate:after{z-index:-1;content:"";position:absolute;top:0;left:0;border-bottom:1px solid #f2f2f2;box-sizing:border-box;width:200%;height:200%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:left top;transform-origin:left top}.relate .sub-relate a{text-align:center;padding:16px;margin-top:0;font-size:16px;color:#333;padding-right:20px}.relate .sub-relate a i{width:7px;height:10px;display:inline-block;background:url(' + i(72) + ") no-repeat 0 0;background-size:7px 10px;margin-left:10px}.relate .sub-word a{display:inline-block;border:1px solid #999;border-radius:20px;padding:0 10px;margin:15px 10px 0 0;color:#666;font-size:13px;height:24px;line-height:24px}.relate-channel{position:relative;border:1px solid #ececec;background-color:#fff;padding:16px}.relate-channel img{position:absolute;width:42px;height:42px;left:16px;top:16px;border-radius:2px}.relate-channel .item{padding-left:55px}.relate-channel i{width:13px;height:13px;margin-left:5px;border:1px solid;border-left:0;border-top:0;display:inline-block;-webkit-transform:rotate(-45deg);position:absolute;right:20px;top:50%;margin-top:-7px;color:#999}.relate-channel .item-info{color:#bbb;font-size:12px}", ""])
  }
  , function(e, t, i) {
    e.exports = i.p + "099bb41ded70f9e06501e2f3a9cc3fdd.png"
  }
  , function(e, t, i) {
    e.exports = i.p + "resources/png/relate-icon.44483e9e3f27d99f413f52688810cbc5.png?force-show=1"
  }
  , function(e, t, i) {
    e.exports = i.p + "resources/png/v2.2-sub-relate.6c4e329a00bf50373837b24228a2040a.png?force-show=1"
  }
  , function(e, t, i) {
    t = e.exports = i(13)(),
      t.push([e.id, '.uc-cooperate-wemedia{display:none;margin:32px 15px 15px}.uc-cooperate-wemedia .title{color:#cdcdcd;font-size:12px;height:24px;line-height:24px}.uc-cooperate-wemedia .main{width:200px;float:left;position:relative}.uc-cooperate-wemedia .left,.uc-cooperate-wemedia .right{float:left;margin:0 0 0 -100px;width:50%}.uc-cooperate-wemedia .main .inner{position:relative;top:4px;text-align:center;font-size:13px;letter-spacing:5px;font-weight:700;padding-left:5px;color:#333}.uc-cooperate-wemedia .left .inner,.uc-cooperate-wemedia .right .inner{min-height:15px;margin:0 0 0 100px;position:relative}.uc-cooperate-wemedia .left .inner:after,.uc-cooperate-wemedia .right .inner:after{z-index:-1;content:"";position:absolute;top:0;left:0;border-bottom:1px solid #999;box-sizing:border-box;width:200%;height:200%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:left top;transform-origin:left top}.uc-cooperate-wemedia .title span{position:relative;z-index:1;padding-left:10px;color:#cdcdcd}.uc-cooperate-wemedia .wrap{position:relative;margin-top:-10px;padding-top:18px}.uc-cooperate-wemedia .wrap .yicaiAd{padding:8px;display:block}.uc-cooperate-wemedia .wemedia_wrap{float:left;width:100%;margin-bottom:16px}.uc-cooperate-wemedia .wrap:before{z-index:-1;content:"";position:absolute;top:0;left:0;border-left:1px solid #999;border-right:1px solid #999;border-bottom:1px solid #999;box-sizing:border-box;width:200%;height:200%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:left top;transform-origin:left top}.uc-cooperate-wemedia .wemedia_icon img{border-radius:50%;margin-left:14px;width:40px}.uc-cooperate-wemedia .wemedia_wrap_inner{margin-left:67px;margin-right:50px}.uc-cooperate-wemedia .wemedia_wrap .wemedia_wrap_name{font-size:15px;padding-top:4px}.uc-cooperate-wemedia .wemedia_wrap .wemedia_wrap_desc{overflow:hidden;font-size:12px;line-height:15px;max-height:30px;margin-top:8px;color:#bbb}.uc-cooperate-wemedia .wemedia_icon{float:left;width:60px;margin-left:-100%}.uc-cooperate-wemedia .wemedia_link{float:left;width:0;margin-left:-50px}.uc-cooperate-wemedia .wemedia_link .wemedia_link_icon:after,.uc-cooperate-wemedia .wemedia_link .wemedia_link_icon:before{border:6px solid transparent;border-left:6px solid #fff;height:0;position:absolute;top:35px;right:15px;content:" "}.uc-cooperate-wemedia .wemedia_link .wemedia_link_icon:before{border-left-color:#ddd;right:13px;top:35px}.uc-cooperate-wemedia i{content:"";display:block;width:100%;border-top:1px solid #e6e6e6;position:absolute;top:10px}.uc-cooperate-wemedia img{width:100%}', ""])
  }
  , function(e, t, i) {
    t = e.exports = i(13)(),
      t.push([e.id, "li,ul{list-style:none;padding:0;margin:0}.ad_label,.fav_label,.hot_label,.recommend_label,.subject_label,.video_label{color:#fff;background:#aaa;font-size:10px;padding:2px;display:inline-block;margin-top:-2px}.hot_label,.subject_label{background:#f05b5b}.recommend_label,.video_label{background:#2a90d7}.fav_label{background:#f9ca6e}.icon_ad{position:absolute;left:0;bottom:10px;top:auto;width:1px;height:0;overflow:hidden}.list_btn,.list_btn[data-action=like]{width:55px;line-height:2em;font-size:14px;color:#2a90d7;border:1px solid #43a4e7;text-align:center;border-radius:5px;display:inline-block}.list_btn:active{color:#fff;background-color:#2a90d7}.list_btn[data-action=unlike]{border-color:#999;color:#999}.adlabel{font-size:11px;margin-right:10px;color:#fff;background:#aaa;border-radius:2px;padding:0 2px}.video_btn{display:block;position:absolute;left:0;top:0;bottom:0;right:0;background:url(" + i(75) + ") no-repeat 50%;background-size:27px 27px}.date{font-size:12px;color:#b5b5b5;margin:4px 0}.date .cmt{background:url(" + i(76) + ') no-repeat 0;background-size:11px;padding-left:16px;margin-left:10px}.split_line{font-size:12px;padding-left:10px;padding-right:10px;margin-top:10px;margin-bottom:10px;color:#bababa}.split_line .left,.split_line .right{float:left;margin:0 0 0 -60px;width:50%}.split_line .main{width:120px;float:left;text-align:center}.split_line .left .inner,.split_line .right .inner{margin:0 0 0 60px;border-bottom:1px solid #eee;height:8px}article .query-tag{color:#2696ff;cursor:pointer}.detailHidden{overflow:hidden}.showMoreDetailArea{width:100%}span.showMoreDetail{color:#ff6d2d;width:130px;display:block;margin:0 auto}.showMoreDetail:before{content:" ";display:block;float:left;width:18px;height:18px;background-size:18px 18px;margin-top:1px;margin-right:5px}.floatDiv{position:relative;top:-75px;left:50%;width:300px}.parent-list-li .floatDiv{margin-left:-24px}.floatDivContent{position:absolute;left:-50%;width:300px;height:65px}.floatDivTools{background-color:rgba(0,0,0,.8);display:inline-block;width:100%;height:65px}.floatDivArrow{background-color:transparent;margin:0 auto;display:inline-block;line-height:normal;bottom:-11px;position:absolute;left:50%;margin-left:-11px;border-top-color:#999;border-top-color:transparent;border-width:11px;border-bottom-width:0}.floatDivArrow:after{border-width:10px}.floatDivArrow,.floatDivArrow:after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.floatDivArrow:after{bottom:1px;margin-left:-10px;content:"";border-top-color:rgba(0,0,0,.8);border-bottom-width:0}.toolsItem{width:33%;display:inline-block;text-align:center;height:43px;margin-top:11px}.toolsItem span{color:#d0d0d0;font-size:12px;display:block;line-height:15px}.hadSupport span{color:#ff5a00}.body-down{position:fixed;z-index:999;bottom:30%;left:50%}.body-down-wrap{width:255px;position:relative;left:-50%;color:#000;padding:10px;text-align:center;border:1px solid #fff;background-color:#fff;font-size:14px;border-radius:3px;box-shadow:0 0 20px rgba(0,0,0,.5)}.body-down-wrap .close{width:12px;height:12px;float:right;background:#fff url(' + i(77) + ") no-repeat 0 0;background-size:12px 12px}.body-down-wrap-title{width:210px;margin:0 auto;text-align:left;padding-bottom:10px;border-bottom:1px solid #c9c9c9}.body-down-wrap-logo{width:30px;height:44px;float:left;display:inline-block;background:#fff url(" + i(78) + ") no-repeat 0 4px;background-size:30px 30px}.body-down-wrap-titleText{float:left;display:inline-block;margin-left:7px}.body-down-wrap-mainTitle{display:block;font-size:16px;color:#3b3b3b}.body-down-wrap-subTitle{display:block;font-size:12px;color:#888}.body-down-wrap-content{margin:0;padding:0}.body-down-wrap-content li{width:100px;display:inline-block;height:18px;line-height:18px;margin-top:16px}.body-down-wrap-content li.part1{background:url(" + i(79) + ") no-repeat 0 0;background-size:18px 18px}.body-down-wrap-content li.part2{background:url(" + i(80) + ") no-repeat 0 0;background-size:18px 18px}.body-down-wrap-content li.part3{background:url(" + i(81) + ") no-repeat 0 0;background-size:18px 18px;margin-top:13px}.body-down-wrap-content li.part4{background:url(" + i(82) + ") no-repeat 0 0;background-size:18px 18px;margin-top:13px}a.body-down-wrap-btn{display:inline-block;width:210px;height:35px;margin-top:16px;line-height:35px;background-color:#ff7600;color:#fff;border-radius:3px}a.body-down-wrap-btnIos{height:50px;line-height:20px;font-size:18px}a.body-down-wrap-btnIos span.mainTitle{display:inline-block;margin-top:7px}a.body-down-wrap-btnIos span.subTips{display:inline-block;font-size:8px}.ha{font-size:16px}.ha>span{display:block;clear:both;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.disabled{cursor:not-allowed;pointer-events:none;opacity:.65;filter:alpha(opacity=65);box-shadow:none}.newsflowList .picsImg{text-align:center}.newsflowList .picsImg img{max-width:100%;width:100%}.loading{background:url(" + i(83) + ') no-repeat}.showEnd{display:block;height:40px;margin:9px auto;background:#ff9303;color:#fff;text-align:center;line-height:40px;font-size:14px;border-radius:4px}.night .recommond{border:1px solid #333}.night .recommond .content .item{border-bottom:1px solid #333}.night .sub-title p{background:none;color:#999}.night .sub-title:before{border-bottom:1px solid #333}.article-feedback{margin:10px 15px 30px}.article-feedback a{display:inline-block;color:#bbb;font-size:12px}.feedback{line-height:14px;font-size:12px;color:#bbb}.article-feedback{margin:35px 0 20px;padding-bottom:30px;border-bottom:1px solid #dfdfdf;color:#bbb;font-size:12px;height:17px;text-align:right}.article-feedback a{color:inherit}.article-feedback .source{float:left}.clearfix:after{visibility:hidden;display:block;font-size:0;content:"";clear:both;height:0}.clearfix{zoom:1}.body-tips,.body-tips-simple{position:fixed;z-index:999;top:50%;width:100%;text-align:center}.body-tips-wrap{display:inline-block;background-color:rgba(0,0,0,.6);line-height:36px;font-size:13px;color:#fff;padding-left:12px;padding-right:12px;border-radius:3px}.gallery-img{position:relative}.showTuji{position:absolute;right:0;bottom:15px;line-height:normal;padding:6px 8px;color:#fff;font-size:11px;background-color:rgba(0,0,0,.4);border-radius:1px;margin-right:5px}.showTuji:before{content:"\\56FE\\96C6";display:inline-block;padding-right:3px}.tushuo{margin-top:8px;font-size:14px;color:#999;line-height:20px;text-align:center}.tushuo:before{content:" ";width:0;height:0;display:inline-block;border:4px solid #000;border-width:0 6px 7px;border-color:transparent transparent #999;margin-right:10px;margin-bottom:2px}.uc-banner{display:none;margin:32px 15px 15px}.uc-banner .main{width:100px;float:left;position:relative}.uc-banner .left,.uc-banner .right{float:left;margin:0 0 0 -50px;width:50%}.uc-banner .main .inner{position:relative;top:4px;text-align:center;font-size:13px;color:#bbb}.uc-banner .left .inner,.uc-banner .right .inner{min-height:15px;margin:0 0 0 50px;position:relative}.uc-banner .left .inner:after,.uc-banner .right .inner:after{z-index:-1;content:"";position:absolute;top:0;left:0;border-bottom:1px solid #f2f2f2;box-sizing:border-box;width:200%;height:200%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:left top;transform-origin:left top}.uc-banner .title{color:#cdcdcd;font-size:12px;height:24px;line-height:24px}.uc-banner .title span{position:relative;z-index:1;padding-left:10px;color:#cdcdcd}.uc-banner .wrap{margin-top:6px;position:relative;padding-bottom:16px!important}.uc-banner .wrap:after{z-index:-1;content:"";position:absolute;top:0;left:0;border-bottom:1px solid #f2f2f2;box-sizing:border-box;width:200%;height:200%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:left top;transform-origin:left top}.uc-banner .wrap .yicaiAd{padding:8px;display:block}.uc-banner .wrap .newBigAd{padding:8px 0;display:block}.newTopAd{display:block!important;position:relative}.newTopAd img{display:block;margin:0 auto;width:110%;margin-left:-5%;margin-top:-20px;margin-bottom:25px;background:url(' + i(84) + ') #efefef no-repeat 50%;background-size:83px 21px}.newTopAd .adTopTag{position:absolute;top:-16px;right:-39px;padding:25px 15px 0;background:rgba(0,0,0,.3);transform:rotate(45deg);font-size:12px;color:#fff}.uc-banner i{content:"";display:block;width:100%;border-top:1px solid #e6e6e6;position:absolute;top:10px}.ad-list{display:none;margin:15px}.ttip{position:absolute;top:35%;left:50%;width:200px;text-align:center;margin-left:-100px;color:#a3a3a3;font-size:14px}.ttip a,.ttip div,.ttip h1,.ttip p{margin-top:10px}.ttip a.return_btn{font-size:14px;color:#ff7800;line-height:32px;height:32px;border:1px solid #e4e6e9;background-color:#f8f8f9;display:inline-block;width:80px;border-radius:3px}.ui-page{background:#fff}.unorder{background-color:#eee}.t-order span.order-tips{color:#ffc3a3}.btn-orange{text-shadow:0 0 0 #fff}.error-fresh{display:inline-block;width:80px;height:32px;line-height:32px;text-align:center;font-size:13px;color:#ff7800!important;border:1px solid #e4e6e9;background:#f8f8f9;border-radius:2px}.error-fresh,.ttip a.error-fresh{margin-top:20px}.list .picsImg{text-align:center}.list .picsImg img{max-width:100%;width:100%}.wrapInit{position:fixed;z-index:100;bottom:50%;left:50%}.loading{background:url(' + i(85) + ') no-repeat}.pagetureTips{padding:8px 35px 8px 14px;text-shadow:0 1px 0 hsla(0,0%,100%,.5);background-color:#fcf8e3;border:1px solid #fbeed5;color:#c09853;text-align:center}a.resultLink{color:#999;display:block;padding:10px;text-align:center;border-top:5px solid #f0f0f0}a.resultLink .specialText{color:#ff5a00}a.failshowAll{margin-top:100px}a.failresultLink{color:#999;display:block;padding:10px;text-align:center}a.failresultLink .specialText{color:#ff5a00}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0deg)}to{-webkit-transform:rotate(1turn)}}@keyframes spin{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}.zzd-guide-banner{z-index:100;position:fixed;bottom:0;left:0;width:100%;background-color:rgba(0,0,0,.7);padding:20px 0}.zzd-guide-banner>img{display:block;width:290px;height:160px;margin:0 auto}.first-item-ad{line-height:12px;font-size:10px;padding-left:2px;padding-right:2px;background-color:#2696ff;border-radius:2px;color:#fff;margin-left:14px}.uc_guesslike_ad{display:block;height:40px;line-height:40px;color:#fff;text-align:center;font-size:15px;background:#2696ff;border:1px solid #2696ff;border-radius:2px}.uc_guesslike_ad:after{content:" ";background:url(' + i(86) + ") no-repeat 0 0;background-size:6px 13px;display:inline-block;vertical-align:text-bottom;margin-bottom:2px;margin-left:10px;width:6px;height:13px}.guesslikeAdBtn{margin-top:5px;margin-left:-15px;margin-right:-15px}.guesslike .list{background:#fff}.guesslike .list li{padding-left:0;padding-right:0}.guesslike .list .newsimg img{width:110px;height:83px;position:relative}.guesslike .list .newsimg .video-icon{position:absolute;right:7px;bottom:16px;width:17px;height:17px;display:block;background:url(" + i(87) + ') no-repeat 0 0;background-size:17px 17px}.guesslike .list .newsimg{width:110px;height:83px}.guesslike .list .date{left:0}.xissMediaShare{color:#2696ff;font-size:13px;text-align:center;background-color:#f6f8fb;line-height:37px}.xissMediaShare a{color:#2696ff;display:inline-block;height:37px;line-height:37px}.xissMediaShare a:before{content:"";display:inline-block;width:17px;height:16px;vertical-align:sub;margin-right:6px;background:url(' + i(88) + ") no-repeat 0 0;background-size:17px 16px}.wrapMore{width:100px;height:30px;position:relative;padding-left:10px}.wrapInitInner{position:relative;left:-50%}.wrapInit span,.wrapMore span{width:100px;padding-left:40px;display:inline-block;height:30px;line-height:30px;color:#aaa}.loading{position:absolute;background:url(" + i(85) + ') no-repeat;background-size:30px;-webkit-animation:spin .8s infinite linear;animation:spin .8s infinite linear}.wrapInit .loading,.wrapMore .loading{width:30px;height:30px}.wrapMore span{font-size:14px}.bottom-txt{padding-top:25px;line-height:23px}.bottom-txt .bottom-originalurl,.bottom-txt .bottom-source{color:#bbb;font-size:13px}.bottom-txt .bottom-originalurl:before{content:"";display:inline-block;width:3px;height:3px;border-radius:50%;background:#bbb;margin:-3px .5em 0;vertical-align:middle}.bottom-txt .bottom-prosecute{float:right;color:#333;font-size:13px;padding:0 9px 0 25px;border-radius:23px;background:#f7f7f7 url(' + i(89) + ') 9px no-repeat;background-size:13px auto}.like-share-wrap{margin-left:15px;margin-right:15px;text-align:center;line-height:37px;margin-top:20px;position:relative;padding:21px 0}.like-share-wrap:after{z-index:-1;content:"";position:absolute;top:0;left:0;border-top:1px solid #f2f2f2;border-bottom:1px solid #f2f2f2;box-sizing:border-box;width:200%;height:200%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:left top;transform-origin:left top}.data-loadingText{text-align:center;line-height:25px;margin-bottom:10px;color:#bbb}', ""])
  }
  , function(e, t, i) {
    e.exports = i.p + "resources/png/video_day.caed6fe1b38272d243476b8cb972888e.png?force-show=1"
  }
  , function(e, t, i) {
    e.exports = i.p + "resources/png/comment.96b2459295e23f9a767dcd91cacd905a.png?force-show=1"
  }
  , function(e, t, i) {
    e.exports = i.p + "95fb347f64235b506bddff464b374a65.png"
  }
  , function(e, t, i) {
    e.exports = i.p + "2c09d19068e05a7dc24c33040f09c958.png"
  }
  , function(e, t, i) {
    e.exports = i.p + "4e98f4b3bc758058e5eb6c846ab7d6a3.png"
  }
  , function(e, t, i) {
    e.exports = i.p + "036a279d6ef8391cd5cf0da1c66c625f.png"
  }
  , function(e, t, i) {
    e.exports = i.p + "ddaa32199560f99926b7b911883de289.png"
  }
  , function(e, t, i) {
    e.exports = i.p + "64cd7feab80c9fc5f5cd1cc0962c6312.png"
  }
  , function(e, t, i) {
    e.exports = i.p + "77f1f112a9122be2048c4a441c80815f.png"
  }
  , function(e, t, i) {
    e.exports = i.p + "resources/png/image_bg_day.099bb41ded70f9e06501e2f3a9cc3fdd.png?force-show=1"
  }
  , function(e, t, i) {
    e.exports = i.p + "resources/png/html5Loading.77f1f112a9122be2048c4a441c80815f.png?force-show=1"
  }
  , function(e, t, i) {
    e.exports = i.p + "resources/png/guesslike-arrow.8fa52b2b6e12b7cc2652f4323114eaea.png?force-show=1"
  }
  , function(e, t, i) {
    e.exports = i.p + "resources/png/video-icon.44483e9e3f27d99f413f52688810cbc5.png?force-show=1"
  }
  , function(e, t, i) {
    e.exports = i.p + "resources/png/xissVideoShare.bb8cae575b7c52242ee03456593dd32d.png?force-show=1"
  }
  , function(e, t, i) {
    e.exports = i.p + "a60ebe2ff39115556b1bf2cdbeb8bf02.png"
  }
  , function(e, t, i) {
    function n(e, t) {
      for (var i = 0; i < e.length; i++) {
        var n = e[i]
          , a = f[n.id];
        if (a) {
          a.refs++;
          for (var o = 0; o < a.parts.length; o++)
            a.parts[o](n.parts[o]);
          for (; o < n.parts.length; o++)
            a.parts.push(c(n.parts[o], t))
        } else {
          for (var r = [], o = 0; o < n.parts.length; o++)
            r.push(c(n.parts[o], t));
          f[n.id] = {
            id: n.id,
            refs: 1,
            parts: r
          }
        }
      }
    }
    function a(e) {
      for (var t = [], i = {}, n = 0; n < e.length; n++) {
        var a = e[n]
          , o = a[0]
          , r = a[1]
          , s = a[2]
          , l = a[3]
          , c = {
          css: r,
          media: s,
          sourceMap: l
        };
        i[o] ? i[o].parts.push(c) : t.push(i[o] = {
          id: o,
          parts: [c]
        })
      }
      return t
    }
    function o(e, t) {
      var i = g()
        , n = w[w.length - 1];
      if ("top" === e.insertAt)
        n ? n.nextSibling ? i.insertBefore(t, n.nextSibling) : i.appendChild(t) : i.insertBefore(t, i.firstChild),
          w.push(t);
      else {
        if ("bottom" !== e.insertAt)
          throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
        i.appendChild(t)
      }
    }
    function r(e) {
      e.parentNode.removeChild(e);
      var t = w.indexOf(e);
      t >= 0 && w.splice(t, 1)
    }
    function s(e) {
      var t = document.createElement("style");
      return t.type = "text/css",
        o(e, t),
        t
    }
    function l(e) {
      var t = document.createElement("link");
      return t.rel = "stylesheet",
        o(e, t),
        t
    }
    function c(e, t) {
      var i, n, a;
      if (t.singleton) {
        var o = x++;
        i = b || (b = s(t)),
          n = d.bind(null, i, o, !1),
          a = d.bind(null, i, o, !0)
      } else
        e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (i = l(t),
            n = m.bind(null, i),
            a = function() {
              r(i),
              i.href && URL.revokeObjectURL(i.href)
            }
        ) : (i = s(t),
            n = p.bind(null, i),
            a = function() {
              r(i)
            }
        );
      return n(e),
        function(t) {
          if (t) {
            if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)
              return;
            n(e = t)
          } else
            a()
        }
    }
    function d(e, t, i, n) {
      var a = i ? "" : n.css;
      if (e.styleSheet)
        e.styleSheet.cssText = v(t, a);
      else {
        var o = document.createTextNode(a)
          , r = e.childNodes;
        r[t] && e.removeChild(r[t]),
          r.length ? e.insertBefore(o, r[t]) : e.appendChild(o)
      }
    }
    function p(e, t) {
      var i = t.css
        , n = t.media;
      if (n && e.setAttribute("media", n),
          e.styleSheet)
        e.styleSheet.cssText = i;
      else {
        for (; e.firstChild; )
          e.removeChild(e.firstChild);
        e.appendChild(document.createTextNode(i))
      }
    }
    function m(e, t) {
      var i = t.css
        , n = t.sourceMap;
      n && (i += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(n)))) + " */");
      var a = new Blob([i],{
        type: "text/css"
      })
        , o = e.href;
      e.href = URL.createObjectURL(a),
      o && URL.revokeObjectURL(o)
    }
    var f = {}
      , u = function(e) {
      var t;
      return function() {
        return "undefined" == typeof t && (t = e.apply(this, arguments)),
          t
      }
    }
      , h = u(function() {
      return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())
    })
      , g = u(function() {
      return document.head || document.getElementsByTagName("head")[0]
    })
      , b = null
      , x = 0
      , w = [];
    e.exports = function(e, t) {
      t = t || {},
      "undefined" == typeof t.singleton && (t.singleton = h()),
      "undefined" == typeof t.insertAt && (t.insertAt = "bottom");
      var i = a(e);
      return n(i, t),
        function(e) {
          for (var o = [], r = 0; r < i.length; r++) {
            var s = i[r]
              , l = f[s.id];
            l.refs--,
              o.push(l)
          }
          if (e) {
            var c = a(e);
            n(c, t)
          }
          for (var r = 0; r < o.length; r++) {
            var l = o[r];
            if (0 === l.refs) {
              for (var d = 0; d < l.parts.length; d++)
                l.parts[d]();
              delete f[l.id]
            }
          }
        }
    }
    ;
    var v = function() {
      var e = [];
      return function(t, i) {
        return e[t] = i,
          e.filter(Boolean).join("\n")
      }
    }()
  }
  , function(e, t, i) {
    i(92),
      i(93),
      i(94),
      i(95),
      i(96),
      i(97),
      i(98),
      i(100),
      i(103),
      i(118),
      i(142),
      i(143),
      i(144),
      i(145),
      i(146),
      i(147),
      i(148),
      i(149);
    var n = window.html = i(150);
    $("body").append(n),
      i(151)
  }
  , function(e, t) {
    function i() {
      try {
        return document.createEvent("TouchEvent"),
          !0
      } catch (e) {
        return !1
      }
    }
    window.isTouchDevice = i,
      $.fn.tap = function(e) {
        function t() {
          o = !0,
            clearTimeout(n),
            n = setTimeout(function() {
              o = !1
            }, 300)
        }
        if (!i())
          return void this.on("click", e);
        var n, a = $(this), o = !1;
        $(window).on("scroll", t),
          a.on("touchstart", function(t) {
            function i(e) {
              b = !0,
                d = e.targetTouches && e.targetTouches[0] ? e : null,
                c = e.originalEvent || d,
                l = c && c.targetTouches && c.targetTouches[0],
                h = l ? l.pageX : 0,
                g = l ? l.pageY : 0
            }
            function n() {
              a.off("touchmove", i),
                r.off("touchmove", i),
                r.off("touchend", n),
              (p && c || !o) && (b && (Math.abs(f - h) > 5 || Math.abs(u - g) > 5) || setTimeout(function() {
                !w && !o && x && e && e(t, s)
              }, 40))
            }
            var r = $(t.target)
              , s = {
              hash: window.location.hash
            };
            document.activeElement && document.activeElement !== t.target && document.activeElement.blur();
            var l, c, d = t.targetTouches && t.targetTouches[0] ? t : null, p = t.originalEvent || d, m = p && p.targetTouches && p.targetTouches[0], f = m ? m.pageX : 0, u = m ? m.pageY : 0, h = 0, g = 0, b = !1, x = !1, w = !1, v = 40;
            a.on("touchmove", i),
              r.on("touchmove", i),
              r.on("touchend", n),
              setTimeout(function() {
                x = !0
              }, v),
              setTimeout(function() {
                w = !0
              }, 350)
          })
      }
      ,
      function() {
        function e(e, n, a) {
          if (e) {
            n || (n = 10);
            var o, r = _.extend({}, i, a), s = {};
            return t(e, n, function(e) {
              return o = !0,
                _.each(r, function(t, i) {
                  if ("undefined" == typeof s[t]) {
                    o = !1;
                    var n = e.data(i);
                    n && (s[t] = n)
                  }
                }),
                o
            }),
              s
          }
        }
        function t(e, i, n, a) {
          var o = $(e);
          return void 0 === a && (a = 0),
            !n(o) && a >= i ? null : n(o) ? o : (a++,
              t.call(this, o.parent(), i, n, a))
        }
        var i = {};
        $("body").tap(function(t) {
          var i, n = $(t.target), a = t.touches, o = a ? a[0] : {
            pageX: t.clientX,
            pageY: t.clientY
          }, r = {
            region: "region",
            pos: "pos",
            index: "index",
            label: "label"
          };
          location.pathname.indexOf("search-result") > 0 && _.extend(r, {
            is_wm: "is_wm",
            aid: "aid",
            is_follow: "is_follow"
          }),
            i = e(n, 10, r),
          o && (o.pageX || o.pageY) && (i.x = o.pageX,
            i.y = o.pageY),
          i.region && i.pos && window._uca("click", i)
        })
      }()
  }
  , function(e, t) {
    var i = window._uc = {};
    !function(e) {
      var t = window.ucapi
        , i = window.zzd
        , n = {}
        , a = {
        openChannelBox: function(e) {
          t && t.infoflow && t.infoflow.openChannelWindow && t.infoflow.openChannelWindow({
            channel_id: e.channel_id,
            type: e.type,
            success: function(e) {
              e && "fail" === e.result && i.Tools.showAlert("对不起，该频道跑去外太空了o(╯□╰)o")
            },
            fail: function(e) {
              e && e.ext && "fail" === e.ext.result && i.Tools.showAlert("对不起，该频道跑去外太空了o(╯□╰)o")
            }
          })
        },
        userDidScroll: function(e) {
          t.infoflow.userDidScroll({
            visibleElements: e.visibleElements,
            success: function() {},
            fail: function() {}
          })
        },
        onUserClick: function(e) {
          t.infoflow.onUserClick({
            type: e.type,
            data: {
              recommend_article_url: e.recommend_article_url,
              recommend_keyword: e.recommend_keyword,
              recommend_keyword_url: e.recommend_keyword_url
            },
            success: function() {},
            fail: function() {}
          })
        },
        openInfoFlowImageGallery: function(e) {
          t.infoflow.openInfoFlowImageGallery({
            data: e.data,
            success: function() {},
            fail: function() {}
          })
        },
        getNewsData: function(e, i, n) {
          t.infoflow.getNewsData({
            cid: e.cid,
            news_id: e.news_id,
            success: function(e) {
              i(e)
            },
            fail: function() {
              n()
            }
          })
        },
        notifyFlushWebItemInfo: function(e) {
          t.infoflow.notifyFlushWebItemInfo({
            data: e.data,
            success: function() {},
            fail: function() {}
          })
        }
      }
        , o = {
        onShare: function(e) {
          t.biz.onShare({
            title: e.title,
            content: e.content,
            sourceUrl: e.sourceUrl,
            target: e.target,
            disableTarget: e.disableTarget,
            type: e.type,
            source: e.source,
            screenshotHtmlNodeId: e.screenshotHtmlNodeId,
            screenshotRect: e.screenshotRect,
            iconUrl: e.iconUrl,
            trigger: function() {}
          })
        }
      };
      e.comment = n,
        e.infoflow = a,
        e.biz = o
    }(i)
  }
  , function(e, t) {
    !function() {
      var e = function(e) {
        return e && e.apiName ? void window.ucapi.base.checkAPI({
          apiList: [e.apiName],
          success: function(t) {
            "ok" === (t.checkResult[e.apiName] || "").toLowerCase() ? e.success && e.success() : e.fail && e.fail()
          },
          fail: function() {
            e.fail && e.fail()
          }
        }) : void (e && e.fail && e.fail())
      };
      window.checkucapi = e
    }()
  }
  , function(e, t) {
    var i = window._bannerTop = {}
      , n = window.dom = Math.random().toString(36).slice(5).replace(/\d/g, "");
    !function(e, t) {
      var i = {
        init: function(e, t) {
          if (this.data = e,
              this._params = t,
              this.article_length = e.content_length,
            0 != this.article_length) {
            var i = "http://m.uczzd.cn/ucnews/news?app=ucnews-iflow&aid=" + this.data.id + "&cid=" + this.data.cid + "&zzd_from=ucnews-iflow&uc_param_str=dndsfrvesvntnwpfgi&recoid=" + this.data.recoid + "&rd_type=reco";
            this.openAppUrl = "//iflow.uczzd.cn/newsapp/openapp.html?pageurl=" + encodeURIComponent(i),
              this.openAppUrlComment = "//iflow.uczzd.cn/newsapp/openapp.html?pageurl=" + encodeURIComponent(i + "&gocomment=1")
          } else
            this.openAppUrl = "//iflow.uczzd.cn/newsapp/openapp.html",
              this.openAppUrlComment = "//iflow.uczzd.cn/newsapp/openapp.html";
          this._params.isSharePage && 0 == this._params.huidu && (this.appendBannerHtml(),
            this.render())
        },
        appendBannerHtml: function() {
          var e = '<script id="tpl-topBanner" type="text/template"> \t          <div class="{{bannerDom}}head head-logo {{bannerDom}}tn" data-region="uc_a_d" data-pos="top"> \t              <a data-pos="top" href="{{openAppUrl}}"> \t                  <i class="{{bannerDom}}logo"></i> \t                  <i class="{{bannerDom}}close"></i> \t                  <i class="{{bannerDom}}btn">打开</i> \t              </a>\t              <div style="clear: both;"></div>\t          </div> \t      </script>';
          $("body").append(e)
        },
        render: function() {
          var e = "//image.uczzd.cn/5171608039514772478.jpg?id=0"
            , t = "//image.uczzd.cn/2057789945940827569.jpg?id=0"
            , i = document.createElement("style")
            , a = "." + n + "head{display:block; height:47px; border-bottom:1px #e6e6e7 solid;padding-left:15px;padding-right:15px;}." + n + "head a{overflow:hidden;display: block;height: 47px;}." + n + "middle{margin-top: 20px; display: block;}." + n + "logo{float: left;height: 23px;width: 73px;background: url(" + e + ") no-repeat 0 0;background-size: 73px 23px;margin-top: 13px;margin-left: 0px;}." + n + "text{float: left;margin-left: 10px;margin-top: 12px;}." + n + "mainText{font-size: 17px;display: block;}." + n + "subText{font-size: 12px;color: #999;margin-top: 3px;display: block;}." + n + "btn{float: right; padding:0 5px; width: 41px;height: 23px; line-height: 23px; background-color:#ffc63f;border-radius: 2px;margin-top: 12px;text-align: center; color: #000;font-size: 12px;}." + n + "close{float: right; width: 9px;height: 9px;background:url(" + t + ") no-repeat 0 0;background-size:9px 9px;margin-left:15px;margin-top:18px;}." + n + "comment{margin-top: 20px;margin-bottom: 20px;height: 40x;line-height: 40px;color: #fff;text-align: center;font-size: 15px;background: #2696ff;border: 1px solid #2696ff;border-radius: 2px;}." + n + "comment a{color: #fff;}." + n + "bottom{display: block;margin-top: 5px;margin-left: -15px;margin-right: -15px;}";
          i.type = "text/css",
            document.head.appendChild(i),
            i.appendChild(document.createTextNode(a));
          var o = $("#tpl-topBanner").html()
            , r = _.template(o)
            , s = r({
            bannerDom: n,
            openAppUrl: this.openAppUrl
          });
          $("body").prepend(s)
        }
      };
      e._bannerTop = t.render = i
    }(window.__UCLIB__ || (window.__UCLIB__ = {}), i)
  }
  , function(e, t) {
    var i = window._shareAD = {};
    !function(e, t) {
      var i = window.dom
        , n = window._envi
        , a = window.location.href.replace("webapp/webview/article/news.html", "ucnews/news").replace("uc-iflow", "ucnews-iflow").replace("&pagetype=share", "").replace("webview/news", "ucnews/news")
        , o = {
        init: function(e, t) {
          this.data = e,
            this._params = t,
            this.article_length = e.content_length,
            0 != this.article_length ? (a = "http://m.uczzd.cn/ucnews/news?app=ucnews-iflow&aid=" + this.data.id + "&cid={{cid}}&zzd_from=ucnews-iflow&uc_param_str=dndsfrvesvntnwpfgi&recoid=" + this.data.recoid + "&rd_type=reco",
              this.openAppUrlComment = "//iflow.uczzd.cn/newsapp/openapp.html?pageurl=" + encodeURIComponent(a + "&gocomment=1")) : this.openAppUrlComment = "//iflow.uczzd.cn/newsapp/openapp.html",
          this._params.isSharePage && 0 == this._params.huidu && this.render()
        },
        render: function() {
          var e = this.data.cmt_cnt
            , t = "//a.app.qq.com/o/simple.jsp?pkgname=com.uc.infoflow"
            , a = "//a.app.qq.com/o/simple.jsp?pkgname=com.uc.infoflow"
            , o = n.os.iphone ? a : t
            , r = this
            , s = this._params.isInnerApp
            , l = {
            dom: i,
            url: o,
            commentCount: e,
            isAndroid: n.os.android,
            isInnerApp: s,
            openAppUrlComment: this.openAppUrlComment
          }
            , c = r.getCategoryAd();
          l.openAppUrl = "//iflow.uczzd.cn/newsapp/openapp.html?channelid=" + c.cid,
            l.openAppUrlComment = l.openAppUrlComment.replace(encodeURIComponent("{{cid}}"), c.cid),
            _.extend(l, c);
          var d = $("#tpl-shareAD").html()
            , p = _.template(d)
            , m = p({
            bannerDom: i,
            openAppUrl: l.openAppUrl,
            label: l.label,
            midImg: l.midImg,
            isAnswer: l.isAnswer,
            isInnerApp: !1,
            commentCount: l.commentCount,
            openAppUrlComment: l.openAppUrlComment
          });
          $(".main-content").prepend(m),
            $(".commentsWrap").append($("." + i + "comment").removeClass("fn-hide")),
          170 != n.get("pf") && ($("video").parent().after($("." + i + "video").prop("outerHTML")),
            $(".gallery-img").after($("." + i + "img").prop("outerHTML")),
            $("#tujiAd").css("display", "none")),
            $("." + i + "middle .share-middle").unbind("click").click(function() {
              var e = $("#windownbg");
              e.removeClass("fn-hide"),
                e.addClass("downGuide"),
                e.unbind("click").click(function() {
                  e.addClass("fn-hide").removeClass("downGuide")
                })
            })
        },
        getCategoryAd: function() {
          var e, t = {
            map: [{
              key: "健康",
              img: "//image.uczzd.cn/10973198147379248896.jpg?id=0",
              cid: "472933935"
            }, {
              key: "军事",
              img: "//image.uczzd.cn/4700659746443374101.jpg?id=0",
              cid: "1105405272"
            }, {
              key: "科技",
              img: "//image.uczzd.cn/2424623522640340154.jpg?id=0",
              cid: "1525483516"
            }, {
              key: "历史",
              img: "//image.uczzd.cn/8253608641359564346.jpg?id=0",
              cid: "701104723"
            }, {
              key: "两性情感",
              img: "//image.uczzd.cn/5032343497263350382.jpg?id=0",
              cid: "1099189934"
            }, {
              key: "汽车",
              img: "//image.uczzd.cn/5463516356698084119.jpg?id=0",
              cid: "323644874"
            }, {
              key: "娱乐",
              img: "//image.uczzd.cn/14773562159547928030.jpg?id=0",
              cid: "179223212"
            }, {
              key: "体育",
              img: "//image.uczzd.cn/9457709345570604944.jpg?id=0",
              cid: "923258246"
            }, {
              key: "国际",
              img: "//image.uczzd.cn/10116747470032743272.jpg?id=0",
              cid: "1001932710"
            }, {
              key: "国内",
              img: "//image.uczzd.cn/14087556854538133226.jpg?id=0",
              cid: "1192652582"
            }, {
              key: "社会",
              img: "//image.uczzd.cn/1547712239154203058.jpg?id=0",
              cid: "1192652582"
            }],
            default: {
              key: "通用",
              img: "//image.uczzd.cn/7822050765172092413.jpg?id=0",
              cid: "10070"
            }
          }, i = this, n = {};
          return i.data.category && i.data.category.length > 0 && (e = _.findWhere(t.map, {
            key: i.data.category[0]
          })),
            n = e ? {
              midImg: e.img,
              label: e.key,
              cid: e.cid
            } : {
              midImg: t.default.img,
              label: t.default.key,
              cid: t.default.cid
            }
        }
      };
      e._shareAD = t.render = o
    }(window.__UCLIB__ || (window.__UCLIB__ = {}), i)
  }
  , function(e, t) {
    var i = window._newsIflow = {};
    !function(e, t) {
      var i = window.zzd
        , n = window._envi
        , a = window.netWork
        , o = window.serverPathIflow
        , r = window.matchUrlQueryParams
        , s = {
        init: function(e, t) {
          this.dataGuessList = [],
            this.itemIndex = 0,
            this.itemCount = 10,
            this.isLoadMore = !1,
            this.dataGuessList = [],
            this.data = e;
          var i = this;
          if (this.article_length = e.content_length,
            0 != this.article_length) {
            var n = "http://m.uczzd.cn/ucnews/news?app=ucnews-iflow&aid=" + this.data.id + "&cid=" + this.data.cid + "&zzd_from=ucnews-iflow&uc_param_str=dndsfrvesvntnwpfgi&recoid=" + this.data.recoid + "&rd_type=reco";
            this.openAppUrl = "//iflow.uczzd.cn/newsapp/openapp.html?pageurl=" + encodeURIComponent(n),
              this.openAppUrlComment = "//iflow.uczzd.cn/newsapp/openapp.html?pageurl=" + encodeURIComponent(n + "&gocomment=1")
          } else
            this.openAppUrl = "//iflow.uczzd.cn/newsapp/openapp.html",
              this.openAppUrlComment = "//iflow.uczzd.cn/newsapp/openapp.html";
          if (t.isSharePage && 0 == t.huidu) {
            this.getDataGuessLike(e, t);
            var a = 0
              , o = setInterval(function() {
              a++,
              (this.dataGuessList.length > 0 || 10 === a) && (i.renderItem(e, t),
                clearInterval(o))
            }, 100);
            this.bindLiEvent(),
              this.scrollLoadMore(e, t)
          }
        },
        ITEMTYPE_MAP: {
          "0-1-1-3": "1",
          "0-1-1-1": "1",
          "0-1-0-3": "1",
          "0-1-0-1": "1",
          "0-1-0-0": "2",
          "0-1-1-0": "2",
          "1-1-1-3": "1",
          "1-1-1-1": "1",
          "1-1-0-3": "1",
          "1-1-0-1": "1",
          "1-1-0-0": "2",
          "1-1-1-0": "2",
          "2-1-1-3": "1",
          "2-1-1-1": "1",
          "2-1-0-3": "1",
          "2-1-0-1": "1",
          "2-0-1-1": "1",
          "2-0-1-3": "1",
          "2-0-0-1": "1",
          "2-0-0-3": "1",
          "2-1-0-0": "2",
          "2-1-1-0": "2",
          "3-1-1-3": "1",
          "3-1-1-1": "1",
          "3-1-0-3": "1",
          "3-1-0-1": "3",
          "3-0-1-1": "1",
          "3-0-0-3": "6",
          "3-0-0-1": "6",
          "3-0-1-0": "4",
          "4-1-1-3": "1",
          "4-1-1-1": "1",
          "4-1-0-3": "1",
          "4-1-0-1": "1",
          "3-1-0-0": "2",
          "3-1-1-0": "2",
          "5-0-0-0": "4",
          "5-0-1-0": "4"
        },
        renderItem: function(e, t) {
          var i = this
            , n = i.dataGuessList.slice(i.itemIndex * i.itemCount, (i.itemIndex + 1) * i.itemCount);
          n.length > 0 && (this.getDataArticles(n, e, t),
            this.itemIndex++)
        },
        getDataArticles: function(e, t, i) {
          var n = this
            , r = o + "/" + a["article-iflow"] + "/api/v1/article";
          $.ajax({
            url: r,
            data: {
              aid: JSON.stringify(e),
              cid: i.cid,
              refAid: i.aid,
              refReadId: i.readId,
              purpose: "0",
              uc_param_str: "dnnivebichfrmintcpgieiwidsudpf"
            },
            dataType: "jsonp",
            contentType: "application/json",
            timeout: 8e3,
            success: function(t) {
              0 == t.status ? (n.renderContent(t.data.items, e, i),
                n.isLoadMore = !0) : n.isLoadMore = !1
            }
          })
        },
        renderContent: function(e, t) {
          var i = this.renderItemHtml(e, t, this._params);
          $("#guesslike-content").append(i),
            $(".guesslike").removeClass("fn-hide");
          var n = $(".sub-content .list li:first-child");
          if (0 == n.find(".first-item-ad").length) {
            var a = n.data("url");
            if (a) {
              var o = a.replace("webapp/webview/article/news.html", "ucnews/news").replace("uc-iflow", "ucnews-iflow").replace("&pagetype=share", "").replace("webview/news", "ucnews/news");
              $(".list li:first-child").find(".cmt").after('<span class="first-item-ad">应用内打开</span>'),
                n.addClass("open-by-app"),
                n.find("a").attr("href", "//iflow.uczzd.cn/newsapp/openapp.html?pageurl=" + encodeURIComponent(o))
            }
          }
          $(".list li img").each(function() {
            $(this).attr("src").indexOf("loading.png") >= 0 && $(this).attr("src", $(this).attr("data-src"))
          })
        },
        renderItemHtml: function(e, t) {
          for (var n = e, a = "", o = "", s = 0; s < t.length; s++) {
            var l = n[t[s]];
            if (l) {
              var c = l.id;
              if (/^special/.test(c))
                n.splice(s, 1),
                  s -= 1;
              else {
                var d = l.title
                  , p = l.content;
                3 != l.item_type && 5 != l.item_type || "" != p || (p = l.summary);
                var m = l.cmt_cnt
                  , f = "0" == m ? "fn-hide" : ""
                  , u = l.grab_time
                  , h = parseInt(u);
                h = i.Tools.dateFormat(h);
                var g = l.thumbnails
                  , b = "//zzd.sm.cn/image-sm/icon/loading.png";
                s < 6 && g.length > 0 && (b = g[0].url);
                var x = r(l.zzd_url, {
                  rd_type: "hot",
                  pagetype: "share"
                })
                  , w = this.getItemKey(l)
                  , v = this.ITEMTYPE_MAP[w]
                  , y = l.videos && l.videos.length > 0 ? 1 : 0
                  , k = y > 0 ? "true" : "false";
                if (v && v >= 0) {
                  if ($.inArray(v, ["0", "1", "2", "3"]) >= 0 && !d)
                    continue;
                  if ($.inArray(v, ["4", "5"]) >= 0 && !p)
                    continue;
                  if (1 == v) {
                    var C = $("#tpl-news-iflow").html()
                      , z = _.template(C);
                    a = z({
                      na_id: c,
                      videoType: k,
                      hotTime: u,
                      url: x,
                      itemType: v,
                      title: d,
                      content_limit: p ? i.Tools.fucCheckLength(p, 400) : "",
                      content: p,
                      formatTime: h,
                      defaultImg: b,
                      isVertical: g && g.length > 0 && g[0].width / g[0].height < 1.2 ? "isVertical" : 0,
                      comment_style: f,
                      comment_cnt: m,
                      img: g && g.length > 3 ? g.slice(0, 3) : g,
                      imgLength: g.length,
                      imgUrl: g && g.length > 0 ? g[0].url : ""
                    }),
                      o += a
                  }
                  s === t.length - 1 && (o += "<li data-region='uc_a_d' data-pos='bottom'><a href='" + this.openAppUrl + "'><span class='uc_guesslike_ad' width='100%'>刷更多? 用UC头条查看</span></a></li>")
                }
              }
            }
          }
          return o
        },
        getItemKey: function(e) {
          var t = "" == e.title ? "0" : "1"
            , i = "" == e.content ? "0" : "1";
          3 != e.item_type && 5 != e.item_type || "" == e.summary || (i = 1);
          var n = 0;
          e.thumbnails.length >= 3 && (n = 3),
          e.thumbnails.length > 0 && e.thumbnails.length < 3 && (n = 1);
          var a;
          return a = 30 === e.item_type ? "0-" + t + "-" + i + "-" + n : e.item_type + "-" + t + "-" + i + "-" + n
        },
        getDataGuessLike: function(e, t) {
          var i = this
            , n = o + "/" + a.related + "/api/v1/article/" + t.aid + "/guesslike";
          $.ajax({
            url: n,
            data: {
              count: 50,
              oppo: this.getOppoVal(e, t),
              sn: t.userSN
            },
            type: "GET",
            dataType: "jsonp",
            contentType: "application/json",
            timeout: 15e3,
            success: function(e) {
              0 == e.result.status && (i.dataGuessList = e.data)
            }
          })
        },
        bindLiEvent: function() {
          $(".sub-content>ul").on("click", "li", function(e) {
            var t = $(e.currentTarget);
            t.hasClass("open-by-app") || (location.href = t.data("url"))
          })
        },
        scrollLoadMore: function(e, t) {
          var i = this
            , n = $(".guesslike");
          window.addEventListener("scroll", function() {
            var a = $("#guesslike-content")
              , o = n.find(".data-loadingArea")
              , r = a.find("li").length
              , s = $(this).scrollTop();
            r > 0 && i.itemIndex <= 5 && i.isLoadMore && s + window.innerHeight >= $("body").height() - 100 && (o.removeClass("fn-hide"),
              setTimeout(function() {
                i.renderItem(e, t),
                  o.addClass("fn-hide")
              }, 300),
              i.isLoadMore = !1)
          }, !0)
        },
        getOppoVal: function() {
          var e = {
            index: {
              val: 0,
              label: "普通转码页"
            },
            indexCache: {
              val: 1,
              label: "缓存转码页"
            },
            special: {
              val: 2,
              label: "专题页"
            },
            share: {
              val: 3,
              label: "分享页"
            },
            thirdParty: {
              val: 4,
              label: "定制页"
            },
            allComments: {
              val: 5,
              label: "全部评论页"
            },
            myMessage: {
              val: 6,
              label: "我的消息"
            },
            myComment: {
              val: 7,
              label: "我的评论"
            },
            commentsDetail: {
              val: 8,
              label: "评论详情"
            },
            searchResult: {
              val: 9,
              label: "搜索结果"
            },
            video: {
              val: 10,
              label: "视频转码页"
            }
          }
            , t = e.index.val
            , i = location.pathname;
          return i.indexOf("news.html") > -1 ? n.browser.uc || n.browser.ucNews || !this.params.isSharePage ? location.hash && (t = e.indexCache.val) : t = e.share.val : t = i.indexOf("special.html") > -1 ? e.special.val : i.indexOf("search-result") > -1 ? e.searchResult.val : e.thirdParty.val,
            t
        }
      };
      e._newsIflow = t.render = s
    }(window.__UCLIB__ || (window.__UCLIB__ = {}), i)
  }
  , function(e, t, i) {
    !function(e, t) {
      var n = e.zzd
        , a = e.serverPathPage;
      i(99);
      var o = n.Tools
        , r = e._cdls
        , s = r({
        cdlsUrl: a + "/webview/static/cdls"
      })
        , l = e.JSON
        , c = o.getQueryString("sm_article_id")
        , d = function() {
        function e(e) {
          this.key = e
        }
        return e.prototype = {
          setItem: function(e) {
            return void 0 === e || null === e ? s.removeItem(this.key) : ("string" != typeof e && (e = l.stringify(e)),
              void s.setItem(this.key, e))
          },
          getItem: function() {
            return s.getItem(this.key)
          }
        },
          e
      }()
        , p = function() {
        function e(i) {
          i = t.extend({}, e.defaults, i),
            t.extend(this, i)
        }
        return e.defaults = {
          prefix: c,
          splitStr: "_",
          doneVal: "1"
        },
          e.prototype = {
            getKey: function(e) {
              return [this.prefix, e, this.suffix].join(this.splitStr)
            },
            getDone: function(e) {
              return s.getItem(this.getKey(e)) === this.doneVal
            },
            setDone: function(e, t) {
              var i = this.getKey(e);
              t ? s.removeItem(i) : s.setItem(i, this.doneVal)
            }
          },
          e
      }()
        , m = function() {
        function e(i) {
          i = t.extend({}, e.defaults, i),
            t.extend(this, i)
        }
        return e.defaults = {
          prefix: c,
          splitStr: "_"
        },
          e.prototype = {
            getKey: function(e) {
              return [this.prefix, e, this.suffix].join(this.splitStr)
            },
            getCnt: function(e) {
              return +s.getItem(this.getKey(e)) || 0
            },
            setCnt: function(e, t) {
              return s.setItem(this.getKey(e), t),
                t
            }
          },
          e
      }()
        , f = new d("_ucid_")
        , u = new d("strategyName");
      e._cache = {
        localStorage: s,
        CacheItem: d,
        CacheAct: p,
        CacheCnt: m,
        ucid: f,
        strategy: u
      }
    }(window, $)
  }
  , function(e, t) {
    !function(e) {
      var t = function() {
        var t = e.document
          , i = "getAllData"
          , n = "setItem"
          , a = "removeItem"
          , o = "clear"
          , r = void 0 !== t.hidden
          , s = r ? "hidden" : "webkitHidden"
          , l = r ? "visibilitychange" : "webkitvisibilitychange";
        return function(r) {
          function c(e) {
            w.ready && x.contentWindow.postMessage(e, "*")
          }
          function d() {
            c({
              id: i
            })
          }
          function p(e) {
            return w.allData[e] || null
          }
          function m(e, t) {
            w.allData[e] = t,
              c({
                id: n,
                key: e,
                val: t
              })
          }
          function f(e) {
            w.allData[e] = null,
              c({
                id: a,
                key: e
              })
          }
          function u() {
            w.allData = {},
              c({
                id: o
              })
          }
          function h() {
            x = t.createElement("iframe"),
              x.style.display = "none",
              x.src = b,
              t.body.appendChild(x),
              g()
          }
          function g() {
            e.addEventListener("message", function(e) {
              var t = e.data;
              if (t.id === i) {
                w.allData = t.data,
                  w.ready = !0;
                var n = r.success;
                "function" == typeof n && n(w.allData, w)
              }
            }, !1),
              t.addEventListener(l, function() {
                !t[s] && d()
              }, !1)
          }
          r || (r = {});
          var b = r.cdlsUrl;
          if (!b)
            return console.log("cdlsUrl不能为空");
          var x, w = {
            reloadData: d,
            allData: {},
            getItem: p,
            setItem: m,
            removeItem: f,
            clear: u
          };
          return h(),
            w
        }
      }();
      e._cdls = t
    }(window)
  }
  , function(e, t, i) {
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      }
        : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
    ;
    i(101),
      function(e, t) {
        var i = '<div id="pi-alert"><div class="pi-box"><h2 class="pi-head"></h2><p class="pi-msg"></p><p><a class="pi-btn-ok"></a></p></div></div><div id="pi-confirm"><div class="pi-box"><h2 class="pi-head"></h2><p class="pi-msg"></p><p><a class="pi-btn-cancel"></a><a class="pi-btn-ok"></a></p></div></div>';
        t(document.body).append(i);
        var a = function() {
          function e() {
            r.addClass("visible");
            var e = o.onOpen;
            "function" == typeof e && e()
          }
          function i() {
            r.removeClass("visible");
            var e = o.onClose;
            "function" == typeof e && e()
          }
          var o, r = t("#pi-alert"), s = r.find(".pi-head"), l = r.find(".pi-msg"), c = r.find(".pi-btn-ok");
          return r.on("click", ".pi-btn-ok", function() {
            if (!c.hasClass("disabled")) {
              i();
              var e = o.btnOkClick;
              "function" == typeof e && e()
            }
          }).on("click", function(e) {
            o.isHideOnBgClick && 0 === t(e.target).closest(".pi-box").length && i()
          }),
            function(i) {
              "object" !== ("undefined" == typeof i ? "undefined" : n(i)) && (i = {
                msg: i
              }),
                o = t.extend({}, a.defaults, i),
                r.attr("data-pi-tag", o.tag),
                s.html(o.head),
                l.html(o.msg),
                c.text(o.okTxt),
                e()
            }
        }();
        a.defaults = {
          head: "提示",
          msg: "内容",
          okTxt: "确定",
          isHideOnBgClick: !0
        };
        var o = function() {
          function e() {
            r.addClass("visible");
            var e = a.onOpen;
            "function" == typeof e && e()
          }
          function i() {
            r.removeClass("visible");
            var e = a.onClose;
            "function" == typeof e && e()
          }
          var a, r = t("#pi-confirm"), s = r.find(".pi-head"), l = r.find(".pi-msg"), c = r.find(".pi-btn-ok"), d = r.find(".pi-btn-cancel");
          return r.on("click", ".pi-btn-ok", function() {
            if (!c.hasClass("disabled")) {
              i();
              var e = a.btnOkClick;
              "function" == typeof e && e()
            }
          }).on("click", ".pi-btn-cancel", function() {
            i();
            var e = a.btnCancelClick;
            "function" == typeof e && e()
          }).on("click", function(e) {
            a.isHideOnBgClick && 0 === t(e.target).closest(".pi-box").length && i()
          }),
            function(i) {
              "object" !== ("undefined" == typeof i ? "undefined" : n(i)) && (i = {
                msg: i
              }),
                a = t.extend({}, o.defaults, i),
                s.html(a.head),
                l.html(a.msg),
                c.text(a.okTxt),
                d.text(a.cancelTxt),
                e()
            }
        }();
        o.defaults = t.extend({}, a.defaults, {
          cancelTxt: "取消"
        }),
          e._alert = {
            alert: a,
            confirm: o
          }
      }(window, $)
  }
  , function(e, t, i) {
    var n = i(102);
    "string" == typeof n && (n = [[e.id, n, ""]]);
    i(90)(n, {});
    n.locals && (e.exports = n.locals)
  }
  , function(e, t, i) {
    t = e.exports = i(13)(),
      t.push([e.id, '#pi-alert,#pi-confirm{position:fixed;top:-200px;bottom:-200px;width:100%;background:rgba(0,0,0,.5);z-index:9999;color:#999;-webkit-transition:all .3s ease;transition:all .3s ease;visibility:hidden;opacity:0}#pi-alert.visible,#pi-confirm.visible{visibility:visible;opacity:1}#pi-alert.visible .pi-box,#pi-confirm.visible .pi-box{-webkit-transform:none;transform:none}#pi-alert .pi-box,#pi-confirm .pi-box{position:fixed;left:50%;top:50%;width:290px;margin-left:-145px;margin-top:-120px;text-align:center;border-radius:8px;background:#fff;overflow:hidden;-webkit-transition:-webkit-transform .3s ease;transition:transform .3s ease;-webkit-transform:scale3d(1.2,1.2,1);transform:scale3d(1.2,1.2,1)}#pi-alert .pi-head,#pi-confirm .pi-head{font-size:18px;color:#333;padding-top:15px}#pi-alert .pi-msg,#pi-confirm .pi-msg{padding:15px 25px;line-height:1.5;position:relative}#pi-alert .pi-msg:after,#pi-confirm .pi-msg:after{content:"";position:absolute;left:15px;right:15px;height:1px;bottom:0;background:#eee;-webkit-transform:scaleY(.5);transform:scaleY(.5)}#pi-alert [class^=pi-btn],#pi-confirm [class^=pi-btn]{display:inline-block;width:40%;margin:10px 5px;line-height:1.6}#pi-alert .pi-btn-ok,#pi-confirm .pi-btn-ok{color:#09f}#pi-alert .pi-btn-ok{width:85%}', ""])
  }
  , function(e, t, i) {
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
      }
        : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
    ;
    i(104),
      function(e, t) {
        function a(e, t) {
          var i = _.template(e);
          return i(t)
        }
        var o = e.zzd;
        i(106),
          i(107),
          i(110);
        var r = o.Tools
          , s = e._envi
          , l = e._Version
          , c = e._uca
          , d = e.pageVisibility
          , p = e.MD5
          , m = e._alert
          , f = e._cmtModel
          , u = e._cmtRpt
          , h = e._cmtCache
          , g = e._cache
          , b = e.ucapi
          , x = {
          all: function(e) {
            return a(i(111), e)
          },
          item: function(e) {
            return a(i(112), e)
          },
          title: function(e) {
            return a(i(113), e)
          },
          titleTab: function(e) {
            return a(i(114), e)
          },
          error: function(e) {
            return a(i(115), e)
          },
          mycomment: function(e) {
            return a(i(116), e)
          },
          sofa: function(e) {
            return a(i(117), e)
          }
        }
          , w = {
          getDefaults: function() {
            var e = r.getQueryString("app") || "uc-iflow"
              , t = !s.browser.uc && "share" === r.getQueryString("pagetype")
              , i = s.browser.uc && e.indexOf("webapp") > -1
              , n = i || t
              , a = n ? 3 : 10
              , o = n ? 0 : 10;
            return {
              firstCnt: a,
              moreCnt: o,
              aid: r.getQueryString("sm_article_id"),
              uc_version: s.get("ve"),
              isInnerApp: i,
              isSharePage: t,
              isShareOrInnerApp: n,
              pageType: "0"
            }
          },
          init: function(e) {
            var i = this.getDefaults()
              , n = this._params = t.extend({}, i, e);
            this.$el = t(".commentsWrap"),
              this.loading = !1,
              this.error = !1,
              this.lastTs = -1,
              this.lastHot = -1,
              this.cmtsByType = "byhot",
              this.setUcid(g.ucid.getItem()),
              this.isGteUc11 = l.match(s.get("ve"), "11.0~"),
              this.isShareOrInnerApp = n.isShareOrInnerApp,
              this.xissJsonData = n.xissJsonData || {},
              this.commentCnt = 0,
              this.$myComment = t(".my-comment"),
              this.$myCommentList = t(".mycomment-list"),
              this.$mainComment = t(".main-comment"),
              this.$mainCommentList = t(".maincomment-list"),
              this.$commentFooter = t(".comment-footer"),
              this.render(),
              this.bindEvent()
          },
          setUcid: function(e) {
            var t = this;
            e && (t.ucid = e,
              t.ucid_sign = p(e))
          },
          saveStrategy: function() {
            var e = this.data.strategyName;
            e && g.strategy.setItem(e)
          },
          render: function() {
            var e = this;
            e._params.isSharePage && t(".xissShareWrap").after(t(".commentsWrap")),
              e.renderTitle(),
              e.initCmts(),
              e.initMyCmt()
          },
          bindEvent: function() {
            var e = this;
            e.$el.on("click", ".showAllTheComment", e.onShowAllComment.bind(e)).on("click", ".agreeCnt", e.onBindAgreeBtn.bind(e)).on("click", ".commentTextObj>p,.comment-reply,.comment-detail-link", e.onBindDetailLink.bind(e)).on("click", ".errorTips", e.onBindError.bind(e)).on("click", ".myCommentBtn>div", e.onBindMyCommentBtn.bind(e)).on("click", ".sofa", e.onBindReply.bind(e)).on("click", ".child-tab", e.onBindChangeTab.bind(e)).on("click", ".comment-more-opener", e.onOpenClick.bind(e)).on("click", ".comment-agree", e.onAgreeClick.bind(e)).on("click", ".comment-down", e.onDownClick.bind(e)).on("click", ".comment-share", e.onShareClick.bind(e)).on("click", ".comment-copy", e.onCopyClick.bind(e)).on("click", ".comment-delete", e.onDeleteClick.bind(e)).on("click", ".comment-report", e.onReportClick.bind(e)),
              e.onScrollBottom(),
              e.listenCommentsScroll(),
              e.listenAppSendComment(),
              e.bindVisiblyChange(),
              e.bindCmtMore(),
              e.listenWindowResize()
          },
          renderTitle: function() {
            var e = this
              , t = e.isShareOrInnerApp ? x.title({
              title: "热门评论"
            }) : x.titleTab();
            e.$mainComment.prepend(t)
          },
          initMyCmt: function() {
            var e = this;
            if (!e.isShareOrInnerApp) {
              var t = e.ucid;
              return t ? f.ajaxMyCmt({
                client_os: "webapp",
                ucid: t
              }, function(t) {
                var i = f.filterMyCmt(t.data, e.ucid_sign);
                e.renderMyCmt(i)
              }) : void (e.ucid_sign && e.renderMyCmt(f.filterMyCmt({}, e.ucid_sign)))
            }
          },
          renderMyCmt: function(e) {
            var t = this
              , i = t.$myCommentList
              , n = t.$myComment;
            if (e.length) {
              var a = x.title({
                title: "我的评论"
              })
                , o = x.item({
                list: e,
                isGteUc11: t.isGteUc11,
                isSharePage: t._params.isSharePage,
                ucid_sign: t.ucid_sign
              });
              i.html(x.mycomment({
                titleHtml: a,
                commentsHtml: o,
                isShowBtn: e.length > 1
              })),
                n.show(),
                t.cmtExpandable(i)
            } else
              n.hide()
          },
          initCmts: function() {
            var e = this
              , t = e._params
              , i = e.$mainCommentList
              , n = e.$commentFooter
              , a = {
              count: t.firstCnt,
              ts: e.lastTs,
              client_version: t.uc_version,
              readId: t.readId,
              _opts: {
                byType: e.cmtsByType
              }
            };
            n.empty(),
              i.addClass("tab-loading").empty(),
              e.loading = !0,
              e.error = !1,
              f.ajaxCmts(a, function(t) {
                e.data = t.data || {},
                  e.renderCmts(),
                  e.saveStrategy()
              }, function() {
                e.renderCmts(1)
              })
          },
          renderCmts: function(e) {
            var i = this
              , n = i.data
              , a = i._params
              , o = i.$mainComment
              , r = i.$mainCommentList
              , s = i.$commentFooter;
            if (o.show(),
                r.removeClass("tab-loading more-loading"),
                i.loading = !1,
                e)
              return i.error = !0,
                s.html(x.error()),
                void t(".title-tab>div").addClass("tabDisable");
            var l = f.filterCmts(n);
            if (!l.length)
              return void (i.lastTs === -1 && (i.error = !0,
                r.html(x.sofa()),
                t(".title-tab>div").addClass("tabDisable")));
            n.has_more || s.html(x.all()),
            i.lastTs === -1 && i.syncAppCmtCnt(i.commentCnt = n.comment_cnt),
            i.isShareOrInnerApp && l.splice(3);
            var c = l[l.length - 1];
            i.lastTs = c.time,
              i.lastHot = c.hotScore,
              r.append(x.item({
                list: l,
                isGteUc11: i.isGteUc11,
                isSharePage: a.isSharePage,
                ucid_sign: i.ucid_sign
              })),
              i.cmtExpandable(r)
          },
          getMoreData: function() {
            var e = this
              , t = e._params
              , i = e.$mainCommentList
              , n = {
              count: t.moreCnt,
              ts: e.lastTs,
              hotValue: e.lastHot,
              client_version: t.uc_version,
              bid: t.bid,
              m_ch: t.m_ch,
              readId: t.readId,
              _opts: {
                byType: e.cmtsByType
              }
            };
            i.addClass("more-loading"),
              e.loading = !0,
              e.error = !1,
              f.ajaxCmts(n, function(t) {
                e.data = t.data || {},
                  e.renderCmts(),
                  c("click", {
                    region: "main_comment",
                    pos: "load",
                    label: 0
                  })
              }, function() {
                e.renderCmts(1),
                  c("click", {
                    region: "main_comment",
                    pos: "load",
                    label: 1
                  })
              })
          },
          onBindChangeTab: function(e) {
            var i = this
              , n = t(e.currentTarget);
            n.hasClass("tabDisable") || (i.lastTs = -1,
              i.lastHot = -1,
              i.cmtsByType = n.attr("data-type"),
              i.initCmts(),
              n.addClass("current").siblings().removeClass("current"))
          },
          onBindError: function() {
            var e = this;
            e.$commentFooter.empty(),
              e.getMoreData()
          },
          onScrollBottom: function() {
            var i = document.body;
            return function() {
              var n = this;
              n.isShareOrInnerApp || t(e).on("scroll", function() {
                !n.loading && n.data.has_more && !n.error && i.scrollTop + e.innerHeight > i.offsetHeight - 50 && n.getMoreData()
              })
            }
          }(),
          onBindAgreeBtn: function(e) {
            var i = this._params
              , n = t(e.currentTarget);
            if (!i.isSharePage) {
              var a = n.attr("data-id")
                , o = +n.attr("data-cnt") || 0
                , r = {
                client_os: "webapp",
                client_version: i.uc_version,
                bid: i.bid,
                m_ch: i.m_ch,
                aid: i.aid,
                cmt_id: a,
                _opts: {
                  oldUpCnt: o
                }
              };
              f.upAjax(r, function() {
                t('.agreeCnt[data-id="' + a + '"]').attr("data-cnt", ++o).addClass("hadAgreeCnt agreeAnimating")
              })
            }
          },
          onShowAllComment: function(e) {
            t(e.currentTarget).closest(".commentTextObj").addClass("expanded")
          },
          onBindReply: function() {
            var e = this;
            e.isReplySupport && e.configInput(null)
          },
          isReplySupport: function() {
            var e = s.get("ve")
              , t = l.match(e, "10.7.5~")
              , i = s.os.iphone && t
              , n = l.match(e, "10.7.0~")
              , a = s.os.android && n;
            return s.browser.uc && (i || a)
          }(),
          configInput: function(i) {
            var a = this
              , o = "object" === ("undefined" == typeof i ? "undefined" : n(i)) ? i : {
              placeholder: i
            }
              , r = {
              isVisible: !0,
              themeType: 1,
              wordLimit: 500,
              showInputPanel: !0,
              isShowBar: 1 == a._params.pageType,
              fail: function(t) {
                e.ucLogger({
                  ev: "jssdk_err",
                  ac: "fail",
                  lb: "ucapi",
                  msg: JSON.stringify(t),
                  api: "comment.configInput"
                })
              }
            };
            b.comment.configInput(t.extend(r, o))
          },
          onBindDetailLink: function() {
            var e = r.getQueryString("wm_aid")
              , i = r.getQueryString("is_wemedia")
              , n = ""
              , a = "//a.app.qq.com/o/simple.jsp?pkgname=com.uc.infoflow";
            return "" !== e && (n += "&wm_aid=" + e),
            "" !== i && (n += "&is_wemedia=" + i),
              function(e) {
                var i = this
                  , o = t(e.currentTarget);
                if (i.isShareOrInnerApp)
                  o.filter(".comment-detail-link").length && (c("click", {
                    region: "uc_a_d",
                    pos: "more_reply"
                  }),
                    location.href = a + n);
                else {
                  var r = o.closest("[data-href]")
                    , s = r.attr("data-href");
                  location.href = s + n
                }
                return !1
              }
          }(),
          listenAppSendComment: function() {
            var e = this
              , t = e._params.aid;
            b.comment.onSendComment3rd = function(i) {
              e.ucid_sign || (e.ucid_sign = i.uid);
              var n = i.statusCode
                , a = i.commentId;
              if (f.sendStatusMap[n]) {
                if (r.showAlert("评论成功", 0),
                    !a)
                  return;
                e.commentCnt++;
                var o = Date.now();
                h.myCmt.addItem({
                  id: a,
                  content: i.content,
                  time: o,
                  timeShow: o,
                  ucid_sign: i.uid,
                  up_cnt: 0,
                  reply_cnt: 0,
                  user: {
                    nickname: i.userNickName,
                    faceimg: i.userIcon
                  }
                }),
                  e.initMyCmt(),
                  b.comment.notifySendResult({
                    id: a,
                    aid: t,
                    status: 1,
                    errCode: n
                  })
              } else
                r.showAlert("网络异常，换个姿势再发一次～"),
                  b.comment.notifySendResult({
                    id: a,
                    status: 0,
                    errCode: n
                  });
              f.cmtStat({
                act: 3,
                mod: "cmt",
                uid: e.ucid,
                uname: i.userNickName,
                cmt: i.content.slice(0, 20),
                cmt_id: a,
                code: i.statusCode,
                msg: i.statusMessage
              })
            }
          },
          onBindMyCommentBtn: function() {
            var e = document.body;
            return function() {
              var t = this
                , i = t.$myCommentList;
              i.hasClass("on") ? (i.removeClass("on"),
                e.scrollTop = i.offset().top) : (i.addClass("on"),
                t.cmtExpandable(i))
            }
          }(),
          listenCommentsScroll: function() {
            var i, n = this, a = n.$mainCommentList, o = e.innerHeight;
            n.isShareOrInnerApp || t(e).on("scroll", function() {
              if (!i) {
                var t = a.find("li:first-child");
                if (t.length) {
                  var r = t.attr("data-id")
                    , s = t.offset().top - 60
                    , l = e.scrollY + o;
                  l > s && (i = !0,
                    c("info", {
                      v: "hot_comment",
                      et: "cmt_show",
                      aid: n._params.aid,
                      content: JSON.stringify([{
                        cmt_id: r
                      }])
                    }))
                }
              }
            })
          },
          bindVisiblyChange: function() {
            var e = this;
            d.visibilitychange(function() {
              "visible" === this.visibilityState && setTimeout(function() {
                e.backShowCmts(),
                  e.backShowMyCmt()
              }, 100)
            })
          },
          backShowCmts: function() {
            var e = this
              , i = h.hiddenCmt.getAll()
              , n = e.$mainComment;
            i.forEach(function(t) {
              e.hideCmt(t)
            }),
              n.find(".comment-list-li").each(function() {
                var e = t(this)
                  , i = e.attr("data-id")
                  , n = h.upAct.getDone(i)
                  , a = e.find(".agreeCnt");
                if (n && !a.hasClass("hadAgreeCnt")) {
                  var o = +a.attr("data-cnt") || 0;
                  a.addClass("hadAgreeCnt").attr("data-cnt", ++o)
                }
              })
          },
          backShowMyCmt: function() {
            this.initMyCmt()
          },
          bindCmtMore: function() {
            t(document).on("touchstart", function() {
              0 === t(this).closest(".comment-more-opener").length && t(".comment-more").removeClass("visible")
            });
            var e = t("#pi-alert").on("click", ".report-reason a", function() {
              var i = t(this);
              i.toggleClass("selected").siblings("a").removeClass("selected"),
                i.hasClass("selected") ? e.removeClass("disabled") : e.addClass("disabled")
            }).find(".pi-btn-ok")
          },
          onOpenClick: function(e) {
            t(e.currentTarget).siblings(".comment-more").addClass("visible")
          },
          onAgreeClick: function(e) {
            var i = t(e.currentTarget).closest(".agree-wrap").find(".agreeCnt")[0];
            this.onBindAgreeBtn(t.extend(e, {
              currentTarget: i
            }))
          },
          onDownClick: function(e) {
            var i = t(e.currentTarget)
              , n = i.attr("data-id")
              , a = {
              aid: this._params.aid,
              cmt_id: n
            };
            f.downAjax(a, function() {
              r.showAlert("提交成功")
            })
          },
          onShareClick: function(e) {
            var i = this
              , n = t(e.currentTarget)
              , a = {
              sourceUrl: n.attr("data-url"),
              title: n.attr("data-nickname") + "的评论#UC头条#",
              content: n.attr("data-content")
            };
            b.biz.share(a),
              c("click", {
                region: n.closest("[data-region]").attr("data-region"),
                pos: "share",
                label: [i.ucid, n.attr("data-id"), i._params.aid].join("|")
              })
          },
          onCopyClick: function(e) {
            var i = t(e.currentTarget).attr("data-text");
            b.base.copyToClipboard({
              text: i,
              fail: function(e) {
                r.showAlert("失败," + e.description)
              }
            })
          },
          onDeleteClick: function(e) {
            var i = this
              , n = t(e.currentTarget)
              , a = n.attr("data-id");
            m.confirm({
              head: "确认删除",
              msg: "将删除当前评论,不可恢复",
              okTxt: "删除",
              btnOkClick: function() {
                var e = {
                  articleId: i._params.aid,
                  cmtId: a,
                  ucid: i.ucid
                };
                f.deleteAjax(e, function() {
                  r.showAlert("删除成功"),
                    i.hideCmt(a)
                }),
                  c("click", {
                    region: "cmt_del_alert",
                    pos: "del"
                  })
              },
              btnCancelClick: function() {
                c("click", {
                  region: "cmt_del_alert",
                  pos: "cancel"
                })
              }
            })
          },
          onReportClick: function() {
            var e = t("#pi-alert")
              , i = e.find(".pi-btn-ok");
            return function(n) {
              var a = this
                , o = a.data
                , s = a.xissJsonData
                , l = t(n.currentTarget);
              u.getReason(null, function(t) {
                var n = '<div class="report-reason" data-region="cmt_rpt">' + t.map(function(e) {
                    return '<a data-pos="pick" data-label="' + e.name + '" data-id="' + e.id + '">' + e.name + "</a>"
                  }).join("") + "</div>";
                m.alert({
                  head: "举报原因",
                  msg: n,
                  okTxt: "提交",
                  onOpen: function() {
                    i.addClass("disabled")
                  },
                  onClose: function() {
                    i.removeClass("disabled")
                  },
                  btnOkClick: function() {
                    var t = l.attr("data-id")
                      , i = {
                      item_id: t,
                      content: l.attr("data-content"),
                      type: e.find(".report-reason .selected").attr("data-id"),
                      content_title: s.title,
                      item_url: s.zzd_url,
                      parent_id: o.parent_article_id,
                      origin_aid: o.article_id,
                      reported_uid: l.attr("data-ucid_sign"),
                      reported_nick: l.attr("data-nickname"),
                      liked_num: l.attr("data-up_cnt"),
                      comment_num: l.attr("data-reply_cnt"),
                      uid: a.ucid
                    };
                    u.report(i, function() {
                      r.showAlert("感谢您的举报"),
                        a.hideCmt(t)
                    }),
                      c("click", {
                        region: "cmt_rpt",
                        pos: "submit"
                      })
                  }
                })
              })
            }
          }(),
          hideCmt: function(e) {
            var i = this
              , n = i.$myComment
              , a = i.$mainCommentList
              , o = i.$commentFooter
              , r = t('li[data-id="' + e + '"]').remove();
            n.find(".comment-list-li").length || n.hide(),
            a.find(".comment-list-li").length || (a.html(x.sofa()),
              o.empty()),
            r.filter(".main-comment .comment-list-li").length && i.syncAppCmtCnt(--i.commentCnt)
          },
          listenWindowResize: function() {
            var i = this;
            t(e).on("resize", function() {
              i.cmtExpandable()
            })
          },
          cmtExpandable: function(e) {
            var i = void 0 === e ? t(".commentTextObj") : e.find(".commentTextObj");
            i.each(function() {
              var e = t(this);
              this.scrollHeight > this.clientHeight ? e.addClass("expandable") : e.removeClass("expandable")
            })
          },
          syncAppCmtCnt: function(e) {
            e < 0 && (e = 0),
              b.comment.notifyCommentCount({
                aid: this._params.aid,
                count: e
              })
          }
        };
        e._commentV2 = w
      }(window, $)
  }
  , function(e, t, i) {
    var n = i(105);
    "string" == typeof n && (n = [[e.id, n, ""]]);
    i(90)(n, {});
    n.locals && (e.exports = n.locals)
  }
  , function(e, t, i) {
    t = e.exports = i(13)(),
      t.i(i(17), ""),
      t.i(i(18), ""),
      t.push([e.id, '.commentsWrap{margin-bottom:20px;padding:0 15px;font-size:14px}.main-comment{position:relative}.commentsWrap .sub-title{position:relative;margin:0 0 18px;padding-top:70px}.commentsWrap .sub-title .title-text{font-size:17px;color:#333;line-height:16px;padding-left:8px;font-weight:700;text-align:center;letter-spacing:7px}.commentsWrap .sub-hot-title{height:30px}.commentsWrap .sub-hot-title:before{content:" ";display:block;width:35px;height:4px;background:#333;position:absolute;left:50%;bottom:0;margin-left:-17px}.commentsWrap .title-tab{text-align:center;margin-top:12px;color:#bbb;letter-spacing:4px}.commentsWrap .title-tab>div{display:inline-block;vertical-align:middle}.commentsWrap .title-tab .child-tab{text-indent:4px}.commentsWrap .title-tab .child-tab.current{color:#333}.commentsWrap .title-tab .child-tab.tabDisable{color:#bbb}.commentsWrap .title-tab .child-tab-apart{content:"";display:inline-block;width:3px;height:12px;background:#333;vertical-align:middle;-webkit-transform:skewX(-30deg);transform:skewX(-30deg)}.commentsWrap .title-tab .child-tab-apart.tabDisable{opacity:.3}.mycomment-list .myCommentBtnUp,.mycomment-list>li{display:none}.mycomment-list.on>li,.mycomment-list>li:first-of-type{display:list-item}.mycomment-list.on .myCommentBtnUp{display:inline-block}.mycomment-list.on .myCommentBtnDown{display:none}.myCommentBtn{line-height:30px;color:#999;text-align:center}.myCommentBtn>div{position:relative;width:50px;display:inline-block}.myCommentBtnDown:after,.myCommentBtnDown:before{border:5px solid transparent;border-top:6px solid #f9f9f9;width:0;height:0;position:absolute;bottom:9px;right:-7px;content:" "}.myCommentBtnDown:before{border-top-color:#999;right:-7px;bottom:7px}.myCommentBtnUp:after,.myCommentBtnUp:before{border:5px solid transparent;border-bottom:6px solid #f9f9f9;width:0;height:0;position:absolute;bottom:11px;right:-7px;content:" "}.myCommentBtnUp:before{border-bottom-color:#999;right:-7px;bottom:13px}.maincomment-list:after,.maincomment-list:before{display:block;text-align:center;color:#bbb;font-size:12px}.maincomment-list.tab-loading:before{content:"\\6B63\\5728\\52A0\\8F7D\\4E2D...";padding:120px 0 400px}.maincomment-list:after{content:"\\52A0\\8F7D\\4E2D...";line-height:40px;visibility:hidden}.maincomment-list.more-loading:after{visibility:visible}.inner-app .maincomment-list:after,.page-share .maincomment-list:after{display:none!important}.commentsWrap .comment-list-li{padding:15px 0 12px;position:relative;padding-left:39px;-webkit-transition:all .3s ease;transition:all .3s ease}.commentsWrap .comment-list-li.hidden{opacity:0;height:0;padding:0;overflow:hidden}.commentsWrap .comment-list-li:after{content:"";position:absolute;height:1px;bottom:0;right:0;left:39px;background:#eee;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.commentsWrap .userInfoBody{color:#bbb;position:relative}.commentsWrap .userImg{position:absolute;left:0;width:30px;height:30px;border-radius:50%;box-shadow:0 0 1px rgba(0,0,0,.3)}.commentsWrap .userName{line-height:16px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-right:90px}.commentsWrap .dateAndLocate{font-size:12px;padding-top:3px}.commentsWrap .agree-wrap{float:right;color:#999;line-height:32px;font-size:12px}.commentsWrap .agree-wrap>:not(div){float:left}.commentsWrap .agree-wrap>span:after{content:"";margin:7px 0 0 5px;float:right;height:18px;width:18px;background-size:100% 100%}.commentsWrap .agreeCnt{position:relative}.commentsWrap .agreeCnt:before{content:attr(data-cnt)}.commentsWrap .agreeCnt:after{background-image:url(' + i(20) + ")}.commentsWrap .agreeCnt .agreeAnimate{position:absolute;right:-15px;top:-6px;color:#f1635e;opacity:0}.commentsWrap .agreeAnimating .agreeAnimate{-webkit-animation:agreeNum 1s forwards ease-in-out;animation:agreeNum 1s forwards ease-in-out}@-webkit-keyframes agreeNum{0%{opacity:1}to{-webkit-transform:translate3d(0,-8px,0);opacity:0}}@keyframes agreeNum{0%{opacity:1}to{transform:translate3d(0,-8px,0);opacity:0}}.commentsWrap .agreeCnt.hadAgreeCnt{color:#f1635e}.commentsWrap .agreeCnt.hadAgreeCnt:after{background-image:url(" + i(21) + ')}.comment-more-opener{width:32px;line-height:32px;margin-left:8px;text-align:center;font-family:Arial;font-weight:700}.inner-app .comment-more-opener,.page-share .comment-more-opener{display:none!important}.comment-more-opener:before{content:"\\B7   \\B7   \\B7"}.comment-more{position:absolute;right:0;top:-28px;line-height:28px;color:#fff;background:#333;font-size:12px;border-radius:8px;display:table;white-space:nowrap;-webkit-transition:all .3s ease;transition:all .3s ease;visibility:hidden;opacity:0;-webkit-transform:translate3d(0,-3px,0);transform:translate3d(0,-3px,0)}.comment-more.visible{visibility:visible;opacity:1;-webkit-transform:none;transform:none}.comment-more:before{content:"";position:absolute;right:13px;bottom:-3px;width:6px;height:6px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:#333}.comment-more>a{display:table-cell;padding:0 14px;position:relative}.comment-more>a:not(:first-of-type):before{content:"";position:absolute;left:0;top:5px;bottom:5px;width:1px;background:hsla(0,0%,100%,.2);-webkit-transform:scaleX(.5);transform:scaleX(.5)}.commentsWrap .commentTextObj{line-height:160%;table-layout:fixed;word-break:break-all;overflow:hidden;font-size:16px;margin-top:7px;position:relative;max-height:8em}.commentsWrap .commentTextObj>p{white-space:pre-wrap}.commentsWrap .commentTextObj .showAllTheComment{display:none;position:absolute;right:0;bottom:4px;color:#bbb;font-size:13px;line-height:180%;border-radius:.9em;background:#fff;padding:0 10px}.commentsWrap .commentTextObj.expandable .showAllTheComment{display:inline-block!important}.commentsWrap .commentTextObj.expanded{max-height:none!important}.commentsWrap .commentTextObj.expanded .showAllTheComment{display:none!important}.commentsWrap .commentReply{padding-left:14px;margin-top:8px;font-size:13px;position:relative}.commentsWrap .commentReply:before{content:"";position:absolute;left:0;width:3px;top:0;bottom:6px;background:#eee}.commentsWrap .commentReplyList>li{padding-top:14px}.commentsWrap .commentReplyList>li:first-child{padding-top:0}.commentsWrap .commentReply .replyName{color:#bbb;display:block}.commentsWrap .commentReply .commentTextObj{font-size:15px;max-height:3.2em}.commentsWrap .commentReply .commentTextObj .showAllTheComment{bottom:1px}.commentsWrap .comment-detail-link{color:#bbb;margin-top:5px}.commentsWrap .comment-detail-link:after{content:"";display:inline-block;width:7px;height:7px;box-shadow:1px 1px 0 0 #bbb;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);position:relative;top:-1px}.commentsWrap .comment-detail-link .commentsCnt:before{content:attr(data-cnt)}.commentsWrap .sofa{padding-top:6px;display:block;margin:0 auto;width:152px;text-align:center;margin-top:11px;font-size:13px;color:#333;padding-bottom:20px}.commentsWrap .sofa:active{opacity:.6}.inner-app .commentsWrap .sofa,.page-share .commentsWrap .sofa{display:none!important}.commentsWrap .sofa:before{content:"";display:block;margin:0 auto;width:124px;height:57px;margin-bottom:15px;background:url(' + i(22) + ");background-size:100% 100%}.comment-footer{position:absolute;bottom:0;left:0;width:100%;text-align:center;line-height:40px;color:#aaa;font-size:12px}.inner-app .maincomment-list:after,.page-share .comment-footer{display:none!important}.report-reason{font-size:13px;line-height:260%;margin:0 -15px}.report-reason>a{display:inline-block;width:80px;margin:3px;border-radius:2.6em;border:1px solid #eee}.report-reason>a.selected{color:#09f;border-color:#09f}#pi-alert .pi-btn-ok.disabled{color:#bbb}", ""])
  }
  , function(e, t) {
    !function(e) {
      var t = e.zzd
        , i = e._cache
        , n = t.Tools
        , a = i.localStorage
        , o = e.JSON
        , r = n.getQueryString("sm_article_id")
        , s = new i.CacheAct({
        suffix: "quickComment",
        doneVal: "support"
      })
        , l = new i.CacheAct({
        suffix: "cmtDowned"
      })
        , c = new i.CacheCnt({
        suffix: "up"
      })
        , d = function() {
        function e() {
          return o.parse(a.getItem(n)) || []
        }
        function t(t) {
          var i = e();
          t += "",
          i.indexOf(t) < 0 && i.push(t) && a.setItem(n, o.stringify(i))
        }
        function i(t) {
          var i = e();
          return i.indexOf(t) > -1
        }
        var n = "__hide_cmts_" + r;
        return {
          getAll: e,
          addItem: t,
          isHide: i
        }
      }()
        , p = function() {
        function e() {
          return o.parse(a.getItem(i)) || []
        }
        function t(t, n) {
          var r = e();
          if (n) {
            var s = r.filter(function(e) {
              return e.id === n.id
            })[0];
            !s && r.unshift(s = n);
            var l = s.replyList || (s.replyList = []);
            l.unshift(t),
              l.splice(3)
          } else
            r.unshift(t);
          a.setItem(i, o.stringify(r))
        }
        var i = "cacheMyCommentMap_" + r;
        return {
          getAll: e,
          addItem: t
        }
      }();
      e._cmtCache = {
        upAct: s,
        downAct: l,
        upCnt: c,
        hiddenCmt: d,
        myCmt: p
      }
    }(window)
  }
  , function(e, t, i) {
    !function(e) {
      function t(e, t, i) {
        var n = e.id
          , a = g.upAct.getDone(n)
          , o = g.upCnt.getCnt(n)
          , r = g.hiddenCmt.getAll();
        $.extend(e, {
          timeshow: h.dateFormat(e.timeShow),
          hadSupported: a ? "hadAgreeCnt" : "",
          isShowLink: "fn-hide",
          isShowChild: "fn-hide",
          commentDetailLink: f + "/webview/comment-detail?aid=" + w + "&commentid=" + n + "&uc_biz_str=S:custom|C:comment|N:true"
        });
        var s = h.getSearchString({
          app: y,
          aid: w,
          commentid: n,
          uc_param_str: k,
          uc_biz_str: "S:custom|C:comment|N:true",
          pagetype: "share"
        });
        if (e.shareUrl || (e.shareUrl = "//s4.uczzd.cn/webview/comment-detail?" + s),
          e.user || (e.user = {}),
            e.user.nickname = x(e.user.nickname),
          o && (e.up_cnt = o),
            e.replyList)
          e.replyList = e.replyList.filter(function(e) {
            return !p(r, e.id)
          });
        else {
          e.replyList = [];
          var l = (i ? e.my_children : e.children) || [];
          l.forEach(function(i) {
            if (!p(r, i)) {
              var n = t[i];
              if (n) {
                var a = n.user;
                a && (a.nickname = x(a.nickname),
                  a.replyname = x(a.replyname)),
                  e.replyList.push(n)
              }
            }
          })
        }
        0 === e.replyList.length && (e.isShowReply = "fn-hide"),
        e.reply_cnt > 0 && (e.isShowLink = "")
      }
      function n(e, i) {
        var n = e.my_comments || []
          , a = e.comments_map || {}
          , o = [];
        n.forEach(function(e) {
          var i = a[e];
          t(i, a, 1),
            o.push(i)
        });
        var r = [];
        g.myCmt.getAll().forEach(function(e) {
          var i = e.id
            , n = o.some(function(e) {
            return e.id === i
          });
          n || (t(e, a, 1),
            r.push(e))
        });
        var s = g.hiddenCmt.getAll();
        return r.concat(o).filter(function(e) {
          return !(p(s, e.id) || e.ucid_sign !== i && 0 === e.replyList.length)
        })
      }
      function a(e) {
        var i = e.comments || []
          , n = e.comments_map || {}
          , a = []
          , o = g.hiddenCmt.getAll();
        return i.forEach(function(e) {
          if (!p(o, e)) {
            var i = n[e];
            t(i, n),
              a.push(i)
          }
        }),
          a
      }
      function o(e, t, i) {
        var n = e._opts || {}
          , a = n.byType || "byhot"
          , o = _[a];
        delete e._opts,
          $.ajax({
            url: o,
            data: $.extend({
              uc_param_str: "dnnivebichfrmintcpgieiwidsudpf"
            }, e),
            dataType: "jsonp",
            contentType: "application/json",
            timeout: 18e3,
            success: function(e) {
              t && t(e)
            },
            error: function(e, t) {
              i && i(e)
            }
          })
      }
      function r(e, t, i) {
        var n = e._opts || {}
          , a = n.oldUpCnt
          , o = e.cmt_id;
        if (o)
          return delete e._opts,
            g.upAct.getDone(o) ? h.showAlert("亲，已经赞过啦~") : void $.ajax({
              url: v.feedBacks,
              data: $.extend({
                uc_param_str: "dnnivebichfrmintcpgieiwidsudpf"
              }, e),
              dataType: "jsonp",
              contentType: "application/json",
              timeout: 15e3,
              success: function(e) {
                g.upAct.setDone(o),
                  g.upCnt.setCnt(o, ++a),
                t && t(e)
              },
              error: function(e, t) {
                i && i(e),
                  h.showAlert("网络异常")
              }
            })
      }
      function s(e, t, i) {
        var n = e.cmt_id;
        if (n)
          return g.downAct.getDone(n) ? h.showAlert("亲，已经踩过啦~") : void $.ajax({
            url: v.commentFeedbacks,
            type: "POST",
            data: JSON.stringify({
              complain: [e]
            }),
            dataType: "json",
            contentType: "application/json",
            success: function(e) {
              g.downAct.setDone(n),
              t && t(e)
            },
            error: function(e, t) {
              i && i(e),
                h.showAlert("网络异常")
            }
          })
      }
      function l(e, t, i) {
        var n = h.getSearchString(e);
        $.ajax({
          url: v.commentDelete + "&" + n,
          type: "POST",
          dataType: "json",
          contentType: "application/json",
          timeout: 5e3,
          success: function(i) {
            g.hiddenCmt.addItem(e.cmtId),
            t && t(i)
          },
          error: function(e, t) {
            i && i(e),
              h.showAlert("网络异常")
          }
        })
      }
      function c(e, t, i) {
        $.ajax({
          url: v.commentDetail,
          data: $.extend({
            uc_param_str: "dnnivebichfrmintcpgieiwidsudpf"
          }, e),
          dataType: "jsonp",
          contentType: "application/json",
          timeout: 5e3,
          success: function(e) {
            t && t(e)
          },
          error: function(e, t) {
            i && i(e)
          }
        })
      }
      function d(e) {
        var i = []
          , n = g.hiddenCmt.getAll();
        return e.forEach(function(e) {
          p(n, e.commentId) || (e.id || (e.id = e.commentId),
          e.user || (e.user = {
            faceimg: e.faceImg,
            nickname: e.nickname,
            replyname: e.replyname
          }),
            t(e),
            i.push(e))
        }),
          i
      }
      function p(e, t) {
        return e.indexOf(t) > -1
      }
      var m = e.zzd
        , f = e.serverPathPage
        , u = e.addCommonUrlParam;
      i(108);
      var h = m.Tools
        , g = e._cmtCache
        , b = e._stat
        , x = h.AntiJsValid
        , w = h.getQueryString("sm_article_id")
        , v = function() {
        var e = i(109)
          , t = {};
        return Object.keys(e).forEach(function(i) {
          t[i] = f + e[i].replace("$aid$", w) + "?" + u()
        }),
          t
      }()
        , _ = {
        byhot: v.commentsV2.replace("$type$", "byhot"),
        bytime: v.commentsV2.replace("$type$", "bytime")
      }
        , y = h.getQueryString("app")
        , k = h.getQueryString("uc_param_str")
        , C = {
        0: "评论成功",
        101: "评论成功",
        102: "评论成功",
        103: "评论成功",
        105: "评论成功"
      }
        , z = function() {
        var e;
        return function(t, i, n) {
          return e ? i && i(e) : void $.ajax({
            url: _.byhot,
            data: $.extend({
              showself: 1,
              uc_param_str: "dnnivebichfrmintcpgieiwidsudpf"
            }, t),
            dataType: "jsonp",
            contentType: "application/json",
            timeout: 3e4,
            success: function(t) {
              i && i(e = t)
            },
            error: function(e, t) {
              n && n(e)
            }
          })
        }
      }()
        , A = function() {
        var e = {
          lt: "cmt-send",
          uc_param_str: "dnsnfrventnw",
          ua: navigator.userAgent,
          xss_nrd: h.getQueryString("xss_nrd")
        };
        return function(t) {
          b.event($.extend({}, e, t))
        }
      }();
      e._cmtModel = {
        sendStatusMap: C,
        formatCmtItem: t,
        filterMyCmt: n,
        ajaxMyCmt: z,
        filterCmts: a,
        ajaxCmts: o,
        upAjax: r,
        downAjax: s,
        deleteAjax: l,
        ajaxCmtItem: c,
        filterReply: d,
        cmtStat: A
      }
    }(window)
  }
  , function(e, t) {
    !function(e) {
      function t(e) {
        var t;
        if (e) {
          var i = location.href.indexOf("?");
          if (i == -1)
            return [];
          t = location.href.substr(i + 1)
        } else
          t = location.search.substr(1);
        var n = {};
        return t.split("&").forEach(function(e) {
          if (e) {
            e = e.split("+").join(" ");
            var t = e.indexOf("=")
              , i = t > -1 ? e.substr(0, t) : e
              , a = t > -1 ? decodeURIComponent(e.substr(t + 1)) : ""
              , o = i.indexOf("[");
            if (o == -1)
              n[decodeURIComponent(i)] = a;
            else {
              var r = i.indexOf("]")
                , s = decodeURIComponent(i.substring(o + 1, r));
              i = decodeURIComponent(i.substring(0, o)),
              n[i] || (n[i] = []),
                s ? n[i][s] = a : n[i].push(a)
            }
          }
        }),
          n
      }
      function i() {
        for (var e = [].slice.call(arguments), t = e[0] || {}, i = 1; i < e.length; i++) {
          var n = e[i];
          for (var a in n)
            n.hasOwnProperty(a) && (t[a] = n[a])
        }
        return t
      }
      function n(t) {
        var i = new RegExp("(\\?|^|&|#)" + t + "=([^&|^#]*)(&|$|#)","i")
          , n = e.location.href.match(i);
        return null != n ? decodeURIComponent(n[2]) : ""
      }
      function a(e) {
        if (!e)
          return "";
        var t = [];
        for (var i in e)
          e.hasOwnProperty(i) && t.push(i + "=" + encodeURIComponent(e[i]));
        return t.join("&")
      }
      var o = "27106a4ec356"
        , r = e.location.protocol.indexOf("https") !== -1 ? "https://track.uc.cn/" : "http://track.uc.cn/"
        , s = {
        appid: o
      }
        , l = function() {
        return "third_party"
      }
        , c = {}
        , d = function(e) {
        var a = t();
        i(s, e, {
          uc_param_str: a.uc_param_str,
          pg: l() || "",
          host: location.host,
          aid: n("sm_article_id"),
          from: n("app")
        })
      }
        , p = function(t) {
        var n = i({}, {
          lt: "event",
          type: "pageview",
          e_c: "customEvent",
          e_a: "c"
        }, s, t || {})
          , o = e["WA_LOG_PAGEVIEW_IMG" + +new Date] = new Image;
        o.src = r + "collect?" + a(n) + "&_t=" + +new Date
      }
        , m = function(t) {
        var n = i({}, {
          lt: "event",
          type: "event",
          e_c: "customEvent",
          e_a: "c"
        }, s, t || {})
          , o = e["WA_LOG_EVENT_IMG" + +new Date] = new Image;
        o.src = r + "collect?" + a(n) + "&_t=" + +new Date
      };
      d(),
        c.init = d,
        c.pageview = p,
        c.event = m,
        e._stat = c
    }(window)
  }
  , function(e, t) {
    e.exports = {
      article: "/iflow/api/v1/article",
      guessLike: "/iflow/api/v1/article/$aid$/guesslike",
      related: "/iflow/api/v1/article/$aid$/related",
      relatedWemedia: "/iflow/api/v1/article/$aid$/related_wemedia",
      articleFeedbacks: "/iflow/api/v1/cmt/article/feedbacks",
      commentFeedbacks: "/iflow/api/v1/cmt/comment/feedbacks",
      ticket: "/iflow/api/v1/article/js/onecall/apiticket",
      comment: "/iflow/api/v1/cmt/article/$aid$/comment",
      comments: "/iflow/api/v1/cmt/article/$aid$/comments",
      commentsV2: "/iflow/api/v2/cmt/article/$aid$/comments/$type$",
      commentDetail: "/iflow/api/v2/cmt/detail/$commentid/comments",
      myComments: "/iflow/api/v2/cmt/user",
      feedBacks: "/iflow/api/v1/cmt/comment/feedbacks",
      like: "/iflow/api/v1/cmt/article/$aid$/like",
      likeCancel: "/iflow/api/v1/cmt/article/$aid$/like/cancel",
      getDislikeReasonList: "/iflow/api/v1/article/notin/info",
      submitDislikeReasonList: "/iflow/api/v1/article/$aid$/notin",
      complainDetails: "/iflow/api/v1/article/complain/details/2",
      complain: "/iflow/api/v1/article/complain",
      search: "/iflow/api/v1/article/fsearch",
      mediaUpdates: "/iflow/api/v1/wemedia/updates",
      videoParse: "/iflow/api/v1/article/video/parse",
      flow: "/log/api/v1/page/flow",
      info: "/log/api/v1/client/info",
      element: "/log/api/v1/element/$type$",
      vote: "/iflow/api/v1/article/vote",
      commentDelete: "/iflow/api/v1/cmt/user/delete",
      channelContent: "/iflow/api/v1/channel/23154031"
    }
  }
  , function(e, t) {
    !function(e) {
      function t(e, t, i) {
        return l.reason ? t && t(l.reason) : void $.ajax({
          url: s.getReason,
          data: $.extend({}, d, e),
          dataType: "jsonp",
          success: function(e) {
            t && t(l.reason = e.data)
          },
          error: function(e) {
            i && i(e),
              a.showAlert("网络错误")
          }
        })
      }
      function i(e, t, i) {
        var n = r.strategy.getItem();
        n && $.extend(e, {
          strategy_name: n
        }),
          $.ajax({
            url: s.report,
            data: $.extend({}, d, e),
            dataType: "jsonp",
            success: function(i) {
              o.hiddenCmt.addItem(e.item_id),
              t && t(i)
            },
            error: function(e) {
              i && i(e),
                a.showAlert("网络错误")
            }
          })
      }
      var n = e.zzd
        , a = n.Tools
        , o = e._cmtCache
        , r = e._cache
        , s = {
        getReason: "https://feedback.uc.cn/feedback/api/get_report_type",
        report: "https://feedback.uc.cn/feedback/api/submit_report"
      }
        , l = {}
        , c = "xss_comment_jb"
        , d = {
        instance: c,
        uc_param_str: "dsdd"
      };
      e._cmtRpt = {
        getReason: t,
        report: i
      }
    }(window)
  }
  , function(e, t) {
    e.exports = "<span class='allTips' >已显示全部评论</span>"
  }
  , function(e, t) {
    e.exports = '{% list.forEach(function(item) { %}\n<li class="comment-list-li" data-pos="other" data-id="{{item.id}}" data-href="{{item.commentDetailLink}}">\n\n    <div class="commentMain">\n        <img class="userImg" src="{{item.user.faceimg}}" data-pos="head" />\n\n        <div class="userInfoBody">\n            <div class="agree-wrap">\n                    <span class="agreeCnt {{item.hadSupported}}" data-pos="like"\n                          data-id="{{item.id}}" data-cnt="{{item.up_cnt}}"><span class="agreeAnimate">+1</span></span>\n\n                <a class="comment-more-opener" data-pos="more"></a>\n                <div class="comment-more">\n                    <a class="comment-agree" data-pos="up">赞</a>\n                    <!--<a class="comment-down" data-pos="down"\n                       data-id="{{item.id}}">踩</a>-->\n                    <a class="comment-reply" data-pos="reply">回复</a>\n                    <a class="comment-share" data-url="{{item.shareUrl}}" data-content="{{item.content}}"\n                       data-nickname="{{item.user.nickname}}" data-id="{{item.id}}">分享</a>\n                    {% if (isGteUc11) { %}\n                    <a class="comment-copy" data-pos="copy"\n                       data-text="{{item.content}}">复制</a>\n                    {% } %}\n                    {% if (item.ucid_sign == ucid_sign) { %}\n                    <!--<a class="comment-delete" data-pos="del"\n                       data-id="{{item.id}}">删除</a>-->\n                    {% } else { %}\n                    <a class="comment-report" data-pos="rpt"\n                       data-id="{{item.id}}" data-content="{{item.content}}"\n                       data-ucid_sign="{{item.ucid_sign}}" data-nickname="{{item.user.nickname}}"\n                       data-up_cnt="{{item.up_cnt}}" data-reply_cnt="{{item.reply_cnt}}">举报</a>\n                    {% } %}\n                </div>\n            </div>\n            <p class="userName" data-pos="nick">{{item.user.nickname}}</p>\n            <p class="dateAndLocate">{{item.timeshow}}</p>\n        </div>\n\n        <div class="commentTextObj">\n            <p class="tap-on tap-opacity" data-pos="content">{{item.content}}</p>\n            <a class="showAllTheComment" data-pos="show_all">显示全部</a>\n        </div>\n    </div>\n\n    <div class="commentReply {{item.isShowReply}}">\n        <ul class="commentReplyList">\n            {% item.replyList.forEach(function(item) { %}\n            <li data-id="{{item.id}}">\n                {% if(item.user.replyname) { %}\n                <span class="replyName">{{item.user.nickname}} <i>回复</i> {{item.user.replyname}}:</span>\n                {% } else {%}\n                <span class="replyName">{{item.user.nickname}}:</span>\n                {% } %}\n                <div class="commentTextObj">\n                    <p class="tap-on tap-opacity" data-pos="reply_content">{{item.content}}</p>\n                    <a class="showAllTheComment" data-pos="reply_show_all">显示全部</a>\n                </div>\n            </li>\n            {% }) %}\n        </ul>\n    </div>\n    {% if(isSharePage) { %}\n    <div class="comment-detail-link {{item.isShowLink}}">\n        更多<span class="commentsCnt" data-cnt="{{item.reply_cnt}}"></span>条回复\n    </div>\n    {% } else { %}\n    <div data-pos="detail" class="comment-detail-link {{item.isShowLink}}">\n        查看全部<span class="commentsCnt" data-cnt="{{item.reply_cnt}}"></span>条回复\n    </div>\n    {% } %}\n</li>\n{% }) %}'
  }
  , function(e, t) {
    e.exports = '<div class="sub-title sub-hot-title fn-clear" data-pos="title">\n    <div class="title-line">\n        <div class="line-inner"></div>\n    </div>\n    <div class="title-text">{{title}}</div>\n</div>\n'
  }
  , function(e, t) {
    e.exports = '<div class="sub-title sub-title-tab  fn-clear" data-pos="title">\n  <div class="title-text">评论</div>\n\n  <div class="title-tab fn-clear">\n    <div class="child-tab current" data-type="byhot" data-pos="by_hot">热门</div>\n    <div class="child-tab-apart"></div>\n    <div class="child-tab" data-type="bytime" data-pos="by_time">最新</div>\n  </div>\n\n</div>\n'
  }
  , function(e, t) {
    e.exports = "<span class='errorTips' data-region='comment_more' data-pos='load_fail'>加载失败，点击加载更多评论</span>"
  }
  , function(e, t) {
    e.exports = '{{titleHtml}}\n{{commentsHtml}}\n\n{% if(isShowBtn) { %}\n    <div class="myCommentBtn">\n        <div class="myCommentBtnDown" data-pos="open">更多</div>\n        <div class="myCommentBtnUp" data-pos="close">收起</div>\n    </div>\n{% } %}'
  }
  , function(e, t) {
    e.exports = '<a class="sofa" data-pos="cmtSofa">还没评论 快来说两句</a>'
  }
  , function(e, t, i) {
    i(119),
      function(e, t) {
        function n(e, t) {
          return e(t)
        }
        var a = e.zzd
          , o = e._envi
          , r = a.Tools
          , s = e._Version
          , l = e._uca
          , c = e.ucapi
          , d = {
          list: function(e) {
            return n(i(121), e)
          },
          eventTag: function(e) {
            return n(i(141), e)
          }
        }
          , p = {
          init: function(e) {
            this.data = e || {},
              this.$el = t(".tags"),
              this.$queryTags = this.$el.find(".query-tags"),
              this.$eventTagInfo = this.$el.find(".event-tag-info");
            var i = o.get("ve")
              , n = s.match(i, "11.0.5.829~")
              , a = s.match(i, "11.3.8.909~");
            this.isGte11o3 = s.match(i, "11.3~"),
              this.aid = r.getQueryString("aid"),
              this.cid = r.getQueryString("cid"),
            (o.os.iphone && n || o.os.android && a) && (this.render(),
              this.bindEvent())
          },
          render: function() {
            var e = this
              , t = e.data.query_tags || []
              , i = e.data.event_tag_info || [];
            t.length && e.$queryTags.html(d.list({
              tagsList: t
            })).removeClass("fn-hide"),
            i.length && e.$eventTagInfo.html(d.eventTag({
              list: i
            })).removeClass("fn-hide")
          },
          bindEvent: function() {
            var e = this;
            e.$el.on("click", ".tag", e.onItem.bind(e)),
              e.listenScroll()
          },
          onItem: function(e) {
            var i = this
              , n = t(e.currentTarget)
              , a = n.attr("data-type")
              , o = n.attr("data-tag");
            l("info", {
              et: "page_tag",
              at: "click",
              tag_type: a,
              aid: i.aid,
              cid: i.cid,
              content: JSON.stringify([{
                tag: o,
                url: ""
              }])
            }),
              i.isGte11o3 ? c.infoflow.jumpPage({
                page: "nf_label_home",
                info: {
                  from: 2,
                  keyword: o
                }
              }) : c.infoflow.jumpPage({
                page: "nf_label_search",
                info: {
                  type: "0",
                  keyword: o
                }
              })
          },
          listenScroll: function() {
            var i = this
              , n = document.body;
            t(e).on("scroll", function() {
              i.$queryTags.is(":visible") && !i.$queryTags.isPvLoged && n.scrollTop + e.innerHeight - 30 > i.$queryTags.offset().top && (i.$queryTags.isPvLoged = !0,
                l("info", {
                  et: "page_tag",
                  at: "show",
                  tag_type: 0,
                  aid: i.aid,
                  cid: i.cid,
                  content: JSON.stringify(i.data.query_tags)
                })),
              i.$eventTagInfo.is(":visible") && !i.$eventTagInfo.isPvLoged && n.scrollTop + e.innerHeight - 30 > i.$eventTagInfo.offset().top && (i.$eventTagInfo.isPvLoged = !0,
                l("info", {
                  et: "page_tag",
                  at: "show",
                  tag_type: 3,
                  aid: i.aid,
                  cid: i.cid,
                  content: JSON.stringify(i.data.event_tag_info)
                }))
            }).trigger("scroll")
          }
        };
        e._tags = p
      }(window, $)
  }
  , function(e, t, i) {
    var n = i(120);
    "string" == typeof n && (n = [[e.id, n, ""]]);
    i(90)(n, {});
    n.locals && (e.exports = n.locals)
  }
  , function(e, t, i) {
    t = e.exports = i(13)(),
      t.push([e.id, '.tags{padding:0 15px;margin-top:20px;font-size:16px}.tags .tag-name:after,.tags .tag-name:before{content:"#"}.event-tag-info{padding-top:20px;position:relative}.event-tag-info:before{content:"";position:absolute;top:0;left:0;right:0;border-top:1px solid #eee;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.event-tag-info .tag{display:block}.event-tag-info .tag:active{opacity:.8}.event-tag-info .img{width:100px;height:65px;float:left;margin-right:10px;vertical-align:top}.event-tag-info .summary{color:#bbb;font-size:12px;line-height:150%;height:3em;padding-top:5px;overflow:hidden;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical}.query-tags{margin:20px 0;height:1.85em;overflow:hidden;font-size:14px;line-height:185%}.query-tags .tag{position:relative;display:inline-block;color:#333;letter-spacing:2px;padding:0 13px;margin:0 10px 2px 0}.query-tags .tag:before{content:"";position:absolute;left:0;top:0;width:200%;height:200%;box-sizing:border-box;border:1px solid #e2e2e2;border-radius:6px;-webkit-transform-origin:0 0;transform-origin:0 0;-webkit-transform:scale(.5);transform:scale(.5);z-index:-1}.query-tags .tag:active:before{background:#eee}', ""])
  }
  , function(e, t, i) {
    var n = i(122);
    e.exports = (n.default || n).template({
      1: function(e, t, i, n, a) {
        var o, r = null != t ? t : {}, s = i.helperMissing, l = "function", c = e.escapeExpression;
        return '    <a class="tag" data-tag="' + c((o = null != (o = i.tag || (null != t ? t.tag : t)) ? o : s,
            typeof o === l ? o.call(r, {
              name: "tag",
              hash: {},
              data: a
            }) : o)) + '" data-type="0">\n        <i class="tag-name">' + c((o = null != (o = i.tag || (null != t ? t.tag : t)) ? o : s,
            typeof o === l ? o.call(r, {
              name: "tag",
              hash: {},
              data: a
            }) : o)) + "</i>\n    </a>\n"
      },
      compiler: [7, ">= 4.0.0"],
      main: function(e, t, i, n, a) {
        var o;
        return null != (o = i.each.call(null != t ? t : {}, null != t ? t.tagsList : t, {
          name: "each",
          hash: {},
          fn: e.program(1, a, 0),
          inverse: e.noop,
          data: a
        })) ? o : ""
      },
      useData: !0
    })
  }
  , function(e, t, i) {
    e.exports = i(123).default
  }
  , function(e, t, i) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function a(e) {
      if (e && e.__esModule)
        return e;
      var t = {};
      if (null != e)
        for (var i in e)
          Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
      return t.default = e,
        t
    }
    function o() {
      var e = new s.HandlebarsEnvironment;
      return f.extend(e, s),
        e.SafeString = c.default,
        e.Exception = p.default,
        e.Utils = f,
        e.escapeExpression = f.escapeExpression,
        e.VM = h,
        e.template = function(t) {
          return h.template(t, e)
        }
        ,
        e
    }
    t.__esModule = !0;
    var r = i(124)
      , s = a(r)
      , l = i(138)
      , c = n(l)
      , d = i(126)
      , p = n(d)
      , m = i(125)
      , f = a(m)
      , u = i(139)
      , h = a(u)
      , g = i(140)
      , b = n(g)
      , x = o();
    x.create = o,
      b.default(x),
      x.default = x,
      t.default = x,
      e.exports = t.default
  }
  , function(e, t, i) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function a(e, t, i) {
      this.helpers = e || {},
        this.partials = t || {},
        this.decorators = i || {},
        l.registerDefaultHelpers(this),
        c.registerDefaultDecorators(this)
    }
    t.__esModule = !0,
      t.HandlebarsEnvironment = a;
    var o = i(125)
      , r = i(126)
      , s = n(r)
      , l = i(127)
      , c = i(135)
      , d = i(137)
      , p = n(d)
      , m = "4.0.5";
    t.VERSION = m;
    var f = 7;
    t.COMPILER_REVISION = f;
    var u = {
      1: "<= 1.0.rc.2",
      2: "== 1.0.0-rc.3",
      3: "== 1.0.0-rc.4",
      4: "== 1.x.x",
      5: "== 2.0.0-alpha.x",
      6: ">= 2.0.0-beta.1",
      7: ">= 4.0.0"
    };
    t.REVISION_CHANGES = u;
    var h = "[object Object]";
    a.prototype = {
      constructor: a,
      logger: p.default,
      log: p.default.log,
      registerHelper: function(e, t) {
        if (o.toString.call(e) === h) {
          if (t)
            throw new s.default("Arg not supported with multiple helpers");
          o.extend(this.helpers, e)
        } else
          this.helpers[e] = t
      },
      unregisterHelper: function(e) {
        delete this.helpers[e]
      },
      registerPartial: function(e, t) {
        if (o.toString.call(e) === h)
          o.extend(this.partials, e);
        else {
          if ("undefined" == typeof t)
            throw new s.default('Attempting to register a partial called "' + e + '" as undefined');
          this.partials[e] = t
        }
      },
      unregisterPartial: function(e) {
        delete this.partials[e]
      },
      registerDecorator: function(e, t) {
        if (o.toString.call(e) === h) {
          if (t)
            throw new s.default("Arg not supported with multiple decorators");
          o.extend(this.decorators, e)
        } else
          this.decorators[e] = t
      },
      unregisterDecorator: function(e) {
        delete this.decorators[e]
      }
    };
    var g = p.default.log;
    t.log = g,
      t.createFrame = o.createFrame,
      t.logger = p.default
  }
  , function(e, t) {
    "use strict";
    function i(e) {
      return d[e]
    }
    function n(e) {
      for (var t = 1; t < arguments.length; t++)
        for (var i in arguments[t])
          Object.prototype.hasOwnProperty.call(arguments[t], i) && (e[i] = arguments[t][i]);
      return e
    }
    function a(e, t) {
      for (var i = 0, n = e.length; i < n; i++)
        if (e[i] === t)
          return i;
      return -1
    }
    function o(e) {
      if ("string" != typeof e) {
        if (e && e.toHTML)
          return e.toHTML();
        if (null == e)
          return "";
        if (!e)
          return e + "";
        e = "" + e
      }
      return m.test(e) ? e.replace(p, i) : e
    }
    function r(e) {
      return !e && 0 !== e || !(!h(e) || 0 !== e.length)
    }
    function s(e) {
      var t = n({}, e);
      return t._parent = e,
        t
    }
    function l(e, t) {
      return e.path = t,
        e
    }
    function c(e, t) {
      return (e ? e + "." : "") + t
    }
    t.__esModule = !0,
      t.extend = n,
      t.indexOf = a,
      t.escapeExpression = o,
      t.isEmpty = r,
      t.createFrame = s,
      t.blockParams = l,
      t.appendContextPath = c;
    var d = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
      "`": "&#x60;",
      "=": "&#x3D;"
    }
      , p = /[&<>"'`=]/g
      , m = /[&<>"'`=]/
      , f = Object.prototype.toString;
    t.toString = f;
    var u = function(e) {
      return "function" == typeof e
    };
    u(/x/) && (t.isFunction = u = function(e) {
        return "function" == typeof e && "[object Function]" === f.call(e)
      }
    ),
      t.isFunction = u;
    var h = Array.isArray || function(e) {
        return !(!e || "object" != typeof e) && "[object Array]" === f.call(e)
      }
    ;
    t.isArray = h
  }
  , function(e, t) {
    "use strict";
    function i(e, t) {
      var a = t && t.loc
        , o = void 0
        , r = void 0;
      a && (o = a.start.line,
        r = a.start.column,
        e += " - " + o + ":" + r);
      for (var s = Error.prototype.constructor.call(this, e), l = 0; l < n.length; l++)
        this[n[l]] = s[n[l]];
      Error.captureStackTrace && Error.captureStackTrace(this, i);
      try {
        a && (this.lineNumber = o,
          Object.defineProperty ? Object.defineProperty(this, "column", {
            value: r
          }) : this.column = r)
      } catch (e) {}
    }
    t.__esModule = !0;
    var n = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
    i.prototype = new Error,
      t.default = i,
      e.exports = t.default
  }
  , function(e, t, i) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function a(e) {
      r.default(e),
        l.default(e),
        d.default(e),
        m.default(e),
        u.default(e),
        g.default(e),
        x.default(e)
    }
    t.__esModule = !0,
      t.registerDefaultHelpers = a;
    var o = i(128)
      , r = n(o)
      , s = i(129)
      , l = n(s)
      , c = i(130)
      , d = n(c)
      , p = i(131)
      , m = n(p)
      , f = i(132)
      , u = n(f)
      , h = i(133)
      , g = n(h)
      , b = i(134)
      , x = n(b)
  }
  , function(e, t, i) {
    "use strict";
    t.__esModule = !0;
    var n = i(125);
    t.default = function(e) {
      e.registerHelper("blockHelperMissing", function(t, i) {
        var a = i.inverse
          , o = i.fn;
        if (t === !0)
          return o(this);
        if (t === !1 || null == t)
          return a(this);
        if (n.isArray(t))
          return t.length > 0 ? (i.ids && (i.ids = [i.name]),
            e.helpers.each(t, i)) : a(this);
        if (i.data && i.ids) {
          var r = n.createFrame(i.data);
          r.contextPath = n.appendContextPath(i.data.contextPath, i.name),
            i = {
              data: r
            }
        }
        return o(t, i)
      })
    }
      ,
      e.exports = t.default
  }
  , function(e, t, i) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    t.__esModule = !0;
    var a = i(125)
      , o = i(126)
      , r = n(o);
    t.default = function(e) {
      e.registerHelper("each", function(e, t) {
        function i(t, i, o) {
          c && (c.key = t,
            c.index = i,
            c.first = 0 === i,
            c.last = !!o,
          d && (c.contextPath = d + t)),
            l += n(e[t], {
              data: c,
              blockParams: a.blockParams([e[t], t], [d + t, null])
            })
        }
        if (!t)
          throw new r.default("Must pass iterator to #each");
        var n = t.fn
          , o = t.inverse
          , s = 0
          , l = ""
          , c = void 0
          , d = void 0;
        if (t.data && t.ids && (d = a.appendContextPath(t.data.contextPath, t.ids[0]) + "."),
          a.isFunction(e) && (e = e.call(this)),
          t.data && (c = a.createFrame(t.data)),
          e && "object" == typeof e)
          if (a.isArray(e))
            for (var p = e.length; s < p; s++)
              s in e && i(s, s, s === e.length - 1);
          else {
            var m = void 0;
            for (var f in e)
              e.hasOwnProperty(f) && (void 0 !== m && i(m, s - 1),
                m = f,
                s++);
            void 0 !== m && i(m, s - 1, !0)
          }
        return 0 === s && (l = o(this)),
          l
      })
    }
      ,
      e.exports = t.default
  }
  , function(e, t, i) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    t.__esModule = !0;
    var a = i(126)
      , o = n(a);
    t.default = function(e) {
      e.registerHelper("helperMissing", function() {
        if (1 !== arguments.length)
          throw new o.default('Missing helper: "' + arguments[arguments.length - 1].name + '"')
      })
    }
      ,
      e.exports = t.default
  }
  , function(e, t, i) {
    "use strict";
    t.__esModule = !0;
    var n = i(125);
    t.default = function(e) {
      e.registerHelper("if", function(e, t) {
        return n.isFunction(e) && (e = e.call(this)),
          !t.hash.includeZero && !e || n.isEmpty(e) ? t.inverse(this) : t.fn(this);
      }),
        e.registerHelper("unless", function(t, i) {
          return e.helpers.if.call(this, t, {
            fn: i.inverse,
            inverse: i.fn,
            hash: i.hash
          })
        })
    }
      ,
      e.exports = t.default
  }
  , function(e, t) {
    "use strict";
    t.__esModule = !0,
      t.default = function(e) {
        e.registerHelper("log", function() {
          for (var t = [void 0], i = arguments[arguments.length - 1], n = 0; n < arguments.length - 1; n++)
            t.push(arguments[n]);
          var a = 1;
          null != i.hash.level ? a = i.hash.level : i.data && null != i.data.level && (a = i.data.level),
            t[0] = a,
            e.log.apply(e, t)
        })
      }
      ,
      e.exports = t.default
  }
  , function(e, t) {
    "use strict";
    t.__esModule = !0,
      t.default = function(e) {
        e.registerHelper("lookup", function(e, t) {
          return e && e[t]
        })
      }
      ,
      e.exports = t.default
  }
  , function(e, t, i) {
    "use strict";
    t.__esModule = !0;
    var n = i(125);
    t.default = function(e) {
      e.registerHelper("with", function(e, t) {
        n.isFunction(e) && (e = e.call(this));
        var i = t.fn;
        if (n.isEmpty(e))
          return t.inverse(this);
        var a = t.data;
        return t.data && t.ids && (a = n.createFrame(t.data),
          a.contextPath = n.appendContextPath(t.data.contextPath, t.ids[0])),
          i(e, {
            data: a,
            blockParams: n.blockParams([e], [a && a.contextPath])
          })
      })
    }
      ,
      e.exports = t.default
  }
  , function(e, t, i) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function a(e) {
      r.default(e)
    }
    t.__esModule = !0,
      t.registerDefaultDecorators = a;
    var o = i(136)
      , r = n(o)
  }
  , function(e, t, i) {
    "use strict";
    t.__esModule = !0;
    var n = i(125);
    t.default = function(e) {
      e.registerDecorator("inline", function(e, t, i, a) {
        var o = e;
        return t.partials || (t.partials = {},
            o = function(a, o) {
              var r = i.partials;
              i.partials = n.extend({}, r, t.partials);
              var s = e(a, o);
              return i.partials = r,
                s
            }
        ),
          t.partials[a.args[0]] = a.fn,
          o
      })
    }
      ,
      e.exports = t.default
  }
  , function(e, t, i) {
    "use strict";
    t.__esModule = !0;
    var n = i(125)
      , a = {
      methodMap: ["debug", "info", "warn", "error"],
      level: "info",
      lookupLevel: function(e) {
        if ("string" == typeof e) {
          var t = n.indexOf(a.methodMap, e.toLowerCase());
          e = t >= 0 ? t : parseInt(e, 10)
        }
        return e
      },
      log: function(e) {
        if (e = a.lookupLevel(e),
          "undefined" != typeof console && a.lookupLevel(a.level) <= e) {
          var t = a.methodMap[e];
          console[t] || (t = "log");
          for (var i = arguments.length, n = Array(i > 1 ? i - 1 : 0), o = 1; o < i; o++)
            n[o - 1] = arguments[o];
          console[t].apply(console, n)
        }
      }
    };
    t.default = a,
      e.exports = t.default
  }
  , function(e, t) {
    "use strict";
    function i(e) {
      this.string = e
    }
    t.__esModule = !0,
      i.prototype.toString = i.prototype.toHTML = function() {
        return "" + this.string
      }
      ,
      t.default = i,
      e.exports = t.default
  }
  , function(e, t, i) {
    "use strict";
    function n(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function a(e) {
      if (e && e.__esModule)
        return e;
      var t = {};
      if (null != e)
        for (var i in e)
          Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
      return t.default = e,
        t
    }
    function o(e) {
      var t = e && e[0] || 1
        , i = b.COMPILER_REVISION;
      if (t !== i) {
        if (t < i) {
          var n = b.REVISION_CHANGES[i]
            , a = b.REVISION_CHANGES[t];
          throw new g.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + n + ") or downgrade your runtime to an older version (" + a + ").")
        }
        throw new g.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + e[1] + ").")
      }
    }
    function r(e, t) {
      function i(i, n, a) {
        a.hash && (n = u.extend({}, n, a.hash),
        a.ids && (a.ids[0] = !0)),
          i = t.VM.resolvePartial.call(this, i, n, a);
        var o = t.VM.invokePartial.call(this, i, n, a);
        if (null == o && t.compile && (a.partials[a.name] = t.compile(i, e.compilerOptions, t),
            o = a.partials[a.name](n, a)),
          null != o) {
          if (a.indent) {
            for (var r = o.split("\n"), s = 0, l = r.length; s < l && (r[s] || s + 1 !== l); s++)
              r[s] = a.indent + r[s];
            o = r.join("\n")
          }
          return o
        }
        throw new g.default("The partial " + a.name + " could not be compiled when running in runtime-only mode")
      }
      function n(t) {
        function i(t) {
          return "" + e.main(a, t, a.helpers, a.partials, r, l, s)
        }
        var o = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1]
          , r = o.data;
        n._setup(o),
        !o.partial && e.useData && (r = p(t, r));
        var s = void 0
          , l = e.useBlockParams ? [] : void 0;
        return e.useDepths && (s = o.depths ? t != o.depths[0] ? [t].concat(o.depths) : o.depths : [t]),
          (i = m(e.main, i, a, o.depths || [], r, l))(t, o)
      }
      if (!t)
        throw new g.default("No environment passed to template");
      if (!e || !e.main)
        throw new g.default("Unknown template object: " + typeof e);
      e.main.decorator = e.main_d,
        t.VM.checkRevision(e.compiler);
      var a = {
        strict: function(e, t) {
          if (!(t in e))
            throw new g.default('"' + t + '" not defined in ' + e);
          return e[t]
        },
        lookup: function(e, t) {
          for (var i = e.length, n = 0; n < i; n++)
            if (e[n] && null != e[n][t])
              return e[n][t]
        },
        lambda: function(e, t) {
          return "function" == typeof e ? e.call(t) : e
        },
        escapeExpression: u.escapeExpression,
        invokePartial: i,
        fn: function(t) {
          var i = e[t];
          return i.decorator = e[t + "_d"],
            i
        },
        programs: [],
        program: function(e, t, i, n, a) {
          var o = this.programs[e]
            , r = this.fn(e);
          return t || a || n || i ? o = s(this, e, r, t, i, n, a) : o || (o = this.programs[e] = s(this, e, r)),
            o
        },
        data: function(e, t) {
          for (; e && t--; )
            e = e._parent;
          return e
        },
        merge: function(e, t) {
          var i = e || t;
          return e && t && e !== t && (i = u.extend({}, t, e)),
            i
        },
        noop: t.VM.noop,
        compilerInfo: e.compiler
      };
      return n.isTop = !0,
        n._setup = function(i) {
          i.partial ? (a.helpers = i.helpers,
            a.partials = i.partials,
            a.decorators = i.decorators) : (a.helpers = a.merge(i.helpers, t.helpers),
          e.usePartial && (a.partials = a.merge(i.partials, t.partials)),
          (e.usePartial || e.useDecorators) && (a.decorators = a.merge(i.decorators, t.decorators)))
        }
        ,
        n._child = function(t, i, n, o) {
          if (e.useBlockParams && !n)
            throw new g.default("must pass block params");
          if (e.useDepths && !o)
            throw new g.default("must pass parent depths");
          return s(a, t, e[t], i, 0, n, o)
        }
        ,
        n
    }
    function s(e, t, i, n, a, o, r) {
      function s(t) {
        var a = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1]
          , s = r;
        return r && t != r[0] && (s = [t].concat(r)),
          i(e, t, e.helpers, e.partials, a.data || n, o && [a.blockParams].concat(o), s)
      }
      return s = m(i, s, e, r, n, o),
        s.program = t,
        s.depth = r ? r.length : 0,
        s.blockParams = a || 0,
        s
    }
    function l(e, t, i) {
      if (e)
        e.call || i.name || (i.name = e,
          e = i.partials[e]);
      else if ("@partial-block" === i.name) {
        for (var n = i.data; n["partial-block"] === d; )
          n = n._parent;
        e = n["partial-block"],
          n["partial-block"] = d
      } else
        e = i.partials[i.name];
      return e
    }
    function c(e, t, i) {
      i.partial = !0,
      i.ids && (i.data.contextPath = i.ids[0] || i.data.contextPath);
      var n = void 0;
      if (i.fn && i.fn !== d && (i.data = b.createFrame(i.data),
          n = i.data["partial-block"] = i.fn,
        n.partials && (i.partials = u.extend({}, i.partials, n.partials))),
        void 0 === e && n && (e = n),
        void 0 === e)
        throw new g.default("The partial " + i.name + " could not be found");
      if (e instanceof Function)
        return e(t, i)
    }
    function d() {
      return ""
    }
    function p(e, t) {
      return t && "root"in t || (t = t ? b.createFrame(t) : {},
        t.root = e),
        t
    }
    function m(e, t, i, n, a, o) {
      if (e.decorator) {
        var r = {};
        t = e.decorator(t, r, i, n && n[0], a, o, n),
          u.extend(t, r)
      }
      return t
    }
    t.__esModule = !0,
      t.checkRevision = o,
      t.template = r,
      t.wrapProgram = s,
      t.resolvePartial = l,
      t.invokePartial = c,
      t.noop = d;
    var f = i(125)
      , u = a(f)
      , h = i(126)
      , g = n(h)
      , b = i(124)
  }
  , function(e, t) {
    (function(i) {
        "use strict";
        t.__esModule = !0,
          t.default = function(e) {
            var t = "undefined" != typeof i ? i : window
              , n = t.Handlebars;
            e.noConflict = function() {
              return t.Handlebars === e && (t.Handlebars = n),
                e
            }
          }
          ,
          e.exports = t.default
      }
    ).call(t, function() {
      return this
    }())
  }
  , function(e, t, i) {
    var n = i(122);
    e.exports = (n.default || n).template({
      1: function(e, t, i, n, a) {
        var o, r = null != t ? t : {}, s = i.helperMissing, l = "function", c = e.escapeExpression;
        return '    <a class="tag" data-tag="' + c((o = null != (o = i.name || (null != t ? t.name : t)) ? o : s,
            typeof o === l ? o.call(r, {
              name: "name",
              hash: {},
              data: a
            }) : o)) + '" data-type="3">\n        <img class="img" src="' + c((o = null != (o = i.img || (null != t ? t.img : t)) ? o : s,
            typeof o === l ? o.call(r, {
              name: "img",
              hash: {},
              data: a
            }) : o)) + '&width=200&height=130" />\n        <i class="name tag-name">' + c((o = null != (o = i.name || (null != t ? t.name : t)) ? o : s,
            typeof o === l ? o.call(r, {
              name: "name",
              hash: {},
              data: a
            }) : o)) + '</i>\n        <p class="summary">' + c((o = null != (o = i.summary || (null != t ? t.summary : t)) ? o : s,
            typeof o === l ? o.call(r, {
              name: "summary",
              hash: {},
              data: a
            }) : o)) + "</p>\n    </a>\n"
      },
      compiler: [7, ">= 4.0.0"],
      main: function(e, t, i, n, a) {
        var o;
        return null != (o = i.each.call(null != t ? t : {}, null != t ? t.list : t, {
          name: "each",
          hash: {},
          fn: e.program(1, a, 0),
          inverse: e.noop,
          data: a
        })) ? o : ""
      },
      useData: !0
    })
  }
  , function(e, t) {
    var i = window._relate = {};
    !function(e, t) {
      var i = window._Version
        , n = window.serverPathIflow
        , a = window.netWork
        , o = window.zzd
        , r = window._storage
        , s = window.matchUrlQueryParams
        , l = window._envi
        , c = window.ucapi
        , d = window._uc
        , p = window._uca
        , m = window.checkucapi
        , f = {
        init: function(e, t) {
          if (this.data = e,
              this._params = t,
              this.$el = $(".relate"),
              this.getData(),
              this.article_length = e.content_length,
            0 != this.article_length) {
            var i = "http://m.uczzd.cn/ucnews/news?app=ucnews-iflow&aid=" + this.data.id + "&cid=" + this.data.cid + "&zzd_from=ucnews-iflow&uc_param_str=dndsfrvesvntnwpfgi&recoid=" + this.data.recoid + "&rd_type=reco";
            this.openAppUrl = "//iflow.uczzd.cn/newsapp/openapp.html?pageurl=" + encodeURIComponent(i),
              this.openAppUrlComment = "//iflow.uczzd.cn/newsapp/openapp.html?pageurl=" + encodeURIComponent(i + "&gocomment=1")
          } else
            this.openAppUrl = "//iflow.uczzd.cn/newsapp/openapp.html",
              this.openAppUrlComment = "//iflow.uczzd.cn/newsapp/openapp.html"
        },
        getData: function() {
          var e = this
            , t = n + "/" + a.related + "/api/v1/article/" + e._params.aid + "/related";
          $.ajax({
            url: t,
            type: "GET",
            data: {
              cid: e._params.cid,
              client_version: o.CLIENT_VERSION,
              count: 3,
              content_cnt: 0,
              app: e._params.appName,
              refReadId: r.get("_read_id"),
              uc_param_str: "dnnivebichfrmintcpgieiwidsudpf"
            },
            dataType: "jsonp",
            jsonp: "callback",
            success: function(t) {
              t && t.result && 0 === t.result.status && t.data.articles.length > 0 && (e.data.relate_item = t.data.articles,
                e.render())
            }
          })
        },
        render: function() {
          this._params.isSharePage && this.$el.find(".sub-title p").text("相关阅读"),
            this.data && this.data.relate_item && this.data.relate_item.length > 0 ? (this.renderRelateItem(),
              this.renderChanel()) : this.data && this.data.query_tags && this.data.query_tags.length > 0 ? this.data.redirect_ch_id && this.data.redirect_name && this.renderChanel() : this.renderSearchChanel(),
            this.renderRelateScroll()
        },
        renderRelateItem: function() {
          var e, t = this, i = t.data.relate_item, n = i.length, a = [];
          i.length > 3 && (n = 3),
            t._params.isSharePage;
          for (var o = 0; o < n; o++) {
            var r = {
              rd_type: "relate",
              readId: i[o].read_id,
              refrd_id: t._params.readId,
              innerType: "relate"
            };
            e = i[o].is_wemedia ? i[o].url : s(i[o].url, r),
              e = s(e, {
                app: t._params.appName
              });
            var l = i[o].thumbnails && i[o].thumbnails.length > 0 ? i[o].thumbnails[0].url : ""
              , c = i[o].videos && i[o].videos.length > 0 ? 1 : 0
              , d = l ? c > 0 ? 2 : 1 : 0;
            a.push({
              read_id: i[o].read_id,
              url: e,
              id: i[o].id,
              title: i[o].title,
              cid: i[o].cid,
              publish_time: new Date(i[o].publish_time).format("MM-dd hh:mm"),
              source_name: i[o].source_name,
              article_type: d,
              content_type: i[o].content_type,
              is_wemediatype: i[o].is_wemedia && !t._params.isSharePage ? 1 : 0,
              thumbnails: l,
              width: 220,
              height: 166,
              item_type: i[o].item_type,
              share_url: i[o].share_url,
              index: o
            })
          }
          var p = $("#tpl-sub-item").html()
            , m = _.template(p)
            , f = m({
            relateList: a
          });
          this.$el.find(".sub-content").append(f),
            this.$el.removeClass("fn-hide"),
            $(".sub-item").on("click", function(e) {
              t.onItem(e)
            })
        },
        renderKeyword: function(e) {
          var t = this
            , n = t.data
            , a = this.$el.find(".sub-word")
            , o = l.get("ve");
          if (n.query_tags && n.query_tags.length > 0) {
            if (l.os.iphone && i.match(o, "~10.7.0"))
              return;
            var r = $("#tpl-sub-word").html()
              , s = _.template(r)
              , c = s({
              query_tags: n.query_tags
            });
            a.append(c),
            e && e.simpleStyle && this.$el.addClass("relate-simple-keyword"),
              this.$el.removeClass("fn-hide"),
              a.on("click", function(e) {
                t.onKeyword(e)
              })
          }
        },
        renderChanel: function() {
          var e = this
            , t = e.data
            , i = this.$el.find(".sub-relate");
          t.redirect_ch_id > 0 && t.redirect_ch_name ? (i.removeClass("fn-hide"),
            l.browser.uc ? i.append("<a>点击进入[<span></span>]频道<i></i></a>") : i.append('<a href="//iflow.uczzd.cn/newsapp/openapp.html?channelid=' + this.data.redirect_ch_id + '">进入[<span></span>]频道查看更多<i></i></a>'),
            i.data("channel_id", t.redirect_ch_id),
            i.data("type", "single"),
            i.find("span").text(t.redirect_ch_name),
            i.removeClass("fn-hide"),
            $(".sub-relate").on("click", function(t) {
              e.onChanel(t)
            })) : this._params.isSharePage && 0 == this._params.huidu && (i.append('<a href="' + this.openAppUrl + '">进入UC头条查看更多<i></i></a>'),
              i.removeClass("fn-hide"))
        },
        renderSearchChanel: function() {
          var e = this
            , t = e.data
            , n = l.get("ve");
          if ("scnews" === o.Tools.getQueryString("zzd_from") && (l.os.android && i.match(n, "10.7.0~") || l.os.iphone && i.match(n, "10.7.5~")) && t.query_tags && 0 === t.query_tags.length && t.redirect_ch_img && t.redirect_ch_id > 0 && t.redirect_ch_name) {
            var a = $("#tpl-sub-search-relate").html()
              , r = _.template(a)
              , s = r({
              redirect_ch_id: t.redirect_ch_id,
              redirect_ch_name: t.redirect_ch_name,
              redirect_ch_img: t.redirect_ch_img,
              redirect_ch_desc: t.redirect_ch_desc
            });
            $(".search-channel").append(s),
              $(".search-channel").on("click", function(t) {
                e.onSearchChannel(t)
              })
          }
        },
        renderRelateScroll: function() {
          var e = this;
          window.addEventListener("scroll", function() {
            var t = $(".is-impression-relate")
              , n = window.scrollY + window.innerHeight;
            t.length > 0 && _.each(t, function(t) {
              var a = $(t)
                , o = a.hasClass("is-impression-relate") != -1
                , r = a.offset().top - 60;
              if (n > r && o) {
                var s = l.get("ve");
                if (l.os.iphone && i.match(s, "10.7.8~") && c.infoflow && c.infoflow.userDidScroll) {
                  var p = []
                    , m = $(".sub-relate");
                  m.length > 0 && !m.hasClass("fn-hide") && p.push("recommend_channel"),
                  $(".sub-item").length > 0 && p.push("recommend_article"),
                  $(".sub-keyword").length > 0 && p.push("recommend_keyword"),
                  p.length > 0 && d.infoflow.userDidScroll({
                    visibleElements: p
                  })
                }
                e.scrollRelateItem(),
                  a.removeClass("is-impression-relate")
              }
            })
          }, !0)
        },
        onItem: function(e) {
          var t = this
            , n = l.get("ve")
            , a = $(e.currentTarget)
            , o = a.attr("data-id")
            , r = a.data("url")
            , s = a.data("shareurl")
            , d = a.data("daoliu_type");
          p("relate", {
            na_id: o,
            aid: t.data.id
          }),
            l.os.iphone && i.match(n, "10.7.8~") ? m({
              apiName: "infoflow.openArticleItemWithInfo",
              success: function() {
                t.openArticleItemWithInfo({
                  url: r,
                  aid: o
                })
              },
              fail: function() {
                t.onUserClick({
                  url: r
                })
              }
            }) : "android" === l.get("fr") && i.match(l.get("ve"), "10.10.0~") ? (c.infoflow.statsUserClick({
              type: "recommend_article",
              data: {
                id: o,
                recommend_article_url: r,
                daoliu_type: d
              },
              success: function() {},
              error: function() {}
            }),
              i.match(l.get("ve"), "10.7.8~") ? t.openArticleItemWithInfo({
                url: r,
                aid: o
              }) : setTimeout(function() {
                location.href = r
              }, 50)) : setTimeout(function() {
              t._params.isSharePage ? location.href = s : location.href = r
            }, 200)
        },
        onKeyword: function(e) {
          var t = $(e.target)
            , n = t.data("keyword")
            , a = t.data("url")
            , o = l.get("ve");
          n && a && (l.os.iphone && i.match(o, "10.7.8~") && c.infoflow && c.infoflow.onUserClick ? d.infoflow.onUserClick({
            type: "recommend_keyword",
            recommend_keyword: n,
            recommend_keyword_url: a
          }) : setTimeout(function() {
            location.href = a + "pagetype=share"
          }, 350))
        },
        onChanel: function(e) {
          var t = $(e.currentTarget);
          d.infoflow.openChannelBox({
            channel_id: t.data("channel_id"),
            type: t.data("type")
          })
        },
        onSearchChannel: function(e) {
          var t = $(e.currentTarget)
            , i = t.find(".relate-channel");
          d.infoflow.openChannelBox({
            channel_id: i.data("channel_id"),
            type: i.data("type")
          })
        },
        scrollRelateItem: function() {
          var e = this
            , t = e.$el.find(".sub-content a");
          if (t && t.length > 0) {
            var i = [];
            _.each(t, function(e) {
              i.push({
                r_id: $(e).attr("data-id"),
                op_type: $(e).data("label")
              })
            });
            var n = "allpic";
            p("info", {
              v: n,
              et: "relate_show",
              aid: e.data.id,
              content: JSON.stringify(i)
            });
            var a = $(".sub-relate");
            a.length > 0 && !a.hasClass("fn-hide") && p("info", {
              action: "show",
              region: "article_relate",
              pos: "channel_show",
              label: a.find("a span").text(),
              et: "relate_channel_show",
              aid: e.data.id,
              content: JSON.stringify([])
            })
          }
        },
        openArticleItemWithInfo: function(e) {
          var t = this
            , i = _.findWhere(t.data.relate_item, {
            id: e.aid
          });
          c.infoflow.openArticleItemWithInfo({
            data: {
              id: i.id,
              title: i.title,
              pageUrl: e.url,
              site_logo_type: i.site_logo.style,
              source_name: i.site_logo.desc,
              site_logo_url: i.site_logo.img.url,
              site_logo_width: i.site_logo.img.width,
              site_logo_height: i.site_logo.img.height,
              site_link: i.site_logo.link,
              site_id: i.site_logo.id,
              wm_id: i.wm_id,
              is_wemedia: i.is_wemedia,
              is_followed: i.is_followed,
              from: 7,
              publish_time: i.publish_time
            },
            success: function(i) {
              "success" !== i.result && ("iphone" === l.get("fr") ? t.onUserClick({
                url: e.url
              }) : setTimeout(function() {
                location.href = e.url
              }, 50))
            },
            fail: function() {
              setTimeout(function() {
                location.href = e.url
              }, 50)
            }
          })
        },
        onUserClick: function(e) {
          m({
            apiName: "infoflow.onUserClick",
            success: function() {
              d.infoflow.onUserClick({
                type: "recommend_article",
                recommend_article_url: e.url
              })
            },
            fail: function() {
              setTimeout(function() {
                location.href = e.url
              }, 50)
            }
          })
        }
      };
      e._relate = t.render = f
    }(window.__UCLIB__ || (window.__UCLIB__ = {}), i)
  }
  , function(e, t) {
    !function(e) {
      var t = window.zzd
        , i = window.netWork
        , n = window.serverPath
        , a = window.serverPathPage
        , o = function(t) {
        this.config = t,
          this.container = this.config.container && "string" == typeof this.config.container ? e(this.config.container) : this.config.container
      };
      o.prototype.render = function() {
        var t = n + "/" + i.tags + "/api/v1/article/" + this.config.aid + "/tag";
        e.ajax({
          url: t,
          type: "GET",
          dataType: "jsonp",
          jsonp: "callback",
          success: e.proxy(function(e) {
            e.result && 0 === e.result.status && e.data.tag ? this.addTagsCallBack(e.data.tag) : this.config.options.showAlert(e.result.message)
          }, this),
          error: e.proxy(function() {
            this.config.options.showAlert("网络错误")
          }, this)
        }),
        this.config.callback && this.config.callback()
      }
        ,
        o.prototype.addTagsCallBack = function(t) {
          if (t && !(t.length <= 0)) {
            for (var n = '<div class="left">关键词:</div><div class="right"><ul>', o = 0; o < t.length; o++)
              n += '<li><a href="' + a + "/" + i.searchList + "/searchList?query=" + t[o].tag + '">' + t[o].tag + "</a></li>";
            n += "</ul></div>",
              e(".tags").removeClass("fn-hide").html(n)
          }
        }
        ,
        t.Tags = t.Tags || o
    }(window.jQuery)
  }
  , function(e, t) {
    var i = window._wechat = {};
    !function(e, t) {
      var i = window.wx
        , n = {
        "dtcj.com": " http://www.dtcj.com/wechat/signature",
        "yicai.com": "http://wxshare.yicai.com/exrss/"
      }
        , a = window.zzd.Tools
        , o = 1 == a.getQueryString("is_uctest")
        , r = {
        init: function(e, t) {
          this.wechatParam = t;
          for (var i, a = Object.keys(n), o = e.match(/http[s]?:\/\/(.*?)([:\/]|$)/), r = !1, s = 0; s < a.length; s++)
            if (o[1].indexOf(a[s]) >= 0) {
              r = !0,
                i = a[s];
              break
            }
          r && this.getWechatSignature(n[i])
        },
        getWechatSignature: function(e) {
          var t = this;
          $.ajax({
            url: e,
            type: "POST",
            data: {
              url: encodeURIComponent(location.href)
            },
            dataType: "json",
            success: function(e) {
              o && alert(JSON.stringify(e.data)),
              0 == ~~e.status && t.ready(e.data)
            },
            error: function(e) {
              o && alert(JSON.stringify(e))
            }
          })
        },
        ready: function(e) {
          var t = this.wechatParam;
          if (i) {
            var n = {
              debug: o,
              appId: e.appid || e.appId || "",
              timestamp: e.timestamp,
              nonceStr: e.nonceStr,
              signature: e.signature,
              jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ", "onMenuShareWeibo", "onMenuShareQZone"]
            };
            o && alert(JSON.stringify(n)),
              i.config(n),
              i.ready(function() {
                i.onMenuShareTimeline({
                  title: t.title,
                  link: t.link,
                  imgUrl: t.imgUrl,
                  success: function() {},
                  cancel: function() {}
                }),
                  i.onMenuShareAppMessage({
                    title: t.title,
                    desc: t.desc,
                    link: t.link,
                    imgUrl: t.imgUrl,
                    type: t.type,
                    dataUrl: "",
                    success: function() {},
                    cancel: function() {}
                  }),
                  i.onMenuShareQQ({
                    title: t.title,
                    desc: t.desc,
                    link: t.link,
                    imgUrl: t.imgUrl,
                    success: function() {},
                    cancel: function() {}
                  }),
                  i.onMenuShareWeibo({
                    title: t.title,
                    desc: t.desc,
                    link: t.link,
                    imgUrl: t.imgUrl,
                    success: function() {},
                    cancel: function() {}
                  }),
                  i.onMenuShareQZone({
                    title: t.title,
                    desc: t.desc,
                    link: t.link,
                    imgUrl: t.imgUrl,
                    success: function() {},
                    cancel: function() {}
                  })
              })
          }
        }
      };
      e._wechat = t.ready = r
    }(window.__UCLIB__ || (window.__UCLIB__ = {}), i)
  }
  , function(e, t) {
    var i = window._articleFeedback = {};
    !function(e, t) {
      var i = window.zzd
        , n = window._envi
        , a = window.serverPathIflow
        , o = window.serverPathPage
        , r = window.matchUrlQueryParams
        , s = i.Tools.getQueryString("pagetype")
        , l = {
        init: function(e, t) {
          this.$el = $("article:last"),
            this.data = e,
            this._params = t,
            this.localDislikeReasons = {
              status: "0",
              msg: "",
              data: {
                infos: [{
                  type: 1,
                  code: 21,
                  msg: "local内容低俗",
                  with_review: 0
                }, {
                  type: 1,
                  code: 23,
                  msg: "尾部杂质多",
                  with_review: 0
                }, {
                  type: 1,
                  code: 20,
                  msg: "标题夸张",
                  with_review: 0
                }, {
                  type: 1,
                  code: 25,
                  msg: "过时新闻",
                  with_review: 0
                }, {
                  type: 1,
                  code: 26,
                  msg: "新闻不完整",
                  with_review: 0
                }]
              }
            },
            this.isReported = !1,
            this.reportReasonArr = [],
            this.render()
        },
        render: function() {
          var e = this
            , t = $("#tpl-article-bottom").html()
            , n = _.template(t)
            , a = n({})
            , o = r(e.data.original_url, i.Tools.parseQueryString(e.data.url));
          e.$el.append(a),
          o.indexOf("?") < 0 && (o = o.replace("&", "?")),
          "share" !== s && e.$el.find(".bottom-originalurl").show().attr("href", o),
            e.$el.find(".bottom-prosecute").on("click", function(t) {
              e.onBtnDisLike(t)
            })
        },
        onBtnDisLike: function() {
          if (this.isReported) {
            this.renderDialog(this.localDislikeReasons.data.infos);
            for (var e = this.$el.find("#dislikeBg .reason-select"), t = 0; t < e.length; t++) {
              var i = $(e[t])
                , n = i.text();
              n = n.replace(/(^\s*)|(\s*$)/g, ""),
              $.inArray(n, this.reportReasonArr) >= 0 && i.addClass("selected")
            }
            this.$el.find("#dislikeBg .submit-btn a").addClass("disabled").text("反馈已提交")
          } else
            this.getDisLikeReasonList()
        },
        onCancelDisLikeDialog: function(e) {
          var t = $(e.target);
          t.hasClass("dislike-block") && this.renderHideBg()
        },
        renderDialog: function(e) {
          var t, i = this, n = this.$el.find("#dislikeBg"), a = this.getFeedbackUrl(), o = window.innerWidth - 30, r = $("#like-dislike-dialog").html(), s = _.template(r);
          t = s({
            items: e,
            feedbackUrl: a,
            width: o,
            marginWidth: -(o / 2)
          }),
            n.html(t),
            n.show(),
            this.$el.find(".reason-select").off("click").on("click", function(e) {
              i.onSelectDisLikeReason(e)
            }),
            this.$el.find(".dislike-block").off("click").on("click", function(e) {
              i.onCancelDisLikeDialog(e)
            }),
            this.$el.find(".submit-btn").off("click").on("click", function(e) {
              i.onSubmitDisLike(e)
            })
        },
        renderHideBg: function() {
          this.$el.find("#dislikeBg").hide()
        },
        onSelectDisLikeReason: function(e) {
          if (!this.isReported) {
            var t = $(e.currentTarget);
            t.toggleClass("selected"),
              this.checkSelectItems()
          }
        },
        onSubmitDisLike: function() {
          var e = this
            , t = e.$el.find(".submit-btn a");
          if (!t.hasClass("disabled")) {
            this.renderHideBg(),
              i.Tools.showAlert("内容投诉已提交成功");
            var n = []
              , a = e.$el.find(".reason-select");
            _.each(a, function(t) {
              var i = $(t)
                , a = i.text();
              a = a.replace(/(^\s*)|(\s*$)/g, ""),
              i.hasClass("selected") && (n.push({
                type: i.attr("data-type"),
                code: i.attr("data-code"),
                msg: a
              }),
                e.reportReasonArr.push(a))
            }),
              e.getModelDisLikeReason(n)
          }
        },
        checkSelectItems: function() {
          var e = this.$el.find(".reason-select")
            , t = this.$el.find(".submit-btn").find("a");
          e.hasClass("selected") ? t.removeClass("disabled") : t.addClass("disabled")
        },
        getDisLikeReasonList: function() {
          var e = this
            , t = e._params.aid;
          $.ajax({
            url: a + "/iflow/api/v1/article/notin/info",
            data: {
              aid: t,
              scene: 1,
              uc_param_str: "dnnivebichfrmintcpgieiwidsud",
              sn: localStorage.user_sn
            },
            dataType: "jsonp",
            timeout: 5e3,
            type: "GET",
            success: function(t) {
              var i = t.data;
              i && i.infos && i.infos.length > 0 ? (e.localDislikeReasons.data.infos = i.infos,
                e.renderDialog(e.localDislikeReasons.data.infos)) : e.renderDialog(e.localDislikeReasons.data.infos)
            },
            fail: function() {
              e.renderDialog(e.localDislikeReasons.data.infos)
            }
          })
        },
        getFeedbackUrl: function() {
          var e, t, a = this;
          return n.os.android ? (e = i.Tools.getSearchString({
            itemId: a._params.aid,
            uc_biz_str: "S:custom|C:titlebar_fix"
          }),
            t = o + "/webapp/xissReport?uc_param_str=dnnivebichfrmintcpgieiwidsud&" + e) : n.os.iphone && (e = i.Tools.getSearchString({
              itemId: a._params.aid,
              uc_biz_str: "S:custom|C:titlebar_fix|N:true"
            }),
              t = o + "/webapp/xissReport?uc_param_str=dnnivebichfrmintcpgieiwidsud&" + e),
            t
        },
        getModelDisLikeReason: function(e) {
          var t = this;
          $.ajax({
            url: a + "/iflow/api/v1/article/" + t._params.aid + "/notin?uc_param_str=dnnivebichfrmintcpgieiwidsud&sn=" + localStorage.user_sn,
            data: {
              data: JSON.stringify({
                infos: e
              })
            },
            type: "get",
            dataType: "jsonp",
            contentType: "application/json",
            timeout: 5e3,
            success: function() {
              t.isReported = !0
            }
          })
        }
      };
      e._articleFeedback = t.render = l
    }(window.__UCLIB__ || (window.__UCLIB__ = {}), i)
  }
  , function(e, t) {
    var i = window._articleLike = {};
    !function(e, t) {
      var i = window.zzd
        , n = window._storage
        , a = window.serverPathIflow
        , o = {
        init: function(e, t) {
          this.$el = $(".like-left-wrap"),
            this.data = e,
            this._params = t,
            this.render()
        },
        render: function() {
          var e = this
            , t = $("#tpl-like").html()
            , i = _.template(t)
            , a = i({});
          e.$el.append(a),
          n.get("article_liked_" + this.data.id) && $(".article-like-btn").addClass("liked").removeClass("like"),
            e.$el.find(".article-like-btn").on("click", function(t) {
              e.onBtnLike(t)
            })
        },
        onBtnLike: function(e) {
          var t = this
            , n = $(e.currentTarget);
          n.hasClass("like") ? (n.removeClass("like").addClass("liked"),
            n.find(".like-down").removeClass("fadeOutDown"),
            n.find(".like-up").addClass("fadeOutUp"),
            n.data("pos", "like"),
            t.getModelLike(),
            t.setLocalLike(),
            i.Tools.showAlert("将推荐更多此类内容~")) : (n.removeClass("liked").addClass("like"),
            n.find(".like-up").removeClass("fadeOutUp"),
            n.find(".like-down").addClass("fadeOutDown"),
            n.data("pos", "like_cancel"),
            t.getModelLike(!0),
            t.removeLocalLike())
        },
        getModelLike: function(e) {
          var t, i = this;
          t = e ? a + "/iflow/api/v1/cmt/article/" + i._params.aid + "/like/cancel" : a + "/iflow/api/v1/cmt/article/" + i._params.aid + "/like",
            $.ajax({
              url: t,
              data: {
                recoid: i._params.recoId,
                readid: i._params.readId,
                sn: localStorage.user_sn,
                uc_param_str: "dnnivebichfrmintcpgieiwidsud"
              },
              type: "get",
              dataType: "jsonp",
              timeout: 5e3,
              success: function() {}
            })
        },
        setLocalLike: function() {
          n.set("article_liked_" + this.data.id, !0, 2592e3)
        },
        removeLocalLike: function() {
          n.remove("article_liked_" + this.data.id)
        }
      };
      e._articleLike = t.render = o
    }(window.__UCLIB__ || (window.__UCLIB__ = {}), i)
  }
  , function(e, t) {
    var i = window._articleShare = {};
    !function(e, t) {
      var i = window.zzd
        , n = window._uc
        , a = window._uca
        , o = window._envi
        , r = window._Version
        , s = {
        init: function(e, t) {
          this.$el = $(".share-right-wrap"),
            this.data = e,
            this._params = t,
            this.isAnimate = !0,
            this.cofing = {
              weixin: {
                android: "WechatFriends",
                ios: "kWeixin",
                target: "weixin"
              },
              blog: {
                android: "SinaWeibo",
                ios: "kSinaWeibo",
                target: "weibo"
              },
              friends: {
                android: "WechatTimeline",
                ios: "kWeixinFriend",
                target: "friend"
              },
              more: {
                android: "",
                ios: "",
                target: "more"
              }
            },
            this.render()
        },
        render: function() {
          var e = this
            , t = $("#tpl-share-new").html()
            , n = _.template(t)
            , a = n({});
          (o.browser.uc || o.browser.ucNews || "share" !== i.Tools.getQueryString("pagetype")) && (e.$el.append(a),
            e.initShareInfo(),
            e.scrollShare(),
            this.$el.find(".article-share-btn").on("click", function(t) {
              e.onShareBtn(t)
            }))
        },
        initShareInfo: function() {
          var e = this;
          n.biz.onShare({
            title: e.data.title,
            content: e.data.content,
            sourceUrl: e.data.url,
            screenshotHtmlNodeId: e.data.screenshotHtmlNodeId,
            screenshotRect: e.data.pos,
            iconUrl: "http://image.uczzd.cn/16836532799263389551.jpg?id=0"
          })
        },
        onShareBtn: function(e) {
          var t, i = this, n = $(e.target), s = n.attr("data-elem"), l = window.ucbrowser;
          t = "http://image.uczzd.cn/16836532799263389551.jpg?id=0",
            i.data.imagesUrl = i.data.imagesUrl ? i.data.imagesUrl : t,
            window.ucweb && window.ucweb.startRequest ? o.os.android && (o.browser.ucNews || o.browser.uc && r.match(o.get("ve"), "10.6~")) && window.ucweb.startRequest("shell.share", [JSON.stringify({
                title: i.data.title,
                content: i.data.content,
                url: i.data.url,
                target: i.cofing[s].android,
                type: i.data.vtype,
                share_source_from: "",
                iconUrl: i.data.imagesUrl,
                share_rect: i.data.pos
              })]) : o.os.iphone && (o.browser.ucNews || o.browser.uc && r.match(o.get("ve"), "10.2.0~")) && l.web_shareEX(JSON.stringify({
                title: i.data.title,
                content: i.data.content,
                sourceUrl: i.data.url,
                target: i.cofing[s].ios,
                source: "",
                htmlNode: "",
                imageUrl: i.data.imagesUrl
              })),
            a("share", {
              aid: i._params.aid,
              target: i.cofing[s].target
            })
        },
        scrollShare: function() {
          var e = this;
          window.addEventListener("scroll", function() {
            var t = $(".share-right-wrap")
              , i = t.length > 0 ? t.offset().top + 100 : ""
              , n = window.scrollY + window.innerHeight;
            n > i && e.isAnimate && (e.isAnimate = !1)
          }, !0)
        }
      };
      e._articleShare = t.render = s
    }(window.__UCLIB__ || (window.__UCLIB__ = {}), i)
  }
  , function(e, t) {
    var i = window._statRead = {};
    !function(e, t) {
      var i = {
        init: function() {
          this.$aritcle = $(".article-content"),
            this.articleHeight = this.$aritcle.height(),
            this.id = this.getQueryString("sm_article_id"),
            this.statTime = Date.now(),
            this.timeLastUp = 0,
            this.sectionFirePointArray = [],
            this.touchSectionArray = [],
            this.sumTime = 0,
            this.firePoint = window.innerHeight,
            this.screenHeight = window.innerHeight,
            this.isEnd = !1,
            this.scrollEvent(),
            this.scrollToEnd()
        },
        scrollEvent: function() {
          function e(e) {
            var t = e.targetTouches && e.targetTouches[0] ? e : null
              , i = e.originalEvent || t
              , n = i && i.targetTouches && i.targetTouches[0];
            o = n ? n.pageY : 0,
              l = Date.now(),
              c = Date.now()
          }
          function t(u) {
            var h = u.changedTouches && u.changedTouches[0] ? u : null;
            i = u.originalEvent || h,
              n = i && i.changedTouches && i.changedTouches[0],
              r = n ? n.pageY : 0,
              o = Math.ceil(o),
              r = Math.ceil(r);
            var g, b, x = Math.abs(o - r), w = x >= 5 && x <= 50;
            if (w) {
              if (s = Date.now(),
                  g = {
                    articleHeight: a.articleHeight,
                    articleInterval: d,
                    readStopTime: c - (0 === a.timeLastUp ? a.statTime : a.timeLastUp),
                    readScrollTime: s - l,
                    readPosition: Math.ceil(document.body.scrollTop + a.screenHeight),
                    readScrollPosition: x
                  },
                  g.readPosition = g.readPosition >= a.articleHeight ? a.articleHeight : g.readPosition,
                  b = a.isFireSection(g.readPosition),
                  g.readStopTime = g.readStopTime > p ? p : g.readStopTime,
                  a.touchSectionArray.push(g),
                  b) {
                var v = a.touchSectionArray.length
                  , _ = a.touchSectionArray[v - 1].readPosition;
                for (f = 0; f < v; f++) {
                  var y = a.touchSectionArray[f];
                  a.sumTime += y.readStopTime + y.readScrollTime
                }
                a.sendReadLog({
                  id: a.id,
                  articleHeight: a.articleHeight,
                  position: _,
                  duration: a.sumTime
                }),
                  a.touchSectionArray = []
              }
              if (a.timeLastUp = c,
                g.readPosition >= a.sectionFirePointArray[m - 1])
                return a.$aritcle.off("touchstart", e),
                  a.$aritcle.off("touchend", t),
                  void a.$aritcle.off("touchcancel", t)
            }
          }
          for (var i, n, a = this, o = 0, r = 0, s = 0, l = 0, c = 0, d = 300, p = 2e4, m = Math.floor((a.articleHeight - a.screenHeight) / d), f = 0; f < m; f++)
            a.sectionFirePointArray.push(a.screenHeight + d * (f + 1));
          (a.articleHeight > a.sectionFirePointArray[m - 1] || 0 === a.sectionFirePointArray.length) && (a.sectionFirePointArray.push(a.articleHeight),
            m = a.sectionFirePointArray.length),
            a.$aritcle.on("touchstart", e),
            a.$aritcle.on("touchend", t),
            a.$aritcle.on("touchcancel", t)
        },
        sendReadLog: function(e) {
          window.ucapi && window.ucapi.infoflow && window.ucapi.infoflow.statEvent && window.ucapi.infoflow.statEvent({
            type: "readingInfo",
            data: {
              id: e.id,
              readingInfo: {
                articleHeight: e.articleHeight,
                position: e.position,
                duration: e.duration
              }
            },
            success: function() {},
            fail: function() {}
          })
        },
        getQueryString: function(e) {
          var t = new RegExp("(\\?|^|&|#)" + e + "=([^&|^#]*)(&|$|#)","i")
            , i = window.location.href.match(t);
          return null != i ? decodeURIComponent(i[2]) : ""
        },
        isFireSection: function(e) {
          for (var t = this, i = !1, n = t.sectionFirePointArray.length, a = 0; a < n; a++)
            if (a > 0 && t.sectionFirePointArray[a] >= e) {
              var o = t.sectionFirePointArray[a - 1] ? t.sectionFirePointArray[a - 1] : t.firePoint;
              o = e === t.sectionFirePointArray[a] ? t.sectionFirePointArray[a] : o,
              t.firePoint != o && (i = !0,
                t.firePoint = o);
              break
            }
          return i
        },
        scrollToEnd: function() {
          var e = this
            , t = this.screenHeight;
          window.addEventListener("scroll", function() {
            !e.isEnd && document.body.scrollTop + t >= e.articleHeight && (e.sendReadLog({
              id: e.id,
              articleHeight: e.articleHeight,
              position: e.articleHeight,
              duration: e.sumTime
            }),
              e.isEnd = !0)
          })
        }
      };
      e._statRead = t.render = i
    }(window.__UCLIB__ || (window.__UCLIB__ = {}), i)
  }
  , function(e, t) {
    var i = window._rules = {};
    !function(e, t) {
      var i = (window._envi,
        window._Version,
        window._uca)
        , n = window.zzd.Tools
        , a = window.ucapi
        , o = {
        level: 1,
        codeArray: [],
        htmlStr: $("html").html(),
        init: function() {
          this.rules_100(),
            this.rules_103(),
            this.rules_104(),
            this.rules_106(),
            this.rules_109(),
            this.rules_110(),
            this.rules_117(),
            this.rules_131(),
            this.notifClient()
        },
        rules_100: function() {
          var e = new RegExp("<article","ig");
          e.test($("header").html()) && this.codeArray.push(100)
        },
        rules_103: function() {
          var e = new RegExp("<p></p>","ig");
          e.test(this.htmlStr) && this.codeArray.push(103)
        },
        rules_104: function() {
          var e = new RegExp("\\.css","g")
            , t = this.htmlStr.match(e);
          t && t.length > 2 && this.codeArray.push(104)
        },
        rules_106: function() {
          $("article").hasClass("article-content") || this.codeArray.push(106)
        },
        rules_109: function() {
          var e = new RegExp("\\.css\\s+","g")
            , t = new RegExp("\\.js\\s+","g");
          (this.htmlStr.match(e) || this.htmlStr.match(t)) && this.codeArray.push(109)
        },
        rules_110: function() {
          var e = new RegExp("jquery(.)*js","ig")
            , t = this.htmlStr.match(e);
          t && t.length > 1 && this.codeArray.push(110)
        },
        rules_112: function() {
          $("article a").length && this.codeArray.push(112)
        },
        rules_117: function() {
          var e = new RegExp("<article(.)*>\\s*</article>","ig");
          e.test(this.htmlStr) && (this.codeArray.push(117),
            this.level = 0)
        },
        rules_131: function() {
          $("article").length || (this.codeArray.push(131),
            this.level = 0)
        },
        notifClient: function() {
          a.infoflow.statEvent({
            type: "thirdreport",
            data: {
              code: this.codeArray,
              level: this.level
            },
            success: function() {},
            fail: function() {}
          }),
            i("click", {
              region: "rules_test",
              pos: window.location.host,
              index: window.location.href,
              label: this.codeArray,
              aid: n.getQueryString("sm_article_id")
            })
        }
      };
      e._rules = t.render = o
    }(window.__UCLIB__ || (window.__UCLIB__ = {}), i)
  }
  , function(e, t) {
    e.exports = '<div class="main-content">\n    <div class="tags">\n        <div class="event-tag-info fn-hide"></div>\n        <div class="query-tags fn-hide"></div>\n    </div>\n    <div class="like-share-wrap fn-hide">\n        <div class="like-left-wrap  fn-clear">\n        </div>\n        <div class="share-right-wrap  fn-clear">\n        </div>\n    </div>\n    <div class="xissShareWrap fn-hide"></div>\n    <div id="uc-big-ad" class="uc-banner">\n        <div class="title">\n            <div class="left">\n                <div class="inner"></div>\n            </div>\n            <div class="main">\n                <div class="inner">广告</div>\n            </div>\n            <div class="right">\n                <div class="inner"></div>\n            </div>\n        </div>\n        <div class="wrap"></div>\n    </div>\n    <div class="relate sub-part clearfix fn-hide is-impression-relate" data-region="article_relate">\n        <div class="sub-title">推荐阅读</div>\n        <div class="title-border"></div>\n        <div class="sub-word"></div>\n        <div class="sub-content"></div>\n        <div class="sub-relate fn-hide item" data-pos="channel">\n        </div>\n    </div>\n    <div class="search-channel" data-region="article_relate"></div>\n    <section class="recommond fn-hide"></section>\n    <div id="uc-normal-ad" class="uc-banner">\n        <div class="title">\n            <div class="left">\n                <div class="inner"></div>\n            </div>\n            <div class="main">\n                <div class="inner">广告</div>\n            </div>\n            <div class="right">\n                <div class="inner"></div>\n            </div>\n        </div>\n        <div class="wrap"></div>\n    </div>\n    <div class="uc-cooperate-wemedia" data-region="wm_relate"></div>\n    <div id="windownbg" class="fn-hide"></div>\n    <section class="guesslike fn-hide">\n        <div class="sub-title">热门推荐</div>\n        <div class="title-border"></div>\n        <div class="sub-content">\n            <ul class="list" id="guesslike-content"></ul>\n        </div>\n        <div class="data-loadingArea fn-hide">\n            <div class="data-loading"></div>\n            <div class="data-loadingText">加载中...</div>\n        </div>\n    </section>\n\n    <div class="commentsWrap">\n        <div class="comment my-comment" data-region="my_comment">\n            <ul class="comment-list mycomment-list"></ul>\n        </div>\n        <div class="comment main-comment sub-part" data-region="main_comment">\n            <ul class="comment-list maincomment-list"></ul>\n            <div class="comment-footer"></div>\n        </div>\n    </div>\n</div>\n<script id="tpl-article-bottom" type="text/template">\n    <div class="bottom-txt">\n        <span class="bottom-source"></span>\n        <a class="bottom-originalurl" data-pos="original" href="javascript:void(0);" style="display: none;">查看原文</a>\n        <span class="bottom-prosecute">内容投诉</span>\n    </div>\n    <div id="dislikeBg"\n         class="dislike-block"\n         data-region="dislike_dialog"\n         data-pos="cancel"\n         style="">\n    </div>\n</script>\n<script id="like-dislike-dialog" type="text/template">\n    <div class="dislike-bg" style="width: {{width}}px; margin-left: {{marginWidth}}px;">\n        <div class="dislike-content">\n            <h2>选择投诉原因</h2>\n            <ul class="reason" data-pos="item">\n                {% _.each(items, function(i) { %}\n                <li class="reason-select"\n                    data-label="{{i.msg}}"\n                    data-type="{{i.type}}"\n                    data-code="{{i.code}}">\n                    {{i.msg}}\n                </li>\n                {% }) %}\n            </ul>\n            <a class="report" href="{{feedbackUrl}}" data-pos="feedback">\n                举报更多问题 >\n            </a>\n            <div class="submit-btn btn" data-pos="btn_submit">\n                <a class="disabled" href="javascript:;">提交反馈</a>\n            </div>\n        </div>\n    </div>\n</script>\n\n<script id="tpl-news-iflow" type="text/template">\n    <li class="hot-relate-item" data-pos="item" data-url="{{ url }}" grab_time="{{ hotTime }}" data-na_id="{{ na_id }}">\n        {% if(itemType == 0 ){%}\n        <p class="content_p">{{ title }}</p>\n        <div class="list-col3 clearfix">\n            {%_.each(img, function(item){%}\n            <div>\n                <p class="col3-">\n                    <span class="col3">\n                    <img src="{{ defaultImg }}" data-src="{{ url }}&width=200&height=150"/>\n                    </span>\n                </p>\n            </div>\n            {%})%}\n        </div>\n        <p class="date">\n            <span>{{ formatTime }}</span>\n            <span class="cmt {{ comment_style }}">{{ comment_cnt }}</span>\n        </p>\n        {%}%}\n        {%if( itemType == 1){%}\n        <a href="javascript:void(0)">\n            <div class="newsimg">\n                <img class="showImg" src="{{ defaultImg }}" data-src="{{ imgUrl }}&width=220&height=166">\n                {%if (videoType ===true){%}\n                <div class="video-icon"></div>\n                {%}%}\n            </div>\n            <div class="text">\n                <p class="content_p">{{ title }}</p>\n                <p class="date">\n                    <span>{{ formatTime }}</span>\n                    <span class="cmt {{ comment_style }}">{{ comment_cnt }}</span>\n                </p>\n            </div>\n        </a>\n        {%}%}\n        {%if( itemType === 2){%}\n        <div class="text">\n            <p class="content_p">{{ title }}</p>\n            <p class="date">\n                <span>{{ formatTime }}</span>\n                <span class="cmt {{ comment_style }}">{{ comment_cnt }}</span>\n            </p>\n        </div>\n        {%}%}\n        {% if( itemType === 3){%}\n        <div class="picsTitle">{{title}}</div>\n        <div class="picsInfo clearfix">\n            <span>{{ formatTime }}</span>\n                    <span class="cmt {{comment_style}}">\n                {{ comment_cnt }}</span>\n            <span class="picsNum">{{ imgLength }}</span>\n        </div>\n        <div class="picsImg {{ isVertical }}">\n            <img src="{{ defaultImg }}"\n                 data-src="{{ imgUrl }}&width=540&height=432"/>\n            <div class="isDraw"></div>\n        </div>\n        {%}%}\n        {% if( itemType === 4){%}\n        <div class="text">\n            <p class="content_p content_humor">{{ content_limit }}</p>\n            <p class="date">\n                <span>{{ formatTime }}</span>\n                <span class="cmt {{ comment_style }}"></span>\n            </p>\n        </div>\n        {%}%}\n        {%if(itemType ===5){%}\n        <div class="picsTitle">{{ content }}</div>\n        <div class="picsInfo clearfix">\n            <span>{{ formatTime }}</span>\n            <span class="cmt {{ comment_style }}">{{ comment_cnt }}</span>\n            <span class="picsNum">{{ imgLength }}</span>\n        </div>\n        <div class="picsImg {{ isVertical }}">\n            <img src="{{ defaultImg }}" data-src="{{ imgUrl }}&width=540&height=432"/>\n            <div class="isDraw"></div>\n        </div>\n        {%}%}\n        {%if( itemType === 6){%}\n        <div class="picsTitle"></div>\n        <div class="picsInfo clearfix">\n            <span>{{ formatTime }}</span>\n            <span class="cmt {{ comment_style }}">{{ comment_cnt }}</span>\n            <span class="picsNum">{{ imgLength }}</span></div>\n        <div class="picsImg {{ isVertical }}">\n            <img src="{{ defaultImg }}" data-src="{{ imgUrl }}&width=540&height=432"/>\n            <div class="isDraw"></div>\n        </div>\n        {%}%}\n    </li>\n</script>\n<script id="tpl-sub-item" type="text/template">\n    {% _.each(relateList, function(item) { %}\n    {% if (item.article_type === 0) { %}\n    <a data-index="{{ item.index }}"\n       data-label="{{ item.article_type }}"\n       data-url="{{ item.url }}"\n       data-shareurl="{{ item.share_url }}"\n       data-id="{{ item.id }}"\n       data-cid="{{ item.cid }}"\n       data-pos="item" class="item sub-item sub-item-noimg">\n        <div class="item-text">{{ item.title }}</div>\n        <div class="sub-orterInfo">\n            <span class="sub-orterInfoSource">{{ item.source_name }}</span>\n            <!--<span class="sub-orterInfoDate">{{ item.publish_time }}</span>-->\n        </div>\n    </a>\n    {% } else if (item.article_type === 1) { %}\n    <a data-index="{{ item.index }}"\n       data-label="{{ item.article_type }}"\n       data-url="{{ item.url }}"\n       data-id="{{ item.id }}"\n       data-cid="{{ item.cid }}"\n       data-shareurl="{{ item.share_url }}"\n       data-pos="item" class="item sub-item sub-item-img">\n        <div class="sub-img">\n            {% if (item.item_type === 2) { %}\n            <i>多图</i>\n            {% } %}\n            <img src="{{ item.thumbnails }}&width={{ item.width }}&height={{ item.height }}">\n        </div>\n        <div class="sub-content">\n            <div class="item-text">{{ item.title }}</div>\n            <div class="sub-orterInfo">\n                {% if (item.is_wemediatype === 0) { %}\n                <span class="sub-orterInfoSource">{{ item.source_name }}</span>\n                <!--<span class="sub-orterInfoDate">{{ item.publish_time }}</span>-->\n                {% } %}\n                {% if (item.is_wemediatype === 1) { %}\n                <span class="sub-orterInfoWemedia">大鱼号</span>\n                <span class="sub-orterInfoSource">{{item.source_name }}</span>\n                <!--<span class="sub-orterInfoDate">{{item.publish_time }}</span>-->\n                {% } %}\n            </div>\n        </div>\n    </a>\n    {% } else if (item.article_type === 2) { %}\n    <a data-index="{{ item.index }}"\n       data-label="{{ item.article_type }}"\n       data-url="{{ item.url }}"\n       data-id="{{ item.id }}"\n       data-cid="{{ item.cid }}"\n       data-shareurl="{{ item.share_url }}"\n       data-pos="item" class="item sub-item sub-item-img">\n        <div class="sub-img">\n            <div class="video-icon"></div>\n            <img src="{{ item.thumbnails }}&width={{ item.width }}&height={{ item.height }}">\n        </div>\n        <div class="sub-content">\n            <div class="item-text">{{ item.title }}</div>\n            <div class="sub-orterInfo">\n                {% if (item.is_wemediatype === 0) { %}\n                <span class="sub-orterInfoSource">{{ item.source_name }}</span>\n                <!--<span class="sub-orterInfoDate">{{ item.publish_time }}</span>-->\n                {% } %}\n                {% if (item.is_wemediatype === 1) { %}\n                <span class="sub-orterInfoWemedia">大鱼号</span>\n                <span class="sub-orterInfoSource">{{item.source_name }}</span>\n                <!--<span class="sub-orterInfoDate">{{item.publish_time }}</span>-->\n                {% } %}\n            </div>\n        </div>\n    </a>\n    {% } %}\n    {% }) %}\n</script>\n<script id="tpl-sub-search-relate" type="text/template">\n    <div class="relate-channel" data-channel_id="{{redirect_ch_id}}" data-pos="keyword" data-type="single">\n        <img src="{{redirect_ch_img}}">\n        <div class="item">\n            <div class="item-text">[{{redirect_ch_name}}]频道</div>\n            <span class="item-info">{{redirect_ch_desc}}&nbsp;</span>\n            <i></i>\n        </div>\n    </div>\n</script>\n<script id="tpl-sub-word" type="text/template">\n    {% _.each(query_tags, function(item){ %}\n    <a data-url="{{item.url}}" data-pos="keyword" data-keyword={{item.tag}}>{{item.tag}}</a>\n    {% }) %}\n</script>\n\n<script id="tpl-like" type="text/template">\n    <a class="article-like-btn like" data-region="article_like_dislike" data-pos="like">喜欢\n        <p class="move-like animated like-up ">+1</p>\n        <p class="move-like animated like-down ">-1</p>\n    </a>\n</script>\n<script id="tpl-share-new" type="text/template">\n    <div class="article-share-btns" data-region="share">\n        <a class="article-share-btn article-share-wechat" data-pos="weixin" data-elem="weixin">微信</a>\n        <a class="article-share-btn article-share-friends" data-pos="friends" data-elem="friends">朋友圈</a>\n    </div>\n</script>\n<script id="tpl-ad-wemedia" type="text/template">\n    <div data-region="wm_releate" data-pos="item">\n    <div class="title">\n        <div class="left">\n            <div class="inner"></div>\n        </div>\n        <div class="main">\n            <div class="inner">{{tag}}</div>\n        </div>\n        <div class="right">\n            <div class="inner"></div>\n        </div>\n    </div>\n    <div class="wrap clearfix" data-pos="item">\n        <div class="wemedia_wrap clearfix">\n            <div class="wemedia_wrap_inner">\n                <div class="wemedia_wrap_name">{{name}}</div>\n                <div class="wemedia_wrap_desc">{{desc}}</div>\n                <div class="clearfix"></div>\n            </div>\n        </div>\n        <div class="wemedia_icon"><img src="{{author_icon.url}}" width="50"  uc-image-reader_state="disabled" />\n        </div>\n        <div class="wemedia_link">\n            <div class="wemedia_link_icon"></div>\n        </div>\n    </div>\n    </div>\n</script>\n<script id="tpl-shareAD" type="text/template">\n    <div class="{{bannerDom}}middle" data-region="uc_a_d">\n        <div class="share-middle fn-hide" data-pos="share">\n            <span class="share-title">分享到:</span>\n            <span class="share-friend">微信</span>\n            <span class="share-friends">朋友圈</span>\n        </div>\n        {% if(isAnswer){%}\n        <a href="{{openAppUrl}}" data-label="{{ label }}" data-pos="middle">\n            <img src="{{ midImg }}" width="100%"/>\n        </a>\n        {% }else {%}\n        <a href="{{openAppUrl}}" class="{{bannerDom}}tn" data-label="{{ label }}" data-pos="middle">\n            <img src="{{ midImg }}" width="100%"/>\n        </a>\n        {% }%}\n    </div>\n    <div class="{{bannerDom}}comment {{bannerDom}}tn fn-hide" data-region="uc_a_d" data-pos="comment">\n        {%if (isInnerApp){%}\n        <a href="{{openAppUrlComment}}">\n            <div>打开UC头条 查看更多热门评论</div>\n        </a>\n        {% }%}\n        {%if (isInnerApp==false){%}\n        <a href="{{openAppUrlComment}}">\n            {%if (commentCount>0) { %}\n            <div>打开UC头条 查看剩余{{commentCount}}条热评</div>\n            {% }%}\n            {%if (commentCount==0){%}\n            <div>打开UC头条 查看更多热门评论</div>\n            {% }%}\n        </a>\n        {% }%}\n    </div>\n    <div id="tujiAd">\n        <div class="xissMediaShare {{bannerDom}}video {{bannerDom}}tn" data-region="uc_a_d" data-pos="video">\n            <a href="{{openAppUrl}}">打开UC头条 查看更多热点视频</a>\n        </div>\n        <div class="xissMediaShare {{bannerDom}}img {{bannerDom}}tn" data-region="uc_a_d" data-pos="img"><a\n                href="{{openAppUrl}}">打开UC头条 查看更多热点图集</a>\n        </div>\n    </div>\n</script>\n';
  }
  , function(e, t) {
    function i() {
      console.log(ccc);
      function e() {
        function e(e) {
          function t(e, t) {
            var i = n.match(g, "11.3~")
              , a = n.match(g, "11.3.8.909~");
            if (_envi.os.iphone && i || _envi.os.android && a) {
              t || (t = []);
              var o = t.slice(0);
              o.splice(4),
                o.forEach(function(t) {
                  var i = t.tag
                    , n = new RegExp(">[^<]*" + i + "*[^<]+<")
                    , a = e.match(n) || [];
                  a.forEach(function(t) {
                    var n = t.replace(i, '<a class="query-tag">' + i + "</a>");
                    e = e.replace(t, n)
                  })
                })
            }
            return e
          }
          function i() {
            var e = document.body
              , t = [].slice.call(document.querySelectorAll("article .query-tag"), 0);
            $(window).on("scroll", function() {
              t.length && t.forEach(function(i, n) {
                var a = $(i);
                e.scrollTop + window.innerHeight - 30 > a.offset().top && (_uca("info", {
                  et: "page_tag",
                  at: "show",
                  tag_type: 1,
                  aid: c,
                  cid: d,
                  content: JSON.stringify([{
                    tag: a.text(),
                    url: ""
                  }])
                }),
                  t.splice(n, 1))
              })
            }).trigger("scroll"),
              $(document).on("click", "article .query-tag", function() {
                var e = this.textContent;
                _uca("info", {
                  et: "page_tag",
                  at: "click",
                  tag_type: 1,
                  aid: c,
                  cid: d,
                  content: JSON.stringify([{
                    tag: e,
                    url: ""
                  }])
                }),
                  ucapi.infoflow.jumpPage({
                    page: "nf_label_home",
                    info: {
                      from: 3,
                      keyword: e
                    }
                  })
              })
          }
          var n = _Version
            , a = $("article");
            a.html(t(a.html(), e.query_tags)),
            i();
        }
        function i() {
          var e = 2;
          $.ajax({
            url: serverPathIflow + "/" + netWork["related-wemedia"] + "/api/v1/article/" + c + "/related_wemedia",
            data: {
              count: 1,
              content_cnt: 0,
              uc_param_str: "dnnivebichfrmintcpgieiwidsudpf"
            },
            type: "get",
            dataType: "jsonp",
            timeout: 1e4,
            success: function(t) {
              t.data && t.data.authors && t.data.authors[0] && (H = t.data.authors[0],
                N = 1,
              O == e && n())
            },
            error: function() {}
          })
        }
        function n() {
          if (!o) {
            var e = $("#tpl-ad-wemedia").html()
              , t = _.template(e)
              , i = t(H)
              , n = $(".uc-cooperate-wemedia");
            n.empty().append(i),
              n.show(),
              n.on("click", function() {
                _envi.browser.uc && _envi.os.android && _Version.match(_envi.get("ve"), "10.9.15~") ? ucapi.wemedia.openHomePage({
                  id: H.wm_id,
                  name: H.name,
                  avatar_url: H.home_url,
                  followed: H.is_followed,
                  target: H.is_followed ? 1 : 0,
                  from: 2,
                  success: function() {},
                  fail: function() {
                    location.href = H.home_url
                  }
                }) : location.href = H.home_url
              }),
              window.addEventListener("scroll", function() {
                var e = 1 != n.hasClass("is-impression-wemedia")
                  , t = n.offset().top - 60
                  , i = window.scrollY + window.innerHeight;
                i > t && e && (_uca("click", {
                  region: "wm_relate",
                  pos: "show",
                  aid: c
                }),
                  n.addClass("is-impression-wemedia"))
              })
          }
        }
        function h() {
          function e(e) {
            var t = e;
            window.addEventListener("scroll", function() {
              var e = t.offset().top - 60
                , i = window.scrollY + window.innerHeight
                , n = !t.hasClass("is-log-wereleat");
              i > e && n && (_uca("click", {
                region: "hc_ad",
                pos: "show"
              }),
                t.addClass("is-log-wereleat"))
            }, !0)
          }
          var t = $("#uc-normal-ad")
            , i = "uc_xss_transcoding_web_news"
            , a = "uc_xss_transcoding_web_news_body_below"
            , r = 0
            , s = zzd.Tools.getQueryString("app")
            , l = document.createElement("script");
          l.src = "//image.uc.cn/s/uae/g/0s/ua.js",
            document.body.appendChild(l),
            _uca("click", {
              region: "hc_ad",
              pos: "req_api"
            });
          var c = setInterval(function() {
            r++;
            var n = 0;
            if (window.UCJSADService) {
              var o = window.UCJSADService.createAdNode(i, a, s);
              t.find(".wrap").append(o),
                clearInterval(c),
                n = 1,
                _uca("click", {
                  region: "hc_ad",
                  pos: "render"
                }),
                e(t)
            }
            r > 5 && 0 == n && clearInterval(c)
          }, 500);
          window.addEventListener("ucad-load", function(e) {
            "ucad-load" === e.type && (o || $("#uc-normal-ad").show())
          }, !1),
            window.addEventListener("ucad-none", function(e) {
              "ucad-none" === e.type && (O = 2,
              1 == N && n())
            }, !1)
        }
        t(l);
        var b = zzd.Tools.getQueryString("zzd_from") || "uc-iflow";
        d = l.cid;
        var x = l.title + "#UC头条#"
          , w = {
          "uc-inner-app": ["webapp", "webapp-dhnews", "webapp-ucnews", "webapp-kuzhan", "webapp-zxzx", "webapp-smhome", "webapp-ucgongge"]
        }
          , v = zzd.Tools.getQueryString("app") ? zzd.Tools.getQueryString("app") : "uc-iflow"
          , y = _envi.browser.uc && w["uc-inner-app"].indexOf(v) > -1
          , k = ".article-content";
        if (0 == $(k).length) {
          var C = $("article").length - 1;
          k = "article:eq(" + C + ")"
        }
        var z, A = zzd.Tools.fucCheckLength($.trim($(k).text()), 90), I = "http://image.uczzd.cn/10335478172828414906.jpg?id=0", T = "", S = "";
        null != x && "" != x || (x = "#UC头条#"),
        null != A && "" != A && "30" != l.item_type || (A = "给的再多，不如懂我"),
          l.images && l.images.length > 0 ? (z = l.images[0].url,
            I = l.images[0].url) : (z = "http://image.uczzd.cn/16836532799263389551.jpg?id=0",
            I = "http://image.uczzd.cn/16836532799263389551.jpg?id=0");
        var U = ""
          , L = l.share_url
          , D = $("#pic_0");
        D.length > 0 && (T = zzd.Tools.getPos.getNodePosById("pic_0").join(","),
        "video" == D[0].tagName.toLowerCase() && (S = "video"),
          U = "pic_0");
        for (var B = ["happyjuzi.com", "dtcj.com", "yicai.com", "cnfol.com", "qianqu.cc", "alitrip.com"], W = l.url.match(/http[s]?:\/\/(.*?)([:\/]|$)/), E = -1, M = 0; M < B.length; M++)
          if (W[1].indexOf(B[M]) >= 0) {
            E = 0;
            break
          }
        var R = E;
        0 != R && 0 != l.content_length || (s = [{
          v: "share"
        }],
          _uca("info", {
            et: "share_3rd",
            aid: c,
            content: JSON.stringify(s)
          }),
          L = location.href,
          L = matchUrlQueryParams(L, {
            rd_type: zzd.RD_TYPEMAP.share,
            pagetype: "share"
          }));
        var j = {
          title: x,
          desc: A,
          imgUrl: I,
          link: L,
          type: S
        };
        if (_articleShare.render.init({
            title: x,
            content: A,
            url: L,
            pos: T,
            vtype: S,
            imagesUrl: z,
            screenshotHtmlNodeId: U,
            screenshotRect: T
          }, {
            aid: c,
            recoId: f,
            readId: p
          }),
          _envi.browser.wechat && _wechat.ready.init(L, {
            title: j.title,
            desc: j.desc,
            link: j.link,
            imgUrl: j.imgUrl,
            type: j.type
          }),
          _envi.browser.uc && (_envi.os.android && _Version.match(_envi.get("ve"), "~10.8.5") || _envi.os.iphone && _Version.match(_envi.get("ve"), "~10.8.0")) && l.cmt_cnt > 0) {
          var P = $(".comment_totoal_cnt");
          P.text(l.cmt_cnt).attr("style", "display:block;")
        }
        e(l),
          _tags.init(l),
          _envi.browser.uc || _envi.browser.ucNews ? $(".like-share-wrap").removeClass("fn-hide") : $(".like-share-wrap").css("display", "none"),
        o && 0 == R || _articleLike.render.init(l, {
          aid: c,
          cid: d,
          recoId: f,
          readId: p,
          isSharePage: ""
        }),
          _relate.render.init(l, {
            isSharePage: o,
            rd_typeMap: a,
            appName: m,
            aid: c,
            cid: d,
            huidu: R,
            readId: p,
            recoId: f,
            re_from: b
          }),
          formatContentMediaTag(l.videos),
          renderContentVideoTag(),
          _articleFeedback.render.init(l, {
            aid: c,
            cid: d,
            recoId: f,
            readId: p,
            isSharePage: ""
          }),
        !o && (_envi.browser.uc || _envi.browser.ucNews) && _Version.match(_envi.get("ve"), "11.0~") && $(".bottom-source").text(l.origin_src_name);
        var O = 0
          , N = 0
          , H = {};
        if (_envi.browser.uc || !zzd.Tools.getQueryString("pagetype") || "googleplay-iflow" !== zzd.Tools.getQueryString("app") && 35568 != _envi.get("bi")) {
          var F = ["local.dtcj.com", "test.cp.dtcj.com", "test.wap.dtcj.com", "wap.dtcj.com", "cp.dtcj.com", "ex-rss.yicai.com"];
          if (null != l.politics && 0 == l.politics)
            if (F.vagueIndexOf(location.host) >= 0) {
              var Q;
              r.bigSrc && r.bigUrl ? ($("#uc-big-ad .wrap").append('<a href="' + r.bigUrl + '" class="newBigAd"><img src="' + r.bigSrc + '" width="100%"  uc-image-reader_state="disabled"  /></a>'),
                Q = $(".newBigAd img"),
              o || ($("#uc-big-ad").show(),
                _uca("click", {
                  region: "thirdad",
                  pos: "bigshow",
                  aid: c
                }),
                $("#uc-big-ad .wrap").on("click", function() {
                  _uca("click", {
                    region: "thirdad",
                    pos: "bigshowclick",
                    aid: c
                  })
                })),
              Q.width() / Q.height() != 580 / 240 && Q.attr("height", 240 * Q.width() / 580)) : r.src && r.url && ($("#uc-normal-ad .wrap").append('<a href="' + r.url + '" class="yicaiAd"><img src="' + r.src + '" width="100%"  uc-image-reader_state="disabled"  /></a>'),
                  Q = $(".yicaiAd img"),
                o || ($("#uc-normal-ad").show(),
                  _uca("click", {
                    region: "thirdad",
                    pos: "show",
                    aid: c
                  }),
                  $("#uc-normal-ad .wrap").on("click", function() {
                    _uca("click", {
                      region: "thirdad",
                      pos: "showclick",
                      aid: c
                    })
                  })),
                Q.width() / Q.height() != 548 / 140 && Q.attr("height", 140 * Q.width() / 548))
            } else
              i(),
                h();
          else
            l.politics && 0 == l.politics && $(".newTopAd").addClass("fn-hide");
          var V = getGalleryImgList(l);
          V.length > 0 && $(".gallery-img").on("click", function() {
            if (_envi.browser.uc || _envi.browser.ucNews) {
              var e = {
                id: l.id,
                url: l.url,
                ori_url: l.ori_url,
                cid: l.cid,
                image: V,
                cmt_enabled: l.cmt_enabled
              };
              ucapi.infoflow.openInfoFlowImageGallery({
                data: e
              })
            } else {
              var t = l.images[0].gallery_id;
              t && (location.href = serverPathPage + "/" + netWork.articlePage + "/webview/article/" + t + "?aid=" + t + "&cid=" + d)
            }
          }),
            _bannerTop.render.init(l, {
              aid: c,
              cid: d,
              recoId: f,
              readId: p,
              huidu: R,
              isSharePage: o
            }),
            _shareAD.render.init(l, {
              aid: c,
              cid: d,
              recoId: f,
              readId: p,
              isSharePage: o,
              app: v,
              huidu: R,
              isInnerApp: y
            }),
            _newsIflow.render.init(l, {
              aid: c,
              cid: d,
              recoId: f,
              readId: p,
              isSharePage: o,
              app: v,
              huidu: R,
              isInnerApp: y,
              userSN: u
            })
        }
      }
      function t(e) {
        var t = "&uc_biz_str=S:custom|C:comment|N:true";
        _envi.os.iphone && _Version.match(_envi.get("ve"), "~10.8.0") && (t = "");
        var i = e.cmt_url + "&commentcnt=" + e.cmt_cnt;
        i.indexOf("uc_biz_str") < 0 && (i += t),
        0 == $(".comment_totoal_cnt").length && $(".subtitle").append("<div class='comment_totoal_cnt' style='display: none;'></div>"),
          $(".comment_totoal_cnt").unbind("click").click(function() {
            _envi.os.iphone ? ucapi.comment.openCommentWebview({
              data: {},
              success: function() {},
              error: function() {}
            }) : window.location.href = i
          });
        var n = {
          id: e.id,
          url: window.location.href,
          ori_url: e.original_url,
          publish_time: e.publish_time,
          ch_id: d,
          item_type: e.item_type,
          daoliu_type: 3,
          title: e.title,
          thumbnails: e.thumbnails,
          source_name: e.origin_src_name,
          cmt_cnt: e.cmt_cnt,
          cmt_url: i,
          reco_id: f
        };
        "scnews" === zzd.Tools.getQueryString("zzd_from") && (n = $.extend(n, {
          recom_ch_id: e.redirect_ch_id,
          recom_type: "single"
        })),
        _envi.browser.uc && _Version.match(_envi.get("ve"), "10.8.0~") && e.site_logo && (e.site_logo.img || (e.site_logo.img = {
          url: "",
          width: "",
          height: ""
        }),
          n = $.extend(n, {
            site_logo_type: e.site_logo.style,
            site_title: e.site_logo.desc,
            site_logo_url: e.site_logo.img.url,
            site_logo_width: e.site_logo.img.width,
            site_logo_height: e.site_logo.img.height,
            site_link: e.site_logo.link,
            site_id: e.site_logo.id
          })),
          ucapi.account.onAccountStateChange({
            trigger: function(e) {
              _cache.ucid.setItem(e.ucid)
            }
          }),
          ucapi.infoflow.notifyFlushWebItemInfo({
            data: n
          }),
          setTimeout(function() {
            _commentV2.init({
              xissJsonData: n,
              readId: p
            })
          }, 100)
      }
      function i(e) {
        var t = $("<div class='body-tips'><div class='body-tips-wrap'>" + e + "</div></div>");
        $(".main-content").find(".body-tips").remove().end().append(t),
          $(".body-tips").fadeOut(2e3)
      }
      var s, l = null, c = zzd.Tools.getQueryString("sm_article_id"), d = zzd.Tools.getQueryString("cid") ? zzd.Tools.getQueryString("cid") : 100, p = n(Math.random(0, 1) + c + Date.now()), m = zzd.Tools.getQueryString("app") || "uc-iflow";
      localStorage.getItem("user_sn") || localStorage.setItem("user_sn", "partner-" + +new Date + parseInt(1e11 * Math.random(), 10)),
      zzd.SN || (zzd.SN = localStorage.getItem("user_sn"));
      var f = (zzd.FROM,
        zzd.PAGETYPE,
      localStorage[zzd.SN + "-bid"] || zzd.TRENCH.bid,
        zzd.TRENCH.app_bid,
        zzd.TRENCH.app_mch,
      zzd.Tools.getQueryString("recoId") || "")
        , u = zzd.SN
        , h = document.querySelector("article") ? "article" : "none"
        , g = _envi.get("ve")
        , b = _envi.browser.uc && (_envi.os.android && _Version.match(g, "11.0.5~") || _envi.os.iphone && _Version.match(g, "11.1.0~"))
        , x = $(document.body);
      if (o && x.addClass("page-share"),
          $(document.body).addClass("app-" + m),
          hashchangeHandler(),
        c && "article" == h) {
        _storage.set("_read_id", p);
        var w = _envi.browser.uc ? 4 : 11;
        _uca("pvLog", {
          aid: c,
          cid: zzd.Tools.getQueryString("cid"),
          refrd_id: zzd.Tools.getQueryString("refrd_id"),
          rd_type: zzd.Tools.getQueryString("rd_type"),
          oppo: w
        }),
          s = [{
            v: "cache",
            oppo: w
          }],
          _uca("info", {
            et: "page_status",
            aid: c,
            content: JSON.stringify(s)
          }),
        /iPhone|iPod|iPad/i.test(navigator.userAgent) && $(".main-content").addClass("iphone"),
          sMAddImageHolder(),
          sMRemoveLink(),
          purify("article");
        var v = "";
        v = o ? $("#tpl-main-content").html() : $("#tpl-share-content").html(),
          $("body").append(v),
        ("iphone" === _envi.get("fr") && _Version.match(_envi.get("ve"), "10.9.15~") || "android" === _envi.get("fr") && _Version.match(_envi.get("ve"), "10.10.0.8~")) && ucapi.biz.onBizItemClicked({
          trigger: function(e) {
            _uca("info", {
              et: "client_biz_click",
              aid: zzd.Tools.getQueryString("aid"),
              cid: zzd.Tools.getQueryString("cid"),
              content: JSON.stringify([e])
            })
          }
        }),
          window.onhashchange = hashchangeHandler
      }
      $.ajax({
        url: serverPathIflow + "/" + netWork["article-iflow"] + "/api/v1/article",
        data: {
          aid: '["' + c + '"]',
          app: "uc-iflow",
          uc_param_str: "dnnivebichfrmintcpgieiwidsudpf",
          cid: d,
          content_cnt: 1
        },
        type: "GET",
        dataType: "jsonp",
        jsonp: "callback",
        success: $.proxy(function(t) {
          t && 0 === t.status && t.data.items[c] ? (l = t.data.items[c],
            e()) : t && 0 === t.status && !t.data.items[c] && window.HideHeadVersion && $("header").show()
        }, this),
        error: $.proxy(function() {
          i("网络错误")
        }, this)
      }),
        _statRead.render.init(),
        $(document).on("click", "article img", function() {
          _envi.os.android && b && ucapi.biz.openPicViewer()
        })
    }
    var n = window.md5 = window.MD5
      , a = window.rdtypeMap = window.rd_typeMap
      , o = window.isSharePage = !_envi.browser.uc && "share" == zzd.Tools.getQueryString("pagetype")
      , r = window.adObj = window.getAdList();
    window.articleInit = i,
      window.articleInit = i
  }
]);
console.log(bbb);
