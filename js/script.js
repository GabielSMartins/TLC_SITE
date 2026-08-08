const defaultPhotos = [
  {
    id: "1",
    title: "Preparação do espaço",
    category: "Preparacao",
    date: "2026-05-12",
    description: "Equipe organizando o ambiente com carinho para acolher cada participante do TLC.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80",
    source: "seed"
  },
  {
    id: "2",
    title: "Oração em comunidade",
    category: "Oracao",
    date: "2026-05-13",
    description: "Momento de entrega e intercessão sob a proteção de Nossa Senhora de Guadalupe.",
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1200&q=80",
    source: "seed"
  },
  {
    id: "3",
    title: "Palavra que transforma",
    category: "Palestras",
    date: "2026-05-13",
    description: "Uma reflexão profunda sobre fé, amizade e serviço dentro da vida da Igreja.",
    image: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=1200&q=80",
    source: "seed"
  },
  {
    id: "4",
    title: "Dinâmica fraterna",
    category: "Dinamicas",
    date: "2026-05-14",
    description: "Atividade pensada para aproximar corações e fortalecer a confiança entre todos.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
    source: "seed"
  },
  {
    id: "5",
    title: "Equipe em serviço",
    category: "Equipe",
    date: "2026-05-14",
    description: "Servidores reunidos depois de uma jornada intensa de amor, cuidado e dedicação.",
    image: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1200&q=80",
    source: "seed"
  },
  {
    id: "6",
    title: "Santa Missa do encontro",
    category: "Santa Missa",
    date: "2026-05-15",
    description: "Celebração central do TLC, marcada por gratidão, reverência e unidade.",
    image: "https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1200&q=80",
    source: "seed"
  },
  {
    id: "7",
    title: "Foto oficial do TLC",
    category: "Foto oficial",
    date: "2026-05-15",
    description: "Registro especial de todos que fizeram parte desse encontro de fé e amor.",
    image: "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?auto=format&fit=crop&w=1200&q=80",
    source: "seed"
  }
];

const storageKeys = {
  user: "tlcUser",
  photos: "tlcPhotos",
  accessRequests: "tlcAccessRequests",
  approvedUsers: "tlcApprovedUsers",
  prayerRequests: "tlcPrayerRequests",
  resetVersion: "tlcResetVersion"
};

const sessionKeys = {
  redirectAfterLogin: "tlcRedirectAfterLogin",
  playIntro: "tlcPlayIntro",
  authActive: "tlcAuthActive",
  loginNotice: "tlcLoginNotice"
};

const galleryCategories = ["Todas", "Preparacao", "Oracao", "Palestras", "Dinamicas", "Equipe", "Santa Missa", "Foto oficial"];
const categoryLabels = {
  Todas: "Todas",
  Preparacao: "Preparação",
  Oracao: "Oração",
  Palestras: "Palestras",
  Dinamicas: "Dinâmicas",
  Equipe: "Equipe",
  "Santa Missa": "Santa Missa",
  "Foto oficial": "Foto oficial"
};
const defaultAvatar = "data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 160'%3E%3Crect width='160' height='160' rx='80' fill='%23ead7aa'/%3E%3Ccircle cx='80' cy='60' r='28' fill='%236d1731' fill-opacity='.18'/%3E%3Cpath d='M34 130c7-24 27-38 46-38s39 14 46 38' fill='%236d1731' fill-opacity='.18'/%3E%3Ccircle cx='80' cy='58' r='24' fill='%236d1731'/%3E%3Cpath d='M42 128c8-20 24-32 38-32s30 12 38 32' fill='%236d1731'/%3E%3C/svg%3E";
const adminEmail = "administrativo.tlc.paraiso@gmail.com";
const socialLinks = {
  instagram: "https://www.instagram.com/tlcparaiso/",
  whatsapp: "https://api.whatsapp.com/"
};
const storageResetVersion = "2026-07-04-gabriel-admin-reset-v2";
const adminProfiles = [
  {
    canonicalName: "Gabriel Soares",
    aliases: ["gabriel soares", "gabriel soares martina"],
    email: adminEmail
  }
];
const teamDefinitions = [
  {
    id: "cozinha",
    name: "Cozinha",
    phrase: "Servir com amor também passa pelo cuidado de cada refeição.",
    image: "https://images.unsplash.com/photo-1556911220-bda9f7f7597e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "musica",
    name: "Música",
    phrase: "Cada canção ajuda o coração a rezar junto.",
    image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "limpeza",
    name: "Limpeza",
    phrase: "Organizar o ambiente também é uma forma de acolher.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "animacao",
    name: "Animação",
    phrase: "A alegria partilhada abre caminho para encontros verdadeiros.",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "coordenacao",
    name: "Coordenação",
    phrase: "Cuidar do todo é servir com visão, escuta e responsabilidade.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "intercessao",
    name: "Intercessão",
    phrase: "A equipe que sustenta o encontro em oração silenciosa e fiel.",
    image: "https://images.unsplash.com/photo-1504052434569-70ad5836ab65?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "apoio",
    name: "Apoio",
    phrase: "Presença que ajuda em tudo, sempre pronta para servir.",
    image: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1200&q=80"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  initializeStorage();
  enforceAuth();
  renderSharedLayout();
  bindNavbarEvents();
  initPostLoginIntro();
  initHomePrayerPreview();
  initLoginPage();
  initGalleryPage();
  initUploadPage();
  initProfilePage();
  initPublicProfilePage();
  initPrayerWallPage();
  initTeamsPage();
  initAdminPage();
  initRevealAnimations();
  initSacredLights();
  initMarianHero();
  initJourneyBoard();
  initLiveMetrics();
  initHomeScrollProgress();
  initInteractiveCards();
  initFooterActions();
});

