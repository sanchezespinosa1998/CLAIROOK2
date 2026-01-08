// JavaScript para renderizar workshops dinámicamente

// Función para renderizar el listado de workshops
function renderWorkshopsList() {
  const container = document.getElementById('workshops-list');
  if (!container || typeof workshopsData === 'undefined') return;

  container.innerHTML = '';

  workshopsData.forEach(workshop => {
    const card = document.createElement('div');
    card.className = 'card-workshop bg-white rounded-lg p-6 mb-6';

    card.innerHTML = `
      <div class="mb-4">
        <h3 class="text-2xl font-semibold text-stone-950 mb-2">${workshop.titulo}</h3>
        <p class="text-stone-600 mb-4">${workshop.subtitulo}</p>
      </div>
      
      <div class="flex flex-wrap gap-4 mb-4 text-sm text-stone-500">
        <span class="flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          ${workshop.duracion}
        </span>
        <span class="flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
          ${workshop.formato}
        </span>
        <span class="flex items-center gap-2">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
          </svg>
          ${workshop.nivel_recomendado}
        </span>
      </div>
      
      <a href="workshops.html" class="btn-primary inline-block text-center w-full md:w-auto">
        Ver detalles del workshop
      </a>
    `;

    container.appendChild(card);
  });
}

