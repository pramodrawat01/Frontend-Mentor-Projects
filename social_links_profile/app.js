
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
    let name = document.querySelector('.name-class');
    let link = document.querySelector('.link-class');

    if(!name && !link){

        name = document.createElement("input")
        name.placeholder = "enter name here"
        name.classList.add('name-class')


        link = document.createElement("input")
        link.placeholder = "enter link of profile here"
        link.classList.add('link-class')

        const submit = document.createElement('button')
        submit.textContent = "Add new one"

        // insert element in dom
        addbtn.insertAdjacentElement("afterend", name)
        name.insertAdjacentElement("afterend", link)
        link.insertAdjacentElement('afterend', submit)
        

        // storing the input values
        const inputValues = {
            inputName : '',
            inputLink : ''
        }


        // add input vlaues to inputValues object
        function handleInputs(event){
            if (event.target === name) {
                inputValues.inputName = event.target.value;
            } else if (event.target === link) {
                inputValues.inputLink = event.target.value;
            }
        }

        // handling the input 
        [name, link].forEach( (input)=>{
            input.addEventListener('input', handleInputs)
        })

        // sumbit 
        submit.addEventListener('click', ()=>{
            if(!inputValues.inputName || !inputValues.inputLink){
                console.error("Both fields must be filled!")
                return
            }


            const anchor = document.createElement('a')
            anchor.textContent = inputValues.inputName
            anchor.href = inputValues.inputLink;
            anchor.target = "_blank"

            // append 
            document.querySelector('.insta').insertAdjacentElement('afterend', anchor)

            console.log(anchor.textContent)

            name.value = ""
            link.value = ""
            
            
            // remove inputs 
            name.remove()
            link.remove()
            submit.remove()


        }, {once: true})
    }
    else{
        alert("add this profile first then create new one")
    }
    
})

