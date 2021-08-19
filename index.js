const imgContainer = document.querySelector(".hero__img-container");
const circle = document.querySelector(".circle");

const width = imgContainer.clientWidth;
const height = imgContainer.clientHeight;
const diagonalLength = Math.sqrt(width*width + height*height);

imgContainer.addEventListener("mouseenter", (e) => {
    circle.style.display = "block";
    console.log("enter");


})

imgContainer.addEventListener("mouseleave", (e) => {
    circle.style.display = "none";
    console.log("leave");
})

imgContainer.addEventListener("mousemove", (e) => {
    // circle.style.top = e.clientY + "px";
    // circle.style.left = e.clientX + "px";
    const x = e.pageX - imgContainer.offsetLeft;
    const y = e.pageY - imgContainer.offsetTop;
    circle.style.transform = `translate(calc(${x}px - 50%), calc(${y}px - 50%))`;
    console.log(111);
    circle.style.filter = `hue-rotate(${Math.sqrt(x*x+y*y)/diagonalLength*360}deg)`; 

})
