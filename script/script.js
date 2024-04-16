const money = document.getElementById('money');
const click = document.getElementById('click');
const showModal = document.getElementById('shop');
const modal = document.getElementById('modal');

click.addEventListener('click', increaseMoney);

function increaseMoney() {
    let currentMoney = parseInt(money.innerText);
    money.innerText = (currentMoney + 1) + ' $';
    
}


showModal.addEventListener('click', () => {
    modal.classList.remove('hidden');
});

closeModal.addEventListener("click", () => {
    modal.classList.add('hidden');
});