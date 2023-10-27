let getImage = document.getElementById("image");
getImage.addEventListener('mouseenter' , ()=>{
    getImage.src = './bulbOn.jpeg';
}) 
getImage.addEventListener('mouseleave' , ()=>{
    getImage.src = './bulbOff.jpeg'; 
}) 