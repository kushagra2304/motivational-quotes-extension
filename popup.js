document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get('quote', (data) => {
        const quoteDiv = document.getElementById('quote');
        quoteDiv.textContent = data.quote || 'No quote available.';
    });
});