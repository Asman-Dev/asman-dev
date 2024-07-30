const tombol = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-item'); 

tombol.addEventListener('click' , () => {
    menu.classList.toggle('aktif');
});


// DARK MODE TOGGLE
function toggleMode() {
  const body = document.body;
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');

  const modeToggleIcon = document.getElementById('toggleMode');
  if (body.classList.contains('dark-mode')) {
    modeToggleIcon.classList.remove('fa-moon');
    modeToggleIcon.classList.add('fa-sun');
    document.querySelectorAll('.dark-mode-target').forEach(element => {
      element.classList.add('dark-mode');
    });
    localStorage.setItem('mode', 'dark');
  } else {
    modeToggleIcon.classList.remove('fa-sun');
    modeToggleIcon.classList.add('fa-moon');
    document.querySelectorAll('.dark-mode-target').forEach(element => {
      element.classList.remove('dark-mode');
    });
    localStorage.setItem('mode', 'light');
  }
}

document.getElementById('toggleMode').addEventListener('click', toggleMode);
const savedMode = localStorage.getItem('mode');
if (savedMode === 'dark') {
  toggleMode();
}


