let mainImg = document.getElementById("main-image")
let images = document.querySelectorAll(".inner-image")
let btnPrav = document.getElementById('prev')
let btnNext = document.getElementById('next')

let state = 0
console.log(btnPrav);

btnNext.addEventListener("click", () =>{
    state += 1
    if(state<images.length){
        mainImg.src = images[state].src
    }else{
        state = 0
        mainImg.src = images[state].src
    }
})

btnPrav.addEventListener('click', () =>{
    state -=1
    if(state>0){
        mainImg.src = images[state].src
    }else{
        state=images.length-1
        mainImg.src = images[state].src
    }
})
// images.forEach((image)=>{
//     image.addEventListener('click',()=>{
//         mainImg.src=image.src
//     })
// })

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click',()=>{
        mainImg.src=images[i].src
    })
    
}