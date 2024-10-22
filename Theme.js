// Seleciona os botões e os elementos a serem alterados
const darkModeBtn = document.getElementById('dark-mode-btn');
const lightModeBtn = document.getElementById('light-mode-btn');
const body = document.body;
const navbar = document.getElementById('navbar');
const Headers=document.getElementById('header');

// Função para ativar o Dark Mode
darkModeBtn.addEventListener('click', function() {
    body.classList.add('dark-theme');
    body.classList.remove('light-theme');
    navbar.classList.add('navbar-dark');
    navbar.classList.remove('navbar-light');
    Headers.classList.remove('container-light');
    Headers.classList.add('container-dark');
});

// Função para ativar o Light Mode
lightModeBtn.addEventListener('click', function() {
    body.classList.add('light-theme');
    body.classList.remove('dark-theme');
    navbar.classList.add('navbar-light');
    navbar.classList.remove('navbar-dark');
    Headers.classList.add('container-light');
    Headers.classList.remove('container-dark');
});

// Define o Light Mode como padrão ao carregar a página
window.addEventListener('DOMContentLoaded', function() {
    body.classList.add('light-theme');
    navbar.classList.add('navbar-light');
});
