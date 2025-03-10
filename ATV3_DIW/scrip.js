const apiKey = 'fc4a0bdba8d8408d86f422aba61f00aa'; // Sua chave da API do NewsAPI

// Função para buscar notícias
function searchNews() {
    const query = document.getElementById('searchInput').value.trim();
    const resultsContainer = document.getElementById('resultados');

    if (!query) {
        resultsContainer.innerHTML = '';
        return;
    }

    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&from=2025-02-10&sortBy=publishedAt&apiKey=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.articles && data.articles.length > 0) {
                const articles = data.articles.map(article => {
                    return `<p><strong>${article.title}</strong><br>
                            <a href="${article.url}" target="_blank">Leia mais</a></p>`;
                }).join('');
                resultsContainer.innerHTML = articles;
            } else {
                resultsContainer.innerHTML = '<p>Nenhuma notícia encontrada.</p>';
            }
        })
        .catch(error => {
            console.error('Erro ao buscar notícias:', error);
            resultsContainer.innerHTML = '<p>Erro ao buscar notícias. Tente novamente mais tarde.</p>';
        });
}

// Função para carregar algumas notícias automaticamente 
