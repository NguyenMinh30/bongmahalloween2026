const PIXEL_SIZE = 4;
const CANDY_POINTS = 100;
const FREEZE_CHARGE = 125;
const FREEZE_TIME = 125;
const POWERUP_TIME = 320;
const DEBUFF_TIME = 280;
const UNLOCKED_MAP_STORAGE_KEY = "halloweenUnlockedMap";

export const CHARACTERS = [
  {
    id: "ghost-kid",
    name: "Ghost Kid",
    tagline: "Ma nhỏ tinh nghịch",
    description: "Một hồn ma bé xíu, áo choàng mềm và chiếc mũ fez đỏ may mắn.",
    palette: { 1: "#fff8e9", 2: "#a9d8f4", 3: "#242443", 4: "#ed6d79" },
  },
  {
    id: "pumpkin-boy",
    name: "Pumpkin Boy",
    tagline: "Bí ngô dũng cảm",
    description: "Bí ngô cam có cuống xanh và nụ cười răng cưa luôn sẵn sàng.",
    palette: { 1: "#f78a43", 2: "#bd4f37", 3: "#211b38", 4: "#8fd17a" },
  },
  {
    id: "witch-cat",
    name: "Witch Cat",
    tagline: "Phù thủy mèo phép thuật",
    description: "Mèo tím tai nhọn, ria mép bạc và chiếc mũ phù thủy lấp lánh.",
    palette: { 1: "#b894ed", 2: "#6d55a7", 3: "#fff0a5", 4: "#f184ba" },
  },
  {
    id: "vampire",
    name: "Vampire",
    tagline: "Ma cà rồng nhí lịch thiệp",
    description: "Áo choàng đỏ rượu, tóc đen bóng và hai chiếc nanh bé xíu.",
    palette: { 1: "#e9d8e8", 2: "#9b385e", 3: "#282038", 4: "#711d43" },
  },
];

const MAP_JUMPSCARES = {
  1: [
    { visual: "🎃💀👻", text: "Ú ÒA! CHẠY ĐI ĐÂU!" },
    { visual: "🪦🧟‍♂️🎃", text: "KẺ ĐÁNH CẮP KẸO!" },
  ],
  2: [
    { visual: "🌲👁️👁️🌲", text: "ĐẰNG SAU BẠN KÌA!" },
    { visual: "🕸️🕷️👻", text: "BÓNG TỐI ĐANG NUỐT CHỬNG!" },
  ],
  3: [
    { visual: "🏚️😱🩸", text: "AI CHO NGƯƠI VÀO ĐÂY?!" },
    { visual: "🚪👀🕯️", text: "CỐC... CỐC... CỐC!" },
  ],
  4: [
    { visual: "🏥💉🧟", text: "ĐẾN GIỜ TIÊM THUỐC RỒI!" },
    { visual: "🚨🩺👻", text: "BỆNH NHÂN TRỐN TRẠI!" },
  ],
  5: [
    { visual: "🦇🧛‍♂️🩸", text: "MÙI MÁU TƯƠI..." },
    { visual: "⚰️🦇😈", text: "ĐÀN DƠI ĐÊM TRĂNG MÁU!" },
  ],
  6: [
    { visual: "🪞👹🪞", text: "KẺ TRONG GƯƠNG ĐANG NHÌN BẠN!" },
    { visual: "💥🪞👁️", text: "ĐỪNG TIN VÀO PHẢN CHIẾU!" },
  ],
  7: [
    { visual: "🔥💀🌋", text: "CHÁY THÀNH TRO ĐI!" },
    { visual: "😈🔥🎃", text: "ĐỊA NGỤC BÍ NGÔ TRỖI DẬY!" },
  ],
  8: [
    { visual: "👑🎃💢", text: "TA SẼ NGHIỀN NÁT NGƯƠI!" },
    { visual: "🔥👑💀", text: "QUỲ XUỐNG TRƯỚC VUA BÍ NGÔ!" },
  ],
};

export const LEVELS = [
  {
    level: 1,
    title: "Map 1 – Nghĩa Địa Bí Ngô 🎃",
    themeNote: "Thu thập đủ kẹo rồi chạy đến cổng thoát. Ma thường đi tuần và lao vào khi bạn đến gần. Hãy nhìn về phía ma để đóng băng chúng!",
    instruction: "Map 1: Thu thập hết kẹo 🍬 · Nhìn thẳng vào ma để đóng băng 👁️ · Chạy vào cổng thoát",
    icons: ["🎃", "🍬", "👻", "👁️"],
    biome: 0,
    hue: 255,
    candies: 5,
    miniGhosts: 1,
    webs: 2,
    ghostSpeed: 1.2,
    miniSpeed: 0.9,
  },
  {
    level: 2,
    title: "Map 2 – Rừng Ma Ám 🌲👻",
    themeNote: "Rừng tối giới hạn tầm nhìn! Đèn pin sẽ cạn dần, hãy nhặt Pin mới (🔋). Trốn vào bụi cây (🌿), vòng qua gốc cây chắn đường (🌲) ",
    instruction: "Map 2: Nhặt Pin 🔋 giữ sáng đèn · Đứng vào bụi cây 🌿 để trốn ma · Tránh gốc cây 🌲",
    icons: ["🌲", "🔦", "🔋", "🌿"],
    biome: 1,
    hue: 150,
    candies: 6,
    miniGhosts: 2,
    webs: 2,
    ghostSpeed: 1.32,
    miniSpeed: 1.0,
  },
  {
    level: 3,
    title: "Map 3 – Biệt Thự Bỏ Hoang 🏚️",
    themeNote: "Chia thành nhiều phòng nhỏ và hành lang tối. Hãy tìm đủ 3 Chìa Khóa (🗝️) cùng kẹo để mở cửa chính! Có tủ gỗ (🗄️) để trốn. ",
    instruction: "Map 3: Tìm đủ 3 Chìa khóa 🗝️ & kẹo 🍬 · Trốn trong tủ 🗄️ · Nhìn ma nhiều lần sẽ giảm hiệu lực đóng băng",
    icons: ["🏚️", "🗝️", "🗄️", "🚪"],
    biome: 2,
    hue: 280,
    candies: 6,
    miniGhosts: 2,
    webs: 2,
    ghostSpeed: 1.4,
    miniSpeed: 1.05,
  },
  {
    level: 4,
    title: "Map 4 – Bệnh Viện Ma Ám 🏥",
    themeNote: "Giữ phím Shift (hoặc bấm nút 🏃/🤫) để đi nhẹ an toàn.",
    instruction: "Map 4: Giữ Shift hoặc nút 🤫 để đi nhẹ giảm tiếng động",
    icons: ["🏥", "🔊", "🤫", "🛒"],
    biome: 3,
    hue: 190,
    candies: 6,
    miniGhosts: 2,
    webs: 3,
    ghostSpeed: 1.45,
    miniSpeed: 1.12,
  },
  {
    level: 5,
    title: "Map 5 – Lâu Đài Ma Cà Rồng 🏰🦇",
    themeNote: "Hãy tìm Thánh giá (✝️), Tỏi (🧄) và Nước thánh (🧪) để đẩy lùi Ma Cà Rồng!",
    instruction: "Map 5: Tránh bẫy gai 🗡️ & lửa 🔥 · Nhặt Thánh giá ✝️ / Tỏi 🧄 / Nước thánh 🧪 để chống Dơi & Ma Cà Rồng",
    icons: ["🏰", "🦇", "✝️", "🧄"],
    biome: 4,
    hue: 340,
    candies: 7,
    miniGhosts: 3,
    webs: 2,
    ghostSpeed: 1.55,
    miniSpeed: 1.25,
  },
  {
    level: 6,
    title: "Map 6 – Thế Giới Gương 🪞",
    themeNote: "Bước vào vùng gương sẽ làm điều khiển bị đảo ngược trái-phải! Trong gương xuất hiện bản sao của bạn và ma ảo ảnh.",
    instruction: "Map 6: Vùng gương đảo chiều điều khiển ↔️ · Phân biệt ma thật và ma ảo · Đứng gần gương 🪞 để hiện cổng thoát",
    icons: ["🪞", "👥", "🔄", "🚪"],
    biome: 3,
    hue: 215,
    candies: 7,
    miniGhosts: 2,
    webs: 2,
    ghostSpeed: 1.55,
    miniSpeed: 1.2,
  },
  {
    level: 7,
    title: "Map 7 – Địa Ngục Bí Ngô 🔥🎃",
    themeNote: "Hãy thu thập đủ kẹo đồng thời phá vỡ 4 Viên Tinh Thể (💎) để phá phong ấn mở đường đến hang ổ Boss!",
    instruction: "Map 7: Tránh dung nham 🌋 & sàn sập 🟫 · Thu thập đủ kẹo 🍬 và chạm phá 4 Tinh thể 💎 để mở cổng",
    icons: ["🔥", "🌋", "💎", "🎃"],
    biome: 5,
    hue: 18,
    candies: 7,
    miniGhosts: 3,
    webs: 3,
    ghostSpeed: 1.65,
    miniSpeed: 1.3,
  },
  {
    level: 8,
    title: "Map Boss – Vua Bí Ngô 👑🎃",
    themeNote: "Vua Bí Ngô không thể bị đóng băng bằng cách nhìn thông thường! Hắn ném bí ngô nổ, gọi ma nhỏ và lao húc cực mạnh.",
    instruction: "Map Boss: Dụ Vua Bí Ngô húc vào Bia mộ 🪦 hoặc Cột sáng ✨ cho choáng 💫 rồi chạm vào Boss để tấn công!",
    icons: ["👑", "🎃", "🪦", "✨"],
    biome: 5,
    hue: 35,
    candies: 5,
    miniGhosts: 2,
    webs: 2,
    ghostSpeed: 1.75,
    miniSpeed: 1.3,
  },
];

