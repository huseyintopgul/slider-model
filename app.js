let resim = document.getElementsByClassName("resim");
let kutucuk = document.getElementsByTagName("li");
let index = 0;
dondur();
function dondur() {
    if (index >= resim.length){
        index = 0;
    }
    else if (index < 0) {
        index = resim.length - 1;
    }
    for (i = 0; i < resim.length; i++) {
        resim[i].classList.remove("aktif");
        kutucuk[i].classList.remove("aktifList");
    }
    resim[index].classList.add("aktif");
    kutucuk[index].classList.add("aktifList");
    console.log(index);
}
 let otoPlay = setInterval(ileri, 5000);

function ileri(){
    index++;
    dondur();
}
function geri(){
    index --;
    dondur();
}
function durdur(){
    clearInterval(otoPlay);
}
function devam(){
    otoPlay = setInterval(ileri, 5000);
}

