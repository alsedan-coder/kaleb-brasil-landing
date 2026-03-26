// JS para navegação suave, animações e envio de formulário
document.addEventListener('DOMContentLoaded', function () {
	// Navegação suave para âncoras
	document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
		anchor.addEventListener('click', function (e) {
			const href = this.getAttribute('href');
			if (href.length > 1 && document.querySelector(href)) {
				e.preventDefault();
				document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
			}
		});
	});

	// Fade-up animation para elementos com .fade-up
	function revealOnScroll() {
		var elements = document.querySelectorAll('.fade-up');
		var windowHeight = window.innerHeight;
		elements.forEach(function(el) {
			var position = el.getBoundingClientRect().top;
			if (position < windowHeight - 40) {
				el.classList.add('visible');
			}
		});
	}
	window.addEventListener('scroll', revealOnScroll);
	revealOnScroll();

	// Envio do formulário (exemplo, sem backend)
	var form = document.getElementById('leadForm');
	if (form) {
		form.addEventListener('submit', function(e) {
			e.preventDefault();
			alert('Obrigado! Sua mensagem foi enviada.');
			form.reset();
		});
	}
});