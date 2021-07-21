
//Animacion a pasar
const card = document.querySelector(".card");
const container = document.querySelector(".container");
// evento de animacion de movimiento

container.addEventListener("mousemove", (e)=>{
    let xAxis = (window.innerWidth/2 - e.pageX) / 10;
    let yAxis = (window.innerHeight/2 - e.pageY)/ 10;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    
} )
// Empezar Animacion
container.addEventListener('mouseenter', e=>{
    card.style.transition = `none`;

})



//Terminar animacion
container.addEventListener('mouseleave', (e)=>{
    card.style.transition = 'all 0.5s ease'
    card.style.transform = `rotateY(0deg) rotateX(0deg)`
})