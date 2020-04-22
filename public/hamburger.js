window.addEventListener('load', function(){
  var hamburgerContainers = document.getElementsByClassName('hamburger_container')
  function addReverseAnimation() {
    this.classList.add('animated')
    this.removeEventListener('mouseover', addReverseAnimation);
  }
  for (var i = 0; i < hamburgerContainers.length; i++) {
    hamburgerContainers[i].addEventListener('mouseover', addReverseAnimation);
  }
})
  