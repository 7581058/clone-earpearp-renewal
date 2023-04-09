
const searchButton = document.querySelector('.btn-search')
const searchBox = document.querySelector('.search-box')

searchButton.addEventListener('click', function () { 
  searchBox.classList.toggle('hidden')
})
