document.getElementById('facebook-download-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const url = document.getElementById('facebook-video-url').value;
    const response = await fetch(`https://api.maher-zubair.tech/download/fb?url=${url}`);
    const data = await response.json();
    displayFacebookResult(data);
});

function displayFacebookResult(data) {
    const resultDiv = document.getElementById('facebook-result');
    const thumbnail = document.getElementById('facebook-thumbnail');
    const description = document.getElementById('facebook-description');
    const download = document.getElementById('facebook-download');

    thumbnail.src = data.result.thumb;
    description.textContent = data.result.desc;
    download.href = data.result.video_hd;

    resultDiv.style.display = 'block';
}
