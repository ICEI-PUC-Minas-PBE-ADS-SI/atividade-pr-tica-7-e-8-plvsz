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
            "Preparar a forma e pré-aquecer o forno: Ligue o forno a 180ºC. Unte e polvilhe com cacau ou farinha uma forma de bolo redonda com furo no centro (aproximadamente 24 cm de diâmetro).",
            "Misturar os ingredientes úmidos: Em uma tigela, bata os ovos com o açúcar e a manteiga até obter uma mistura homogênea. Utilize uma batedeira para melhores resultados.",
            "Adicionar os ingredientes secos: Em outro recipiente, misture a farinha, o cacau em pó e as raspas de limão. Peneire esses ingredientes secos e adicione-os gradualmente à mistura de ovos, batendo em velocidade baixa até que tudo esteja bem incorporado.",
            "Incorporar o fermento: Acrescente o fermento à massa e misture suavemente com uma colher ou garfo.",
            "Assar o bolo: Despeje a massa na forma preparada e leve ao forno pré-aquecido por 30-40 minutos, ou até que, ao inserir um palito, ele saia limpo.",
            "Finalizar: Retire o bolo do forno e deixe esfriar um pouco antes de desenformar. Sirva em fatias e aproveite!"
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
            "750 gramas de carne (corte de sua preferência)",
            "3 batatas",
            "1 cebola",
            "½ pimentão",
            "1 dente de alho",
            "2 colheres de sopa de óleo",
            "1 taça de vinho",
            "Sal, pimenta, pimenta moída, salsa, alecrim e tomilho a gosto"
        ],
        preparo: [
            "Pré-aquecer o forno: Ligue o forno e ajuste para uma temperatura média de 180°C. Enquanto aquece, retire o excesso de gordura da carne.",
            "Preparar a marinada: Em um recipiente grande, misture as 2 colheres de sopa de óleo com os temperos desejados. Descasque e pique o alho, adicionando-o à mistura.",
            "Marinar a carne: Coloque a carne no recipiente com a marinada, garantindo que toda a superfície esteja bem coberta.",
            "Preparar os vegetais: Descasque e corte a cebola em pétalas e o pimentão em tiras. Lave, descasque e corte as batatas em cubos de tamanho semelhante para garantir um cozimento uniforme.",
            "Montar a assadeira: Unte uma assadeira com azeite. De um lado, disponha a cebola e o pimentão; do outro, as batatas.",
            "Selar a carne: Aqueça uma frigideira e sele a carne, dourando-a de ambos os lados junto com a marinada. Adicione o vinho à frigideira para deglacear, levantando os sabores que ficaram no fundo.",
            "Assar: Coloque a carne selada sobre os vegetais na assadeira e regue com o líquido da frigideira. Asse em forno pré-aquecido a 180°C por aproximadamente 30 a 40 minutos, ou até atingir o ponto desejado. Na metade do tempo, vire as batatas e a carne, adicionando caldo ou água se necessário.",
            "Servir: Após o tempo de forno, retire a carne e deixe-a descansar por alguns minutos antes de fatiar. Sirva acompanhada das batatas e vegetais assados."
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
            "100 ml de Cachaça",
            "6 colheres de sopa de açúcar",
            "2 unidades de limão (lima)",
            "gelo picado a gosto"
        ],
        preparo: [
            "É muito simples fazer caipirinha em casa! O primeiro passo é lavar os limões, cortar em gomos e retirar a parte branca, que iria azedar a bebida.",
            "Corte os limões em metades e distribua por dois copos, junto com o açúcar. Com a ajuda de um socador, amasse os limões até que fiquem desfeitos.",
            "Complete com o gelo e a Cachaça, e sua caipirinha tradicional brasileira está pronta! Sirva com um canudinho e divirta-se com este drink clássico!"
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
            "300 gramas de massa de sua preferência (a receita original utiliza farfalle)",
            "100 gramas de bacon",
            "1 ovo",
            "100 gramas de queijo parmesão ralado",
            "Sal e pimenta a gosto"
        ],
        preparo: [
            "Cozinhar a massa: Em uma panela grande, ferva água com uma pitada de sal e um fio de azeite. Cozinhe a massa conforme as instruções da embalagem até atingir o ponto al dente.",
            "Preparar a mistura de ovo e queijo: Em uma tigela, bata o ovo e tempere com sal e pimenta. Adicione o queijo parmesão ralado e misture bem. Reserve.",
            "Fritar o bacon: Em uma frigideira, frite o bacon até que fique crocante. Não é necessário adicionar óleo ou azeite, pois o bacon liberará sua própria gordura.",
            "Combinar os ingredientes: Escorra a massa cozida e, enquanto ainda está quente, misture-a com a mistura de ovo e queijo, mexendo vigorosamente para que o calor da massa cozinhe o ovo e forme um molho cremoso. Adicione o bacon frito e misture novamente.",
            "Servir: Sirva o macarrão à carbonara imediatamente, polvilhando com mais queijo parmesão ralado e pimenta moída, se desejar."
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
            "½ kg de farinha de trigo para pão (farinha tipo 1)",
            "10 g de fermento biológico seco",
            "1 colher de sopa de açúcar",
            "1 colher de sopa de manteiga ou margarina amolecida",
            "1 xícara de água morna",
            "1 colher de chá de sal"
        ],
        preparo: [
            "Preparar a mistura de fermento: Em uma tigela, dissolva o fermento e o açúcar na água morna.",
            "Misturar os ingredientes secos: Em uma tigela grande, coloque a farinha, a manteiga e o sal. Misture bem.",
            "Adicionar a mistura de fermento: Abra um espaço no centro dos ingredientes secos e despeje a mistura de fermento. Misture do centro para fora, amassando e sovando bem a massa até que fique lisa e desgrude das mãos. Se após 5 minutos sovando a massa ainda estiver grudenta, adicione mais farinha. Se estiver seca, acrescente um pouco mais de água.",
            "Primeira fermentação: Modele a massa em forma de bola, cubra com um pano e deixe descansar por 1 a 2 horas em um local quente, até que dobre de tamanho.",
            "Modelar os pães: Após esse período, sove a massa novamente para retirar o ar da fermentação. Separe em pedaços (aproximadamente 60 g cada), abra cada pedaço com um rolo e enrole em forma de cilindro. Com uma faca, faça um corte superficial no topo de cada pão.",
            "Segunda fermentação: Coloque os pães em uma assadeira untada, deixando espaço entre eles para crescerem sem grudar. Deixe crescer por mais 1 hora.",
            "Assar os pães: Pré-aqueça o forno a 200ºC. Pincele os pães com um pouco de água e asse por 20 a 30 minutos, ou até dourarem. Após os primeiros 15 minutos de forno, borrife ou pincele os pães com água novamente para garantir uma crosta crocante.",
            "Finalizar: Retire os pães do forno e deixe esfriar um pouco antes de servir."
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
            "2 peitos de frango cortado em filés",
            "1 colher de sopa de páprica ardida",
            "1 colher de chá de pimenta calabresa",
            "1 colher de chá de tomilho seco",
            "1 colher de chá de sal",
            "½ colher de chá de oréganos",
            "½ colher de chá de cebola em pó",
            "½ colher de chá de alho em pó",
            "½ colher de chá de sementes de mostarda",
            "1 fio de azeite de oliva ou óleo vegetal"
        ],
        preparo: [
            "Prepare o tempero cajun caseiro batendo todos os temperinhos num processador.",
            "Coloque os filés de frango numa vasilha, adicione o tempero preparado no passo anterior e esfregue muito bem com as mãos, para distribuir. Cubra com plástico filme e reserve na geladeira por 1-2 horas, para pegar o gosto. Se preferir, poderá cozinhar em seguida.",
            "Para cozinhar seu frango cajun leve ao fogo uma frigideira (de preferência antiaderente) e unte com um fio de azeite ou óleo. Quando estiver quente coloque os filés de frango afastados uns dos outros e deixe cozinhar por uns 10-15 minutos, virando os filés a meio do tempo.",
            "Quando seu frango picante na frigideira estiver douradinho, pode retirar. Sirva com uma salada de alface e abacate e com batata ao estilo cajun e bom apetite!"
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
            "1 colher de sopa de açúcar",
            "1 colher de sopa de água",
            "1 ovo",
            "8 colheres de sopa de leite",
            "8 colheres de sopa de leite condensado",
            "1 colher de chá de essência de baunilha (opcional)"
        ],
        preparo: [
            "Prepare a calda de caramelo para pudim de caneca: numa caneca misture a água e o açúcar e leve ao microondas, em potência máxima, por 30 segundos. Retire e observe: se o açúcar ainda não estiver derretido, coloque por mais 30 segundos.",
            "Repita por mais 30 segundos as vezes que forem necessárias até obter uma calda dourada, cuidando para não deixar mais de 30 segundos direto, pois a calda pode queimar e ficar amarga. No final distribua a calda por toda a caneca com a ajuda de um pincel de cozinha ou simplesmente girando a caneca para que a calda suba nas laterais. Reserve.",
            "Prepare agora o pudim de caneca: coloque o ovo numa tigela e bata com um garfo ou fouet até espumar. Coloque o leite e o leite condensado e bata mais um pouco até virar uma mistura homogênea. Adicione também a essência de baunilha para um gostinho extra.",
            "Transfira a mistura para a caneca caramelada, de forma a preencher somente metade da capacidade total da caneca. Leve ao microondas por 1 minuto em potência máxima. Retire e observe: se o pudim ainda estiver líquido, coloque de novo por mais 1 ou 2 ciclos de 30 segundos - o tempo total será de 1 minuto e 30 segundos a 2 minutos.",
            "Após o tempo indicado o resultado será um pudim mole, mas ele continuará cozinhando com o calor residual da caneca. Deixe esfriar em temperatura ambiente e, depois, reserve na geladeira para servir geladinho. Delicie-se com esta sobremesa prática e rápida simples assim ou acompanhando com fruta. Bom apetite!"
        ]
    }
];

