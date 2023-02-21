function createGame(player1, hour, player2) {
    return `
    <li>
    <img src="./assets/icon-${player1}.svg" alt="flag ${player1}">
      <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="flag ${player2}">
    </li>
   `
}



let delay = -0.3

function createCard(data, day, games) {

    delay = delay + 0.6
    return `
    <div class="card" style="animation-delay: ${delay}s">
       <h2>${data} <span>${day}</span></h2>
         <ul>
            ${games}
          </ul>
      </div>
    `
}


document.querySelector("#cards").innerHTML =
    createCard('24/11', 'quinta', createGame("brazil", "18:00", "serbia")) +


    createCard('28/11', 'segunda', createGame("brazil", "14:00", "switzerland") +
        createGame("cameroon", "14:00", "switzerland")
    ) +

    createCard('02/12', 'sexta', createGame("serbia", "13:00", "switzerland") +
        createGame("brazil", "18:00", "cameroon"))