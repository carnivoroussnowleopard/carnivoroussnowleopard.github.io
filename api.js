/**
 * GamePick — RAWG API wrapper
 * RAWG Free API: https://rawg.io/apidocs
 * Free tier: 20,000 requests/month
 *
 * ※ 이 데모 키는 RAWG 공개 샘플 키입니다.
 *   실제 배포 시에는 https://rawg.io/apidocs 에서
 *   무료 API 키를 발급받아 교체하세요.
 */

const API_KEY = '5a84526a68114dacae7f5bfb18d1ecb9';
const BASE    = 'https://api.rawg.io/api';

/**
 * GET /games
 * @param {Object} params - 쿼리 파라미터
 */
async function fetchGames(params = {}) {
  const url = new URL(`${BASE}/games`);
  url.searchParams.set('key', API_KEY);
  Object.entries(params).forEach(([k, v]) => {
    if (v !== '' && v != null) url.searchParams.set(k, v);
  });

  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`API 오류: ${res.status}`);
  return res.json();
}

/**
 * GET /games/{id}
 */
async function fetchGame(id) {
  const url = new URL(`${BASE}/games/${id}`);
  url.searchParams.set('key', API_KEY);
  const res = await fetch(url.toString());
  if (!res.ok) throw new Error(`API 오류: ${res.status}`);
  return res.json();
}

/**
 * GET /games/{id}/screenshots
 */
async function fetchScreenshots(id) {
  const url = new URL(`${BASE}/games/${id}/screenshots`);
  url.searchParams.set('key', API_KEY);
  const res = await fetch(url.toString());
  if (!res.ok) return { results: [] };
  return res.json();
}

// ─── 유틸 ────────────────────────────────────────────

/** 평점 색 클래스 */
function ratingClass(r) {
  if (!r) return '';
  if (r >= 4.0) return 'high';
  if (r >= 3.0) return 'mid';
  return 'low';
}

/** 별점 이모지 */
function stars(r) {
  if (!r) return '—';
  return `⭐ ${r.toFixed(1)}`;
}

/** 플랫폼 축약 이름 */
const PLATFORM_SHORT = {
  'PC': 'PC',
  'PlayStation 5': 'PS5',
  'PlayStation 4': 'PS4',
  'PlayStation 3': 'PS3',
  'Xbox One': 'XBO',
  'Xbox Series S/X': 'XSX',
  'Nintendo Switch': 'NSW',
  'iOS': 'iOS',
  'Android': 'AND',
  'macOS': 'MAC',
  'Linux': 'LNX',
};

function shortPlatform(name) {
  return PLATFORM_SHORT[name] || name.slice(0, 4);
}

/** 게임 카드 HTML 생성 */
function createGameCard(game) {
  const img = game.background_image
    ? `<img src="${game.background_image}" alt="${escHtml(game.name)}" loading="lazy" />`
    : `<div class="game-card-img-placeholder">🎮</div>`;

  const platforms = (game.platforms || [])
    .slice(0, 3)
    .map(p => `<span class="platform-tag">${shortPlatform(p.platform.name)}</span>`)
    .join('');

  const genres = (game.genres || [])
    .slice(0, 2)
    .map(g => `<span class="genre-tag">${g.name}</span>`)
    .join('');

  const rc = ratingClass(game.rating);
  const rs = game.rating ? `<span class="star">⭐</span> ${game.rating.toFixed(1)}` : '—';

  return `
    <a class="game-card" href="game.html?id=${game.id}">
      <div class="game-card-img">${img}</div>
      <div class="game-card-body">
        <div class="game-card-title">${escHtml(game.name)}</div>
        <div class="game-card-meta">
          <span class="rating ${rc}">${rs}</span>
          <div class="platforms">${platforms}</div>
        </div>
        ${genres ? `<div class="genre-tags">${genres}</div>` : ''}
      </div>
    </a>`;
}

function escHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}
