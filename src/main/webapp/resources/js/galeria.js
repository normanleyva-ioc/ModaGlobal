const imgElement = document.getElementById('imatge');
imgElement.addEventListener('mouseenter', () => {
  imgElement.style.transform = 'scale(1.1)';
});

imgElement.addEventListener('mouseleave', ()=> {
    imgElement.style.transform = 'scale(1)';
});
