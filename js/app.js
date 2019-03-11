const sidenavOverlay = document.querySelector('.sidenav-overlay'),
icon = document.querySelector('.icon'),
header = document.querySelector('header');
icon.addEventListener('click', () => {
	header.classList.toggle('active');
});
sidenavOverlay.addEventListener('click', () => {
	header.classList.remove('active');
});