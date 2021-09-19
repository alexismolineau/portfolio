const cards = document.querySelectorAll('.card');


const addClass = (element, eventType, img) => {
    element.addEventListener(eventType, () => {
        if(!img.classList.contains('hover')){
            img.classList.add('hover');
        }
    });
}

const removeClass = (element, eventType, img) => {
    element.addEventListener(eventType, () => {
        if(img.classList.contains('hover')){
            img.classList.remove('hover');
        }
    });
}

if(cards){
    cards.forEach(
        card => {

            const img = card.querySelector('img');
            const button = card.querySelector('.button');
            addClass(button, 'mouseenter', card);
            removeClass(button, 'mouseleave', card);
            addClass(button, 'mouseenter', img);
            removeClass(button, 'mouseleave', img);
        }
    )
}

