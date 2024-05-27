var picture=["./img/pic1.jpg","./img/pic2.jpg","./img/3.jpg"];
var imgtag=document.querySelector("img");

var count=0;
function next(){
    count++;
    if(count>=picture.length){
        count=0;
        imgtag.src=picture[count];
    }
    imgtag.src=picture[count];
    
}

function pre(){
    count--;
    if(count<0){
        count=picture.length -1;
        imgtag.src=picture[count];
    }else{
        imgtag.src=picture[count];
    }
    
}