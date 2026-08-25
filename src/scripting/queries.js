document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const searchItems = document.querySelectorAll(".search-item");
    const noResultsMessage = document.getElementById("noResults");

    searchInput.addEventListener("input", (e) => {
        const filterText = e.target.value.toLowerCase().trim();
        let hiddenCount = 0;

        searchItems.forEach(item => {
            const itemText = item.textContent.toLowerCase();
            
            if (itemText.includes(filterText)) {
                item.classList.remove("hidden");
            } else {
                item.classList.add("hidden");
                hiddenCount++; // Track how many items are hidden
            }
        });

        // If hidden items equal total items, show the message
        if (hiddenCount === searchItems.length) {
            noResultsMessage.classList.remove("hidden");
        } else {
            noResultsMessage.classList.add("hidden");
        }
    });
});