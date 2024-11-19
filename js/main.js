document.addEventListener('DOMContentLoaded', function() {
    const searchBox = document.getElementById('commandSearch');
    const categoryTabs = document.querySelectorAll('.category-tab');
    const tableRows = document.querySelectorAll('.commands-table tbody tr');

    // Search functionality
    searchBox.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        filterTable(searchTerm, getCurrentCategory());
    });

    // Category filter functionality
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            categoryTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            filterTable(searchBox.value.toLowerCase(), this.dataset.category);
        });
    });

    function getCurrentCategory() {
        return document.querySelector('.category-tab.active').dataset.category;
    }

    function filterTable(searchTerm, category) {
        tableRows.forEach(row => {
            const text = row.textContent.toLowerCase();
            const rowCategory = row.dataset.category;
            const matchesSearch = text.includes(searchTerm);
            const matchesCategory = category === 'all' || rowCategory === category;
            
            row.style.display = matchesSearch && matchesCategory ? '' : 'none';
        });
    }
});
