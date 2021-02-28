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

const $badge = document.querySelector('header .badges')

console.log($badge)

window.addEventListener(
  'scroll',
  _.throttle(() => {
    if (window.scrollY > 500) {
      // gsap.to(요소, 지속시간, 옵션)
      gsap.to($badge, 0.5, {
        opacity: 0,
        display: 'none',
      })
    } else {
      gsap.to($badge, 0.5, {
        opacity: 1,
        display: 'block',
      })
    }
  }, 300)
)
