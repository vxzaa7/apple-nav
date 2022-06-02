const desktopNav = document.querySelector('.desktop-nav__list');
const desktopSearchBtn = document.querySelector(
  '.desktop-nav__list .link-search',
);

const searchNav = document.querySelector('.main-search');
const searchBtn = document.querySelector('.main-search .main-search__btn');
const searchCloseBtn = document.querySelector(
  '.main-search .main-search__close',
);
const overMask = document.querySelector('.over-mask');

//點擊桌面搜尋鍵
desktopSearchBtn.addEventListener('click', () => {
  desktopNav.classList.add('hide');
  searchNav.classList.remove('hide');
  overMask.classList.add('show');
});

//關閉搜尋列
searchCloseBtn.addEventListener('click', () => {
  desktopNav.classList.remove('hide');
  searchNav.classList.add('hide');
  overMask.classList.remove('show');
});

//點擊mask關閉搜尋列
overMask.addEventListener('click', () => {
  desktopNav.classList.remove('hide');
  searchNav.classList.add('hide');
  overMask.classList.remove('show');
});
