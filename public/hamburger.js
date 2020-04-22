window.addEventListener('load', function(){
  var hamburgerContainers = document.getElementsByClassName('hamburger_container')
  function addReverseAnimation() {
    var hamburgerBars = this.getElementsByClassName('hamburger_bar')
    for (var i = 0; i < hamburgerBars.length; i++) {
      hamburgerBars[i].classList.add('animated')
    }
    this.removeEventListener('mouseover', addReverseAnimation);
  }
  for (var i = 0; i < hamburgerContainers.length; i++) {
    hamburgerContainers[i].addEventListener('mouseover', addReverseAnimation);
  }
})
  