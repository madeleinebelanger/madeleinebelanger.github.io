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
        document.querySelector('img').src=   `https://github.com/madeleinebelanger/madeleinebelanger.github.io/blob/main/Tarot%20API/Tarot%20Illustration%20_%20for%20pins.%20%20copy/${tarotCardNum}.png?raw=true`

    })
    .catch (err=> {
    console.log ( `error ${err}`)
    });

}



