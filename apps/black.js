function trocaModo() {
    const body = document.body
    const logo = document.querySelector('.cabecalho__logo');
    const botao = document.querySelector('.cabecalho__botao');

    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        logo.src= "../img/white_logo.svg";
        botao.src ="../img/light_mode_button.svg";
    } else {
        logo.src= "../img/black_logo.svg";
        botao.src= "../img/dark_mode_button.svg";
    }

}

