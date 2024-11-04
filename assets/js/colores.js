function pintar(ele, color = 'black') {
    ele.style.backgroundColor = color;
}

const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");
const div4 = document.getElementById("div4");

div1.addEventListener("click", () => {
    pintar(div1);
});

div2.addEventListener("click", () => {
    pintar(div2);
});

div3.addEventListener("click", () => {
    pintar(div3);
});

div4.addEventListener("click", () => {
    pintar(div4);
});
