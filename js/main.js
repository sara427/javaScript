const bookmarkNameInput = document.getElementById("bookmarkName");
const bookmarkURLInput = document.getElementById("bookmarkURL");
const submitBtn = document.getElementById("submitBtn");
const bookmarksBody = document.getElementById("bookmarksBody");

let bookmarks = [];

submitBtn.addEventListener("click", function (e) {

  const name = bookmarkNameInput.value.trim();
  const url = bookmarkURLInput.value.trim();

  const isNameValid = validateName(name);
  const isURLValid = validateURL(url);

  updateValidationStyle(bookmarkNameInput, isNameValid);
  updateValidationStyle(bookmarkURLInput, isURLValid);

  if (isNameValid && isURLValid) {
    const bookmark = { name, url };
    bookmarks.push(bookmark);
    displayBookmarks();
    clearInputs();
  }
});

function validateName(name) {
  return name.length >= 3;
}

function validateURL(url) {
  const regex = /^(https?:\/\/)(www\.)?[a-zA-Z0-9\-]+\.[a-zA-Z]{2,}(\/\S*)?$/;
  return regex.test(url);
}

function updateValidationStyle(inputElement, isValid) {
  if (isValid) {
    inputElement.classList.remove("is-invalid");
    inputElement.classList.add("is-valid");
  } else {
    inputElement.classList.remove("is-valid");
    inputElement.classList.add("is-invalid");
  }
}

function displayBookmarks() {
  bookmarksBody.innerHTML = "";
  bookmarks.forEach((bookmark, index) => {
    bookmarksBody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${bookmark.name}</td>
        <td>
          <a href="${bookmark.url}" class="btn btn-success" target="_blank">
            Visit
          </a>
        </td>
        <td>
          <button class="btn btn-danger" onclick="deleteBookmark(${index})">
            Delete
          </button>
        </td>
      </tr>
    `;
  });
}

function deleteBookmark(index) {
  bookmarks.splice(index, 1);
  displayBookmarks();
}

function clearInputs() {
  bookmarkNameInput.value = "";
  bookmarkURLInput.value = "";
  bookmarkNameInput.classList.remove("is-valid");
  bookmarkURLInput.classList.remove("is-valid");

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

  quoteDiv.classList.remove("show"); 
  void quoteDiv.offsetWidth; 

  quoteDiv.innerHTML = `
    <p class="quote-text">"${selected.text}"</p>
    <p class="quote-author">-- <em>${selected.author}</em></p>
  `;

  quoteDiv.classList.add("show"); 
}}