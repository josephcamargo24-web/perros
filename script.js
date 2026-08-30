// ===============================
// PERSONALIZA TODO AQUÍ ❤️
// ===============================
const CONFIG = {
  // CAMBIA AQUÍ: tu nombre y el nombre de ella
  myName: 'Tu nombre',
  herName: 'Nombre de ella',

  // CAMBIA AQUÍ: frase principal de la página
  mainPhrase: 'Desde que llegaste, hasta los días normales se sienten especiales.',

  // CAMBIA AQUÍ: fecha de inicio de la relación en formato AAAA-MM-DD
  relationshipStartDate: '2024-01-01',

  // CAMBIA AQUÍ: déjalo en null para calcular automáticamente desde la fecha, o escribe un número fijo
  relationshipDaysOverride: 63,

  // CAMBIA AQUÍ: mensaje final de la sorpresa
  finalMessage: `Si tuviera que elegir una vez más dónde quedarme, volvería siempre a tus brazos, escuchar tus risas y seguir teniendo una historia tan bonita que estamos construyendo tú y yo juntos. Y si me preguntan de qué me arrepiento de nuestro pasado, diría que nada, porque es lo que nos ha tenido donde estamos ahora, y eso es lo que me hace más feliz ahora mismo.

Y la verdad, no me quedan palabras para expresar lo mucho que te amo y lo mucho que deseo estar contigo día tras día, y ese esfuerzo de hacerme mejorar para poder demostrarte a ti que estoy dispuesto a construir un futuro, ladrillo por ladrillo, a tu lado.

Espero que todo lo que estemos haciendo no quede en vano y que no lo haya tirado a la basura. Espero que esto que estamos haciendo tenga frutos y sea próspero, y podamos demostrarle a todo el mundo lo que es amarte desde la adolescencia.

Te amo mucho, Camila Marín. ❤️`,

  // CAMBIA AQUÍ: mensajes de las cartas
  messages: [
    { title: 'Para cuando estés triste 🥺', text: 'Quiero que recuerdes que no estás sola. Aquí estoy para abrazarte, escucharte y recordarte lo increíble que eres.' },
    { title: 'Para cuando me extrañes ❤️', text: 'Cierra los ojos y piensa en todos esos momentos en los que nos reímos sin razón. Pronto tendremos muchos más.' },
    { title: 'Para cuando necesites recordar cuánto te amo', text: 'Te amo en los días bonitos, en los difíciles, en los simples y en todos los que todavía no llegan.' },
    { title: 'Para un día especial', text: 'Hoy solo quiero celebrarte a ti: tu forma de ser, tu luz y todo lo lindo que haces sentir.' },
    { title: 'Un mensaje que quiero que leas siempre', text: 'Eres mi casualidad favorita, mi paz bonita y mi mejor razón para sonreír.' }
  ],

  // CAMBIA AQUÍ: razones de las tarjetas
  reasons: [
    'Tu sonrisa.', 'Tu forma de ser.', 'Cómo me haces sentir.', 'Tus ocurrencias.', 'La forma en que me miras.',
    'Tu manera de cuidar lo que amas.', 'Tus abrazos.', 'Tu risa.', 'Lo fuerte que eres.', 'Porque contigo todo es mejor.'
  ],

  // CAMBIA AQUÍ: lista de deseos para nuestro futuro
  futurePlans: [
    { icon: '✈️', title: 'Viajar a un lugar que siempre recordemos', text: 'No importa si es lejos o cerca; quiero descubrir el mundo contigo de la mano.' },
    { icon: '📸', title: 'Llenar una galería solo de nosotros', text: 'Fotos bonitas, fotos graciosas y momentos que nos hagan sonreír años después.' },
    { icon: '🏡', title: 'Tener nuestros rinconcitos favoritos', text: 'Cafés, parques, calles y lugares que se vuelvan especiales solo porque fuimos juntos.' },
    { icon: '🎯', title: 'Cumplir metas apoyándonos', text: 'Celebrar tus logros, abrazarte en los días difíciles y crecer sin soltarnos.' },
    { icon: '🍿', title: 'Tener noches simples pero perfectas', text: 'Películas, comida rica, risas, abrazos y esa paz que solo siento contigo.' },
    { icon: '💍', title: 'Seguir eligiéndonos bonito', text: 'Que el futuro no sea presión, sino una promesa diaria de cuidarnos y amarnos mejor.' }
  ]
};

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const app = $('#app');
const welcomeScreen = $('#welcome-screen');
const welcomeTitle = $('#welcome-title');
const welcomeSubtitle = $('#welcome-subtitle');
const welcomeActions = $('#welcome-actions');
let noAttempts = 0;

function enterSite() {
  welcomeScreen.classList.add('hidden');
  app.classList.remove('hidden');
  burstHearts(28);
}

function renderSecondQuestion() {
  welcomeTitle.textContent = '¿Segura? 🥺';
  welcomeSubtitle.textContent = 'Piénsalo bien... hice esto especialmente para ti.';
  welcomeActions.innerHTML = `
    <button class="btn ghost playful-no" id="sure-no-btn">Sí, estoy segura</button>
    <button class="btn primary" id="second-yes-btn">Bueno, sí quiero verlo ❤️</button>
  `;
  $('#second-yes-btn').addEventListener('click', enterSite);
  $('#sure-no-btn').addEventListener('click', renderForcedQuestion);
  addPlayfulMovement($('#sure-no-btn'));
}

