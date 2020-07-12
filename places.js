const images = ["images/cherryblosom.jpg","images/coffee.jpg","images/God.jpg","images/gosford.jpg","images/Japan-print.jpg","images/Norway.jpg","images/tiled-building.jpg","images/sky.jpg","images/stone.jpg","images/concrete-building.jpg","images/plant-cafe.jpg","images/pickles.jpg" ]


let i = 0 

function placeImage(x,y) {
    const nextImage = images [i]
    const img = document.createElement ("img")
img.setAttribute ("src", nextImage )
img.style.left= x +"px"
img.style.top = y+"px"
img.style.transform = ` scale (0.5) translate (-100%, -100%) rotate ( ${Math.random() * 20 - 10}deg)`


// transform: scale(0.5) translate(-100%, -100%);
document.body.appendChild(img)
i=i+1
if (i>=images.length){i=0}
}



document.addEventListener("click", function(event){
    event.preventDefault()
    placeImage(event.pageX, event.pageY)
})


