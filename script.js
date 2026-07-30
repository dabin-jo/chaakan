const menuToggle = document.getElementById('menu_toggle');
const navDrawer = document.getElementById('nav_drawer');
const searchToggleMobile = document.getElementById('search_toggle_mobile');
const searchModal = document.getElementById('search_modal');
const searchModalInput = document.getElementById('search_modal_input');
const accordionTriggers = document.querySelectorAll('[data-accordion-trigger]');
const situationTags = document.querySelectorAll('[data-situation]');
const situationBg = document.getElementById('situation_bg');
const situationTitle = document.getElementById('situation_panel_title');
const situationDesc = document.getElementById('situation_panel_desc');
const situationProductItems = document.querySelectorAll('#situation_products .situation_product');
const navShoes = document.getElementById('nav_shoes');
const navShoesTrigger = navShoes ? navShoes.querySelector('.nav_shoes_trigger') : null;
const situationMediaEl = document.getElementById('situation_media');
const isMobileViewport = window.matchMedia('(max-width: 767px)').matches;

const situationData = {
  wedding: {
    bg: 'assets/images/sit1.jpg',
    title: '로맨틱한 순간을 완성하는 스타일 포인트',
    desc: '설레는 순간을 위한 데일리 포멀 슈즈 라인',
    products: [
      { name: '뮤즈 메리제인 샌들힐', price: '32,900원', img: 'assets/images/sit1_1.png' },
      { name: '포에버 홀스빗 뮬 블로퍼', price: '37,900원', img: 'assets/images/sit1_2.png' },
      { name: '라끄 투웨이 스트랩 샌들', price: '27,900원', img: 'assets/images/sit1_3.png' }
    ]
  },
  interview: {
    bg: 'assets/images/sit2.jpg',
    title: '중요한 순간, 첫인상을 완성하는 한 걸음',
    desc: '자신감 있는 모습과 신뢰감을 더하는 로퍼·블로퍼 슈즈 라인',
    products: [
      { name: '브로드 클래식 페니로퍼', price: '32,900원', img: 'assets/images/sit2_1.png' },
      { name: '켈타 페니로퍼', price: '27,900원', img: 'assets/images/sit2_2.png' },
      { name: '베네치아 꼬임 로퍼힐', price: '35,900원', img: 'assets/images/sit2_3.png' }
    ]
  },
  special: {
    bg: 'assets/images/sit3.jpg',
    title: '평범한 하루보다, 특별한 하루을 위해',
    desc: '특별한 날의 분위기와 스타일을 완성해 줄 슈즈 컬렉션, 중요한 순간을 더욱 돋보이게.',
    products: [
      { name: '미란다 투웨이 스트랩 샌들', price: '29,900원', img: 'assets/images/sit3_1.png' },
      { name: '코델리아 통굽 뮬 플랫', price: '42,900원', img: 'assets/images/sit3_2.png' },
      { name: '코코멜 퀼팅 메리제인 스니커즈', price: '49,900원', img: 'assets/images/sit3_3.png' }
    ]
  }
};

function isOverlayOpen(overlay) {
  return overlay.getAttribute('aria-hidden') === 'false';
}

function openDrawer() {
  navDrawer.setAttribute('aria-hidden', 'false');
  menuToggle.setAttribute('aria-expanded', 'true');
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  navDrawer.setAttribute('aria-hidden', 'true');
  menuToggle.setAttribute('aria-expanded', 'false');
  document.body.style.overflow = '';
}

function handleMenuToggleClick() {
  if (isOverlayOpen(navDrawer)) {
    closeDrawer();
  } else {
    openDrawer();
  }
}

function openSearchModal() {
  searchModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  searchModalInput.focus();
}

function closeSearchModal() {
  searchModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  searchToggleMobile.focus();
}

function handleSearchToggleClick() {
  openSearchModal();
}

function handleAccordionTriggerClick(event) {
  const trigger = event.currentTarget;
  const panelId = trigger.getAttribute('aria-controls');
  const panel = document.getElementById(panelId);
  const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

  trigger.setAttribute('aria-expanded', String(!isExpanded));
  panel.classList.toggle('is_open', !isExpanded);
}

if (menuToggle && navDrawer) {
  menuToggle.addEventListener('click', handleMenuToggleClick);
  navDrawer.querySelectorAll('[data-drawer-close]').forEach((el) => {
    el.addEventListener('click', closeDrawer);
  });
}

if (searchToggleMobile && searchModal) {
  searchToggleMobile.addEventListener('click', handleSearchToggleClick);
  searchModal.querySelectorAll('[data-search-close]').forEach((el) => {
    el.addEventListener('click', closeSearchModal);
  });
}

