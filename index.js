function updateSidebarHeight() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.height = `${window.innerHeight}px`;
}
let updateInterval;

window.addEventListener('scroll', () => {
  clearInterval(updateInterval);
  
  updateInterval = setInterval(() => {
    updateSidebarHeight(); 
  }, 5);
});
let scrollTimeout;
window.addEventListener('scroll', () => {
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    clearInterval(updateInterval); 
  }, 200); 
});
// Call the function on load and resize
window.addEventListener('load', updateSidebarHeight);
window.addEventListener('resize', updateSidebarHeight);
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#0090af ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
function showError() {
  const emailInput = document.querySelector('.email-input');
  const errorMessage = document.querySelector('.error-message');
  
  if (emailInput.value === "") {
      errorMessage.style.display = "block"; // Show error if input is empty
  } else {
      errorMessage.style.display = "none"; // Hide error if input is not empty
  }
}
document.addEventListener('DOMContentLoaded', function () {
  const subscribeBtn = document.querySelector('.subscribe-btn');
  const emailInput = document.querySelector('.email-input');
  const popup = document.getElementById('error-popup');

  subscribeBtn.addEventListener('click', function () {
      if (emailInput.value.trim() === '') {
          alert('Veuillez entrer un email valide.');
          return;
      }
      emailInput.value = '';
      window.scrollTo({ top: 0, behavior: 'smooth' });
      popup.classList.add('show');

      setTimeout(() => {
          popup.classList.remove('show');
      }, 3500); // Hide after 3 seconds
  });
});

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
  const checkboxes = [document.getElementById('theme-toggle'), document.getElementById('switch')].filter(Boolean);
  const body = document.body;

  const getCurrentTheme = () => localStorage.getItem('theme') || 'light';

  const applyTheme = (theme) => {
    body.classList.toggle('dark-theme', theme === 'dark');
    checkboxes.forEach(checkbox => checkbox.checked = (theme === 'dark'));
    localStorage.setItem('theme', theme);
  };

  const toggleTheme = () => {
    const newTheme = body.classList.contains('dark-theme') ? 'light' : 'dark';
    applyTheme(newTheme);
  };
  applyTheme(getCurrentTheme());
  checkboxes.forEach(checkbox => checkbox.addEventListener('change', toggleTheme));
});

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
