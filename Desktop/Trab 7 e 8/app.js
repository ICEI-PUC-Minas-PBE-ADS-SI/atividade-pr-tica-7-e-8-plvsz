// Função para carregar os detalhes da receita
function carregarDetalhesReceita() {
    const urlParams = new URLSearchParams(window.location.search);
    const receitaId = urlParams.get('id');
    
    if (receitaId) {
        // Aqui você pode implementar a lógica para carregar os detalhes da receita
        // com base no ID recebido
        const detalhesContainer = document.getElementById('receita-detalhes');
        detalhesContainer.innerHTML = `
            <h1>Detalhes da Receita ${receitaId}</h1>
            <p>Conteúdo da receita será carregado aqui...</p>
        `;
    }
}

// Adiciona event listeners quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Se estiver na página de detalhes, carrega os detalhes da receita
    if (window.location.pathname.includes('detalhes.html')) {
        carregarDetalhesReceita();
    }
}); 