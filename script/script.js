const money = document.getElementById('money');
let savedMoney = localStorage.getItem('money');
money.innerText = (!isNaN(savedMoney) ? parseInt(savedMoney) : 0) + '$';
const click = document.getElementById('click');
const showModal = document.getElementById('shop');
const modal = document.getElementById('modal');
const buyX10 = document.getElementById('buyButtonX10');
const buyX20 = document.getElementById('buyButtonX20');
const buyX50 = document.getElementById('buyButtonX50');
const buyX100 = document.getElementById('buyButtonX100');

// Charger moneyIncrement depuis le stockage local ou utiliser la valeur par défaut (1)
let moneyIncrement = parseInt(localStorage.getItem('moneyIncrement')) || 1;

// Fonction pour incrémenter l'argent
function increaseMoney() {
    let currentMoney = parseInt(money.innerText);
    let newMoney = currentMoney + moneyIncrement;
    money.innerText = newMoney + ' $';
    localStorage.setItem('money', newMoney);
}

// Écouteur d'événement pour le clic
click.addEventListener('click', increaseMoney);

// Interval pour incrémenter l'argent automatiquement
setInterval(increaseMoney, 1000);

// Afficher le modal
showModal.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

// Fermer le modal
closeModal.addEventListener("click", () => {
    modal.classList.add('hidden');
});

// Fonction pour acheter un bonus x10, x20, x50 ou x100
function buyBonus(incrementValue, cost) {
    let currentMoney = parseInt(money.innerText);
    if (currentMoney >= cost) {
        money.innerText = (currentMoney - cost) + ' $';
        moneyIncrement = incrementValue;
        localStorage.setItem('moneyIncrement', moneyIncrement); // Sauvegarder moneyIncrement dans le stockage local
    } else {
        alert('Vous n\'avez pas assez d\'argent pour acheter cet article');
    }
    modal.classList.add('hidden');
}

// Écouteurs d'événement pour acheter différents bonus
buyX10.addEventListener('click', () => buyBonus(10, 100));
buyX20.addEventListener('click', () => buyBonus(20, 500));
buyX50.addEventListener('click', () => buyBonus(50, 1500));
buyX100.addEventListener('click', () => buyBonus(100, 3500));
