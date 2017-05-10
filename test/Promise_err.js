window.addEventListener('error', function(err) {
  alert(err.message);
  console.log(err);
});

window.addEventListener('unhandledrejection', function(err) {
  alert(err.message);
  console.log(err);
});

setTimeout(function() {
  console.log(aaa);
}, 0);

console.log(bbb);