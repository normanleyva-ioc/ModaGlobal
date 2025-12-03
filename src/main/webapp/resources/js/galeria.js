/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

const imgElement = document.getElementById('imatge');
imgElement.addEventListener('mouseenter', ()=> {
    imgElement.style.transform = 'scale(1.1)';
});

imgElement.addEventListener('mouseleave', ()=> {
    imgElement.style.transform = 'scale(1)';
})