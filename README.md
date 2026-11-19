# Nô Linda — Calçados, Bolsas e Acessórios

Recriação modernizada do projeto de TCC (2018) originalmente publicado em [TCC-INF-2018-N-Linda](https://github.com/feliperypl/TCC-INF-2018-N-Linda), mantendo a essência da marca **Nô Linda** (Taquara - RS) com **HTML5, CSS3 e JavaScript puros**.

## Principais melhorias em relação à versão de 2018

- **100% responsivo**: menu mobile em drawer, grid fluido para celulares, tablets e desktops (na versão original, a barra de navegação e o formulário de contato ficavam ocultos abaixo de 1280px).
- **Vitrine interativa de produtos**: filtros por categoria (`Todos`, `Botas`, `Calçados`, `Bolsas`, `Acessórios`), modal/lightbox com navegação por teclado e consulta direta no WhatsApp por coleção.
- **Carrossel modernizado**: suporte a toque (swipe), pausa ao passar o mouse, legenda dinâmica, contador e indicadores acessíveis (substituindo `document.write` e `setInterval` fixo).
- **Contato integrado ao WhatsApp**: validação de formulário no front-end, formatação automática da mensagem para `wa.me/5551984319881`, confirmação visual e botões de copiar telefone/endereço.
- **Performance e otimização de mídia**: imagens reais da loja otimizadas (~18,6 MB → ~933 KB, redução de ~95%) preservando a qualidade visual.
- **Identidade visual preservada e atualizada**: paleta rosa original (`#E3556A` e `#FFD9E4`) e fonte caligráfica original `Levitee Demo` no logotipo, combinadas com `Playfair Display` e `Plus Jakarta Sans`.

## Estrutura de pastas

```text
lojaNoLinda/
├── index.html
├── README.md
├── assets/
│   ├── fonts/
│   │   └── LeviteeDemo.{woff2,woff,ttf}
│   └── images/
│       ├── header-bg.jpg
│       └── produtos_1.jpg ... produtos_7.jpg
├── css/
│   └── style.css
└── js/
    └── main.js
```

## Como executar localmente

Por ser HTML/CSS/JS puro, você pode abrir o `index.html` diretamente no navegador ou subir um servidor estático local:

```bash
python3 -m http.server 8080
```

Depois acesse `http://localhost:8080`.

## Créditos

- Loja: **Nô Linda — Calçados, Bolsas e Acessórios** (Rua Pinheiro Machado, 1133 — Centro, Taquara - RS)
- Autor original do TCC (2018): **Felipe José Rypl**
