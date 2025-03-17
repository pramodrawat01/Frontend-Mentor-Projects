
const sharebtn = document.querySelector('#share-card')

const sharescr = document.querySelector('.share-screen')

const closescr = document.querySelector('.close-screen')
//const profileUrl = encodeURIComponent(document.getElementById('profile-link').textContent);

const whatsapp = document.querySelector('.social-icons')
sharebtn.addEventListener('click', ()=>{
    sharescr.classList.add('index')
})

closescr.addEventListener('click', ()=>{
    sharescr.classList.remove('index')
})

//whatsapp.href = `https://api.whatsapp.com/send?text=Check out my social profile card: ${profileUrl}`;

console.log(document.getElementById('profile-link'));

whatsapp.addEventListener('click',()=>{
    console.log("whatsapp btn clicked")
})

const addbtn = document.querySelector('.addNew')
addbtn.addEventListener( 'click', () => {
   
    const name = document.createElement("input")
    name.placeholder = "enter name here"
    const link = document.createElement("input")
    link.placeholder = "enter link of profile here"

    const submit = document.createElement('button')

    addbtn.insertAdjacentElement("afterend", name)
    name.insertAdjacentElement("afterend", link)
    link.insertAdjacentElement('afterend', submit)
    submit.textContent = "Add new one"


    function handleInputs(event){
        console.log(event.target.placeholder + ":", event.target.value);
    }

    [name, link].forEach( (input)=>{
        input.addEventListener('input', handleInputs)
    })
   
    // name.addEventListener('input', ()=>{
        
    //     submit.addEventListener('click', ()=>{
    //         console.log(name.value)
    //     })
    // })


})


// addbtn.addEventListener( 'click', ( ) => {
//     // const btn = document.createElement('button')
//     // btn.textContent = "new btn added"
//     // document.body.appendChild(btn)
//     console.log("btn added")
// })