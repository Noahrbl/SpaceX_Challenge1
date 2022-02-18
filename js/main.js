// setup
const data = {
    labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
    }]
};

const data2 = {
    labels: [
        'Red',
        'Blue',
        'Yellow'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
};

const data3 = {
    labels: [
        'Red',
        'Blue',
        'Yellow'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
    }]
};

//----- CONFIG -----//
// config 
const config1 = {
    type: 'line',
    data: data,
    options: {}
};

const config2 = {
    type: 'pie',
    data: data2,
};

const config3 = {
    type: 'pie',
    data: data3,
};

//----- RENDER -----//
// render linechart
const distanceEarth = new Chart(
    document.getElementById('distanceEarth'),
    config1
);

// render piechart
const food = new Chart(
    document.getElementById('food'),
    config2
);

// render piechart
const animals = new Chart(
    document.getElementById('animals'),
    config3
);