/* Shared data + helpers for Taneesh web mock */

window.TaneeshData = {
  banners: [
    { img: "assets/niches/party.jpg", title: "Party Friday", desc: "Открытый плейлист и знакомства на событии" },
    { img: "assets/niches/standup.jpg", title: "Open Mic Night", desc: "Стендап · гости бесплатно до 20:00" },
    { img: "assets/niches/concert.jpg", title: "Live Jazz", desc: "Концерт · билеты от 45 000 сум" },
  ],
  selectionEvents: [
    { title: "EVOS Jazz Night", date: "12 апр, 20:00", price: "от 45 000", free: false, views: "1.2k", likes: "84", types: ["Музыка", "Концерт"], img: "assets/showcase/concert1.jpg", liked: true },
    { title: "Product Workshop", date: "13 апр, 11:00", price: "от 120 000", free: false, views: "640", likes: "41", types: ["Воркшоп"], img: "assets/niches/workshop.jpg", liked: true },
    { title: "Biz Conf Tashkent", date: "15 апр, 10:00", price: "от 250 000", free: false, views: "2.1k", likes: "120", types: ["Конференция"], img: "assets/niches/conference.jpg", liked: true },
    { title: "Party Friday", date: "Пт, 22:00", price: "от 80 000", free: false, views: "980", likes: "76", types: ["Вечеринка"], img: "assets/niches/party.jpg", liked: true },
  ],
  freeEvents: [
    { title: "Стендап Open Mic", date: "Пт, 19:30", price: "Бесплатно", free: true, views: "540", likes: "62", types: ["Стендап"], img: "assets/niches/standup.jpg", liked: false },
    { title: "Morning Yoga Park", date: "Сб, 08:00", price: "Бесплатно", free: true, views: "310", likes: "28", types: ["Спорт", "Wellness"], img: "assets/niches/sport.jpg", liked: true },
    { title: "Networking Meetup", date: "Вс, 18:00", price: "Бесплатно", free: true, views: "420", likes: "35", types: ["Networking"], img: "assets/showcase/cover3.jpg", liked: false },
    { title: "Photo Walk", date: "Сб, 16:00", price: "Бесплатно", free: true, views: "190", likes: "19", types: ["Фото"], img: "assets/showcase/cover1.jpg", liked: false },
  ],
  nearEvents: [
    { title: "Party Friday", date: "Пт, 22:00 · 1.2 км", price: "от 80 000", free: false, views: "980", likes: "76", types: ["Вечеринка"], img: "assets/niches/party.jpg", liked: false, address: "Чиланзар, 2.1 км" },
    { title: "Стендап Open Mic", date: "Пт, 19:30 · 800 м", price: "Бесплатно", free: true, views: "540", likes: "62", types: ["Стендап"], img: "assets/niches/standup.jpg", liked: false, address: "Яккасарай, 0.8 км" },
    { title: "Live Jazz", date: "Сегодня, 20:00 · 2.4 км", price: "от 45 000", free: false, views: "1.2k", likes: "84", types: ["Концерт"], img: "assets/showcase/concert1.jpg", liked: true, address: "Мирзо-Улугбек, 2.4 км" },
  ],
  profiles: [
    { name: "Малика, 24", meta: "Юнусабад", img: "assets/showcase/user1.jpg" },
    { name: "Азиз, 27", meta: "Чиланзар", img: "assets/showcase/user2.jpg" },
    { name: "Диана, 23", meta: "Мирзо-Улугбек", img: "assets/showcase/user3.jpg" },
    { name: "Тимур, 29", meta: "Яккасарай", img: "assets/showcase/avatar.png" },
    { name: "Нигора, 25", meta: "Сергели", img: "assets/showcase/cover2.jpg" },
    { name: "Жасур, 28", meta: "Юнусабад", img: "assets/showcase/cover3.jpg" },
    { name: "Сабина, 22", meta: "Чиланзар", img: "assets/showcase/cover4.jpg" },
    { name: "Отабек, 31", meta: "Мирабад", img: "assets/showcase/cover1.jpg" },
  ],
  comments: [
    { user: "Малика", text: "Кто идёт на стендап в пятницу? Можно компанией", time: "2 ч", event: "Стендап Open Mic", eventImg: "assets/niches/standup.jpg", av: "assets/showcase/user1.jpg" },
    { user: "Азиз", text: "Jazz night — огонь, кто ещё не брал билет?", time: "5 ч", event: "EVOS Jazz Night", eventImg: "assets/showcase/concert1.jpg", av: "assets/showcase/user2.jpg" },
    { user: "Диана", text: "На йогу утром беру подругу, есть места?", time: "вчера", event: "Morning Yoga Park", eventImg: "assets/niches/sport.jpg", av: "assets/showcase/user3.jpg" },
  ],
  chats: [
    { name: "Малика", preview: "Давай в 19:30 у входа", time: "12:40", unread: 2, img: "assets/showcase/user1.jpg", online: true },
    { name: "Азиз", preview: "Билеты взял, до встречи", time: "вчера", unread: 0, img: "assets/showcase/user2.jpg", online: false },
    { name: "Диана", preview: "Можно +1 подругу?", time: "пн", unread: 1, img: "assets/showcase/user3.jpg", online: true },
    { name: "Тимур", preview: "Фото с концерта скинул", time: "вс", unread: 0, img: "assets/showcase/avatar.png", online: false },
  ],
  interested: [
    { name: "Малика", meta: "", img: "assets/showcase/user1.jpg" },
    { name: "Диана", meta: "", img: "assets/showcase/user3.jpg" },
    { name: "Нигора", meta: "", img: "assets/showcase/cover2.jpg" },
    { name: "Сабина", meta: "", img: "assets/showcase/cover4.jpg" },
  ],
};

