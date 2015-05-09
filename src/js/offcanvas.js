$(document).ready(function () {
// console.log("setup datatoggle");
  $('[data-toggle="offcanvas"]').click(function () {
//	console.log("data-toggle-click");
    $('.row-offcanvas').toggleClass('active')
  });
});