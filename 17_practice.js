let modebtn=document.querySelector("button");
let body=document.querySelector("body");

let currmode="light";
modebtn.addEventListener("click",()=>{
if(currmode==="light"){
    currmode="dark";
    body.classList.add("dark");
    body.classList.remove("light");

}
else{
    currmode="light";
    //document.querySelector("body").style.backgroundColor="white";
    body.classList.add("light");
    body.classList.remove("dark");
}
});