// Función para renderizar un workshop individual
function renderWorkshopIndividual() {
  // Obtener el slug de la URL
  const urlParams = new URLSearchParams(window.location.search);
  const slug = urlParams.get('slug');

  if (!slug || typeof workshopsData === 'undefined') {
    document.body.innerHTML = '<div class="container-max p-12"><h1>Workshop no encontrado</h1><a href="workshops.html">Volver al listado</a></div>';
    return;
  }

  const workshop = workshopsData.find(w => w.slug === slug);

  if (!workshop) {
    document.body.innerHTML = '<div class="container-max p-12"><h1>Workshop no encontrado</h1><a href="workshops.html">Volver al listado</a></div>';
    return;
  }

  // Renderizar hero
  const hero = document.getElementById('workshop-hero');
  if (hero) {
    hero.innerHTML = `
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-stone-950 mb-4">${workshop.titulo}</h1>
      <p class="text-xl text-stone-600 mb-6">${workshop.subtitulo}</p>
      
      <div class="flex flex-wrap gap-4 mb-6 text-sm text-stone-500">
        <span>📅 ${workshop.duracion}</span>
        <span>💻 ${workshop.formato}</span>
        <span>🎯 ${workshop.nivel_recomendado}</span>
      </div>
      
      <a href="${workshop.cta_principal_url}" class="btn-primary inline-block">
        ${workshop.cta_principal_label}
      </a>
    `;
  }

  // Renderizar beneficios
  const beneficiosSection = document.getElementById('workshop-beneficios');
  if (beneficiosSection && workshop.beneficios) {
    beneficiosSection.innerHTML = `
      <h2 class="text-3xl font-semibold mb-6">Qué vas a conseguir</h2>
      <ul class="space-y-3">
        ${workshop.beneficios.map(beneficio => `
          <li class="flex items-start gap-3">
            <svg class="w-6 h-6 text-[#132D46] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
            <span class="text-lg">${beneficio}</span>
          </li>
        `).join('')}
      </ul>
    `;
  }

  // Renderizar módulos
  const modulosSection = document.getElementById('workshop-modulos');
  if (modulosSection && workshop.modulos) {
    modulosSection.innerHTML = `
      <h2 class="text-3xl font-semibold mb-6">Contenido del workshop</h2>
      <div class="space-y-6">
        ${workshop.modulos.map((modulo, index) => `
          <div class="border-l-4 border-[#132D46] pl-6">
            <h3 class="text-xl font-semibold mb-2">
              Módulo ${index + 1}: ${modulo.nombre}
            </h3>
            <p class="text-stone-600">${modulo.descripcion}</p>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Renderizar metodología
  const metodologiaSection = document.getElementById('workshop-metodologia');
  if (metodologiaSection) {
    metodologiaSection.innerHTML = `
      <h2 class="text-3xl font-semibold mb-4">Metodología aplicada</h2>
      <p class="text-lg text-stone-600 leading-relaxed">${workshop.metodologia}</p>
    `;
  }

  // Renderizar para quién / para quién no
  const perfilSection = document.getElementById('workshop-perfil');
  if (perfilSection) {
    perfilSection.innerHTML = `
      <div class="grid md:grid-cols-2 gap-8">
        <div>
          <h3 class="text-2xl font-semibold mb-4 text-green-600">Para quién es</h3>
          <ul class="space-y-2">
            ${workshop.para_quien.map(item => `
              <li class="flex items-start gap-2">
                <span class="text-green-500 mt-1">✓</span>
                <span>${item}</span>
              </li>
            `).join('')}
          </ul>
        </div>
        <div>
          <h3 class="text-2xl font-semibold mb-4 text-red-600">Para quién no es</h3>
          <ul class="space-y-2">
            ${workshop.para_quien_no.map(item => `
              <li class="flex items-start gap-2">
                <span class="text-red-500 mt-1">✗</span>
                <span>${item}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    `;
  }

  // Renderizar logística
  const logisticaSection = document.getElementById('workshop-logistica');
  if (logisticaSection && workshop.logistica) {
    logisticaSection.innerHTML = `
      <h2 class="text-3xl font-semibold mb-6">Formato y logística</h2>
      <div class="grid md:grid-cols-2 gap-6">
        <div>
          <h4 class="font-semibold mb-2">Duración</h4>
          <p class="text-stone-600">${workshop.logistica.duracion}</p>
        </div>
        <div>
          <h4 class="font-semibold mb-2">Formato</h4>
          <p class="text-stone-600">${workshop.logistica.formato}</p>
        </div>
        <div>
          <h4 class="font-semibold mb-2">Participantes</h4>
          <p class="text-stone-600">${workshop.logistica.participantes}</p>
        </div>
        <div>
          <h4 class="font-semibold mb-2">Requisitos</h4>
          <p class="text-stone-600">${workshop.logistica.requisitos}</p>
        </div>
      </div>
    `;
  }

  // Renderizar FAQ
  const faqSection = document.getElementById('workshop-faq');
  if (faqSection && workshop.faq) {
    faqSection.innerHTML = `
      <h2 class="text-3xl font-semibold mb-6">Preguntas frecuentes</h2>
      <div class="space-y-4">
        ${workshop.faq.map(item => `
          <div class="faq-item">
            <div class="faq-question">
              <span class="font-semibold">${item.pregunta}</span>
              <svg class="w-5 h-5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <div class="faq-answer">
              <p class="text-stone-600">${item.respuesta}</p>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    // Reinicializar FAQ después de renderizar
    setTimeout(() => {
      if (typeof initFAQ === 'function') {
        initFAQ();
      }
    }, 100);
  }
}

// Carrusel de reviews
function initReviewsCarousel() {
  const container = document.getElementById('reviews-container');
  const dotsContainer = document.getElementById('reviews-dots');
  
  if (!container) return;

  const slides = container.querySelectorAll('.review-slide');
  const totalSlides = slides.length;
  let currentSlide = 0;

  // Crear dots de navegación
  if (dotsContainer && totalSlides > 1) {
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', `Ir a review ${i + 1}`);
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    }
  }

  function goToSlide(index) {
    currentSlide = index;
    container.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Actualizar dots activos
    if (dotsContainer) {
      const dots = dotsContainer.querySelectorAll('.carousel-dot');
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
      });
    }
  }

  // Auto-play cada 5 segundos
  if (totalSlides > 1) {
    setInterval(() => {
      currentSlide = (currentSlide + 1) % totalSlides;
      goToSlide(currentSlide);
    }, 5000);
  }
}

// Ejecutar según la página
document.addEventListener('DOMContentLoaded', function () {
  // Cargar datos de workshops
  if (document.getElementById('workshops-list')) {
    renderWorkshopsList();
  }

  if (document.getElementById('workshop-hero')) {
    renderWorkshopIndividual();
  }

  // Inicializar carrusel de reviews
  initReviewsCarousel();
});

