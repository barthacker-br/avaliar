window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const content = document.getElementById('content');

    // Oculta a tela de carregamento
    loadingScreen.style.display = 'none';

    // Exibe o conteúdo da página
    content.style.display = 'block';
});