window.TaneeshUI = {
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
      <button type="button" class="event-h" data-toast="${ev.title}">
        <div class="event-h-media media-scrim">
          <img src="${ev.img}" alt="" loading="lazy" />
          <span class="price ${ev.free ? "free" : "paid"}">${ev.price}</span>
          <span class="heart ${ev.liked ? "is-on" : ""}" data-like="${list}:${i}" role="button" aria-label="Избранное">
            <svg viewBox="0 0 24 24" fill="${ev.liked ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2"><path d="M12 20s-7-4.4-9.2-8.2A5.2 5.2 0 0112 5.1a5.2 5.2 0 019.2 6.7C19 15.6 12 20 12 20z"/></svg>
          </span>
          <div class="stats">
            <span class="stat">👁 ${ev.views}</span>
            <span class="stat">♥ ${ev.likes}</span>
          </div>
        </div>
        <strong>${ev.title}</strong>
        <div class="date">${ev.date}</div>
        <div class="types">${ev.types.map((t) => `<span class="type">${t}</span>`).join("")}</div>
      </button>
    `;
  },

  gridCard(ev, i, list = "all") {
    return `
      <button type="button" class="event-g" data-toast="${ev.title}">
        <div class="event-h-media media-scrim">
          <img src="${ev.img}" alt="" loading="lazy" />
          <span class="price ${ev.free ? "free" : "paid"}">${ev.price}</span>
          <span class="heart ${ev.liked ? "is-on" : ""}" data-like="${list}:${i}" role="button" aria-label="Избранное">
            <svg viewBox="0 0 24 24" fill="${ev.liked ? "currentColor" : "none"}" stroke="currentColor" stroke-width="2"><path d="M12 20s-7-4.4-9.2-8.2A5.2 5.2 0 0112 5.1a5.2 5.2 0 019.2 6.7C19 15.6 12 20 12 20z"/></svg>
          </span>
          <div class="stats">
            <span class="stat">👁 ${ev.views}</span>
            <span class="stat">♥ ${ev.likes}</span>
          </div>
        </div>
        <div class="event-g-title">${ev.title}</div>
        <div class="date">${ev.date}</div>
        <div class="types">${ev.types.map((t) => `<span class="type">${t}</span>`).join("")}</div>
      </button>
    `;
  },

  profileCard(p, { tall = false } = {}) {
    return `
      <button type="button" class="${tall ? "user-card" : "user"}" data-toast="${p.name}">
        <div class="user-media"><img src="${p.img}" alt="" loading="lazy" /></div>
        <strong>${p.name}</strong>
        ${p.meta ? `<span>${p.meta}</span>` : ""}
      </button>
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
      const t = e.target.closest("[data-toast]");
      if (t) this.toast(t.dataset.toast);
    });
  },
};
