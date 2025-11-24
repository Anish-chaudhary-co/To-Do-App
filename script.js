let addTask = document.querySelector(".add-btn");
let input = document.querySelector(".input-area");
let tasksContainer = document.querySelector(".tasks-container");
let completeBTN = document.querySelector(".button");
let taskcounter = document.querySelector(".taskcounter .tasknum");
let taskNum = document.querySelector(".taskNum");
let completeNum = document.querySelector(".completeNum");
let resetBTN = document.querySelector(".resetCon button");

let taskcount = 0;
let completecount = 0;

let creatingElement =()=>{

    console.log("this is the element.");
    let divElement = document.createElement("div");
    let inputText = document.createElement("div");
    let buttonElement = document.createElement("button");

    let task = input.value;
    tasksContainer.appendChild(divElement);
    divElement.appendChild(inputText);
    divElement.appendChild(buttonElement);

    divElement.classList.add("divcontainer");
    inputText.classList.add("input");
    buttonElement.classList.add("button");
    inputText.innerText = task;
    buttonElement.innerText = "Complete";
    console.log(inputText);
    taskupdate();


    buttonElement.addEventListener("click",()=>{
    divElement.remove();
    inputText.remove();
    buttonElement.remove();

    completeupdate();
   
});
    input.value = "";
}

input.addEventListener("keydown",(e)=>{
    if(e.key==="Enter"){
        console.log("pressed :",e.key);
        creatingElement();
    }
});

addTask.addEventListener("click",()=>{
        if(input.value === ""){
    alert("Please ! Input your task ?");
}else{
        creatingElement();      
}
});


let taskupdate =()=>{
    let increaseTask = ++taskcount;
    taskNum.innerText = increaseTask;
}


let completeupdate =()=>{
    let increaseComplete= ++completecount;
    let decreasetask = --taskcount;
    taskNum.innerText = decreasetask;
    completeNum.innerText = increaseComplete;
}


    resetBTN.addEventListener("click",()=>{
    tasksContainer.innerHTML = ``;
    taskcount = 0;
    completecount = 0;
    taskNum.innerText = "0";
    completeNum.innerText = "0";
    input.innerText = "";
});
