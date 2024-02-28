

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
    root.innerHTML += `<div style="display:flex; justify-content:center; align-items:center" >
    ${homePageCards.map(homecard =>
       ` <div class="card col-3" >
            <div class="card-body" style="width: 250px; height: 200;">
              <p class="card-text">${homecard.number}</p>
              <p class="card-text">${homecard.text}</p>
            </div>
          </div>`).join('')}
          </div>`;
}

export default renderHomePageCards ;

/*
<div id="root" class="container">
        <div class=row justify-content-around">
            <div class="col-md-4">
                <div class="card">
                    <div class="card-body">
                        <p class="card-text">${homecard.number}</p>
                        <p class="card-text">${homecard.text}</p>
                    </div>
                </div>
            </div>
     
        <div class="col-md-4">
            <div class="card">
                <div class="card-body">
                    <p class="card-text">${homecard.number}</p>
                    <p class="card-text">${homecard.text}</p>
                </div>
            </div>
        </div>
   
    <div class="col-md-4">
        <div class="card">
            <div class="card-body">
                <p class="card-text">${homecard.number}</p>
                <p class="card-text">${homecard.text}</p>
            </div>
        </div>
    </div>
    </div>
    </div>
*/