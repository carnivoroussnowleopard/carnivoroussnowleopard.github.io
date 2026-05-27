async function loadTop100() {
  const list = document.getElementById('topList');

  // 스켈레톤
  list.innerHTML = Array(20).fill(`
    <div class="top-item" style="pointer-events:none;opacity:0.4">
      <div class="top-rank">—</div>
      <div class="top-img" style="background:var(--bg3)"></div>
      <div class="top-info"><div style="height:16px;background:var(--bg3);border-radius:4px;width:60%"></div></div>
    </div>`).join('');

  try {
    // RAWG는 page_size 최대 40 → 3페이지로 100개 수집
    const pages = [1, 2, 3];
    const results = [];

    for (const p of pages) {
      const data = await fetchGames({
        ordering: '-rating',
        metacritic: '80,100',
        page_size: 40,
        page: p,
      });
      results.push(...data.results);
      if (!data.next) break;
    }

    const top100 = results.slice(0, 100);

    list.innerHTML = top100.map((game, i) => {
      const rank = i + 1;
      let rankClass = '';
      if (rank === 1) rankClass = 'gold';
      else if (rank === 2) rankClass = 'silver';
      else if (rank === 3) rankClass = 'bronze';

      const img = game.background_image
        ? `<img src="${game.background_image}" alt="${escHtml(game.name)}" loading="lazy" />`
        : '';

      const genres = (game.genres || [])
        .slice(0, 2)
        .map(g => `<span class="genre-tag">${g.name}</span>`)
        .join('');

      const year = game.released ? game.released.slice(0, 4) : '—';
      const rating = game.rating ? game.rating.toFixed(1) : '—';

      return `
        <a class="top-item" href="game.html?id=${game.id}">
          <div class="top-rank ${rankClass}">${rank}</div>
          <div class="top-img">${img}</div>
          <div class="top-info">
            <div class="top-name">${escHtml(game.name)}</div>
            <div class="top-meta">
              <span style="color:var(--text2);font-size:0.8rem">${year}</span>
              ${genres}
            </div>
          </div>
          <div class="top-rating">⭐ ${rating}</div>
        </a>`;
    }).join('');

  } catch (e) {
    list.innerHTML = '<p style="color:var(--text2);text-align:center;padding:40px">데이터를 불러올 수 없습니다.</p>';
  }
}

loadTop100();
