function loadScript(url) {
  var scriptEl = document.createElement('script');
  scriptEl.type = 'text/javascript';
  scriptEl.src = url;
  scriptEl.crossOrigin = 'anonymous';
  document.head.appendChild(scriptEl);
}

loadScript('http://image.uc.cn/s/uae/g/1y/xisspages-old-third-party/1.524a877614ad4fb83532.js');