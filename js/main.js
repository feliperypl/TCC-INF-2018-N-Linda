/* ==========================================================================
   Nô Linda — Calçados, Bolsas e Acessórios
   Interatividade: Carrossel, Vitrine Filtrável, Lightbox e WhatsApp
   ========================================================================== */

(() => {
  'use strict';

  const WHATSAPP_NUMBER = '5551984319881';

  const CATEGORY_LABELS = {
    todos: 'Todos',
    roupas: 'Roupas',
    bolsas: 'Bolsas',
    calcados: 'Calçados',
    acessorios: 'Acessórios',
  };

  /**
   * Coleções reais e atualizadas da loja Nô Linda (@noeliarypl_nolinda)
   */
  const PRODUCTS = [
    {
      id: 'conjuntos-conforto-bolsas-tenis',
      title: 'Conjuntos Conforto, Bolsas & Tênis',
      image: 'assets/images/look_1.jpg',
      alt: 'Conjuntos confortáveis em caramelo e azul acinzentado com bolsa estruturada branca, mochila nude, colar longo e tênis na Nô Linda',
      categories: ['roupas', 'bolsas', 'calcados', 'acessorios'],
      shortDescription:
        'Conjuntos macios em tons caramelo e azul acinzentado combinados com bolsa estruturada branca, mochila nude e tênis confortáveis.',
      fullDescription:
        'Produções descontraídas e cheias de estilo para o dia a dia: conjuntos coordenados em caramelo e azul suave, acompanhados por bolsa estruturada branca, mochila em tom nude, colar longo com pingente dourado de coração, tênis casual esportivo e slip-on verde menta.',
      tags: ['Conjuntos', 'Bolsa Estruturada', 'Tênis Casuais'],
      highlights: [
        'Conjuntos confortáveis com ótimo caimento para a rotina',
        'Bolsa estruturada branca e mochila nude práticas para o dia a dia',
        'Tênis casuais leves e colar longo para finalizar a produção',
      ],
    },
    {
      id: 'vestido-acetinado-scarpin-matelasse',
      title: 'Vestido Acetinado, Scarpin & Matelassê',
      image: 'assets/images/look_2.jpg',
      alt: 'Vestido midi acetinado champanhe com fenda lateral, bolsa branca matelassê com corrente dourada e scarpin slingback tricolor',
      categories: ['roupas', 'bolsas', 'calcados'],
      shortDescription:
        'Vestido midi acetinado champanhe com fenda lateral, bolsa branca matelassê com corrente dourada e scarpin slingback tricolor.',
      fullDescription:
        'Elegância para celebrar momentos especiais: vestido midi em cetim champanhe com gola frente única e detalhe metálico dourado, combinado com bolsa tiracolo branca em matelassê com alça de corrente e scarpin slingback de bico fino em preto, branco e dourado.',
      tags: ['Festa & Eventos', 'Scarpin Tricolor', 'Matelassê'],
      highlights: [
        'Vestido midi acetinado com caimento fluido e fenda sofisticada',
        'Bolsa branca matelassê com fecho e alça de corrente dourados',
        'Scarpin slingback de bico fino com tiras delicadas no tornozelo',
      ],
    },
    {
      id: 'looks-urbanos-bolsas-destaque',
      title: 'Looks Urbanos com Bolsas de Destaque',
      image: 'assets/images/look_3.jpg',
      alt: 'Duas produções urbanas com bolsa hobo marrom, jeans e tricô mostarda ao lado de look preto e vermelho com bolsa matelassê vermelha',
      categories: ['roupas', 'bolsas', 'calcados', 'acessorios'],
      shortDescription:
        'Duas propostas urbanas versáteis: bolsa hobo marrom com jeans e tricô mostarda, e bolsa matelassê vermelha com look preto e vermelho.',
      fullDescription:
        'Combinações práticas que valorizam cada detalhe: blusa gola alta mostarda, jeans reto, cinto caramelo, bolsa hobo marrom espaçosa e tênis caramelo; ao lado de blusa preta com brilho sutil, calça vermelha, bolsa matelassê vermelha com corrente e tênis preto.',
      tags: ['Bolsa Hobo', 'Matelassê Vermelha', 'Casual Chic'],
      highlights: [
        'Bolsa hobo marrom ampla e bolsa matelassê vermelha tiracolo',
        'Calçados confortáveis em caramelo e preto para usar o dia todo',
        'Cintos e colares coordenados para dar personalidade ao look',
      ],
    },
    {
      id: 'alfaiataria-vinho-baguete-monograma',
      title: 'Alfaiataria Vinho & Baguete Monograma',
      image: 'assets/images/look_4.jpg',
      alt: 'Conjunto monocromático em alfaiataria vinho com calça pantalona, bolsa baguete monograma e rasteirinha caramelo',
      categories: ['roupas', 'bolsas', 'calcados'],
      shortDescription:
        'Conjunto monocromático em tom vinho com calça pantalona, acompanhado de bolsa baguete monograma e rasteirinha caramelo.',
      fullDescription:
        'Sofisticação leve e atemporal: conjunto de alfaiataria na cor vinho com regata decote V e pantalona de cintura marcada com cordão, finalizado com bolsa baguete estampada em monograma com detalhe dourado e rasteirinha em tom caramelo.',
      tags: ['Alfaiataria', 'Monograma', 'Rasteirinha'],
      highlights: [
        'Conjunto pantalona com corte fluido que alonga a silhueta',
        'Bolsa baguete estruturada em monograma com ferragem dourada',
        'Rasteirinha caramelo versátil para dias quentes e passeios',
      ],
    },
    {
      id: 'tons-terrosos-tote-couro-tenis-nude',
      title: 'Tons Terrosos, Bolsa Tote & Tênis Nude',
      image: 'assets/images/look_5.jpg',
      alt: 'Blusa estampada folhagens amarela, calça marrom confortável, bolsa tote em couro café e tênis casual nude',
      categories: ['roupas', 'bolsas', 'calcados'],
      shortDescription:
        'Blusa estampada folhagens, calça marrom confortável, bolsa tote em couro café e tênis casual nude.',
      fullDescription:
        'Paleta natural que nunca sai de moda: blusa leve amarela com estampa botânica marrom, calça reta marrom de cintura elástica, bolsa tote estruturada em couro café com pespontos contrastantes e tênis casual nude ultraconfortável.',
      tags: ['Tons Terrosos', 'Bolsa Tote', 'Tênis Nude'],
      highlights: [
        'Bolsa tote espaçosa em couro marrom café com ótimo acabamento',
        'Calça e blusa leves ideais para trabalho e passeios',
        'Tênis casual em tom nude que combina com tudo',
      ],
    },
    {
      id: 'vermelho-preto-baguete-verniz',
      title: 'Look Vermelho & Preto com Baguete Verniz',
      image: 'assets/images/look_6.jpg',
      alt: 'Blusa vermelha ombro único com laço, saia preta com cinto, bolsa baguete marrom envernizada e tamanco mule preto',
      categories: ['roupas', 'bolsas', 'calcados'],
      shortDescription:
        'Blusa vermelha ombro único com laço, saia preta com cinto, bolsa baguete marrom envernizada e tamanco mule preto.',
      fullDescription:
        'Visual marcante do happy hour ao jantar: blusa vermelha vibrante de um ombro só com detalhe de laço, saia preta estruturada com cinto fino de fivela, bolsa baguete compacta em acabamento verniz marrom e tamanco mule preto minimalista.',
      tags: ['Baguete Verniz', 'Mule Preto', 'Ombro Único'],
      highlights: [
        'Bolsa baguete em verniz brilhoso com alça de ombro elegante',
        'Tamanco mule preto prático, moderno e confortável',
        'Peças versáteis fáceis de combinar juntas ou separadas',
      ],
    },
    {
      id: 'all-jeans-bordado-tote-preta',
      title: 'All Jeans Bordado, Tote Preta & Peep-Toe',
      image: 'assets/images/look_7.jpg',
      alt: 'Colete jeans com bordado floral, calça jeans wide leg, bolsa tote preta estruturada e calçado peep-toe preto',
      categories: ['roupas', 'bolsas', 'calcados'],
      shortDescription:
        'Colete jeans com bordado floral delicado, calça wide leg, bolsa tote preta estruturada e calçado peep-toe preto.',
      fullDescription:
        'Estilo contemporâneo com toque artesanal: colete jeans alongado com bordados florais frontais, calça jeans wide leg de lavagem clara, blusa pink vibrante, bolsa tote preta espaçosa para a rotina e sandália peep-toe preta de salto.',
      tags: ['All Jeans', 'Bolsa Tote Preta', 'Peep-Toe'],
      highlights: [
        'Colete jeans diferenciado com detalhes florais bordados',
        'Bolsa tote preta estruturada ideal para levar tudo o que precisa',
        'Calçado peep-toe preto elegante que valoriza produções com jeans',
      ],
    },
    {
      id: 'jaqueta-bomber-risca-de-giz',
      title: 'Jaqueta Bomber Risca de Giz & Acessórios',
      image: 'assets/images/look_8.jpg',
      alt: 'Jaqueta bomber off-white risca de giz com zíper frontal, argolas douradas, colar escuro e bolsa com lenço',
      categories: ['roupas', 'acessorios', 'bolsas'],
      shortDescription:
        'Jaqueta bomber off-white risca de giz com zíper frontal, combinada com argolas douradas, colar de contas e bolsa com lenço.',
      fullDescription:
        'Peça curinga para elevar produções casuais: jaqueta bomber off-white com padronagem risca de giz, gola clássica, bolsos frontais e zíper contrastante, acompanhada de argolas douradas, colar escuro e bolsa com detalhe de lenço na alça.',
      tags: ['Jaqueta Bomber', 'Risca de Giz', 'Bijuterias'],
      highlights: [
        'Jaqueta bomber estruturada com caimento impecável',
        'Padronagem risca de giz clássica fácil de combinar',
        'Acessórios dourados e bolsa com lenço disponíveis na loja',
      ],
    },
    {
      id: 'colar-perolas-brincos-dourados',
      title: 'Colar de Pérolas & Brincos Dourados',
      image: 'assets/images/look_9.jpg',
      alt: 'Detalhe de colar duplo de pérolas, brinco dourado martelado com pedra âmbar e anel dourado sobre colete de alfaiataria',
      categories: ['acessorios'],
      shortDescription:
        'Mix sofisticado de acessórios com colar duplo de pérolas, brinco dourado martelado com pedra âmbar e anel dourado.',
      fullDescription:
        'Os detalhes que fazem toda a diferença: colar duplo de pérolas com destaque central, brinco dourado texturizado com pedra em tom âmbar e anel vazado dourado, combinados com alfaiataria em tom fendi atemporal.',
      tags: ['Pérolas', 'Brincos Dourados', 'Semijoias'],
      highlights: [
        'Curadoria de semijoias e bijuterias com acabamento marcante',
        'Colar de pérolas e brincos statement para iluminar o rosto',
        'Combinação perfeita para produções de alfaiataria e eventos',
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
            <img src="${item.image}" alt="${item.alt}" loading="lazy" width="1050" height="1400" />
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
     Hero Overlapping Polaroid Carousel
     ======================================================================== */

  function initHeroPolaroids() {
    const showcase = document.getElementById('hero-polaroids');
    const stack = document.getElementById('polaroid-stack');
    const counter = document.getElementById('polaroid-counter');
    const progressFill = document.getElementById('polaroid-progress-fill');
    const prevBtn = document.getElementById('polaroid-prev');
    const nextBtn = document.getElementById('polaroid-next');

    if (!showcase || !stack) return;

    const cards = Array.from(stack.querySelectorAll('.polaroid-card'));
    const total = cards.length;
    if (total < 2) return;

    const INTERVAL_MS = 3600;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let current = 0;
    let timerId = null;
    let isPaused = false;
    let touchStartX = 0;

    function formatNum(n) {
      return String(n).padStart(2, '0');
    }

    function restartProgress() {
      if (!progressFill || prefersReducedMotion) return;
      progressFill.classList.remove('is-running');
      void progressFill.offsetWidth;
      progressFill.classList.add('is-running');
    }

    function updateSlots(animateIncoming = false) {
      cards.forEach((card, idx) => {
        // Distance behind the active card so each new card overlaps on top of previous ones
        const behind = (current - idx + total) % total;

        card.classList.remove('is-entering');

        if (behind === 0) {
          card.setAttribute('data-slot', '0');
          card.setAttribute('aria-hidden', 'false');
          if (animateIncoming && !prefersReducedMotion) {
            void card.offsetWidth;
            card.classList.add('is-entering');
          }
        } else if (behind <= 3) {
          card.setAttribute('data-slot', String(behind));
          card.setAttribute('aria-hidden', 'true');
        } else {
          card.setAttribute('data-slot', 'hidden');
          card.setAttribute('aria-hidden', 'true');
        }
      });

      if (counter) {
        counter.textContent = `${formatNum(current + 1)} / ${formatNum(total)}`;
      }
    }

    function stopAutoplay() {
      if (timerId) {
        clearInterval(timerId);
        timerId = null;
      }
    }

    function startAutoplay() {
      stopAutoplay();
      if (prefersReducedMotion || isPaused) return;
      restartProgress();
      timerId = setInterval(() => {
        goTo(current + 1, true);
      }, INTERVAL_MS);
    }

    function goTo(targetIndex, fromAutoplay = false) {
      current = ((targetIndex % total) + total) % total;
      updateSlots(true);
      if (fromAutoplay) {
        restartProgress();
      } else {
        startAutoplay();
      }
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => goTo(current - 1));
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', () => goTo(current + 1));
    }

    // Click on stack brings the next Polaroid overlapping on top
    stack.addEventListener('click', () => goTo(current + 1));

    // Pause cleanly on hover or keyboard focus
    showcase.addEventListener('mouseenter', () => {
      isPaused = true;
      showcase.classList.add('is-paused');
      stopAutoplay();
    });

    showcase.addEventListener('mouseleave', () => {
      isPaused = false;
      showcase.classList.remove('is-paused');
      startAutoplay();
    });

    showcase.addEventListener('focusin', () => {
      isPaused = true;
      showcase.classList.add('is-paused');
      stopAutoplay();
    });

    showcase.addEventListener('focusout', (e) => {
      if (showcase.contains(e.relatedTarget)) return;
      isPaused = false;
      showcase.classList.remove('is-paused');
      startAutoplay();
    });

    // Touch swipe support on mobile
    stack.addEventListener(
      'touchstart',
      (e) => {
        touchStartX = e.changedTouches[0].clientX;
      },
      { passive: true }
    );

    stack.addEventListener(
      'touchend',
      (e) => {
        const dx = e.changedTouches[0].clientX - touchStartX;
        if (Math.abs(dx) > 40) {
          goTo(dx < 0 ? current + 1 : current - 1);
        }
      },
      { passive: true }
    );

    // Pause when tab is hidden to keep timer & progress bar synced
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        stopAutoplay();
      } else if (!isPaused) {
        startAutoplay();
      }
    });

    // Initial render: show look_1 on top with look_9, look_8, look_7 fanned behind it
    updateSlots(false);
    startAutoplay();
  }

  /* ========================================================================
     Bootstrap
     ======================================================================== */

  document.addEventListener('DOMContentLoaded', () => {
    const yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    initHeaderAndScroll();
    initMobileDrawer();
    initHeroPolaroids();
    const { openModalById } = initVitrineAndModal();
    initCarousel(openModalById);
    initContactFormAndCopy();
    initScrollReveal();
  });
})();
