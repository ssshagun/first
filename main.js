console.log('shagun 1')
const s='techno';
console.log(s.split(''));
let a=prompt("whats your age ?");
a=Number.parseInt(a);
if(a>0){
/*alert("this is valid age");
}
else{
    alert("this is an invalid age");
}*/
console.log("you can", (a<18 ? "not drive":"drive"));
}
const expr='orange';
switch(expr){
    case 'orange':
        console.log('oranges are 80 rs per kg');
        break;
        case 'mango':
            case 'papaya':
                console.log('mango and papaya are 100 rs pr kg');
                break;
                default:
                    console.log("sorry we are out od expr");
}
console.log("you can", (a<18 ? "not drive":"drive"));
const listItems = document.querySelectorAll('#myList li');

// Change the color of the first <li> to green
listItems[0].style.color = 'green';

// Change the color of the second <li> to yellow
listItems[1].style.color = 'yellow';

let obj={
harry:90,
shagun:100,
muskan:76

};
//for in loop
for(let a in obj){
    console.log("marks of " +a+ "are" +obj[a]);
}
//for out loop
for(let b in "shagun"){
    console.log(b);
}
const hello=()=>{
    console.log("hey how are you?")
    return "hi"
}
const sum=(p,q)=>{
    return p+q;
}
let v=hello();
console.log(v);

function onePlus(x,y){
    return 1+(x+y)/2;
}
let g=3;
let h=2;
let i=5;
console.log("average of a and b is",onePlus(g,h))
console.log("average of a and b is",onePlus(h,i))
console.log("average of a and b is",onePlus(g,i))
console.log("sum is",sum(9,2))

/*class RailwayForm{
    constructor(givenname,trainno){
        console.log("constructor called",givenname,trainno)
            this.name=givenname
            this.trainno=trainno
        }
      
    submit(){
       alert(this.name+ "form submitted for train no "  +this.trainno) 
    }
    cancel(){
        alert(this.name+ "form cancel for train no"  +this.trainno )
    }
    //fill(givenname,trainno){
      //  this.name=givenname
      //  this.trainno=trainno
    //}
}
let harryform=new RailwayForm("harry",4543)
//harryform.fill("harry",1435)
let rohanform=new RailwayForm("rohan",8765)
//rohanform.fill("rohan",4543)

harryform.submit()
rohanform.submit()
rohanform.cancel()*/

/*var printObject=()=>{
    const person={
        age : 26,
        firstname : 'shagun',
        lastname : 'srivastava',
        hobbies : ['drawing','cooking','reading'],
        address :{
            street: 'panchsheel greens 2',
            city : 'greater noida',
            state : 'uttar pradesh'
        }
    };

    console.log("person second hobbies=",person.hobbies[1]);
    console.log("person state=",person.address.state);

    console.log("person age is=",person.age);
    console.log("person city is=",person.address.city);
};
printObject(); */
/*
function Person(firstName, lastName, age, sex) {
    this.age = age;
    this.firstName = firstName;
    this.lastName = lastName;
    this.sex = sex;
}
    Person.prototype.printfullname = function () {
        console.log(`${this.firstName} ${this.lastName}`);
    };
    
    Person.prototype.findEligibleOrNot =function(minAge){
        if(this.age>=minAge){
            console.log("eligible");
        }
        else{
            console.log("not eligible");
        }
    };
    function createNewStudent(){
        const person1 =new Person("shagun","srivastava",26,"female")
        person1.printfullname();
        person1.findEligibleOrNot(18);
    }
    async function readinput(){
        createNewStudent();
        process.exit();
    }
    readinput();
    */

   /* class User{
        static totaluser=0;
        constructor(name,rollno,address){
          this.name=name;
          this.rollno=rollno;
          this.address=address;
          User.totaluser++;
      }
        display(){
          console.log(`currentnoofuser= ${User.totaluser}`);
        }
      }
      function newStudent(){
        const shagun=new User("shagun",34536,"dgjgjgjd");
        const prachi=new User("prachi",34539,"dgjyrjgjd");
        shagun.display();
      }
      newStudent(); */

      class Animal{
        constructor(name,color){
            this.name=name
            this.color=color
        }
        run(){
            console.log(this.name+"is runnig");
        }
        shout(){
            console.log(this.name+" is Shouting");
        }
    }
        class Monkey extends Animal{
            eatBanana(){
                console.log(this.name+" eating banana");
            }
        }
        let m=new Animal("chiku","brown");
        let n=new Monkey("jacky","red");
        n.shout();
        n.eatBanana();
      

