import './kiwi-image.scss';
import Cat from './Cat03.jpg';

function KiwiImage() {
    const img = document.createElement('img');
    img.alt = 'cat';
    img.width = 300
    img.src = Cat;
    img.classList.add('kiwi-image');
    const body = document.querySelector('body');
    body.appendChild(img);
}

export default KiwiImage;

