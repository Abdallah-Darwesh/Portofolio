(function(){
    const buttons = document.querySelectorAll(".btn");
    const storeItems = document.querySelectorAll(".store-item");

    // Hide all items initially
    storeItems.forEach((item) => {
        item.classList.remove('show');
    });

    buttons.forEach((button) => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = e.target.dataset.filter;

            storeItems.forEach((item) => {
                if (filter === 'all') {
                    item.classList.add('show');
                } else {
                    if (item.classList.contains(filter)) {
                        item.classList.add('show');
                    } else {
                        item.classList.remove('show');
                    }
                }
            });
        });
    });

    // Initialize to show all items
    const allButton = document.querySelector('.btn[data-filter="all"]');
    if (allButton) {
        allButton.click();
    }
})();