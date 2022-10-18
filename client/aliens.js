const getAlienData = async () => {
    let response = await fetch("http://localhost:4040/alien")

    let aliens = await response.json();

    return aliens
}

const displayAliens = async () => {
    const aliens = await getAlienData()
    console.log(aliens)

    const container = document.getElementById('container')

    for(const alien of aliens){
        let alienTitle = document.createElement('h2')
        alienTitle.textContent = `Name: ${alien.alien_name}`

        let alienColour = document.createElement('p')
        alienColour.textContent = `Colour: ${alien.alien_colour}`

        let alienPlanetId = document.createElement('p')
        alienPlanetId.textContent = `Planet Id: ${alien.planet_id}`

        const alienDiv = document.createElement('div')
        alienDiv.append(alienTitle)
        alienDiv.append(alienColour)
        alienDiv.append(alienPlanetId)
        container.append(alienDiv)
    }
}

displayAliens()
