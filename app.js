const value = document.querySelector('#value');
const decrease = document.querySelector('#decrease');
const reset = document.querySelector('#reset');
const increase = document.querySelector('#increase');

let cost = 0;
const displayValue = function () {
  value.textContent = cost;
  cost > 0
    ? (value.style.color = '#008000')
    : cost < 0
    ? (value.style.color = 'rgb(255,0,0)')
    : (value.style.color = '#222222');
};
decrease.addEventListener('click', function () {
  cost--;
  displayValue();
});

reset.addEventListener('click', function () {
  cost = 0;
  displayValue();
});
increase.addEventListener('click', function () {
  cost++;
  displayValue();
});
