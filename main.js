console.log(data)
let container = document.getElementById('container')
console.log(container)

for (let i = 0; i < data.length; i++){
    let div = document.createElement('div')
    div.className = 'carta'
    div.innerHTML += 
       `
        <div>
            <img src="${data[i].image}" />
            <h2>${data[i].name}</h2>
            <p>${data[i].description}</p>
            <p>${data[i].price}</p>
        </div>
        `
        container.appendChild(div)
}
