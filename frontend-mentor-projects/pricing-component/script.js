const toggleSwitch = document.querySelector('.toggle-switch');
const plans = document.querySelectorAll('.plan');
let isMonthly = true;

toggleSwitch.addEventListener('click', () => togglePricing());
toggleSwitch.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    togglePricing();
  }
});

function togglePricing() {
  isMonthly = !isMonthly;
  toggleSwitch.setAttribute('aria-checked', isMonthly);
  
  const toggleIcon = toggleSwitch.querySelector('.toggle-icon');
  toggleIcon.style.left = isMonthly ? '2.5px' : '27.5px';
  
  plans.forEach(plan => {
    const monthlyPrice = plan.querySelector('.price.monthly');
    const annualPrice = plan.querySelector('.price.annually');
    if (isMonthly) {
      monthlyPrice.style.display = 'block';
      annualPrice.style.display = 'none';
    } else {
      monthlyPrice.style.display = 'none';
      annualPrice.style.display = 'block';
    }
  });
}
