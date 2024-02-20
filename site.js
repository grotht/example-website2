
const products = [{
        "title": "Nike",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
        "color": "#deaf01"
    }, {
        "title": "Independent",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "https://images.pexels.com/photos/5657417/pexels-photo-5657417.jpeg",
        "color": "#554a33"
    }, {
        "title": "Michael Kors",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg",
        "color": "#01322f"
    }, {
        "title": "Champion",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "https://images.pexels.com/photos/1928078/pexels-photo-1928078.jpeg",
        "color": "#333232"
    }, {
        "title": "Adidas",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "https://images.pexels.com/photos/1102874/pexels-photo-1102874.jpeg",
        "color": "#941631"
    },
    {
        "title": "Under Armour",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "https://images.pexels.com/photos/10082285/pexels-photo-10082285.jpeg",
        "color": "#82646b"
    },
    {
        "title": "Reebok",
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        "image": "https://images.pexels.com/photos/18328061/pexels-photo-18328061.jpeg",
        "color": "#4e5152"
    },

]

// create additional card in html
const container = document.querySelector('#container')
const previousButton = document.querySelector('button.previous')
const nextButton = document.querySelector('button.next')

container.removeChild(nextButton.parentNode)

const newCard = document.createElement('div')
newCard.id = "card-4"
newCard.classList.add('card')
container.append(newCard)

const infoDiv = document.createElement('div')
newCard.append(infoDiv)

const header = document.createElement('h1')
infoDiv.append(header)

const paragraph = document.createElement('p')
infoDiv.append(paragraph)

container.append(nextButton.parentNode)

/*
//console.log( { cardInfo4 })

function bla(text) {
    console.log(text)
    return 5
}

console.log(bla("hi"))
*/

/*
function createCard(card, cardInfo) {
    card.style.backgroundImage = `url(${cardInfo.image})`
    card.style.color = cardInfo.color

    const h1 = card.querySelector('h1')
    h1.textContent = cardInfo.title

    const p = card.querySelector('p')
    p.textContent = cardInfo.text
}
*/

/*
function createCard(card, { image, title, text, color} ) {

    card.style.backgroundImage = `url(${image})`
    card.style.color = color

    const h1 = card.querySelector('h1')
    h1.textContent = title

    const p = card.querySelector('p')
    p.textContent = text
}
*/

const displayProduct = (card, { image, title, text, color}) => {

    card.style.backgroundImage = `url(${image}?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)`
    card.style.color = color

    const h1 = card.querySelector('h1')
    h1.textContent = title

    const p = card.querySelector('p')
    p.textContent = text
}

/*
const cards = document.querySelectorAll('.card')
for (let i = 0; i < cards.length; i++) {
createCard(cards[0], cardInfo1)
createCard(cards[1], cardInfo2)
createCard(cards[2], cardInfo3)
}
*/

const cards = document.querySelectorAll('.card')

let offset = 0
 
const updateCards = shift => {
    offset += shift || 0
    cards.forEach((card, index) => {
        const productIndex = (index + offset) % products.length
        displayProduct(card, products[productIndex])
    })
}

updateCards(0)

previousButton.addEventListener('click', () => updateCards(-1))
nextButton.addEventListener('click', () => updateCards(1))

//for (let i = 0; i < cards.length; i++) {
//    createCard(cards[i], products[i])
//}

/*

const greetings = (name) => `Hello ${name}!`

//console.log(greetings("Ryan"))

const names = [ "sade", "ryan", "marek", "ashton", "aidan" ]
const names2 = [ "tevin", ...names.slice(1, 4) ]
//console.log(names2)

const uppercase = text => `${text.at(0).toUpperCase()}${text.slice(1).toLowerCase()}`

names2.forEach(name => console.log(uppercase(name)))

const input = "Valentines Day"

if ([ 'Christmas', 'Halloween', 'St. Patricks Day', 'Valentines Day' ].includes(input)) {
    console.log("FOUND")
}

*/


/*
console.log(names[names.length - 1])

const [ , leastFav, fav2 ] = names
console.log({leastFav, fav2})

const sentence = 'This is a bunch of words.'
//const words = sentence.split(' ')
const [ first ] = sentence.split(' ')

//const first = words[0]

//console.log(words)

console.log({first})

const printNames = (name1, name2) => {
    console.log(name1)
    console.log(name2)
}

printNames(...names)
*/