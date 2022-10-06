let container = document.getElementById('container')
for(let i=0; i< data.events.length; i++){
    if(data.currentDate>data.events[i].date){
    let div = document.createElement('div')
    div.className = 'card'
    div.innerHTML += 
       `
        <div class="cards">
        <img src="${data.events[i].image}" />
            <h2>${data.events[i].name}</h2>
            <p>${data.events[i].description}</p>
            <p class="price">Price: ${data.events[i].price}</p>
            <a href="details.html"><button>More details</button></a>
        </div>
        `
        container.appendChild(div)
    }
}