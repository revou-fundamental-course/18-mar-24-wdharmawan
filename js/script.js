// var slideIndex = 1;
// showDivs(slideIndex);

// function plusSlide(n) {
//     showDivs(slideIndex += n);
// }

// function showDivs(n) {
//     var i;
//     var slideList = document.getElementsByClassName("mySlide");
//     if (n > slideList.length) slideIndex = 1
//     else if ( n < 1) slideIndex =  slideList.length;

//     for (i = 0; i < slideList.length; i++) {
//         slideList[i].style.display ="none";
//     }

//     slideList[slideIndex-1].style.display ="block";

// }

console.log('hai');

function validateForm() {
   let name = document.forms["form_message"]["your_name"].value;
   let email = document.forms["form_message"]["your_email"].value;
   let text = document.forms["form_message"]["message"].value;

   if(name == "" || email == "" || text == "") {
    alert ("Tolong diisi dengan lengkap")
   }else {
    alert ("Terima sudah mengirimkan kami pesan")
   }
}