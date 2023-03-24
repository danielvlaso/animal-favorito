document.addEventListener('DOMContentLoaded', () => {
  //opciones carta
  const cardArray = [
    {
      name: 'arriba',
      img: 'images/img-juego/arriba.png'
    },
    {
      name: 'atacando',
      img: 'images/img-juego/atacando.png'
    },
    {
      name: 'caminando',
      img: 'images/img-juego/caminando.png'
    },
    {
      name: 'gordo',
      img: 'images/img-juego/gordo.png'
    },
    {
      name: 'sentado',
      img: 'images/img-juego/sentado.png'
    },
    {
      name: 'sorprendido',
      img: 'images/img-juego/sorprendido.png'
    },
    {
      name: 'arriba',
      img: 'images/img-juego/arriba.png'
    },
    {
      name: 'atacando',
      img: 'images/img-juego/atacando.png'
    },
    {
      name: 'caminando',
      img: 'images/img-juego/caminando.png'
    },
    {
      name: 'gordo',
      img: 'images/img-juego/gordo.png'
    },
    {
      name: 'sentado',
      img: 'images/img-juego/sentado.png'
    },
    {
      name: 'sorprendido',
      img: 'images/img-juego/sorprendido.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid-juego-panda')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //setea la carta inicial
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/img-juego/hoja.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //chequea las cartas
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/img-juego/hoja.png')
      cards[optionTwoId].setAttribute('src', 'images/img-juego/hoja.png')
      alert('Has echo click en la misma imagen!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('Has acertado')
      cards[optionOneId].setAttribute('src', 'images/img-juego/transparente.png')
      cards[optionTwoId].setAttribute('src', 'images/img-juego/transparente.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/img-juego/hoja.png')
      cards[optionTwoId].setAttribute('src', 'images/img-juego/hoja.png')
      alert('Has fallado, vuelve a intentar')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = ' !Felicitaciones! !has encontrado todos los pares!'
    }
  }

  //voltea la carta
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})
