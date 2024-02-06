import './heading.scss';

class Heading {
    render(pageName) {
        const heading = document.createElement('h1');
        heading.innerHTML = `123 ${pageName}`;
        const body = document.querySelector('body');
        body.appendChild(heading);
   } 
}

export default Heading;