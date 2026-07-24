const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const productCards = document.querySelectorAll('.product-card');
const modal = document.querySelector('.product-modal');
const modalClose = document.querySelector('.modal-close');
const modalTitle = document.querySelector('.modal-title');
const modalDescription = document.querySelector('.modal-description');
const modalImage = document.querySelector('.modal-image img');
const sectionReveals = document.querySelectorAll('.section-reveal');
const lookbookSlider = document.querySelector('.lookbook-slider');
const prevBtn = document.querySelector('.slider-prev');
const nextBtn = document.querySelector('.slider-next');
let currentIndex = 0;

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    siteNav.classList.toggle('nav-open');
  });
}

productCards.forEach((card) => {
  card.addEventListener('click', () => {
    const title = card.dataset.title;
    const description = card.dataset.description;
    const image = card.dataset.image;

    modalTitle.textContent = title;
    modalDescription.textContent = description;
    modalImage.src = image;
    modalImage.alt = title;
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  });
});

function closeModal() {
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (event) => {
  if (event.target.classList.contains('product-modal') || event.target.classList.contains('modal-backdrop')) {
    closeModal();
  }
});

window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.getAttribute('aria-hidden') === 'false') {
    closeModal();
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

sectionReveals.forEach((section) => observer.observe(section));

function updateSlider() {
  const cardWidth = lookbookSlider.querySelector('.lookbook-card').offsetWidth;
  const gap = 18;
  const maxIndex = lookbookSlider.children.length - 4;

  if (currentIndex > maxIndex) {
    currentIndex = Math.max(maxIndex, 0);
  }

  lookbookSlider.style.transform = `translateX(-${currentIndex * (cardWidth + gap)}px)`;
}

nextBtn.addEventListener('click', () => {
  const maxIndex = lookbookSlider.children.length - 4;
  currentIndex = Math.min(currentIndex + 1, Math.max(maxIndex, 0));
  updateSlider();
});

prevBtn.addEventListener('click', () => {
  currentIndex = Math.max(currentIndex - 1, 0);
  updateSlider();
});

window.addEventListener('resize', updateSlider);
updateSlider();
