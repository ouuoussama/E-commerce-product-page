let closemenu = document.getElementById("closemenu");
let openmenu = document.getElementById("respmenu");
openmenu.addEventListener("click", open);
function open() {
    document.getElementById("menu").style.visibility = "unset";
    document.getElementById("menu").style.transition="0.5s";
  }
  closemenu.addEventListener("click", close);
  function close() {
    document.getElementById("menu").style.visibility = "hidden";
  }

// I M A G E     C H A N G E
let img = document.getElementById("imgprinc1");
let product2 = document.getElementById("product2");

product2.addEventListener("click", change2);
function change2() {
  img.src = "images/image-product-2.jpg"
}
let product1 = document.getElementById("product1");
product1.addEventListener("click", change1);
function change1() {
  img.src = "images/image-product-1.jpg"
}
let product3 = document.getElementById("product3");
product3.addEventListener("click", change3);
function change3() {
  img.src = "images/image-product-3.jpg"
}
let product4 = document.getElementById("product4");
product4.addEventListener("click", change4);
function change4() {
  img.src = "images/image-product-4.jpg"
}
// looop
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let thenumber = document.getElementById("thenumber");

plus.addEventListener("click", add1);
function add1() {
    thenumber.innerHTML=parseInt(thenumber.innerHTML) +1;
}

minus.addEventListener("click", add2);
function add2(){
  thenumber.innerHTML=parseInt(thenumber.innerHTML) -1;
}