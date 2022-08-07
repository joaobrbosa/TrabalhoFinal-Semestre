var getBody = document.body;
var getNav = document.getElementById("menu");

// Get modal element
var modal = document.getElementById('simpleModal');
// Get open modal button
var modalBtn = document.getElementById('modalBtn');
// Get close button
var closeBtn = document.getElementsByClassName('closeBtn')[0];

// Get modal element
var modal2 = document.getElementById('simpleModal2');
// Get open modal button
var modalBtn2 = document.getElementById('modalBtn2');
// Get close button
var closeBtn2 = document.getElementsByClassName('closeBtn2')[0];

// Get modal element
var modal3 = document.getElementById('simpleModal3');
// Get open modal button
var modalBtn3 = document.getElementById('modalBtn3');
// Get close button
var closeBtn3 = document.getElementsByClassName('closeBtn3')[0];

// Get modal element
var modal4 = document.getElementById('simpleModal4');
// Get open modal button
var modalBtn4 = document.getElementById('modalBtn4');
// Get close button
var closeBtn4 = document.getElementsByClassName('closeBtn4')[0];

// Get modal element
var modal5 = document.getElementById('simpleModal5');
// Get open modal button
var modalBtn5 = document.getElementById('modalBtn5');
// Get close button
var closeBtn5 = document.getElementsByClassName('closeBtn5')[0];

// Get modal element
var modal6 = document.getElementById('simpleModal6');
// Get open modal button
var modalBtn6 = document.getElementById('modalBtn6');
// Get close button
var closeBtn6 = document.getElementsByClassName('closeBtn6')[0];

// Get modal element
var modal7 = document.getElementById('simpleModal7');
// Get open modal button
var modalBtn7 = document.getElementById('modalBtn7');
// Get close button
var closeBtn7 = document.getElementsByClassName('closeBtn7')[0];


// Listen for open click
modalBtn.addEventListener('click', openModal);
// Listen for close click
closeBtn.addEventListener('click', closeModal);
// Listen for outside click
window.addEventListener('click', outsideClick);


// Listen for open click
modalBtn2.addEventListener('click', openModal2);
// Listen for close click
closeBtn2.addEventListener('click', closeModal2);
// Listen for outside click
window.addEventListener('click', outsideClick2);

// Listen for open click
modalBtn3.addEventListener('click', openModal3);
// Listen for close click
closeBtn3.addEventListener('click', closeModal3);
// Listen for outside click
window.addEventListener('click', outsideClick3);

// Listen for open click
modalBtn4.addEventListener('click', openModal4);
// Listen for close click
closeBtn4.addEventListener('click', closeModal4);
// Listen for outside click
window.addEventListener('click', outsideClick4);

// Listen for open click
modalBtn5.addEventListener('click', openModal5);
// Listen for close click
closeBtn5.addEventListener('click', closeModal5);
// Listen for outside click
window.addEventListener('click', outsideClick5);

// Listen for open click
modalBtn6.addEventListener('click', openModal6);
// Listen for close click
closeBtn6.addEventListener('click', closeModal6);
// Listen for outside click
window.addEventListener('click', outsideClick6);

// Listen for open click
modalBtn7.addEventListener('click', openModal7);
// Listen for close click
closeBtn7.addEventListener('click', closeModal7);
// Listen for outside click
window.addEventListener('click', outsideClick7);


// Open modal
function openModal(){
  modal.style.display = 'block';
  getBody.style.overflow = 'hidden';
  getNav.style.position = 'static';
}

// Close modal
function closeModal(){
  modal.style.display = 'none';
  getBody.style.overflow = 'visible';
  getNav.style.position = 'sticky';
}

// Click outside and close
function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
    getBody.style.overflow = 'visible';
    getNav.style.position = 'sticky';
  }
}



// Open modal
function openModal2(){
  modal2.style.display = 'block';
  getBody.style.overflow = 'hidden';
  getNav.style.position = 'static';
}

// Close modal
function closeModal2(){
  modal2.style.display = 'none';
  getBody.style.overflow = 'visible';
  getNav.style.position = 'sticky';
}

// Click outside and close
function outsideClick2(e){
  if(e.target == modal2){
    modal2.style.display = 'none';
    getBody.style.overflow = 'visible';
    getNav.style.position = 'sticky';
  }
}

// Open modal
function openModal3(){
  modal3.style.display = 'block';
  getBody.style.overflow = 'hidden';
  getNav.style.position = 'static';
}

// Close modal
function closeModal3(){
  modal3.style.display = 'none';
  getBody.style.overflow = 'visible';
  getNav.style.position = 'sticky';
}

// Click outside and close
function outsideClick3(e){
  if(e.target == modal3){
    modal3.style.display = 'none';
    getBody.style.overflow = 'visible';
    getNav.style.position = 'sticky';
  }
}
// Open modal
function openModal4(){
  modal4.style.display = 'block';
  getBody.style.overflow = 'hidden';
  getNav.style.position = 'static';
}

// Close modal
function closeModal4(){
  modal4.style.display = 'none';
  getBody.style.overflow = 'visible';
  getNav.style.position = 'sticky';
}

// Click outside and close
function outsideClick4(e){
  if(e.target == modal4){
    modal4.style.display = 'none';
    getBody.style.overflow = 'visible';
    getNav.style.position = 'sticky';
  }
}

// Open modal
function openModal5(){
  modal5.style.display = 'block';
  getBody.style.overflow = 'hidden';
  getNav.style.position = 'static';
}

// Close modal
function closeModal5(){
  modal5.style.display = 'none';
  getBody.style.overflow = 'visible';
  getNav.style.position = 'sticky';
}

// Click outside and close
function outsideClick5(e){
  if(e.target == modal5){
    modal5.style.display = 'none';
    getBody.style.overflow = 'visible';
    getNav.style.position = 'sticky';
  }
}
// Open modal
function openModal6(){
  modal6.style.display = 'block';
  getBody.style.overflow = 'hidden';
  getNav.style.position = 'static';
}

// Close modal
function closeModal6(){
  modal6.style.display = 'none';
  getBody.style.overflow = 'visible';
  getNav.style.position = 'sticky';
}

// Click outside and close
function outsideClick6(e){
  if(e.target == modal6){
    modal6.style.display = 'none';
    getBody.style.overflow = 'visible';
    getNav.style.position = 'sticky';
  }
}
// Open modal
function openModal7(){
  modal7.style.display = 'block';
  getBody.style.overflow = 'hidden';
  getNav.style.position = 'static';
}

// Close modal
function closeModal7(){
  modal7.style.display = 'none';
  getBody.style.overflow = 'visible';
  getNav.style.position = 'sticky';
}

// Click outside and close
function outsideClick7(e){
  if(e.target == modal7){
    modal7.style.display = 'none';
    getBody.style.overflow = 'visible';
    getNav.style.position = 'sticky';
  }
}