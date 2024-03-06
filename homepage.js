

const homePageCards = [
    {
        number: 0,
        text: 'number of teachers'
    },
    {
        number: 0,
        text: 'numbers of students'
    },
    {
        number: 0,
        text: 'numbers of classes'
    },
]

const renderHomePageCards = () => {
    root.innerHTML += `<div class="row justify-content-around" >
    ${homePageCards.map(homecard =>
        ` <div class="col-md-4">
       <div class="card" >
            <div class="card-body">
              <p class="card-text">${homecard.number}</p>
              <p class="card-text">${homecard.text}</p>
            </div>
            </div>
          </div>`).join('')}
          </div>`;
}

export default renderHomePageCards;

