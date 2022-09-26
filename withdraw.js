document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawAmountElement = document.getElementById('withdraw-field');
    const newWithdrawAmount = parseFloat(withdrawAmountElement.value);

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotal = parseFloat(withdrawTotalElement.innerText);

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;


    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);

    const newBalanceWithdrawTotal = previousBalanceTotal - currentWithdrawTotal;
    balanceTotalElement.innerText = newBalanceWithdrawTotal;

    // clear value
    withdrawAmountElement.value = '';


})