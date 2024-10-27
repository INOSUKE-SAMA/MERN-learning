// var x=7;

// function myfunction(){
//      var x=5;
//     return x;
// }

// var y=myfunction()

// console.log(y);

// console.log(1>=1);

// var x=1;
// if(x==1){
//     console.log("true");
// }
// else
// {
//     console.log("false");
// }

// for(x=1; x<=50; x++){
//     console.log(x);
// }
// var x=[1,2,3,4,5]
// console.log(x);

// // x.forEach(element => {
// //     console.log(element*3);
// // });

// x.map(element=>{
//     console.log(element);
// })

// function callme(){
//     console.log("Call me");
// }

// callme();

function add(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}
function pro(a,b){
    return a*b;
}
function div(a,b){
    return a-b;
}

function calculator(add,sub,pro,div){
    var a=document.getElementById("expression").value;
    var expression=a.split(" ");
    console.log(expression[1]);
    var x=parseInt(expression[0]);
    var y=parseInt(expression[2]);
    var result;
    switch(expression[1]){
        case "+":
            result=add(x,y);
        break;
        case "-":
            result=sub(x,y);
        break;
        case "*":
            result=pro(x,y);
        break;
        case "/":
            result=div(x,y);
        break;

        default:
            console.log("Error");
       
    }
    const resultfield=document.getElementById("result");
    resultfield.textContent=result;

}

const btn=document.getElementById("btn")

btn.addEventListener("click",function(){
    calculator(add,sub,pro,div);
})

