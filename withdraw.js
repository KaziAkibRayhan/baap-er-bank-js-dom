document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawAmountElement = document.getElementById('withdraw-field');
    const newWithdrawAmount = parseFloat(withdrawAmountElement.value);

    // clear value
    withdrawAmountElement.value = '';
    if (isNaN(newWithdrawAmount)) {
        alert('Please provide valid number');
        return;
    }

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotal = parseFloat(withdrawTotalElement.innerText);

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);


    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Baaper Bank e eto teha nai');
        return;
    }

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const newBalanceWithdrawTotal = previousBalanceTotal - currentWithdrawTotal;
    balanceTotalElement.innerText = newBalanceWithdrawTotal;



})