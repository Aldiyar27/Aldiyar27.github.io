document.addEventListener("DOMContentLoaded", function() {
  // Функция для отображения формы поиска
  function showSearchForm() {
    const searchForm = document.getElementById("searchForm");
    searchForm.style.display = "block";
  }

  // Задержка отображения формы на 10 секунд после загрузки страницы
  setTimeout(showSearchForm, 6000);

  // Остальной код обработки поиска остается таким же
  const searchInput = document.getElementById("searchInput");
  const searchButton = document.getElementById("searchButton");
  const errorContainer = document.getElementById("errorContainer");
  const girlsContainer = document.getElementById("girlsContainer");

  searchButton.addEventListener("click", handleSearch);

  async function handleSearch() {
    const searchQuery = searchInput.value;
    errorContainer.textContent = ''; // Clear previous error message
    girlsContainer.innerHTML = ''; // Clear previous search results

    try {
      const response = await fetch(`https://65ce2e5fc715428e8b402554.mockapi.io/girls?search=${searchQuery}`);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      displayGirls(data);
    } catch (error) {
      errorContainer.textContent = error.message;
    }
  }

  function displayGirls(girls) {
    girls.forEach(girl => {
      const girlDiv = document.createElement('div');
      const girlImage = document.createElement('img');
      girlImage.src = girl.photo;
      girlImage.alt = girl.name;
      girlImage.style.width = '100px';
      girlImage.style.height = '100px';
      girlImage.style.objectFit = 'cover';
      girlDiv.appendChild(girlImage);
      girlsContainer.appendChild(girlDiv);
    });
  }
});



onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
};