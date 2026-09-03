/* Shared data + helpers for Taneesh web mock */

window.TaneeshData = {
  banners: [
    { id: "party-friday", img: "assets/niches/party.jpg", title: "Party Friday", desc: "Открытый плейлист и знакомства на событии" },
    { id: "standup-open-mic", img: "assets/niches/standup.jpg", title: "Open Mic Night", desc: "Стендап · гости бесплатно до 20:00" },
    { id: "live-jazz", img: "assets/niches/concert.jpg", title: "Live Jazz", desc: "Концерт · билеты от 45 000 сум" },
  ],
  selectionEvents: [
    { id: "evos-jazz", title: "EVOS Jazz Night", date: "12 апр, 20:00", price: "от 45 000", free: false, views: "1.2k", likes: "84", types: ["Музыка", "Концерт"], img: "assets/showcase/concert1.jpg", liked: true, address: "Мирзо-Улугбек, ул. Буюк Ипак Йули, 15", desc: "Живой джаз, бар и знакомства после сета. Дресс-код smart casual." },
    { id: "product-workshop", title: "Product Workshop", date: "13 апр, 11:00", price: "от 120 000", free: false, views: "640", likes: "41", types: ["Воркшоп"], img: "assets/niches/workshop.jpg", liked: true, address: "Юнусабад, коворкинг Floor", desc: "Практика CJM и приоритизация фич. Ноутбук с собой." },
    { id: "biz-conf", title: "Biz Conf Tashkent", date: "15 апр, 10:00", price: "от 250 000", free: false, views: "2.1k", likes: "120", types: ["Конференция"], img: "assets/niches/conference.jpg", liked: true, address: "Центр, Hilton", desc: "Спикеры из e-com и fintech. Нетворкинг в фойе." },
    { id: "party-friday", title: "Party Friday", date: "Пт, 22:00", price: "от 80 000", free: false, views: "980", likes: "76", types: ["Вечеринка"], img: "assets/niches/party.jpg", liked: true, address: "Чиланзар, клуб Pulse", desc: "Открытый плейлист и знакомства на танцполе." },
  ],
  freeEvents: [
    { id: "standup-open-mic", title: "Стендап Open Mic", date: "Пт, 19:30", price: "Бесплатно", free: true, views: "540", likes: "62", types: ["Стендап"], img: "assets/niches/standup.jpg", liked: false, address: "Яккасарай, бар Смех", desc: "Открытый микрофон. Гости бесплатно до 20:00." },
    { id: "morning-yoga", title: "Morning Yoga Park", date: "Сб, 08:00", price: "Бесплатно", free: true, views: "310", likes: "28", types: ["Спорт", "Wellness"], img: "assets/niches/sport.jpg", liked: true, address: "Мирабад, парк", desc: "Утренняя практика на газоне. Коврик свой." },
    { id: "networking-meetup", title: "Networking Meetup", date: "Вс, 18:00", price: "Бесплатно", free: true, views: "420", likes: "35", types: ["Networking"], img: "assets/showcase/cover3.jpg", liked: false, address: "Юнусабад, IT Park", desc: "Знакомства без питча. Бейджи на входе." },
    { id: "photo-walk", title: "Photo Walk", date: "Сб, 16:00", price: "Бесплатно", free: true, views: "190", likes: "19", types: ["Фото"], img: "assets/showcase/cover1.jpg", liked: false, address: "Старый город", desc: "Маршрут 4 км, золотой час." },
  ],
  extraEvents: [
    { id: "live-jazz-hall", title: "Live Jazz Hall", date: "14 апр, 21:00", price: "от 60 000", free: false, views: "870", likes: "55", types: ["Концерт"], img: "assets/showcase/concert2.png", liked: false, address: "Мирабад, Hall 12", desc: "Квартет и бар. 18+." },
    { id: "startup-demo", title: "Startup Demo Day", date: "18 апр, 12:00", price: "от 90 000", free: false, views: "1.5k", likes: "99", types: ["Стартапы"], img: "assets/showcase/cover4.jpg", liked: false, address: "IT Park", desc: "10 питчей и afterparty." },
  ],
  nearEvents: [
    { id: "party-friday", title: "Party Friday", date: "Пт, 22:00 · 1.2 км", price: "от 80 000", free: false, views: "980", likes: "76", types: ["Вечеринка"], img: "assets/niches/party.jpg", liked: false, address: "Чиланзар, 2.1 км", desc: "Открытый плейлист и знакомства на танцполе." },
    { id: "standup-open-mic", title: "Стендап Open Mic", date: "Пт, 19:30 · 800 м", price: "Бесплатно", free: true, views: "540", likes: "62", types: ["Стендап"], img: "assets/niches/standup.jpg", liked: false, address: "Яккасарай, 0.8 км", desc: "Открытый микрофон. Гости бесплатно до 20:00." },
    { id: "evos-jazz", title: "Live Jazz", date: "Сегодня, 20:00 · 2.4 км", price: "от 45 000", free: false, views: "1.2k", likes: "84", types: ["Концерт"], img: "assets/showcase/concert1.jpg", liked: true, address: "Мирзо-Улугбек, 2.4 км", desc: "Живой джаз, бар и знакомства после сета." },
  ],
  profiles: [
    { id: "malika", name: "Малика, 24", first: "Малика", meta: "Юнусабад", img: "assets/showcase/user1.jpg", online: true, bio: "Люблю джаз и утреннюю йогу. Ищу компанию на стендап." },
    { id: "aziz", name: "Азиз, 27", first: "Азиз", meta: "Чиланзар", img: "assets/showcase/user2.jpg", online: false, bio: "Продукт и концерты. Обычно Free." },
    { id: "diana", name: "Диана, 23", first: "Диана", meta: "Мирзо-Улугбек", img: "assets/showcase/user3.jpg", online: true, bio: "Фото и вечеринки по пятницам." },
    { id: "timur", name: "Тимур, 29", first: "Тимур", meta: "Яккасарай", img: "assets/showcase/avatar.png", online: false, bio: "Организую выходы компанией." },
    { id: "nigora", name: "Нигора, 25", first: "Нигора", meta: "Сергели", img: "assets/showcase/cover2.jpg", online: true, bio: "Wellness и нетворкинг." },
    { id: "jasur", name: "Жасур, 28", first: "Жасур", meta: "Юнусабад", img: "assets/showcase/cover3.jpg", online: false, bio: "Стартапы и демо-дни." },
    { id: "sabina", name: "Сабина, 22", first: "Сабина", meta: "Чиланзар", img: "assets/showcase/cover4.jpg", online: true, bio: "Open mic и фотопрогулки." },
    { id: "otabek", name: "Отабек, 31", first: "Отабек", meta: "Мирабад", img: "assets/showcase/cover1.jpg", online: false, bio: "Конфы и afterparty." },
  ],
  comments: [
    { user: "Малика", userId: "malika", text: "Кто идёт на стендап в пятницу? Можно компанией", time: "2 ч", event: "Стендап Open Mic", eventId: "standup-open-mic", eventImg: "assets/niches/standup.jpg", av: "assets/showcase/user1.jpg" },
    { user: "Азиз", userId: "aziz", text: "Jazz night — огонь, кто ещё не брал билет?", time: "5 ч", event: "EVOS Jazz Night", eventId: "evos-jazz", eventImg: "assets/showcase/concert1.jpg", av: "assets/showcase/user2.jpg" },
    { user: "Диана", userId: "diana", text: "На йогу утром беру подругу, есть места?", time: "вчера", event: "Morning Yoga Park", eventId: "morning-yoga", eventImg: "assets/niches/sport.jpg", av: "assets/showcase/user3.jpg" },
  ],
  chats: [
    { id: "malika", name: "Малика", preview: "Давай в 19:30 у входа", time: "12:40", unread: 2, img: "assets/showcase/user1.jpg", online: true, messages: [
      { from: "them", text: "Идёшь на стендап?" },
      { from: "me", text: "Да, возьму места у входа" },
      { from: "them", text: "Давай в 19:30 у входа" },
    ]},
    { id: "aziz", name: "Азиз", preview: "Билеты взял, до встречи", time: "вчера", unread: 0, img: "assets/showcase/user2.jpg", online: false, messages: [
      { from: "me", text: "Взял на джаз?" },
      { from: "them", text: "Билеты взял, до встречи" },
    ]},
    { id: "diana", name: "Диана", preview: "Можно +1 подругу?", time: "пн", unread: 1, img: "assets/showcase/user3.jpg", online: true, messages: [
      { from: "them", text: "Можно +1 подругу?" },
    ]},
    { id: "timur", name: "Тимур", preview: "Фото с концерта скинул", time: "вс", unread: 0, img: "assets/showcase/avatar.png", online: false, messages: [
      { from: "them", text: "Фото с концерта скинул" },
    ]},
  ],
  interested: [
    { id: "malika", name: "Малика", meta: "", img: "assets/showcase/user1.jpg", online: true },
    { id: "diana", name: "Диана", meta: "", img: "assets/showcase/user3.jpg", online: true },
    { id: "nigora", name: "Нигора", meta: "", img: "assets/showcase/cover2.jpg", online: true },
    { id: "sabina", name: "Сабина", meta: "", img: "assets/showcase/cover4.jpg", online: true },
  ],
  me: { id: "me", name: "Тимур, 29", first: "Тимур", meta: "Яккасарай", img: "assets/showcase/avatar.png", online: true, bio: "Ищу компанию на концерты и стендап." },
};

