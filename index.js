function toggleCustoms(event) {
  event.preventDefault();
  let dropdown = document.querySelector(".customs-dropdown");
  let menu = document.querySelector(".customs-menu");

  if (dropdown.classList.contains("open")) {
      menu.style.opacity = "0";
      menu.style.transform = "translateY(-10px)";
      setTimeout(() => {
          menu.style.visibility = "hidden";
          dropdown.classList.remove("open");
      }, 300);
  } else {
      menu.style.visibility = "visible";
      menu.style.opacity = "1";
      menu.style.transform = "translateY(0)";
      dropdown.classList.add("open");
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const checkboxes = [document.getElementById('theme-toggle'), document.getElementById('switch')]; 
  const body = document.body;

  // Function to apply the saved theme from localStorage
  const applySavedTheme = () => {
    const savedTheme = localStorage.getItem('theme'); // Retrieve the theme from localStorage

    // If the theme is saved as 'dark', apply the dark theme
    if (savedTheme === 'dark') {
      body.classList.add('dark-theme');
      checkboxes.forEach(checkbox => checkbox.checked = true); // Ensure the checkboxes are checked
    } else {
      body.classList.remove('dark-theme'); // Remove dark theme if it's not saved
      checkboxes.forEach(checkbox => checkbox.checked = false); // Ensure the checkboxes are unchecked
    }
  };

  // Function to toggle the theme and store the setting in localStorage
  const toggleTheme = () => {
    if (checkboxes.some(checkbox => checkbox.checked)) {
      body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark'); // Save 'dark' in localStorage
    } else {
      body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light'); // Save 'light' in localStorage
    }
  };

  // Apply the saved theme when the page is loaded
  applySavedTheme();

  // Add event listeners to both checkboxes
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', toggleTheme);
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const stats = document.querySelectorAll('.dryal-stat2 h3');

  stats.forEach(function (stat) {
    let count = 0;
    const target = parseInt(stat.textContent);
    const speed = 70; // Speed of counting
    const interval = setInterval(function () {
      count++;
      stat.textContent = count + '+';
      if (count >= target) {
        clearInterval(interval);
      }
    }, speed);
  });
});
function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.add('active');
}

function closeSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.remove('active');
}
const burgerMenu = document.querySelector('.mobile-burger-menu');
const mobileMenu = document.querySelector('.mobile-menu');

burgerMenu.addEventListener('click', () => {
  if (mobileMenu.style.left === '0px') {
    mobileMenu.style.left = '-250px'; // Hide menu
  } else {
    mobileMenu.style.left = '0'; // Show menu
  }
});

$(window).scroll( function(){

    var topWindow = $(window).scrollTop();
    var topWindow = topWindow * 1.5;
    
    var windowHeight = $(window).height();
        
    var position = topWindow / windowHeight;
    position = 1 - position;
  
    $('.arrow-wrap').css('opacity', position);
  
  });
  //Code stolen from css-tricks for smooth scrolling:
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });
