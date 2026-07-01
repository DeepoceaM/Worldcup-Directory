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
    photo: 'https://www.playmakerstats.com/img/jogadores/new/45/08/394508_kylian_mbappe_20260217195145.png'
  },
  {
    id: 'p02',
    name: 'Jude Bellingham',
    number: 10,
    country: 'England',
    countryFlag: '🏴󠁧󠁢',
    club: 'Real Madrid CF',
    position: 'MID',
    positionFull: 'Midfielder',
    photo: 'https://www.playmakerstats.com/img/jogadores/new/75/32/737532_jude_bellingham_20250618231333.png'
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
    photo: 'https://www.playmakerstats.com/img/jogadores/new/77/37/547737_vinicius_junior_20250923225603.png'
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
    photo: 'https://www.playmakerstats.com/img/jogadores/new/45/93/194593_virgil_van_dijk_20251022235737.png'
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
    photo: 'https://www.playmakerstats.com/img/jogadores/new/72/32/97232_emiliano_martinez_20251206122004.png'
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
    photo: 'https://www.playmakerstats.com/img/jogadores/new/25/25/782525_florian_wirtz_20260114143456.png'
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
    photo: 'https://www.playmakerstats.com/img/jogadores/new/86/25/478625_achraf_hakimi_20260217234110.png'
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
    photo: 'https://www.playmakerstats.com/img/jogadores/new/32/43/1013243_lamine_yamal_20260615183634.jpg'
  },
   {
    id: 'p09',
    name: 'Neymar Jr',
    number: 10,
    country: 'Brazil',
    countryFlag: '🇧🇷',
    club: 'Santos FC',
    position: 'FWD',
    positionFull: 'Forward',
    photo: 'https://www.playmakerstats.com/img/jogadores/new/48/14/54814_neymar_20250726230614.jpg'
  },
  {
    id: 'p10',
    name: 'Casemiro',
    number: 5,
    country: 'Brazil',
    countryFlag: '🇧🇷',
    club: 'Inter Miami CF',
    position: 'MID',
    positionFull: 'Midfielder',
    photo: 'https://www.playmakerstats.com/img/jogadores/new/56/21/95621_casemiro_20250920212010.png'
  },
  {
    id: 'p11',
    name:'Matheus Cunha',
    number: 9,
    country: 'Brazil',
    countryFlag: '🇧🇷',
    club: 'Manchester United',
    position: 'FWD',
    positionFull: 'Forward',
    photo: 'https://www.playmakerstats.com/img/jogadores/new/96/37/549637_matheus_cunha_20251025173306.png'
  },
  {
    id: 'p12',
    name:'Alisson Becker',
    number: 1,
    country: 'Brazil',
    countryFlag: '🇧🇷',
    club: 'Manchester United',
    position: 'GK',
    positionFull: 'Goalkeeper',
    photo: 'https://www.playmakerstats.com/img/jogadores/new/56/14/95614_alisson_becker_20250815201322.png'
  },
  {
    id: 'p13',
    name:'Marquinhos',
    number: 4,
    country: 'Brazil',
    countryFlag: '🇧🇷',
    club: 'Paris Saint-Germain',
    position: 'DEF',
    positionFull: 'Defender',
    photo: 'https://www.playmakerstats.com/img/jogadores/new/77/57/187757_marquinhos_20250326082619.png'
  },
  {
    id: 'p14',
    name:'Rayan',
    number: 26,
    country: 'Brazil',
    countryFlag: '🇧🇷',
    club: 'Bournemouth',
    position: 'FWD',
    positionFull: 'Forward',
    photo: 'https://www.playmakerstats.com/img/jogadores/new/00/82/620082_rayan_20260207204616.png'
  },
  {
    id: 'p15',
    name:'Endrick',
    number: 19,
    country: 'Brazil',
    countryFlag: '🇧🇷',
    club: 'Lyon',
    position: 'FWD',
    positionFull: 'Forward',
    photo: 'https://www.playmakerstats.com/img/jogadores/new/93/33/829333_endrick_20260313120646.png'
  },
  {
    id: 'p16',
    name:'Gabriel Martinelli',
    number: 22,
    country: 'Brazil',
    countryFlag: '🇧🇷',
    club: 'Arsenal FC',
    position: 'FWD',
    positionFull: 'Forward',
    photo: 'https://www.playmakerstats.com/img/jogadores/new/96/81/619681_gabriel_martinelli_20251030125918.png'
  },
  {
    id: 'p17',
    name:'Igor Thiago',
    number: 25,
    country: 'Brazil',
    countryFlag: '🇧🇷',
    club: 'Brentford',
    position: 'FWD',
    positionFull: 'Forward',
    photo: 'https://www.playmakerstats.com/img/jogadores/new/62/16/656216_igor_thiago_20251026001039.png'
  },
  {
    id: 'p18',
    name:'Raphinha',
    number: 11,
    country: 'Brazil',
    countryFlag: '🇧🇷',
    club: 'FC Barcelona',
    position: 'FWD',
    positionFull: 'Forward',
    photo: 'https://www.playmakerstats.com/img/jogadores/new/10/13/491013_raphinha_20251203082154.png'
  },
  {
    id: 'p19',
    name:'Luiz Henrique',
    number: 21,
    country: 'Brazil',
    countryFlag: '🇧🇷',
    club: 'Zenit St. Petersburg',
    position: 'FWD',
    positionFull: 'Forward',
    photo: 'https://img.a.transfermarkt.technology/portrait/header/800175-1756746940.png?lm=1'
  },
  {
    id: 'p20',
    name:'Bruno Guimarães',
    number: 8,
    country: 'Brazil',
    countryFlag: '🇧🇷',
    club: '	Newcastle United',
    position: 'MID',
    positionFull: 'Midfielder',
    photo: 'https://img.a.transfermarkt.technology/portrait/header/520624-1780929894.jpg?lm=1'
  },
  {
    id: 'p21',
    name:'Danilo Santos',
    number: 18,
    country: 'Brazil',
    countryFlag: '🇧🇷',
    club: 'Botafogo de Futebol e Regatas',
    position: 'FWD',
    positionFull: 'Forward',
    photo: 'https://img.a.transfermarkt.technology/portrait/header/808509-1780390517.jpg?lm=1'
  },
  {
    id: 'p22',
    name:'Fabinho',
    number: 17,
    country: 'Brazil',
    countryFlag: '🇧🇷',
    club: '	Al-Ittihad Club',
    position: 'DEF',
    positionFull: 'Defender',
    photo: 'https://img.a.transfermarkt.technology/portrait/header/225693-1703282636.png?lm=1'
  },
  {
    id: 'p23',
    name:'Lucas Paqueta',
    number: 20,
    country: 'Brazil',
    countryFlag: '🇧🇷',
    club: 'Flamengo',
    position: 'MID',
    positionFull: 'Midfielder',
    photo: 'https://img.a.transfermarkt.technology/portrait/header/444523-1780929763.jpg?lm=1'
  },
  {
    id: 'p24',
    name:'Bremer',
    number: 14,
    country: 'Brazil',
    countryFlag: '🇧🇷',
    club: '	Juventus FC',
    position: 'DEF',
    positionFull: 'Defender',
    photo: 'https://img.a.transfermarkt.technology/portrait/header/516716-1725531520.jpg?lm=1'
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