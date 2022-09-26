document.getElementById('submit-btn').addEventListener('click', function () {
    // step 1
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    // setep 2
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;

    // console.log(email, typeof password);

    if (email === 'akib@gmail.com' && password === '1212') {
        window.location.href = "bank.html";
    }
    else {
        alert('Please input valid user email or password ...!!!')
    }
})