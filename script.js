const url = `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=15`

async function consumoApi() {
    try {

        let solicitud = await fetch(url);
        let data = await solicitud.json();
        console.log(data)
        let card = document.querySelector('[data-ul]')

        data.forEach(item => {
            let contenido = `
            <li class="card">
                <img class="card__image" src="${item.url}" alt="imagen">
                <h3 class="card__title">${item.title}</h3>
            </li>`
            card.innerHTML += contenido
        });


    } catch (error) {
        console.log(error)
    }
}

consumoApi()


// function consumoApi() {
//     fetch(url)
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//         card = document.querySelector('[data-ul]')

//         data.forEach(item => {
//             let contenido = ` <li class="card">
//             <img class="card__image" src="${item.url}" alt="imagen">
//             <h3 class="card__title">${item.title}</h3>
//         </li>`
//         card.innerHTML += contenido
//         });

//     })
//     .catch(err => console.log(err))
// }

// consumoApi()