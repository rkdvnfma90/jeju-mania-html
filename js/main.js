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

/* 그외 갈만한 곳 토글 */
const $place = document.querySelector('.place')
const $placeToggleBtn = document.querySelector('.toggle-place')
let isHidePlace = false

$placeToggleBtn.addEventListener('click', () => {
  isHidePlace = !isHidePlace
  if (isHidePlace) {
    $place.classList.add('hide')
  } else {
    $place.classList.remove('hide')
  }
})

/* floating 요소 애니메이션 */
const random = (min, max) => {
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

const floatingObject = (selector, delay, size) => {
  //gsap.to(selector, 지속시간, 옵션)
  gsap.to(selector, random(1, 3), {
    y: size, // y축
    repeat: -1, // -1 무한
    yoyo: true, // 한번 재생된 애니메이션을 역재생
    ease: Back.easeInOut,
    delay: random(0, 3),
  })
}

floatingObject('.floating1', 1, 15)
floatingObject('.floating2', 0.5, 15)
floatingObject('.floating3', 1.5, 25)

/* scroll magic */

const $spies = document.querySelectorAll('section.scroll-spy')

$spies.forEach(function (elem) {
  new ScrollMagic.Scene({
    triggerElement: elem, // 보임 여부를 감시할 요소 지정
    triggerHook: 0.8, // 뷰포트 맨 아래가 1임
  })
    .setClassToggle(elem, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller())
})
