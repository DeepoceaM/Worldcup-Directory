'use strict';

/* ============================================
   THE 1,248 — Mock Player Data
   (Structural sample — 8 players representing
   the full 1,248-player dataset architecture)
   ============================================ */
const PLAYERS = [
  {
    id: 'p01',
    name: 'Kylian Mbappé',
    number: 10,
    country: 'France',
    countryFlag: '🇫🇷',
    club: 'Real Madrid CF',
    position: 'FWD',
    positionFull: 'Forward',
    photo: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=600&q=80&fm=jpg&fit=crop'
  },
  {
    id: 'p02',
    name: 'Jude Bellingham',
    number: 5,
    country: 'England',
    countryFlag: '🏴',
    club: 'Real Madrid CF',
    position: 'MID',
    positionFull: 'Midfielder',
    photo: 'https://images.unsplash.com/photo-1543351611-58f69d7c1781?w=600&q=80&fm=jpg&fit=crop'
  },
  {
    id: 'p03',
    name: 'Vinícius Júnior',
    number: 7,
    country: 'Brazil',
    countryFlag: '🇧🇷',
    club: 'Real Madrid CF',
    position: 'FWD',
    positionFull: 'Forward',
    photo: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80&fm=jpg&fit=crop'
  },
  {
    id: 'p04',
    name: 'Virgil van Dijk',
    number: 4,
    country: 'Netherlands',
    countryFlag: '🇳🇱',
    club: 'Liverpool FC',
    position: 'DEF',
    positionFull: 'Defender',
    photo: 'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=600&q=80&fm=jpg&fit=crop'
  },
  {
    id: 'p05',
    name: 'Emiliano Martínez',
    number: 23,
    country: 'Argentina',
    countryFlag: '🇦🇷',
    club: 'Aston Villa FC',
    position: 'GK',
    positionFull: 'Goalkeeper',
    photo: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?w=600&q=80&fm=jpg&fit=crop'
  },
  {
    id: 'p06',
    name: 'Florian Wirtz',
    number: 17,
    country: 'Germany',
    countryFlag: '🇩🇪',
    club: 'Liverpool FC',
    position: 'MID',
    positionFull: 'Midfielder',
    photo: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80&fm=jpg&fit=crop'
  },
  {
    id: 'p07',
    name: 'Achraf Hakimi',
    number: 2,
    country: 'Morocco',
    countryFlag: '🇲🇦',
    club: 'Paris Saint-Germain',
    position: 'DEF',
    positionFull: 'Defender',
    photo: 'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=600&q=80&fm=jpg&fit=crop'
  },
  {
    id: 'p08',
    name: 'Lamine Yamal',
    number: 19,
    country: 'Spain',
    countryFlag: '🇪🇸',
    club: 'FC Barcelona',
    position: 'FWD',
    positionFull: 'Forward',
    photo: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=600&q=80&fm=jpg&fit=crop'
  }
];

/* ============================================
   State
   ============================================ */
const state = {
  query: '',
  position: 'ALL',
  country: 'ALL'
};

/* ============================================
   DOM refs
   ============================================ */
const rosterEl = document.getElementById('roster');
const emptyStateEl = document.getElementById('empty-state');
const resultCountEl = document.getElementById('result-count');
const searchInput = document.getElementById('player-search');
const positionFilterEl = document.getElementById('position-filter');
const countryFilterEl = document.getElementById('country-filter');

/* ============================================
   Build dynamic country pills from data
   ============================================ */
function buildCountryFilters() {
  const countries = [...new Set(PLAYERS.map(p => p.country))].sort();
  countries.forEach(country => {
    const flag = PLAYERS.find(p => p.country === country).countryFlag;
    const btn = document.createElement('button');
    btn.className = 'filter-pill';
    btn.dataset.country = country;
    btn.setAttribute('aria-pressed', 'false');
    btn.textContent = `${flag} ${country}`;
    countryFilterEl.appendChild(btn);
  });
}

/* ============================================
   Filtering logic
   ============================================ */
function getFilteredPlayers() {
  const q = state.query.trim().toLowerCase();
  return PLAYERS.filter(p => {
    const matchesPosition = state.position === 'ALL' || p.position === state.position;
    const matchesCountry = state.country === 'ALL' || p.country === state.country;
    const matchesQuery =
      q === '' ||
      p.name.toLowerCase().includes(q) ||
      p.club.toLowerCase().includes(q) ||
      p.country.toLowerCase().includes(q);
    return matchesPosition && matchesCountry && matchesQuery;
  });
}

/* ============================================
   Render
   ============================================ */
function renderRoster() {
  const players = getFilteredPlayers();

  rosterEl.innerHTML = '';

  if (players.length === 0) {
    emptyStateEl.hidden = false;
  } else {
    emptyStateEl.hidden = true;
    players.forEach((player, index) => {
      const li = document.createElement('li');
      li.className = 'player-card';
      li.style.animationDelay = `${index * 60}ms`;

      li.innerHTML = `
        <div class="player-card-link" tabindex="0" role="group" aria-label="${player.name}, เบอร์ ${player.number}, ${player.positionFull}, ${player.club}, ${player.country}">
          <div class="player-photo-wrap">
            <img class="player-photo" src="${player.photo}" alt="ภาพพอร์ตเทรตของ ${player.name}" loading="lazy">
            <span class="player-number" aria-hidden="true">${String(player.number).padStart(2, '0')}</span>
            <span class="player-position-tag" aria-hidden="true">${player.position}</span>
            <div class="player-photo-gradient" aria-hidden="true"></div>
          </div>
          <div class="player-info">
            <h3 class="player-name">${player.name}</h3>
            <p class="player-meta">
              <span class="player-country-flag" aria-hidden="true">${player.countryFlag}</span>
              <span>${player.country}</span>
            </p>
            <p class="player-club">${player.club}</p>
            <span class="player-position-full">${player.positionFull}</span>
          </div>
        </div>
      `;
      rosterEl.appendChild(li);
    });
  }

  resultCountEl.textContent = `${players.length} นักเตะ`;
}

/* ============================================
   Event handlers
   ============================================ */
function handlePillClick(group, dataKey) {
  group.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-pill');
    if (!btn) return;

    [...group.children].forEach(pill => {
      pill.classList.remove('is-active');
      pill.setAttribute('aria-pressed', 'false');
    });
    btn.classList.add('is-active');
    btn.setAttribute('aria-pressed', 'true');

    state[dataKey] = btn.dataset[dataKey] || 'ALL';
    renderRoster();
  });
}

let searchDebounce;
searchInput.addEventListener('input', (e) => {
  clearTimeout(searchDebounce);
  searchDebounce = setTimeout(() => {
    state.query = e.target.value;
    renderRoster();
  }, 120);
});

/* ============================================
   Init
   ============================================ */
function init() {
  buildCountryFilters();
  handlePillClick(positionFilterEl, 'position');
  handlePillClick(countryFilterEl, 'country');
  renderRoster();
}

document.addEventListener('DOMContentLoaded', init);