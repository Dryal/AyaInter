document.addEventListener('DOMContentLoaded', function () {
  const checkbox = document.getElementById('theme-toggle');  // Get the checkbox element
  const body = document.body;  // Target the body element

  // Function to toggle the dark theme class
  const toggleTheme = () => {
    if (checkbox.checked) {
      body.classList.add('dark-theme');  // Add dark theme class
    } else {
      body.classList.remove('dark-theme');  // Remove dark theme class
    }
  };

  // Listen for changes on the checkbox
  checkbox.addEventListener('change', toggleTheme);

  // Initialize the theme based on checkbox state when the page loads
  if (checkbox.checked) {
    body.classList.add('dark-theme');
  } else {
    body.classList.remove('dark-theme');
  }
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
