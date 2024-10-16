//  function myfunction(msg){
//      console.log(msg)
//  }
//  myfunction("love js");
//  console.log("love js");

//  function sum(a,b){
//     sum=a+b;
//     return sum;
    
//  }
//  console.log(sum(2,4));

//  let helllo=(a,b) => {
//     return 3*4;
//  }
//  console.log(helllo());

let str="smaran";
function countvowels(str){
  let count=0;
for(const char of str){
   if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u'){
      count++;
   }
      
}
console.log(count);
}
countvowels(str);