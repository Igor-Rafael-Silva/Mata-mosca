//alert("hackeado👑")
 //alert(window.innerWidth)
 //alert(window.innerHeight)


const w = document.querySelector("#largura")
const h = document.querySelector("#altura")
const img = document.querySelector(".mosquito")


function mudarPosicaomosquito() 
{
img.style.top = Math.ceil(Math.random() * (window.innerHeight -100)) + "px"
img.style.left = Math.ceil(Math.random() * (window.innerWidth -100)) + "px"
}

setInterval(mudarPosicaomosquito,1000)


img.addEventListener("click", function() {
    alert("Você acertou o mosquito!")
    mudarPosicaomosquito()
})


w.textContent = window.innerWidth
h.textContent = window.innerHeight
