document.addEventListener('DOMContentLoaded', () => {
    const container2 = document.querySelector('.container2');
    const registerLink = document.querySelector('.register-link');
    const loginLink = document.querySelector('.login-link');
    const loginForm = document.querySelector('.login');
    const registerForm = document.querySelector('.registration');
    const carBronBtn = document.querySelector('.car-bron')
    registerLink.addEventListener('click', () => {
        container2.classList.add('active');
        loginForm.classList.add('hidden');
        registerForm.classList.remove('hidden');
    });

    loginLink.addEventListener('click', () => {
        container2.classList.remove('active');
        registerForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
    });


})
