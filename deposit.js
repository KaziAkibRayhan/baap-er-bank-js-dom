document.getElementById('deposit-btn').addEventListener('click', function () {
    const depositField = document.querySelector('#deposit-field');
    const newDepositAmount = parseFloat(depositField.value);

    const depositTotalAmount = document.getElementById('deposit-total');
    const previousDepositTotal = parseFloat(depositTotalAmount.innerText);

    const currentDeposit = previousDepositTotal + newDepositAmount;
    depositTotalAmount.innerText = currentDeposit;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);

    const currentBalanceTotal = previousBalanceTotal + currentDeposit;
    balanceTotalElement.innerText = currentBalanceTotal;

    // clear input 
    depositField.value = '';
})