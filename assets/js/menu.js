let menuVisible = false;
const menu = document.getElementById("menu");
const controlMenu = () => {
    if (!menuVisible){
        ///show menu
        menu.className = "visible";
    }
    else {
        ///hide menu
        menu.className = "";
    }
}
const exitMenu = () => {
    if (location.hash === "#menu"){
        history.back();
    }
}
const clearHashOnPageLoad = () => {
    setTimeout(() => {
        if (location.hash.length > 0){
            history.back();
            clearHashOnPageLoad();
        }
    }, 100);
}

const sttBtn = document.getElementById("scroll-to-top");
const controlSttBtn = () => {
    const scrollTop = window.scrollY;
    const viewportHeight = window.innerHeight;
    
    if (scrollTop > viewportHeight){
        sttBtn.setAttribute("class", "visible");
    }
    else {
        sttBtn.setAttribute("class", "");
    }
};
const scrollToTop = () => {
    window.scrollTo(0,0);
    if (location.hash === "#explore"){
        history.back();
    }
}

window.onhashchange = () => {
    if (location.hash !== "#menu"){
        menu.className = "";
    }
    else {
        menu.className = "visible";
    }
}
window.onload = clearHashOnPageLoad;
window.onscroll = controlSttBtn;
