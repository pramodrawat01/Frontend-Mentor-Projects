
const sharebtn = document.querySelector('#share-card')

const sharescr = document.querySelector('.share-screen')

const closescr = document.querySelector('.close-screen')
const profileUrl = encodeURIComponent(document.getElementById('profile-link').textContent);

const whatsapp = document.querySelector('.whatsapp')
sharebtn.addEventListener('click', ()=>{
    sharescr.classList.add('index')
})

closescr.addEventListener('click', ()=>{
    sharescr.classList.remove('index')
})

whatsapp.href = `https://api.whatsapp.com/send?text=Check out my social profile card: ${profileUrl}`;

console.log(document.getElementById('profile-link'));

whatsapp.addEventListener('click',()=>{
    console.log("whatsapp btn clicked")
})