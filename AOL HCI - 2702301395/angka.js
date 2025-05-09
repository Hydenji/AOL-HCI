document.addEventListener('DOMContentLoaded', (event) => {
    const numberElement = document.getElementById('dureng');

    numberElement.addEventListener('mouseenter', () => {
        numberElement.textContent = 'Rp. 30.000,00'; 
    });

    numberElement.addEventListener('mouseleave', () => {
        numberElement.textContent = 'Rp. 20.000,00'; 
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const numberElement = document.getElementById('kapu');

    numberElement.addEventListener('mouseenter', () => {
        numberElement.textContent = 'Rp. 10.000,00'; 
    });

    numberElement.addEventListener('mouseleave', () => {
        numberElement.textContent = 'Rp. 6.000,00'; 
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const numberElement = document.getElementById('martabat');

    numberElement.addEventListener('mouseenter', () => {
        numberElement.textContent = 'Rp. 5.000,00'; 
    });

    numberElement.addEventListener('mouseleave', () => {
        numberElement.textContent = 'Rp. 1.000,00'; 
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const numberElement = document.getElementById('padangg');

    numberElement.addEventListener('mouseenter', () => {
        numberElement.textContent = 'Rp. 24.000,00'; 
    });

    numberElement.addEventListener('mouseleave', () => {
        numberElement.textContent = 'Rp. 15.000,00'; 
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const numberElement = document.getElementById('rendong');

    numberElement.addEventListener('mouseenter', () => {
        numberElement.textContent = 'Rp. 20.000,00'; 
    });

    numberElement.addEventListener('mouseleave', () => {
        numberElement.textContent = 'Rp. 15.000,00'; 
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const numberElement = document.getElementById('gulung');

    numberElement.addEventListener('mouseenter', () => {
        numberElement.textContent = 'Rp. 5.000,00'; 
    });

    numberElement.addEventListener('mouseleave', () => {
        numberElement.textContent = 'Rp. 1.000,00'; 
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const numberElement = document.getElementById('campur');

    numberElement.addEventListener('mouseenter', () => {
        numberElement.textContent = 'Rp. 9.000,00'; 
    });

    numberElement.addEventListener('mouseleave', () => {
        numberElement.textContent = 'Rp. 5.000,00'; 
    });
});

// 

var logo = document.getElementById("logoo");
var teks = document.getElementById("teks");

logo.addEventListener("click", function() {
    logo.style.color = "rgb(255, 140, 140)";
    teks.style.display = "block";
});

logo.addEventListener("mouseleave", function() {
    logo.style.color = "rgb(249, 249, 249)";
    teks.style.display = "none";
});