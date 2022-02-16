fetch('https://jsonplaceholder.typicode.com/photos')
.then(res => res.json())
.then( data => showAlbum(data))

const showAlbum = (photoAlbum) => {
    const album = document.getElementById('album');

    photoAlbum.map(item =>{

        const photoName = document.createElement('h2');
        album.appendChild(photoName);
        photoName.innerText = item.title;
        const image = document.createElement('img');
        
        // image.setAttribute('src', item.url)
        image.src = item.url;

        album.appendChild(image)
    })
}