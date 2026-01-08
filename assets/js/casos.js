// JavaScript para renderizar casos de éxito y testimonios

function renderCasos() {
  const container = document.getElementById('casos-list');
  if (!container || typeof casosData === 'undefined') return;

  container.innerHTML = '';

  casosData.forEach(caso => {
    const card = document.createElement('div');
    card.className = 'card-workshop bg-white rounded-lg p-8 mb-8';

    card.innerHTML = `
      <h3 class="text-2xl font-semibold text-stone-950 mb-6">${caso.titulo}</h3>
      
      <div class="space-y-6 mb-6">
        <div>
          <h4 class="font-semibold mb-2 text-stone-950">Contexto</h4>
          <p class="text-stone-600">${caso.contexto}</p>
        </div>
        
        <div>
          <h4 class="font-semibold mb-2 text-stone-950">Problema</h4>
          <p class="text-stone-600">${caso.problema}</p>
        </div>
        
        <div>
          <h4 class="font-semibold mb-2 text-stone-950">Intervención</h4>
          <p class="text-stone-600">${caso.intervencion}</p>
        </div>
        
        <div>
          <h4 class="font-semibold mb-2 text-stone-950">Resultado</h4>
          <p class="text-stone-600">${caso.resultado}</p>
        </div>
        
        <div>
          <h4 class="font-semibold mb-2 text-[#132D46]">Métricas clave</h4>
          <ul class="space-y-2">
            ${caso.metricas_clave.map(metrica => `
              <li class="flex items-start gap-2">
                <span class="text-[#132D46] mt-1">✓</span>
                <span class="text-stone-700 font-medium">${metrica}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function renderTestimonios() {
  const container = document.getElementById('testimonios-list');
  if (!container || typeof testimoniosData === 'undefined') return;

  container.innerHTML = '';

  testimoniosData.forEach(testimonio => {
    const card = document.createElement('div');
    card.className = 'bg-stone-50 rounded-lg p-6 mb-6 border-l-4 border-[#132D46]';

    card.innerHTML = `
      <p class="text-stone-700 mb-4">"${testimonio.texto}"</p>
      <div class="flex items-center gap-2">
        <div class="w-12 h-12 rounded-full bg-stone-200 flex items-center justify-center">
          <span class="text-stone-600 font-semibold">${testimonio.nombre.charAt(0)}</span>
        </div>
        <div>
          <div class="font-semibold text-stone-950">${testimonio.nombre}</div>
          <div class="text-sm text-stone-600">${testimonio.rol}, ${testimonio.empresa}</div>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  if (document.getElementById('casos-list')) {
    renderCasos();
  }

  if (document.getElementById('testimonios-list')) {
    renderTestimonios();
  }
});

