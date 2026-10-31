import { CHARACTERS, LEVELS, paintCharacterPreview } from "./gameplay.js";

const STORAGE_KEYS = {
  playerName: "playerName",
  spookName: "spookName",
  character: "halloweenCharacter",
  muted: "halloweenMuted",
};

function readStorage(key, fallback = "") {
  try {
    return localStorage.getItem(key) ?? fallback;
  } catch (error) {
    console.warn(`Không thể đọc cài đặt ${key} từ localStorage.`, error);
    return fallback;
  }
}

function writeStorage(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.warn(`Không thể lưu cài đặt ${key} vào localStorage.`, error);
  }
}

export function createUI(callbacks = {}) {
  const modals = [...document.querySelectorAll(".modal-overlay")];
  const byId = (id) => document.getElementById(id);
  const selectedCharacter = { id: readStorage(STORAGE_KEYS.character, "ghost-kid") };
  let selectedMap = 1;
  let currentUnlockedMap = 1;
  let returnModal = "intro-modal";
  let helpReturnModal = "intro-modal";
  let achievementsReturnModal = "victory-modal";
  let soundMuted = readStorage(STORAGE_KEYS.muted, "false") === "true";
  let displayed = {};
  let collectEffectId = 0;

  function showModal(id = null) {
    for (const modal of modals) {
      modal.classList.toggle("visible", modal.id === id);
    }
  }

  function renderCharacterSelection() {
    const list = byId("character-list");
    list.replaceChildren();
    CHARACTERS.forEach((character) => {
      const option = document.createElement("button");
      option.className = "character-option";
      option.type = "button";
      option.setAttribute("aria-pressed", String(character.id === selectedCharacter.id));
      const sprite = document.createElement("span");
      sprite.className = "character-sprite";
      sprite.setAttribute("aria-hidden", "true");
      const pixelArt = document.createElement("span");
      pixelArt.className = "pixel-art";
      sprite.append(pixelArt);
      paintCharacterPreview(pixelArt, character.id);
      const name = document.createElement("b");
      name.textContent = character.name;
      const tagline = document.createElement("small");
      tagline.textContent = character.tagline;
      option.append(sprite, name, tagline);
      option.addEventListener("click", () => {
        selectedCharacter.id = character.id;
        list.querySelectorAll(".character-option").forEach((item) => {
          item.setAttribute("aria-pressed", String(item === option));
        });
        paintCharacterPreview(byId("character-preview-art"), character.id);
        byId("character-name").textContent = character.name;
        byId("character-description").textContent = character.description;
        byId("selected-label").textContent = `✓ ĐÃ CHỌN · ${character.name}`;
      });
      list.append(option);
    });
    const current = CHARACTERS.find((item) => item.id === selectedCharacter.id) || CHARACTERS[0];
    selectedCharacter.id = current.id;
    paintCharacterPreview(byId("character-preview-art"), current.id);
    byId("character-name").textContent = current.name;
    byId("character-description").textContent = current.description;
    byId("selected-label").textContent = `✓ ĐÃ CHỌN · ${current.name}`;
  }

  function renderMapSelection(unlockedLevel = 1, activeLevel = 1) {
    currentUnlockedMap = unlockedLevel;
    selectedMap = Math.min(unlockedLevel, Math.max(1, activeLevel));
    const list = byId("map-list");
    list.replaceChildren();

    LEVELS.forEach((mapConfig) => {
      const isUnlocked = mapConfig.level <= unlockedLevel;
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `map-option ${isUnlocked ? "" : "locked"}`;
      btn.disabled = !isUnlocked;
      btn.setAttribute("aria-pressed", String(mapConfig.level === selectedMap));

      const header = document.createElement("div");
      header.className = "map-option-header";

      const title = document.createElement("span");
      title.className = "map-option-title";
      title.textContent = mapConfig.title;

      const badge = document.createElement("span");
      badge.className = "map-badge";
      if (!isUnlocked) {
        badge.textContent = `🔒 Cần qua Map ${mapConfig.level - 1}`;
      } else if (mapConfig.level < unlockedLevel) {
        badge.textContent = "⭐ Đã vượt qua";
      } else {
        badge.textContent = "🔓 Đã mở khóa";
      }

      header.append(title, badge);

      const desc = document.createElement("p");
      desc.textContent = mapConfig.themeNote;

      btn.append(header, desc);

      if (isUnlocked) {
        btn.addEventListener("click", () => {
          selectedMap = mapConfig.level;
          list.querySelectorAll(".map-option").forEach((item) => {
            item.setAttribute("aria-pressed", String(item === btn));
          });
        });
      }
      list.append(btn);
    });
  }

  function showCharacterSelection() {
    renderCharacterSelection();
    showModal("character-modal");
  }

  function showMapSelection(unlockedLevel = currentUnlockedMap, activeLevel = selectedMap) {
    renderMapSelection(unlockedLevel, activeLevel);
    showModal("map-select-modal");
  }

  function showIntro() {
    showModal("intro-modal");
    byId("pause-banner").style.opacity = "0";
  }

  function showLevelIntro(config) {
    displayed = {};
    byId("level-kicker").textContent = config.level === 8 ? "TRẬN CHIẾN CUỐI CÙNG · BOSS HALLOWEEN" : `BẢN ĐỒ ${config.level} / 8 · PHIÊU LƯU HALLOWEEN`;
    byId("level-number").innerHTML = `MAP 0${config.level} <span>/ 08</span>`;
    byId("level-intro-title").textContent = config.title;
    byId("level-description").textContent = config.themeNote;
    const previewContainer = byId("level-preview-icons");
    if (previewContainer && config.icons) {
      previewContainer.replaceChildren();
      config.icons.forEach((icon) => {
        const span = document.createElement("span");
        span.textContent = icon;
        previewContainer.appendChild(span);
      });
    }
    showModal("level-intro-modal");
  }

  function showGameplay() {
    showModal(null);
    byId("pause-banner").style.opacity = "0";
  }

  function showPause() {
    showModal("pause-modal");
    byId("pause-banner").style.opacity = "1";
    byId("pause-banner").style.transform = "translate(-50%, -50%) scale(1)";
  }

  function showSettings(fromModal) {
    returnModal = fromModal;
    byId("player-name-input").value = readStorage(STORAGE_KEYS.playerName, "Bạn");
    byId("spook-name-input").value = readStorage(STORAGE_KEYS.spookName, "Ghost");
    showModal("settings-modal");
    byId("player-name-input").focus({ preventScroll: true });
  }

  function showLevelComplete(data) {
    const nextMapName = LEVELS[data.level]?.title || `Map ${data.level + 1}`;
    byId("complete-subtitle").textContent = `Bạn đã vượt qua Map ${data.level} và mở khóa ${nextMapName}! Combo tốt nhất: ${data.bestCombo} viên.`;
    byId("complete-level-score").textContent = String(data.levelScore);
    byId("complete-total-score").textContent = String(data.totalScore);
    showModal("level-complete-modal");
  }

  function showVictory(data) {
    const character = data.character || CHARACTERS[0];
    byId("victory-avatar").replaceChildren();
    const pixelArt = document.createElement("span");
    pixelArt.className = "pixel-art";
    byId("victory-avatar").append(pixelArt);
    paintCharacterPreview(pixelArt, character.id);
    byId("victory-avatar").setAttribute("aria-label", character.name);
    byId("win-score-display").textContent = String(data.finalScore);
    showModal("victory-modal");
  }

  function showAchievements(entries, returnTo) {
    achievementsReturnModal = returnTo;
    const list = byId("achievement-list");
    list.replaceChildren();
    entries.forEach((entry) => {
      const row = document.createElement("div");
      row.className = "achievement-item";
      const label = document.createElement("span");
      label.textContent = entry.title;
      const value = document.createElement("b");
      value.textContent = entry.value;
      row.append(label, value);
      list.append(row);
    });
    showModal("achievements-modal");
  }

  function showCollectEffect({ x, y, combo, bonus, text }) {
    const effect = byId("collect-effect");
    const effectId = ++collectEffectId;
    effect.textContent = text ? text : bonus ? `COMBO x${combo}  +${100 + bonus} ✨` : "+100 🍬";
    effect.style.left = `${x}px`;
    effect.style.top = `${y}px`;
    effect.style.visibility = "visible";
    effect.getAnimations().forEach((animation) => animation.cancel());
    const animation = effect.animate(
      [
        { transform: "translate(-50%, 0) scale(.65)", opacity: 0 },
        { transform: "translate(-50%, -10px) scale(1.08)", opacity: 1, offset: 0.22 },
        { transform: "translate(-50%, -50px) scale(.9)", opacity: 0 },
      ],
      { duration: 720, easing: "ease-out" },
    );
    animation.onfinish = () => {
      if (effectId === collectEffectId) effect.style.visibility = "hidden";
    };
  }

  function showJumpScare({ visual = "👻💀🎃", text = "Ú ÒA!" } = {}) {
    const gameEl = byId("game");
    const overlay = byId("jumpscare-overlay");
    const visualEl = byId("jumpscare-visual");
    const textEl = byId("jumpscare-text");
    if (!overlay || !visualEl || !textEl) return;

    visualEl.textContent = visual;
    textEl.textContent = text;

    gameEl.classList.remove("scare-shake");
    void gameEl.offsetWidth;
    gameEl.classList.add("scare-shake");

    overlay.getAnimations().forEach((anim) => anim.cancel());
    visualEl.getAnimations().forEach((anim) => anim.cancel());

    overlay.animate(
      [
        { opacity: 0 },
        { opacity: 1, offset: 0.12 },
        { opacity: 0.92, offset: 0.72 },
        { opacity: 0 },
      ],
      { duration: 1400, easing: "ease-out" },
    );

    visualEl.animate(
      [
        { transform: "scale(0.2) rotate(-12deg)" },
        { transform: "scale(1.35) rotate(8deg)", offset: 0.18 },
        { transform: "scale(1.1) rotate(-6deg)", offset: 0.55 },
        { transform: "scale(1.55) rotate(0deg)" },
      ],
      { duration: 1400, easing: "cubic-bezier(.17,.89,.32,1.28)" },
    );
  }

  function updateHud(state) {
    currentUnlockedMap = state.unlockedLevel || currentUnlockedMap;
    const values = {
      level: state.level,
      "level-score": state.levelScore,
      "total-score": state.totalScore,
      "candy-count": `${state.candies}/${state.candyTotal}`,
      "player-name-display": state.playerName,
      "spook-name-display": state.spookName,
    };
    Object.entries(values).forEach(([id, value]) => {
      const element = byId(id);
      const text = String(value);
      if (displayed[id] !== text) {
        element.textContent = text;
        displayed[id] = text;
      }
    });

    const specialChip = byId("map-special-hud");
    if (specialChip) {
      if (state.specialText) {
        specialChip.style.display = "";
        if (displayed["map-special-hud"] !== state.specialText) {
          specialChip.textContent = state.specialText;
          displayed["map-special-hud"] = state.specialText;
        }
      } else {
        specialChip.style.display = "none";
      }
    }

    const sneakBtn = byId("sneak-btn");
    if (sneakBtn) {
      sneakBtn.style.display = state.showSneakButton ? "" : "none";
      sneakBtn.textContent = state.sneaking ? "🤫" : "🏃";
      sneakBtn.classList.toggle("active-sneak", Boolean(state.sneaking));
    }

    byId("freeze-meter-fill").style.width = `${Math.round(state.freeze * 100)}%`;
    byId("freeze-meter").style.opacity = state.freeze > 0 && state.freeze < 1 ? "1" : "0";
  }

  function setSoundMuted(muted) {
    soundMuted = muted;
    writeStorage(STORAGE_KEYS.muted, String(muted));
    const button = byId("mute-btn");
    button.textContent = muted ? "🔇" : "🔊";
    button.setAttribute("aria-label", muted ? "Bật âm thanh" : "Tắt âm thanh");
    byId("settings-mute-btn").textContent = muted ? "🔇 Âm thanh: tắt" : "🔊 Âm thanh: bật";
  }

  byId("start-game-btn").addEventListener("click", showCharacterSelection);
  byId("open-help-btn").addEventListener("click", () => {
    helpReturnModal = "intro-modal";
    showModal("help-modal");
  });
  byId("close-help-btn").addEventListener("click", () => showModal(helpReturnModal));
  byId("character-back-btn").addEventListener("click", showIntro);
  byId("confirm-character-btn").addEventListener("click", () => {
    writeStorage(STORAGE_KEYS.character, selectedCharacter.id);
    callbacks.onConfirmCharacter?.(selectedCharacter.id);
  });
  byId("map-back-btn").addEventListener("click", showCharacterSelection);
  byId("confirm-map-btn").addEventListener("click", () => {
    callbacks.onSelectMap?.(selectedMap);
  });
  byId("pause-map-select-btn").addEventListener("click", () => {
    callbacks.onOpenMapSelect?.();
  });
  byId("complete-map-select-btn").addEventListener("click", () => {
    callbacks.onOpenMapSelect?.();
  });
  byId("begin-level-btn").addEventListener("click", () => callbacks.onLevelBegin?.());
  byId("pause-btn").addEventListener("click", (event) => {
    event.stopPropagation();
    callbacks.onPause?.();
  });
  byId("sneak-btn").addEventListener("click", (event) => {
    event.stopPropagation();
    callbacks.onToggleSneak?.();
  });
  byId("resume-btn").addEventListener("click", () => callbacks.onResume?.());
  byId("replay-level-btn").addEventListener("click", () => callbacks.onRestartLevel?.());
  byId("home-btn").addEventListener("click", () => callbacks.onHome?.());
  byId("next-level-btn").addEventListener("click", () => callbacks.onNextLevel?.());
  byId("play-again-btn").addEventListener("click", () => callbacks.onRestartRun?.(selectedCharacter.id));
  byId("victory-home-btn").addEventListener("click", () => callbacks.onHome?.());
  byId("victory-achievements-btn").addEventListener("click", () => {
    callbacks.onAchievements?.("victory-modal");
  });
  byId("close-achievements-btn").addEventListener("click", () => showModal(achievementsReturnModal));
  byId("mute-btn").addEventListener("click", () => {
    const muted = callbacks.onToggleSound?.();
    if (typeof muted === "boolean") setSoundMuted(muted);
  });
  byId("settings-mute-btn").addEventListener("click", () => {
    const muted = callbacks.onToggleSound?.();
    if (typeof muted === "boolean") setSoundMuted(muted);
  });
  byId("settings-btn").addEventListener("click", (event) => {
    event.stopPropagation();
    callbacks.onOpenSettings?.();
    showSettings("pause-modal");
  });
  byId("open-settings-from-intro-btn").addEventListener("click", () => showSettings("intro-modal"));
  byId("pause-settings-btn").addEventListener("click", () => showSettings("pause-modal"));
  byId("save-settings-btn").addEventListener("click", () => {
    const playerName = byId("player-name-input").value.trim().slice(0, 15) || "Bạn";
    const spookName = byId("spook-name-input").value.trim().slice(0, 10) || "Ghost";
    writeStorage(STORAGE_KEYS.playerName, playerName);
    writeStorage(STORAGE_KEYS.spookName, spookName);
    callbacks.onNamesChanged?.(playerName, spookName);
    showModal(returnModal);
  });

  setSoundMuted(soundMuted);
  callbacks.onNamesChanged?.(
    readStorage(STORAGE_KEYS.playerName, "Bạn") || "Bạn",
    readStorage(STORAGE_KEYS.spookName, "Ghost") || "Ghost",
  );
  callbacks.onCharacterSelected?.(selectedCharacter.id);

  return {
    showIntro,
    showCharacterSelection,
    showMapSelection,
    showLevelIntro,
    showGameplay,
    showPause,
    showLevelComplete,
    showVictory,
    showSettings,
    showAchievements,
    showCollectEffect,
    showJumpScare,
    updateHud,
    setSoundMuted,
    get muted() { return soundMuted; },
    get selectedCharacter() { return selectedCharacter.id; },
    getAchievementsReturn() { return achievementsReturnModal; },
  };
}