function renderForcedQuestion() {
  welcomeTitle.textContent = 'Igual te voy a obligar a verlo JAJAJA ❤️';
  welcomeSubtitle.textContent = 'Con amor, pero sin opción de escape.';
  welcomeActions.innerHTML = '<button class="btn primary pop-in" id="forced-yes-btn">Bueno, vamos 😭❤️</button>';
  $('#forced-yes-btn').addEventListener('click', enterSite);
}

function addPlayfulMovement(button) {
  button.addEventListener('mouseenter', () => {
    const x = `${Math.random() * 34 - 17}px`;
    const y = `${Math.random() * 24 - 12}px`;
    const r = `${Math.random() * 12 - 6}deg`;
    button.style.setProperty('--x', x);
    button.style.setProperty('--y', y);
    button.style.setProperty('--r', r);
    button.classList.add('dodge');
  });
}

$('#yes-btn').addEventListener('click', enterSite);
$('#no-btn').addEventListener('click', () => {
  noAttempts += 1;
  noAttempts === 1 ? renderSecondQuestion() : renderForcedQuestion();
});
addPlayfulMovement($('#no-btn'));

function applyConfig() {
  $('#my-name').textContent = CONFIG.myName;
  $('#her-name').textContent = CONFIG.herName;
  $('#main-phrase').textContent = CONFIG.mainPhrase;

  const start = new Date(`${CONFIG.relationshipStartDate}T00:00:00`);
  const today = new Date();
  const calculatedDays = Math.max(0, Math.floor((today - start) / 86400000));
  const daysTogether = Number.isInteger(CONFIG.relationshipDaysOverride) ? CONFIG.relationshipDaysOverride : calculatedDays;
  $('#days-counter').textContent = `${String(daysTogether).padStart(2, '0')} días ❤️`;
}

function setupTabs() {
  $$('.tab').forEach((tab) => {
    tab.addEventListener('click', () => activateTab(tab.dataset.tab));
  });
  $$('[data-jump]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      activateTab(link.dataset.jump);
    });
  });
}

function activateTab(id) {
  $$('.tab').forEach((tab) => tab.classList.toggle('active', tab.dataset.tab === id));
  $$('.tab-panel').forEach((panel) => panel.classList.toggle('active', panel.id === id));
  $('#tabs').classList.remove('open');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderMessages() {
  $('#message-grid').innerHTML = CONFIG.messages.map((message, index) => `
    <button class="message-card reveal" data-index="${index}">
      <span class="envelope">💌</span>
      <strong>${message.title}</strong>
      <p>Toca para abrir esta carta.</p>
    </button>
  `).join('');
  $$('.message-card').forEach((card) => card.addEventListener('click', () => openLetter(CONFIG.messages[card.dataset.index])));
}

function openLetter(message) {
  $('#letter-title').textContent = message.title;
  $('#letter-text').textContent = message.text;
  $('#letter-modal').classList.remove('hidden');
}

function renderReasons() {
  $('#reasons-grid').innerHTML = CONFIG.reasons.map((reason) => `
    <button class="reason-card reveal">
      <span class="reason-inner">
        <span class="reason-front">Haz clic para descubrirlo...</span>
        <span class="reason-back">${reason} ❤️</span>
      </span>
    </button>
  `).join('');
  $$('.reason-card').forEach((card) => card.addEventListener('click', () => card.classList.toggle('flipped')));
}

function renderFuture() {
  $('#future-grid').innerHTML = CONFIG.futurePlans.map((plan) => `
    <article class="future-card reveal">
      <span class="future-icon">${plan.icon}</span>
      <h3>${plan.title}</h3>
      <p>${plan.text}</p>
    </article>
  `).join('');
}

function setupGallery() {
  $$('.gallery-item').forEach((item) => {
    item.addEventListener('click', () => {
      $('#lightbox-img').src = item.querySelector('img').src;
      $('#lightbox-caption').textContent = item.querySelector('figcaption').textContent;
      $('#lightbox').classList.remove('hidden');
    });
  });
}

function burstHearts(amount = 18) {
  for (let i = 0; i < amount; i += 1) {
    const heart = document.createElement('span');
    heart.className = 'heart-drop';
    heart.textContent = ['❤️', '💕', '💗', '♡'][Math.floor(Math.random() * 4)];
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.fontSize = `${Math.random() * 18 + 16}px`;
    heart.style.animationDuration = `${Math.random() * 2 + 2.5}s`;
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4800);
  }
}

function setupSurprise() {
  $('#gift-box').addEventListener('click', () => {
    $('#gift-box').classList.add('open');
    $('#final-message').textContent = CONFIG.finalMessage;
    $('#final-message').classList.remove('hidden');
    burstHearts(42);
  });
}

function setupUi() {
  $('#menu-toggle').addEventListener('click', () => $('#tabs').classList.toggle('open'));
  $('#back-top').addEventListener('click', () => activateTab('home'));
  $('#lightbox-close').addEventListener('click', () => $('#lightbox').classList.add('hidden'));
  $('#modal-close').addEventListener('click', () => $('#letter-modal').classList.add('hidden'));
  $('#lightbox').addEventListener('click', (event) => event.target.id === 'lightbox' && $('#lightbox').classList.add('hidden'));
  $('#letter-modal').addEventListener('click', (event) => event.target.id === 'letter-modal' && $('#letter-modal').classList.add('hidden'));

  document.addEventListener('mousemove', (event) => {
    const cursor = $('.cursor-heart');
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
    cursor.style.opacity = '0.65';
  });
}

applyConfig();
setupTabs();
renderMessages();
renderReasons();
renderFuture();
setupGallery();
setupSurprise();
setupUi();
