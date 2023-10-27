const generateBtn = document.querySelector('#generateBtn')
const gridContainer = document.querySelector('#gridContainer')

generateBtn.addEventListener('click', () => {
    const img = document.createElement('img');
    img.src = 'https://picsum.photos/500?random=' + Math.random()*1000+1;

    gridContainer.appendChild(img);
})