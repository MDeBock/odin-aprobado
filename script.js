//menu hamburguesa

document.addEventListener('DOMContentLoaded', function() {
    const menuGrua = document.getElementById('menu-grua');
    const gruaImg = menuGrua.querySelector('img');
    const gruaCheckbox = menuGrua.querySelector('.grua');

    gruaImg.addEventListener('click', function() {
        gruaImg.classList.add('shake');
        setTimeout(() => {
            gruaImg.classList.remove('shake');
        }, 300);
    });
});
