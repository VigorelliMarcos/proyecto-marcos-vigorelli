let caja=document.getElementById("ir-top");
caja.addEventListener("click",function(){
    document.documentElement.scrollTop=0;
})
window.addEventListener("scroll",function(){
    if (document.documentElement.scrollTop > 300) {
        caja.style.display="flex"
    } else {
        caja.style.display="none"
    }
})