// JavaScript para renderizar recursos/blog dinámicamente

function renderRecursosList() {
  const container = document.getElementById('recursos-list');
  if (!container || typeof recursosData === 'undefined') return;

  container.innerHTML = '';

  recursosData.forEach(recurso => {
    const card = document.createElement('article');
    card.className = 'card-workshop bg-white rounded-lg p-6 mb-6';

    // Formatear fecha
    const fecha = new Date(recurso.fecha);
    const fechaFormateada = fecha.toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    card.innerHTML = `
      <div class="mb-3">
        <span class="inline-block px-3 py-1 bg-stone-100 text-stone-600 text-xs font-medium rounded-full mb-3">
          ${recurso.categoria}
        </span>
        <h3 class="text-2xl font-semibold text-stone-950 mb-3">
          <a href="#${recurso.slug}" class="hover:text-[#132D46] transition-colors">
            ${recurso.titulo}
          </a>
        </h3>
        <p class="text-stone-600 mb-4">${recurso.extracto}</p>
      </div>
      
      <div class="flex items-center gap-4 text-sm text-stone-500">
        <span>📅 ${fechaFormateada}</span>
        <span>⏱️ ${recurso.tiempo_lectura}</span>
      </div>
    `;

    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  if (document.getElementById('recursos-list')) {
    renderRecursosList();
  }
});

