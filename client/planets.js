const getPlanetData = async () => {
    let response = await fetch("http://localhost:4040/planet")

    let planets = await response.json();

    return planets
}

const displayPlanets = async () => {
    const planets = await getPlanetData()
    console.log(planets)

    const container = document.getElementById('container')

    for(const planet of planets){
        let planetTitle = document.createElement('h2')
        planetTitle.textContent = `Name: ${planet.planet_name}`

        let planetPop = document.createElement('p')
        planetPop.textContent = `Colour: ${planet.planet_population}`

        let planetDesc = document.createElement('p')
        planetDesc.textContent = `Planet Id: ${planet.planet_description}`

        const planetDiv = document.createElement('div')
        planetDiv.append(planetTitle)
        planetDiv.append(planetPop)
        planetDiv.append(planetDesc)
        container.append(planetDiv)
    }
}

displayPlanets();
