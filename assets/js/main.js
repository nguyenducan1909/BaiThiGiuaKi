window.onscroll= function() {
    console.info(document.documentElement.scrollTop);
    var header= document.getElementById("myHeader");
    if(document.documentElement.scrollTop > 100|| document.body.scrollTop > 100) {
       
       header.style.position =" fixed";
       header.style.left= 0;
       header.style.right=0;
       header.style.background="linear-gradient(90deg, rgba(38,48,235,1) 0%, rgba(91,71,241,1) 27%, rgba(79,209,230,1) 82%)";
       header.style.top = 0;
       header.style.zIndex = 10;
       
    } else {
        header.style.position= "relative";
    }
 }
//  var header = document.getElementsByClassName('menu-header');
//  var mobileMenu = document.getElementsByClassName('mobile-menu');
//  mobileMenu.onclick = function() {
//   var isClose = header.clientHeight ===
//  }
// // var imgFeature = document.querySelector(".img-feature")
// // var listImg= document.querySelectorAll(".list-img-slide img")
// // var descFeature = document.querySelector(".decs-feature")
// // var listDesc=document.querySelectorAll("list-img-slide a")
// // var prevBtt = document.querySelector(".prev")
// // var nextBtt = document.querySelector(".next")
// // var currentIndex=0;
// // function updateImage(index){
    
// //     currentIndex=index
// //     imgFeature.src=
// //     listImg[index].getAttribute('src')

// // }

// // function updateDesc(index){ 
// //     currentIndex=index
// //     descFeature= listDesc[index]

// // }

// // listImg.forEach((imgElement, index)=>{
// //     imgElement.addEventListener('click', e=>{
// //         updateImage(index)
// //     })
// // })
// // listImg.forEach((aElement, index)=>{
// //     aElement.addEventListener('click', e=>{
// //         updateDesc(index)
// //     })
// // })
// // prevBtt.addEventListener('click',e=>{
// //     if(currentIndex==0){
// //         currentIndex=listImg.length-1
// //         currentIndex=listDesc.length-1
// //     } else{
// //         currentIndex--
// //     }
// //     updateImage(currentIndex)
// //     updateDesc(currentIndex)
// // })
// // nextBtt.addEventListener('click',e=>{
// //     if(currentIndex==listImg.length-1 && currentIndex==listDesc.length-1){
// //         currentIndex=0
// //     } else{
// //         currentIndex++
// //     }
// //     updateImage(currentIndex)
// //     updateDesc(currentIndex)
// // })
// // updateImage(0)
// // updateDesc(0)


// function handleClick(event) {
//   // Get the element that was clicked.
//   const element = event.target;
//   // Check if the element has a "data-id" attribute.
//   if (element.hasAttribute("data-id")) {
//     // Get the value of the "data-id" attribute.
//     const id = element.getAttribute("data-id");
//     // Do something with the ID.
//     console.log(id);
//   }
// }
// // Add the "handleClick" event listener to all elements with the "btn" class.
// document.querySelectorAll(".btn").forEach(element => {
//   element.addEventListener("click", handleClick);
// });
// //hieu ung load trang                           
// // Create a function that will be called when the page loads.
// function onLoad() {
//     // Get the element that will display the message.
//     const messageElement = document.getElementById("message");
//     // Set the message text.
//     messageElement.innerHTML = "Hello, world!";
//   }
//   // Add the "onLoad" event listener to the window object.
//   window.addEventListener("load", onLoad);

//   function handleClick() {
//     // Get the element that was clicked.
//     const element = event.target;
//     // Get the value of the "data-url" attribute.
//     const url = element.getAttribute("data-url");
//     // Open the URL in a new tab.
//     window.open(url);
//   }
  // Add the "handleClick" event listener to the button.
//   document.getElementById("btn").addEventListener("click", handleClick);
 