const menu = document.querySelector('.vertical-menu');
const toggleButton = document.querySelector('.menu-toggle');

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('collapsed'); // Ajoute ou supprime la classe "collapsed"
});
