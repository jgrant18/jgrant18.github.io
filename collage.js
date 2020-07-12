const images = ["images/nana-waiting.jpg","images/targe-sunbaking.jpg","images/at-a-party.jpg","images/dog-at-laundromat.jpg","images/macbook-on-the-couch.jpg","images/walking-on-water.jpg","images/ballpit.jpg","images/closeup.jpg","images/dogs-at-edeka.jpg","images/counting-coins.jpg","images/drinking-friends.jpg","images/dogs-at-edeka.jpg","images/Hands-at-night.jpg","images/3-wishes.jpg","images/waiting-for-owner.jpg","images/laundromat.jpg","images/life-on-mars.jpg","images/nana-waiting-at-home.jpg","images/on-phone.jpg","images/picnic.jpg","images/ping-pong.jpg","images/sunbaking-dog.jpg"]


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


