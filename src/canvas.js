import { state } from './state.js';

const canvas = document.getElementById('posterCanvas');
const ctx = canvas.getContext('2d');

export function generatePoster() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = '#000';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  if (state.image) {
    const img = new Image();
    img.onload = () => draw(img);
    img.src = URL.createObjectURL(state.image);
  } else {
    draw();
  }
}

function draw(img) {
  if (img) ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  ctx.fillStyle = 'rgba(0,0,0,0.6)';
  ctx.fillRect(0, 900, canvas.width, 450);

  ctx.fillStyle = '#1DB954';
  ctx.font = 'bold 40px Arial';
  ctx.fillText('ALBUM', 80, 100);

  ctx.fillStyle = '#fff';
  ctx.font = 'bold 80px Arial';
  ctx.fillText(state.title, 80, 1020);

  ctx.font = '36px Arial';
  ctx.fillText(state.subtitle, 80, 1080);

  const link = document.createElement('a');
  link.href = canvas.toDataURL('image/png');
  link.download = 'love-wrapped.png';
  link.click();
}
