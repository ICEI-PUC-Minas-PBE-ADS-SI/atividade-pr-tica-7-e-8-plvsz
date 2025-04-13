const receitas = [
    {
        id: 1,
        titulo: "Bolo de Chocolate",
        imagem: "bolo-top.jpg",
        serve: "8 pessoas",
        tempo: "45 min",
        dificuldade: "baixa",
        categoria: "Bolos",
        ingredientes: [
            "1 xícara de farinha de trigo",
            "¾ xícara de açúcar",
            "¼ xícara de manteiga",
            "4 colheres de cacau em pó",
            "4 ovos",
            "1 colher de fermento"
        ],
        preparo: [
            "Pré-aqueça o forno a 180°C",
            "Misture os ingredientes secos",
            "Adicione os ingredientes líquidos",
            "Asse por 30-40 minutos"
        ]
    },
    {
        id: 2,
        titulo: "Carne Assada",
        imagem: "carne-top_1.jpg",
        serve: "6 pessoas",
        tempo: "1 hora",
        dificuldade: "média",
        categoria: "Carnes",
        ingredientes: [
            "750g de carne",
            "3 batatas",
            "1 cebola",
            "½ pimentão",
            "1 dente de alho",
            "2 colheres de óleo",
            "1 taça de vinho",
            "Temperos a gosto"
        ],
        preparo: [
            "Pré-aqueça o forno",
            "Tempere a carne",
            "Prepare os vegetais",
            "Asse por 30-40 minutos"
        ]
    },
    {
        id: 3,
        titulo: "Caipirinha",
        imagem: "caipirinha-top.jpg",
        serve: "2 pessoas",
        tempo: "15 min",
        dificuldade: "baixa",
        categoria: "Coquetéis",
        ingredientes: [
            "100ml de cachaça",
            "6 colheres de açúcar",
            "2 limões",
            "Gelo a gosto"
        ],
        preparo: [
            "Corte os limões",
            "Misture com açúcar",
            "Adicione a cachaça",
            "Complete com gelo"
        ]
    },
    {
        id: 4,
        titulo: "Espaguete à Carbonara",
        imagem: "macarrao-top.jpg",
        serve: "4 pessoas",
        tempo: "20 min",
        dificuldade: "média",
        categoria: "Massas",
        ingredientes: [
            "300g de massa",
            "100g de bacon",
            "1 ovo",
            "100g de queijo parmesão",
            "Sal e pimenta"
        ],
        preparo: [
            "Cozinhe a massa",
            "Frite o bacon",
            "Misture com ovo e queijo",
            "Sirva quente"
        ]
    },
    {
        id: 5,
        titulo: "Pão Francês",
        imagem: "pao-top.jpg",
        serve: "4 pessoas",
        tempo: "3 horas",
        dificuldade: "média",
        categoria: "Pães",
        ingredientes: [
            "500g de farinha",
            "10g de fermento",
            "1 colher de açúcar",
            "1 colher de manteiga",
            "1 xícara de água",
            "1 colher de sal"
        ],
        preparo: [
            "Misture os ingredientes",
            "Deixe crescer",
            "Modele os pães",
            "Asse por 20-30 minutos"
        ]
    },
    {
        id: 6,
        titulo: "Filé de Frango Cajun",
        imagem: "frango-top.jpg",
        serve: "2 pessoas",
        tempo: "30 min",
        dificuldade: "baixa",
        categoria: "Aves",
        ingredientes: [
            "2 peitos de frango",
            "1 colher de páprica",
            "1 colher de pimenta",
            "1 colher de tomilho",
            "Sal e temperos"
        ],
        preparo: [
            "Tempere o frango",
            "Aqueça a frigideira",
            "Grelhe por 10-15 minutos",
            "Sirva com salada"
        ]
    },
    {
        id: 7,
        titulo: "Pudim de Caneca",
        imagem: "pudim-top.jpg",
        serve: "1 pessoa",
        tempo: "10 min",
        dificuldade: "baixa",
        categoria: "Sobremesas",
        ingredientes: [
            "1 ovo",
            "8 colheres de leite",
            "8 colheres de leite condensado",
            "1 colher de baunilha"
        ],
        preparo: [
            "Misture os ingredientes",
            "Coloque na caneca",
            "Leve ao microondas",
            "Deixe esfriar"
        ]
    }
];

function criarCardReceita(receita) {
    return `
        <div class="card border-0 shadow-sm mb-4">
            <div class="card-body">
                <h2 class="text-center">${receita.titulo}</h2>
                <h3 class="text-center">Serve: ${receita.serve} • Tempo de preparo: ${receita.tempo} • Dificuldade: ${receita.dificuldade}</h3>
                <img src="${receita.imagem}" alt="${receita.titulo}" class="img-fluid rounded mb-4">
                <a href="detalhes.html?id=${receita.id}" class="btn btn-primary">Ver Receita Completa</a>
            </div>
        </div>
    `;
}

function carregarDetalhesReceita() {
    const urlParams = new URLSearchParams(window.location.search);
    const receitaId = urlParams.get('id');
    
    if (receitaId) {
        const receita = receitas.find(r => r.id === parseInt(receitaId));
        const detalhesContainer = document.getElementById('receita-detalhes');
        
        if (receita) {
            detalhesContainer.innerHTML = `
                <h1>${receita.titulo}</h1>
                <h3>Serve: ${receita.serve} • Tempo de preparo: ${receita.tempo} • Dificuldade: ${receita.dificuldade}</h3>
                <img src="${receita.imagem}" alt="${receita.titulo}" class="img-fluid rounded mb-4">
                
                <div class="mb-4">
                    <h2>Ingredientes</h2>
                    <ul class="list-unstyled">
                        ${receita.ingredientes.map(ingrediente => `
                            <li>
                                <input type="checkbox" id="ing${Math.random().toString(36).substr(2, 9)}">
                                <label>${ingrediente}</label>
                            </li>
                        `).join('')}
                    </ul>
                </div>

                <div class="preparation-section">
                    <h2>Modo de preparo</h2>
                    <ol class="list-group list-group-numbered">
                        ${receita.preparo.map(passo => `
                            <li class="list-group-item">${passo}</li>
                        `).join('')}
                    </ol>
                </div>
            `;
        } else {
            detalhesContainer.innerHTML = "<p>Receita não encontrada.</p>";
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    if (window.location.pathname.includes('detalhes.html')) {
        carregarDetalhesReceita();
    } else {
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
            const category = section.id.toLowerCase();
            const receitasCategoria = receitas.filter(r => r.categoria === category);
            if (receitasCategoria.length > 0) {
                const row = section.querySelector('.row');
                row.innerHTML = receitasCategoria.map(receita => criarCardReceita(receita)).join('');
            }
        });
    }
}); 