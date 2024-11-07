const news = [
    {
        title: "Brasil Registra Crescimento no PIB",
        description: "O PIB brasileiro surpreendeu em 2024 com crescimento de 3%, impulsionado pelo setor de serviços e agronegócio.",
        image: "https://www.castrocarazo.ac.cr/web/sites/default/files/styles/img_col-xs-12/public/banca_y_finanzas_bachillerato_portada_plan.jpg?itok=rAXmd4-L"
    },
    {
        title: "Inflação Abaixo do Esperado pela Primeira Vez em Anos",
        description: "A inflação desacelerou, devido à redução dos preços de energia e políticas de juros.",
        image: "https://cdn.cobrefacil.com.br/website/base/2e0/83f/cea/900-473-capital-de-giro.jpg"
    },
    {
        title: "Bolsa de Valores Bate Recorde Histórico",
        description: "O Ibovespa alcançou um recorde de 136.464 pontos, com otimismo sobre a taxa de juros nos EUA.",
        image: "https://4.bp.blogspot.com/-OhS1TgfdU_A/UlWTadAeq2I/AAAAAAAABns/cMN2ASwpls0/s1600/Bolsa-de-Valores.jpg"
    },
    {
        title: "Desemprego Cai e Gera Otimismo no Mercado de Trabalho",
        description: "A taxa de desemprego caiu para o menor nível em quase uma década.",
        image: "https://i0.wp.com/www.correiodobrasil.com.br/wp-content/uploads/2014/10/desemprego-site.jpg?resize=635%2C417"
    },
    {
        title: "Novo Programa para Pequenos Empreendedores em Implementação",
        description: "Programa para facilitar o acesso ao crédito para pequenos empreendedores.",
        image: "https://correionago.com.br/wp-content/uploads/2023/04/IMG_5750-1536x864.jpeg"
    },
    {
        title: "Exportações Brasileiras de Produtos Agropecuários Batem Recorde",
        description: "Exportações de produtos agropecuários cresceram, estabelecendo novos recordes.",
        image: "https://live.staticflickr.com/65535/52862630261_f793555a0f.jpg"
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const carouselInner = document.querySelector('#newsCarousel .carousel-inner');
    const recentNews = document.getElementById('recentNews');

    // Populate carousel
    news.forEach((item, index) => {
        const carouselItem = document.createElement('div');
        carouselItem.className = `carousel-item ${index === 0 ? 'active' : ''}`;
        carouselItem.innerHTML = `
            <img src="${item.image}" class="d-block w-100" alt="${item.title}">
            <div class="carousel-caption d-none d-md-block">
                <h5>${item.title}</h5>
                <p>${item.description}</p>
            </div>
        `;
        carouselInner.appendChild(carouselItem);
    });

    // Populate recent news
    news.forEach(item => {
        const newsCard = document.createElement('div');
        newsCard.className = 'col-md-4 mb-4';
        newsCard.innerHTML = `
            <div class="card h-100">
                <img src="${item.image}" class="card-img-top" alt="${item.title}">
                <div class="card-body">
                    <h5 class="card-title">${item.title}</h5>
                    <p class="card-text">${item.description}</p>
                </div>
                <div class="card-footer">
                    <button class="btn btn-primary">Leia Mais</button>
                </div>
            </div>
        `;
        recentNews.appendChild(newsCard);
    });
});