let currentPage = 1;
let currentParams = {};
let totalGames   = 0;

// ─── URL 파라미터 파싱 ────────────────────────────────
const urlParams = new URLSearchParams(location.search);
const initQuery  = urlParams.get('q')     || '';
const initGenre  = urlParams.get('genre') || '';
const initSort   = urlParams.get('sort')  || '-rating';

// ─── 초기값 설정 ──────────────────────────────────────
document.getElementById('searchInput').value = initQuery;

const genreSelect  = document.getElementById('filterGenre');
const sortSelect   = document.getElementById('filterSort');

if (initGenre) genreSelect.value = initGenre;
if (initSort)  sortSelect.value  = initSort;

// ─── 검색 실행 ────────────────────────────────────────
async function runSearch(page = 1) {
  const q        = document.getElementById('searchInput').value.trim();
  const genre    = genreSelect.value;
  const platform = document.getElementById('filterPlatform').value;
  const sort     = sortSelect.value;

  currentPage = page;
  currentParams = {
    search:    q || undefined,
    genres:    genre || undefined,
    platforms: platform || undefined,
    ordering:  sort,
    page_size: 18,
    page,
  };

  const grid = document.getElementById('searchResults');
  const loadMoreWrap = document.getElementById('loadMoreWrap');

  if (page === 1) {
    grid.innerHTML = Array(6).fill('<div class="skeleton-card"></div>').join('');
    loadMoreWrap.style.display = 'none';
    document.getElementById('resultCount').textContent = '';
  }

  try {
    const data = await fetchGames(currentParams);
    totalGames = data.count;

    const cards = data.results.map(createGameCard).join('');

    if (page === 1) {
      grid.innerHTML = cards || '<p style="color:var(--text2);grid-column:1/-1;text-align:center;padding:40px">검색 결과가 없습니다.</p>';
    } else {
      grid.insertAdjacentHTML('beforeend', cards);
    }

    document.getElementById('resultCount').textContent =
      `총 ${totalGames.toLocaleString()}개의 게임${q ? ` — "${q}" 검색 결과` : ''}`;

    // 더 보기 버튼
    const shown = page * 18;
    if (shown < data.count && data.next) {
      loadMoreWrap.style.display = 'block';
    } else {
      loadMoreWrap.style.display = 'none';
    }
  } catch (e) {
    grid.innerHTML = '<p style="color:var(--text2);grid-column:1/-1;text-align:center;padding:40px">오류가 발생했습니다. 잠시 후 다시 시도해주세요.</p>';
  }
}

// ─── 이벤트 바인딩 ────────────────────────────────────
document.getElementById('searchForm').addEventListener('submit', e => {
  e.preventDefault();
  runSearch(1);
});

document.getElementById('applyFilter').addEventListener('click', () => {
  runSearch(1);
});

document.getElementById('loadMoreBtn').addEventListener('click', () => {
  runSearch(currentPage + 1);
});

// ─── 초기 로드 ────────────────────────────────────────
runSearch(1);
