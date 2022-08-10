var $body = document.querySelector("body");

$body.classList.remove('no-js');
$body.classList.add('js');

var burguerMenu = new BurguerMenu({
    btn: '.btn_menu',
    navigation: '#header_nav_list'
});