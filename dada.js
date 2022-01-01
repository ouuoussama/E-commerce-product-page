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
  img.src = "images/image-product-4.jpg";
}
// increse number + increase prix 


let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let thenumber = document.getElementById("thenumber");
var inside = document.getElementById("thenumber").value;
var pricecont = document.getElementById("price").textContent;
var price = document.querySelector("#price");
 
plus.addEventListener("click", add1);
function add1() {
    thenumber.value=parseInt(thenumber.value) +1;
    inside++;
    document.getElementById("thenumber").value = inside;
    total();
}
minus.addEventListener("click", add2);
function add2(){
  thenumber.value=parseInt(thenumber.value) -1;
  inside--;
  document.getElementById("thenumber").value = inside;
  
  if (inside === 0){
    minus.removeEventListener("click", add2);
    minus.style.cursor = "no-drop";
    }
  total();
}
function total(){
  var prototal = inside * pricecont; 
  document.getElementById("price").innerHTML=prototal+".00";
}
////////// Z O O M I M A G E///////
let zoom = document.querySelector(".zoom");
let close1 = document.querySelector(".close");
img.addEventListener("click", function () {
  console.log("hi");
  zoom.style.visibility="unset";
})
close1.addEventListener("click",function () {
    zoom.style.visibility="hidden";
})
/// S L i D E    I M A G E ////////
var myimages = [
  "images/image-product-2.jpg",
  "images/image-product-3.jpg",
  "images/image-product-4.jpg",
  "images/image-product-1.jpg"
]
var zoomimg = document.querySelector(".zoomimg");
var btnnext = document.querySelector(".btnnext");
var btnprev = document.querySelector(".btnnext1")
var i  = myimages.length;

btnnext.addEventListener("click", function () {
  
   if(i<myimages.length){
     i=i+1;
     
   }else{
    i=1;
  }
  console.log(i)

  zoomimg.src=myimages[i-1]
});
btnprev.addEventListener("click", function () {
   if(i>1){
     i= i - 1;
   }else{
    i=4
  }
  console.log(i)
  zoomimg.src=myimages[i-1];
});
// I M A G E   Z O O M    C H A N G E
let b = document.querySelector(".b");
b.addEventListener("click", change10);
function change10() {
  zoomimg.src = "images/image-product-2.jpg"
}
let a = document.querySelector(".a");
a.addEventListener("click", change11);
function change11() {
  zoomimg.src = "images/image-product-1.jpg"
}
let c = document.querySelector(".c");
c.addEventListener("click", change12);
function change12() {
  zoomimg.src = "images/image-product-3.jpg"
}
let d = document.querySelector(".d");
d.addEventListener("click", change13);
function change13() {
  console.log('what')
  zoomimg.src = "images/image-product-4.jpg";
}
//////////////////////////////////////////////////////// L A S T  T H I N G 
function showandhide(){
    if (a==1) {
        document.querySelector(".addtocart1").style.display="inline-block";
        return a=0
          }
          else{
            document.querySelector(".addtocart1").style.display="none";
            return  a=1
          }
}
let btn = document.querySelector(".btn");
let checkout = document.querySelector(".checkout");
let p02 = document.querySelector(".p02");
let numbi = document.querySelector("#numbi");
let insidethecart =document.querySelector(".insidethecart");
let btnl = document.querySelector("#btnl");
let checkprice = document.querySelector("#checkprice");
var prototal1 = inside * pricecont; 
btn.addEventListener("click", tn);
function tn() {
    checkout.style.visibility = "visible";
    checkout.value = inside;
    numbi.innerHTML= inside;
    total2();
    function total2(){
      var prototal = inside * pricecont; 
      document.getElementById("checkprice").innerHTML= "$" + prototal+".00";
    }
    if (inside == 0) {
      checkout.style.visibility = "hidden";
      insidethecart.style.display = "none";
      p02.style.display = "inline-block";
      btnl.style.display="none";      
    }
    else if (inside >= 1 ) {
      p02.style.display = "none";
      insidethecart.style.display = "flex";
      btnl.style.display="flex"; 
     
    }
}
let delete1 = document.querySelector("#delete");
delete1.addEventListener("click", prr)
function prr(params) { 
  checkout.style.visibility = "hidden"
  insidethecart.style.display = "none";
      btnl.style.display="none"; 
      p02.style.display = "block";
}


///////////////////////////D O N E //////////////////////
