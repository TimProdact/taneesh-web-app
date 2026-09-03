# Taneesh Web App (mock)

Пять вкладок гостевого приложения плюс внутренние и системные экраны. Канон стилей — CSS-токены + атомы `.t-*` (зеркало Flutter `packages/design_system`).

Каталог файлов: [PAGES.md](PAGES.md). Старт как в приложении: `splash.html`.

Live: https://timprodact.github.io/taneesh-web-app/

| Страница | Файл | `data-page` |
|----------|------|-------------|
| Главная | `index.html` | `home` |
| Рядом | `near.html` | `near` |
| Избранное | `favorites.html` | `favorites` |
| Люди | `people.html` | `people` |
| Чат | `chats.html` | `chats` |

Live: https://timprodact.github.io/taneesh-web-app/

## Токены

`assets/tokens.css` — единственное место с hex. Страницы и `app.css` используют `--t-color-*`, `--t-space-*`, `--t-radius-*`, `--t-type-*`.

- Акцент: `--t-color-primary` (`#3DC564`)
- Canvas: `--t-color-background` (`#FFFFFF`)
- Вложенный блок: `--t-color-surface-subtle` (`#F5F5F5`)
- Шрифт: `--t-font` (SF Pro Display / Inter / Roboto)
- Радиусы: 8 / 12 / 16 / 32 (`--t-radius-sm` … `--t-radius-pill`)
- Сетка: 4–64

Тёмная тема: класс `.t-theme-dark` на `html`/`body` (не включается автоматически).

## Базовый шаблон страницы

```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Taneesh — …</title>
  <meta name="theme-color" content="#FFFFFF" />
  <link rel="stylesheet" href="assets/tokens.css" />
  <link rel="stylesheet" href="assets/app.css" />
</head>
<body data-page="home">
  <header class="header t-app-bar" id="header">
    <div class="wrap header-inner">
      <h1 class="header-title">Заголовок</h1>
    </div>
  </header>
  <main>
    <div class="wrap page-pad"><!-- контент --></div>
  </main>
  <nav id="t-nav" class="t-bottom-nav nav" aria-label="Навигация"></nav>
  <div class="toast" id="toast"></div>
  <script src="assets/app.js"></script>
  <script>
    TaneeshUI.initCommon();
  </script>
</body>
</html>
```

Нижняя навигация **одна на все вкладки**: `TaneeshUI.mountNav()` читает `body[data-page]` и рисует одинаковые 5 ячеек (высота 64 + safe-area, акцент на активном табе). Не копировать SVG табов в HTML.

## Атомы

| Класс | Роль |
|--------|------|
| `.t-button` + `--primary` / `--secondary` / `--ghost` | CTA |
| `.t-icon-button` | 44×44 |
| `.t-glass-icon` | лайк на фото |
| `.t-search` / `.t-input` | поиск / поле |
| `.t-chip` / `.t-chip--on-media` | теги |
| `.t-card` | контейнер |
| `.t-event-card` | афиша, canvas, фото radius 16, ratio 1/1.25 |
| `.t-tabs` / `.t-tab` | Избранное |
| `.t-avatar--sm\|md\|lg` + `.is-online` / `.is-offline` | аватар |
| `.t-badge` | unread |
| `.t-app-bar` / `.t-bottom-nav` | chrome |

## Как обновлялись пять страниц

1. **Главная** — `tokens.css`, `data-page="home"`, поиск `.t-search`, аватар `.t-avatar`, карточки из `U.eventCard` / `U.gridCard` (`.t-event-card`, `.t-chip`, `.t-glass-icon`), CTA баннера `.t-button--primary`, комментарии `.t-avatar--sm`.
2. **Рядом** — тот же chrome; стек `.near-card.t-event-card`, чипы `.t-chip--on-media`, без inline `style`.
3. **Избранное** — `.t-tabs` / `.t-tab`, `aria-selected`.
4. **Люди** — grid профилей + pip online/offline на `.user-media`.
5. **Чат** — `TaneeshUI.avatar(..., { online })`, unread `.t-badge`.

Локально: `python3 -m http.server 5173` → http://localhost:5173
