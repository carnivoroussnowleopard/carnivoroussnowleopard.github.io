// ─── 장르 데이터 ─────────────────────────────────────
const GENRES = [
  { slug: 'action',      icon: '⚔️',  name: '액션' },
  { slug: 'rpg',         icon: '🧙',  name: 'RPG' },
  { slug: 'strategy',    icon: '♟️',  name: '전략' },
  { slug: 'shooter',     icon: '🔫',  name: '슈터' },
  { slug: 'adventure',   icon: '🗺️', name: '어드벤처' },
  { slug: 'puzzle',      icon: '🧩',  name: '퍼즐' },
  { slug: 'sports',      icon: '⚽',  name: '스포츠' },
  { slug: 'racing',      icon: '🏎️', name: '레이싱' },
  { slug: 'simulation',  icon: '🏙️', name: '시뮬레이션' },
  { slug: 'indie',       icon: '🌟',  name: '인디' },
];

// ─── 장르 카드 렌더 ───────────────────────────────────
function renderGenres() {
  const grid = document.getElementById('genreGrid');
  if (!grid) return;
  grid.innerHTML = GENRES.map(g => `
    <div class="genre-card" onclick="location.href='search.html?genre=${g.slug}'">
      <div class="genre-icon">${g.icon}</div>
      <div class="genre-name">${g.name}</div>
    </div>`).join('');
}

// ─── 인기 게임 ────────────────────────────────────────
async function loadPopular() {
  const el = document.getElementById('popularGames');
  if (!el) return;
  try {
    const data = await fetchGames({
      ordering: '-rating',
      page_size: 6,
      metacritic: '70,100',
    });
    el.innerHTML = data.results.map(createGameCard).join('');
  } catch (e) {
    el.innerHTML = '<p style="color:var(--text2);grid-column:1/-1">데이터를 불러올 수 없습니다.</p>';
  }
}

// ─── 최신 게임 ────────────────────────────────────────
async function loadNew() {
  const el = document.getElementById('newGames');
  if (!el) return;

  const today = new Date();
  const y = today.getFullYear();
  const m = String(today.getMonth() + 1).padStart(2, '0');
  const d = String(today.getDate()).padStart(2, '0');
  const dateEnd = `${y}-${m}-${d}`;

  // 최근 180일
  const past = new Date(today - 180 * 86400000);
  const py = past.getFullYear();
  const pm = String(past.getMonth() + 1).padStart(2, '0');
  const pd = String(past.getDate()).padStart(2, '0');
  const dateStart = `${py}-${pm}-${pd}`;

  try {
    const data = await fetchGames({
      ordering: '-released',
      page_size: 6,
      dates: `${dateStart},${dateEnd}`,
    });
    el.innerHTML = data.results.map(createGameCard).join('');
  } catch (e) {
    el.innerHTML = '<p style="color:var(--text2);grid-column:1/-1">데이터를 불러올 수 없습니다.</p>';
  }
}

// ─── 히어로 검색 ─────────────────────────────────────
document.getElementById('heroSearchForm')?.addEventListener('submit', e => {
  e.preventDefault();
  const q = document.getElementById('heroSearchInput').value.trim();
  if (q) location.href = `search.html?q=${encodeURIComponent(q)}`;
});

// ─── Init ─────────────────────────────────────────────
renderGenres();
loadPopular();
loadNew();
