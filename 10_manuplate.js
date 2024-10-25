// let div= document.querySelector("div"); //---ACCESSING THE ELEMENT BEFORE CHANGING


//-----------CHANGING OF THE ELEMENT ATTRIBUTE---------------------
// // div.getAttribute("id");
// // div.setAttribute("id","box");

//------STYLING WITH IN JS---------------

// div.style.backgroundColor="purple";
// div.style.fontFamily="arial";
// div.style.fontSize="30px";

//-------CHANGING THE INNER CONTENT IN DIV---------------------
// div.innerText="Hello!!!";

//---------CREATING A NEW ELEMENT WITHIN JS--------------//
let butt= document.createElement("button");

butt.innerText="click!!";


let div=document.querySelector("div");
div.after(butt);//------------DISPLAYING IN SCREEN-----------

let newheading=document.createElement("h1");
newheading.innerText="Welcome to javascript course";

// let sel=document.querySelector("body");
// sel.after(newheading);
 document.querySelector("body").prepend(newheading);

 //---------------DELETING THE ELEMENT-----------------

 let para=document.querySelector("p");
 para.remove(); 