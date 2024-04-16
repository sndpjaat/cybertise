const  menuIcon = document.querySelector(".menuIcon");
const menuList = document.querySelector(".menuList");
const opnva = document.querySelectorAll(".opnva");
menuIcon.addEventListener("click" , ()=>{
    menuIcon.classList.toggle("active");
    document.body.classList.toggle("overflow-hidden")
    menuList.classList.toggle("active");

}) 
opnva.forEach(e => {
  e.addEventListener("click" , ()=>{
    menuIcon.classList.toggle("active");
    document.body.classList.toggle("overflow-hidden")
    menuList.classList.toggle("active");
  
  }) 
  
})
