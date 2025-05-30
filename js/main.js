const quotes = [
  {
    text: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky"
  },
  {
    text: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    text: "Success is not in what you have, but who you are.",
    author: "Bo Bennett"
  },
  {
    text: "Be yourself; everyone else is already taken.",
    author: "Oscar Wilde"
  },
  {
    text: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    author: "Marilyn Monroe"
  },
  {
    text: "So many books, so little time.",
    author: "Frank Zappa"
  },
  {
    text: "A room without books is like a body without a soul.",
    author: "Marcus Tullius Cicero"
  },
  {
    text: "You only live once, but if you do it right, once is enough.",
    author: "Mae West"
  }
];

function newQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selected = quotes[randomIndex];

  const quoteDiv = document.getElementById("quote");

  quoteDiv.classList.remove("show"); // Reset animation
  void quoteDiv.offsetWidth; // Force reflow

  quoteDiv.innerHTML = `
    <p class="quote-text">"${selected.text}"</p>
    <p class="quote-author">-- <em>${selected.author}</em></p>
  `;

  quoteDiv.classList.add("show"); // Show with animation
}
