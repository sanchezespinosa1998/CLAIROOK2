// JavaScript principal de Clairo
// Funcionalidades comunes y utilidades

// Función para el menú móvil y efectos de navegación
document.addEventListener('DOMContentLoaded', function () {
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Parallax para hero (si existe)
  const parallaxBg = document.getElementById('parallax-bg');
  if (parallaxBg) {
    window.addEventListener('scroll', function () {
      const scrollPosition = window.scrollY;
      parallaxBg.style.transform = `translateY(${scrollPosition * 0.4}px)`;
    });
  }

  // Cambio de color del nav según si está sobre el hero en el index
  const siteHeader = document.querySelector('.site-header');
  const heroContainer = document.querySelector('.hero-container');

  if (siteHeader && heroContainer) {
    const updateNavBackground = () => {
      const headerHeight = siteHeader.offsetHeight || 0;
      const heroRect = heroContainer.getBoundingClientRect();

      // Mientras la parte inferior del hero esté por debajo de la altura del header,
      // consideramos que el nav está "dentro" del hero
      if (heroRect.bottom > headerHeight) {
        siteHeader.classList.add('nav-on-hero');
      } else {
        siteHeader.classList.remove('nav-on-hero');
      }
    };

    updateNavBackground();
    window.addEventListener('scroll', updateNavBackground);
    window.addEventListener('resize', updateNavBackground);
  }
});

// Utilidad para acordeón FAQ
function initFAQ() {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(question => {
    question.addEventListener('click', function () {
      const faqItem = this.closest('.faq-item');
      const answer = this.nextElementSibling;
      const isActive = answer.classList.contains('active');

      // Cerrar todas las respuestas y remover clase active de items
      document.querySelectorAll('.faq-answer').forEach(ans => {
        ans.classList.remove('active');
      });
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
      });

      // Abrir la respuesta clicada si estaba cerrada
      if (!isActive) {
        answer.classList.add('active');
        if (faqItem) {
          faqItem.classList.add('active');
        }
      }
    });
  });
}

// Inicializar FAQ cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initFAQ);

