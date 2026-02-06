import { state } from '../state.js';
import { render } from '../app.js';
import { generatePoster } from '../canvas.js';

export function renderSpotifyMeta() {
  const el = document.createElement('section');
  el.className = 'w-full h-full flex items-center justify-center px-6';

  el.innerHTML = `
    <div class="max-w-md w-full space-y-4">
      <h2 class="text-2xl font-bold mb-2">Album Details</h2>

      <input placeholder="Album Title"
        class="w-full bg-neutral-800 p-3 rounded"
        id="title" />

      <input placeholder="Artist"
        class="w-full bg-neutral-800 p-3 rounded"
        id="subtitle" />

      <input type="file" accept="image/*"
        class="text-gray-400" id="image" />

      <button class="bg-spotify w-full py-3 rounded font-semibold"
        id="generate">
        Generate Album
      </button>
    </div>
  `;

  el.querySelector('#generate').onclick = () => {
    state.title = el.querySelector('#title').value || 'Our Love Story';
    state.subtitle = el.querySelector('#subtitle').value || 'You & Me';
    state.image = el.querySelector('#image').files[0];

    generatePoster();
  };

  return el;
}
