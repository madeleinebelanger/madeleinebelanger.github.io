document.querySelector('button').addEventListener('click', pullTarotCard)

function pullTarotCard () { 

let emptyArr=[]
for(let i=0; i<=21; i++){emptyArr.push(i)}
let tarotCardNum=emptyArr[Math.floor(Math.random()*emptyArr.length)].toString()

if(tarotCardNum.toString().length < 2)
   {tarotCardNum= "0" + tarotCardNum}

fetch (`https://rws-cards-api.herokuapp.com/api/v1/cards/ar${tarotCardNum}`) 
    .then (res=> res.json())
    .then(data => {
        console.log (data)
        document.querySelector('h2').innerText=data.card.name
        document.querySelector('h3').innerText=data.card.meaning_up
        document.querySelector('img').src= `/Users/b/Desktop/Homework/class26-materials/objects-dog-photos/Tarot Illustration _ for pins.  copy/${tarotCardNum}.png`


    })
    .catch (err=> {
    console.log ( `error ${err}`)
    });

}



