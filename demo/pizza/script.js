let pizzaData = [];
let filteredData = [];
let currentPage = 1;
let entriesPerPage = 10;

document.addEventListener('DOMContentLoaded', function () {
  const apiUrl = 'https://script.google.com/macros/s/AKfycbzqfFX_frPZY-5PKK3Zoxhf1moFiBf77qolcFd36hcx4Cz0KNVQPOxALeDE7WqcbXo-gA/exec';
  
  // Fetch data when the page loads
  fetchPizzaData();

  function fetchPizzaData() {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        pizzaData = data.data; // Store full data
        filteredData = pizzaData; // Initialize filtered data
        renderTable();
        updatePaginationInfo();
      })
      .catch(error => {
        console.error('Error fetching pizza data:', error);
      });
  }
});

// Render the table based on current page and entries per page
function renderTable() {
  const tableBody = document.querySelector('#pizzaTable tbody');
  tableBody.innerHTML = ''; // Clear existing content

  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const pizzasToShow = filteredData.slice(startIndex, endIndex);

  pizzasToShow.forEach(pizza => {
    const row = document.createElement('tr');

    const pizzaNameCell = document.createElement('td');
    pizzaNameCell.textContent = pizza['Pizza Name'];
    row.appendChild(pizzaNameCell);

    const typeCell = document.createElement('td');
    typeCell.textContent = pizza['Type'];
    row.appendChild(typeCell);

    const sizeCell = document.createElement('td');
    sizeCell.textContent = pizza['Size'];
    row.appendChild(sizeCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = `$${pizza['Price'].toFixed(2)}`;
    row.appendChild(priceCell);

    tableBody.appendChild(row);
  });

  updatePaginationInfo();
  updateTotalEntriesInfo();
}

// Update entries per page
function updateEntriesPerPage() {
  const select = document.getElementById('entriesPerPage');
  entriesPerPage = parseInt(select.value);
  currentPage = 1; // Reset to first page
  renderTable();
}

// Search pizzas by name
function filterPizzas() {
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  filteredData = pizzaData.filter(pizza =>
    pizza['Pizza Name'].toLowerCase().includes(searchTerm)
  );
  currentPage = 1; // Reset to first page
  renderTable();
}

// Pagination: Next page
function nextPage() {
  const totalPages = Math.ceil(filteredData.length / entriesPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    renderTable();
  }
}

// Pagination: Previous page
function previousPage() {
  if (currentPage > 1) {
    currentPage--;
    renderTable();
  }
}

// Update pagination info
function updatePaginationInfo() {
  const totalPages = Math.ceil(filteredData.length / entriesPerPage);
  const pageInfo = document.getElementById('pageInfo');
  pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;
}

// Update total entries info
function updateTotalEntriesInfo() {
  const totalEntriesInfo = document.getElementById('totalEntriesInfo');
  totalEntriesInfo.textContent = `Showing ${Math.min((currentPage - 1) * entriesPerPage + 1, filteredData.length)}–${Math.min(currentPage * entriesPerPage, filteredData.length)} of ${filteredData.length} entries`;
}
