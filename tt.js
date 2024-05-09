const form = document.getElementById('tiktok-download-form');
const urlInput = document.getElementById('tiktok-video-url');
const modal = document.getElementById('myModal');
const modalContent = document.getElementsByClassName('modal-content')[0];

form.addEventListener('submit', async function(event) {
  event.preventDefault();
  const url = urlInput.value.trim();

  if (url === '') {
    showModal();
  } else {
    const response = await fetch(`https://api.maher-zubair.tech/download/tiktok2?url=${url}`);
    const data = await response.json();
    displayTikTokResult(data);
  }
});

urlInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && urlInput.value.trim() === '') {
    event.preventDefault();
    showModal();
  }
});

function showModal() {
  modal.style.display = 'block';
}

function hideModal() {
  modal.style.display = 'none';
}

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    hideModal();
  }
});

modalContent.addEventListener('click', (event) => {
  event.stopPropagation();
});

function displayTikTokResult(data) {
  const resultDiv = document.getElementById('tiktok-result');
  const thumbnail = document.getElementById('tiktok-thumbnail');
  const title = document.getElementById('tiktok-title');
  const description = document.getElementById('tiktok-description');
  const download = document.getElementById('tiktok-download');

  thumbnail.src = data.result.info_video.thumbnail;
  title.textContent = data.result.info_video.title;
  description.textContent = `Total Downloads: ${data.result.info_video.total_download}`;
  download.href = data.result.url.wm;
  resultDiv.style.display = 'block';
}