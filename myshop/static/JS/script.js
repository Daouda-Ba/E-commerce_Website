// Toggle Menu Function
function toggleMenu() {
    const menu = document.querySelector('.navbar-menu');
    menu.classList.toggle('active');
}

// Close Menu When Clicking on a Menu Item
const menuItems = document.querySelectorAll('.navbar-menu a');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        const menu = document.querySelector('.navbar-menu');
        menu.classList.remove('active');
    });
});

// Close Menu When Clicking Outside
document.addEventListener('click', (event) => {
    const menu = document.querySelector('.navbar-menu');
    const toggleButton = document.querySelector('.navbar-toggle');
    const isClickInsideMenu = menu.contains(event.target);
    const isClickOnToggleButton = toggleButton.contains(event.target);

    if (!isClickInsideMenu && !isClickOnToggleButton) {
        menu.classList.remove('active');
    }
});

// Dark Mode Toggle Function
function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
}

// Check for Dark Mode Preference
const savedDarkMode = localStorage.getItem('darkMode');
if (savedDarkMode === 'true') {
    document.body.classList.add('dark-mode');
    document.querySelector('.dark-mode-toggle input').checked = true;
}

// Toggle User Dropdown
function toggleUserDropdown(event) {
    event.preventDefault();
    const dropdown = document.getElementById('userDropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Close Dropdown When Clicking Outside
window.onclick = function(event) {
    if (!event.target.matches('.user-dropdown a')) {
        const dropdown = document.getElementById('userDropdown');
        if (dropdown.style.display === 'block') {
            dropdown.style.display = 'none';
        }
    }
};

// Logout Function
function logout() {
    alert('You have been logged out.');
    // Add your logout logic here (e.g., redirect to login page)
}

// Back to Top Button
window.onscroll = function() {
    const button = document.getElementById('back-to-top');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = 'block';
    } else {
        button.style.display = 'none';
    }
};

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}