window.TaneeshUI = {
  ICONS: {
    homeOn: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3.2 3 10.2V21h6.5v-6h5V21H21V10.2L12 3.2z"/></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3.2 3 10.2V21h6.5v-6h5V21H21V10.2L12 3.2z"/></svg>',
    nearOn: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 21s7-5.2 7-11a7 7 0 10-14 0c0 5.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5" style="fill:var(--t-color-on-primary)"/></svg>',
    near: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 21s7-5.2 7-11a7 7 0 10-14 0c0 5.8 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/></svg>',
    favOn: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 20s-7-4.4-9.2-8.2A5.2 5.2 0 0112 5.1a5.2 5.2 0 019.2 6.7C19 15.6 12 20 12 20z"/></svg>',
    fav: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20s-7-4.4-9.2-8.2A5.2 5.2 0 0112 5.1a5.2 5.2 0 019.2 6.7C19 15.6 12 20 12 20z"/></svg>',
    peopleOn: '<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="9" cy="8" r="3.2"/><path d="M3.5 19a5.5 5.5 0 0111 0"/><circle cx="17" cy="9" r="2.4"/><path d="M15 19a4.2 4.2 0 015.5-4"/></svg>',
    people: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="8" r="3.2"/><path d="M3.5 19a5.5 5.5 0 0111 0"/><circle cx="17" cy="9" r="2.4"/><path d="M15 19a4.2 4.2 0 015.5-4"/></svg>',
    chatOn: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 18.5 4 21l3.2-1.2A9 9 0 1012 21a8.8 8.8 0 01-4.4-1.2L5 18.5z"/></svg>',
    chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 18.5 4 21l3.2-1.2A9 9 0 1012 21a8.8 8.8 0 01-4.4-1.2L5 18.5z"/></svg>',
  },

  NAV: [
    { id: "home", href: "index.html", label: "Главная", icon: "home", iconOn: "homeOn" },
    { id: "near", href: "near.html", label: "Рядом", icon: "near", iconOn: "nearOn" },
    { id: "favorites", href: "favorites.html", label: "Избранное", icon: "fav", iconOn: "favOn" },
    { id: "people", href: "people.html", label: "Люди", icon: "people", iconOn: "peopleOn" },
    { id: "chats", href: "chats.html", label: "Чат", icon: "chat", iconOn: "chatOn", badge: true },
  ],

  mountNav(active) {
    if (document.body.dataset.shell === "stack" || document.body.dataset.shell === "auth") {
      document.getElementById("t-nav")?.remove();
      return;
    }
    const page = active || document.body.dataset.page || "home";
    let nav = document.getElementById("t-nav");
    if (!nav) {
      nav = document.createElement("nav");
      nav.id = "t-nav";
      nav.className = "t-bottom-nav nav";
      nav.setAttribute("aria-label", "Навигация");
      document.body.appendChild(nav);
    }
    nav.innerHTML = this.NAV.map((item) => {
      const on = item.id === page;
      return `<a href="${item.href}" class="${on ? "is-active" : ""}" ${on ? 'aria-current="page"' : ""}>${this.ICONS[on ? item.iconOn : item.icon]}${item.label}</a>`;
    }).join("");
  },

  avatar(src, { size = "md", online, alt = "" } = {}) {
    const state = online === true ? "is-online" : online === false ? "is-offline" : "";
    return `<span class="t-avatar t-avatar--${size} ${state}"><img src="${src}" alt="${alt}" /></span>`;
  },

  query(name) {
    return new URLSearchParams(location.search).get(name);
  },

  allEvents() {
    const map = new Map();
    [...TaneeshData.selectionEvents, ...TaneeshData.freeEvents, ...TaneeshData.extraEvents, ...TaneeshData.nearEvents]
      .forEach((e) => map.set(e.id, e));
    return [...map.values()];
  },

  eventById(id) {
    return this.allEvents().find((e) => e.id === id) || this.allEvents()[0];
  },

  userById(id) {
    return TaneeshData.profiles.find((p) => p.id === id) || TaneeshData.profiles[0];
  },

  chatById(id) {
    return TaneeshData.chats.find((c) => c.id === id) || TaneeshData.chats[0];
  },

  eventHref(ev) {
    return `event.html?id=${encodeURIComponent(ev.id)}`;
  },

  userHref(p) {
    return `user.html?id=${encodeURIComponent(p.id)}`;
  },

  chatHref(c) {
    return `chat.html?id=${encodeURIComponent(c.id)}`;
  },

  toast(msg) {
    const el = document.getElementById("toast");
    if (!el) return;
    el.textContent = msg;
    el.classList.add("show");
    clearTimeout(this._t);
    this._t = setTimeout(() => el.classList.remove("show"), 1400);
  },

  eventCard(ev, i, list) {
    return `
      <a class="event-h t-event-card" href="${this.eventHref(ev)}">
        <div class="event-h-media media-scrim">
          <img src="${ev.img}" alt="" loading="lazy" />
          <span class="price ${ev.free ? "free" : "paid"}">${ev.price}</span>
          <span class="heart t-glass-icon ${ev.liked ? "is-on" : ""}" data-like="${list}:${i}" role="button" aria-label="Избранное">
            <svg viewBox="0 0 24 24" fill="${ev.liked ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2"><path d="M12 20s-7-4.4-9.2-8.2A5.2 5.2 0 0112 5.1a5.2 5.2 0 019.2 6.7C19 15.6 12 20 12 20z"/></svg>
          </span>
          <div class="stats">
            <span class="stat">👁 ${ev.views}</span>
            <span class="stat">♥ ${ev.likes}</span>
          </div>
        </div>
        <strong>${ev.title}</strong>
        <div class="date">${ev.date}</div>
        <div class="types">${ev.types.map((t) => `<span class="type t-chip">${t}</span>`).join("")}</div>
      </a>
    `;
  },

  gridCard(ev, i, list = "all") {
    return `
      <a class="event-g t-event-card" href="${this.eventHref(ev)}">
        <div class="event-h-media media-scrim">
          <img src="${ev.img}" alt="" loading="lazy" />
          <span class="price ${ev.free ? "free" : "paid"}">${ev.price}</span>
          <span class="heart t-glass-icon ${ev.liked ? "is-on" : ""}" data-like="${list}:${i}" role="button" aria-label="Избранное">
            <svg viewBox="0 0 24 24" fill="${ev.liked ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2"><path d="M12 20s-7-4.4-9.2-8.2A5.2 5.2 0 0112 5.1a5.2 5.2 0 019.2 6.7C19 15.6 12 20 12 20z"/></svg>
          </span>
          <div class="stats">
            <span class="stat">👁 ${ev.views}</span>
            <span class="stat">♥ ${ev.likes}</span>
          </div>
        </div>
        <div class="event-g-title">${ev.title}</div>
        <div class="date">${ev.date}</div>
        <div class="types">${ev.types.map((t) => `<span class="type t-chip">${t}</span>`).join("")}</div>
      </a>
    `;
  },

  profileCard(p, { tall = false } = {}) {
    const online = p.online === true ? "is-online" : p.online === false ? "is-offline" : "";
    return `
      <a class="${tall ? "user-card" : "user"}" href="${this.userHref(p)}">
        <div class="user-media ${online}"><img src="${p.img}" alt="" loading="lazy" /></div>
        <strong>${p.name}</strong>
        ${p.meta ? `<span>${p.meta}</span>` : ""}
      </a>
    `;
  },

  initRails() {
    document.querySelectorAll("[data-rail]").forEach((wrap) => {
      const rail = wrap.querySelector(".rail");
      const prev = wrap.querySelector(".rail-btn.prev");
      const next = wrap.querySelector(".rail-btn.next");
      const step = () => Math.min(rail.clientWidth * 0.75, 360);
      prev?.addEventListener("click", () => rail.scrollBy({ left: -step(), behavior: "smooth" }));
      next?.addEventListener("click", () => rail.scrollBy({ left: step(), behavior: "smooth" }));
    });
  },

  initCommon() {
    this.mountNav(document.body.dataset.page);
    window.addEventListener("scroll", () => {
      document.getElementById("header")?.classList.toggle("is-scrolled", window.scrollY > 8);
    }, { passive: true });

    document.body.addEventListener("click", (e) => {
      const like = e.target.closest("[data-like]");
      if (like) {
        e.preventDefault();
        e.stopPropagation();
        like.classList.toggle("is-on");
        const svg = like.querySelector("svg");
        if (svg) svg.setAttribute("fill", like.classList.contains("is-on") ? "currentColor" : "none");
        this.toast(like.classList.contains("is-on") ? "В избранном" : "Убрано из избранного");
        return;
      }
      const chip = e.target.closest("[data-chip]");
      if (chip) {
        chip.classList.toggle("is-on");
        return;
      }
      const t = e.target.closest("[data-toast]");
      if (t) this.toast(t.dataset.toast);
    });
  },
};
