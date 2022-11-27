// nav overlay
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}


// copy link
function copyURI(evt) {
  evt.preventDefault();
  navigator.clipboard.writeText(evt.target.getAttribute('href')).then(() => {
    /* clipboard successfully set */
  }, () => {
    /* clipboard write failed */
  });
}

// slideshow
let slideIndex = [1,1];
let slideId = ["mySlides1", "mySlides2"] // add more slides here
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}

