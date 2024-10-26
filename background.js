const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Do not wait to strike till the iron is hot, but make it hot by striking.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "The best way to predict the future is to create it.",
    "You miss 100% of the shots you don't take."
  ];
  
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
  }
  
  chrome.runtime.onStartup.addListener(() => {
    const quote = getRandomQuote();
    chrome.storage.local.set({ quote });
  });
  
  chrome.runtime.onInstalled.addListener(() => {
    const quote = getRandomQuote();
    chrome.storage.local.set({ quote });
  });
  