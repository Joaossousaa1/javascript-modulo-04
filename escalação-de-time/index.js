function addPlayer() { 
    const confirmAddPlayer = confirm(`Deseja escalar o jogador?`)
    
    const inputPosition = document.getElementById('position')
    const inputName = document.getElementById('name')
    const inputNumber = document.getElementById('number')
    
    const h3 = document.createElement('h3')
    h3.id = 'teamH3'
    h3.innerText = 'Time'
    
    if (confirmAddPlayer) {
        const teamDiv = document.getElementById('team')

        const newUl = document.createElement('ul')
        newUl.id = 'teamList'

        const newLi = document.createElement('li')
        newLi.id = inputNumber.value
        newLi.innerText = `${inputPosition.value}: ${inputName.value}(${inputNumber.value})`
        newUl.appendChild(newLi)
        teamDiv.append(h3, newUl)

        inputPosition.value = ''
        inputName.value = ''
        inputNumber.value = ''
    } 
}

function removePlayer() {
    const inputValue = document.getElementById('removePlayerNumber').value

    const teamList = document.getElementById('team')
    const ul = document.getElementById('teamList')
    const items = ul.getElementsByTagName('li')

    for (let i = 0; i < items.length; i++) {
        if (items[i].textContent === inputValue) {
            ul.removeChild(items[i])
            break
        }
    }
}