function criarCardReceita(receita) {
    return `
        <div class="card border-0 shadow-sm mb-4">
            <div class="card-body">
                <h2 class="text-center">${receita.titulo}</h2>
                <h3 class="text-center">Serve: ${receita.serve} • Tempo de preparo: ${receita.tempo} • Dificuldade ${receita.dificuldade}</h3>
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
                <div class="card border-0 shadow-sm mb-4">
                    <div class="card-body">
                        <h1 class="text-center mb-4">${receita.titulo}</h1>
                        <h3 class="text-center mb-4">Serve: ${receita.serve} • Tempo: ${receita.tempo} • Dificuldade: ${receita.dificuldade}</h3>
                        <img src="${receita.imagem}" alt="${receita.titulo}" class="img-fluid rounded mb-4">
                        <div class="mb-4">
                            <h2>Ingredientes</h2>
                            <ul class="list-unstyled">
                                ${receita.ingredientes.map(ing => `
                                    <li class="mb-2">
                                        <input type="checkbox" id="ing${Math.random().toString(36).substr(2, 9)}" class="me-2">
                                        <label>${ing}</label>
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
                    </div>
                </div>
            `;
        } else {
            detalhesContainer.innerHTML = "<p>Receita não encontrada.</p>";
        }
    }
}

function carregarReceitas() {
    const main = document.querySelector('main');
    if (main) {
        const row = main.querySelector('.row');
        if (row) {
            row.innerHTML = receitas.map(receita => criarCardReceita(receita)).join('');
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    console.log("app.js carregado");

    if (window.location.pathname.includes('detalhes.html')) {
        carregarDetalhesReceita();
    } else {
        carregarReceitas();
    }
}); 