const pixelCache = new Map();
const PLAYER_WIDTH = 14 * PIXEL_SIZE;
const PLAYER_HEIGHT = 16 * PIXEL_SIZE;
const GHOST_WIDTH = 22 * PIXEL_SIZE;
const GHOST_HEIGHT = 20 * PIXEL_SIZE;

function loadUnlockedMap() {
  try {
    const raw = Number(localStorage.getItem(UNLOCKED_MAP_STORAGE_KEY) || "1");
    return Math.max(1, Math.min(8, Number.isFinite(raw) ? raw : 1));
  } catch {
    return 1;
  }
}

function saveUnlockedMap(level) {
  try {
    localStorage.setItem(UNLOCKED_MAP_STORAGE_KEY, String(Math.max(1, Math.min(8, level))));
  } catch {
    // Ignore storage errors
  }
}

function buildPlayerMask(characterId, facingRight, bob) {
  const mask = Array.from({ length: 16 }, () => Array(14).fill(0));
  const put = (x, y, value) => {
    if (mask[y] && mask[y][x] !== undefined) mask[y][x] = value;
  };
  const fill = (left, right, top, bottom, value) => {
    for (let y = top; y <= bottom; y++) for (let x = left; x <= right; x++) put(x, y, value);
  };

  if (characterId === "pumpkin-boy") {
    const rows = [[6, 7], [5, 8], [3, 10], [2, 11], [2, 11], [1, 12], [1, 12], [2, 11], [2, 11], [3, 10], [4, 9]];
    rows.forEach(([left, right], row) => fill(left, right, row + 4, row + 4, row === 0 ? 4 : 1));
    fill(6, 7, 2, 3, 4);
    fill(3, 4, 7, 8, 3);
    fill(9, 10, 7, 8, 3);
    fill(5, 8, 10, 10, 3);
    fill(4, 5, 11, 11, 3);
    fill(8, 9, 11, 11, 3);
    [5, 8].forEach((x) => { put(x, 6, 2); put(x, 9, 2); });
    return mask;
  }

  if (characterId === "witch-cat") {
    fill(3, 4, 2, 5, 2); fill(9, 10, 2, 5, 2);
    fill(4, 5, 3, 4, 1); fill(8, 9, 3, 4, 1);
    fill(3, 10, 5, 12, 1); fill(4, 9, 13, 14, 1);
    fill(1, 2, 10, 11, 1); fill(0, 1, 9, 10, 2);
    fill(4, 5, 8, 9, 3); fill(8, 9, 8, 9, 3);
    put(6, 10, 4); put(7, 10, 4);
    fill(4, 8, 3, 3, 4); fill(3, 9, 4, 4, 2);
    fill(5, 7, 1, 2, 4); put(6, 0, 4);
    put(1, 7, 4); put(0, 6, 4); put(2, 8, 4);
    return mask;
  }

  if (characterId === "vampire") {
    fill(2, 11, 6, 13, 4);
    fill(3, 10, 4, 10, 1);
    fill(4, 9, 5, 9, 1);
    fill(2, 4, 4, 6, 4); fill(9, 11, 4, 6, 4);
    fill(4, 5, 7, 8, 3); fill(8, 9, 7, 8, 3);
    put(6, 10, 4); put(7, 10, 4); put(5, 10, 4); put(8, 10, 4);
    fill(5, 8, 2, 3, 2); fill(4, 9, 3, 4, 2);
    put(5, 11, 4); put(8, 11, 4);
    return mask;
  }

  const bodyTop = 4 + Math.round(bob);
  fill(5, 8, 0, 2, 3);
  fill(5, 8, 3, 3, 4);
  put(9, 2, 4); put(10, 3, 4);
  for (let y = bodyTop; y < bodyTop + 8; y++) fill(2, 11, y, y, 1);
  [2, 11].forEach((x) => { put(x, bodyTop, 0); put(x, bodyTop + 7, 0); });
  fill(3, 4, bodyTop + 8, bodyTop + 8, 1);
  fill(9, 10, bodyTop + 8, bodyTop + 8, 1);
  const eyeOffset = facingRight ? 1 : -1;
  fill(3 + eyeOffset, 4 + eyeOffset, bodyTop + 2, bodyTop + 3, 3);
  fill(8 + eyeOffset, 9 + eyeOffset, bodyTop + 2, bodyTop + 3, 3);
  return mask;
}

function buildGhostMask(width, height, mini = false, isBoss = false) {
  const mask = Array.from({ length: height }, () => Array(width).fill(0));
  const cx = width / 2;
  const cy = height / 2;
  const radius = Math.min(width, height) * 0.43;
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const distance = Math.hypot(x + 0.5 - cx, y + 0.5 - cy);
      if (distance <= radius) mask[y][x] = distance > radius - 1 ? 2 : 1;
    }
  }
  if (isBoss) {
    for (let x = Math.floor(cx - 5); x <= Math.floor(cx + 5); x++) {
      mask[1][x] = 4;
      mask[2][x] = 4;
    }
    mask[0][Math.floor(cx - 5)] = 4;
    mask[0][Math.floor(cx)] = 4;
    mask[0][Math.floor(cx + 5)] = 4;
  } else {
    for (let x = 1; x < width - 1; x += 3) {
      const y = Math.floor(height * 0.72 + Math.sin(x) * 0.5);
      if (mask[y]) mask[y][x] = 2;
      if (mask[y + 1]) mask[y + 1][x] = 1;
    }
  }
  const eyeY = Math.floor(height * 0.4);
  const eyeWidth = Math.max(2, Math.floor(width * 0.1));
  const eyeHeight = Math.max(2, Math.floor(height * 0.16));
  const eyeLeft = Math.floor(cx - radius * 0.45);
  const eyeRight = Math.floor(cx + radius * 0.25);
  for (let y = eyeY; y < eyeY + eyeHeight; y++) {
    for (let x = 0; x < eyeWidth; x++) {
      if (mask[y]) {
        if (mask[y][eyeLeft + x] !== undefined) mask[y][eyeLeft + x] = 3;
        if (mask[y][eyeRight + x] !== undefined) mask[y][eyeRight + x] = 3;
      }
    }
  }
  if (!mini) {
    for (let y = Math.floor(cy + 1); y < Math.floor(cy + 4); y++) {
      for (let x = Math.floor(cx - 3); x < Math.floor(cx + 3); x++) {
        if (mask[y] && mask[y][x]) mask[y][x] = isBoss ? 3 : 4;
      }
    }
  }
  return mask;
}

function drawPixelMask(element, mask, palette, pixelSize = PIXEL_SIZE) {
  const colors = Object.values(palette).join("|");
  const key = `${pixelSize}:${colors}:${mask.map((row) => row.join("")).join("/")}`;
  let shadow = pixelCache.get(key);
  if (!shadow) {
    const pixels = [];
    for (let y = 0; y < mask.length; y++) {
      for (let x = 0; x < mask[y].length; x++) {
        const color = palette[mask[y][x]];
        if (color) pixels.push(`${x * pixelSize}px ${y * pixelSize}px 0 ${color}`);
      }
    }
    shadow = pixels.join(",");
    if (pixelCache.size > 160) pixelCache.clear();
    pixelCache.set(key, shadow);
  }
  if (element._pixelShadow !== shadow) {
    element.style.boxShadow = shadow;
    element._pixelShadow = shadow;
  }
  element.style.width = `${pixelSize}px`;
  element.style.height = `${pixelSize}px`;
}

export function paintCharacterPreview(element, characterId) {
  const character = CHARACTERS.find((item) => item.id === characterId) || CHARACTERS[0];
  drawPixelMask(element, buildPlayerMask(character.id, true, 0), character.palette, 5);
}

