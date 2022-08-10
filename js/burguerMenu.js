function BurguerMenu(config){
    this.btn = (typeof config.btn === 'string') ? document.querySelector(config.btn) : config.btn;
    this.navigation = (typeof config.navigation === 'string') ? document.querySelector(config.navigation) : config.navigation;

    this.btn.addEventListener("click", toggleMenu);

    var _this = this;

    function toggleMenu(){
        _this.navigation.classList.toggle('active');
    }
};