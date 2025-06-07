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
}
