
let english = document.querySelectorAll("#btnstick, #home, #about, #poty, #resu, #contac")
let span = document.querySelectorAll("#btnstick2, #home2, #about2, #poty2, #resu2, #contac2")

function spanish() {
  for (i = 0 ; i < english.length; i ++) {
  english[i].style.display = " none ";
  }
  for (j = 0 ; j < span.length; j ++) {
    span[j].style.display = "block";
    }
}


function american() {
  for (i = 0 ; i < english.length; i ++) {
  english[i].style.display = " block ";
  }
  for (j = 0 ; j < span.length; j ++) {
    span[j].style.display = "none";
    }
}



setTimeout(function(){
    document.getElementById('imp').style.display = "block";
   }, 2000); /* asi hago aparecer un div despues de 2 seconds*/

setTimeout(function(){
    document.getElementById('kep').style.display = "block";
   }, 4000);

 setTimeout(function(){
    document.getElementById('ach').style.display = "block";
   }, 6000);

   

setTimeout(function(){
  document.getElementById('imp2').style.display = "block";
 }, 2000); /* asi hago aparecer un div despues de 2 seconds*/

setTimeout(function(){
  document.getElementById('kep2').style.display = "block";
 }, 4000);

setTimeout(function(){
  document.getElementById('ach2').style.display = "block";
 }, 6000);


   function siteOne() {
    location.href = "https://space-tourism-multipage.vercel.app/";
  }
   
  function siteTwo() {
    location.href = "https://jcbotero.github.io/Tip-Calculator/";
  }
   
  
  function siteThree() {
    location.href = "https://jcbotero.github.io/E-commerce-product-page/";
  }
  
  function siteFour() {
    location.href = "https://jcbotero.github.io/Chat-app-landing/";
  }


  function siteFive() {
    location.href = "https://bolsa-de-valores-col.vercel.app/";
  }

  function git() {
    location.href = "https://github.com/jcbotero";
  }

  function link() {
    location.href = "https://www.linkedin.com/in/juan-camilo-botero-gutierrez-31009559/";
  }

  function insta() {
    location.href = "https://www.instagram.com/jucaob10/";
  }