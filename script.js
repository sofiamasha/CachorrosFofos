const dogGallery = document.querySelector('.dog-gallery');

function loadDogPhotos() {
    fetch('https://dog.ceo/api/breeds/image/random/6')
        .then(response => response.json())
        .then(data => {
            const dogImages = data.message;
            dogGallery.innerHTML = '';
            dogImages.forEach(url => {
                const imgElement = document.createElement('img');
                imgElement.src = url;
                dogGallery.appendChild(imgElement);
            });
        });
}

function loadMorePhotos() {
    loadDogPhotos();
}

document.addEventListener('DOMContentLoaded', loadDogPhotos);