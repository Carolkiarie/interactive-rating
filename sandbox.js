
const li= document.querySelectorAll('li');
const input= document.querySelector('.input');
const secondContainer= document.querySelector('section');
const rating= document.querySelector('.rating');
 const lastButton= document.querySelector('.rate');
const firstContainer= document.querySelector('form');

li.forEach((ratings)=>{
    ratings.addEventListener('click',(e)=>{
        let score= e.target.textContent;
        rating.querySelector('span').textContent = score
        
    })
})


input.addEventListener('click', (e)=>{
e.preventDefault();
firstContainer.style.display= 'none';
secondContainer.style.display= 'flex'
})

lastButton.addEventListener('click',()=>{
    firstContainer.style.display= 'block'
    secondContainer.style.display= 'none'
    
})