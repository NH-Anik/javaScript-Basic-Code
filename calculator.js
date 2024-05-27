var num1=prompt("Enter your fast num:")
var num2=prompt("Enter your sec num:")

 num1=parseInt(num1)
 num2=parseInt(num2)

 var sum=num1+num2;
 var mines=num1-num2;
 var vag=num1/num2;
 var gun=num1*num2;
 var per1=num1%num2;

 document.write("<h3>Addition</h3>"+num1+"+"+num2+"="+sum+"</br>");
 document.write("<h3>Subtraction</h3>"+num1+"-"+num2+"="+mines+"</br>");
 document.write("<h3>Division</h3>"+num1+"/"+num2+"="+vag+"</br>");
 document.write("<h3>Multiplication</h3>"+num1+"*"+num2+"="+gun+"</br>");
 document.write("<h3>Percent</h3>"+num1+"%"+num2+"="+per1);

