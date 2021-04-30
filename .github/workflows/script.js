var x = document.getElementById("mobilenavlinks");

function menu(){
    if(x.style.display === 'block'){
        x.style.display = 'none';
    } else{
        x.style.display = 'block';
    }
}

var myImage = document.getElementById("mainImg");
var imageArray = ["img/banner2.JPG", "img/banner3.JPG", "img/banner.JPG"];
var imageindex = 0;

function changeImage() {
    myImage.setAttribute("src",imageArray[imageindex]);
    imageindex++;
    if (imageindex >= imageArray.length) {
        imageindex = 0;
    }
}

setInterval(changeImage,5000);