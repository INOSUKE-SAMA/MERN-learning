// // function task1(callback){
// //     setTimeout(function(){
// //         console.log("Task 1 is completed")
// //         callback();
// //     },1000);
    
// // }


// // function task2(callback){
// //     setTimeout(function(){
// //         console.log("Task 2 is completed")
// //         callback();
// //     },3000);
    
// // }


// // function task3(callback){
// //     setTimeout(function(){
// //         console.log("Task 3 is completed")
// //         callback();
// //     },2000);
  
// // }


// // function task4(){
// //     setTimeout(function(){
// //         console.log("Task 4 is completed")
// //     },1500);
// // }



// // task1(
// //     ()=>{task2(
// //         ()=>{task3(
// //             ()=>{task4()}
// //         )}  
// //     )}
// // );


// // let promise = new Promise(function(reslove,reject){
// //     let login=false;
    
// //     if (login==true){
// //         reslove("Login Successfull");
// //     }
// //     else
// //     {
// //         reject("Login Unsuccessful");
// //     }
// // })

// // promise.then(function(result){
// //     console.log(result);
// // }).catch(function(error){
// //     console.log(error);
// // });

// function task1(){
//     setTimeout(function(){
//         console.log("Task 1 is completed")
        
//     },1000);
//     return new Promise(function(reslove,reject){
//         reslove("Task 1 is DOne");
//         reject("Task  1 failed");
//     });
    
// }


// function task2(){
//     setTimeout(function(){
//         console.log("Task 2 is completed")
        
//     },3000);
//     return new Promise(function(reslove,reject){
//         let status=false;
//         if(status==true){
//             reslove(" task 2 is done")
//         }else{
//             reject("error in task 2");
//         }


//         reslove("Task 2 is DOne");
//         reject("Task  2 failed");
//     });
    
    
// }


// function task3(){
//     setTimeout(function(){
//         console.log("Task 3 is completed")
//     },2000);
//     return new Promise(function(reslove,reject){
//         reslove("Task 3 is DOne");
//         reject("Task  3 failed");
//     });
    
  
// }


// function task4(){
//     setTimeout(function(){
//         console.log("Task 4 is completed")
//     },1500);
//     return new Promise(function(reslove,reject){
//         reslove("Task 4 is DOne");
//         reject("Task  4 failed");
//     }); 
// }

// task1().then(function(result){
//     console.log(result);
// }).catch(function(error){
//     console.log(error);
// }).then(task2().then(function(result){
//     console.log(result);
// }).catch(function(error){
//     console.log(error);
// })).then(task3().then(function(result){
//     console.log(result);
// }).catch(function(error){
//     console.log(error);
// })).then(task4().then(function(result){
//     console.log(result);
// }).catch(function(error){
//     console.log(error);
// }))

// const myClass=[
//    {
//     name:"Inosuke",
//     age:18
//    },
//    {
//     name:"Tanjiro",
//     age:17
//    },
//    {
//     name:"zenitsu",
//     age:17
//    }
// ]

// console.log(myClass[2].name);

// let student=new class{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }

// }

function Student(name,age)
{
    this.name=name;
    this.age=age;
}
let chirag=new Student("chirag",20);
console.log(chirag.name);
console.log(chiarg.age);