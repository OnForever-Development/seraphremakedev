function checkPassword() {
    const password = document.getElementById('password').value;
    const correctPassword = 'CHEZ_NOAH_KESHAV_BANANA'; 

    if (password === correctPassword) {
        window.location.href = '/home.html'; 
    } else {
        alert('Incorrect password!');
    }
}
