document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.getElementById('navLinks');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link (for mobile view)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });
});

    // Bat breeds modal functionality
    async function fetchBats() {
        try {
            const response = await fetch('bats.json'); // Fetch the JSON file
            const bats = await response.json(); // Parse the JSON data
            displayBats(bats); // Call the function to display the bats
        } catch (error) {
            console.error('Error fetching bat data:', error);
        }
    }
    
    // Function to display the bat data in the gallery
    function displayBats(bats) {
        const gallery = document.querySelector('.gallery');
        gallery.innerHTML = ''; // Clear existing content (if any)
    
        bats.forEach(bat => {
            const batElement = document.createElement('div');
            batElement.classList.add('gallery-item');
    
            // Create the gallery item HTML structure
            batElement.innerHTML = `
                <img src="${bat.img_name}" alt="${bat.name}">
                <p>${bat.name}</p>
            `;
    
            // Attach click event to each dynamically generated bat image to open modal
            batElement.querySelector('img').addEventListener('click', () => {
                const batModal = document.getElementById('batModal');
                const batTitle = document.getElementById('batTitle');
                const batDetails = document.getElementById('batDetails');
    
                batTitle.innerText = bat.name;
                batDetails.innerHTML = `
                    <img src="${bat.img_name}" alt="${bat.name}" style="width:100%">
                    <p><strong>Conservation Status:</strong> ${bat.conservationStatus}</p>
                    <p><strong>Notable Features:</strong> ${bat.notable}</p>
                    <p><strong>Countries Found In:</strong> ${bat.countries.join(', ')}</p>
                `;
                batModal.style.display = 'block';
            });
    
            // Append the bat element to the gallery
            gallery.appendChild(batElement);
        });
    }
    
    // Close the bat modal when clicking outside of the content or the close button
    window.addEventListener('click', (event) => {
        const batModal = document.getElementById('batModal');
        if (event.target === batModal) {
            batModal.style.display = 'none';
        }
    });
    
    // Call the fetchBats function to load the data when the page loads
    fetchBats();
    

    // Shop cart modal functionality
    const shopItems = document.querySelectorAll('.shop-item');
    const cartModal = document.getElementById('cartModal');
    const itemTitle = document.getElementById('itemTitle');
    const itemPrice = document.getElementById('itemPrice');
    const itemImage = document.getElementById('itemImage');

    // Attach click event to each shop item image
    if (shopItems.length > 0) {
        shopItems.forEach((item) => {
            item.addEventListener('click', () => {
                const itemName = item.querySelector('p').innerText.split('\n')[0];
                const itemCost = item.querySelector('p').innerText.split('$')[1];
                const imgSrc = item.querySelector('img').src;

                if (itemName && itemCost && imgSrc) {
                    itemTitle.innerText = itemName;
                    itemPrice.innerText = `Price: $${itemCost}`;
                    itemImage.src = imgSrc;
                    cartModal.style.display = 'block';
                } else {
                    console.error('Failed to extract shop item data.');
                }
            });
        });
    }

    // Close the cart modal when clicking outside of the content or the close button
    window.addEventListener('click', (event) => {
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });


// Function to handle adding items to the cart
function addToCart() {
    const quantity = document.getElementById('quantity').value;
    alert(`Added ${quantity} item(s) to your cart!`);
    document.getElementById('cartModal').style.display = 'none';
}

