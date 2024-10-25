let btn1 = document.querySelector("button");

// btn1.onclick=()=>{
//     console.log("hell");
//     alert("warning!!")
// }

//-----------creating event--------------------
 let handler=()=>{
    console.log("heeke");
 }
 btn1.addEventListener("click",handler);
// btn1.addEventListener("click",()=>{
//     console.log("hello mr.");
// }); 
 
btn1.removeEventListener("click",handler);//--------removing event---

let div1=document.querySelector("div");
// div1.onmouseover=()=>{
//     console.log("mosuehover");
//     alert("crusor over div");
// }

div1.addEventListener("mouseover",()=>{
    alert("helllloo!");
});

