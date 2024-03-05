function showSearchForm() {
  const searchForm = document.getElementById("searchForm");
  searchForm.style.display = "block";
}

setTimeout(showSearchForm, 6000);

const nameInput = document.getElementById('searchInput');
const saveButton = document.getElementById('searchButton');

saveButton.addEventListener('click', () => {
  const name = nameInput.value;
  sessionStorage.clear();

  sessionStorage.setItem('name', name);

  window.location.href = 'photo.html';
});


onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
};