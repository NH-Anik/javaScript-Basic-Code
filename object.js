
// object function  conastrator in constract

function Student(name,age,cgpa,address){
    this.name=name;
    this.age=age;
    this.cgpa=cgpa;
    this.address=address;
    
    this.display=function(){
        console.log(name)
        console.log(age)
        console.log(cgpa)
        console.log(address)
    }
}

var student= new Student("anik",25,2.22,"kushtia")
var student1= new Student("bnik",125,22.22,"hkushtia")
var student2= new Student("cnik",225,32.22,"jkushtia")
var student3= new Student("dnik",325,32.22,"kkushtia")

student.display();
student1.display();
student2.display();
student3.display();

// object function  conastrator----------------

// function Student(name,age,cgpa,address){
//     this.name=name;
//     this.age=age;
//     this.cgpa=cgpa;
//     this.address=address;

// }

// var student= new Student("anik",25,2.22,"kushtia")
// var student1= new Student("bnik",125,22.22,"hkushtia")
// var student2= new Student("cnik",225,32.22,"jkushtia")
// var student3= new Student("dnik",325,32.22,"kkushtia")

// console.log(student0)
// console.log(student1)
// console.log(student2)
// console.log(student3)

// object decleraretion------------------------------ 

// var student={name:"anik",age:25,cgpa:4.00,address:"kushtia"}
// console.log(student.address)