export function createGameplay({ onHud = () => { }, onLevelComplete = () => { }, onGameComplete = () => { }, onEffect = () => { } } = {}) {
  const gameEl = document.getElementById("game");
  const instructionsEl = document.getElementById("instructions");
  const mapObjectsEl = document.getElementById("map-objects");
  const darknessEl = document.getElementById("darkness-overlay");
  const playerEl = document.getElementById("player");
  const playerShadowEl = document.getElementById("player-shadow");
  const spookEl = document.getElementById("spook");
  const candiesEl = document.getElementById("candies");
  const websEl = document.getElementById("webs");
  const miniGhostsEl = document.getElementById("mini-ghosts");
  const playerNameDisplay = document.getElementById("player-name-display");
  const spookNameDisplay = document.getElementById("spook-name-display");
  const pixelUnit = window.matchMedia("(max-width: 600px)").matches ? 3 : PIXEL_SIZE;
  const playerMaskCache = new Map();

  const world = {
    width: window.innerWidth,
    height: window.innerHeight,
    floorY: window.innerHeight - 42,
    time: 0,
    level: 1,
    unlockedLevel: loadUnlockedMap(),
    levelScore: 0,
    totalScore: 0,
    keys: { left: 0, right: 0, up: 0, down: 0 },
    target: null,
    currentAngle: 0,
    p: {
      x: 70, y: 180, width: PLAYER_WIDTH, height: PLAYER_HEIGHT,
      vx: 0, vy: 0, speed: 2.2, baseSpeed: 2.2,
      dragged: false, dragOffsetX: 0, dragOffsetY: 0,
      hidden: false, sneaking: false, inverted: false,
    },
    g: {
      x: 480, y: 200, width: GHOST_WIDTH, height: GHOST_HEIGHT,
      vx: 0, vy: 0, speed: 1.15, shy: false,
      freezeTimer: 0, frozen: false, freezeCount: 0,
      patrolAngle: 0,
      hp: 5, maxHp: 5, stunTimer: 0, chargeTimer: 180, charging: false, chargeVx: 0, chargeVy: 0, shootTimer: 130,
    },
    candies: [],
    webs: [],
    miniGhosts: [],
    portal: null,
    powerup: null,
    powerupType: null,
    powerupTimer: 0,
    powerupSpawnTimer: 1000,
    debuffTimer: 0,
    invulnerable: 0,
    combo: 0,
    comboTimer: 0,
    wasHit: false,
    levelStartedAt: 0,
    selectedCharacter: "ghost-kid",
    playerName: "Bạn",
    spookName: "Ghost",
    completedLevels: 0,
    perfectLevels: 0,
    totalCandies: 0,
    bestCombo: 0,
    elapsedFastestLevel: Infinity,
    active: false,
    completed: false,
    // Jump scare timer & giới hạn 2-3 lần mỗi Map
    jumpscareTimer: 1100,
    jumpscareCount: 0,
    maxJumpscares: 2,
    // Map-specific states
    battery: 100,
    batteries: [],
    obstacles: [],
    hideSpots: [],
    mapKeys: [],
    keysCollected: 0,
    keysRequired: 0,
    lockedDoor: null,
    noise: 0,
    carts: [],
    traps: [],
    relics: [],
    holyShieldTimer: 0,
    mirrorZones: [],
    mirrors: [],
    mirrorCloneEl: null,
    mirrorGhostEl: null,
    crystals: [],
    crystalsBroken: 0,
    crystalsRequired: 0,
    lavaZones: [],
    crumbleTiles: [],
    bossPillars: [],
    bossProjectiles: [],
  };

  function config() { return LEVELS[world.level - 1] || LEVELS[0]; }
  function playerPalette() {
    return CHARACTERS.find((item) => item.id === world.selectedCharacter)?.palette || CHARACTERS[0].palette;
  }
  function updateDimensions() {
    const rect = gameEl.getBoundingClientRect();
    world.width = rect.width;
    world.height = rect.height;
    world.floorY = world.height - 42;
    world.p.x = clamp(world.p.x, 8, Math.max(8, world.width - PLAYER_WIDTH - 8));
    world.p.y = clamp(world.p.y, 74, Math.max(74, world.floorY - PLAYER_HEIGHT - 8));
  }
  function clamp(value, min, max) { return Math.min(max, Math.max(min, value)); }
  function pointFor(entity, width = 42, height = width) { return { x: entity.x + width / 2, y: entity.y + height / 2 }; }
  function collides(first, second, radius) {
    const a = pointFor(first, first.width || 56, first.height || 56);
    const b = pointFor(second, second.width || 40, second.height || 40);
    return Math.hypot(a.x - b.x, a.y - b.y) < radius;
  }
  function rectOverlaps(a, b) {
    return (
      a.x < b.x + b.width &&
      a.x + a.width > b.x &&
      a.y < b.y + b.height &&
      a.y + a.height > b.y
    );
  }
  function position(element, x, y) { element.style.transform = `translate3d(${Math.round(x)}px, ${Math.round(y)}px, 0)`; }

  function triggerJumpScare(customScare = null) {
    if (world.jumpscareCount >= world.maxJumpscares) return;
    world.jumpscareCount++;
    const list = MAP_JUMPSCARES[world.level] || MAP_JUMPSCARES[1];
    const chosen = customScare || list[Math.floor(Math.random() * list.length)];
    // Giãn thời gian chờ lần hù tiếp theo (khoảng 18 - 30 giây ở 60fps)
    world.jumpscareTimer = 1100 + Math.random() * 700;
    onEffect("jumpscare", {
      level: world.level,
      visual: chosen.visual,
      text: chosen.text,
    });
  }

  function buildSpecialHudText() {
    switch (world.level) {
      case 1:
        return "🎃 Nghĩa Địa: Nhìn ma để đóng băng";
      case 2:
        return `🔦 Pin: ${Math.round(world.battery)}% ${world.p.hidden ? "· 🌿 Đang trốn" : ""}`;
      case 3:
        return `🗝️ Chìa khóa: ${world.keysCollected}/${world.keysRequired} · Kháng băng: ${world.g.freezeCount}x`;
      case 4:
        return `🔊 Tiếng động: ${Math.round(world.noise)}% ${world.noise >= 60 ? "🚨 BỊ PHÁT HIỆN!" : world.p.sneaking ? "· 🤫 Đi nhẹ" : ""}`;
      case 5:
        return world.holyShieldTimer > 0
          ? `✝️ Thánh quang: ${Math.ceil(world.holyShieldTimer / 60)}s`
          : "🦇 Tìm ✝️/🧄/🧪 để trị Dơi & Ma Cà Rồng";
      case 6:
        return `${world.p.inverted ? "🔄 Đảo điều khiển!" : "🪞 Thế Giới Gương"} · Soi gương tìm cổng`;
      case 7:
        return `💎 Tinh thể: ${world.crystalsBroken}/${world.crystalsRequired}`;
      case 8:
        return `👑 Vua Bí Ngô: ${"❤️".repeat(Math.max(0, world.g.hp))}${"🖤".repeat(Math.max(0, world.g.maxHp - world.g.hp))} ${world.g.stunTimer > 0 ? "· 💫 CHOÁNG!" : ""}`;
      default:
        return "";
    }
  }

  function updateHud() {
    onHud({
      level: world.level,
      unlockedLevel: world.unlockedLevel,
      levelScore: world.levelScore,
      totalScore: world.totalScore,
      candies: world.candies.filter((candy) => candy.collected).length,
      candyTotal: world.candies.length,
      freeze: world.level === 8 ? 0 : Math.min(1, world.g.freezeTimer / FREEZE_CHARGE),
      character: world.selectedCharacter,
      playerName: world.playerName,
      spookName: world.level === 8 ? "👑 Vua Bí Ngô" : world.spookName,
      specialText: buildSpecialHudText(),
      showSneakButton: world.level === 4,
      sneaking: world.p.sneaking,
    });
  }

  function score(amount, x, y) {
    world.levelScore = Math.max(0, world.levelScore + amount);
    if (amount > 0) onEffect("score", { amount, x, y });
    updateHud();
  }

  function randomSpot(avoidPlayer = true) {
    const minX = Math.min(80, Math.max(16, world.width * 0.08));
    const maxX = Math.max(minX + 20, world.width - 110);
    const minY = Math.min(120, Math.max(82, world.height * 0.16));
    const maxY = Math.max(minY + 20, world.floorY - 95);
    let point = { x: minX, y: minY };
    for (let attempt = 0; attempt < 45; attempt++) {
      point = { x: minX + Math.random() * (maxX - minX), y: minY + Math.random() * (maxY - minY) };
      const hitsWall = world.obstacles.some((obs) => (
        point.x + 42 > obs.x && point.x < obs.x + obs.width &&
        point.y + 42 > obs.y && point.y < obs.y + obs.height
      ));
      if (hitsWall) continue;
      if (!avoidPlayer || Math.hypot(point.x - world.p.x, point.y - world.p.y) > 125) break;
    }
    return point;
  }

  function clearObjects() {
    candiesEl.replaceChildren();
    websEl.replaceChildren();
    miniGhostsEl.replaceChildren();
    mapObjectsEl.replaceChildren();
    if (world.portal?.element) world.portal.element.remove();
    if (world.powerup?.element) world.powerup.element.remove();
    world.portal = null;
    world.powerup = null;
    world.candies = [];
    world.webs = [];
    world.miniGhosts = [];
    world.batteries = [];
    world.obstacles = [];
    world.hideSpots = [];
    world.mapKeys = [];
    world.lockedDoor = null;
    world.carts = [];
    world.traps = [];
    world.relics = [];
    world.mirrorZones = [];
    world.mirrors = [];
    world.mirrorCloneEl = null;
    world.mirrorGhostEl = null;
    world.crystals = [];
    world.lavaZones = [];
    world.crumbleTiles = [];
    world.bossPillars = [];
    world.bossProjectiles = [];
  }

  function createMapEntity(className, text, x, y, width = 48, height = 48) {
    const element = document.createElement("div");
    element.className = `actor map-entity ${className}`;
    if (text) element.textContent = text;
    element.style.width = `${width}px`;
    element.style.height = `${height}px`;
    mapObjectsEl.appendChild(element);
    position(element, x, y);
    return { element, x, y, width, height };
  }

  function addCandy() {
    const element = document.createElement("div");
    element.className = "actor candy";
    element.textContent = Math.random() < 0.2 ? "🍭" : "🍬";
    candiesEl.appendChild(element);
    const spot = randomSpot();
    const candy = { element, x: spot.x, y: spot.y, width: 36, height: 36, collected: false, bob: Math.random() * 6 };
    world.candies.push(candy);
    return candy;
  }

  function addWeb() {
    const element = document.createElement("div");
    element.className = "actor web";
    element.textContent = "🕸️";
    websEl.appendChild(element);
    const spot = randomSpot();
    world.webs.push({ element, x: spot.x, y: spot.y, bob: Math.random() * 7, width: 36, height: 36 });
  }

  function addMiniGhost(isBat = false, isShadow = false) {
    const element = document.createElement("div");
    element.className = "actor glow";
    element.setAttribute("aria-label", isBat ? "Ma dơi" : "Bóng ma nhỏ");
    miniGhostsEl.appendChild(element);
    if (isBat) {
      element.className = "actor map-entity";
      element.textContent = "🦇";
      element.style.fontSize = "32px";
    } else {
      const palette = isShadow
        ? { 1: "#7f6aa8", 2: "#433168", 3: "#ff5c8a", 4: "#ff75ac" }
        : { 1: "#d9eeff", 2: "#83b8e4", 3: "#20334f", 4: "#ff75ac" };
      drawPixelMask(element, buildGhostMask(14, 12, true), palette, pixelUnit);
    }
    world.miniGhosts.push({
      element,
      x: world.g.x + (Math.random() - 0.5) * 90,
      y: world.g.y + (Math.random() - 0.5) * 90,
      width: 52,
      height: 46,
      vx: 0,
      vy: 0,
      speed: config().miniSpeed,
      orbit: Math.random() * Math.PI * 2,
      bob: Math.random() * 6,
      isBat,
      isShadow,
    });
  }

  function createPortal() {
    if (world.portal) return;
    const element = document.createElement("div");
    element.className = "actor portal";
    element.textContent = world.level === 8 ? "👑" : "✦";
    element.setAttribute("aria-label", "Cổng dịch chuyển");
    gameEl.appendChild(element);
    const px = world.level === 3 ? world.width - 110 : world.width / 2 - 39;
    const py = world.level === 3 ? world.floorY / 2 - 40 : world.floorY - 124;
    world.portal = { element, x: px, y: py, width: 78, height: 100, bob: Math.random() * 6 };
    if (world.lockedDoor) {
      world.lockedDoor.element.remove();
      world.lockedDoor = null;
    }
    onEffect("portal");
  }

  function spawnPowerup() {
    if (world.powerup) return;
    const types = ["speed", "magnet", "repel"];
    const type = types[Math.floor(Math.random() * types.length)];
    const icons = { speed: "🧃", magnet: "🍭", repel: "💚" };
    const element = document.createElement("div");
    element.className = "actor powerup";
    element.textContent = icons[type];
    gameEl.appendChild(element);
    const spot = randomSpot();
    world.powerup = { element, type, x: spot.x, y: spot.y, width: 42, height: 42, bob: Math.random() * 6 };
    onEffect("powerup");
  }

  function setupMapFeatures() {
    const w = world.width;
    const h = world.floorY;
    darknessEl.style.opacity = "0";

    if (world.level === 2) {
      darknessEl.style.opacity = "1";
      world.battery = 100;
      for (let i = 0; i < 4; i++) {
        const spot = randomSpot();
        world.obstacles.push(createMapEntity("tree-blocker", "🌲", spot.x, spot.y, 54, 54));
      }
      for (let i = 0; i < 4; i++) {
        const spot = randomSpot(false);
        world.hideSpots.push(createMapEntity("hide-spot", "🌿", spot.x, spot.y, 58, 58));
      }
      for (let i = 0; i < 3; i++) {
        const spot = randomSpot();
        world.batteries.push(createMapEntity("powerup", "🔋", spot.x, spot.y, 40, 40));
      }
      addMiniGhost(false, true);
    } else if (world.level === 3) {
      darknessEl.style.opacity = "0.45";
      darknessEl.style.setProperty("--light-radius", "240px");
      const midX = w * 0.5;
      const midY = (h + 80) * 0.52;
      world.obstacles.push(
        createMapEntity("obstacle-wall", "", midX - 12, 80, 24, Math.max(60, midY - 145)),
        createMapEntity("obstacle-wall", "", midX - 12, midY + 55, 24, Math.max(60, h - midY - 120)),
        createMapEntity("obstacle-wall", "", w * 0.22, midY - 10, Math.max(80, w * 0.22), 20),
        createMapEntity("obstacle-wall", "", midX + 50, midY - 10, Math.max(80, w * 0.22), 20),
      );
      world.lockedDoor = createMapEntity("locked-door", "🔒", w - 110, h / 2 - 40, 66, 82);
      world.keysRequired = 3;
      world.keysCollected = 0;
      for (let i = 0; i < 3; i++) {
        const spot = randomSpot();
        world.mapKeys.push(createMapEntity("powerup", "🗝️", spot.x, spot.y, 40, 40));
      }
      for (let i = 0; i < 3; i++) {
        const spot = randomSpot(false);
        world.hideSpots.push(createMapEntity("hide-spot", "🗄️", spot.x, spot.y, 56, 56));
      }
    } else if (world.level === 4) {
      world.noise = 0;
      const lanes = [h * 0.34, h * 0.56, h * 0.76];
      lanes.forEach((laneY, idx) => {
        const cart = createMapEntity("hospital-cart", "🛒", 120 + idx * 180, laneY, 56, 44);
        cart.vx = (idx % 2 === 0 ? 1 : -1) * (2.2 + idx * 0.35);
        world.carts.push(cart);
      });
    } else if (world.level === 5) {
      const trapIcons = ["🗡️", "🔥", "🚧", "🗡️", "🔥"];
      for (let i = 0; i < 5; i++) {
        const spot = randomSpot();
        const trap = createMapEntity("trap-tile", trapIcons[i], spot.x, spot.y, 54, 54);
        trap.phase = i * 45;
        trap.active = false;
        world.traps.push(trap);
      }
      const relicIcons = ["✝️", "🧄", "🧪"];
      for (let i = 0; i < 3; i++) {
        const spot = randomSpot();
        world.relics.push(createMapEntity("powerup", relicIcons[i], spot.x, spot.y, 42, 42));
      }
    } else if (world.level === 6) {
      const zoneW = Math.min(200, w * 0.25);
      const zoneH = Math.min(150, h * 0.28);
      world.mirrorZones.push(
        createMapEntity("mirror-zone", "🪞↔️", w * 0.22, h * 0.28, zoneW, zoneH),
        createMapEntity("mirror-zone", "🪞↔️", w * 0.58, h * 0.55, zoneW, zoneH),
      );
      world.mirrors.push(
        createMapEntity("boss-pillar", "🪞", w * 0.5 - 30, 95, 60, 68),
        createMapEntity("boss-pillar", "🪞", w * 0.5 - 30, h - 135, 60, 68),
      );
      const cloneEl = document.createElement("div");
      cloneEl.className = "actor glow";
      cloneEl.style.opacity = "0.45";
      cloneEl.style.filter = "hue-rotate(160deg) drop-shadow(0 0 8px #89ead4)";
      mapObjectsEl.appendChild(cloneEl);
      world.mirrorCloneEl = cloneEl;

      const mirrorGhostEl = document.createElement("div");
      mirrorGhostEl.className = "actor glow";
      mirrorGhostEl.style.opacity = "0.42";
      drawPixelMask(mirrorGhostEl, buildGhostMask(22, 20), { 1: "#c7f5ff", 2: "#75b8d8", 3: "#23354f", 4: "#89ead4" }, pixelUnit);
      mapObjectsEl.appendChild(mirrorGhostEl);
      world.mirrorGhostEl = mirrorGhostEl;
    } else if (world.level === 7) {
      world.crystalsRequired = 4;
      world.crystalsBroken = 0;
      for (let i = 0; i < 4; i++) {
        const spot = randomSpot();
        const crystal = createMapEntity("crystal-node", "💎", spot.x, spot.y, 50, 50);
        crystal.broken = false;
        world.crystals.push(crystal);
      }
      for (let i = 0; i < 3; i++) {
        const spot = randomSpot();
        const lava = createMapEntity("lava-zone", "🌋", spot.x, spot.y, 76, 76);
        lava.phase = i * 60;
        lava.active = true;
        world.lavaZones.push(lava);
      }
      for (let i = 0; i < 4; i++) {
        const spot = randomSpot();
        const tile = createMapEntity("crumbling-floor", "🟫", spot.x, spot.y, 64, 52);
        tile.stepTimer = 0;
        tile.collapsed = false;
        world.crumbleTiles.push(tile);
      }
    } else if (world.level === 8) {
      world.g.maxHp = 5;
      world.g.hp = 5;
      world.g.stunTimer = 0;
      world.g.chargeTimer = 170;
      world.g.charging = false;
      world.g.shootTimer = 110;
      const positions = [
        { x: w * 0.24, y: h * 0.3, icon: "🪦" },
        { x: w * 0.72, y: h * 0.3, icon: "✨" },
        { x: w * 0.24, y: h * 0.68, icon: "✨" },
        { x: w * 0.72, y: h * 0.68, icon: "🪦" },
      ];
      positions.forEach((pos) => {
        world.bossPillars.push(createMapEntity("boss-pillar", pos.icon, pos.x, pos.y, 60, 68));
      });
    }
  }

  function prepareLevel() {
    updateDimensions();
    clearObjects();
    world.completed = false;
    world.active = true;
    world.time = 0;
    world.levelScore = 0;
    world.combo = 0;
    world.comboTimer = 0;
    world.wasHit = false;
    world.invulnerable = 0;
    world.debuffTimer = 0;
    world.powerupTimer = 0;
    world.powerupSpawnTimer = 900;
    world.holyShieldTimer = 0;
    // Khởi tạo giới hạn 2 hoặc 3 lần hù cho mỗi Map
    world.jumpscareCount = 0;
    world.maxJumpscares = 2 + Math.floor(Math.random() * 2);
    world.jumpscareTimer = 750 + Math.random() * 450;
    world.p.x = Math.min(72, Math.max(16, world.width * 0.1));
    world.p.y = Math.max(100, Math.min(world.floorY - PLAYER_HEIGHT - 16, world.height * 0.45));
    world.p.vx = 0;
    world.p.vy = 0;
    world.p.speed = world.p.baseSpeed;
    world.p.dragged = false;
    world.p.hidden = false;
    world.p.sneaking = false;
    world.p.inverted = false;
    world.target = null;
    world.g.x = Math.max(160, world.width - 170);
    world.g.y = Math.max(105, Math.min(world.floorY - GHOST_HEIGHT - 16, world.height * 0.35));
    world.g.vx = 0;
    world.g.vy = 0;
    world.g.speed = config().ghostSpeed;
    world.g.freezeTimer = 0;
    world.g.frozen = false;
    world.g.freezeCount = 0;
    world.g.patrolAngle = 0;
    world.levelStartedAt = performance.now();

    gameEl.dataset.biome = String(config().biome);
    gameEl.style.setProperty("--biome-hue", config().hue);
    instructionsEl.textContent = config().instruction;
    playerEl.classList.remove("dragged", "boosted", "hidden-in-cover");
    playerEl.style.opacity = "1";
    playerNameDisplay.textContent = world.playerName;
    spookNameDisplay.textContent = world.level === 8 ? "👑 Vua Bí Ngô" : world.spookName;

    if (world.level === 8) {
      drawPixelMask(spookEl, buildGhostMask(22, 20, false, true), { 1: "#ff8c3b", 2: "#b84014", 3: "#2b1538", 4: "#ffd954" }, pixelUnit + 1);
    } else if (world.level === 5) {
      drawPixelMask(spookEl, buildGhostMask(22, 20), { 1: "#f0d8ea", 2: "#8a2be2", 3: "#30102c", 4: "#ff2e63" }, pixelUnit);
    } else {
      drawPixelMask(spookEl, buildGhostMask(22, 20), { 1: "#d6edff", 2: "#82bce8", 3: "#23354f", 4: "#ff70a9" }, pixelUnit);
    }

    setupMapFeatures();

    for (let i = 0; i < config().candies; i++) addCandy();
    for (let i = 0; i < config().webs; i++) addWeb();
    for (let i = 0; i < config().miniGhosts; i++) {
      addMiniGhost(world.level === 5);
    }
    render();
    updateHud();
  }

  function getSnapshot() {
    return {
      level: world.level,
      unlockedLevel: world.unlockedLevel,
      levelScore: world.levelScore,
      totalScore: world.totalScore,
      finalScore: world.totalScore,
      character: CHARACTERS.find((item) => item.id === world.selectedCharacter),
      completedLevels: world.completedLevels,
      perfectLevels: world.perfectLevels,
      candiesCollected: world.totalCandies,
      bestCombo: world.bestCombo,
      fastestLevelSeconds: Number.isFinite(world.elapsedFastestLevel) ? Math.round(world.elapsedFastestLevel) : 0,
      wasHit: world.wasHit,
    };
  }

  function finishLevel() {
    if (world.completed) return;
    world.completed = true;
    world.active = false;
    world.completedLevels++;
    if (world.level >= world.unlockedLevel && world.level < 8) {
      world.unlockedLevel = world.level + 1;
      saveUnlockedMap(world.unlockedLevel);
    }
    if (!world.wasHit) {
      world.perfectLevels++;
      world.p.baseSpeed = Math.min(2.8, world.p.baseSpeed * 1.015);
    }
    const elapsed = (performance.now() - world.levelStartedAt) / 1000;
    world.elapsedFastestLevel = Math.min(world.elapsedFastestLevel, elapsed);
    world.totalScore += world.levelScore;
    updateHud();
    const snapshot = getSnapshot();
    if (world.level === 8) onGameComplete(snapshot);
    else onLevelComplete(snapshot);
  }

  function dropCollectedCandy() {
    let lost = 0;
    for (const candy of world.candies) {
      if (candy.collected) lost += CANDY_POINTS;
      candy.collected = false;
      candy.element.style.opacity = "1";
      candy.element.style.visibility = "visible";
      const spot = randomSpot();
      candy.x = spot.x;
      candy.y = spot.y;
    }
    if (lost) score(-lost);
    world.combo = 0;
    world.comboTimer = 0;
    if (world.level !== 8) {
      world.portal?.element.remove();
      world.portal = null;
    }
    updateHud();
  }

  function collectCandy(candy) {
    candy.collected = true;
    candy.element.style.opacity = "0";
    candy.element.style.visibility = "hidden";
    world.totalCandies++;
    world.combo = world.comboTimer > 0 ? world.combo + 1 : 1;
    world.comboTimer = 180;
    world.bestCombo = Math.max(world.bestCombo, world.combo);
    const bonus = world.combo >= 3 && world.combo % 3 === 0 ? 50 : 0;
    score(CANDY_POINTS + bonus, candy.x + 18, candy.y + 18);
    onEffect("candy", { combo: world.combo, bonus, x: candy.x + 18, y: candy.y + 18 });
  }

  function damageBoss() {
    const ghost = world.g;
    ghost.hp = Math.max(0, ghost.hp - 1);
    ghost.stunTimer = 0;
    ghost.chargeTimer = 140;
    ghost.vx = (ghost.x - world.p.x) * 0.2;
    ghost.vy = (ghost.y - world.p.y) * 0.2;
    world.invulnerable = 65;
    score(300, ghost.x + 30, ghost.y);
    onEffect("boss-hit");
    onEffect("custom-popup", { text: `💥 ĐÁNH TRÚNG BOSS! (${ghost.hp}/${ghost.maxHp})`, x: ghost.x + 30, y: ghost.y });
    if (ghost.hp <= 0) {
      createPortal();
      onEffect("custom-popup", { text: "👑 VUA BÍ NGÔ ĐÃ GỤC! VÀO CỔNG!", x: world.width / 2, y: world.floorY - 140 });
    }
  }

  function hitByGhost(ghost, mainGhost) {
    if (world.level === 8 && mainGhost && ghost.stunTimer > 0) {
      damageBoss();
      return;
    }
    if (world.holyShieldTimer > 0) {
      ghost.vx = (ghost.x - world.p.x) * 0.22;
      ghost.vy = (ghost.y - world.p.y) * 0.22;
      score(100, ghost.x, ghost.y);
      onEffect("shatter");
      return;
    }
    if (world.invulnerable > 0) return;
    world.invulnerable = 85;
    world.wasHit = true;
    if (mainGhost && ghost.frozen) {
      ghost.frozen = false;
      ghost.freezeTimer = 0;
      ghost.x = Math.random() < 0.5 ? 20 : world.width - 100;
      ghost.y = 95 + Math.random() * Math.max(20, world.floorY - 220);
      score(200, ghost.x, ghost.y);
      onEffect("shatter");
      return;
    }
    score(-CANDY_POINTS);
    world.p.vx = (world.p.x - ghost.x) * 0.12;
    world.p.vy = (world.p.y - ghost.y) * 0.12;
    onEffect("hit");
  }

  function checkPortalUnlock() {
    if (world.portal) return;
    const allCandies = world.candies.length > 0 && world.candies.every((candy) => candy.collected);
    if (world.level === 3) {
      if (allCandies && world.keysCollected >= world.keysRequired) createPortal();
    } else if (world.level === 7) {
      if (allCandies && world.crystalsBroken >= world.crystalsRequired) createPortal();
    } else if (world.level === 8) {
      if (world.g.hp <= 0) createPortal();
    } else if (allCandies) {
      createPortal();
    }
  }

  function updatePlayer(dt) {
    const player = world.p;
    player.inverted = world.level === 6 && world.mirrorZones.some((zone) => rectOverlaps(player, zone));

    const effectiveSpeed = player.sneaking ? player.speed * 0.55 : player.speed;
    const prevX = player.x;
    const prevY = player.y;

    if (player.dragged) {
      player.vx = 0;
      player.vy = 0;
    } else {
      if (world.target) {
        const dx = world.target.x - player.x;
        const dy = world.target.y - player.y;
        const distance = Math.hypot(dx, dy);
        if (distance < effectiveSpeed * dt + 2) {
          player.x = world.target.x;
          player.y = world.target.y;
          world.target = null;
          player.vx *= 0.2;
          player.vy *= 0.2;
        } else {
          const dir = player.inverted ? -1 : 1;
          player.vx += (((dx / distance) * effectiveSpeed * dir) - player.vx) * 0.2;
          player.vy += ((dy / distance) * effectiveSpeed - player.vy) * 0.2;
        }
      } else {
        const dir = player.inverted ? -1 : 1;
        const moveX = (world.keys.right - world.keys.left) * dir;
        const moveY = world.keys.down - world.keys.up;
        player.vx += (moveX * effectiveSpeed - player.vx) * 0.2;
        player.vy += (moveY * effectiveSpeed - player.vy) * 0.2;
      }
      player.x += player.vx * dt;
      player.y += player.vy * dt;
    }

    player.x = clamp(player.x, 8, Math.max(8, world.width - PLAYER_WIDTH - 8));
    player.y = clamp(player.y, 72, Math.max(72, world.floorY - PLAYER_HEIGHT - 8));

    const solidBlocks = [...world.obstacles];
    if (world.lockedDoor) solidBlocks.push(world.lockedDoor);
    for (const block of solidBlocks) {
      if (rectOverlaps(player, block)) {
        player.x = prevX;
        player.y = prevY;
        player.vx = 0;
        player.vy = 0;
        world.target = null;
        break;
      }
    }

    player.hidden = world.hideSpots.some((spot) => collides(player, spot, 42));
    playerEl.classList.toggle("hidden-in-cover", player.hidden);

    if (Math.abs(player.vx) > 0.15 || Math.abs(player.vy) > 0.15) {
      world.currentAngle = Math.atan2(player.vy, player.vx);
    }
  }

  function updateGhosts(dt) {
    const player = world.p;
    const ghost = world.g;
    const facingRight = Math.cos(world.currentAngle) > -0.1;
    const lookingAtGhost = facingRight ? ghost.x >= player.x : ghost.x <= player.x;
    const distToPlayer = Math.hypot(player.x - ghost.x, player.y - ghost.y) || 1;

    if (world.level === 8) {
      ghost.shy = false;
      ghost.frozen = false;
      if (ghost.stunTimer > 0) {
        ghost.stunTimer -= dt;
        ghost.vx *= 0.85;
        ghost.vy *= 0.85;
      } else if (ghost.charging) {
        ghost.x += ghost.chargeVx * dt;
        ghost.y += ghost.chargeVy * dt;
        for (const pillar of world.bossPillars) {
          if (collides(ghost, pillar, 58)) {
            ghost.charging = false;
            ghost.stunTimer = 190;
            ghost.vx = 0;
            ghost.vy = 0;
            onEffect("boss-stun");
            onEffect("custom-popup", { text: "💫 BOSS CHOÁNG! TẤN CÔNG NGAY!", x: ghost.x + 30, y: ghost.y });
            break;
          }
        }
        if (
          ghost.x <= 12 || ghost.x >= world.width - GHOST_WIDTH - 12 ||
          ghost.y <= 78 || ghost.y >= world.floorY - GHOST_HEIGHT - 12
        ) {
          ghost.charging = false;
          ghost.chargeTimer = 150;
        }
      } else {
        const dx = player.x - ghost.x;
        const dy = player.y - ghost.y;
        ghost.vx += ((dx / distToPlayer) * (ghost.speed * 0.78) - ghost.vx) * 0.08;
        ghost.vy += ((dy / distToPlayer) * (ghost.speed * 0.78) - ghost.vy) * 0.08;
        ghost.x += ghost.vx * dt;
        ghost.y += ghost.vy * dt;

        ghost.chargeTimer -= dt;
        if (ghost.chargeTimer <= 0) {
          ghost.charging = true;
          const angle = Math.atan2(player.y - ghost.y, player.x - ghost.x);
          ghost.chargeVx = Math.cos(angle) * 4.6;
          ghost.chargeVy = Math.sin(angle) * 4.6;
          onEffect("custom-popup", { text: "💢 VUA BÍ NGÔ LAO HÚC!", x: ghost.x + 30, y: ghost.y });
        }

        ghost.shootTimer -= dt;
        if (ghost.shootTimer <= 0) {
          ghost.shootTimer = 135;
          const angle = Math.atan2(player.y - ghost.y, player.x - ghost.x);
          const proj = createMapEntity("boss-projectile", "🎃", ghost.x + 24, ghost.y + 24, 36, 36);
          proj.vx = Math.cos(angle) * 3.1;
          proj.vy = Math.sin(angle) * 3.1;
          proj.life = 190;
          world.bossProjectiles.push(proj);
        }
      }
      ghost.x = clamp(ghost.x, 8, world.width - GHOST_WIDTH - 8);
      ghost.y = clamp(ghost.y, 76, world.floorY - GHOST_HEIGHT - 8);
    } else {
      ghost.shy = !player.hidden && lookingAtGhost && Math.abs(ghost.y - player.y) < 145 && distToPlayer < 440;
      if (ghost.shy && !ghost.frozen) ghost.freezeTimer += dt;
      else if (!ghost.frozen) ghost.freezeTimer = Math.max(0, ghost.freezeTimer - dt * 1.4);

      if (ghost.freezeTimer >= FREEZE_CHARGE && !ghost.frozen) {
        ghost.frozen = true;
        ghost.freezeCount++;
        const resistPenalty = world.level === 3 ? Math.min(95, (ghost.freezeCount - 1) * 28) : 0;
        ghost.freezeTimer = Math.max(30, FREEZE_TIME - resistPenalty);
        onEffect("freeze");
      }
      if (ghost.frozen) ghost.freezeTimer -= dt;
      if (ghost.frozen && ghost.freezeTimer <= 0) {
        ghost.frozen = false;
        ghost.freezeTimer = 0;
        onEffect("unfreeze");
      }

      const isPatrolling =
        player.hidden ||
        (world.level === 1 && distToPlayer > 260) ||
        (world.level === 4 && world.noise < 45 && distToPlayer > 210);

      let targetX = player.x;
      let targetY = player.y;
      let speedMult = 1;

      if (isPatrolling) {
        ghost.patrolAngle += 0.015 * dt;
        targetX = world.width * 0.5 + Math.cos(ghost.patrolAngle) * (world.width * 0.32);
        targetY = world.floorY * 0.5 + Math.sin(ghost.patrolAngle * 1.5) * (world.floorY * 0.25);
        speedMult = 0.72;
      } else if (world.level === 4 && world.noise >= 60) {
        speedMult = 1.45;
      }

      const dx = targetX - ghost.x;
      const dy = targetY - ghost.y;
      const distance = Math.hypot(dx, dy) || 1;
      const targetSpeed = (ghost.shy && !ghost.frozen) || ghost.frozen ? 0 : ghost.speed * speedMult;
      ghost.vx += ((dx / distance) * targetSpeed - ghost.vx) * 0.08;
      ghost.vy += ((dy / distance) * targetSpeed - ghost.vy) * 0.08;
      ghost.x = clamp(ghost.x + ghost.vx * dt, 0, world.width - GHOST_WIDTH);
      ghost.y = clamp(ghost.y + ghost.vy * dt, 76, world.floorY - GHOST_HEIGHT);
    }

    world.miniGhosts.forEach((mini) => {
      mini.orbit += 0.02 * dt;
      const orbitRadius = 85 + Math.sin(mini.orbit * 0.5) * 18;
      let targetX = ghost.x + Math.cos(mini.orbit) * orbitRadius;
      let targetY = ghost.y + Math.sin(mini.orbit) * orbitRadius;

      if (mini.isShadow) {
        const darkActive = world.battery <= 25;
        mini.element.style.opacity = darkActive ? "1" : "0.18";
        if (darkActive && !player.hidden) {
          targetX = player.x;
          targetY = player.y;
        }
      }
      if (mini.isBat && !player.hidden) {
        targetX = player.x + Math.cos(mini.orbit * 1.4) * 55;
        targetY = player.y + Math.sin(mini.orbit * 1.4) * 55;
      }

      const mx = targetX - mini.x;
      const my = targetY - mini.y;
      const md = Math.hypot(mx, my) || 1;
      const canFreezeMini = !mini.isBat && ghost.shy && !ghost.frozen;
      const speed = canFreezeMini ? 0 : mini.speed * (mini.isShadow && world.battery <= 25 ? 1.45 : 1);
      mini.vx += ((mx / md) * speed - mini.vx) * 0.1;
      mini.vy += ((my / md) * speed - mini.vy) * 0.1;
      mini.x = clamp(mini.x + mini.vx * dt, 0, world.width - 56);
      mini.y = clamp(mini.y + mini.vy * dt, 76, world.floorY - 56);
    });
  }

  function updateMapMechanics(dt) {
    const player = world.p;

    // Periodic surprise Jump Scare per map (tối đa 2-3 lần/map)
    if (world.jumpscareCount < world.maxJumpscares) {
      const scareSpeedMultiplier =
        (world.level === 2 && world.battery < 30) ||
          (world.level === 4 && world.noise > 65) ||
          (world.level === 6 && player.inverted)
          ? 1.35
          : 1;
      world.jumpscareTimer -= dt * scareSpeedMultiplier;
      if (world.jumpscareTimer <= 0) {
        triggerJumpScare();
      }
    }

    // Map 2: Flashlight battery drain & recharge
    if (world.level === 2) {
      world.battery = Math.max(0, world.battery - dt * 0.085);
      const radius = Math.max(68, 70 + (world.battery / 100) * 145);
      darknessEl.style.setProperty("--light-x", `${Math.round(player.x + PLAYER_WIDTH / 2)}px`);
      darknessEl.style.setProperty("--light-y", `${Math.round(player.y + PLAYER_HEIGHT / 2)}px`);
      darknessEl.style.setProperty("--light-radius", `${Math.round(radius)}px`);

      for (const bat of world.batteries) {
        if (collides(player, bat, 44)) {
          world.battery = Math.min(100, world.battery + 48);
          const spot = randomSpot();
          bat.x = spot.x;
          bat.y = spot.y;
          position(bat.element, bat.x, bat.y);
          onEffect("battery");
          onEffect("custom-popup", { text: "+48% PIN 🔋", x: player.x, y: player.y });
        }
      }
    }

    // Map 3: Dim corridor light & Keys collection
    if (world.level === 3) {
      darknessEl.style.setProperty("--light-x", `${Math.round(player.x + PLAYER_WIDTH / 2)}px`);
      darknessEl.style.setProperty("--light-y", `${Math.round(player.y + PLAYER_HEIGHT / 2)}px`);
      for (let i = world.mapKeys.length - 1; i >= 0; i--) {
        const keyItem = world.mapKeys[i];
        if (collides(player, keyItem, 44)) {
          keyItem.element.remove();
          world.mapKeys.splice(i, 1);
          world.keysCollected++;
          score(150, keyItem.x, keyItem.y);
          onEffect("key");
          onEffect("custom-popup", { text: `🗝️ CHÌA KHÓA ${world.keysCollected}/${world.keysRequired}`, x: keyItem.x, y: keyItem.y });
        }
      }
    }

    // Map 4: Noise level & Hospital carts
    if (world.level === 4) {
      const movingSpeed = Math.hypot(player.vx, player.vy);
      if (movingSpeed > 1.35 && !player.sneaking && !player.dragged) {
        world.noise = Math.min(100, world.noise + dt * 0.42);
      } else {
        world.noise = Math.max(0, world.noise - dt * 0.55);
      }
      for (const cart of world.carts) {
        cart.x += cart.vx * dt;
        if (cart.x <= 24 || cart.x >= world.width - 80) cart.vx *= -1;
        position(cart.element, cart.x, cart.y);
        if (collides(player, cart, 48) && world.invulnerable <= 0) {
          world.noise = 100;
          world.invulnerable = 55;
          player.vy = -3;
          score(-50, player.x, player.y);
          onEffect("hit");
          onEffect("custom-popup", { text: "🔊 RẦM! TIẾNG ĐỘNG LỚN!", x: player.x, y: player.y });
        }
      }
    }

    // Map 5: Cyclic Traps & Holy Relics
    if (world.level === 5) {
      if (world.holyShieldTimer > 0) world.holyShieldTimer -= dt;
      for (const trap of world.traps) {
        const cycle = Math.floor((world.time + trap.phase) / 110) % 2 === 0;
        trap.active = cycle;
        trap.element.classList.toggle("active-trap", cycle);
        trap.element.classList.toggle("inactive-trap", !cycle);
        if (cycle && collides(player, trap, 42) && world.invulnerable <= 0 && world.holyShieldTimer <= 0) {
          world.invulnerable = 70;
          score(-CANDY_POINTS);
          onEffect("hit");
        }
      }
      for (const relic of world.relics) {
        if (collides(player, relic, 44)) {
          world.holyShieldTimer = 260;
          const spot = randomSpot();
          relic.x = spot.x;
          relic.y = spot.y;
          position(relic.element, relic.x, relic.y);
          score(120, player.x, player.y);
          onEffect("powerup-collected");
          onEffect("custom-popup", { text: "✝️ THÁNH QUANG HỘ THỂ!", x: player.x, y: player.y });
        }
      }
    }

    // Map 6: Mirror World reflection & hidden portal visibility
    if (world.level === 6) {
      if (world.mirrorCloneEl) {
        const cloneX = world.width - player.x - PLAYER_WIDTH;
        position(world.mirrorCloneEl, cloneX, player.y);
      }
      if (world.mirrorGhostEl) {
        const mirrorGX = world.width - world.g.x - GHOST_WIDTH;
        const mirrorGY = world.floorY - world.g.y + 60;
        position(world.mirrorGhostEl, mirrorGX, clamp(mirrorGY, 80, world.floorY - 90));
      }
      if (world.portal) {
        const nearMirror = world.mirrors.some((m) => collides(player, m, 110));
        world.portal.element.style.opacity = nearMirror ? "1" : "0.14";
      }
    }

    // Map 7: Lava eruptions, Crumbling floor & Crystals
    if (world.level === 7) {
      for (const lava of world.lavaZones) {
        const erupting = Math.floor((world.time + lava.phase) / 130) % 2 === 0;
        lava.active = erupting;
        lava.element.style.opacity = erupting ? "0.95" : "0.28";
        lava.element.style.transform = `translate3d(${Math.round(lava.x)}px, ${Math.round(lava.y)}px, 0) scale(${erupting ? 1.08 : 0.82})`;
        if (erupting && collides(player, lava, 48) && world.invulnerable <= 0) {
          world.invulnerable = 70;
          score(-CANDY_POINTS);
          onEffect("hit");
        }
      }
      for (const tile of world.crumbleTiles) {
        if (!tile.collapsed && collides(player, tile, 42)) {
          tile.stepTimer += dt;
          if (tile.stepTimer > 28) {
            tile.collapsed = true;
            tile.stepTimer = 180;
            tile.element.classList.add("collapsed");
            tile.element.textContent = "🕳️";
          }
        } else if (tile.collapsed) {
          tile.stepTimer -= dt;
          if (collides(player, tile, 36) && world.invulnerable <= 0) {
            world.invulnerable = 70;
            score(-CANDY_POINTS);
            onEffect("hit");
          }
          if (tile.stepTimer <= 0) {
            tile.collapsed = false;
            tile.element.classList.remove("collapsed");
            tile.element.textContent = "🟫";
          }
        }
      }
      for (const crystal of world.crystals) {
        if (!crystal.broken && collides(player, crystal, 46)) {
          crystal.broken = true;
          crystal.element.style.opacity = "0.22";
          crystal.element.textContent = "✨";
          world.crystalsBroken++;
          score(150, crystal.x, crystal.y);
          onEffect("crystal");
          onEffect("custom-popup", { text: `💎 PHÁ TINH THỂ ${world.crystalsBroken}/${world.crystalsRequired}`, x: crystal.x, y: crystal.y });
        }
      }
    }

    // Map 8: Boss Projectiles
    if (world.level === 8) {
      for (let i = world.bossProjectiles.length - 1; i >= 0; i--) {
        const proj = world.bossProjectiles[i];
        proj.x += proj.vx * dt;
        proj.y += proj.vy * dt;
        proj.life -= dt;
        position(proj.element, proj.x, proj.y);
        if (collides(player, proj, 36) && world.invulnerable <= 0) {
          world.invulnerable = 70;
          score(-CANDY_POINTS);
          onEffect("hit");
          proj.life = 0;
        }
        if (proj.life <= 0) {
          proj.element.remove();
          world.bossProjectiles.splice(i, 1);
        }
      }
    }
  }

  function updateItems(dt) {
    if (world.comboTimer > 0) {
      world.comboTimer -= dt;
      if (world.comboTimer <= 0) world.combo = 0;
    }
    if (world.invulnerable > 0) world.invulnerable -= dt;
    if (world.debuffTimer > 0) {
      world.debuffTimer -= dt;
      if (world.debuffTimer <= 0) world.p.speed = world.p.baseSpeed;
    }
    if (world.powerupTimer > 0) {
      world.powerupTimer -= dt;
      if (world.powerupTimer <= 0) {
        world.powerupType = null;
        world.p.speed = world.p.baseSpeed;
        playerEl.classList.remove("boosted");
      }
    }
    world.powerupSpawnTimer -= dt;
    if (world.powerupSpawnTimer <= 0) {
      spawnPowerup();
      world.powerupSpawnTimer = 1050 + Math.random() * 450;
    }

    for (const candy of world.candies) {
      if (world.powerupType === "magnet" && !candy.collected) {
        const dx = world.p.x - candy.x;
        const dy = world.p.y - candy.y;
        const distance = Math.hypot(dx, dy);
        if (distance < 180 && distance > 1) {
          candy.x += (dx / distance) * 1.8 * dt;
          candy.y += (dy / distance) * 1.8 * dt;
        }
      }
      if (!candy.collected && !world.p.dragged && collides(world.p, candy, 47)) collectCandy(candy);
    }
    checkPortalUnlock();

    if (world.powerup && collides(world.p, world.powerup, 48)) {
      const type = world.powerup.type;
      world.powerup.element.remove();
      world.powerup = null;
      world.powerupType = type;
      world.powerupTimer = POWERUP_TIME;
      if (type === "speed") {
        world.p.speed = world.p.baseSpeed * 1.45;
        playerEl.classList.add("boosted");
      } else if (type === "repel") {
        world.holyShieldTimer = Math.max(world.holyShieldTimer, 220);
      }
      onEffect("powerup-collected", { type });
    }

    for (let index = world.webs.length - 1; index >= 0; index--) {
      const web = world.webs[index];
      if (collides(world.p, web, 48)) {
        web.element.remove();
        world.webs.splice(index, 1);
        world.p.speed = world.p.baseSpeed * 0.58;
        world.debuffTimer = DEBUFF_TIME;
        if (world.level === 4) world.noise = Math.min(100, world.noise + 45);
        dropCollectedCandy();
        onEffect("web");
        break;
      }
    }
  }

  function updateCollisions() {
    const ghosts = [{ actor: world.g, main: true }, ...world.miniGhosts.map((actor) => ({ actor, main: false }))];
    for (const { actor, main } of ghosts) {
      if (!world.p.dragged && collides(world.p, actor, main ? 65 : 50) && (!actor.frozen || main)) {
        hitByGhost(actor, main);
      }
      if (!actor.frozen && world.level !== 8) {
        const stolenCandy = world.candies.find((candy) => !candy.collected && collides(actor, candy, 37));
        if (stolenCandy) {
          score(-CANDY_POINTS);
          const spot = randomSpot();
          stolenCandy.x = spot.x;
          stolenCandy.y = spot.y;
          onEffect("candy-stolen");
        }
      }
    }
    if (world.portal && !world.p.dragged && collides(world.p, world.portal, 72)) finishLevel();
  }

  function render() {
    const player = world.p;
    const bob = player.dragged ? 0 : Math.sin(world.time * 0.08) * 0.65;
    const facingRight = Math.cos(world.currentAngle) > -0.1;
    const bobStep = Math.round(bob);
    const maskKey = `${world.selectedCharacter}:${facingRight}:${bobStep}`;
    let playerMask = playerMaskCache.get(maskKey);
    if (!playerMask) {
      playerMask = buildPlayerMask(world.selectedCharacter, facingRight, bobStep);
      playerMaskCache.set(maskKey, playerMask);
    }
    drawPixelMask(playerEl, playerMask, playerPalette(), pixelUnit);
    if (world.mirrorCloneEl) {
      drawPixelMask(world.mirrorCloneEl, playerMask, playerPalette(), pixelUnit);
    }
    playerEl.style.transform = `translate3d(${Math.round(player.x)}px, ${Math.round(player.y)}px, 0) scale(${player.dragged ? 1.08 : 1})`;
    if (!player.hidden) {
      playerEl.style.opacity = world.invulnerable > 0 && Math.floor(world.time / 7) % 2 ? "0.55" : "1";
    }
    const lift = player.dragged ? Math.max(0, world.floorY - player.y - 115) : 0;
    playerShadowEl.style.visibility = player.dragged ? "visible" : "hidden";
    playerShadowEl.style.opacity = player.dragged ? String(Math.max(0, 0.38 - lift / world.height * 0.6)) : "0";
    playerShadowEl.style.transform = `translate3d(${player.x + 22}px, ${player.y + 58 + lift * 0.08}px, 0) scale(${1 + lift / Math.max(1, world.height)})`;
    playerNameDisplay.style.left = `${player.x + PLAYER_WIDTH / 2}px`;
    playerNameDisplay.style.top = `${player.y}px`;
    spookNameDisplay.style.left = `${world.g.x + GHOST_WIDTH / 2}px`;
    spookNameDisplay.style.top = `${world.g.y}px`;
    spookEl.style.transform = `translate3d(${Math.round(world.g.x)}px, ${Math.round(world.g.y)}px, 0) scale(${world.level === 8 ? 1.25 : 1})`;
    spookEl.style.opacity = world.g.shy ? "0.68" : "1";
    if (world.level === 8 && world.g.stunTimer > 0) {
      spookEl.style.filter = "hue-rotate(90deg) brightness(1.5) drop-shadow(0 0 14px #ffe39a)";
    } else {
      spookEl.style.filter = world.g.frozen ? "hue-rotate(170deg) brightness(1.4)" : world.g.shy ? "drop-shadow(0 0 7px #88cfff)" : "drop-shadow(0 0 10px #ff9fbd)";
    }
    world.miniGhosts.forEach((mini) => {
      mini.element.style.transform = `translate3d(${Math.round(mini.x)}px, ${Math.round(mini.y)}px, 0)`;
      if (!mini.isShadow) {
        mini.element.style.opacity = world.g.shy && !mini.isBat ? "0.7" : "1";
      }
    });
    world.candies.forEach((candy) => {
      if (!candy.collected) position(candy.element, candy.x, candy.y + Math.sin(world.time * 0.07 + candy.bob) * 6);
    });
    world.webs.forEach((web) => position(web.element, web.x, web.y + Math.sin(world.time * 0.07 + web.bob) * 5));
    if (world.powerup) position(world.powerup.element, world.powerup.x, world.powerup.y + Math.sin(world.time * 0.1 + world.powerup.bob) * 7);
    if (world.portal) position(world.portal.element, world.portal.x, world.portal.y + Math.sin(world.time * 0.07 + world.portal.bob) * 5);
  }

  function tick(dt) {
    if (!world.active || world.completed) return;
    world.time += dt;
    updatePlayer(dt);
    updateGhosts(dt);
    updateMapMechanics(dt);
    updateItems(dt);
    updateCollisions();
    render();
    updateHud();
  }

  function setCharacter(id) {
    if (!CHARACTERS.some((character) => character.id === id)) return;
    world.selectedCharacter = id;
    render();
  }

  function setNames(playerName, spookName) {
    world.playerName = playerName || "Bạn";
    world.spookName = spookName || "Ghost";
    playerNameDisplay.textContent = world.playerName;
    spookNameDisplay.textContent = world.level === 8 ? "👑 Vua Bí Ngô" : world.spookName;
  }

  function startRun(characterId = world.selectedCharacter, mapNumber = 1) {
    setCharacter(characterId);
    const allowedMap = Math.max(1, Math.min(world.unlockedLevel, mapNumber));
    world.level = allowedMap;
    world.levelScore = 0;
    if (allowedMap === 1) {
      world.totalScore = 0;
      world.completedLevels = 0;
      world.perfectLevels = 0;
      world.totalCandies = 0;
      world.bestCombo = 0;
      world.elapsedFastestLevel = Infinity;
    }
    world.p.baseSpeed = 2.2;
    world.p.speed = 2.2;
    prepareLevel();
    return config();
  }

  function restartLevel() {
    prepareLevel();
    return config();
  }

  function nextLevel() {
    if (world.level >= 8) return null;
    if (world.level + 1 > world.unlockedLevel) {
      world.unlockedLevel = world.level + 1;
      saveUnlockedMap(world.unlockedLevel);
    }
    world.level++;
    prepareLevel();
    return config();
  }

  function stop() {
    world.active = false;
    world.p.dragged = false;
    world.keys = { left: 0, right: 0, up: 0, down: 0 };
    playerEl.classList.remove("dragged");
  }

  function setKeys(keys) {
    world.keys = { ...world.keys, ...keys };
    if (keys.left || keys.right || keys.up || keys.down) world.target = null;
  }

  function setSneak(sneaking) {
    world.p.sneaking = Boolean(sneaking);
    updateHud();
  }

  function toggleSneak() {
    world.p.sneaking = !world.p.sneaking;
    updateHud();
    return world.p.sneaking;
  }

  function moveTo(x, y) {
    world.target = {
      x: clamp(x - PLAYER_WIDTH / 2, 8, Math.max(8, world.width - PLAYER_WIDTH - 8)),
      y: clamp(y - PLAYER_HEIGHT / 2, 72, Math.max(72, world.floorY - PLAYER_HEIGHT - 8)),
    };
    world.keys = { left: 0, right: 0, up: 0, down: 0 };
  }

  function beginDrag(x, y) {
    world.p.dragged = true;
    world.p.dragOffsetX = x - world.p.x;
    world.p.dragOffsetY = y - world.p.y;
    world.target = null;
    playerEl.classList.add("dragged");
  }

  function dragTo(x, y) {
    if (!world.p.dragged) return;
    const nextX = x - world.p.dragOffsetX;
    const nextY = y - world.p.dragOffsetY;
    const testRect = { x: nextX, y: nextY, width: PLAYER_WIDTH, height: PLAYER_HEIGHT };
    const hitsWall = world.obstacles.some((obs) => rectOverlaps(testRect, obs)) ||
      (world.lockedDoor && rectOverlaps(testRect, world.lockedDoor));
    if (!hitsWall) {
      world.p.x = nextX;
      world.p.y = nextY;
    }
  }

  function endDrag() {
    world.p.dragged = false;
    playerEl.classList.remove("dragged");
  }

  function updateSize() {
    updateDimensions();
    if (world.active) render();
  }

  function achievements() {
    return [
      { title: "Map đã mở khóa", value: `${world.unlockedLevel}/8` },
      { title: "Map đã hoàn thành trong lượt", value: `${world.completedLevels}/8` },
      { title: "Map không bị ma chạm", value: String(world.perfectLevels) },
      { title: "Kẹo đã thu thập", value: String(world.totalCandies) },
      { title: "Combo kẹo tốt nhất", value: `${world.bestCombo} viên` },
      { title: "Map nhanh nhất", value: world.elapsedFastestLevel < Infinity ? `${Math.round(world.elapsedFastestLevel)} giây` : "Chưa có" },
    ];
  }

  return {
    tick,
    setCharacter,
    setNames,
    startRun,
    restartLevel,
    nextLevel,
    stop,
    setKeys,
    setSneak,
    toggleSneak,
    moveTo,
    beginDrag,
    dragTo,
    endDrag,
    updateSize,
    config,
    snapshot: getSnapshot,
    achievements,
    get level() { return world.level; },
    get unlockedLevel() { return world.unlockedLevel; },
    get playerPosition() { return { x: world.p.x, y: world.p.y }; },
  };
}