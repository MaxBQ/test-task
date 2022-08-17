import './index.scss'

const slide1 = document.querySelector(".slide1") as HTMLInputElement;
const slide2 = document.querySelector(".slide2") as HTMLInputElement;
const btnNext = document.querySelector(".next")
const btnBack = document.querySelector(".back")
const cardText1 = document.querySelector(".slide1 .cardText") as HTMLInputElement;
const cardText2 = document.querySelector(".slide2 .cardText") as HTMLInputElement;
const img1 = document.querySelector(".slide1 img") as HTMLInputElement;
const img2 = document.querySelector(".slide2 img") as HTMLInputElement;
const c1_1 = document.querySelector(".slide1 .circles .c1") as HTMLInputElement;
const c1_2 = document.querySelector(".slide1 .circles .c2") as HTMLInputElement;
const c1_3 = document.querySelector(".slide1 .circles .c3") as HTMLInputElement;
const c2_1 = document.querySelector(".slide2 .circles .c1") as HTMLInputElement;
const c2_2 = document.querySelector(".slide2 .circles .c2") as HTMLInputElement;
const c2_3 = document.querySelector(".slide2 .circles .c3") as HTMLInputElement;
const circles1 = document.querySelector(".slide1 .circles") as HTMLInputElement;
const circles2 = document.querySelector(".slide2 .circles") as HTMLInputElement;
const cursor = document.querySelector(".cursor") as HTMLInputElement;


document.getElementById("btn1").addEventListener("mouseover", function mouseOver() {
    cursor.style.width = "100px"
    cursor.style.height = "100px"
});
document.getElementById("btn1").addEventListener("mouseout", function mouseOut() {
    cursor.style.width = "50px"
    cursor.style.height = "50px"
});
document.getElementById("btn2").addEventListener("mouseover", function mouseOver() {
    cursor.style.width = "100px"
    cursor.style.height = "100px"
});
document.getElementById("btn2").addEventListener("mouseout", function mouseOut() {
    cursor.style.width = "50px"
    cursor.style.height = "50px"
});




document.getElementById("myDIV").addEventListener("mousemove", function myFunction(e: MouseEvent) {
    const x = e.pageX;
    const y = e.pageY;
    const coor = "Coordinates: (" + x + "," + y + ")";
    c1_2.style.transform = `translate(${x / 40}px, -${y / 40}px)`
    c1_1.style.transform = `translate(${x / 40}px, ${y / 40}px)`
    c1_3.style.transform = `translate(${x / 40}px, -${y / 40}px)`
    c2_2.style.transform = `translate(${x / 40}px, -${y / 40}px)`
    c2_3.style.transform = `translate(${x / 40}px, ${y / 40}px)`

    cursor.style.transform = `translateX(${x - 62}px) translateY(${y - 20}px)`

});




btnNext?.addEventListener('click', function changeOpacity() {
    cardText1.style.transform = "translateY(50px)";
    cardText1.style.transition = "all 1s";
    cardText1.style.opacity = "0";

    img1.style.transform = "translateX(-24px)";
    img1.style.transition = "all 1.5s";
    img1.style.opacity = "0";
    img2.style.transform = "translateX(24px)";
    img2.style.transition = "all 1.5s";
    img2.style.opacity = "1";

    c1_1.style.transform = "translateX(-100px)"
    c1_1.style.transition = "all 1.5s";
    c1_2.style.transform = "translateX(-20px)"
    c1_2.style.transition = "all 1.5s";
    c1_3.style.transform = "translateX(100px)"
    c1_3.style.transition = "all 1.5s";
    circles1.style.opacity = "0"
    c2_1.style.transform = "translateX(10px)"
    c2_1.style.transition = "all 1.5s";
    c2_2.style.transform = "translateX(100px)"
    c2_2.style.transition = "all 1.5s";
    c2_3.style.transform = "translateX(100px)"
    c2_3.style.transition = "all 1.5s";
    circles2.style.opacity = "1"


    cardText2.style.transform = "translateY(-50px)";
    cardText2.style.opacity = "1";
    cardText2.style.transition = "all 1.5s";
    slide2.style.opacity = "1";
    setTimeout(() => {
        slide1.style.opacity = "0";
    }, 500)

})
btnBack?.addEventListener('click', function changeOpacity() {
    cardText2.style.transform = "translateY(50px)";
    cardText2.style.transition = "all 1s";
    cardText2.style.opacity = "0";

    img2.style.transform = "translateX(-24px)";
    img2.style.transition = "all 1.5s";
    img2.style.opacity = "0";
    img1.style.transform = "translateX(24px)";
    img1.style.transition = "all 1.5s";
    img1.style.opacity = "1";

    c1_1.style.transform = "translateX(100px)"
    c1_1.style.transition = "all 1.5s";
    c1_2.style.transform = "translateX(20px)"
    c1_2.style.transition = "all 1.5s";
    c1_3.style.transform = "translateX(100px)"
    c1_3.style.transition = "all 1.5s";
    circles1.style.opacity = "1"
    c2_1.style.transform = "translateX(-10px)"
    c2_1.style.transition = "all 1.5s";
    c2_2.style.transform = "translateX(-100px)"
    c2_2.style.transition = "all 1.5s";
    c2_3.style.transform = "translateX(-100px)"
    c2_3.style.transition = "all 1.5s";
    circles2.style.opacity = "0"

    cardText1.style.transform = "translateY(-50px)";
    cardText1.style.opacity = "1";
    cardText1.style.transition = "all 1.5s";
    slide1.style.opacity = "1";
    setTimeout(() => {
        slide2.style.opacity = "0";
    }, 1000)
})


document.getElementById("demo").addEventListener("mouseover", mouseOver);
document.getElementById("demo").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("demo").style.color = "red";
}

function mouseOut() {
    document.getElementById("demo").style.color = "black";
}