// const btn = document.getElementsByTagName("button");

// const btn = document.getElementsByClassName("btn")

// const btn = document.getElementById("myBtn");

// const btn = document.querySelectorAll("button");

// console.log(btn);

// function btnClick() {
//   alert("Button Clicked");
// }

// const myFun = (a) =>{

// }

// myFun(()=>{
// asdgfsdfgsdfg
// })

// const btn = document.querySelector("#myBtn");

// btn.addEventListener("click", btnClick);

const setBtn = document.querySelector(".set");
const removeBtn = document.querySelector(".remove");

const box = document.querySelector(".box");

// for (var i = 0; i < setBtn.length; i++) {
// }
setBtn.addEventListener("click", () => {
  // box.style.backgroundColor = "black"
  //   box.style.display = "block";
  //   box.style.marginLeft = "10rem";
  setBtn.style.display = "none";
  removeBtn.style.display = "inline";
});

removeBtn.addEventListener("click", () => {
  // box.style.backgroundColor = "white"
//   box.style.display = "none";
setBtn.style.display = "inline";
  removeBtn.style.display = "none";
});
console.log(box.innerHTML);

box.innerHTML = "hello";
