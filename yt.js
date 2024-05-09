const form = document.getElementById('youtube-download-form');
const urlInput = document.getElementById('youtube-video-url');
const modal = document.getElementById('myModal');
const modalContent = document.getElementsByClassName('modal-content')[0];
const loadingAnimation = document.getElementById('loading-animation');

form.addEventListener('submit', async function(event) {
  event.preventDefault();
  const url = urlInput.value.trim();

  if (url === '') {
    showModal();
  } else {
    const response = await fetch(`https://api.maher-zubair.tech/download/ytmp4?url=${url}`);
    const data = await response.json();
    displayYouTubeResult(data);
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

function displayYouTubeResult(data) {
  const resultDiv = document.getElementById('youtube-result');
  const thumbnail = document.getElementById('youtube-thumbnail');
  const title = document.getElementById('youtube-title');
  const description = document.getElementById('youtube-description');
  const duration = document.getElementById('youtube-duration');
  const download360 = document.getElementById('youtube-download-360');
  const download720 = document.getElementById('youtube-download-720');

  thumbnail.src = data.data.thumbnail;
  title.textContent = data.data.title;
  description.textContent = `Description: ${data.data.description}`;
  duration.textContent = `Duration: ${data.data.duration}`;
  download360.href = data.data.vid_360p;
  download720.href = data.data.vid_720p;
  resultDiv.style.display = 'block';
}