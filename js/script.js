// Manejo de pestañas
const tabs = document.querySelectorAll('.tab');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Desactivar todas las pestañas y contenidos
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

    // Activar la pestaña seleccionada
    tab.classList.add('active');
    const tabId = tab.getAttribute('data-tab');
    document.getElementById(tabId).classList.add('active');
  });
});

// Mostrar/ocultar consejo
const tipButton = document.getElementById('show-tip');
const tip = document.getElementById('tip');

tipButton.addEventListener('click', () => {
  if (tip.style.display === 'none') {
    tip.style.display = 'block';
    tipButton.textContent = 'Ocultar consejo';
    // Animación simple
    tip.style.animation = 'fadeIn 0.5s ease-in';
  } else {
    tip.style.display = 'none';
    tipButton.textContent = 'Mostrar consejo útil';
  }
});

// Animación para secciones al hacer scroll
const sections = document.querySelectorAll('.intro-section');

function checkScroll() {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight * 0.8) {
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }
  });
}

// Inicializar secciones con opacidad 0
sections.forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// Verificar posición al cargar y durante el scroll
window.addEventListener('load', checkScroll);
window.addEventListener('scroll', checkScroll);

// Añadir efecto de rebote a los emojis
const emojis = document.querySelectorAll('.emoji');
emojis.forEach(emoji => {
  emoji.addEventListener('mouseover', () => {
    emoji.style.display = 'inline-block';
    emoji.style.animation = 'bounce 0.5s ease';
  });

  emoji.addEventListener('animationend', () => {
    emoji.style.animation = '';
  });
});

// Animación de rebote
const style = document.createElement('style');
style.textContent = `
            @keyframes bounce {
                0%, 100% { transform: translateY(0); }
                50% { transform: translateY(-10px); }
            }
        `;
document.head.appendChild(style);
