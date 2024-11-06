let currentLight = 0;
const lights = ['red', 'yellow', 'green'];

function changeLight() {
    document.getElementById('red').classList.remove('red');
    document.getElementById('yellow').classList.remove('yellow');
    document.getElementById('green').classList.remove('green');

    document.getElementById(lights[currentLight]).classList.add(lights[currentLight]);

    currentLight = (currentLight + 1) % lights.length;
}

setInterval(changeLight, 3000);