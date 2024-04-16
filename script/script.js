const money = document.getElementById('money');
const click = document.getElementById('click');
const showModal = document.getElementById('shop');
const modal = document.getElementById('modal');
const buyX10 = document.getElementById('buyButtonX10');
const buyX20 = document.getElementById('buyButtonX20');
const buyX50 = document.getElementById('buyButtonX50');
const buyX100 = document.getElementById('buyButtonX100');

click.addEventListener('click', increaseMoney);


let moneyIncrement = 1;

function increaseMoney() {
    let currentMoney = parseInt(money.innerText);
    money.innerText = (currentMoney + moneyIncrement) + ' $';
    
}


showModal.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

closeModal.addEventListener("click", () => {
    modal.classList.add('hidden');
});


buyX10.addEventListener('click', () => {
    let currentMoney = parseInt(money.innerText);
    if (currentMoney >= 100) {
        money.innerText = (currentMoney - 100) + ' $';
        moneyIncrement = 10;
    } else {
        alert('Vous n\'avez pas assez d\'argent pour acheter cet article');
    }
    modal.classList.add('hidden');
});

buyX20.addEventListener('click', () => {
    let currentMoney = parseInt(money.innerText);
    if (currentMoney >= 500) {
        money.innerText = (currentMoney - 500) + ' $';
        moneyIncrement = 20;
    } else {
        alert('Vous n\'avez pas assez d\'argent pour acheter cet article');
    }
    modal.classList.add('hidden');
});

buyX50.addEventListener('click', () => {
    let currentMoney = parseInt(money.innerText);
    if (currentMoney >= 1500) {
        money.innerText = (currentMoney - 1500) + ' $';
        moneyIncrement = 50;
    } else {
        alert('Vous n\'avez pas assez d\'argent pour acheter cet article');
    }
    modal.classList.add('hidden');
});

buyX100.addEventListener('click', () => {
    let currentMoney = parseInt(money.innerText);
    if (currentMoney >= 3500) {
        money.innerText = (currentMoney - 3500) + ' $';
        moneyIncrement = 100;
    } else {
        alert('Vous n\'avez pas assez d\'argent pour acheter cet article');
    }
    modal.classList.add('hidden');
});