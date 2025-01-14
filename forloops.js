// // let str = "harshitsanjaymaurya";
// // let size = 0

// // for(let i of str){
// //     console.log("i=",i);
// //     size++;
// // }

// // console.log("string length is =",size);


//let student ={
//     name : "Harshit Sanjay Maurya",
//     course : "btech cse ai and ml",
//     cgpa : "9.9",
//     ispass : true,
// }

// for(let i in student){
//     console.log("i = ",i,"value =",student[i]);
// }




//mini game made just by using promt and variables
let gamenum = 200;
let usernum = prompt("guess the game number");
console.log(usernum);

while(gamenum != usernum){
   usernum = prompt("you entered the wrong the wrong number guess the game number again!!!");
}

console.log("congratulatios you enterd the  correct number!!!!!");
