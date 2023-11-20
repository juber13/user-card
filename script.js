const text = document.getElementById('welcome-text');
const form  = document.getElementsByClassName('form')[0];
const data =  JSON.parse(localStorage.getItem('data')) ||[];
const card = document.getElementsByClassName('card')[0];
const cardDetails = document.getElementsByClassName('card-details')[0];
console.log(form)

let word = "welcome!!!"
let index = 0;
let newWord = "";
let id = null;

function typeWriter(){
    newWord += word.slice(index , index + 1);
    index++;
    text.textContent = newWord;
    if(index + 1 > word.length) clearInterval(id);
}


function isUserExits(){
    if(data.length > 0){
        displayUserCard(data);
        card.classList.add('show');
        document.getElementsByClassName('default')[0].classList.add('hide');
        document.getElementsByClassName('overlay')[0].classList.remove('active');
        return;
        
    } else{
        // set time for shoe typewriter text
        card.classList.remove('show')
        id = setInterval(() => {
            typeWriter();
        },100)
        
        // set time for show form field containers
        
        setTimeout(() => {
            document.getElementsByClassName('default')[0].classList.add('hide');
            document.getElementsByClassName('overlay')[0].classList.add('active');
        },2000)   


        // document.getElementsByClassName('default')[0].classList.add('show');
        
    }
}




form.addEventListener('submit' , (e) => {
    e.preventDefault();
    const name = e.target.children[0].value;
   const lastName = e.target.children[1].value;
   const country = e.target.children[2].value;
   const phoneNumber = e.target.children[3].value;
   const city = e.target.children[4].value;
   const village = e.target.children[5].value;
   const state = e.target.children[6].value;
//    if(!name || !lastName || !phoneNumber , !city , !village , !state){
//       alert("Pleaee fill all fiels");
//       return;
//    }
    localStorage.setItem('data' , JSON.stringify([{name , lastName , phoneNumber , city , village , state , country}]));
    form.reset();
    document.getElementsByClassName('overlay')[0].classList.remove('active');
    // isUserExits(); 
    displayUserCard();
})


function displayUserCard(data){
    const html =`<p><strong>Name</strong> : ${data[0].name}</p>
                <p><strong>LastName </strong> : ${data[0].lastName}</p>
                <p><strong>Country </strong> : ${data[0].country}</p>
                <p><strong>PhoneNumber </strong> : ${data[0].phoneNumber}</p>
                <p><strong>City </strong> : ${data[0].city}</p>
                <p><strong>Village </strong> : ${data[0].village}</p>
                <p><strong>State </strong> : ${data[0].state}</p>`;
                
                //   return html;   
                
      cardDetails.innerHTML = html;
      card.classList.add('show');
    }

isUserExits()
displayUserCard();