accordionTriggers.forEach((trigger) => {
  trigger.addEventListener('click', handleAccordionTriggerClick);
});

function updateSituationMedia(bg) {
  if (situationMediaEl && isMobileViewport) {
    situationMediaEl.style.backgroundImage = `url(${bg})`;
  }
}

updateSituationMedia(situationData.wedding.bg);

function handleSituationTagClick(event) {
  const selectedTag = event.currentTarget;
  const situationKey = selectedTag.dataset.situation;
  const data = situationData[situationKey];

  if (!data) {
    return;
  }

  situationTags.forEach((tag) => {
    const isSelected = tag === selectedTag;
    tag.classList.toggle('is_active', isSelected);
    tag.setAttribute('aria-selected', String(isSelected));
  });

  situationBg.src = data.bg;
  updateSituationMedia(data.bg);
  situationTitle.textContent = data.title;
  situationDesc.textContent = data.desc;

  situationProductItems.forEach((item, index) => {
    const product = data.products[index];
    const img = item.querySelector('.situation_product_img');
    const name = item.querySelector('.situation_product_name');
    const price = item.querySelector('.situation_product_price');

    img.src = product.img;
    img.alt = product.name;
    name.textContent = product.name;
    price.textContent = product.price;
  });
}

situationTags.forEach((tag) => {
  tag.addEventListener('click', handleSituationTagClick);
});

function openMegaMenu() {
  navShoes.classList.add('is_open');
  navShoesTrigger.setAttribute('aria-expanded', 'true');
}

function closeMegaMenu() {
  navShoes.classList.remove('is_open');
  navShoesTrigger.setAttribute('aria-expanded', 'false');
}

if (navShoes && navShoesTrigger) {
  navShoes.addEventListener('mouseenter', openMegaMenu);
  navShoes.addEventListener('mouseleave', closeMegaMenu);
  navShoes.addEventListener('focusin', openMegaMenu);
  navShoes.addEventListener('focusout', (event) => {
    if (!navShoes.contains(event.relatedTarget)) {
      closeMegaMenu();
    }
  });
  navShoesTrigger.addEventListener('click', (event) => {
    event.preventDefault();
  });
}

let lookbookSwiper = null;
let lookbookAutoplayTimer = null;
const lookbookMobileQuery = window.matchMedia('(max-width: 767px)');
const LOOKBOOK_AUTOPLAY_DELAY = 1500;
const LOOKBOOK_AUTOPLAY_SPEED = 1500;

function startLookbookAutoplay() {
  stopLookbookAutoplay();
  lookbookAutoplayTimer = setInterval(() => {
    if (lookbookSwiper && !lookbookSwiper.animating) {
      lookbookSwiper.slideNext(LOOKBOOK_AUTOPLAY_SPEED);
    }
  }, LOOKBOOK_AUTOPLAY_DELAY);
}

function stopLookbookAutoplay() {
  if (lookbookAutoplayTimer) {
    clearInterval(lookbookAutoplayTimer);
    lookbookAutoplayTimer = null;
  }
}

function initLookbookSwiper() {
  if (lookbookSwiper || typeof Swiper === 'undefined') {
    return;
  }
  lookbookSwiper = new Swiper('.mySwiper', {
    effect: 'creative',
    watchSlidesProgress: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 14,
    speed: 750,
    loop: true,
    autoHeight: true,
    creativeEffect: {
      perspective: true,
      limitProgress: 2,
      prev: {
        translate: ['-120%', 0, 0]
      },
      next: {
        translate: ['10%', 0, -60],
        rotate: [5, 5, 3],
        scale: 0.94
      }
    }
  });

  lookbookSwiper.on('touchStart', stopLookbookAutoplay);
  lookbookSwiper.on('touchEnd', startLookbookAutoplay);
  startLookbookAutoplay();
}

function destroyLookbookSwiper() {
  if (lookbookSwiper) {
    stopLookbookAutoplay();
    lookbookSwiper.destroy(true, true);
    lookbookSwiper = null;
  }
}

function handleLookbookBreakpointChange(event) {
  if (event.matches) {
    initLookbookSwiper();
  } else {
    destroyLookbookSwiper();
  }
}

if (document.querySelector('.mySwiper')) {
  handleLookbookBreakpointChange(lookbookMobileQuery);
  lookbookMobileQuery.addEventListener('change', handleLookbookBreakpointChange);
}

window.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') {
    return;
  }
  if (navDrawer && isOverlayOpen(navDrawer)) {
    closeDrawer();
  }
  if (searchModal && isOverlayOpen(searchModal)) {
    closeSearchModal();
  }
  if (navShoes && navShoes.classList.contains('is_open')) {
    closeMegaMenu();
    navShoesTrigger.focus();
  }
});
