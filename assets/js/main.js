var gotoheader= document.getElementById("gototop");
window.onscroll= function() {
    console.info(document.documentElement.scrollTop);

    var header= document.getElementById("myHeader");
    if(document.documentElement.scrollTop > 100|| document.body.scrollTop > 100) {
       gotoheader.style.display= "inline-block";
       header.style.position =" fixed";                           
       header.style.left= 0;
       header.style.right=0;
       header.style.background="linear-gradient(90deg, rgba(38,48,235,1) 0%, rgba(91,71,241,1) 27%, rgba(79,209,230,1) 82%)";
       header.style.top = 0;
       header.style.zIndex = 10;
       
    } else {
        header.style.position= "relative";
        gotoheader.style.display= "none";
    }
 }
function truotLen() {
   gotoheader.addEventListener("click", () => {
      document.documentElement.scrollTop= 0
   })
}


 const buttonMenu = document.querySelector("#mobile-menu");
 const menu = document.querySelector("#menu");
 buttonMenu.addEventListener("click",() =>{
  menu.classList.toggle("show")
 })

var buttonLoginv=document.querySelector("#Login"); 
var dangNhap = document.querySelector("#wrapper");
 buttonLoginv.addEventListener("click", () => {
    dangNhap.classList.toggle("show")
 })

 const buttonDangNhap = document.querySelector("#form-btt-dangnhap");
 buttonDangNhap.addEventListener("click", () =>{
   dangNhap.classList.add("none")
 })
 