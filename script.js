/* =====================================================
   PULSE BEAMS ANIMATION
   Anima os gradientes SVG para criar efeito de pulso
===================================================== */
function initPulseBeams() {
  const gradients = document.querySelectorAll('linearGradient[id^="pulseGradient"]');
  
  gradients.forEach((gradient, index) => {
    const animationDuration = 2000 + (index * 200); // Delay different for each beam
    let startTime = null;
    
    function animate(currentTime) {
      if (startTime === null) startTime = currentTime;
      const elapsedTime = (currentTime - startTime) % animationDuration;
      const progress = elapsedTime / animationDuration;
      
      // Animate gradient position
      const x1 = 30 + (Math.sin(progress * Math.PI * 2) * 40);
      const x2 = 50 + (Math.sin(progress * Math.PI * 2 + 0.5) * 40);
      const y1 = 20 + (Math.cos(progress * Math.PI * 2) * 30);
      const y2 = 60 + (Math.cos(progress * Math.PI * 2 + 0.5) * 30);
      
      gradient.setAttribute('x1', x1 + '%');
      gradient.setAttribute('x2', x2 + '%');
      gradient.setAttribute('y1', y1 + '%');
      gradient.setAttribute('y2', y2 + '%');
      
      requestAnimationFrame(animate);
    }
    
    requestAnimationFrame(animate);
  });
}

// Initialize pulse beams when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initPulseBeams);
} else {
  initPulseBeams();
}


/* -------------------------------------------------
   1. SCROLL FADE-UP
   Ativa a classe .visible nos elementos .fade-up
   conforme o usuário vai descendo a página.
------------------------------------------------- */
const fadeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target); // para de observar após animar
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll('.fade-up').forEach((el) => fadeObserver.observe(el));


/* -------------------------------------------------
   2. MÁSCARA DE TELEFONE (campo WhatsApp)
   Formata automaticamente: (19) 9 0000-0000
------------------------------------------------- */
const wppInput = document.getElementById('whatsapp');

if (wppInput) {
  wppInput.addEventListener('input', function () {
    let v = this.value.replace(/\D/g, '').slice(0, 11);

    if (v.length > 10) {
      v = v.replace(/^(\d{2})(\d{5})(\d{4})$/, '($1) $2-$3');
    } else if (v.length > 6) {
      v = v.replace(/^(\d{2})(\d{4})(\d{0,4})$/, '($1) $2-$3');
    } else if (v.length > 2) {
      v = v.replace(/^(\d{2})(\d{0,5})$/, '($1) $2');
    } else {
      v = v.replace(/^(\d{0,2})$/, '($1');
    }

    this.value = v;
  });
}


/* -------------------------------------------------
   3. FORMULÁRIO DE CAPTURA
   Valida os campos obrigatórios e exibe mensagem
   de sucesso após o envio.

   INTEGRAÇÃO:
   Para conectar a um CRM ou backend, substitua
   o bloco marcado abaixo pela sua chamada fetch().
   Exemplo:
     fetch('https://sua-api.com/leads', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ nome, empresa, email, whatsapp, mensagem })
     });
------------------------------------------------- */
const form        = document.getElementById('leadForm');
const formWrapper = document.getElementById('formWrapper');
const formSuccess = document.getElementById('formSuccess');

if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Coleta dos valores
    const nome      = document.getElementById('nome').value.trim();
    const empresa   = document.getElementById('empresa').value.trim();
    const email     = document.getElementById('email').value.trim();
    const whatsapp  = document.getElementById('whatsapp').value.trim();
    const mensagem  = document.getElementById('mensagem').value.trim();

    // Validação dos campos obrigatórios
    if (!nome || !empresa || !email || !whatsapp) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Por favor, informe um e-mail válido.');
      return;
    }

    /* -----------------------------------------------
       INTEGRAÇÃO — substitua este bloco pelo seu
       fetch() ou SDK do CRM/e-mail desejado.
    ----------------------------------------------- */
    console.log('Lead capturado:', { nome, empresa, email, whatsapp, mensagem });
    /* ----------------------------------------------- */

    // Exibe mensagem de sucesso
    formWrapper.style.display = 'none';
    formSuccess.classList.add('visible');
    formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}
