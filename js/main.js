/* ==========================================================================
   Nô Linda — Calçados, Bolsas e Acessórios
   Interatividade: Carrossel, Vitrine Filtrável, Lightbox e WhatsApp
   ========================================================================== */

(() => {
  'use strict';

  const WHATSAPP_NUMBER = '5551984319881';

  const CATEGORY_LABELS = {
    todos: 'Todos',
    botas: 'Botas',
    calcados: 'Calçados',
    bolsas: 'Bolsas',
    acessorios: 'Acessórios',
  };

  /**
   * Coleções reais da loja Nô Linda (fotos do repositório original do TCC 2018)
   */
  const PRODUCTS = [
    {
      id: 'colecao-botas-bolsas',
      title: 'Coturnos & Bolsas Estruturadas',
      image: 'assets/images/produtos_1.jpg',
      alt: 'Coturnos em camurça, cinza e preto ao lado de bolsas estruturadas em tons neutros e textura croco na loja Nô Linda',
      categories: ['botas', 'bolsas'],
      shortDescription:
        'Combinação versátil de coturnos tratorados em tons terrosos e escuros com bolsas estruturadas de acabamento marcante.',
      fullDescription:
        'Destaque da nossa vitrine de inverno: coturnos confortáveis com amarração em camurça marrom, grafite e preto, acompanhados por bolsas amplas em textura croco e caramelo para compor produções elegantes no dia a dia.',
      tags: ['Coturnos', 'Camurça', 'Textura Croco'],
      highlights: [
        'Modelos com salto bloco confortável para uso prolongado',
        'Bolsas estruturadas com alça de ombro e ótimo espaço interno',
        'Consulte numerações e cores disponíveis pelo WhatsApp',
      ],
    },
    {
      id: 'vitrine-vermelho-verniz',
      title: 'Vitrine Vermelho & Verniz',
      image: 'assets/images/produtos_2.jpg',
      alt: 'Vitrine com botas vermelhas em verniz, mocassins, oxfords pretos, bolsa vermelha e pulseiras na Nô Linda',
      categories: ['calcados', 'bolsas', 'acessorios'],
      shortDescription:
        'Botas de cano curto, mocassins e oxfords em verniz com bolsas vermelhas e acessórios que iluminam qualquer produção.',
      fullDescription:
        'Uma seleção cheia de personalidade: botas e mocassins em verniz vermelho e preto, sapatos oxford de solado tratorado e bolsas coordenadas nos nichos rosa da Nô Linda, perfeitos para looks modernos.',
      tags: ['Verniz', 'Mocassim & Oxford', 'Bolsas'],
      highlights: [
        'Acabamento em verniz de alto brilho em vermelho e preto',
        'Oxfords e mocassins estilosos para trabalho ou passeio',
        'Bolsas tiracolo e pulseiras combinando na vitrine',
      ],
    },
    {
      id: 'botas-cano-curto-camurca',
      title: 'Trio de Botas Cano Curto',
      image: 'assets/images/produtos_3.jpg',
      alt: 'Três botas femininas de cano curto em camurça marrom, caramelo e bege com franjas na Nô Linda',
      categories: ['botas'],
      shortDescription:
        'Coturno dobrável com detalhe étnico e botas de salto bloco em camurça caramelo e bege com franjas.',
      fullDescription:
        'Conforto e charme em três propostas diferentes: coturno marrom com cano dobrável estampado, bota caramelo de salto bloco em madeira e bota bege em camurça com franjas laterais e detalhe texturizado.',
      tags: ['Cano Curto', 'Salto Bloco', 'Franjas'],
      highlights: [
        'Tons neutros fáceis de combinar com jeans, vestidos e tricôs',
        'Salto bloco estável e zíper lateral prático',
        'Acabamento macio em camurça de alta qualidade',
      ],
    },
    {
      id: 'scarpins-festas-acessorios',
      title: 'Scarpins, Festas & Bijuterias',
      image: 'assets/images/produtos_4.jpg',
      alt: 'Scarpins em preto com tachas, rosé metalizado e vermelho verniz expostos com brincos e cintos na loja Nô Linda',
      categories: ['calcados', 'acessorios'],
      shortDescription:
        'Scarpins de salto fino em preto com tachas, rosé metalizado e vermelho verniz, ao lado de brincos, pulseiras e cintos.',
      fullDescription:
        'Para momentos especiais ou produções sofisticadas: scarpin preto estilo tiras com tachas douradas, scarpin rosé metalizado com brilho no tornozelo e clássico scarpin vermelho verniz, além de sapatilhas e acessórios delicados.',
      tags: ['Scarpins', 'Festas', 'Brincos & Cintos'],
      highlights: [
        'Scarpins clássicos e modernos para eventos, formaturas e jantares',
        'Variedade de sapatilhas, cintos e brincos para finalizar o look',
        'Atendimento personalizado para ajudar na escolha ideal',
      ],
    },
    {
      id: 'bolsa-lenco-nichos',
      title: 'Bolsa Estruturada & Acessórios',
      image: 'assets/images/produtos_5.jpg',
      alt: 'Bolsa vermelha estruturada com lenço estampado, pulseiras e calçados femininos nos nichos rosa da Nô Linda',
      categories: ['bolsas', 'acessorios', 'calcados'],
      shortDescription:
        'Bolsa feminina em vermelho vibrante com lenço delicado, acompanhada de pulseiras e calçados femininos.',
      fullDescription:
        'A peça-chave que transforma o visual: bolsa estruturada em tom vermelho coral com alça dupla, fivela dourada e lenço decorativo, exposta junto a pulseiras metalizadas e calçados femininos em verniz e salto bloco.',
      tags: ['Bolsa Estruturada', 'Lenços', 'Pulseiras'],
      highlights: [
        'Alça de mão e alça tiracolo removível para maior praticidade',
        'Detalhes metálicos dourados e acabamento refinado',
        'Diversas opções de bijuterias e carteiras na loja',
      ],
    },
    {
      id: 'prateleira-bolsas-tenis-sandalias',
      title: 'Bolsas, Tênis Casuais & Sandálias',
      image: 'assets/images/produtos_6.jpg',
      alt: 'Prateleiras iluminadas com bolsas caramelo, bege vazado e preta, além de tênis casuais, slip-ons e sandálias',
      categories: ['bolsas', 'calcados'],
      shortDescription:
        'Bolsas em tons caramelo, creme recortado a laser e preto, combinadas com tênis slip-on, plataformas e sandálias.',
      fullDescription:
        'Nossa parede iluminada reúne o melhor da moda casual-chique: bolsas em caramelo com barbicacho, modelo bege com recorte a laser e bolsa preta estruturada, além de tênis brancos, metalizados, mules e sandálias variadas.',
      tags: ['Tênis & Slip-on', 'Sandálias', 'Bolsas Dia a Dia'],
      highlights: [
        'Bolsas amplas e médias em cores neutras e atemporais',
        'Tênis casuais, mules e sandálias leves para todas as estações',
        'Múltiplos estilos em um só lugar no Centro de Taquara',
      ],
    },
    {
      id: 'colecao-botas-cano-alto',
      title: 'Botas Montaria & Cano Alto',
      image: 'assets/images/produtos_7.jpg',
      alt: 'Botas femininas de cano alto em marrom e preto com fivelas douradas e modelos de cano curto com franjas e animal print',
      categories: ['botas'],
      shortDescription:
        'Botas de cano alto com fivelas douradas e modelos curtos em animal print, camurça e franjas.',
      fullDescription:
        'Um verdadeiro destaque para os dias mais frios: botas montaria e cano alto em preto e café com fivelas delicadas, ao lado de ankle boots em animal print, camurça com franjas e modelos clássicos com salto baixo.',
      tags: ['Montaria', 'Cano Alto', 'Animal Print'],
      highlights: [
        'Botas cano alto estruturadas em preto e tons terrosos',
        'Ankle boots com franjas, fivelas e estampa snake',
        'Opções de salto baixo e médio para máximo conforto',
      ],
    },
  ];

  /* ========================================================================
     Helpers
     ======================================================================== */

  function buildWhatsAppUrl(message) {
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  let toastTimer = null;
  function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.hidden = false;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.hidden = true;
    }, 3000);
  }

  async function copyToClipboard(text, successMessage = 'Copiado para a área de transferência!') {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        const helper = document.createElement('textarea');
        helper.value = text;
        helper.style.position = 'fixed';
        helper.style.opacity = '0';
        document.body.appendChild(helper);
        helper.select();
        document.execCommand('copy');
        document.body.removeChild(helper);
      }
      showToast(successMessage);
    } catch {
      showToast('Não foi possível copiar automaticamente.');
    }
  }

  /* ========================================================================
     Header, Scroll Progress, Active Section & Back-to-Top
     ======================================================================== */

  function initHeaderAndScroll() {
    const header = document.getElementById('site-header');
    const progressBar = document.getElementById('scroll-progress');
    const backToTop = document.getElementById('back-to-top');
    const navLinks = Array.from(document.querySelectorAll('.nav-link'));
    const sections = navLinks
      .map((link) => document.querySelector(link.getAttribute('href')))
      .filter(Boolean);

    function updateScrollUI() {
      const y = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, Math.max(0, (y / docHeight) * 100)) : 0;

      if (progressBar) {
        progressBar.style.width = `${pct.toFixed(2)}%`;
      }
      if (header) {
        header.classList.toggle('is-scrolled', y > 24);
      }
      if (backToTop) {
        backToTop.hidden = y < 420;
      }
    }

    window.addEventListener('scroll', updateScrollUI, { passive: true });
    window.addEventListener('resize', updateScrollUI, { passive: true });
    updateScrollUI();

    if (backToTop) {
      backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Active nav highlight via IntersectionObserver
    if ('IntersectionObserver' in window && sections.length) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const id = `#${entry.target.id}`;
            navLinks.forEach((link) => {
              link.classList.toggle('is-active', link.getAttribute('href') === id);
            });
          });
        },
        { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
      );
      sections.forEach((sec) => observer.observe(sec));
    }
  }

  /* ========================================================================
     Mobile Drawer
     ======================================================================== */

  function initMobileDrawer() {
    const toggle = document.getElementById('menu-toggle');
    const drawer = document.getElementById('mobile-drawer');
    const closeBtn = document.getElementById('drawer-close');
    const backdrop = document.getElementById('drawer-backdrop');
    const links = document.querySelectorAll('.drawer-link');

    if (!toggle || !drawer || !backdrop) return;

    function openDrawer() {
      backdrop.hidden = false;
      requestAnimationFrame(() => {
        backdrop.classList.add('is-open');
        drawer.classList.add('is-open');
      });
      drawer.setAttribute('aria-hidden', 'false');
      toggle.setAttribute('aria-expanded', 'true');
      document.body.classList.add('no-scroll');
      if (closeBtn) closeBtn.focus();
    }

    function closeDrawer() {
      backdrop.classList.remove('is-open');
      drawer.classList.remove('is-open');
      drawer.setAttribute('aria-hidden', 'true');
      toggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('no-scroll');
      setTimeout(() => {
        if (!drawer.classList.contains('is-open')) {
          backdrop.hidden = true;
        }
      }, 300);
    }

    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      if (expanded) closeDrawer();
      else openDrawer();
    });

    if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
    backdrop.addEventListener('click', closeDrawer);
    links.forEach((link) => link.addEventListener('click', closeDrawer));

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
        closeDrawer();
        toggle.focus();
      }
    });
  }

  /* ========================================================================
     Store Carousel
     ======================================================================== */

  function initCarousel(openModalById) {
    const track = document.getElementById('carousel-track');
    const dotsContainer = document.getElementById('carousel-dots');
    const prevBtn = document.getElementById('carousel-prev');
    const nextBtn = document.getElementById('carousel-next');
    const captionEl = document.getElementById('carousel-caption');
    const counterEl = document.getElementById('carousel-counter');
    const carousel = document.getElementById('store-carousel');

    if (!track || !dotsContainer || !carousel) return;

    let current = 0;
    let timer = null;
    const total = PRODUCTS.length;

    // Build slides & dots
    PRODUCTS.forEach((item, index) => {
      const slide = document.createElement('div');
      slide.className = 'carousel-slide';
      slide.innerHTML = `<img src="${item.image}" alt="${item.alt}" loading="${index === 0 ? 'eager' : 'lazy'}" />`;
      slide.style.cursor = 'pointer';
      slide.addEventListener('click', () => openModalById(item.id));
      track.appendChild(slide);

      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'carousel-dot';
      dot.setAttribute('role', 'tab');
      dot.setAttribute('aria-label', `Ver foto ${index + 1}: ${item.title}`);
      dot.addEventListener('click', () => {
        goTo(index);
        restartAutoplay();
      });
      dotsContainer.appendChild(dot);
    });

    const dots = Array.from(dotsContainer.querySelectorAll('.carousel-dot'));

    function goTo(index) {
      current = (index + total) % total;
      track.style.transform = `translateX(-${current * 100}%)`;
      if (captionEl) captionEl.textContent = PRODUCTS[current].title;
      if (counterEl) counterEl.textContent = `${current + 1} / ${total}`;
      dots.forEach((dot, idx) => {
        const active = idx === current;
        dot.classList.toggle('is-active', active);
        dot.setAttribute('aria-selected', String(active));
      });
    }

    function startAutoplay() {
      stopAutoplay();
      timer = setInterval(() => goTo(current + 1), 6500);
    }

    function stopAutoplay() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    function restartAutoplay() {
      startAutoplay();
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        goTo(current - 1);
        restartAutoplay();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        goTo(current + 1);
        restartAutoplay();
      });
    }

    // Pause on hover / focus
    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
    carousel.addEventListener('focusin', stopAutoplay);
    carousel.addEventListener('focusout', startAutoplay);

    // Touch swipe support
    let touchStartX = 0;
    carousel.addEventListener(
      'touchstart',
      (e) => {
        touchStartX = e.changedTouches[0].clientX;
        stopAutoplay();
      },
      { passive: true }
    );
    carousel.addEventListener(
      'touchend',
      (e) => {
        const delta = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(delta) > 45) {
          goTo(delta < 0 ? current + 1 : current - 1);
        }
        startAutoplay();
      },
      { passive: true }
    );

    goTo(0);
    startAutoplay();
  }

  /* ========================================================================
     Interactive Vitrine & Product Modal / Lightbox
     ======================================================================== */

  function initVitrineAndModal() {
    const grid = document.getElementById('vitrine-grid');
    const statusEl = document.getElementById('vitrine-status');
    const filterButtons = Array.from(document.querySelectorAll('.filter-pill'));

    const modal = document.getElementById('product-modal');
    const modalBackdrop = document.getElementById('modal-backdrop');
    const modalClose = document.getElementById('modal-close');
    const modalPrev = document.getElementById('modal-prev');
    const modalNext = document.getElementById('modal-next');
    const modalImage = document.getElementById('modal-image');
    const modalBadges = document.getElementById('modal-badges');
    const modalTitle = document.getElementById('modal-title');
    const modalDescription = document.getElementById('modal-description');
    const modalHighlights = document.getElementById('modal-highlights');
    const modalWaBtn = document.getElementById('modal-wa-btn');

    let activeFilter = 'todos';
    let currentFilteredList = [...PRODUCTS];
    let modalList = [...PRODUCTS];
    let modalIndex = 0;
    let lastFocusedEl = null;

    // Populate filter counts
    Object.keys(CATEGORY_LABELS).forEach((cat) => {
      const countEl = document.querySelector(`[data-count="${cat}"]`);
      if (!countEl) return;
      const count =
        cat === 'todos'
          ? PRODUCTS.length
          : PRODUCTS.filter((p) => p.categories.includes(cat)).length;
      countEl.textContent = String(count);
    });

    function renderGrid(filter) {
      if (!grid) return;
      activeFilter = filter;
      currentFilteredList =
        filter === 'todos'
          ? [...PRODUCTS]
          : PRODUCTS.filter((item) => item.categories.includes(filter));

      grid.innerHTML = '';

      currentFilteredList.forEach((item, index) => {
        const waUrl = buildWhatsAppUrl(
          `Olá! Vi "${item.title}" na vitrine do site da Nô Linda e gostaria de saber mais sobre modelos e numerações disponíveis.`
        );

        const badgesHtml = item.categories
          .map((cat) => `<span class="category-badge">${CATEGORY_LABELS[cat] || cat}</span>`)
          .join('');

        const tagsHtml = item.tags
          .map((tag) => `<span class="product-tag">${tag}</span>`)
          .join('');

        const card = document.createElement('article');
        card.className = 'product-card';
        card.style.animationDelay = `${index * 60}ms`;
        card.innerHTML = `
          <div class="product-media" data-open-modal="${item.id}" role="button" tabindex="0" aria-label="Ampliar detalhes de ${item.title}">
            <img src="${item.image}" alt="${item.alt}" loading="lazy" width="1400" height="787" />
            <div class="product-badges">${badgesHtml}</div>
            <span class="product-zoom-hint" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5M11 8v6M8 11h6" />
              </svg>
            </span>
          </div>
          <div class="product-content">
            <h3 class="product-title">${item.title}</h3>
            <p class="product-desc">${item.shortDescription}</p>
            <div class="product-tags">${tagsHtml}</div>
            <div class="product-actions">
              <button type="button" class="btn btn-ghost btn-sm" data-open-modal="${item.id}">
                Ver detalhes
              </button>
              <a
                href="${waUrl}"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-soft-rose btn-sm"
              >
                <svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.49 0 .14 5.35.14 11.92c0 2.1.55 4.15 1.59 5.96L0 24l6.29-1.65a11.89 11.89 0 0 0 5.77 1.47h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.47-8.42ZM12.07 21.8h-.01a9.87 9.87 0 0 1-5.04-1.38l-.36-.21-3.73.98 1-3.64-.24-.37a9.87 9.87 0 0 1-1.52-5.26c0-5.46 4.44-9.9 9.91-9.9 2.65 0 5.13 1.03 7 2.9a9.83 9.83 0 0 1 2.9 7c0 5.47-4.45 9.88-9.91 9.88Z" />
                </svg>
                <span>Consultar</span>
              </a>
            </div>
          </div>
        `;
        grid.appendChild(card);
      });

      if (statusEl) {
        const label = CATEGORY_LABELS[filter] || filter;
        const n = currentFilteredList.length;
        statusEl.textContent =
          filter === 'todos'
            ? `Exibindo todas as ${n} coleções da vitrine`
            : `Exibindo ${n} ${n === 1 ? 'coleção' : 'coleções'} em "${label}"`;
      }
    }

    function renderModalItem(item) {
      if (!item || !modal) return;
      modalImage.src = item.image;
      modalImage.alt = item.alt;
      modalTitle.textContent = item.title;
      modalDescription.textContent = item.fullDescription;
      modalBadges.innerHTML = item.categories
        .map((cat) => `<span class="category-badge">${CATEGORY_LABELS[cat] || cat}</span>`)
        .join('');
      modalHighlights.innerHTML = item.highlights.map((h) => `<li>${h}</li>`).join('');
      modalWaBtn.href = buildWhatsAppUrl(
        `Olá! Gostaria de consultar disponibilidade sobre "${item.title}" que vi no site da Nô Linda.`
      );
    }

    function openModalById(id) {
      if (!modal) return;
      modalList = currentFilteredList.some((p) => p.id === id) ? currentFilteredList : PRODUCTS;
      modalIndex = Math.max(
        0,
        modalList.findIndex((p) => p.id === id)
      );
      lastFocusedEl = document.activeElement;
      renderModalItem(modalList[modalIndex]);
      modal.hidden = false;
      document.body.classList.add('no-scroll');
      if (modalClose) modalClose.focus();
    }

    function closeModal() {
      if (!modal || modal.hidden) return;
      modal.hidden = true;
      document.body.classList.remove('no-scroll');
      if (lastFocusedEl && typeof lastFocusedEl.focus === 'function') {
        lastFocusedEl.focus();
      }
    }

    function stepModal(delta) {
      if (!modalList.length) return;
      modalIndex = (modalIndex + delta + modalList.length) % modalList.length;
      renderModalItem(modalList[modalIndex]);
    }

    // Filter pill click listeners
    filterButtons.forEach((btn) => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter || 'todos';
        filterButtons.forEach((b) => {
          const active = b === btn;
          b.classList.toggle('is-active', active);
          b.setAttribute('aria-selected', String(active));
        });
        renderGrid(filter);
      });
    });

    // Delegate click & keyboard on cards to open modal
    if (grid) {
      grid.addEventListener('click', (e) => {
        const trigger = e.target.closest('[data-open-modal]');
        if (!trigger) return;
        openModalById(trigger.getAttribute('data-open-modal'));
      });

      grid.addEventListener('keydown', (e) => {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        const trigger = e.target.closest('.product-media[data-open-modal]');
        if (!trigger) return;
        e.preventDefault();
        openModalById(trigger.getAttribute('data-open-modal'));
      });
    }

    // Modal controls
    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalBackdrop) modalBackdrop.addEventListener('click', closeModal);
    if (modalPrev) modalPrev.addEventListener('click', () => stepModal(-1));
    if (modalNext) modalNext.addEventListener('click', () => stepModal(1));

    document.addEventListener('keydown', (e) => {
      if (!modal || modal.hidden) return;
      if (e.key === 'Escape') closeModal();
      else if (e.key === 'ArrowLeft') stepModal(-1);
      else if (e.key === 'ArrowRight') stepModal(1);
    });

    renderGrid('todos');

    return { openModalById };
  }

  /* ========================================================================
     Contact Form -> WhatsApp Integration + Copy Buttons
     ======================================================================== */

  function initContactFormAndCopy() {
    const form = document.getElementById('contact-form');
    const fnameInput = document.getElementById('fname');
    const lnameInput = document.getElementById('lname');
    const interestInput = document.getElementById('interest');
    const subjectInput = document.getElementById('subject');

    const fnameError = document.getElementById('fname-error');
    const lnameError = document.getElementById('lname-error');
    const subjectError = document.getElementById('subject-error');

    const feedbackBox = document.getElementById('form-feedback');
    const feedbackSummary = document.getElementById('feedback-summary');
    const feedbackWaLink = document.getElementById('feedback-wa-link');
    const feedbackCopyBtn = document.getElementById('feedback-copy-btn');

    let lastFormattedMessage = '';

    function setFieldError(input, errorEl, msg) {
      if (!input || !errorEl) return;
      input.classList.toggle('is-invalid', Boolean(msg));
      errorEl.textContent = msg;
    }

    if (form) {
      [
        [fnameInput, fnameError],
        [lnameInput, lnameError],
        [subjectInput, subjectError],
      ].forEach(([input, errorEl]) => {
        if (!input) return;
        input.addEventListener('input', () => setFieldError(input, errorEl, ''));
      });

      form.addEventListener('submit', (e) => {
        e.preventDefault();

        const firstName = fnameInput.value.trim();
        const lastName = lnameInput.value.trim();
        const interest = interestInput ? interestInput.value : 'Atendimento';
        const message = subjectInput.value.trim();

        let valid = true;

        if (firstName.length < 2) {
          setFieldError(fnameInput, fnameError, 'Informe seu primeiro nome.');
          valid = false;
        }
        if (lastName.length < 2) {
          setFieldError(lnameInput, lnameError, 'Informe seu sobrenome.');
          valid = false;
        }
        if (message.length < 6) {
          setFieldError(subjectInput, subjectError, 'Escreva uma mensagem um pouco mais detalhada.');
          valid = false;
        }

        if (!valid) {
          const firstInvalid = form.querySelector('.is-invalid');
          if (firstInvalid) firstInvalid.focus();
          return;
        }

        const fullName = `${firstName} ${lastName}`;
        lastFormattedMessage = [
          `Olá, Nô Linda! Meu nome é *${fullName}*.`,
          `Assunto: *${interest}*`,
          '',
          message,
        ].join('\n');

        const waUrl = buildWhatsAppUrl(lastFormattedMessage);

        if (feedbackBox && feedbackSummary && feedbackWaLink) {
          feedbackSummary.textContent = `Olá, ${firstName}! Abrimos uma conversa com a Nô Linda no WhatsApp (51) 98431-9881 com sua mensagem preenchida.`;
          feedbackWaLink.href = waUrl;
          feedbackBox.hidden = false;
        }

        window.open(waUrl, '_blank', 'noopener,noreferrer');
        showToast('Redirecionando para o WhatsApp da Nô Linda...');
        form.reset();
      });
    }

    if (feedbackCopyBtn) {
      feedbackCopyBtn.addEventListener('click', () => {
        if (lastFormattedMessage) {
          copyToClipboard(lastFormattedMessage, 'Mensagem copiada!');
        }
      });
    }

    // Copy buttons (phone & address)
    document.querySelectorAll('[data-copy]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const value = btn.getAttribute('data-copy');
        if (value) copyToClipboard(value, `Copiado: ${value}`);
      });
    });
  }

  /* ========================================================================
     Scroll Reveal Animations
     ======================================================================== */

  function initScrollReveal() {
    const items = document.querySelectorAll('.reveal');
    if (!items.length) return;

    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
    );

    items.forEach((el) => observer.observe(el));
  }

  /* ========================================================================
     Bootstrap
     ======================================================================== */

  document.addEventListener('DOMContentLoaded', () => {
    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    initHeaderAndScroll();
    initMobileDrawer();
    const { openModalById } = initVitrineAndModal();
    initCarousel(openModalById);
    initContactFormAndCopy();
    initScrollReveal();
  });
})();
