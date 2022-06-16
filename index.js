const burgerBtn = document.getElementById('burger-btn');
const linksList = document.getElementById('links-list');

console.log(linksList);
console.log(burgerBtn);

burgerBtn.addEventListener('click', (e)=> {
    e.preventDefault()
   console.log(linksList.classList.value);
   if(!linksList.classList.value){
    linksList.classList.add('mobile')
   } else if (linksList.classList.contains('mobile')) {
    linksList.classList.remove('mobile')
   }
   
})