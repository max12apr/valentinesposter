import { render } from './app.js';
import { state } from './state.js';
import { renderSpotifyMeta } from './templates/spotify.js';
import { renderNetflixMeta } from './templates/netflix.js';

export function renderLanding() {
  const el = document.createElement('section');
  el.className = `
    w-full h-full flex flex-col items-center justify-center
    text-center px-6 transition-all duration-700 ease-smooth
  `;

  el.innerHTML = `
    <h1 class="text-4xl md:text-6xl font-bold mb-4">
      This Valentine’s,<br/>your love gets a premiere.
    </h1>

    <p class="text-gray-400 mb-8">
      A limited-edition experience by Love Wrapped™
    </p>

    <button id="startBtn"
      class="bg-netflix px-8 py-4 rounded-full font-semibold
      hover:scale-105 transition ease-smooth">
      ▶ Start the Experience
    </button>
  `;

  el.querySelector('#startBtn').onclick = () => {
    render(renderWorldPicker());
  };

  return el;
}

function renderWorldPicker() {
  const el = document.createElement('section');
  el.className = 'w-full h-full flex items-center justify-center';

  el.innerHTML = `
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
      ${worldCard('spotify', '🎧 Music World', 'Every love deserves an album')}
      ${worldCard('netflix', '🎬 Streaming World', 'Now playing: Us')}
      ${worldCard('cinema', '🎥 Cinema World', 'Made for the big screen')}
    </div>
  `;

  el.querySelectorAll('[data-world]').forEach(card => {
    card.onclick = () => {
      state.world = card.dataset.world;
      render(renderMeta());
    };
  });

  return el;
}

function worldCard(id, title, desc) {
  return `
    <div data-world="${id}"
      class="cursor-pointer bg-neutral-900 rounded-2xl p-6
      hover:scale-105 transition ease-smooth">
      <h2 class="text-xl font-semibold mb-2">${title}</h2>
      <p class="text-gray-400">${desc}</p>
    </div>
  `;
}

function renderMeta() {
  if (state.world === 'spotify') return renderSpotifyMeta();
  if (state.world === 'netflix') return renderNetflixMeta();
}
