const btn = document.querySelector(".burger");

const list = document.querySelector("nav");

btn.addEventListener("click", function () {
    btn.classList.toggle("open");
    list.classList.toggle("show");
});
