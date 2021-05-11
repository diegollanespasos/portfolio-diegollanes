const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar_right-section')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})