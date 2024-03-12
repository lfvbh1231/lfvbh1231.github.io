document.querySelectorAll('.ctg .box .box-1 .content img').forEach(img => { 
    img.onclick = () => { 
        document.querySelector('.ctg .midle').style.display = 'block'; 
        document.querySelector('.pop-up img').src = img.getAttribute('src'); 
    } 
});

document.querySelector('.pop-up span').onclick = () => {
    document.querySelector('.ctg .midle').style.display = 'none';
}