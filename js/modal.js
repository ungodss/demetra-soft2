const modalController = ({modal, btnClose, btnOpen}) => {
const buttonElems = document.querySelectorAll(btnOpen);
const modalElem = document.querySelector(modal);

modalElem.style.cssText = `
    display: flex;
    visibility: hidden;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
`;

const closeModal = event => {
    const target = event.target;

    if (target === modalElem || target.closest(btnClose)) {
        modalElem.style.opacity = 0;

        setTimeout(() => {
            modalElem.style.visibility = 'hidden';
        }, 300)
    }
}

const openModal = () => {
    modalElem.style.visibility = 'visible';
    modalElem.style.opacity = 1;
};

buttonElems.forEach(btn => {
    btn.addEventListener('click', openModal);
})

modalElem.addEventListener('click', closeModal)
}

modalController({
    modal: '.modal',
    btnOpen: '.modalBtn',
    btnClose:'.modal__close'
});