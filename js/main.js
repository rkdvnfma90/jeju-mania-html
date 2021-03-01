/* 검색 영역 */
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

/* 페이지 스크롤 제어 영역 */
const $badge = document.querySelector('header .badges')
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

/* 요소를 순서대로 나타나도록 */
const $fadeElements = document.querySelectorAll('.visual .fade-in')

$fadeElements.forEach((elem, index) => {
  gsap.to(elem, 1, {
    delay: (index + 1) * 0.5,
    opacity: 1,
  })
})

/* 슬라이드 영역 */
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical',
  autoplay: true,
  loop: true,
})

new Swiper('.place .swiper-container', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이의 여백
  centeredSlides: true, // 첫번째 슬라이드가 가운데 오도록
  loop: true,
  // autoplay: {
  //   delay: 4000,
  // },
  pagination: {
    el: '.place .swiper-pagination', // 페이지 번호 요소
    clickable: true, // 페이지 번호 요소 클릭가능 여부
  },
  navigation: {
    prevEl: '.place .swiper-prev',
    nextEl: '.place .swiper-next',
  },
})
