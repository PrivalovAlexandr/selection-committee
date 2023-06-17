const buttons = document.querySelectorAll('.switcher button')

const budgetTable = document.querySelector('article[data-type="budget"]')
const contractTable = document.querySelector('article[data-type="contract"]')

for (let btn of buttons) {
    btn.addEventListener('click', function(self) {
        if (self.target.classList.contains('active-button')) return null;

        budgetTable.classList.toggle('active-table');
        contractTable.classList.toggle('active-table');

        for (let item of buttons) {
            item.classList.toggle('active-button')
        }
    });
}