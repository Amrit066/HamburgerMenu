// Global variable to capture click count
let count=1;

// Accessing html
let mcontainer=document.getElementById("mcontainer");
let mcontent=document.getElementById("#mcontent");
let mstick1=document.getElementById("stick-1");
let mstick2=document.getElementById("stick-2");
let mstick3=document.getElementById("stick-3");

// Adding event listener
// mcontent.addEventListener("click",changeHamStyle);

// Function called on click
function changeHamStyle(){
  if(count===1){
    mcontainer.style.backgroundColor="#00ff6e";
    mstick1.classList.add("s1-active");
    mstick2.classList.add("s2-active");
    mstick3.classList.add("s3-active");
    count++;
  }
  else{
    mcontainer.style.backgroundColor="#d9025f";
    mstick1.classList.remove("s1-active");
    mstick2.classList.remove("s2-active");
    mstick3.classList.remove("s3-active");
    count--;
  }
  
}