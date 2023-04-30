const images = ["0.jpg","1.jpg","2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

/*const bgImage = document.createElement("img");
document.querySelector("#BG_box").appendChild(bgImage);
bgImage.src = `img/${chosenImage}`;
bgImage.classList.add("bgImage");
*/

document.querySelector("#quote_container").style.backgroundImage = 
`url(img/${chosenImage})`;

document.querySelector("#quote_container").style.backgroundSize = "cover";