const $search = document.querySelector('.search')
const $searchInput = $search.querySelector('input')

// search 영역 클릭
$search.addEventListener('click', () => {
  $searchInput.focus()
})

$searchInput.addEventListener('focus', () => {
  $search.classList.add('focused')
  $searchInput.setAttribute('placeholder', '검색')
})

$searchInput.addEventListener('blur', () => {
  $search.classList.remove('focused')
  $searchInput.setAttribute('placeholder', '')
})
