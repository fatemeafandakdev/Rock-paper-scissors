let winner=document.querySelector('.winner')
let you=document.querySelector('.you')
let _pc=document.querySelector(".pc")
let score1=document.querySelector('.score1')
let score2=document.querySelector('.score2')
let img=document.querySelector(".img")
let gamer=document.querySelectorAll(".gamer")
let pcx=document.querySelector('.pcx')
let scorepc=1
let scoreyou=1
let pc=[
     
     {src:"./assets/img/1-PhotoRoom.png-PhotoRoom (1).png",id:1},
       { src:"./assets/img/2-PhotoRoom.png-PhotoRoom (1).png",id:2},
       {src:"./assets/img/3-PhotoRoom.png-PhotoRoom (1).png",id:3}]

       
       gamer.forEach(item=>{
          item.classList.remove("ring")
        item.addEventListener("click",function(){
          item.classList.add("ring")
          setTimeout(() => {
              item.classList.remove("ring") 
          }, 1000);
          let x=Math.floor(Math.random()*3)
          let y=pc[x].src
         let  z=pc[x].id
         console.log(z)
          img.setAttribute("src",y)
         pcx.style.transform= "translateY(0) rotate(180deg)" 
         winner.style.transform="translateY(0)"
         winner.style.opacity='1'
         if(item.classList.contains("session")){

if(z==1){
     scores1(score2)
    scorepc++
     winner.innerHTML="You lose"
     winner.style.background="rgb(219, 31, 31)"
     _pc.classList.add("animation")
     you.classList.add("animation2")
}else if(z==2){
     winner.innerHTML="You tie"
     winner.style.background="rgb(151, 167, 65)"
     you.classList.add("animation3")
     _pc.classList.add("animation3")
}else if(z==3){
     scores2(score1)
     scoreyou++
     winner.innerHTML="You win"
     winner.style.background="green"
     you.classList.add("animation")
     _pc.classList.add("animation2")
}
removes()
          
         }else if(item.classList.contains("paper")){
          if(z==1){
               winner.innerHTML="You tie"
               winner.style.background="rgb(151, 167, 65)"
               you.classList.add("animation3")
               _pc.classList.add("animation3")
          }else if(z==2){
               scores2(score1)
               scoreyou++
               winner.innerHTML="You win"
               winner.style.background="green"
               you.classList.add("animation")
               _pc.classList.add("animation2")
          }else if(z==3){
               scores1(score2)
              scorepc++
               winner.innerHTML=" You lose"
               winner.style.background="rgb(219, 31, 31)"
               _pc.classList.add("animation")
               you.classList.add("animation2")
          }
          removes()
         }else if(item.classList.contains("rock")){
          if(z==1){
               scores2(score1)
              scoreyou++
               winner.innerHTML="You win"
               winner.style.background="green"
               you.classList.add("animation")
               _pc.classList.add("animation2")
          }else if(z==2){
     scores1(score2)
     scorepc++
               winner.innerHTML="You lose"
               winner.style.background="rgb(219, 31, 31)"
               _pc.classList.add("animation")
               you.classList.add("animation2")
          
          }else if(z==3){
               winner.innerHTML=" You tie"
               winner.style.background="rgb(151, 167, 65)"
               you.classList.add("animation3")
               _pc.classList.add("animation3")
          }
         
          removes()
         }
         
        })
        
        }
       )
       function removes(){
          setTimeout(() => {
               pcx.style.transform= "translateY(-200px)" 
               winner.style.opacity="0"
               you.classList.remove("animation","animation2","animation3")
               _pc.classList.remove("animation","animation2","animation3")
          }, 1000);
          setTimeout(() => {
               img.removeAttribute("src")
               winner.style.transform="translateY(240%)"
          }, 1400);
          

       }
       function scores1(item){
         item.innerHTML=scorepc
       }
       function scores2(item){
          item.innerHTML=scoreyou
        }

        
        


        

	  fetch( "https://coffee.alexflipnote.dev/7B1hLK79TTk_coffee.png")
	.then(data=>data.json())
     .then(result=>console.log(result))
	



