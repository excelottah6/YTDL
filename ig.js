document.getElementById('instagram-download-form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const url = document.getElementById('instagram-video-url').value;
    const response = await fetch(`https://api.maher-zubair.tech/download/instagram2?url=${url}`);
    const data = await response.json();
    displayInstagramResult(data);
});

function displayInstagramResult(data) {
    const resultDiv = document.getElementById('instagram-result');
    const thumbnail = document.getElementById('instagram-thumbnail');
    const title = document.getElementById('instagram-title');
    const description = document.getElementById('instagram-description');
    const download = document.getElementById('instagram-download');

    thumbnail.src = data.result[0].thumbnail_link;
    title.textContent = "Instagram Video";
    description.textContent = `Original Image Link: ${data.result[0].download_link}`;
    download.href = data.result[0].download_link;

    resultDiv.style.display = 'block';
}
