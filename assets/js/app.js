// GALLERY
const gallery = document.getElementById('gallery');
const popup = document.getElementById('popup');
const selectedImage = document.getElementById('selectedImage');
const imageIndexes = [1,2,3,4,5,6,7,8];
const selectedIndexe = null;

imageIndexes.forEach((i)=>{
    const image = document.createElement('img');
    image.src = `assets/img/PROJ2/PROJ1-${i}.jpg`; //Affichage en miniature.
    image.alt = `Image of the project number ${i}`;
    image.classList.add('galleryImg');


    image.addEventListener('click', () => {
        //popup stuff
        popup.style.transform = `translateY(3.5%)`;
        selectedImage.src = `assets/img/PROJ2/PROJ1-${i}.jpg`; //Affichage en grand écran.
        selectedImage.alt = `Image of the project number ${i}`;

    });

    gallery.appendChild(image);
});

popup.addEventListener('click', () =>{  //On-click glisser l'image sur l'écran.
    popup.style.transform = `translateY(-100%)`;
    popup.src = '';
    popup.alt = '';

});