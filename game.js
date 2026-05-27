const gameId = new URLSearchParams(location.search).get('id');

if (!gameId) {
  location.href = 'index.html';
}

async function loadGameDetail() {
  const container = document.getElementById('gameDetail');

  try {
    const [game, shots] = await Promise.all([
      fetchGame(gameId),
      fetchScreenshots(gameId),
    ]);

    document.title = `${game.name} — 🎮 GamePick`;

    // ─── 플랫폼 배지 ────────────────────────────────
    const platformBadges = (game.platforms || [])
      .slice(0, 5)
      .map(p => `<span class="badge badge-platform">${shortPlatform(p.platform.name)}</span>`)
      .join('');

    const year = game.released ? game.released.slice(0, 4) : '출시일 미정';
    const rating = game.rating ? game.rating.toFixed(1) : '—';
    const metacritic = game.metacritic ? game.metacritic : '—';

    // ─── 장르 ────────────────────────────────────────
    const genresStr = (game.genres || []).map(g => g.name).join(', ') || '—';

    // ─── 개발사 ──────────────────────────────────────
    const devs = (game.developers || []).map(d => d.name).join(', ') || '—';
    const pubs = (game.publishers || []).map(p => p.name).join(', ') || '—';

    // ─── 스크린샷 ─────────────────────────────────────
    const screenshotHtml = shots.results?.length
      ? `<div class="screenshots-grid">
          ${shots.results.slice(0, 4).map(s =>
            `<div class="screenshot-img"><img src="${s.image}" alt="스크린샷" loading="lazy" /></div>`
          ).join('')}
        </div>`
      : '';

    // ─── 설명 ────────────────────────────────────────
    const desc = game.description_raw
      ? game.description_raw.slice(0, 800) + (game.description_raw.length > 800 ? '...' : '')
      : '게임 설명이 없습니다.';

    // ─── 태그 ────────────────────────────────────────
    const tags = (game.tags || [])
      .slice(0, 8)
      .map(t => `<span class="genre-tag">${t.name}</span>`)
      .join('');

    const heroImg = game.background_image || '';

    container.innerHTML = `
      <div class="detail-hero">
        ${heroImg ? `<img class="detail-hero-img" src="${heroImg}" alt="${escHtml(game.name)}" />` : ''}
        <div class="detail-hero-overlay"></div>
        <div class="detail-hero-content">
          <h1 class="detail-title">${escHtml(game.name)}</h1>
          <div class="detail-badges">
            ${rating !== '—' ? `<span class="badge badge-rating">⭐ ${rating}</span>` : ''}
            <span class="badge badge-year">${year}</span>
            ${platformBadges}
          </div>
        </div>
      </div>

      <div class="detail-body">
        <div class="detail-main">
          <div class="detail-description">
            <h3>게임 소개</h3>
            <p>${escHtml(desc)}</p>
          </div>

          ${tags ? `<div class="genre-tags" style="margin-top:20px">${tags}</div>` : ''}

          ${screenshotHtml ? `
            <div style="margin-top:32px">
              <h3 class="section-title" style="font-size:1.1rem;margin-bottom:16px">스크린샷</h3>
              ${screenshotHtml}
            </div>` : ''}
        </div>

        <div class="detail-sidebar">
          <div class="detail-info-card">
            <div class="detail-info-row">
              <span class="info-label">평점</span>
              <span class="info-value" style="color:var(--gold)">⭐ ${rating}</span>
            </div>
            <div class="detail-info-row">
              <span class="info-label">메타크리틱</span>
              <span class="info-value">${metacritic}</span>
            </div>
            <div class="detail-info-row">
              <span class="info-label">출시일</span>
              <span class="info-value">${game.released || '미정'}</span>
            </div>
            <div class="detail-info-row">
              <span class="info-label">장르</span>
              <span class="info-value">${genresStr}</span>
            </div>
            <div class="detail-info-row">
              <span class="info-label">개발사</span>
              <span class="info-value">${devs}</span>
            </div>
            <div class="detail-info-row">
              <span class="info-label">퍼블리셔</span>
              <span class="info-value">${pubs}</span>
            </div>
            ${game.playtime ? `
            <div class="detail-info-row">
              <span class="info-label">평균 플레이</span>
              <span class="info-value">${game.playtime}시간</span>
            </div>` : ''}
          </div>

          <a href="search.html?genre=${(game.genres || [])[0]?.slug || ''}"
             class="btn-filter" style="display:block;text-align:center;border-radius:var(--radius)">
            같은 장르 게임 보기
          </a>
        </div>
      </div>`;

    // ─── 비슷한 게임 ─────────────────────────────────
    loadSimilar(game);

  } catch (e) {
    container.innerHTML = `<div class="detail-loading"><p style="color:var(--text2)">게임 정보를 불러올 수 없습니다.<br /><a href="index.html" style="color:var(--accent2)">홈으로 돌아가기</a></p></div>`;
  }
}

async function loadSimilar(game) {
  const section = document.getElementById('similarSection');
  const grid    = document.getElementById('similarGames');
  if (!section || !grid) return;

  const genre = (game.genres || [])[0]?.slug;
  if (!genre) return;

  try {
    const data = await fetchGames({
      genres:   genre,
      ordering: '-rating',
      page_size: 6,
      exclude_game: gameId,
    });

    const filtered = data.results.filter(g => g.id !== parseInt(gameId)).slice(0, 6);
    if (!filtered.length) return;

    grid.innerHTML = filtered.map(createGameCard).join('');
    section.style.display = 'block';
  } catch (_) {}
}

loadGameDetail();
