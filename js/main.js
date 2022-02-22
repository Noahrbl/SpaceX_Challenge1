//----- SETUP -----//
const data = {
    labels: [
        '50 min geleden',
        '40 min geleden',
        '30 min geleden',
        '20 min geleden',
        '10 min geleden',
        'now'
    ],
    datasets: [{
        label: 'Afstand van aarde (km × 10²)',
        data: [0, 0, 22, 95, 165, 197, 250],
        fill: false,
        borderColor: '#ffffff',
        backgroundColor: "#6697b8",
        tension: 0.1
    }]
};

const data2 = {
    labels: [
        'Groente',
        'Fruit',
        'Brood',
        'Vlees'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [124, 157, 403, 296],
        backgroundColor: [
            '#005288',
            '#3375a0',
            '#6697b8',
            '#80a9c4'
        ],
        hoverOffset: 4
    }]
};

const data3 = {
    labels: [
        'Hamsters',
        'Katten',
        'Honden'
    ],
    datasets: [{
        label: 'My First Dataset',
        data: [59, 12, 24],
        backgroundColor: [
            '#005288',
            '#3375a0',
            '#6697b8'
        ],
        hoverOffset: 4
    }]
};

//----- CONFIG -----//
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
// render linechart distance earth
const distanceEarth = new Chart(
    document.getElementById('distanceEarth'),
    config1
);

// render piechart food
const food = new Chart(
    document.getElementById('food'),
    config2
);

// render piechart animals
const animals = new Chart(
    document.getElementById('animals'),
    config3
);