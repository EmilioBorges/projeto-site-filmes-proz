document.getElementById('toggle-form').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
    document.getElementById('form-title').innerText = 'Cadastro';
});

document.getElementById('toggle-back').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
    document.getElementById('form-title').innerText = 'Login';
});

document.getElementById('register-form').addEventListener('submit', function(e) {
    const email = document.getElementById('email-register').value;
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (!validateEmail(email)) {
        alert('Por favor, insira um email válido.');
        e.preventDefault();
    } else if (password.length < 6) {
        alert('A senha deve ter pelo menos 6 caracteres.');
        e.preventDefault();
    } else if (password !== confirmPassword) {
        alert('As senhas não coincidem.');
        e.preventDefault();
    }
});

function validateEmail(email) {
    if (email.includes("@") && email.includes(".")) {
        return true;
    } else {
        return false;
    }
}
