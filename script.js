let currentIndex = 0;

const navItems = document.querySelectorAll('.neon-navbar ul li');

function changeGlow() {
    // Remove glow from all items
    navItems.forEach(item => item.classList.remove('glow'));

    // Add glow to the current item
    navItems[currentIndex].classList.add('glow');

    // Move to the next item, loop back if at the end
    currentIndex = (currentIndex + 1) % navItems.length;
}

// Change the glow every second
setInterval(changeGlow, 1000);
