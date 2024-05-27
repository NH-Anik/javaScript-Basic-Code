
// ------------------------------how to array decliaration start--------------------------

// var number=[1,1,1,1,1,1];
// console.log(number)

//----------------------------------------------
// var array=Array(1,1,1,1,1,1);
// console.log(array)

//----------------------------------------------
// var array=Array();
// array[0]=5;
// array[1]=55;
// array[2]=12;
// array[3]=52;
// array[4]=45;
// array[5]=20;
// console.log(array)

//-----------------------array index in sum-----------------------
// var array=Array();
// array[0]=5;
// array[1]=55;
// array[2]=12;
// array[3]=52;
// array[4]=45;
// array[5]=20;
// var sum=array[0]+array[1]+array[2]+array[3]+array[4]+array[5];
// console.log(sum)
// document.write(sum)

//-----------------------5 array index in data-----------------------
// var array=Array();
// var i;
// for(i=0;i<5;i++){
//     array[i]=parseInt(prompt("enter your number:"))
// }
// document.write(array)

// ------------------------------how to array decliaration end--------------------------



// ------------------------------5 data input and 5 data sum --------------------------


// var allNumber= Array();


// var i;

// for(i=0;i<5;i++){
//     allNumber[i]=parseInt(prompt("enter your number:"))
// }
// document.write(allNumber)

// var sum=0;

// for(i=0;i<5;i++){
//     sum=sum+allNumber[i];
// }

// document.write("</br>"+"sum Number is"+sum)


// 1D array  hight number search in array index---------------------

// function highnumber(number1){
//    var max=number1[0];
//    var i;
//    for(i=1;i<number1.length;i++){
//          if(max<number1[i]){
//             max=number1[i];
//          }
//    }
//    return max;
// }


// var number1=[25,10,23,45,68];
// highnumber(number1);
// var hn=highnumber(number1);
// console.log(hn);


// 2D array  hight number search in array index---------------------

function highnumber(number1){
   var max1=number1[0][0];
   var max=number1[0][1];
   var i;
   for(i=1;i<number1.length;i++){

         if(max<number1[i][1]){
            max=number1[i][1];
            max1=number1[i][0];
         }
   }
   return max1;
}


var number1=[["Anik",105],["nik",1105],["ik",1505],["k",1305],["anikAnik",1705],];
var hn=highnumber(number1);
console.log(hn);