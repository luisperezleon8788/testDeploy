fetch('https://apisimpsons.fly.dev/api/personajes?limit=1000')
    .then(response => response.json())
    .then(data => {
        personajes = data.docs
        const body = document.querySelector('body')
        personajes.forEach(personaje => {
            const p = document.createElement('p')
            p.textContent = personaje.Nombre
            // p.classList.add('bg-dark', 'text-white')
            console.log(personaje)
            body.append(p)
        })
    })