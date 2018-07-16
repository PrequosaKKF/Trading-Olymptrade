function hideimg() {
    var getimg = document.getElementsByTagName('img');
    for (i=0;i<getimg.length;i++) {
        getimg[i].setAttribute('style','display:none;');
    }
    var getbutton = document.getElementsByClassName('showhide');
    for (i=0;i<getbutton.length;i++) {
        getbutton[i].innerHTML = "แสดงรูปภาพ";
        getbutton[i].setAttribute('onclick','showimg()');
    }
}
function showimg() {
    var getimg = document.getElementsByTagName('img');
    for (i=0;i<getimg.length;i++) {
        getimg[i].setAttribute('style','display:block;');
    }
    var getbutton = document.getElementsByClassName('showhide');
    for (i=0;i<getbutton.length;i++) {
        getbutton[i].innerHTML = "ซ่อนรูปภาพ";
        getbutton[i].setAttribute('onclick','hideimg()');
    }
}