function initFooterActions() {
  document.querySelectorAll("[data-scroll-top]").forEach((button) => {
    button.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

function initHomeScrollProgress() {
  if (document.body.dataset.page !== "home") {
    return;
  }

  const progress = document.getElementById("home-scroll-progress");
  if (!progress) {
    return;
  }

  let ticking = false;

  const updateProgress = () => {
    const scrollLimit = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    const scrollProgress = Math.min(Math.max(window.scrollY / scrollLimit, 0), 1);
    progress.style.transform = `scaleX(${scrollProgress})`;
    ticking = false;
  };

  const requestUpdate = () => {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(updateProgress);
    }
  };

  window.addEventListener("scroll", requestUpdate, { passive: true });
  window.addEventListener("resize", requestUpdate);
  updateProgress();
}

function initializeStorage() {
  if (localStorage.getItem(storageKeys.resetVersion) !== storageResetVersion) {
    localStorage.setItem(storageKeys.photos, JSON.stringify(defaultPhotos));
    localStorage.setItem(storageKeys.user, JSON.stringify({
      isLoggedIn: false,
      name: "",
      email: "",
      role: "Visitante",
      remember: false,
      avatar: defaultAvatar,
      bio: "",
      instagram: "",
      whatsapp: "",
      team: ""
    }));
    localStorage.setItem(storageKeys.accessRequests, JSON.stringify([]));
    localStorage.setItem(storageKeys.prayerRequests, JSON.stringify([]));
    localStorage.setItem(storageKeys.approvedUsers, JSON.stringify([
      {
        id: "admin-gabriel-soares",
        name: "Gabriel Soares",
        email: adminEmail,
        role: "Administrador",
        approvedAt: new Date().toISOString(),
        avatar: defaultAvatar,
        bio: "",
        instagram: "",
        whatsapp: "",
        team: "coordenacao"
      }
    ]));
    localStorage.setItem(storageKeys.resetVersion, storageResetVersion);
    sessionStorage.removeItem(sessionKeys.authActive);
    sessionStorage.removeItem(sessionKeys.redirectAfterLogin);
    sessionStorage.removeItem(sessionKeys.playIntro);
    sessionStorage.removeItem(sessionKeys.loginNotice);
    return;
  }

  if (!localStorage.getItem(storageKeys.photos)) {
    localStorage.setItem(storageKeys.photos, JSON.stringify(defaultPhotos));
  }

  if (!localStorage.getItem(storageKeys.user)) {
    localStorage.setItem(storageKeys.user, JSON.stringify({
      isLoggedIn: false,
      name: "",
      email: "",
      role: "Visitante",
      remember: false,
      avatar: defaultAvatar,
      bio: "",
      instagram: "",
      whatsapp: "",
      team: ""
    }));
  }

  if (!localStorage.getItem(storageKeys.accessRequests)) {
    localStorage.setItem(storageKeys.accessRequests, JSON.stringify([]));
  }

  if (!localStorage.getItem(storageKeys.prayerRequests)) {
    localStorage.setItem(storageKeys.prayerRequests, JSON.stringify([]));
  }

  if (!localStorage.getItem(storageKeys.approvedUsers)) {
    localStorage.setItem(storageKeys.approvedUsers, JSON.stringify([
      {
        id: "admin-gabriel-soares",
        name: "Gabriel Soares",
        email: adminEmail,
        role: "Administrador",
        approvedAt: new Date().toISOString(),
        avatar: defaultAvatar,
        bio: "",
        instagram: "",
        whatsapp: "",
        team: "coordenacao"
      }
    ]));
  }

  // Mantém compatibilidade com fotos antigas, acrescentando curtidas e comentários.
  setPhotos(getPhotos());
}

function getBasePath() {
  return document.body.dataset.basePath || ".";
}

function pathFor(relativePath) {
  const basePath = getBasePath();
  return basePath === "." ? relativePath : `${basePath}/${relativePath}`;
}

function currentRelativePath() {
  const basePath = getBasePath();
  const currentFile = window.location.pathname.replace(/\\/g, "/").split("/").pop() || "index.html";
  const relativePath = basePath === ".." ? `pages/${currentFile}` : currentFile;
  return `${relativePath}${window.location.hash || ""}`;
}

function resolveAppPath(appPath) {
  if (!appPath) {
    return pathFor("index.html");
  }

  if (/^(https?:|file:)/i.test(appPath)) {
    return appPath;
  }

  const [pathname, hash = ""] = appPath.split("#");
  const normalizedPath = pathname.replace(/^\.?\/*/, "");
  const target = pathFor(normalizedPath || "index.html");

  return hash ? `${target}#${hash}` : target;
}

function repairText(value = "") {
  return String(value || "")
    .replaceAll("\u00c3\u00a1", "á")
    .replaceAll("\u00c3\u00a0", "à")
    .replaceAll("\u00c3\u00a2", "â")
    .replaceAll("\u00c3\u00a3", "ã")
    .replaceAll("\u00c3\u00a9", "é")
    .replaceAll("\u00c3\u00aa", "ê")
    .replaceAll("\u00c3\u00ad", "í")
    .replaceAll("\u00c3\u00b3", "ó")
    .replaceAll("\u00c3\u00b4", "ô")
    .replaceAll("\u00c3\u00b5", "õ")
    .replaceAll("\u00c3\u00ba", "ú")
    .replaceAll("\u00c3\u00a7", "ç")
    .replaceAll("\u00c3\u2030", "É")
    .replaceAll("\u00c3\u2021", "Ç")
    .replaceAll("\u00e2\u20ac\u00a2", "•")
    .replaceAll("Prepara\u00c3\u00a7\u00c3\u00a3o", "Preparação")
    .replaceAll("Ora\u00c3\u00a7\u00c3\u00a3o", "Oração")
    .replaceAll("Din\u00c3\u00a2micas", "Dinâmicas")
    .replaceAll("intercessao", "intercessão")
    .replaceAll("protecao", "proteção")
    .replaceAll("reflexao", "reflexão")
    .replaceAll("servico", "serviço")
    .replaceAll("coracoes", "corações")
    .replaceAll("confianca", "confiança")
    .replaceAll("Celebracao", "Celebração")
    .replaceAll("gratidao", "gratidão");
}

function getUser() {
  return JSON.parse(localStorage.getItem(storageKeys.user)) || {};
}

function isGuestUser(user = getUser()) {
  return normalizeValue(user.role || "") === "visitante";
}

function isAdminUser(user = getUser()) {
  return normalizeValue(user.role || "") === "administrador";
}

function getAdminProfileByName(name) {
  const normalized = normalizeValue(name);
  return adminProfiles.find((profile) => profile.aliases.includes(normalized)) || null;
}

function setUser(user) {
  localStorage.setItem(storageKeys.user, JSON.stringify({
    ...user,
    avatar: user.avatar || defaultAvatar,
    bio: user.bio || "",
    instagram: user.instagram || "",
    whatsapp: user.whatsapp || "",
    team: user.team || ""
  }));
}

function getPhotos() {
  // Centraliza a leitura das fotos e garante o formato social das curtidas e comentários.
  const photos = JSON.parse(localStorage.getItem(storageKeys.photos)) || [];
  return photos.map((photo) => ({
    ...photo,
    title: repairText(photo.title),
    category: repairText(photo.category),
    description: repairText(photo.description),
    likes: Array.isArray(photo.likes) ? photo.likes : [],
    comments: Array.isArray(photo.comments)
      ? photo.comments.map((comment) => ({
        ...comment,
        authorName: repairText(comment.authorName),
        message: repairText(comment.message)
      }))
      : []
  }));
}

function setPhotos(photos) {
  localStorage.setItem(storageKeys.photos, JSON.stringify(photos));
}

function getCurrentUserKey(user = getUser()) {
  if (user.email) {
    return normalizeValue(user.email);
  }

  return normalizeValue(user.name);
}

function isOwnerIdentity(ownerEmail, ownerName, user = getUser()) {
  if (!user?.isLoggedIn) {
    return false;
  }

  if (ownerEmail && user.email && normalizeValue(ownerEmail) === normalizeValue(user.email)) {
    return true;
  }

  return Boolean(ownerName && user.name && samePersonName(ownerName, user.name));
}

function canManagePhoto(photo, user = getUser()) {
  return isAdminUser(user) || isOwnerIdentity(photo.uploaderEmail, photo.uploaderName, user);
}

function canDeleteComment(comment, user = getUser()) {
  return isAdminUser(user) || isOwnerIdentity(comment.authorEmail, comment.authorName, user);
}

function getUserPhotos(identity = {}) {
  return getPhotos()
    .filter((photo) => photo.source === "upload")
    .filter((photo) => {
      if (identity.email) {
        return normalizeValue(photo.uploaderEmail) === normalizeValue(identity.email);
      }

      return samePersonName(photo.uploaderName, identity.name);
    })
    .reverse();
}

function getTeamDefinition(teamId) {
  return teamDefinitions.find((team) => team.id === teamId) || null;
}

function getTeamLabel(teamId) {
  return getTeamDefinition(teamId)?.name || "";
}

function getProfileRecordByIdentity(identity = {}) {
  const approvedUsers = getApprovedUsers();
  const accessRequests = getAccessRequests();
  const currentUser = getUser();
  const records = [
    ...approvedUsers,
    ...accessRequests,
    ...(currentUser?.name ? [currentUser] : [])
  ];

  if (identity.email) {
    const byEmail = records.find((record) => normalizeValue(record.email) === normalizeValue(identity.email));
    if (byEmail) {
      return byEmail;
    }
  }

  if (identity.name) {
    return records.find((record) => samePersonName(record.name, identity.name)) || null;
  }

  return null;
}

function buildPublicProfilePath(identity = {}) {
  const params = new URLSearchParams();
  if (identity.email) {
    params.set("email", identity.email);
  } else if (identity.name) {
    params.set("name", identity.name);
  }

  const query = params.toString();
  const basePath = pathFor("pages/perfil-publico.html");
  return query ? `${basePath}?${query}` : basePath;
}

function getPublicProfile(identity = {}) {
  // Monta um perfil público leve a partir do cadastro local, do usuário atual e das fotos postadas.
  const record = getProfileRecordByIdentity(identity);
  if (!record) {
    return null;
  }

  const instagram = normalizeInstagram(record.instagram || identity.instagram || "");
  const whatsapp = normalizeWhatsapp(record.whatsapp || identity.whatsapp || "");
  const email = record.email || identity.email || "";
  const name = record.name || identity.name || "Participante TLC";

  const uploadedPhotos = getUserPhotos({ email, name });

  return {
    name,
    email,
    role: record.role || identity.role || "Participante",
    avatar: record.avatar || identity.avatar || defaultAvatar,
    bio: record.bio || identity.bio || "",
    team: record.team || identity.team || "",
    teamLabel: getTeamLabel(record.team || identity.team || ""),
    instagram,
    whatsapp,
    instagramLabel: formatInstagramLabel(instagram),
    instagramLink: getInstagramLink(instagram),
    whatsappLabel: formatWhatsappLabel(whatsapp),
    whatsappLink: getWhatsappLink(whatsapp),
    profilePath: buildPublicProfilePath({ email, name }),
    photoCount: uploadedPhotos.length,
    photos: uploadedPhotos
  };
}

function getAccessRequests() {
  return JSON.parse(localStorage.getItem(storageKeys.accessRequests)) || [];
}

function setAccessRequests(requests) {
  localStorage.setItem(storageKeys.accessRequests, JSON.stringify(requests));
}

function getPrayerRequests() {
  return JSON.parse(localStorage.getItem(storageKeys.prayerRequests)) || [];
}

function setPrayerRequests(requests) {
  localStorage.setItem(storageKeys.prayerRequests, JSON.stringify(requests));
}

function getApprovedUsers() {
  return JSON.parse(localStorage.getItem(storageKeys.approvedUsers)) || [];
}

function setApprovedUsers(users) {
  localStorage.setItem(storageKeys.approvedUsers, JSON.stringify(users));
}

function enforceAuth() {
  const page = document.body.dataset.page;
  const user = getUser();
  const hasActiveSession = sessionStorage.getItem(sessionKeys.authActive) === "true";
  const hasPersistentAccess = Boolean(user.isLoggedIn && user.remember);
  const isAuthenticated = hasActiveSession || hasPersistentAccess;
  const publicPages = ["login", "public-profile"];
  const extendedPublicPages = ["teams"];
  const visitorRestrictedPages = ["gallery", "upload", "profile"];
  const guestUser = isGuestUser(user);

  if (publicPages.includes(page) || extendedPublicPages.includes(page)) {
    if (page === "login" && user.isLoggedIn && isAuthenticated && !guestUser) {
      const pendingRedirect = sessionStorage.getItem(sessionKeys.redirectAfterLogin);
      const destination = resolveAppPath(pendingRedirect || "index.html");
      sessionStorage.removeItem(sessionKeys.redirectAfterLogin);
      window.location.href = destination;
    }
    return;
  }

  if (!user.isLoggedIn || !isAuthenticated) {
    sessionStorage.setItem(sessionKeys.redirectAfterLogin, currentRelativePath());
    window.location.href = pathFor("pages/login.html");
    return;
  }

  if (guestUser && visitorRestrictedPages.includes(page)) {
    sessionStorage.setItem(sessionKeys.redirectAfterLogin, currentRelativePath());
    sessionStorage.setItem(sessionKeys.loginNotice, "Entre com sua conta aprovada para ver a galeria, enviar fotos ou mexer no perfil.");
    window.location.href = pathFor("pages/login.html");
    return;
  }

  if (page === "admin" && !isAdminUser(user)) {
    sessionStorage.setItem(sessionKeys.loginNotice, "Essa área é só do administrador.");
    window.location.href = pathFor("index.html");
  }
}

function getPhotoAuthor(photo) {
  if (photo.source === "upload") {
    const profile = getPublicProfile({
      name: photo.uploaderName || "Participante TLC",
      email: photo.uploaderEmail || "",
      avatar: photo.uploaderAvatar || defaultAvatar,
      bio: photo.uploaderBio || "",
      instagram: photo.uploaderInstagram || "",
      whatsapp: photo.uploaderWhatsapp || ""
    });

    if (profile) {
      return profile;
    }

    return {
      name: photo.uploaderName || "Participante TLC",
      avatar: photo.uploaderAvatar || defaultAvatar,
      bio: photo.uploaderBio || "",
      instagram: normalizeInstagram(photo.uploaderInstagram || ""),
      whatsapp: normalizeWhatsapp(photo.uploaderWhatsapp || ""),
      instagramLabel: formatInstagramLabel(photo.uploaderInstagram || ""),
      instagramLink: getInstagramLink(photo.uploaderInstagram || ""),
      whatsappLabel: formatWhatsappLabel(photo.uploaderWhatsapp || ""),
      whatsappLink: getWhatsappLink(photo.uploaderWhatsapp || ""),
      profilePath: buildPublicProfilePath({
        email: photo.uploaderEmail || "",
        name: photo.uploaderName || "Participante TLC"
      })
    };
  }

  return {
    name: "Equipe TLC",
    avatar: defaultAvatar,
    bio: "",
    instagram: "",
    whatsapp: "",
    instagramLabel: "",
    instagramLink: "",
    whatsappLabel: "",
    whatsappLink: "",
    profilePath: ""
  };
}

function getCategoryLabel(category) {
  return repairText(categoryLabels[category] || category);
}

function renderPhotoAuthor(photo, tone = "dark") {
  const author = getPhotoAuthor(photo);
  const content = `
    <img src="${author.avatar}" alt="Foto de ${author.name}">
    <span>${author.name}</span>
  `;

  if (author.profilePath) {
    return `
      <a class="photo-author photo-author-link ${tone}" href="${author.profilePath}" data-profile-link="true" aria-label="Abrir perfil de ${author.name}">
        ${content}
      </a>
    `;
  }

  return `
    <div class="photo-author ${tone}">
      ${content}
    </div>
  `;
}

function renderPhotoCaption(photo) {
  const author = getPhotoAuthor(photo);
  return `
    <p class="post-caption">
      <strong>${author.name}</strong> ${photo.description}
    </p>
  `;
}

function renderPhotoCommentsPreview(photo) {
  const comments = Array.isArray(photo.comments) ? photo.comments.slice(-2).reverse() : [];
  if (!comments.length) {
    return "";
  }

  return `
    <div class="post-comments-preview">
      ${comments.map((comment) => `
        <p><strong>${comment.authorName}</strong> ${comment.message}</p>
      `).join("")}
    </div>
  `;
}

function renderPostCard(photo, options = {}) {
  const {
    openHref = "",
    openInNewPage = false,
    allowProfileLink = true,
    cardClass = ""
  } = options;
  const likeCount = Array.isArray(photo.likes) ? photo.likes.length : 0;
  const commentCount = Array.isArray(photo.comments) ? photo.comments.length : 0;
  const imageMarkup = openHref
    ? `
      <a class="post-media-link" href="${openHref}" ${openInNewPage ? "" : ""}>
        <img src="${photo.image}" alt="${photo.title}">
      </a>
    `
    : `<img src="${photo.image}" alt="${photo.title}">`;

  return `
    <article class="gallery-item post-card ${cardClass}" data-photo-id="${photo.id}">
      <div class="post-card__header">
        ${allowProfileLink ? renderPhotoAuthor(photo, "dark") : `<div class="photo-author dark"><img src="${getPhotoAuthor(photo).avatar}" alt="Foto de ${getPhotoAuthor(photo).name}"><span>${getPhotoAuthor(photo).name}</span></div>`}
      </div>
      ${imageMarkup}
      <div class="gallery-copy post-card__body">
        <div class="post-stats">
          <span><i class="fa-solid fa-heart"></i> ${formatNumber(likeCount)} curtida${likeCount === 1 ? "" : "s"}</span>
          <span><i class="fa-solid fa-comment"></i> ${formatNumber(commentCount)} comentário${commentCount === 1 ? "" : "s"}</span>
        </div>
        ${renderPhotoCaption(photo)}
        ${renderPhotoCommentsPreview(photo)}
        <div class="gallery-meta">
          <span>${getCategoryLabel(photo.category)}</span>
          <span>${formatDate(photo.date)}</span>
        </div>
      </div>
    </article>
  `;
}

function renderSharedLayout() {
  const navbarRoot = document.getElementById("navbar-root");
  const footerRoot = document.getElementById("footer-root");
  const user = getUser();
  const page = document.body.dataset.page;

  if (navbarRoot) {
    const publicLinks = [
      { href: pathFor("index.html"), label: "Início", key: "home" },
      { href: `${pathFor("index.html")}#sobre`, label: "Sobre", key: "about" },
      { href: pathFor("pages/galeria.html"), label: "Galeria", key: "gallery" },
      { href: pathFor("pages/equipes.html"), label: "Equipes", key: "teams" },
      { href: pathFor("pages/login.html"), label: "Entrar", key: "login" },
      { href: `${pathFor("pages/login.html")}#criar-conta`, label: "Criar conta", key: "register" }
    ];

    const privateLinks = [
      { href: pathFor("index.html"), label: "Início", key: "home" },
      { href: pathFor("pages/galeria.html"), label: "Galeria", key: "gallery" },
      { href: pathFor("pages/oracao.html"), label: "Mural de oração", key: "prayer" },
      { href: pathFor("pages/equipes.html"), label: "Equipes", key: "teams" },
      { href: pathFor("pages/enviar.html"), label: "Enviar fotos", key: "upload" },
      { href: pathFor("pages/perfil.html"), label: "Perfil", key: "profile" }
    ];

    const visitorLinks = [
      { href: pathFor("index.html"), label: "Início", key: "home" },
      { href: pathFor("pages/login.html"), label: "Fazer login", key: "login" },
      { href: `${pathFor("pages/login.html")}#criar-conta`, label: "Criar conta", key: "register" }
    ];

    const adminLinks = [
      ...privateLinks,
      { href: pathFor("pages/admin.html"), label: "Admin", key: "admin" }
    ];

    const links = user.isLoggedIn
      ? (isGuestUser(user) ? visitorLinks : (isAdminUser(user) ? adminLinks : privateLinks))
      : publicLinks;
    const desktopLinks = links.map((link) => `<a href="${link.href}" class="${isLinkActive(link, page) ? "active" : ""}">${link.label}</a>`).join("");
    const mobileLinks = links.map((link) => `<a href="${link.href}" class="mobile-link">${link.label}</a>`).join("");

    navbarRoot.innerHTML = `
      <nav class="navbar">
        <div class="nav-inner">
          <a class="brand" href="${pathFor("index.html")}">
            <div class="brand-mark image-mark">
              <img src="${pathFor("images/logo-tlc-paraiso.jpg")}" alt="Logo TLC Paraiso">
            </div>
            <div class="brand-copy">
              <strong>TLC</strong>
              <span>Encontro de Fé e Amor</span>
            </div>
          </a>
          <div class="nav-links">${desktopLinks}</div>
          <div class="nav-actions">
            ${user.isLoggedIn ? `<span class="nav-user">${user.name || "Participante TLC"}</span>` : ""}
            ${user.isLoggedIn ? `<button class="nav-logout desktop-only" id="logout-button">Sair</button>` : ""}
            <button class="hamburger" id="hamburger-button" aria-label="Abrir menu">
              <i class="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>
      <div class="mobile-panel" id="mobile-panel">
        ${mobileLinks}
        ${user.isLoggedIn ? `<span class="nav-user">${user.name || "Participante TLC"}</span>` : ""}
        ${user.isLoggedIn ? `<button class="btn nav-logout" id="logout-button-mobile">Sair</button>` : ""}
      </div>
    `;
  }

  if (footerRoot) {
    footerRoot.innerHTML = `
      <footer class="site-footer site-footer--devotional" id="contato">
        <div class="footer-shell">
          <div class="footer-layout">
            <figure class="footer-sacred-card footer-sacred-card--mary">
              <div class="footer-sacred-arch">
                <img src="${pathFor("images/nossa-senhora-guadalupe.png")}" alt="Nossa Senhora de Guadalupe">
              </div>
              <figcaption>Nossa Senhora de Guadalupe,<br>rogai por nós!</figcaption>
            </figure>

            <nav class="footer-links footer-links--nav" aria-label="Navegação do rodapé">
              <strong>Navegação</strong>
              <a href="${pathFor("index.html")}"><i class="fa-solid fa-house"></i><span>Início</span></a>
              <a href="${pathFor("pages/galeria.html")}"><i class="fa-regular fa-image"></i><span>Galeria</span></a>
              <a href="${pathFor("pages/oracao.html")}"><i class="fa-regular fa-heart"></i><span>Mural de oração</span></a>
              <a href="${pathFor("pages/equipes.html")}"><i class="fa-solid fa-people-group"></i><span>Equipes</span></a>
              <a href="${pathFor("pages/enviar.html")}"><i class="fa-solid fa-camera"></i><span>Enviar fotos</span></a>
              <a href="${pathFor("pages/perfil.html")}"><i class="fa-regular fa-user"></i><span>Perfil</span></a>
            </nav>

            <div class="footer-links footer-links--contact">
              <strong>Contato</strong>
              <a href="mailto:${adminEmail}"><i class="fa-regular fa-envelope"></i><span>${adminEmail}</span></a>
              <a href="${socialLinks.whatsapp}" target="_blank" rel="noreferrer"><i class="fa-brands fa-whatsapp"></i><span>Chamar no WhatsApp</span></a>
            </div>

            <figure class="footer-sacred-card footer-sacred-card--church">
              <div class="footer-sacred-arch">
                <img src="${pathFor("images/igreja-matriz-footer.jpg")}" alt="Igreja Matriz">
              </div>
              <figcaption>Igreja Matriz,<br>onde tudo começou.</figcaption>
            </figure>
          </div>

          <div class="footer-bottom-bar">
            <p>© 2026 TLC - Encontro de Fé e Amor. Todos os direitos reservados.</p>
            <button class="footer-top-button" type="button" data-scroll-top>
              <i class="fa-solid fa-arrow-up"></i>
              <span>Voltar ao topo</span>
            </button>
            <p>Desenvolvido por Gabriel Soares Martins</p>
          </div>
        </div>
      </footer>
    `;
  }
}

function isLinkActive(link, page) {
  const map = {
    home: ["home"],
    gallery: ["gallery"],
    login: ["login"],
    upload: ["upload"],
    profile: ["profile"],
    admin: ["admin"],
    "public-profile": ["public-profile"],
    prayer: ["prayer"],
    teams: ["teams"]
  };

  return (map[link.key] || []).includes(page);
}

function bindNavbarEvents() {
  const hamburger = document.getElementById("hamburger-button");
  const mobilePanel = document.getElementById("mobile-panel");
  const logoutButtons = [document.getElementById("logout-button"), document.getElementById("logout-button-mobile")].filter(Boolean);
  const mobileLinks = document.querySelectorAll(".mobile-link");

  if (hamburger && mobilePanel) {
    hamburger.addEventListener("click", () => {
      mobilePanel.classList.toggle("open");
      document.body.classList.toggle("menu-open", mobilePanel.classList.contains("open"));
    });
  }

  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobilePanel?.classList.remove("open");
      document.body.classList.remove("menu-open");
    });
  });

  logoutButtons.forEach((button) => {
    button.addEventListener("click", handleLogout);
  });
}

function handleLogout() {
  const currentUser = getUser();
  setUser({
    ...currentUser,
    isLoggedIn: false,
    name: "",
    email: "",
    role: "Visitante",
    remember: false,
    avatar: defaultAvatar,
    bio: ""
  });

  sessionStorage.removeItem(sessionKeys.authActive);
  sessionStorage.removeItem(sessionKeys.playIntro);
  sessionStorage.removeItem(sessionKeys.redirectAfterLogin);
  window.location.href = pathFor("pages/login.html");
}

function initHomePrayerPreview() {
  const preview = document.getElementById("home-prayer-preview");
  if (!preview) {
    return;
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let requests = [];
  let currentIndex = 0;
  let autoplayTimer = null;

  const stopAutoplay = () => {
    window.clearInterval(autoplayTimer);
    autoplayTimer = null;
  };

  const startAutoplay = () => {
    stopAutoplay();
    if (reducedMotion || requests.length < 2 || document.hidden) {
      return;
    }

    autoplayTimer = window.setInterval(() => {
      showPrayer(currentIndex + 1);
    }, 5000);
  };

  const createPrayerNote = (request, tone) => {
    const note = document.createElement("a");
    note.className = `home-prayer-note home-prayer-note--carousel home-prayer-note--tone-${tone}`;
    note.href = "pages/oracao.html";

    const meta = document.createElement("div");
    meta.className = "home-prayer-note__meta";

    const author = document.createElement("strong");
    author.textContent = request.anonymous ? "Pedido anônimo" : (request.authorName || "Participante TLC");

    const date = document.createElement("time");
    if (request.createdAt) {
      const parsedDate = new Date(request.createdAt);
      if (!Number.isNaN(parsedDate.getTime())) {
        date.dateTime = parsedDate.toISOString();
        date.textContent = parsedDate.toLocaleDateString("pt-BR", {
          day: "2-digit",
          month: "short"
        }).replace(".", "");
      }
    }

    const message = document.createElement("p");
    message.textContent = request.text || "Uma intenção foi colocada em oração.";

    const content = document.createElement("div");
    content.className = "home-prayer-note__content";
    const contentLabel = document.createElement("span");
    contentLabel.className = "home-prayer-note__label";
    contentLabel.textContent = "Pedido de oração";
    content.append(contentLabel, message);

    const careMessage = document.createElement("div");
    careMessage.className = "home-prayer-note__care";
    careMessage.innerHTML = `
      <i class="fa-solid fa-church" aria-hidden="true"></i>
      <span>Vamos estar intercedendo por você em nossa capela.</span>
    `;

    meta.append(author, date);
    note.append(meta, content, careMessage);
    return note;
  };

  const showPrayer = (nextIndex, restart = false) => {
    if (!requests.length) {
      return;
    }

    currentIndex = (nextIndex + requests.length) % requests.length;
    const viewport = preview.querySelector(".home-prayer-carousel__viewport");
    const counter = preview.querySelector(".home-prayer-carousel__counter");
    const dots = [...preview.querySelectorAll(".home-prayer-carousel__dot")];
    if (!viewport) {
      return;
    }

    const note = createPrayerNote(requests[currentIndex], (currentIndex % 3) + 1);
    viewport.replaceChildren(note);
    window.requestAnimationFrame(() => note.classList.add("is-visible"));

    if (counter) {
      counter.textContent = `${currentIndex + 1} de ${requests.length}`;
    }
    dots.forEach((dot, index) => {
      const isActive = index === currentIndex;
      dot.classList.toggle("is-active", isActive);
      dot.setAttribute("aria-current", isActive ? "true" : "false");
    });

    if (restart) {
      startAutoplay();
    }
  };

  function renderHomePrayerPreview() {
    requests = getPrayerRequests()
      .slice()
      .sort((left, right) => new Date(right.createdAt) - new Date(left.createdAt))
      .slice(0, 6);

    stopAutoplay();
    preview.replaceChildren();

    if (!requests.length) {
      const empty = document.createElement("div");
      empty.className = "home-prayer-empty";
      empty.innerHTML = `
        <span aria-hidden="true"><i class="fa-solid fa-hands-praying"></i></span>
        <strong>Ainda não há pedidos publicados.</strong>
        <p>Quando alguém enviar uma oração pelo mural, ela aparecerá aqui automaticamente.</p>
        <a class="btn btn-primary" href="pages/oracao.html">Fazer o primeiro pedido</a>
      `;
      preview.append(empty);
      return;
    }

    const carousel = document.createElement("div");
    carousel.className = "home-prayer-carousel";

    const viewport = document.createElement("div");
    viewport.className = "home-prayer-carousel__viewport";

    const controls = document.createElement("div");
    controls.className = "home-prayer-carousel__controls";

    if (requests.length > 1) {
      const previous = document.createElement("button");
      previous.className = "home-prayer-carousel__arrow";
      previous.type = "button";
      previous.setAttribute("aria-label", "Ver pedido anterior");
      previous.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';

      const dots = document.createElement("div");
      dots.className = "home-prayer-carousel__dots";
      dots.setAttribute("aria-label", "Escolher pedido de oração");
      requests.forEach((request, index) => {
        const dot = document.createElement("button");
        dot.className = "home-prayer-carousel__dot";
        dot.type = "button";
        dot.setAttribute("aria-label", `Mostrar pedido ${index + 1}`);
        dot.addEventListener("click", () => showPrayer(index, true));
        dots.append(dot);
      });

      const next = document.createElement("button");
      next.className = "home-prayer-carousel__arrow";
      next.type = "button";
      next.setAttribute("aria-label", "Ver próximo pedido");
      next.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';

      previous.addEventListener("click", () => showPrayer(currentIndex - 1, true));
      next.addEventListener("click", () => showPrayer(currentIndex + 1, true));
      controls.append(previous, dots, next);
    }

    const counter = document.createElement("span");
    counter.className = "home-prayer-carousel__counter";
    controls.append(counter);
    carousel.append(viewport, controls);
    preview.append(carousel);

    currentIndex = Math.min(currentIndex, requests.length - 1);
    showPrayer(currentIndex);
    startAutoplay();
  }

  renderHomePrayerPreview();

  preview.addEventListener("mouseenter", stopAutoplay);
  preview.addEventListener("mouseleave", startAutoplay);
  preview.addEventListener("focusin", stopAutoplay);
  preview.addEventListener("focusout", (event) => {
    if (!preview.contains(event.relatedTarget)) {
      startAutoplay();
    }
  });

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
  });

  window.addEventListener("storage", (event) => {
    if (event.key === storageKeys.prayerRequests) {
      renderHomePrayerPreview();
    }
  });
}

function initJourneyBoard() {
  const stage = document.getElementById("faith-path-stage");
  if (!stage) {
    return;
  }

  const section = stage.closest(".faith-path-section");
  const progressPath = stage.querySelector("#faith-path-progress");
  const orb = stage.querySelector("#faith-path-orb");
  const mobileRail = stage.querySelector(".faith-path-mobile-rail");
  const mobileOrb = stage.querySelector("#faith-path-mobile-orb");
  const cards = [...stage.querySelectorAll(".faith-step-card")];
  const finish = stage.querySelector(".faith-path-finish");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);

  cards.forEach((card) => {
    const toggleCard = () => {
      const shouldOpen = !card.classList.contains("is-open");
      cards.forEach((item) => item.classList.remove("is-open"));
      card.classList.toggle("is-open", shouldOpen);
    };

    card.addEventListener("click", toggleCard);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleCard();
      }
    });
  });

  if (!section || !progressPath || !orb) {
    cards.forEach((card) => card.classList.add("is-active"));
    finish?.classList.add("is-active");
    return;
  }

  const totalLength = progressPath.getTotalLength();
  progressPath.style.strokeDasharray = `${totalLength}`;
  progressPath.style.strokeDashoffset = `${totalLength}`;

  let ticking = false;

  const paintJourney = () => {
    const stageRect = stage.getBoundingClientRect();
    const stageTop = window.scrollY + stageRect.top;
    const startScroll = stageTop - window.innerHeight * 0.72;
    const endScroll = stageTop + stage.offsetHeight - window.innerHeight * 0.30;
    const denominator = Math.max(endScroll - startScroll, 1);
    const progress = prefersReducedMotion
      ? 1
      : clamp((window.scrollY - startScroll) / denominator, 0, 1);

    stage.style.setProperty("--faith-progress", progress.toFixed(4));
    progressPath.style.strokeDashoffset = `${totalLength * (1 - progress)}`;

    const pathPoint = progressPath.getPointAtLength(totalLength * progress);
    orb.setAttribute("transform", `translate(${pathPoint.x} ${pathPoint.y})`);

    if (mobileRail && mobileOrb) {
      const railHeight = mobileRail.clientHeight;
      mobileOrb.style.top = `${railHeight * progress}px`;
    }

    let currentCard = null;
    cards.forEach((card) => {
      const threshold = Number(card.dataset.faithThreshold || 0);
      const isActive = progress >= threshold;
      card.classList.toggle("is-active", isActive);
      card.classList.remove("is-current");
      if (isActive) {
        currentCard = card;
      }
    });

    if (currentCard && progress < 0.98) {
      currentCard.classList.add("is-current");
    }

    if (finish) {
      const finishThreshold = Number(finish.dataset.faithThreshold || 0.98);
      finish.classList.toggle("is-active", progress >= finishThreshold);
    }

    ticking = false;
  };

  const requestPaint = () => {
    if (ticking) {
      return;
    }
    ticking = true;
    window.requestAnimationFrame(paintJourney);
  };

  window.addEventListener("scroll", requestPaint, { passive: true });
  window.addEventListener("resize", requestPaint);

  if ("ResizeObserver" in window) {
    const observer = new ResizeObserver(requestPaint);
    observer.observe(stage);
  }

  requestPaint();
}

function initLiveMetrics() {
  const participantsElement = document.getElementById("metric-participants");
  const photosElement = document.getElementById("metric-photos");
  const prayerElement = document.getElementById("metric-prayer");
  const teamElement = document.getElementById("metric-team");
  const messagesElement = document.getElementById("metric-messages");
  const missionElement = document.getElementById("metric-mission");

  if (!participantsElement || !photosElement || !prayerElement || !teamElement || !messagesElement || !missionElement) {
    return;
  }

  const photos = getPhotos();
  const approvedUsers = getApprovedUsers();
  const accessRequests = getAccessRequests();

  const participantCount = approvedUsers.filter((item) => normalizeValue(item.role) !== "administrador").length;
  const photoCount = photos.length;
  const prayerCount = photos.filter((photo) => normalizeValue(photo.category) === "oracao").length;
  const teamCount = photos.filter((photo) => normalizeValue(photo.category) === "equipe").length;
  const messageCount = accessRequests.length;
  const missionCount = photoCount > 0 || participantCount > 0 ? 1 : 0;

  const metrics = [
    { element: participantsElement, target: participantCount },
    { element: photosElement, target: photoCount },
    { element: prayerElement, target: prayerCount },
    { element: teamElement, target: teamCount },
    { element: messagesElement, target: messageCount },
    { element: missionElement, target: missionCount }
  ];

  metrics.forEach(({ element, target }) => {
    animateMetricNumber(element, target);
  });
}

function animateMetricNumber(element, target) {
  const formatNumber = (value) => value.toLocaleString("pt-BR");
  const duration = 1100;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const value = Math.round(target * eased);
    element.textContent = formatNumber(value);

    if (progress < 1) {
      window.requestAnimationFrame(tick);
    } else {
      element.textContent = formatNumber(target);
    }
  }

  window.requestAnimationFrame(tick);
}

function initLoginPage() {
  if (document.body.dataset.page !== "login") {
    return;
  }

  const form = document.getElementById("login-form");
  const passwordInput = document.getElementById("password");
  const passwordToggle = document.getElementById("password-toggle");
  const messageBox = document.getElementById("login-message");
  const guestLogin = document.getElementById("guest-login");
  const forgotPasswordLink = document.getElementById("forgot-password-link");
  const registerLink = document.getElementById("register-link");
  const registerPanel = document.getElementById("register-panel");
  const registerForm = document.getElementById("register-form");
  const registerMessageBox = document.getElementById("register-message-box");
  const closeRegisterButton = document.getElementById("close-register");
  const loginNotice = sessionStorage.getItem(sessionKeys.loginNotice);

  if (loginNotice) {
    setMessage(messageBox, loginNotice, "error");
    sessionStorage.removeItem(sessionKeys.loginNotice);
  }

  if (passwordToggle && passwordInput) {
    passwordToggle.addEventListener("click", () => {
      const isPassword = passwordInput.type === "password";
      passwordInput.type = isPassword ? "text" : "password";
      passwordToggle.innerHTML = `<i class="fa-solid ${isPassword ? "fa-eye-slash" : "fa-eye"}"></i>`;
    });
  }

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    clearErrors(form);
    setMessage(messageBox, "", "");

    const fullName = document.getElementById("full-name").value.trim();
    const password = passwordInput.value.trim();
    const remember = document.getElementById("remember").checked;
    const approvedUsers = getApprovedUsers();
    const accessRequests = getAccessRequests();
    const approvedUser = findPersonByName(approvedUsers, fullName);
    const accessRequest = findPersonByName(accessRequests, fullName);
    const adminProfile = getAdminProfileByName(fullName);
    let isValid = true;

    if (!fullName) {
      showFieldError("full-name", "Informe seu nome completo.");
      isValid = false;
    } else if (!isValidFullName(fullName)) {
      showFieldError("full-name", "Digite nome e sobrenome.");
      isValid = false;
    }

    if (!password) {
      showFieldError("password", "Informe sua senha.");
      isValid = false;
    }

    if (!isValid) {
      setMessage(messageBox, "Corrija os campos destacados para continuar.", "error");
      return;
    }

    if (password !== "1234") {
      setMessage(messageBox, "Senha inválida.", "error");
      return;
    }

    if (adminProfile) {
      ensureApprovedUser({
        name: adminProfile.canonicalName,
        email: adminProfile.email,
        role: "Administrador",
        avatar: defaultAvatar,
        bio: ""
      });

      setUser({
        isLoggedIn: true,
        name: adminProfile.canonicalName,
        email: adminProfile.email,
        role: "Administrador",
        remember,
        avatar: defaultAvatar,
        bio: ""
      });

      finalizeLogin(messageBox, remember);
      return;
    }

    if (approvedUser) {
      setUser({
        isLoggedIn: true,
        name: approvedUser.name,
        email: approvedUser.email || `${slugifyName(approvedUser.name)}@tlc.com`,
        role: approvedUser.role || "Participante",
        remember,
        avatar: approvedUser.avatar || defaultAvatar,
        bio: approvedUser.bio || ""
      });

      finalizeLogin(messageBox, remember);
      return;
    }

    if (accessRequest?.status === "pending") {
      setMessage(messageBox, "Seu cadastro ainda está aguardando aprovação do administrativo.", "error");
      return;
    }

    if (accessRequest?.status === "denied") {
      setMessage(messageBox, "Seu acesso não foi liberado. Fale com o administrativo do grupo.", "error");
      return;
    }

    setMessage(messageBox, "Seu nome ainda não foi autorizado. Clique em Criar uma conta para pedir acesso.", "error");
  });

  registerForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    clearErrors(registerForm);
    setMessage(registerMessageBox, "", "");

    const fullName = document.getElementById("register-name").value.trim();
    const email = document.getElementById("register-email").value.trim();
    const group = document.getElementById("register-group").value.trim();
    const message = document.getElementById("register-message").value.trim();
    const approvedUsers = getApprovedUsers();
    const accessRequests = getAccessRequests();
    let isValid = true;

    if (!fullName) {
      showFieldError("register-name", "Informe seu nome completo.");
      isValid = false;
    } else if (!isValidFullName(fullName)) {
      showFieldError("register-name", "Digite nome e sobrenome.");
      isValid = false;
    }

    if (!email) {
      showFieldError("register-email", "Informe um e-mail para contato.");
      isValid = false;
    } else if (!isValidEmail(email)) {
      showFieldError("register-email", "Digite um e-mail valido.");
      isValid = false;
    }

    if (!group) {
      showFieldError("register-group", "Conte para qual turma ou equipe você quer acesso.");
      isValid = false;
    }

    if (!message) {
      showFieldError("register-message", "Escreva uma mensagem curta para o administrativo.");
      isValid = false;
    }

    if (!isValid) {
      setMessage(registerMessageBox, "Preencha os campos do cadastro para enviar seu pedido.", "error");
      return;
    }

    if (findPersonByName(approvedUsers, fullName)) {
      setMessage(registerMessageBox, "Esse nome já foi aprovado. Agora você já pode entrar.", "success");
      return;
    }

    const existingRequest = findPersonByName(accessRequests, fullName);
    if (existingRequest?.status === "pending") {
      setMessage(registerMessageBox, "Já existe um pedido pendente com esse nome. Aguarde a aprovação.", "error");
      return;
    }

    const nextRequests = accessRequests.filter((item) => !samePersonName(item.name, fullName));
    nextRequests.push({
      id: `request-${Date.now()}`,
      name: fullName,
      email,
      group,
      message,
      status: "pending",
      createdAt: new Date().toISOString(),
      avatar: defaultAvatar,
      bio: ""
    });
    setAccessRequests(nextRequests);

    openAdminMail(
      "Novo pedido de acesso ao site TLC",
      [
        "Ola, administrativo do TLC!",
        "",
        `Nome: ${fullName}`,
        `E-mail: ${email}`,
        `Turma ou equipe: ${group}`,
        "",
        "Mensagem:",
        message,
        "",
        "Esse pedido foi enviado pelo formulario do site e agora pode ser aprovado ou negado dentro do perfil do administrador."
      ].join("\n")
    );

    setMessage(registerMessageBox, "Pedido enviado. O e-mail do administrativo foi preparado e seu acesso ficou aguardando aprovação.", "success");
    registerForm.reset();
  });

  guestLogin?.addEventListener("click", () => {
    setUser({
      isLoggedIn: true,
      name: "Visitante TLC",
      email: "visitante@tlc.com",
      role: "Visitante",
      remember: false,
      avatar: defaultAvatar,
      bio: ""
    });

    sessionStorage.setItem(sessionKeys.authActive, "true");
    sessionStorage.setItem(sessionKeys.playIntro, "true");
    sessionStorage.removeItem(sessionKeys.redirectAfterLogin);
    setMessage(messageBox, "Acesso como visitante liberado com sucesso.", "success");
    setTimeout(() => {
      window.location.href = pathFor("index.html");
    }, 250);
  });

  forgotPasswordLink?.addEventListener("click", (event) => {
    event.preventDefault();
    openAdminMail(
      "Pedido de ajuda com acesso ao site TLC",
      [
        "Ola, administrativo do TLC!",
        "",
        "Preciso de ajuda para recuperar meu acesso ao site.",
        "",
        "Nome completo:",
        "Motivo:"
      ].join("\n")
    );
    setMessage(messageBox, "Abrimos um e-mail para você pedir ajuda ao administrativo.", "success");
  });

  registerLink?.addEventListener("click", (event) => {
    event.preventDefault();
    registerPanel?.classList.remove("hidden");
    registerPanel?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  closeRegisterButton?.addEventListener("click", () => {
    registerPanel?.classList.add("hidden");
  });
}

function finalizeLogin(messageBox) {
  sessionStorage.setItem(sessionKeys.authActive, "true");
  sessionStorage.setItem(sessionKeys.playIntro, "true");
  setMessage(messageBox, "Login realizado com sucesso. Redirecionando...", "success");
  setTimeout(() => {
    const redirectTarget = resolveAppPath(sessionStorage.getItem(sessionKeys.redirectAfterLogin) || "index.html");
    sessionStorage.removeItem(sessionKeys.redirectAfterLogin);
    window.location.href = redirectTarget;
  }, 250);
}

function initPostLoginIntro() {
  if (document.body.dataset.page === "login") {
    return;
  }

  const shouldPlay = sessionStorage.getItem(sessionKeys.playIntro) === "true";
  if (!shouldPlay) {
    return;
  }

  const intro = document.createElement("div");
  intro.className = "login-intro";
  intro.id = "login-intro";
  intro.setAttribute("aria-hidden", "true");
  intro.innerHTML = `
    <div class="login-intro__glow"></div>
    <div class="login-intro__content">
      <div class="login-intro__halo"></div>
      <img
        class="login-intro__mary"
        src="${pathFor("images/nossa-senhora-guadalupe.png")}"
        alt="Nossa Senhora de Guadalupe"
      >
      <div class="login-intro__wordmark">
        <span class="login-intro__line"></span>
        <strong>ToloCo</strong>
        <span class="login-intro__line"></span>
      </div>
    </div>
  `;
  document.body.appendChild(intro);

  const motionReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const duration = motionReduced ? 500 : 1800;

  window.setTimeout(() => {
    intro.classList.add("hidden");
    sessionStorage.removeItem(sessionKeys.playIntro);
    window.setTimeout(() => intro.remove(), 850);
  }, duration);
}

function initGalleryPage() {
  if (document.body.dataset.page !== "gallery") {
    return;
  }

  const currentUser = getUser();
  const filterContainer = document.getElementById("gallery-filters");
  const grid = document.getElementById("gallery-grid");
  const modal = document.getElementById("gallery-modal");
  const modalImage = document.getElementById("modal-image");
  const modalTitle = document.getElementById("modal-title");
  const modalDate = document.getElementById("modal-date");
  const modalDescription = document.getElementById("modal-description");
  const modalAuthor = document.getElementById("modal-author");
  const modalMeta = document.getElementById("modal-meta");
  const likePhotoButton = document.getElementById("like-photo-button");
  const likePhotoLabel = document.getElementById("like-photo-label");
  const likePhotoCount = document.getElementById("like-photo-count");
  const deletePhotoButton = document.getElementById("delete-photo-button");
  const commentJumpButton = document.getElementById("comment-jump-button");
  const commentForm = document.getElementById("comment-form");
  const commentText = document.getElementById("comment-text");
  const commentMessage = document.getElementById("comment-message");
  const commentsList = document.getElementById("comments-list");
  const closeModalButton = document.getElementById("close-modal");
  const prevPhotoButton = document.getElementById("modal-prev-photo");
  const nextPhotoButton = document.getElementById("modal-next-photo");
  const modalMediaFrame = modal?.querySelector(".modal-media-frame");
  let activeCategory = "Todas";
  let activePhotoId = "";
  let wheelNavigationLocked = false;
  let touchStartPoint = null;

  renderFilters();
  renderGallery();

  closeModalButton?.addEventListener("click", closeModal);
  modal?.addEventListener("click", (event) => {
    if (event.target.dataset.closeModal === "true") {
      closeModal();
    }
  });
  commentJumpButton?.addEventListener("click", () => {
    commentText?.focus();
    commentText?.scrollIntoView({ behavior: "smooth", block: "center" });
  });
  prevPhotoButton?.addEventListener("click", () => navigateModalPhotos(-1));
  nextPhotoButton?.addEventListener("click", () => navigateModalPhotos(1));
  modalMediaFrame?.addEventListener("wheel", handleModalWheelNavigation, { passive: false });
  modalMediaFrame?.addEventListener("touchstart", handleModalTouchStart, { passive: true });
  modalMediaFrame?.addEventListener("touchend", handleModalTouchEnd, { passive: true });
  document.addEventListener("keydown", handleModalKeyboardNavigation);

  // A galeria funciona como um mural social simples: curtidas, comentários e remoção segura.
  likePhotoButton?.addEventListener("click", () => {
    if (!activePhotoId) {
      return;
    }

    const photos = getPhotos();
    const photoIndex = photos.findIndex((photo) => photo.id === activePhotoId);
    if (photoIndex < 0) {
      return;
    }

    const likeKey = getCurrentUserKey(currentUser);
    const likes = Array.isArray(photos[photoIndex].likes) ? [...photos[photoIndex].likes] : [];
    const alreadyLiked = likes.includes(likeKey);
    const nextLikes = alreadyLiked
      ? likes.filter((entry) => entry !== likeKey)
      : [...likes, likeKey];

    photos[photoIndex] = { ...photos[photoIndex], likes: nextLikes };
    setPhotos(photos);
    updateModalEngagement(photos[photoIndex]);
    renderGallery();
  });

  deletePhotoButton?.addEventListener("click", () => {
    if (!activePhotoId) {
      return;
    }

    const photos = getPhotos();
    const photo = photos.find((entry) => entry.id === activePhotoId);
    if (!photo || !canManagePhoto(photo, currentUser)) {
      return;
    }

    setPhotos(photos.filter((entry) => entry.id !== activePhotoId));
    activePhotoId = "";
    closeModal();
    renderGallery();
  });

  commentForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    clearFieldError("comment-text");
    setMessage(commentMessage, "", "");

    if (!activePhotoId) {
      return;
    }

    const text = commentText?.value.trim() || "";
    if (!text) {
      showFieldError("comment-text", repairText("Escreva um comentário para enviar."));
      return;
    }

    const photos = getPhotos();
    const photoIndex = photos.findIndex((photo) => photo.id === activePhotoId);
    if (photoIndex < 0) {
      return;
    }

    const authorProfile = getPublicProfile({ email: currentUser.email, name: currentUser.name }) || {
      name: currentUser.name || "Participante TLC",
      email: currentUser.email || "",
      avatar: currentUser.avatar || defaultAvatar
    };

    const nextComment = {
      id: `comment-${Date.now()}`,
      authorName: authorProfile.name,
      authorEmail: authorProfile.email,
      authorAvatar: authorProfile.avatar || defaultAvatar,
      message: text,
      createdAt: new Date().toISOString()
    };

    photos[photoIndex] = {
      ...photos[photoIndex],
      comments: [...(photos[photoIndex].comments || []), nextComment]
    };

    setPhotos(photos);
    commentForm.reset();
    setMessage(commentMessage, repairText("Comentário enviado com sucesso."), "success");
    updateModalComments(photos[photoIndex]);
    renderGallery();
  });

  function renderFilters() {
    filterContainer.innerHTML = galleryCategories.map((category) => `
      <button class="filter-btn ${category === activeCategory ? "active" : ""}" data-category="${category}">
        ${getCategoryLabel(category)}
      </button>
    `).join("");

    filterContainer.querySelectorAll(".filter-btn").forEach((button) => {
      button.addEventListener("click", () => {
        activeCategory = button.dataset.category;
        renderFilters();
        renderGallery();
      });
    });
  }

  function renderGallery() {
    const photos = getPhotos();
    const filteredPhotos = getVisibleGalleryPhotos(photos);

    grid.innerHTML = filteredPhotos.map((photo) => renderPostCard(photo)).join("");

    grid.querySelectorAll(".gallery-item").forEach((item) => {
      item.addEventListener("click", (event) => {
        if (event.target.closest('[data-profile-link="true"]')) {
          return;
        }

        const photo = photos.find((entry) => entry.id === item.dataset.photoId);
        if (!photo) {
          return;
        }

        openPhotoInModal(photo.id);
      });
    });

    const requestedPhotoId = new URLSearchParams(window.location.search).get("photo");
    if (requestedPhotoId) {
      const targetPhoto = photos.find((photo) => photo.id === requestedPhotoId);
      if (targetPhoto) {
        const targetCard = grid.querySelector(`[data-photo-id="${requestedPhotoId}"]`);
        targetCard?.click();
        const cleanUrl = `${window.location.pathname}${window.location.hash || ""}`;
        window.history.replaceState({}, "", cleanUrl);
      }
    }
  }

  function getVisibleGalleryPhotos(photos = getPhotos()) {
    return activeCategory === "Todas"
      ? photos
      : photos.filter((photo) => photo.category === activeCategory);
  }

  function openPhotoInModal(photoId) {
    const photo = getPhotos().find((entry) => entry.id === photoId);
    if (!photo || !modal) {
      return;
    }

    activePhotoId = photo.id;
    modalImage.src = photo.image;
    modalImage.alt = photo.title;
    modalTitle.textContent = photo.title || "";
    modalDate.textContent = formatDate(photo.date);
    modalDescription.innerHTML = `<strong>${getPhotoAuthor(photo).name}</strong> ${photo.description || photo.title || ""}`.trim();
    if (modalAuthor) {
      modalAuthor.innerHTML = renderPhotoAuthor(photo, "dark");
      modalAuthor.querySelectorAll('[data-profile-link="true"]').forEach((link) => {
        link.addEventListener("click", (clickEvent) => {
          clickEvent.stopPropagation();
        });
      });
    }
    if (modalMeta) {
      modalMeta.textContent = `${getCategoryLabel(photo.category)} • ${formatDate(photo.date)}`;
    }
    updateModalEngagement(photo);
    updateModalComments(photo);
    updateModalNavigationState();
    modal.classList.remove("hidden");
  }

  function navigateModalPhotos(direction) {
    if (!activePhotoId) {
      return;
    }

    const visiblePhotos = getVisibleGalleryPhotos();
    const currentIndex = visiblePhotos.findIndex((photo) => photo.id === activePhotoId);
    if (currentIndex < 0) {
      return;
    }

    const nextIndex = currentIndex + direction;
    if (nextIndex < 0 || nextIndex >= visiblePhotos.length) {
      return;
    }

    openPhotoInModal(visiblePhotos[nextIndex].id);
  }

  function updateModalNavigationState() {
    const visiblePhotos = getVisibleGalleryPhotos();
    const currentIndex = visiblePhotos.findIndex((photo) => photo.id === activePhotoId);

    if (prevPhotoButton) {
      prevPhotoButton.disabled = currentIndex <= 0;
    }

    if (nextPhotoButton) {
      nextPhotoButton.disabled = currentIndex < 0 || currentIndex >= visiblePhotos.length - 1;
    }
  }

  function handleModalWheelNavigation(event) {
    if (!activePhotoId || wheelNavigationLocked) {
      return;
    }

    if (Math.abs(event.deltaY) < 20 && Math.abs(event.deltaX) < 20) {
      return;
    }

    event.preventDefault();
    wheelNavigationLocked = true;
    const direction = event.deltaY > 0 || event.deltaX > 0 ? 1 : -1;
    navigateModalPhotos(direction);
    window.setTimeout(() => {
      wheelNavigationLocked = false;
    }, 260);
  }

  function handleModalTouchStart(event) {
    if (!activePhotoId || !event.changedTouches?.length) {
      return;
    }

    const touch = event.changedTouches[0];
    touchStartPoint = { x: touch.clientX, y: touch.clientY };
  }

  function handleModalTouchEnd(event) {
    if (!activePhotoId || !touchStartPoint || !event.changedTouches?.length) {
      touchStartPoint = null;
      return;
    }

    const touch = event.changedTouches[0];
    const deltaX = touch.clientX - touchStartPoint.x;
    const deltaY = touch.clientY - touchStartPoint.y;
    const useVertical = Math.abs(deltaY) > Math.abs(deltaX);

    if (useVertical && Math.abs(deltaY) > 55) {
      navigateModalPhotos(deltaY < 0 ? 1 : -1);
    } else if (!useVertical && Math.abs(deltaX) > 55) {
      navigateModalPhotos(deltaX < 0 ? 1 : -1);
    }

    touchStartPoint = null;
  }

  function handleModalKeyboardNavigation(event) {
    if (!activePhotoId || modal?.classList.contains("hidden")) {
      return;
    }

    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      navigateModalPhotos(1);
    }

    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      navigateModalPhotos(-1);
    }
  }

  function closeModal() {
    activePhotoId = "";
    modal.classList.add("hidden");
  }

  function updateModalEngagement(photo) {
    if (!likePhotoButton || !likePhotoCount || !likePhotoLabel || !deletePhotoButton) {
      return;
    }

    const likeKey = getCurrentUserKey(currentUser);
    const likes = Array.isArray(photo.likes) ? photo.likes : [];
    const likedByCurrentUser = likes.includes(likeKey);

    likePhotoButton.classList.toggle("active", likedByCurrentUser);
    likePhotoLabel.textContent = likedByCurrentUser ? "Curtido" : "Curtir";
    likePhotoCount.textContent = `${formatNumber(likes.length)} curtida${likes.length === 1 ? "" : "s"}`;

    if (canManagePhoto(photo, currentUser)) {
      deletePhotoButton.classList.remove("hidden");
    } else {
      deletePhotoButton.classList.add("hidden");
    }
  }

  function updateModalComments(photo) {
    if (!commentsList) {
      return;
    }

    const comments = [...(photo.comments || [])].sort((left, right) => new Date(right.createdAt) - new Date(left.createdAt));
    if (!comments.length) {
      commentsList.innerHTML = `<div class="empty-state">${repairText("Ainda não há comentários nessa foto.")}</div>`;
      return;
    }

    commentsList.innerHTML = comments.map((comment) => `
      <article class="comment-card" data-comment-id="${comment.id}">
        <div class="comment-card__header">
          <div class="comment-author">
            <img src="${comment.authorAvatar || defaultAvatar}" alt="Foto de ${comment.authorName}">
            <div>
              <strong>${comment.authorName}</strong>
              <span>${formatDateTime(comment.createdAt)}</span>
            </div>
          </div>
          ${canDeleteComment(comment, currentUser) ? '<button type="button" class="btn btn-neutral comment-delete-button">Apagar</button>' : ""}
        </div>
        <p>${comment.message}</p>
      </article>
    `).join("");

    commentsList.querySelectorAll(".comment-delete-button").forEach((button) => {
      button.addEventListener("click", () => {
        const commentId = button.closest(".comment-card")?.dataset.commentId;
        if (!commentId) {
          return;
        }

        const photos = getPhotos();
        const photoIndex = photos.findIndex((entry) => entry.id === activePhotoId);
        if (photoIndex < 0) {
          return;
        }

        photos[photoIndex] = {
          ...photos[photoIndex],
          comments: (photos[photoIndex].comments || []).filter((comment) => comment.id !== commentId)
        };
        setPhotos(photos);
        updateModalComments(photos[photoIndex]);
      });
    });
  }
}

function initUploadPage() {
  if (document.body.dataset.page !== "upload") {
    return;
  }

  const currentUser = getUser();
  const form = document.getElementById("upload-form");
  const messageBox = document.getElementById("upload-message");
  const fileInput = document.getElementById("photo-image");
  const previewImage = document.getElementById("preview-image");
  const previewTitle = document.getElementById("preview-title");
  const previewDescription = document.getElementById("preview-description");
  const titleInput = document.getElementById("photo-title");
  const descriptionInput = document.getElementById("photo-description");
  const cancelButton = document.getElementById("cancel-upload");
  let currentPreview = previewImage?.src || "";

  titleInput?.addEventListener("input", () => {
    previewTitle.textContent = titleInput.value.trim() || "Sua foto aparecerá aqui";
  });

  descriptionInput?.addEventListener("input", () => {
    previewDescription.textContent = descriptionInput.value.trim() || "Adicione as informações e veja como a lembrança será apresentada na galeria.";
  });

  fileInput?.addEventListener("change", () => {
    clearFieldError("photo-image");
    const [file] = fileInput.files;
    if (!file) {
      previewImage.src = currentPreview;
      return;
    }

    if (!file.type.startsWith("image/")) {
      showFieldError("photo-image", "Selecione um arquivo de imagem valido.");
      fileInput.value = "";
      return;
    }

    const reader = new FileReader();
    reader.onload = ({ target }) => {
      previewImage.src = target.result;
      currentPreview = target.result;
    };
    reader.readAsDataURL(file);
  });

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    clearErrors(form);
    setMessage(messageBox, "", "");

    const title = titleInput.value.trim();
    const category = document.getElementById("photo-category").value;
    const date = document.getElementById("photo-date").value;
    const description = descriptionInput.value.trim();
    const file = fileInput.files[0];
    let valid = true;

    if (!title) {
      showFieldError("photo-title", "Informe o titulo da foto.");
      valid = false;
    }

    if (!category) {
      showFieldError("photo-category", "Selecione uma categoria.");
      valid = false;
    }

    if (!date) {
      showFieldError("photo-date", "Informe a data da foto.");
      valid = false;
    }

    if (!description) {
      showFieldError("photo-description", "Descreva o momento registrado.");
      valid = false;
    }

    if (!file) {
      showFieldError("photo-image", "Escolha uma imagem para continuar.");
      valid = false;
    }

    if (!valid) {
      setMessage(messageBox, "Preencha todos os campos antes de enviar a foto.", "error");
      return;
    }

    // Novas fotos já nascem com curtidas e comentários para a galeria social.
    const photos = getPhotos();
    photos.push({
      id: `${Date.now()}`,
      title,
      category,
      date,
      description,
      image: currentPreview,
      source: "upload",
      uploaderName: currentUser.name || "Visitante TLC",
      uploaderEmail: currentUser.email || "visitante@tlc.com",
      uploaderAvatar: currentUser.avatar || defaultAvatar,
      uploaderBio: currentUser.bio || "",
      uploaderInstagram: normalizeInstagram(currentUser.instagram || ""),
      uploaderWhatsapp: normalizeWhatsapp(currentUser.whatsapp || ""),
      uploaderTeam: currentUser.team || "",
      likes: [],
      comments: []
    });
    setPhotos(photos);
    setMessage(messageBox, "Foto enviada com sucesso. Ela fica salva apenas neste navegador por enquanto.", "success");
    form.reset();
    previewImage.src = "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=900&q=80";
    currentPreview = previewImage.src;
    previewTitle.textContent = "Sua foto aparecerá aqui";
    previewDescription.textContent = "Adicione as informações e veja como a lembrança será apresentada na galeria.";
  });

  cancelButton?.addEventListener("click", () => {
    clearErrors(form);
    setMessage(messageBox, "Envio cancelado. Você pode preencher novamente quando quiser.", "success");
    previewImage.src = "https://images.unsplash.com/photo-1507692049790-de58290a4334?auto=format&fit=crop&w=900&q=80";
    currentPreview = previewImage.src;
    previewTitle.textContent = "Sua foto aparecerá aqui";
    previewDescription.textContent = "Adicione as informações e veja como a lembrança será apresentada na galeria.";
  });
}

function initProfilePage() {
  if (document.body.dataset.page !== "profile") {
    return;
  }

  const user = getUser();
  const allPhotos = getPhotos();
  const messageBox = document.getElementById("profile-message");
  const uploadedCount = allPhotos.filter((photo) => photo.source === "upload" && photo.uploaderEmail === user.email).length;
  const editButton = document.getElementById("edit-profile");
  const editor = document.getElementById("profile-editor");
  const profileForm = document.getElementById("profile-form");
  const cancelEditButton = document.getElementById("cancel-profile-edit");
  const profileAvatarFileInput = document.getElementById("profile-avatar-file");
  const profileAvatarImage = document.getElementById("profile-avatar");
  const avatarEditor = document.getElementById("avatar-editor");
  const avatarEditorClose = document.getElementById("avatar-editor-close");
  const avatarEditorViewport = document.getElementById("avatar-editor-viewport");
  const avatarEditorImage = document.getElementById("avatar-editor-image");
  const avatarZoomInput = document.getElementById("avatar-zoom");
  const avatarOffsetXInput = document.getElementById("avatar-offset-x");
  const avatarOffsetYInput = document.getElementById("avatar-offset-y");
  const applyAvatarAdjustButton = document.getElementById("apply-avatar-adjust");
  const cancelAvatarAdjustButton = document.getElementById("cancel-avatar-adjust");
  const profileInstagramInput = document.getElementById("profile-instagram");
  const profileWhatsappInput = document.getElementById("profile-whatsapp");
  const profileTeamInput = document.getElementById("profile-team");
  const profileInstagramLink = document.getElementById("profile-instagram-link");
  const profileInstagramLabel = document.getElementById("profile-instagram-label");
  const profileWhatsappLink = document.getElementById("profile-whatsapp-link");
  const profileWhatsappLabel = document.getElementById("profile-whatsapp-label");
  const profilePhotoGrid = document.getElementById("profile-photo-grid");
  let selectedAvatar = user.avatar || defaultAvatar;
  let pendingAvatarSource = "";
  let avatarDragState = null;

  document.getElementById("profile-name").textContent = user.name || "Visitante TLC";
  document.getElementById("profile-email").textContent = user.email || "visitante@tlc.com";
  document.getElementById("profile-role").textContent = user.role || "Visitante";
  document.getElementById("profile-photo-count").textContent = uploadedCount.toString();
  profileAvatarImage.src = selectedAvatar;
  renderProfileLinks(user);
  renderProfilePhotoGrid();

  if (profileForm) {
    document.getElementById("profile-full-name").value = user.name || "";
    document.getElementById("profile-contact-email").value = user.email || "";
    document.getElementById("profile-bio").value = user.bio || "";
    if (profileInstagramInput) {
      profileInstagramInput.value = user.instagram || "";
    }
    if (profileWhatsappInput) {
      profileWhatsappInput.value = user.whatsapp || "";
    }
    if (profileTeamInput) {
      profileTeamInput.value = user.team || "";
    }
  }

  profileAvatarFileInput?.addEventListener("change", () => {
    clearFieldError("profile-avatar-file");
    const [file] = profileAvatarFileInput.files || [];

    if (!file) {
      hideAvatarEditor();
      return;
    }

    if (!file.type.startsWith("image/")) {
      showFieldError("profile-avatar-file", "Escolha uma imagem valida.");
      profileAvatarFileInput.value = "";
      hideAvatarEditor();
      return;
    }

    const reader = new FileReader();
    reader.onload = ({ target }) => {
      pendingAvatarSource = target?.result || "";
      openAvatarEditor(pendingAvatarSource);
    };
    reader.readAsDataURL(file);
  });

  avatarZoomInput?.addEventListener("input", syncAvatarEditorTransform);
  avatarOffsetXInput?.addEventListener("input", syncAvatarEditorTransform);
  avatarOffsetYInput?.addEventListener("input", syncAvatarEditorTransform);
  avatarEditorClose?.addEventListener("click", () => {
    profileAvatarFileInput.value = "";
    hideAvatarEditor();
  });

  applyAvatarAdjustButton?.addEventListener("click", () => {
    if (!pendingAvatarSource) {
      hideAvatarEditor();
      return;
    }

    selectedAvatar = exportAvatarFromEditor();
    profileAvatarImage.src = selectedAvatar;
    hideAvatarEditor(false);
  });

  cancelAvatarAdjustButton?.addEventListener("click", () => {
    profileAvatarFileInput.value = "";
    hideAvatarEditor();
  });

  avatarEditorViewport?.addEventListener("pointerdown", (event) => {
    if (!avatarEditor || avatarEditor.classList.contains("hidden")) {
      return;
    }

    avatarDragState = {
      startX: event.clientX,
      startY: event.clientY,
      originX: Number(avatarOffsetXInput?.value || 0),
      originY: Number(avatarOffsetYInput?.value || 0)
    };

    avatarEditorViewport.classList.add("dragging");
    avatarEditorViewport.setPointerCapture?.(event.pointerId);
  });

  avatarEditorViewport?.addEventListener("pointermove", (event) => {
    if (!avatarDragState) {
      return;
    }

    const nextX = clampAvatarOffset(avatarDragState.originX + (event.clientX - avatarDragState.startX), getAvatarMaxOffset());
    const nextY = clampAvatarOffset(avatarDragState.originY + (event.clientY - avatarDragState.startY), getAvatarMaxOffset());

    if (avatarOffsetXInput) {
      avatarOffsetXInput.value = `${nextX}`;
    }
    if (avatarOffsetYInput) {
      avatarOffsetYInput.value = `${nextY}`;
    }

    syncAvatarEditorTransform();
  });

  avatarEditorViewport?.addEventListener("pointerup", endAvatarDrag);
  avatarEditorViewport?.addEventListener("pointercancel", endAvatarDrag);

  editButton?.addEventListener("click", () => {
    editor?.classList.remove("hidden");
    editor?.scrollIntoView({ behavior: "smooth", block: "start" });
  });

  cancelEditButton?.addEventListener("click", () => {
    editor?.classList.add("hidden");
  });

  profileForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    clearErrors(profileForm);
    setMessage(messageBox, "", "");

    const fullName = document.getElementById("profile-full-name").value.trim();
    const email = document.getElementById("profile-contact-email").value.trim();
    const bio = document.getElementById("profile-bio").value.trim();
    const instagram = normalizeInstagram(profileInstagramInput?.value || "");
    const whatsapp = normalizeWhatsapp(profileWhatsappInput?.value || "");
    const team = profileTeamInput?.value || "";
    let valid = true;

    if (!fullName) {
      showFieldError("profile-full-name", "Informe seu nome completo.");
      valid = false;
    } else if (!isValidFullName(fullName) && fullName !== "Visitante TLC") {
      showFieldError("profile-full-name", "Digite nome e sobrenome.");
      valid = false;
    }

    if (email && !isValidEmail(email)) {
      showFieldError("profile-contact-email", "Digite um e-mail valido.");
      valid = false;
    }

    if ((profileInstagramInput?.value || "").trim() && !instagram) {
      showFieldError("profile-instagram", "Digite um Instagram valido.");
      valid = false;
    }

    if ((profileWhatsappInput?.value || "").trim() && !whatsapp) {
      showFieldError("profile-whatsapp", "Digite um WhatsApp valido, so com numeros.");
      valid = false;
    }

    if (!valid) {
      setMessage(messageBox, "Corrija os campos do perfil antes de salvar.", "error");
      return;
    }

    const oldEmail = user.email;
    const updatedUser = {
      ...user,
      name: fullName,
      email: email || user.email,
      avatar: selectedAvatar || defaultAvatar,
      bio,
      instagram,
      whatsapp,
      team
    };
    setUser(updatedUser);
    syncUserProfileData(user, updatedUser, oldEmail);
    setMessage(messageBox, "Perfil atualizado com sucesso.", "success");
    window.location.reload();
  });

  document.getElementById("logout-profile")?.addEventListener("click", handleLogout);

  function openAvatarEditor(source) {
    if (!avatarEditor || !avatarEditorImage || !source) {
      return;
    }

    avatarEditor.classList.remove("hidden");
    avatarEditorImage.src = source;
    document.body.classList.add("menu-open");
    avatarZoomInput.value = "1";
    avatarOffsetXInput.value = "0";
    avatarOffsetYInput.value = "0";
    syncAvatarEditorTransform();
  }

  function syncAvatarEditorTransform() {
    if (!avatarEditorImage) {
      return;
    }

    const maxOffset = getAvatarMaxOffset();
    const safeX = clampAvatarOffset(Number(avatarOffsetXInput?.value || 0), maxOffset);
    const safeY = clampAvatarOffset(Number(avatarOffsetYInput?.value || 0), maxOffset);

    if (avatarOffsetXInput) {
      avatarOffsetXInput.value = `${safeX}`;
    }
    if (avatarOffsetYInput) {
      avatarOffsetYInput.value = `${safeY}`;
    }

    avatarEditorImage.style.setProperty("--avatar-scale", avatarZoomInput?.value || "1");
    avatarEditorImage.style.setProperty("--avatar-x", `${safeX}px`);
    avatarEditorImage.style.setProperty("--avatar-y", `${safeY}px`);
  }

  function exportAvatarFromEditor() {
    const canvas = document.createElement("canvas");
    const size = 520;
    const context = canvas.getContext("2d");
    const image = avatarEditorImage;
    const scale = Number(avatarZoomInput?.value || 1);
    const offsetX = Number(avatarOffsetXInput?.value || 0);
    const offsetY = Number(avatarOffsetYInput?.value || 0);

    canvas.width = size;
    canvas.height = size;

    context.clearRect(0, 0, size, size);
    context.save();
    context.beginPath();
    context.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
    context.closePath();
    context.clip();

    const drawWidth = size * scale;
    const drawHeight = size * scale;
    const drawX = (size - drawWidth) / 2 + offsetX * 2;
    const drawY = (size - drawHeight) / 2 + offsetY * 2;

    context.drawImage(image, drawX, drawY, drawWidth, drawHeight);
    context.restore();

    return canvas.toDataURL("image/png");
  }

  function hideAvatarEditor(resetPreview = true) {
    avatarEditor?.classList.add("hidden");
    document.body.classList.remove("menu-open");
    pendingAvatarSource = "";
    avatarDragState = null;
    avatarEditorViewport?.classList.remove("dragging");
    if (resetPreview) {
      profileAvatarImage.src = selectedAvatar || user.avatar || defaultAvatar;
    }
  }

  function endAvatarDrag() {
    avatarDragState = null;
    avatarEditorViewport?.classList.remove("dragging");
  }

  function getAvatarMaxOffset() {
    const scale = Number(avatarZoomInput?.value || 1);
    return Math.round(60 + ((scale - 1) * 120));
  }

  function renderProfileLinks(profileUser) {
    const instagramLink = getInstagramLink(profileUser.instagram || "");
    const whatsappLink = getWhatsappLink(profileUser.whatsapp || "");

    if (profileInstagramLink && profileInstagramLabel) {
      if (instagramLink) {
        profileInstagramLink.href = instagramLink;
        profileInstagramLabel.textContent = formatInstagramLabel(profileUser.instagram || "");
        profileInstagramLink.classList.remove("hidden");
      } else {
        profileInstagramLink.classList.add("hidden");
      }
    }

    if (profileWhatsappLink && profileWhatsappLabel) {
      if (whatsappLink) {
        profileWhatsappLink.href = whatsappLink;
        profileWhatsappLabel.textContent = formatWhatsappLabel(profileUser.whatsapp || "");
        profileWhatsappLink.classList.remove("hidden");
      } else {
        profileWhatsappLink.classList.add("hidden");
      }
    }
  }

  function renderProfilePhotoGrid() {
    if (!profilePhotoGrid) {
      return;
    }

    const userPhotos = getUserPhotos({ email: user.email, name: user.name });
    if (!userPhotos.length) {
      profilePhotoGrid.innerHTML = `<div class="empty-state">Você ainda não postou fotos no seu mural.</div>`;
      return;
    }

    profilePhotoGrid.innerHTML = userPhotos.map((photo) => renderPostCard(photo, {
      openHref: `${pathFor("pages/galeria.html")}?photo=${encodeURIComponent(photo.id)}`,
      cardClass: "profile-post-card"
    })).join("");
  }
}

function initPublicProfilePage() {
  if (document.body.dataset.page !== "public-profile") {
    return;
  }

  const params = new URLSearchParams(window.location.search);
  const profile = getPublicProfile({
    email: params.get("email") || "",
    name: params.get("name") || ""
  });
  const nameElement = document.getElementById("public-profile-name");
  const bioElement = document.getElementById("public-profile-bio");
  const avatarElement = document.getElementById("public-profile-avatar");
  const photoCountElement = document.getElementById("public-profile-photo-count");
  const teamWrap = document.getElementById("public-profile-team-wrap");
  const teamElement = document.getElementById("public-profile-team");
  const instagramWrap = document.getElementById("public-profile-instagram-wrap");
  const instagramLabel = document.getElementById("public-profile-instagram");
  const whatsappWrap = document.getElementById("public-profile-whatsapp-wrap");
  const whatsappLabel = document.getElementById("public-profile-whatsapp");
  const photoGrid = document.getElementById("public-profile-photo-grid");
  const photoSection = document.getElementById("public-profile-photos-section");
  const summarySection = document.getElementById("public-profile-summary");
  const basicName = document.getElementById("public-profile-basic-name");
  const basicTeam = document.getElementById("public-profile-basic-team");
  const basicRole = document.getElementById("public-profile-basic-role");
  const basicInstagram = document.getElementById("public-profile-basic-instagram");
  const basicWhatsapp = document.getElementById("public-profile-basic-whatsapp");
  const searchInput = document.getElementById("people-search-input");
  const searchResults = document.getElementById("people-search-results");
  const emptyState = document.getElementById("public-profile-empty");
  const content = document.getElementById("public-profile-content");

  if (!profile) {
    if (content) {
      content.classList.add("hidden");
    }
    if (photoSection) {
      photoSection.classList.add("hidden");
    }
    if (summarySection) {
      summarySection.classList.add("hidden");
    }
    if (emptyState) {
      emptyState.classList.remove("hidden");
    }
  } else {
    if (nameElement) {
      nameElement.textContent = profile.name;
    }
    if (bioElement) {
      bioElement.textContent = profile.bio || "Esse participante ainda não colocou uma bio no perfil.";
    }
    if (avatarElement) {
      avatarElement.src = profile.avatar || defaultAvatar;
      avatarElement.alt = `Foto de ${profile.name}`;
    }
    if (photoCountElement) {
      photoCountElement.textContent = formatNumber(profile.photoCount || 0);
    }
    if (basicName) {
      basicName.textContent = profile.name || "Participante TLC";
    }
    if (basicRole) {
      basicRole.textContent = profile.role || "Participante";
    }
    if (teamWrap && teamElement) {
      if (profile.teamLabel) {
        teamElement.textContent = profile.teamLabel;
        teamWrap.classList.remove("hidden");
      } else {
        teamWrap.classList.add("hidden");
      }
    }
    if (basicTeam) {
      basicTeam.textContent = profile.teamLabel || "Ainda não informada";
    }

    if (instagramWrap && instagramLabel) {
      if (profile.instagramLink) {
        instagramWrap.href = profile.instagramLink;
        instagramLabel.textContent = profile.instagramLabel;
        instagramWrap.classList.remove("hidden");
      } else {
        instagramWrap.classList.add("hidden");
      }
    }
    if (basicInstagram) {
      basicInstagram.textContent = profile.instagramLabel || "@seminstagram";
    }

    if (whatsappWrap && whatsappLabel) {
      if (profile.whatsappLink) {
        whatsappWrap.href = profile.whatsappLink;
        whatsappLabel.textContent = profile.whatsappLabel;
        whatsappWrap.classList.remove("hidden");
      } else {
        whatsappWrap.classList.add("hidden");
      }
    }
    if (basicWhatsapp) {
      basicWhatsapp.textContent = profile.whatsappLabel || "Não informado";
    }

    if (photoGrid) {
      if (!profile.photos.length) {
        photoGrid.innerHTML = `<div class="empty-state">Essa pessoa ainda não publicou fotos no mural.</div>`;
      } else {
        photoGrid.innerHTML = profile.photos.map((photo) => renderPostCard(photo, {
          openHref: `${pathFor("pages/galeria.html")}?photo=${encodeURIComponent(photo.id)}`,
          cardClass: "profile-post-card"
        })).join("");
      }
    }
  }

  if (searchInput && searchResults) {
    renderPeopleSearch("");
    searchInput.addEventListener("input", () => {
      renderPeopleSearch(searchInput.value.trim());
    });
  }

  function renderPeopleSearch(query) {
    const people = getApprovedUsers()
      .filter((person) => normalizeValue(person.role) !== "administrador")
      .filter((person, index, all) => all.findIndex((entry) => normalizeValue(entry.email || entry.name) === normalizeValue(person.email || person.name)) === index)
      .filter((person) => !query || normalizeValue(person.name).includes(normalizeValue(query)))
      .slice(0, 8);

    if (!people.length) {
      searchResults.innerHTML = `<div class="empty-state">Nenhuma pessoa encontrada com esse nome.</div>`;
      return;
    }

    searchResults.innerHTML = people.map((person) => {
      const personProfile = getPublicProfile({ email: person.email, name: person.name }) || person;
      return `
        <a class="search-person-card" href="${buildPublicProfilePath({ email: person.email, name: person.name })}">
          <img src="${personProfile.avatar || defaultAvatar}" alt="Foto de ${person.name}">
          <div>
            <strong>${person.name}</strong>
            <span>${personProfile.bio || "Toque para abrir o perfil público."}</span>
          </div>
        </a>
      `;
    }).join("");
  }
}

function initAdminPage() {
  if (document.body.dataset.page !== "admin") {
    return;
  }

  const messageBox = document.getElementById("admin-message");
  const adminRequestList = document.getElementById("admin-request-list");

  refreshAdminSummary();
  renderAdminRequests(adminRequestList, messageBox);
}

function initPrayerWallPage() {
  if (document.body.dataset.page !== "prayer") {
    return;
  }

  const currentUser = getUser();
  const form = document.getElementById("prayer-form");
  const messageBox = document.getElementById("prayer-message");
  const prayerName = document.getElementById("prayer-name");
  const prayerText = document.getElementById("prayer-text");
  const anonymousInput = document.getElementById("prayer-anonymous");
  const list = document.getElementById("prayer-list");

  if (prayerName) {
    prayerName.value = currentUser.name || "Participante TLC";
  }

  renderPrayerRequests();

  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    clearErrors(form);
    setMessage(messageBox, "", "");

    const text = prayerText?.value.trim() || "";
    if (!text) {
      showFieldError("prayer-text", "Escreva um pedido de oração antes de enviar.");
      return;
    }

    const requests = getPrayerRequests();
    requests.unshift({
      id: `prayer-${Date.now()}`,
      authorName: currentUser.name || "Participante TLC",
      authorEmail: currentUser.email || "",
      authorAvatar: currentUser.avatar || defaultAvatar,
      text,
      anonymous: Boolean(anonymousInput?.checked),
      createdAt: new Date().toISOString()
    });
    setPrayerRequests(requests);
    form.reset();
    if (prayerName) {
      prayerName.value = currentUser.name || "Participante TLC";
    }
    setMessage(messageBox, "Pedido enviado. Ele também aparecerá no mural da página inicial.", "success");
    renderPrayerRequests();
  });

  function renderPrayerRequests() {
    const requests = getPrayerRequests().sort((left, right) => new Date(right.createdAt) - new Date(left.createdAt));
    if (!list) {
      return;
    }

    if (!requests.length) {
      list.innerHTML = `<div class="empty-state">Ainda não há pedidos de oração no mural.</div>`;
      return;
    }

    list.innerHTML = requests.map((request) => {
      const canDelete = isAdminUser(currentUser) || isOwnerIdentity(request.authorEmail, request.authorName, currentUser);
      const displayName = request.anonymous ? "Pedido anônimo" : request.authorName;
      const avatarMarkup = request.anonymous ? "" : `<img src="${request.authorAvatar || defaultAvatar}" alt="Foto de ${request.authorName}">`;
      return `
        <article class="prayer-card-item" data-prayer-id="${request.id}">
          <div class="prayer-card-item__header">
            <div class="prayer-card-item__author">
              ${avatarMarkup}
              <div>
                <strong>${displayName}</strong>
                <span>${formatDateTime(request.createdAt)}</span>
              </div>
            </div>
            ${canDelete ? '<button type="button" class="btn btn-neutral prayer-delete-button">Apagar</button>' : ""}
          </div>
          <p>${request.text}</p>
        </article>
      `;
    }).join("");

    list.querySelectorAll(".prayer-delete-button").forEach((button) => {
      button.addEventListener("click", () => {
        const prayerId = button.closest(".prayer-card-item")?.dataset.prayerId;
        if (!prayerId) {
          return;
        }

        const currentRequests = getPrayerRequests();
        const prayer = currentRequests.find((entry) => entry.id === prayerId);
        if (!prayer || (!isAdminUser(currentUser) && !isOwnerIdentity(prayer.authorEmail, prayer.authorName, currentUser))) {
          return;
        }

        setPrayerRequests(currentRequests.filter((entry) => entry.id !== prayerId));
        renderPrayerRequests();
      });
    });
  }
}

function initTeamsPage() {
  if (document.body.dataset.page !== "teams") {
    return;
  }

  const grid = document.getElementById("teams-grid");
  if (!grid) {
    return;
  }

  const approvedUsers = getApprovedUsers().filter((user) => normalizeValue(user.role) !== "administrador");
  grid.innerHTML = teamDefinitions.map((team) => {
    const members = approvedUsers.filter((user) => user.team === team.id);
    const membersMarkup = members.length
      ? members.map((member) => {
        const profile = getPublicProfile({ email: member.email, name: member.name }) || member;
        return `
          <a class="team-member" href="${buildPublicProfilePath({ email: member.email, name: member.name })}">
            <img src="${profile.avatar || defaultAvatar}" alt="Foto de ${member.name}">
            <span>${member.name}</span>
          </a>
        `;
      }).join("")
      : `<div class="empty-state">Ainda não há participantes cadastrados nessa equipe.</div>`;

    return `
      <article class="team-card reveal">
        <div class="team-card__image">
          <img src="${team.image}" alt="Equipe ${team.name}">
        </div>
        <div class="team-card__content">
          <span class="section-tag">Equipe TLC</span>
          <h2>${team.name}</h2>
          <p>${team.phrase}</p>
          <div class="team-members-list">
            ${membersMarkup}
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function renderAdminRequests(container, messageBox) {
  if (!container) {
    return;
  }

  const requests = getAccessRequests().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  if (!requests.length) {
    container.innerHTML = `<div class="empty-state">Nenhum pedido de acesso por enquanto.</div>`;
    return;
  }

  container.innerHTML = requests.map((request) => `
    <article class="admin-request-card" data-request-id="${request.id}">
      <div class="admin-request-card__top">
        <div>
          <h3>${request.name}</h3>
          <div class="admin-request-meta">
            <span>${request.email}</span>
            <span>${request.group || "Sem grupo informado"}</span>
            <span>Pedido em ${formatDateTime(request.createdAt)}</span>
          </div>
        </div>
        <span class="status-badge ${request.status}">${statusLabel(request.status)}</span>
      </div>
      <p>${request.message || "Sem mensagem."}</p>
      <div class="admin-actions">
        <button type="button" class="btn btn-primary" data-action="approve">Aprovar</button>
        <button type="button" class="btn btn-secondary" data-action="deny">Negar</button>
        <button type="button" class="btn btn-neutral" data-action="mail">Abrir e-mail</button>
      </div>
    </article>
  `).join("");

  container.querySelectorAll(".admin-request-card").forEach((card) => {
    const requestId = card.dataset.requestId;
    card.querySelector('[data-action="approve"]')?.addEventListener("click", () => {
      updateRequestStatus(requestId, "approved");
      approveRequest(requestId);
      setMessage(messageBox, "Acesso aprovado e nome liberado para entrar no site.", "success");
      refreshAdminSummary();
      renderAdminRequests(container, messageBox);
    });

    card.querySelector('[data-action="deny"]')?.addEventListener("click", () => {
      updateRequestStatus(requestId, "denied");
      removeApprovedUserByRequest(requestId);
      setMessage(messageBox, "Acesso marcado como negado.", "success");
      refreshAdminSummary();
      renderAdminRequests(container, messageBox);
    });

    card.querySelector('[data-action="mail"]')?.addEventListener("click", () => {
      const request = getAccessRequests().find((item) => item.id === requestId);
      if (!request) {
        return;
      }

      openAdminMail(
        `Analise de acesso - ${request.name}`,
        [
          "Ola, administrativo do TLC!",
          "",
          `Nome: ${request.name}`,
          `E-mail: ${request.email}`,
          `Status atual: ${statusLabel(request.status)}`,
          "",
          "Responder liberando ou negando o acesso."
        ].join("\n")
      );
    });
  });
}

function refreshAdminSummary() {
  const pendingElement = document.getElementById("admin-pending-count");
  const approvedElement = document.getElementById("admin-approved-count");
  const deniedElement = document.getElementById("admin-denied-count");

  if (!pendingElement || !approvedElement || !deniedElement) {
    return;
  }

  const requests = getAccessRequests();
  const pending = requests.filter((request) => request.status === "pending").length;
  const approved = requests.filter((request) => request.status === "approved").length;
  const denied = requests.filter((request) => request.status === "denied").length;

  pendingElement.textContent = formatNumber(pending);
  approvedElement.textContent = formatNumber(approved);
  deniedElement.textContent = formatNumber(denied);
}

function approveRequest(requestId) {
  const request = getAccessRequests().find((item) => item.id === requestId);
  if (!request) {
    return;
  }

  ensureApprovedUser({
    name: request.name,
    email: request.email,
    role: "Participante",
    avatar: request.avatar || defaultAvatar,
    bio: request.bio || "",
    requestId
  });
}

function updateRequestStatus(requestId, status) {
  const nextRequests = getAccessRequests().map((request) => (
    request.id === requestId
      ? { ...request, status, reviewedAt: new Date().toISOString() }
      : request
  ));
  setAccessRequests(nextRequests);
}

function removeApprovedUserByRequest(requestId) {
  const request = getAccessRequests().find((item) => item.id === requestId);
  if (!request) {
    return;
  }

  const users = getApprovedUsers().filter((user) => !samePersonName(user.name, request.name));
  setApprovedUsers(users);
}

function syncUserProfileData(previousUser, nextUser, oldEmail) {
  const approvedUsers = getApprovedUsers();
  const nextApprovedUsers = approvedUsers.map((item) => {
    if (samePersonName(item.name, previousUser.name) || samePersonName(item.email, previousUser.email)) {
      return {
        ...item,
        name: nextUser.name,
        email: nextUser.email,
        avatar: nextUser.avatar,
        bio: nextUser.bio,
        instagram: nextUser.instagram,
        whatsapp: nextUser.whatsapp,
        team: nextUser.team || ""
      };
    }

    return item;
  });
  setApprovedUsers(nextApprovedUsers);

  const requests = getAccessRequests();
  const nextRequests = requests.map((item) => {
    if (samePersonName(item.name, previousUser.name) || samePersonName(item.email, previousUser.email)) {
      return {
        ...item,
        name: nextUser.name,
        email: nextUser.email,
        avatar: nextUser.avatar,
        bio: nextUser.bio,
        instagram: nextUser.instagram,
        whatsapp: nextUser.whatsapp,
        team: nextUser.team || ""
      };
    }

    return item;
  });
  setAccessRequests(nextRequests);

  const photos = getPhotos();
  const nextPhotos = photos.map((photo) => {
    if (photo.source === "upload" && photo.uploaderEmail === oldEmail) {
      return {
        ...photo,
        uploaderName: nextUser.name,
        uploaderEmail: nextUser.email,
        uploaderAvatar: nextUser.avatar,
        uploaderBio: nextUser.bio || "",
        uploaderInstagram: normalizeInstagram(nextUser.instagram || ""),
        uploaderWhatsapp: normalizeWhatsapp(nextUser.whatsapp || ""),
        uploaderTeam: nextUser.team || ""
      };
    }

    return photo;
  });
  setPhotos(nextPhotos);
}

function initRevealAnimations() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length) {
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });

  items.forEach((item) => observer.observe(item));
}

function initSacredLights() {
  const canvas = document.createElement("canvas");
  canvas.className = "sacred-lights";
  document.body.appendChild(canvas);

  const context = canvas.getContext("2d");
  const motionReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const particles = [];
  const particleCount = Math.min(36, Math.max(18, Math.floor(window.innerWidth / 42)));
  let animationFrame = null;
  let pointerX = window.innerWidth / 2;
  let pointerY = window.innerHeight / 2;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticle() {
    return {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2.6 + 0.8,
      alpha: Math.random() * 0.45 + 0.15,
      speedX: (Math.random() - 0.5) * 0.18,
      speedY: (Math.random() - 0.5) * 0.18 - 0.05,
      pulse: Math.random() * Math.PI * 2
    };
  }

  function seedParticles() {
    particles.length = 0;
    for (let index = 0; index < particleCount; index += 1) {
      particles.push(createParticle());
    }
  }

  function drawAura() {
    const gradient = context.createRadialGradient(pointerX, pointerY, 0, pointerX, pointerY, Math.max(canvas.width * 0.32, 240));
    gradient.addColorStop(0, "rgba(200, 166, 90, 0.15)");
    gradient.addColorStop(0.42, "rgba(200, 166, 90, 0.06)");
    gradient.addColorStop(1, "rgba(200, 166, 90, 0)");
    context.fillStyle = gradient;
    context.fillRect(0, 0, canvas.width, canvas.height);
  }

  function updateAndDrawParticles() {
    particles.forEach((particle) => {
      particle.x += particle.speedX;
      particle.y += particle.speedY;
      particle.pulse += 0.02;

      if (particle.x < -20) particle.x = canvas.width + 20;
      if (particle.x > canvas.width + 20) particle.x = -20;
      if (particle.y < -20) particle.y = canvas.height + 20;
      if (particle.y > canvas.height + 20) particle.y = -20;

      const shimmer = 0.3 + Math.sin(particle.pulse) * 0.18;
      context.beginPath();
      context.fillStyle = `rgba(241, 215, 154, ${particle.alpha + shimmer})`;
      context.shadowColor = "rgba(239, 201, 121, 0.35)";
      context.shadowBlur = 18;
      context.arc(particle.x, particle.y, particle.radius + shimmer, 0, Math.PI * 2);
      context.fill();
      context.closePath();
    });
  }

  function animate() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawAura();
    updateAndDrawParticles();
    animationFrame = window.requestAnimationFrame(animate);
  }

  resizeCanvas();
  seedParticles();

  if (!motionReduced) {
    animate();
  } else {
    context.clearRect(0, 0, canvas.width, canvas.height);
    drawAura();
    updateAndDrawParticles();
  }

  window.addEventListener("resize", () => {
    resizeCanvas();
    seedParticles();
  });

  window.addEventListener("pointermove", (event) => {
    pointerX += (event.clientX - pointerX) * 0.12;
    pointerY += (event.clientY - pointerY) * 0.12;
  });

  window.addEventListener("beforeunload", () => {
    if (animationFrame) {
      window.cancelAnimationFrame(animationFrame);
    }
  });
}

function initInteractiveCards() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const selectors = [
    ".feature-card",
    ".gallery-item",
    ".prayer-card",
    ".preview-panel",
    ".profile-card",
    ".stat-box",
    ".admin-request-card"
  ];

  const cards = document.querySelectorAll(selectors.join(","));

  cards.forEach((card) => {
    card.classList.add("interactive-card");

    card.addEventListener("pointermove", (event) => {
      const bounds = card.getBoundingClientRect();
      const offsetX = event.clientX - bounds.left;
      const offsetY = event.clientY - bounds.top;
      const rotateY = ((offsetX / bounds.width) - 0.5) * 8;
      const rotateX = ((offsetY / bounds.height) - 0.5) * -8;

      card.style.setProperty("--tilt-x", `${rotateX.toFixed(2)}deg`);
      card.style.setProperty("--tilt-y", `${rotateY.toFixed(2)}deg`);
      card.style.setProperty("--glow-x", `${((offsetX / bounds.width) * 100).toFixed(2)}%`);
      card.style.setProperty("--glow-y", `${((offsetY / bounds.height) * 100).toFixed(2)}%`);
    });

    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
      card.style.setProperty("--glow-x", "50%");
      card.style.setProperty("--glow-y", "50%");
    });
  });
}

function initMarianHero() {
  const stage = document.getElementById("sacred-stage");
  const particlesHost = document.getElementById("sacred-particles");
  const figure = document.getElementById("mary-figure");

  if (!stage || !particlesHost || !figure) {
    return;
  }

  const motionReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const particleCount = window.innerWidth < 640 ? 12 : 20;

  particlesHost.innerHTML = Array.from({ length: particleCount }, (_, index) => {
    const angle = (index / particleCount) * Math.PI * 2;
    const left = 50 + Math.cos(angle) * 34;
    const top = 50 + Math.sin(angle) * 37;
    const size = 5 + (index % 4) * 2;
    const duration = 4.5 + (index % 5) * 0.75;
    const delay = index * 0.18;

    return `
      <span
        class="sacred-particle"
        style="--left:${left}%; --top:${top}%; --size:${size}px; --duration:${duration}s; --delay:${delay}s"
      ></span>
    `;
  }).join("");

  if (motionReduced) {
    return;
  }

  stage.addEventListener("pointermove", (event) => {
    const bounds = stage.getBoundingClientRect();
    const ratioX = (event.clientX - bounds.left) / bounds.width - 0.5;
    const ratioY = (event.clientY - bounds.top) / bounds.height - 0.5;
    stage.style.setProperty("--stage-x", `${ratioX * 14}px`);
    stage.style.setProperty("--stage-y", `${ratioY * 10}px`);
    figure.style.transform = `translate(${ratioX * 10}px, ${ratioY * 6 - 4}px) scale(1.015)`;
  });

  stage.addEventListener("pointerleave", () => {
    stage.style.setProperty("--stage-x", "0px");
    stage.style.setProperty("--stage-y", "0px");
    figure.style.transform = "";
  });
}

function setMessage(element, message, type) {
  if (!element) {
    return;
  }

  element.textContent = message;
  element.className = "form-message";
  if (type) {
    element.classList.add(type);
  }
}

function clearErrors(form) {
  form?.querySelectorAll(".field-error").forEach((field) => {
    field.textContent = "";
  });
}

function showFieldError(name, message) {
  const field = document.querySelector(`[data-error-for="${name}"]`);
  if (field) {
    field.textContent = message;
  }
}

function clearFieldError(name) {
  const field = document.querySelector(`[data-error-for="${name}"]`);
  if (field) {
    field.textContent = "";
  }
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidFullName(name) {
  return name.split(/\s+/).filter(Boolean).length >= 2;
}

function slugifyName(name) {
  return normalizeValue(name).replace(/\s+/g, ".").replace(/[^a-z0-9.]/g, "");
}

function formatNumber(value) {
  return Number(value || 0).toLocaleString("pt-BR");
}

function sanitizeInstagramHandle(value) {
  const cleaned = String(value || "").trim().replace(/^@+/, "").replace(/\s+/g, "");
  if (!cleaned) {
    return "";
  }

  return /^[a-zA-Z0-9._]{1,30}$/.test(cleaned) ? cleaned : "";
}

function formatInstagramLabel(value) {
  const handle = normalizeInstagram(value);
  return handle ? `@${handle}` : "";
}

function getInstagramLink(value) {
  const handle = normalizeInstagram(value);
  return handle ? `https://www.instagram.com/${handle}/` : "";
}

function formatWhatsappLabel(value) {
  const digits = normalizeWhatsapp(value);
  if (digits.length === 11) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  }

  if (digits.length === 10) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
  }

  return digits;
}

function getWhatsappLink(value) {
  const digits = normalizeWhatsapp(value);
  return digits ? `https://wa.me/55${digits}` : "";
}

function normalizeValue(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function normalizeInstagram(value) {
  const rawValue = String(value || "").trim();
  if (!rawValue) {
    return "";
  }

  if (/^https?:\/\//i.test(rawValue)) {
    try {
      const url = new URL(rawValue);
      const host = url.hostname.replace(/^www\./i, "").toLowerCase();
      if (host !== "instagram.com") {
        return "";
      }

      const handleFromUrl = url.pathname.split("/").filter(Boolean)[0] || "";
      return sanitizeInstagramHandle(handleFromUrl);
    } catch {
      return "";
    }
  }

  return sanitizeInstagramHandle(rawValue);
}

function normalizeWhatsapp(value) {
  const digits = String(value || "").replace(/\D/g, "");
  if (!digits) {
    return "";
  }

  const cleaned = digits.length > 11 && digits.startsWith("55") ? digits.slice(2) : digits;
  return /^\d{10,11}$/.test(cleaned) ? cleaned : "";
}

function clampAvatarOffset(value, maxOffset = 140) {
  return Math.max(-maxOffset, Math.min(maxOffset, Math.round(value)));
}

function samePersonName(left, right) {
  return normalizeValue(left) === normalizeValue(right);
}

function findPersonByName(collection, name) {
  return collection.find((item) => samePersonName(item.name, name));
}

function isAdminName(name) {
  return Boolean(getAdminProfileByName(name));
}

function ensureApprovedUser(userData) {
  const users = getApprovedUsers();
  const existingIndex = users.findIndex((item) => samePersonName(item.name, userData.name));
  const nextUser = {
    id: userData.requestId || `approved-${Date.now()}`,
    name: userData.name,
    email: userData.email,
    role: userData.role || "Participante",
    approvedAt: new Date().toISOString(),
    avatar: userData.avatar || defaultAvatar,
    bio: userData.bio || ""
  };

  if (existingIndex >= 0) {
    users[existingIndex] = { ...users[existingIndex], ...nextUser };
  } else {
    users.push(nextUser);
  }

  setApprovedUsers(users);
}

function openAdminMail(subject, body) {
  const url = `mailto:${adminEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = url;
}

function statusLabel(status) {
  if (status === "approved") {
    return "Aprovado";
  }

  if (status === "denied") {
    return "Negado";
  }

  return "Pendente";
}

function formatDate(dateString) {
  if (!dateString) {
    return "";
  }

  return new Date(`${dateString}T00:00:00`).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric"
  });
}

function formatDateTime(dateString) {
  if (!dateString) {
    return "";
  }

  return new Date(dateString).toLocaleString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}
