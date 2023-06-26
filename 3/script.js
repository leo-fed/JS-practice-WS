const wsUri = "wss://echo-ws-service.herokuapp.com";

const output = document.querySelector(".message-block");
const btnSend = document.querySelector('.send-btn');
const btnSendGeo = document.querySelector('.geo-btn');
const input = document.querySelector('.send-block__input');

let websocket;

websocket = new WebSocket(wsUri);
websocket.onopen = function (evt) {
    console.log("CONNECTED");
};
websocket.onmessage = function (evt) {
    createMes(evt.data);
};
websocket.onerror = function (evt) {
    console.log(ERROR);
};

function createMes(message, side="server") {
    let mes;
    if (side === 'client') {
        mes = `<div class="message-wrapper message-wrapper_sent">${message}</div>`
    } else {
        mes = `<div class="message-wrapper message-wrapper_received">${message}</div>`
    }
    output.insertAdjacentHTML('afterbegin', mes)
}

btnSend.addEventListener('click', async function () {
    let message = input.value;
    if (message) {
        createMes(message, 'client');
        input.value = "";
        websocket.send(message);
    }
});

const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    message = `<a href="https://www.openstreetmap.org/#map=19/${latitude}/${longitude}" target="_blank">Моя геолокация</a>`;
    createMes(message, 'client');
}

btnSendGeo.addEventListener('click', async function () {
    if (!navigator.geolocation) {
        createMes('Geolocation не поддерживается вашим браузером', 'client');
    } else {
        navigator.geolocation.getCurrentPosition(success);
    }
});


