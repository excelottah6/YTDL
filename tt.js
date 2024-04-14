document.getElementById('tiktok-download-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const url = document.getElementById('tiktok-video-url').value;
    const response = await fetch(`https://api.maher-zubair.tech/download/tiktok2?url=${url}`);
    const data = await response.json();
    displayTikTokResult(data);
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
