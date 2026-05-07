const ITEMS = {
  potion: "Mikstura leczenia",
  smallPotion: "Mała mikstura",
  bread: "Chleb",
  meat: "Suszone mięso",
  torch: "Pochodnia",
  lockpicks: "Wytrychy",
  swampMap: "Mapa bagien",
  pelt: "Wilcze Futro",
  root: "Bagienny Korzeń",
  elixir: "Eliksir Czystej Krwi",
  amulet: "Stary Amulet",
  tools: "Skrzynia narzędzi kowala",
  ring: "Żelazny Pierścień",
  tooth: "Kieł Cienia",
  silverOrnament: "Srebrna Ozdoba",
  ferrymanMark: "Znak Przewoźnika",
  boneBlade: "Ostrze Kości",
  theaterMask: "Maska Teatru",
  bookNames: "Księga Imion Umarłych",
  mapValdorin: "Mapa Valdorinu",
  medicDiary: "Dziennik Medyka",
  flowerCrown: "Kwiatowa Korona Eliany",
  childAmulet: "Amulet Dziecka",
};

const ARTIFACTS = {
  key: "Srebrny Klucz",
  crystal: "Kryształ Świtu",
  seal: "Pieczęć Starego Króla",
  letter: "Stary List Króla",
  tear: "Łza Księżniczki Eliany",
  shard: "Czarny Odłamek Korony",
  dawn: "Błogosławieństwo Świtu",
};

const WEAPONS = {
  "Stary miecz": 3,
  "Sztylet": 2,
  "Iskra many": 1,
  "Toporek": 3,
  "Stalowy miecz": 5,
  "Topór najemnika": 6,
  "Siekiera drwala": 4,
  "Ostrze Kości": 7,
  "Kostur Iskier": 4,
};

const STACKABLE_ITEMS = new Set([
  "Mikstura leczenia",
  "Mała mikstura",
  "Chleb",
  "Suszone mięso",
]);

const HEROES = {
  warrior: {
    name: "Wojownik",
    health: 38,
    gold: 8,
    attack: 7,
    weapon: "Stary miecz",
    inventory: [ITEMS.bread, ITEMS.torch],
    trait: "Może zastraszać słabszych przeciwników i rozwiązywać część scen pokazem siły.",
  },
  rogue: {
    name: "Łotrzyk",
    health: 30,
    gold: 16,
    attack: 5,
    weapon: "Sztylet",
    inventory: [ITEMS.lockpicks, ITEMS.bread],
    trait: "Może otwierać zamki, rozbrajać pułapki, skradać się i kraść.",
  },
  mage: {
    name: "Uczeń Maga",
    health: 26,
    gold: 10,
    attack: 4,
    weapon: "Iskra many",
    inventory: [ITEMS.smallPotion, ITEMS.torch],
    trait: "Może odczytywać runy, rozpraszać iluzje i rozmawiać z duchami.",
  },
  outlaw: {
    name: "Banita",
    health: 32,
    gold: 5,
    attack: 6,
    weapon: "Toporek",
    inventory: [ITEMS.meat, "Kaptur banity"],
    trait: "Zna świat przestępczy i może dogadywać się z bandytami.",
  },
};

const ENEMIES = {
  wolf: { name: "Wilk Cienia", health: 12, attack: 3, gold: 4, item: ITEMS.pelt },
  oldWolf: { name: "Stary Wilk", health: 20, attack: 5, item: ITEMS.tooth },
  forestWraith: { name: "Leśny Upiór", health: 18, attack: 4, ghost: true },
  drowned: { name: "Topielec", health: 16, attack: 4, gold: 7, poison: true },
  skeleton: { name: "Szkielet Wartownik", health: 18, attack: 5, gold: 9, undead: true },
  cryptGuardian: { name: "Strażnik Krypty", health: 26, attack: 6, item: ITEMS.amulet, undead: true },
  mercenary: { name: "Najemnik Zdrajców", health: 20, attack: 5, gold: 12 },
  cael: { name: "Dowódca Cael", health: 30, attack: 7 },
  actor: { name: "Aktor Bez Twarzy", health: 24, attack: 6, item: ITEMS.theaterMask, undead: true },
  ashKnight: { name: "Popielny Rycerz", health: 32, attack: 8, undead: true },
  ashKing: { name: "Popielny Król", health: 45, attack: 8, finalBoss: true, undead: true },
};

const sceneArt = {
  start: "assets/locations/village.png",
  village: "assets/locations/village.png",
  forest: "assets/locations/forest.png",
  swamp: "assets/locations/swamp.png",
  crypt: "assets/locations/crypt.png",
  fort: "assets/locations/fort.png",
  tower: "assets/locations/tower.png",
  ruins: "assets/locations/ruins.png",
  crown: "assets/locations/crown-hall.png",
};

let state;

const els = {
  sceneName: document.querySelector("#sceneName"),
  storyText: document.querySelector("#storyText"),
  eventLog: document.querySelector("#eventLog"),
  choices: document.querySelector("#choices"),
  heroClass: document.querySelector("#heroClass"),
  health: document.querySelector("#health"),
  gold: document.querySelector("#gold"),
  attack: document.querySelector("#attack"),
  weapon: document.querySelector("#weapon"),
  inventory: document.querySelector("#inventory"),
  artifacts: document.querySelector("#artifacts"),
  statuses: document.querySelector("#statuses"),
  reputation: document.querySelector("#reputation"),
  audioBtn: document.querySelector("#audioBtn"),
  restartBtn: document.querySelector("#restartBtn"),
};

const music = {
  context: null,
  master: null,
  delay: null,
  running: false,
  starting: false,
  autoplayArmed: false,
  mood: "village",
  oscillators: [],
  timers: [],
};

function newGame() {
  state = {
    heroKey: "",
    heroClass: "-",
    maxHealth: 0,
    health: 0,
    gold: 0,
    baseAttack: 0,
    weapon: "-",
    inventory: [],
    artifacts: [],
    statuses: [],
    notifications: [],
    flags: {},
    rep: { good: 0, greed: 0, ash: 0 },
    nextAttackBonus: 0,
    scene: "start",
    enemy: null,
    afterFight: null,
    returnScene: null,
  };
  renderScene("start");
}

function chooseHero(heroKey) {
  const hero = HEROES[heroKey];
  state.heroKey = heroKey;
  state.heroClass = hero.name;
  state.maxHealth = hero.health;
  state.health = hero.health;
  state.gold = hero.gold;
  state.baseAttack = hero.attack;
  state.weapon = hero.weapon;
  state.inventory = [...hero.inventory];
  addStatus(hero.trait);
  startMusic({ quiet: true, fromButton: true });
  renderScene("dream");
}

function openGuide() {
  window.open("korona_popiolu_poradnik_www.html", "_blank", "noopener");
}

function attackValue() {
  return state.baseAttack + (WEAPONS[state.weapon] || 0);
}

function has(item) {
  return state.inventory.includes(item);
}

function hasArtifact(artifact) {
  return state.artifacts.includes(artifact);
}

function hasStatus(status) {
  return state.statuses.includes(status);
}

function hasFlag(flag) {
  return Boolean(state.flags[flag]);
}

function mainArtifactCount() {
  return [ARTIFACTS.key, ARTIFACTS.crystal, ARTIFACTS.seal].filter(hasArtifact).length;
}

function addItem(item) {
  if (!item) return;
  if (STACKABLE_ITEMS.has(item) || !state.inventory.includes(item)) {
    state.inventory.push(item);
    addNotification(`Otrzymujesz: ${item}.`, "item");
  }
}

function removeItem(item) {
  const index = state.inventory.indexOf(item);
  if (index === -1) return false;
  state.inventory.splice(index, 1);
  addNotification(`Tracisz: ${item}.`, "loss");
  return true;
}

function addArtifact(artifact) {
  if (artifact && !state.artifacts.includes(artifact)) {
    state.artifacts.push(artifact);
    addNotification(`Artefakt zdobyty: ${artifact}.`, "artifact");
  }
}

function addStatus(status) {
  if (status && !state.statuses.includes(status)) {
    state.statuses.push(status);
    addNotification(`Ważna informacja: ${status}.`, "info");
  }
}

function setFlag(flag, value = true) {
  state.flags[flag] = value;
}

function heal(amount) {
  const before = state.health;
  state.health = Math.min(state.maxHealth, state.health + amount);
  const healed = state.health - before;
  if (healed > 0) addNotification(`Odzyskujesz ${healed} zdrowia.`, "good");
}

function damage(amount) {
  state.health -= amount;
  addNotification(`Tracisz ${amount} zdrowia.`, "danger");
  if (state.health <= 0) {
    state.health = 0;
    renderEnding("Śmierć w popiele", "Zdrowie spada do zera. Twoja historia kończy się na drodze do Valdorinu, a mgła dopisuje twoje imię do swoich szeptów.");
    return true;
  }
  return false;
}

function repLabel() {
  return `Dobro ${state.rep.good} / Chciwość ${state.rep.greed} / Popiół ${state.rep.ash}`;
}

function addNotification(text, type = "info") {
  if (!state?.notifications) return;
  state.notifications.push({ text, type });
  if (state.notifications.length > 8) state.notifications.shift();
}

function renderNotifications() {
  els.eventLog.innerHTML = "";
  if (!state.notifications.length) {
    els.eventLog.hidden = true;
    return;
  }

  els.eventLog.hidden = false;
  state.notifications.forEach((entry) => {
    const item = document.createElement("p");
    item.className = `event event-${entry.type}`;
    item.textContent = entry.text;
    els.eventLog.appendChild(item);
  });
  state.notifications = [];
}

function applyEffects(effects = []) {
  for (const effect of effects) {
    if (effect.item) addItem(effect.item);
    if (effect.removeItem) removeItem(effect.removeItem);
    if (effect.artifact) addArtifact(effect.artifact);
    if (effect.status) addStatus(effect.status);
    if (effect.flag) setFlag(effect.flag, effect.value ?? true);
    if (effect.gold) {
      state.gold = Math.max(0, state.gold + effect.gold);
      addNotification(effect.gold > 0 ? `Zdobywasz ${effect.gold} złota.` : `Tracisz ${Math.abs(effect.gold)} złota.`, effect.gold > 0 ? "item" : "loss");
    }
    if (effect.heal) heal(effect.heal);
    if (effect.damage && damage(effect.damage)) return false;
    if (effect.maxHealth) {
      state.maxHealth += effect.maxHealth;
      state.health += Math.max(0, effect.maxHealth);
      addNotification(`Maksymalne zdrowie zmienia się o ${effect.maxHealth}.`, "good");
    }
    if (effect.weapon) {
      state.weapon = effect.weapon;
      addNotification(`Nowa broń: ${effect.weapon}.`, "item");
    }
    if (effect.attack) {
      state.baseAttack += effect.attack;
      addNotification(`Atak zmienia się o ${effect.attack}.`, "item");
    }
    if (effect.bonus) {
      state.nextAttackBonus += effect.bonus;
      addNotification(`Następny atak otrzymuje premię +${effect.bonus}.`, "good");
    }
    if (effect.rep) {
      state.rep.good += effect.rep.good || 0;
      state.rep.greed += effect.rep.greed || 0;
      state.rep.ash += effect.rep.ash || 0;
      const changes = [];
      if (effect.rep.good) changes.push(`dobro ${effect.rep.good > 0 ? "+" : ""}${effect.rep.good}`);
      if (effect.rep.greed) changes.push(`chciwość ${effect.rep.greed > 0 ? "+" : ""}${effect.rep.greed}`);
      if (effect.rep.ash) changes.push(`popiół ${effect.rep.ash > 0 ? "+" : ""}${effect.rep.ash}`);
      if (changes.length) addNotification(`Reputacja: ${changes.join(", ")}.`, "info");
    }
  }
  return true;
}

function canShow(choice) {
  if (choice.when && !choice.when()) return false;
  if (choice.unless && choice.unless()) return false;
  return true;
}

function isAvailable(choice) {
  if (choice.requireClass && state.heroKey !== choice.requireClass) return false;
  if (choice.requireItem && !has(choice.requireItem)) return false;
  if (choice.requireArtifact && !hasArtifact(choice.requireArtifact)) return false;
  if (choice.requireFlag && !hasFlag(choice.requireFlag)) return false;
  if (choice.requireGood && state.rep.good < choice.requireGood) return false;
  if (choice.requireGold && state.gold < choice.requireGold) return false;
  return true;
}

function describeRequirement(choice) {
  if (choice.requireClass) return `wymaga klasy: ${HEROES[choice.requireClass].name}`;
  if (choice.requireItem) return `wymaga: ${choice.requireItem}`;
  if (choice.requireArtifact) return `wymaga: ${choice.requireArtifact}`;
  if (choice.requireGood) return `wymaga dobrej reputacji`;
  if (choice.requireGold) return `wymaga ${choice.requireGold} złota`;
  return "niedostępne";
}

function takeChoice(choice) {
  if (!isAvailable(choice)) {
    return renderNotice("Ten wybór jest niedostępny", describeRequirement(choice), state.scene);
  }
  if (choice.requireGold) {
    state.gold -= choice.requireGold;
    addNotification(`Wydajesz ${choice.requireGold} złota.`, "loss");
  }
  if (choice.effects && !applyEffects(choice.effects)) return;
  if (choice.healItem) return useHealingItem(choice.healItem);
  if (choice.fight) return startFight(choice.fight.enemy(), choice.fight.win, choice.fight.lose);
  if (choice.ending) return choice.ending();
  if (choice.action) return choice.action();
  if (choice.to) return renderScene(choice.to);
}

function renderScene(id) {
  const scene = SCENES[id];
  state.scene = id;
  document.body.style.setProperty("--page-art", `url("${sceneArt[scene.art || "village"]}")`);
  setMusicMood(scene.art || "village");
  els.sceneName.textContent = scene.title;
  els.storyText.innerHTML = scene.text().split("\n").map((p) => `<p>${p}</p>`).join("");
  renderNotifications();
  els.choices.innerHTML = "";

  scene.choices.filter(canShow).forEach((choice) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = isAvailable(choice) ? choice.label : `${choice.label} (${describeRequirement(choice)})`;
    if (choice.kind) button.classList.add(choice.kind);
    button.disabled = choice.disabled === true;
    button.addEventListener("click", () => takeChoice(choice));
    els.choices.appendChild(button);
  });
  renderStats();
}

function renderNotice(title, text, backScene = state.scene) {
  renderCustom(title, text, [{ label: "Wróć", action: () => renderScene(backScene) }], SCENES[backScene]?.art || "village");
}

function renderCustom(title, text, choices, art = "village") {
  document.body.style.setProperty("--page-art", `url("${sceneArt[art]}")`);
  setMusicMood(art);
  els.sceneName.textContent = title;
  els.storyText.innerHTML = text.split("\n").map((p) => `<p>${p}</p>`).join("");
  renderNotifications();
  els.choices.innerHTML = "";
  choices.forEach((choice) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = choice.label;
    if (choice.kind) button.classList.add(choice.kind);
    button.addEventListener("click", choice.action);
    els.choices.appendChild(button);
  });
  renderStats();
}

function renderStats() {
  els.heroClass.textContent = state.heroClass;
  els.health.textContent = state.maxHealth ? `${state.health}/${state.maxHealth}` : "-";
  els.gold.textContent = state.gold;
  els.attack.textContent = state.maxHealth ? attackValue() : "-";
  els.weapon.textContent = state.weapon;
  fillList(els.inventory, state.inventory);
  fillList(els.artifacts, state.artifacts);
  fillList(els.statuses, state.statuses);
  if (els.reputation) fillList(els.reputation, [repLabel()]);
}

function fillList(element, values) {
  element.innerHTML = "";
  if (!values.length) {
    const li = document.createElement("li");
    li.textContent = "brak";
    element.appendChild(li);
    return;
  }
  values.forEach((value) => {
    const li = document.createElement("li");
    li.textContent = value;
    element.appendChild(li);
  });
}

function useHealingItem(item) {
  const healing = {
    [ITEMS.potion]: 10,
    [ITEMS.smallPotion]: 6,
    [ITEMS.bread]: 3,
    [ITEMS.meat]: 5,
  }[item];
  if (!removeItem(item)) return renderNotice("Brak przedmiotu", `Nie masz: ${item}.`);
  heal(healing);
  renderNotice("Leczenie", `${item} przywraca ${healing} zdrowia.`);
}

function buy(item, price, back = "shop") {
  if (state.gold < price) return renderNotice("Sklep", "Nie masz tyle złota.", back);
  state.gold -= price;
  addNotification(`Wydajesz ${price} złota.`, "loss");
  addItem(item);
  renderNotice("Sklep", `Kupujesz: ${item}.`, back);
}

function startFight(enemyTemplate, winSceneOrFn, loseScene = "village") {
  const enemy = { ...enemyTemplate };
  if (enemy.name === "Cień Gracza") {
    enemy.health = state.health + 5 + Math.max(0, state.rep.greed - 2) * 2;
    enemy.attack = Math.ceil(attackValue() / 2) + 3 + Math.max(0, state.rep.ash - 2);
  }
  if (enemy.name === "Popielny Król") {
    if (hasArtifact(ARTIFACTS.crystal)) enemy.attack -= 2;
    if (hasFlag("destroyedShrine")) enemy.health += 10;
    if (hasArtifact(ARTIFACTS.dawn)) enemy.health -= 5;
  }
  state.enemy = enemy;
  state.afterFight = winSceneOrFn;
  state.returnScene = loseScene;
  renderFight();
}

function renderFight(message = "") {
  const enemy = state.enemy;
  const options = [
    { label: "Atakuj", action: playerAttack, kind: "danger" },
    { label: "Użyj mikstury", action: () => usePotionInFight(), kind: "good" },
    { label: "Spróbuj uciec", action: flee },
  ];
  if (enemy.finalBoss && hasStatus("Wola Zniszczenia") && state.health > 10) {
    options.push({ label: "Poświęć 10 zdrowia", action: sacrificeStrike, kind: "danger" });
  }
  if (enemy.finalBoss && hasArtifact(ARTIFACTS.shard)) {
    options.push({ label: "Użyj Czarnego Odłamka", action: useBlackShard, kind: "danger" });
  }
  renderCustom(
    `Walka: ${enemy.name}`,
    `${message ? `${message}\n` : ""}${enemy.name}: ${enemy.health} zdrowia.\nTy: ${state.health}/${state.maxHealth} zdrowia.`,
    options,
    enemy.finalBoss ? "crown" : SCENES[state.scene]?.art || "forest",
  );
}

function playerAttack() {
  const enemy = state.enemy;
  let amount = attackValue() + state.nextAttackBonus;
  if (enemy.undead && state.weapon === "Kostur Iskier") amount += 3;
  if (enemy.ghost && has(ITEMS.torch)) amount += 2;
  if (state.weapon === "Siekiera drwala" && enemy.name.includes("Wilk")) amount += 2;
  state.nextAttackBonus = 0;
  enemy.health -= amount;
  if (enemy.health <= 0) return winFight(`Zadajesz ${amount} obrażeń.`);
  enemyStrike(`Zadajesz ${amount} obrażeń.`);
}

function usePotionInFight() {
  if (removeItem(ITEMS.potion)) {
    heal(10);
    return enemyStrike("Wypijasz miksturę leczenia.");
  }
  if (removeItem(ITEMS.smallPotion)) {
    heal(6);
    return enemyStrike("Wypijasz małą miksturę.");
  }
  renderFight("Nie masz mikstury.");
}

function flee() {
  if (Math.random() < 0.5) {
    state.enemy = null;
    return renderScene(state.returnScene || "village");
  }
  enemyStrike("Nie udało się uciec.");
}

function sacrificeStrike() {
  state.health -= 10;
  state.enemy.health -= 15;
  if (state.enemy.health <= 0) return winFight("Wola Zniszczenia rozrywa salę. Wróg otrzymuje 15 obrażeń.");
  enemyStrike("Poświęcasz 10 zdrowia i zadajesz 15 obrażeń.");
}

function useBlackShard() {
  state.rep.ash += 3;
  addNotification("Reputacja: popiół +3.", "danger");
  if (state.rep.ash >= 6) return endingBad();
  state.enemy.health -= 25;
  if (state.enemy.health <= 0) return endingDark();
  enemyStrike("Czarny Odłamek pali dłoń i zadaje królowi 25 obrażeń.");
}

function enemyStrike(prefix) {
  const enemy = state.enemy;
  let amount = Math.max(1, enemy.attack);
  if (has(ITEMS.ring) && amount > 1) amount -= 1;
  if (damage(amount)) return;
  renderFight(`${prefix} ${enemy.name} kontratakuje za ${amount} obrażeń.`);
}

function winFight(prefix) {
  const enemy = state.enemy;
  if (enemy.gold) {
    state.gold += enemy.gold;
    addNotification(`Zdobywasz ${enemy.gold} złota.`, "item");
  }
  if (enemy.item) addItem(enemy.item);
  if (enemy.poison && !has(ITEMS.elixir)) damage(3);
  if (state.weapon === "Ostrze Kości" && Math.random() < 0.5) damage(1);
  state.enemy = null;
  const after = state.afterFight;
  state.afterFight = null;
  if (typeof after === "function") return after(prefix);
  renderNotice("Zwycięstwo", `${prefix}\nPokonujesz przeciwnika.`, after || "village");
}

function completeArtifactEvent() {
  if (mainArtifactCount() === 1 && !hasFlag("nightAttackDone")) return renderScene("nightAttack");
  if (mainArtifactCount() === 2 && !hasFlag("edrinWellDone")) return renderScene("edrinWell");
  return renderScene("village");
}

function crownFinalChoice(mode) {
  if (mode === "wear") return endingBad();
  if (hasArtifact(ARTIFACTS.tear) && state.rep.ash < 6 && (hasArtifact(ARTIFACTS.letter) || hasFlag("readElianaBook"))) return endingBest();
  if (mode === "forgive" && (hasArtifact(ARTIFACTS.letter) || hasFlag("readElianaBook")) && state.rep.good >= 5) return endingBest();
  if (mode === "destroy" && hasStatus("Wola Zniszczenia") && !hasArtifact(ARTIFACTS.tear)) return endingDark();
  if (mode === "seal") return endingNeutral();
  return startFight(ENEMIES.ashKing, () => {
    if (hasStatus("Wola Zniszczenia") && !hasArtifact(ARTIFACTS.tear)) return endingDark();
    return endingGood();
  }, "crownHall");
}

function renderEnding(title, text) {
  renderCustom(title, text, [{ label: "Nowa gra", action: newGame, kind: "good" }], "crown");
}

function endingBest() {
  renderEnding(
    "Świt dla umarłych",
    "Nie podnosisz broni. Wyciągasz przed siebie Łzę Eliany. Popielny Król zamiera i przez chwilę nie jest potworem ani władcą, tylko ojcem, który zrozumiał zbyt późno.\nKorona pęka nie od uderzenia, ale od ciszy. Z jej wnętrza wychodzi dziewczynka w białej sukni. Bierze ojca za rękę. Oboje rozpadają się w światło.\nNad Valdorinem wstaje świt. Zmarli nie wracają, ale ich imiona przestają boleć.",
  );
}

function endingGood() {
  renderEnding(
    "Świt nad Valdorinem",
    "Walka kończy się, gdy ostrze przecina koronę na tronie. Popiół unosi się w górę jak odwrócony śnieg. Cienie mieszkańców Valdorinu patrzą na ciebie bez gniewu.\nKlątwa pęka. Ruiny pozostają ruinami, ale przestają być więzieniem.",
  );
}

function endingNeutral() {
  renderEnding(
    "Nowy Strażnik",
    "Nie potrafisz zniszczyć Korony. Nie potrafisz jej też założyć. Zamykasz ją więc tam, gdzie spoczywała przez sto lat. Tym razem zostajesz przy niej.\nMijają lata. Ludzie zapominają twoje imię, ale pamiętają, że ktoś pilnuje ruin.",
  );
}

function endingBad() {
  renderEnding(
    "Władca Popiołu",
    "Korona jest lżejsza, niż sądziłeś. Przez moment wydaje ci się, że wygrałeś. Potem słyszysz głosy. Nie krzyczą. Kłaniają się.\nValdorin budzi się. Umarli wychodzą z domów, klękają na rynku i czekają na pierwszy rozkaz nowego króla.",
  );
}

function endingLost() {
  renderEnding(
    "Zgubiony w popiele",
    "Na początku zapominasz, po co tu przyszedłeś. Potem zapominasz drogę powrotną. Na końcu zapominasz własne imię.\nPo latach inny śmiałek zobaczy twoją twarz w oknie martwego miasta.",
  );
}

function endingDark() {
  renderEnding(
    "Zniszczenie bez świtu",
    "Korona pęka. Król znika. Miasto zaczyna się walić. Cienie nie zostają uwolnione. Zostają rozerwane razem z klątwą.\nŚwit przychodzi, ale jest zimny. Ravenford przetrwa, ale ludzie będą mówić, że ocaliłeś żywych kosztem umarłych.",
  );
}

const c = (label, config = {}) => ({ label, ...config });

const SCENES = {
  start: {
    title: "Wybór postaci",
    art: "village",
    text: () => "Valdorin budzi starą klątwę. Wybierz wędrowca, który przejdzie przez czarny deszcz, popiół i pamięć umarłego miasta.",
    choices: [
      c("Poradnik", { action: openGuide, kind: "good" }),
      c("Wojownik", { action: () => chooseHero("warrior") }),
      c("Łotrzyk", { action: () => chooseHero("rogue") }),
      c("Uczeń Maga", { action: () => chooseHero("mage") }),
      c("Banita", { action: () => chooseHero("outlaw") }),
    ],
  },
  dream: {
    title: "Sen o Koronie",
    art: "crown",
    text: () => "Stoisz w sali tronowej, choć nigdy wcześniej jej nie widziałeś. Na tronie leży korona z czarnego metalu. Wokół stoją ludzie bez twarzy, każdy z garścią popiołu.\nGłos mówi: „Wszystko, co umiera, może zostać zatrzymane. Wystarczy zapłacić.”",
    choices: [
      c("Podejdź do Korony", { to: "innRoom", effects: [{ rep: { ash: 1 } }, { status: "Korona szepnęła twoje imię" }], kind: "danger" }),
      c("Cofnij się", { to: "innRoom", effects: [{ status: "Wola Oporu" }] }),
      c("Zapytaj, kto mówi", { to: "innRoom", effects: [{ flag: "heardElianaWhisper" }, { status: "Usłyszał szept Eliany" }], kind: "good" }),
      c("Strąć Koronę z tronu", { to: "innRoom", effects: [{ damage: 1 }, { status: "Wola Oporu" }] }),
    ],
  },
  innRoom: {
    title: "Gospoda „Pod Krukiem”",
    art: "village",
    text: () => "Budzisz się nagle, jakby ktoś wypowiedział twoje imię tuż przy uchu. W pokoju jest zimno. Na podłodze leży ślad popiołu, którego nie było tam wieczorem. Z dołu dochodzą krzyki.",
    choices: [
      c("Zejdź na dół", { to: "innHall" }),
      c("Przeszukaj pokój", { to: "innRoom", unless: () => hasFlag("searchedRoom"), effects: [{ item: ITEMS.smallPotion }, { flag: "searchedRoom" }] }),
      c("Wyjrzyj przez okno", { to: "innHall", effects: [{ status: "Widział popielatą mgłę" }] }),
      c("Sprawdź ślad popiołu", { to: "innRoom", unless: () => hasFlag("ashTraceChecked"), effects: [{ flag: "ashTraceChecked" }, { status: "Pierwszy znak klątwy" }] }),
      c("Odczytaj ślad magią", { requireClass: "mage", to: "innRoom", unless: () => hasFlag("ashTraceRead"), effects: [{ flag: "ashTraceRead" }, { status: "Odczytał zaklęcie przywołania" }, { rep: { good: 1 } }] }),
    ],
  },
  innHall: {
    title: "Sala główna gospody",
    art: "village",
    text: () => "W sali panuje chaos. Karczmarz rygluje drzwi. Dwóch chłopów niesie rannego strażnika. Przy kominku siedzi starzec z księgą na kolanach. Tylko on wygląda, jakby spodziewał się tego od dawna.",
    choices: [
      c("Porozmawiaj z kronikarzem Edrinem", { to: "edrinIntro", kind: "good" }),
      c("Pomóż rannemu strażnikowi", { to: "innHall", unless: () => hasFlag("helpedGuard"), effects: [{ flag: "helpedGuard" }, { rep: { good: 1 } }, { status: "Pomógł rannemu strażnikowi" }] }),
      c("Zapytaj karczmarza, co się stało", { to: "innHall", effects: [{ status: "Wie, że mgła wyszła z lasu" }] }),
      c("Wyjdź mimo ostrzeżeń", { to: "village", effects: [{ status: "Opuścił gospodę bez pełnej wiedzy" }] }),
    ],
  },
  edrinIntro: {
    title: "Kronikarz Edrin",
    art: "village",
    text: () => "Edrin opowiada o Arvandzie III, Koronie Popiołu i trzech artefaktach: Srebrnym Kluczu, Krysztale Świtu oraz Pieczęci Starego Króla.\nNie mówi wszystkiego. Widać to po tym, jak zamyka księgę dokładnie wtedy, gdy pada imię Eliany.",
    choices: [
      c("Zapytaj o Koronę", { to: "edrinIntro", effects: [{ status: "Zna legendę Korony" }] }),
      c("Zapytaj o Popielnego Króla", { to: "edrinIntro", effects: [{ status: "Zna imię Arvanda III" }] }),
      c("Zapytaj, skąd tyle wie", { to: "edrinIntro", effects: [{ status: "Podejrzewa Edrina" }] }),
      c("Weź zadanie i wyjdź do Ravenford", { to: "village", effects: [{ item: ITEMS.torch }, { flag: "mainQuestKnown" }] }),
    ],
  },
  village: {
    title: "Ravenford",
    art: "village",
    text: () => "Ravenford nie wygląda jak miejsce, które może oprzeć się czemukolwiek. Kilkanaście domów stoi wokół błotnistego placu. Czarny deszcz zostawia na kamieniach szare smugi.\nTo ostatnia żywa wioska przed drogą do Valdorinu.",
    choices: [
      c("Gospoda „Pod Krukiem”", { to: "tavern" }),
      c("Sklep Loriana", { to: "shop" }),
      c("Kuźnia Borena", { to: "forge" }),
      c("Kaplica Świtu", { to: "chapel" }),
      c("Tablica ogłoszeń", { to: "noticeBoard" }),
      c("Mroczny Las", { to: "forest" }),
      c("Bagna Umarłych", { action: () => (has(ITEMS.swampMap) ? renderScene("swamp") : renderScene("swampRisk")) }),
      c("Krypta Milczących", { to: "cryptStart" }),
      c("Fort Zdrajców", { to: "fortGate" }),
      c("Wieża Astromanty", { to: "towerDoor" }),
      c("Nocny atak na Ravenford", { to: "nightAttack", when: () => mainArtifactCount() >= 1 && !hasFlag("nightAttackDone"), kind: "danger" }),
      c("Kronikarz przy studni", { to: "edrinWell", when: () => mainArtifactCount() >= 2 && !hasFlag("edrinWellDone") }),
      c("Ruiny Valdorinu", { to: "ruinsGate", kind: "danger" }),
    ],
  },
  tavern: {
    title: "Gospoda „Pod Krukiem”",
    art: "village",
    text: () => "W gospodzie ludzie mówią ciszej niż zwykle. Nawet kufle odkładane są ostrożnie, jakby hałas mógł przywołać mgłę.",
    choices: [
      c("Odpocznij", { action: () => {
        const free = hasFlag("helpedVillageHunger");
        if (!free && state.gold < 3) return renderNotice("Gospoda", "Nie masz 3 złota na odpoczynek.", "tavern");
        if (!free) state.gold -= 3;
        state.health = state.maxHealth;
        renderNotice("Gospoda", free ? "Dzięki pomocy wiosce odpoczywasz za darmo." : "Płacisz 3 złota i odzyskujesz pełne zdrowie.", "tavern");
      }, kind: "good" }),
      c("Porozmawiaj z mieszkańcami", { to: "tavern", effects: [{ status: "Wie, że dzieci boją się studni" }] }),
      c("Wróć na plac", { to: "village" }),
    ],
  },
  shop: {
    title: "Sklep Loriana",
    art: "village",
    text: () => {
      if (hasStatus("Okradł kupca")) return "Sklep jest chłodny i nieprzyjazny. Ceny wzrosły, a Lorian patrzy na ciebie tak, jak patrzy się na zamknięte drzwi.";
      if (hasStatus("Pomógł kupcowi")) return "Lorian pamięta twoją pomoc przy przewróconym wozie. Ceny są niższe, a rozmowa cieplejsza.";
      return "Kupiec sprzedaje wszystko, co może jeszcze ocalić życie: mikstury, pochodnie, mapy i wytrychy.";
    },
    choices: [
      c("Kup miksturę leczenia", { action: () => buy(ITEMS.potion, hasStatus("Pomógł kupcowi") ? 3 : hasStatus("Okradł kupca") ? 8 : 5, "shop") }),
      c("Kup mapę bagien", { action: () => buy(ITEMS.swampMap, hasStatus("Pomógł kupcowi") ? 5 : hasStatus("Okradł kupca") ? 12 : 8, "shop") }),
      c("Kup wytrychy", { action: () => buy(ITEMS.lockpicks, 10, "shop") }),
      c("Kup chleb", { action: () => buy(ITEMS.bread, 2, "shop") }),
      c("Wróć", { to: "village" }),
    ],
  },
  forge: {
    title: "Kuźnia Borena",
    art: "village",
    text: () => "Boren jest praktyczny i szorstki. Nie wierzył w legendy, dopóki mgła nie zabrała jego ucznia. Teraz prosi o skrzynię narzędzi z Mrocznego Lasu.",
    choices: [
      c("Kup Stalowy miecz - 15 złota", { requireGold: 15, to: "forge", effects: [{ weapon: "Stalowy miecz" }] }),
      c("Kup Topór najemnika - 18 złota", { requireGold: 18, to: "forge", effects: [{ weapon: "Topór najemnika" }] }),
      c("Oddaj skrzynię narzędzi", { requireItem: ITEMS.tools, to: "forge", effects: [{ removeItem: ITEMS.tools }, { item: ITEMS.ring }, { flag: "helpedBoren" }, { status: "Pomógł kowalowi" }, { rep: { good: 1 } }] }),
      c("Wróć", { to: "village" }),
    ],
  },
  chapel: {
    title: "Kaplica Świtu",
    art: "village",
    text: () => "Kaplica jest mała i uboga. Na ołtarzu pali się jedna świeca, ale jej płomień nie porusza się mimo przeciągu. Siostra Alena mówi, że świt przychodzi także dla winnych.",
    choices: [
      c("Poproś o błogosławieństwo", { to: "chapel", effects: [{ artifact: ARTIFACTS.dawn }, { bonus: 2 }, { rep: { good: 1 } }, { status: "Błogosławieństwo Świtu" }], kind: "good" }),
      c("Zapytaj o Popielnego Króla", { to: "chapel", effects: [{ flag: "alenaForgiveness" }, { status: "Alena wierzy w przebaczenie" }] }),
      c("Powiedz, że król zasłużył na potępienie", { to: "chapel", effects: [{ status: "Wola Zniszczenia" }, { rep: { ash: 1 } }] }),
      c("Ofiaruj 5 złota kaplicy", { requireGold: 5, to: "chapel", effects: [{ rep: { good: 1 } }] }),
      c("Wróć", { to: "village" }),
    ],
  },
  noticeBoard: {
    title: "Tablica ogłoszeń",
    art: "village",
    text: () => "Na mokrych kartkach widać prośby o pomoc: skrzynia narzędzi Borena, zagubione dziecko, głód w Ravenford i plotki o duchu drwala.",
    choices: [
      c("Pomóż z głodem w Ravenford", { to: "noticeBoard", unless: () => hasFlag("helpedVillageHunger"), effects: [{ removeItem: ITEMS.bread }, { flag: "helpedVillageHunger" }, { rep: { good: 1 } }, { status: "Pomógł głodnym w Ravenford" }] }),
      c("Poszukaj zagubionego dziecka", { to: "lostChild" }),
      c("Wróć", { to: "village" }),
    ],
  },
  lostChild: {
    title: "Zagubione dziecko",
    art: "forest",
    text: () => "Na granicy lasu znajdujesz ślady małych stóp. Dziecko ukryło się tam, gdzie czarny deszcz nie dotyka ziemi.",
    choices: [
      c("Zaprowadź je do kaplicy", { to: "village", effects: [{ item: ITEMS.childAmulet }, { flag: "savedChild" }, { rep: { good: 2 } }, { status: "Uratował zagubione dziecko" }], kind: "good" }),
      c("Zostaw mu jedzenie i odejdź", { requireItem: ITEMS.bread, to: "village", effects: [{ removeItem: ITEMS.bread }, { flag: "fedChild" }, { rep: { good: 1 } }] }),
      c("Zostaw je", { to: "village", effects: [{ flag: "abandonedChild" }, { rep: { greed: 1 } }] }),
    ],
  },
  forest: {
    title: "Mroczny Las",
    art: "forest",
    text: () => "Mroczny Las zaczyna się nagle. Granica między polami a drzewami jest tak równa, jakby ktoś narysował ją nożem. Gałęzie skrzypią, choć nie ma wiatru.",
    choices: [
      c("Przewrócony wóz", { to: "cart" }),
      c("Stara kapliczka", { to: "forestShrine" }),
      c("Chata drwala", { to: "woodcutterHut" }),
      c("Polana z wilkami", { fight: { enemy: () => hasFlag("beatWolf") ? ENEMIES.oldWolf : ENEMIES.wolf, win: () => { setFlag("beatWolf"); renderScene("forest"); } }, kind: "danger" }),
      c("Kamienny krąg", { to: "stoneCircle" }),
      c("Ukryta ścieżka na bagna", { to: "swamp" }),
      c("Wróć do Ravenford", { to: "village" }),
    ],
  },
  cart: {
    title: "Przewrócony wóz",
    art: "forest",
    text: () => hasFlag("cartResolved") ? "Wóz leży w błocie. Decyzja została już podjęta." : "Wóz leży na boku. Jedno koło nadal powoli się obraca. Między skrzyniami leży ranny kupiec, a jego płaszcz nasiąkł krwią i czarnym deszczem.",
    choices: [
      c("Pomóż kupcowi", { when: () => !hasFlag("cartResolved"), to: "forest", effects: [{ flag: "cartResolved" }, { status: "Pomógł kupcowi" }, { rep: { good: 1 } }] }),
      c("Daj mu miksturę", { when: () => !hasFlag("cartResolved"), requireItem: ITEMS.potion, to: "forest", effects: [{ removeItem: ITEMS.potion }, { flag: "cartResolved" }, { status: "Pomógł kupcowi" }, { rep: { good: 2 } }] }),
      c("Przeszukaj wóz", { when: () => !hasFlag("cartResolved"), to: "forest", effects: [{ flag: "cartResolved" }, { status: "Okradł kupca" }, { gold: 12 }, { rep: { greed: 2 } }], kind: "danger" }),
      c("Dobij go", { when: () => !hasFlag("cartResolved"), to: "forest", effects: [{ flag: "cartResolved" }, { status: "Dobił kupca" }, { rep: { ash: 2 } }], kind: "danger" }),
      c("Zostaw go", { when: () => !hasFlag("cartResolved"), to: "forest", effects: [{ flag: "cartResolved" }, { status: "Zostawił kupca" }] }),
      c("Wróć", { to: "forest" }),
    ],
  },
  forestShrine: {
    title: "Stara kapliczka",
    art: "forest",
    text: () => "Na polanie stoi posąg kobiety trzymającej słońce w dłoniach. Twarz ma pękniętą, ale z pęknięcia sączy się ciepłe światło. Wokół posągu nie pada czarny deszcz.",
    choices: [
      c("Pomódl się", { to: "forest", effects: [{ heal: 4 }, { status: "Modlił się przy kapliczce" }, { rep: { good: 1 } }], kind: "good" }),
      c("Złóż 5 złota ofiary", { requireGold: 5, to: "forest", effects: [{ artifact: ARTIFACTS.dawn }, { bonus: 2 }, { rep: { good: 1 } }] }),
      c("Zostaw jedzenie dla podróżnych", { requireItem: ITEMS.bread, to: "forest", effects: [{ removeItem: ITEMS.bread }, { flag: "leftFoodAtShrine" }, { rep: { good: 1 } }] }),
      c("Zniszcz posąg", { to: "forest", effects: [{ flag: "destroyedShrine" }, { status: "Zniszczył kapliczkę" }, { gold: 10 }, { rep: { ash: 2 } }], kind: "danger" }),
      c("Zabierz srebrną ozdobę", { to: "forest", effects: [{ item: ITEMS.silverOrnament }, { flag: "stoleShrineOrnament" }, { rep: { greed: 2 } }], kind: "danger" }),
      c("Wróć", { to: "forest" }),
    ],
  },
  woodcutterHut: {
    title: "Chata drwala",
    art: "forest",
    text: () => "Chata jest pusta, ale na stole stoi miska jeszcze ciepłej zupy. Na ścianie ktoś wyrył paznokciami: „Las odda ciało, ale zabierze imię.”",
    choices: [
      c("Zjedz zupę", { to: "forest", when: () => hasStatus("Pomógł kupcowi") || hasStatus("Modlił się przy kapliczce"), effects: [{ heal: 4 }] }),
      c("Przeszukaj chatę", { to: "forest", unless: () => hasFlag("foundAxe"), effects: [{ weapon: "Siekiera drwala" }, { flag: "foundAxe" }] }),
      c("Sprawdź piwnicę", { to: "woodcutterGhost" }),
      c("Wróć", { to: "forest" }),
    ],
  },
  woodcutterGhost: {
    title: "Duch drwala",
    art: "forest",
    text: () => "W piwnicy stoi cień człowieka bez imienia. Opowiada o Bagiennym Przewoźniku i o ścieżce, której nie widzą żywi.",
    choices: [
      c("Wysłuchaj go do końca", { to: "forest", effects: [{ item: ITEMS.swampMap }, { rep: { good: 1 } }, { status: "Wysłuchał ducha drwala" }] }),
      c("Przemów do ducha", { requireClass: "mage", to: "forest", effects: [{ item: ITEMS.swampMap }, { artifact: ARTIFACTS.dawn }, { rep: { good: 1 } }] }),
      c("Odejdź", { to: "forest" }),
    ],
  },
  stoneCircle: {
    title: "Kamienny krąg",
    art: "forest",
    text: () => "Kamienie stoją w kręgu, którego środek jest suchy. Na jednym z nich widnieje znak Korony, starszy niż Valdorin.",
    choices: [
      c("Dotknij znaku", { to: "forest", effects: [{ artifact: ARTIFACTS.shard }, { rep: { ash: 2 } }, { status: "Ma Czarny Odłamek Korony" }], kind: "danger" }),
      c("Oczyść znak pochodnią", { requireItem: ITEMS.torch, to: "forest", effects: [{ rep: { good: 1 } }] }),
      c("Wróć", { to: "forest" }),
    ],
  },
  swampRisk: {
    title: "Bagna bez mapy",
    art: "swamp",
    text: () => "Bez mapy bagna nie są drogą, tylko pytaniem. Mgła zasłania kierunki, a w wodzie odbijają się twarze ludzi, których tu nie ma.",
    choices: [
      c("Idź dalej mimo ryzyka", { action: () => {
        if (Math.random() < 0.5) return startFight(ENEMIES.drowned, "swamp", "village");
        damage(5);
        renderScene("swamp");
      }, kind: "danger" }),
      c("Wróć po mapę", { to: "village" }),
    ],
  },
  swamp: {
    title: "Bagna Umarłych",
    art: "swamp",
    text: () => "Ziemia ugina się pod butami. Mgła wisi nisko. W wodzie odbijają się twarze ludzi, których nie ma obok ciebie.",
    choices: [
      c("Zatopiona chata zielarki", { to: "herbalist" }),
      c("Martwy prom", { to: "deadFerry" }),
      c("Wyspa kości", { to: "boneIsland" }),
      c("Błędne ogniki", { to: "willOWisps" }),
      c("Przejście do Krypty Milczących", { to: "cryptStart" }),
      c("Wróć do Ravenford", { to: "village" }),
    ],
  },
  herbalist: {
    title: "Zatopiona chata Mirny",
    art: "swamp",
    text: () => "Zielarka Mirna zna właściwości przeklętych roślin. Może przygotować Eliksir Czystej Krwi, jeśli przyniesiesz Wilcze Futro albo Bagienny Korzeń.",
    choices: [
      c("Oddaj Wilcze Futro", { requireItem: ITEMS.pelt, to: "swamp", effects: [{ removeItem: ITEMS.pelt }, { item: ITEMS.elixir }, { rep: { good: 1 } }] }),
      c("Oddaj Bagienny Korzeń", { requireItem: ITEMS.root, to: "swamp", effects: [{ removeItem: ITEMS.root }, { item: ITEMS.elixir }, { rep: { good: 1 } }] }),
      c("Kup miksturę - 5 złota", { action: () => buy(ITEMS.potion, 5, "herbalist") }),
      c("Okradnij chatę", { to: "swamp", effects: [{ item: ITEMS.potion }, { item: ITEMS.smallPotion }, { rep: { greed: 2 } }], kind: "danger" }),
      c("Wróć", { to: "swamp" }),
    ],
  },
  deadFerry: {
    title: "Martwy prom",
    art: "swamp",
    text: () => "Przy zgniłym pomoście stoi prom bez przewoźnika. Na burcie wydrapano: „Zapłać, wspomnij albo oddaj coś, czego żałujesz.”",
    choices: [
      c("Zapłać 3 złota", { requireGold: 3, to: "swamp", effects: [{ item: ITEMS.ferrymanMark }] }),
      c("Wspomnij kogoś zmarłego", { to: "swamp", effects: [{ status: "Wizja bagiennego przewoźnika" }, { rep: { good: 1 } }] }),
      c("Oddaj jeden przedmiot", { requireItem: ITEMS.silverOrnament, to: "swamp", effects: [{ removeItem: ITEMS.silverOrnament }, { rep: { good: 1 } }] }),
      c("Przepłyń samemu", { fight: { enemy: () => ENEMIES.drowned, win: "swamp" }, kind: "danger" }),
      c("Zniszcz prom", { to: "swamp", effects: [{ flag: "destroyedFerry" }, { rep: { ash: 1 } }], kind: "danger" }),
      c("Wróć", { to: "swamp" }),
    ],
  },
  boneIsland: {
    title: "Wyspa kości",
    art: "swamp",
    text: () => "Wyspa nie jest z ziemi. Tworzą ją setki kości splecionych korzeniami. Pośrodku stoi czarny kamień z wbitym mieczem.",
    choices: [
      c("Wyciągnij miecz", { to: "swamp", effects: [{ weapon: "Ostrze Kości" }, { rep: { ash: 1 } }], kind: "danger" }),
      c("Odczytaj napis", { to: "swamp", effects: [{ status: "Wie o rycerzu, który próbował zabić króla" }] }),
      c("Zostaw ofiarę", { requireItem: ITEMS.bread, to: "swamp", effects: [{ removeItem: ITEMS.bread }, { status: "Ochrona przed topielcem" }, { rep: { good: 1 } }] }),
      c("Wróć", { to: "swamp" }),
    ],
  },
  willOWisps: {
    title: "Błędne ogniki",
    art: "swamp",
    text: () => "W mgle pojawiają się trzy światła. Jedno jest niebieskie, drugie złote, trzecie blade jak kość. Każde porusza się w inną stronę.",
    choices: [
      c("Idź za niebieskim", { to: "herbalist" }),
      c("Idź za złotym", { to: "swamp", effects: [{ gold: 10 }, { damage: 3 }, { rep: { greed: 1 } }] }),
      c("Idź za bladym", { to: "lostChild" }),
      c("Zgaś światła pochodnią", { requireItem: ITEMS.torch, fight: { enemy: () => ENEMIES.forestWraith, win: "swamp" }, kind: "danger" }),
    ],
  },
  cryptStart: {
    title: "Krypta Milczących",
    art: "crypt",
    text: () => "Schody prowadzą pod ziemię tak głęboko, że światło dnia znika po kilku krokach. To miejsce nie jest opuszczone. Ono czeka.",
    choices: [
      c("Wejdź do Korytarza Bez Echa", { requireItem: ITEMS.torch, to: "cryptEcho" }),
      c("Wezwij iskrę światła", { requireClass: "mage", to: "cryptEcho" }),
      c("Wróć", { to: "village" }),
    ],
  },
  cryptEcho: {
    title: "Korytarz Bez Echa",
    art: "crypt",
    text: () => "Robisz krok. Nie słyszysz go. Upuszczasz mały kamień. Nie słyszysz nic. Nawet serce wydaje się cichsze.",
    choices: [
      c("Idź powoli", { to: "cryptHelmets", effects: [{ flag: "cryptRespect" }, { rep: { good: 1 } }] }),
      c("Biegnij przed siebie", { to: "cryptHelmets", effects: [{ damage: 5 }, { flag: "cryptNoisy" }] }),
      c("Krzyknij", { fight: { enemy: () => ENEMIES.skeleton, win: "cryptHelmets" }, effects: [{ flag: "cryptNoisy" }], kind: "danger" }),
      c("Użyj pochodni", { requireItem: ITEMS.torch, to: "cryptHelmets", effects: [{ status: "Odczytał ostrzeżenie krypty" }] }),
      c("Użyj magii", { requireClass: "mage", to: "whisperWell", effects: [{ flag: "foundWhisperWell" }] }),
    ],
  },
  cryptHelmets: {
    title: "Sala Pustych Hełmów",
    art: "crypt",
    text: () => "Na kamiennych stojakach leżą dziesiątki hełmów. Każdy jest rozcięty w tym samym miejscu. Na końcu sali stoi posąg rycerza bez twarzy.",
    choices: [
      c("Załóż jeden z hełmów", { to: "whisperWell", effects: [{ status: "Wizja ostatniej bitwy Valdorinu" }] }),
      c("Uklęknij przed posągiem", { to: "whisperWell", effects: [{ flag: "cryptRespect" }, { rep: { good: 1 } }] }),
      c("Zabierz hełm na sprzedaż", { fight: { enemy: () => ENEMIES.skeleton, win: "whisperWell" }, effects: [{ flag: "desecratedCrypt" }, { rep: { greed: 1 } }], kind: "danger" }),
      c("Przejdź dalej", { to: "whisperWell" }),
    ],
  },
  whisperWell: {
    title: "Studnia Szeptów",
    art: "crypt",
    text: () => "Studnia nie ma wody. Z jej wnętrza dochodzą szepty. Nie rozumiesz słów, ale głosy znają twoje myśli.",
    choices: [
      c("Wrzuć monetę", { requireGold: 1, to: "silverKeyRoom", effects: [{ status: "Zna wskazówkę do finału" }] }),
      c("Wypowiedz swoje imię", { to: "silverKeyRoom", effects: [{ item: ITEMS.bookNames }, { status: "Imię zapisane w Księdze Umarłych" }] }),
      c("Posłuchaj szeptów", { to: "silverKeyRoom", effects: [{ damage: 3 }, { status: "Usłyszał myśli zmarłych" }] }),
      c("Zatkaj studnię", { to: "silverKeyRoom", effects: [{ flag: "sealedWhisperWell" }, { rep: { ash: 1 } }], kind: "danger" }),
    ],
  },
  silverKeyRoom: {
    title: "Komnata Srebrnego Klucza",
    art: "crypt",
    text: () => "W ostatniej komnacie leży sarkofag strażnika. Na jego piersi spoczywa Srebrny Klucz. Nie jest zimny.",
    choices: [
      c("Podnieś Srebrny Klucz", { action: () => {
        addArtifact(ARTIFACTS.key);
        if (hasFlag("cryptRespect") && !hasFlag("desecratedCrypt")) addItem(ITEMS.amulet);
        if (hasFlag("desecratedCrypt") || hasFlag("cryptNoisy")) {
          return startFight(ENEMIES.cryptGuardian, completeArtifactEvent, "silverKeyRoom");
        }
        completeArtifactEvent();
      }, kind: "good" }),
    ],
  },
  fortGate: {
    title: "Brama Fortu Zdrajców",
    art: "fort",
    text: () => "Dwóch strażników celuje w ciebie kuszami. Nie wyglądają jak bandyci. Są zmęczeni i zmarznięci, ale trzymają broń pewnie.",
    choices: [
      c("Powiedz, że szukasz Pieczęci", { to: "cael", requireGood: 2 }),
      c("Skłam, że jesteś posłańcem", { to: "mapRoom", when: () => state.heroKey === "rogue" || state.heroKey === "outlaw", effects: [{ rep: { greed: 1 } }] }),
      c("Zaatakuj", { fight: { enemy: () => ENEMIES.mercenary, win: "mapRoom" }, kind: "danger" }),
      c("Pokaż Srebrny Klucz", { requireArtifact: ARTIFACTS.key, to: "mapRoom", effects: [{ status: "Strażnicy boją się Srebrnego Klucza" }] }),
      c("Wróć", { to: "village" }),
    ],
  },
  mapRoom: {
    title: "Sala map",
    art: "fort",
    text: () => "Na dużym stole leży mapa Valdorinu sprzed klątwy. Miasto jest na niej żywe, kolorowe, pełne mostów i ogrodów. Czerwony atrament prowadzi do sali tronowej.",
    choices: [
      c("Przestudiuj mapę", { to: "cael", effects: [{ flag: "studiedValdorinMap" }, { status: "Zna układ ruin" }] }),
      c("Zabierz mapę", { to: "cael", effects: [{ item: ITEMS.mapValdorin }, { rep: { greed: 1 } }] }),
      c("Zapytaj o czerwone znaki", { to: "cael", effects: [{ status: "Wie o fałszywych wejściach pałacu" }] }),
      c("Idź do Caela", { to: "cael" }),
    ],
  },
  cael: {
    title: "Dowódca Cael",
    art: "fort",
    text: () => "Cael mówi: „Każdy bohater wierzy, że jest silniejszy od tych, którzy przyszli przed nim. A potem Korona przemawia jego głosem.”",
    choices: [
      c("Przekonaj go, że nie chcesz władzy", { requireGood: 3, action: () => { addArtifact(ARTIFACTS.seal); setFlag("convincedCael"); addStatus("Przekonał Caela"); state.rep.good += 1; addNotification("Reputacja: dobro +1.", "good"); completeArtifactEvent(); }, kind: "good" }),
      c("Poproś o prawdę", { to: "cael", effects: [{ status: "Wie, że zdrajcy byli pierwszymi obrońcami" }] }),
      c("Pokaż Stary List Króla", { requireArtifact: ARTIFACTS.letter, action: () => { addArtifact(ARTIFACTS.seal); setFlag("convincedCael"); completeArtifactEvent(); }, kind: "good" }),
      c("Zaoferuj 20 złota", { requireGold: 20, action: () => { addArtifact(ARTIFACTS.seal); completeArtifactEvent(); } }),
      c("Wyzwij go na pojedynek", { fight: { enemy: () => ENEMIES.cael, win: () => { addArtifact(ARTIFACTS.seal); setFlag("killedCael"); addStatus("Zabił Caela"); state.rep.ash += 1; addNotification("Reputacja: popiół +1.", "danger"); completeArtifactEvent(); } }, kind: "danger" }),
      c("Spróbuj ukraść Pieczęć", { requireClass: "rogue", action: () => { addArtifact(ARTIFACTS.seal); state.rep.greed += 2; addNotification("Reputacja: chciwość +2.", "danger"); completeArtifactEvent(); }, kind: "danger" }),
      c("Wróć", { to: "village" }),
    ],
  },
  towerDoor: {
    title: "Drzwi bez cienia",
    art: "tower",
    text: () => "Wieża wyrasta z nagiej skały. Drzwi są zamknięte, ale nie mają zamka. Na drewnie pojawia się pytanie: „Po co idziesz do Korony?”",
    choices: [
      c("Aby ocalić królestwo", { to: "starLibrary" }),
      c("Aby zdobyć władzę", { to: "starLibrary", effects: [{ artifact: ARTIFACTS.shard }, { rep: { ash: 2 } }], kind: "danger" }),
      c("Aby poznać prawdę", { to: "starLibrary", effects: [{ flag: "truthIntent" }, { rep: { good: 1 } }], kind: "good" }),
      c("Aby zakończyć cierpienie", { to: "starLibrary", effects: [{ status: "Chce zakończyć cierpienie" }, { rep: { good: 1 } }] }),
      c("Nie wiem", { to: "starLibrary", effects: [{ status: "Widział los poprzednich śmiałków" }] }),
      c("Wróć", { to: "village" }),
    ],
  },
  starLibrary: {
    title: "Biblioteka gwiazd",
    art: "tower",
    text: () => "Księgi unoszą się w powietrzu jak ptaki. Na suficie świecą gwiazdy, ale układają się w mapę Valdorinu.",
    choices: [
      c("Przeczytaj księgę o Koronie", { to: "starLibrary", effects: [{ status: "Wie, że Korona wzmacnia pragnienia" }, { flag: "knowsCrownTruth" }] }),
      c("Przeczytaj księgę o Arvandzie", { to: "starLibrary", effects: [{ artifact: ARTIFACTS.letter }, { status: "Zna rozpacz Arvanda" }] }),
      c("Przeczytaj księgę o Elianie", { to: "starLibrary", effects: [{ flag: "readElianaBook" }, { status: "Wie, że Eliana jest uwięziona w Koronie" }], kind: "good" }),
      c("Zabierz Księgę Imion Umarłych", { to: "mirrors", effects: [{ item: ITEMS.bookNames }, { rep: { greed: 1 } }] }),
      c("Spal księgi", { fight: { enemy: () => ENEMIES.forestWraith, win: "mirrors" }, effects: [{ rep: { ash: 2 } }], kind: "danger" }),
      c("Przejdź do sali luster", { to: "mirrors" }),
    ],
  },
  mirrors: {
    title: "Sala luster",
    art: "tower",
    text: () => "Widzisz trzy odbicia. Jedno wygląda jak bohater. Drugie jak król. Trzecie jak potwór. Wszystkie mają twoje oczy.",
    choices: [
      c("Dotknij odbicia bohatera", { to: "crystalRoof", effects: [{ heal: 10 }, { rep: { good: 1 } }] }),
      c("Dotknij odbicia króla", { to: "crystalRoof", effects: [{ gold: 10 }, { rep: { greed: 1 } }] }),
      c("Dotknij odbicia potwora", { to: "crystalRoof", effects: [{ status: "Wola Zniszczenia" }, { rep: { ash: 1 } }], kind: "danger" }),
      c("Rozbij wszystkie lustra", { fight: { enemy: () => ({ name: "Cień Gracza", health: 1, attack: 1 }), win: "crystalRoof" }, kind: "danger" }),
      c("Zamknij oczy i przejdź dalej", { to: "crystalRoof" }),
    ],
  },
  crystalRoof: {
    title: "Dach pod nocnym słońcem",
    art: "tower",
    text: () => "Na szczycie wieży nie ma dachu. Nad tobą świeci słońce, choć wokół jest noc. Na kamiennym postumencie leży Kryształ Świtu.",
    choices: [
      c("Podnieś Kryształ Świtu", { action: () => {
        addArtifact(ARTIFACTS.crystal);
        state.maxHealth += 5;
        state.health += 5;
        addNotification("Maksymalne zdrowie wzrasta o 5.", "good");
        completeArtifactEvent();
      }, kind: "good" }),
    ],
  },
  nightAttack: {
    title: "Nocny atak na Ravenford",
    art: "village",
    text: () => "Kiedy wracasz do Ravenford, dzwon bije po raz drugi. Mgła już jest na placu. Z jej wnętrza wychodzą postacie z popiołu. Nie atakują od razu. Stoją i patrzą w okna domów.",
    choices: [
      c("Broń mieszkańców", { fight: { enemy: () => ENEMIES.ashKnight, win: () => { setFlag("nightAttackDone"); state.rep.good += 2; addNotification("Reputacja: dobro +2.", "good"); renderScene("village"); } }, kind: "danger" }),
      c("Ewakuuj dzieci do kaplicy", { to: "village", effects: [{ flag: "nightAttackDone" }, { rep: { good: 2 } }, { status: "Ewakuował dzieci do kaplicy" }], kind: "good" }),
      c("Szukaj kronikarza", { to: "edrinWell", effects: [{ flag: "nightAttackDone" }, { status: "Widział Edrina rozmawiającego z cieniem" }] }),
      c("Schowaj się w gospodzie", { to: "village", effects: [{ flag: "nightAttackDone" }, { rep: { greed: 1 } }] }),
      c("Użyj artefaktu", { to: "village", effects: [{ flag: "nightAttackDone" }, { damage: 3 }, { rep: { good: 1 } }] }),
    ],
  },
  edrinWell: {
    title: "Kronikarz przy studni",
    art: "village",
    text: () => "Edrin stoi przy starej studni. Wrzuca do niej kartki wyrwane ze swojej księgi. „Niektóre prawdy są jak choroba. Jeśli zapiszesz je zbyt dokładnie, ktoś kiedyś zechce je powtórzyć.”",
    choices: [
      c("Zażądaj wyjaśnień", { to: "village", effects: [{ flag: "edrinWellDone" }, { status: "Edrin wie o Łzie Eliany" }] }),
      c("Wyciągnij kartki ze studni", { to: "village", effects: [{ flag: "edrinWellDone" }, { artifact: ARTIFACTS.letter }, { status: "Ma fragment historii Korony" }] }),
      c("Pozwól mu spalić resztę", { to: "village", effects: [{ flag: "edrinWellDone" }, { flag: "edrinWillHelp" }] }),
      c("Oskarż go o zdradę", { to: "village", effects: [{ flag: "edrinWellDone" }, { status: "Edrin uciekł" }, { rep: { ash: 1 } }] }),
      c("Zapytaj o Elianę", { to: "village", effects: [{ flag: "edrinWellDone" }, { flag: "knowsElianaPath" }, { status: "Odblokował trop do Łzy Eliany" }], kind: "good" }),
    ],
  },
  ruinsGate: {
    title: "Brama Milczących",
    art: "ruins",
    text: () => "Valdorin nie jest martwy. Jest zatrzymany. Brama jest ogromna, bez zawiasów, zamka i klamki. Otwór w jej środku ma kształt Srebrnego Klucza.",
    choices: [
      c("Wejdź do ruin", { action: () => {
        if (!hasArtifact(ARTIFACTS.key)) return renderNotice("Brama Milczących", "Bez Srebrnego Klucza brama nie reaguje.", "village");
        if (!hasArtifact(ARTIFACTS.crystal)) return endingLost();
        if (!hasArtifact(ARTIFACTS.seal)) damage(8);
        renderScene("ruinsMarket");
      }, kind: "danger" }),
      c("Wróć", { to: "village" }),
    ],
  },
  ruinsMarket: {
    title: "Rynek bez głosów",
    art: "ruins",
    text: () => "Na rynku stoją setki ludzi z popiołu: sprzedawcy, dzieci, strażnicy, żebracy. Wszyscy zamarli w jednej chwili. Fontanna leje wodę, która zmienia się w pył.",
    choices: [
      c("Przeszukaj stragany", { to: "ruinsMarket", effects: [{ gold: 10 }, { rep: { greed: 1 } }] }),
      c("Dotknij jednej z postaci", { to: "ruinsMarket", effects: [{ status: "Wspomnienie ostatnich chwil miasta" }, { rep: { good: 1 } }] }),
      c("Wrzuć monetę do fontanny", { requireGold: 1, to: "ruinsMarket", effects: [{ heal: 10 }] }),
      c("Odczytaj tablicę ogłoszeń", { to: "ruinsMarket", effects: [{ status: "Wie o chorobie księżniczki" }, { flag: "knowsElianaIllness" }] }),
      c("Dom królewskiego medyka", { to: "medicHouse" }),
      c("Spalony teatr", { to: "burnedTheater" }),
      c("Pokój Eliany", { to: "elianaRoom" }),
      c("Most Popielnych Cieni", { to: "ashBridge" }),
    ],
  },
  medicHouse: {
    title: "Dom królewskiego medyka",
    art: "ruins",
    text: () => "Dom pachnie ziołami i starą chorobą. Na stole leży dziennik medyka. Ostatnie zdanie urywa się w połowie, jakby autor nagle zapomniał, kim jest.",
    choices: [
      c("Przeczytaj dziennik", { to: "medicHouse", effects: [{ item: ITEMS.medicDiary }, { flag: "knowsElianaIllness" }, { status: "Wie, że Eliana była śmiertelnie chora" }] }),
      c("Zabierz lekarstwa", { to: "medicHouse", effects: [{ item: ITEMS.potion }, { item: ITEMS.smallPotion }, { rep: { greed: 1 } }] }),
      c("Poszukaj piwnicy", { to: "medicHouse", when: () => hasArtifact(ARTIFACTS.crystal) && state.rep.good >= 5, effects: [{ artifact: ARTIFACTS.tear }, { status: "Zdobył Łzę Księżniczki Eliany" }], kind: "good" }),
      c("Spal dom", { to: "ruinsMarket", effects: [{ status: "Wola Zniszczenia" }, { flag: "burnedMedicHouse" }, { rep: { ash: 2 } }], kind: "danger" }),
      c("Wróć", { to: "ruinsMarket" }),
    ],
  },
  burnedTheater: {
    title: "Spalony teatr",
    art: "ruins",
    text: () => "W teatrze nadal siedzi publiczność z popiołu. Na scenie stoi aktorka z ręką uniesioną w dramatycznym geście. Kiedy wchodzisz, kurtyna sama się podnosi.",
    choices: [
      c("Obejrzyj przedstawienie", { to: "burnedTheater", effects: [{ status: "Zna alegorię upadku króla" }, { rep: { good: 1 } }] }),
      c("Wejdź na scenę", { to: "burnedTheater", effects: [{ status: "Odpowiedział na pytanie o cenę jednego życia" }] }),
      c("Przerwij przedstawienie", { fight: { enemy: () => ENEMIES.actor, win: "ruinsMarket" }, kind: "danger" }),
      c("Wróć", { to: "ruinsMarket" }),
    ],
  },
  elianaRoom: {
    title: "Pokój księżniczki Eliany",
    art: "ruins",
    text: () => "Pokój jest nietknięty. Na łóżku leży mała korona z białych kwiatów. Przy oknie stoi drewniany koń na biegunach. W powietrzu czuć lekarstwa i lawendę.",
    choices: [
      c("Przeczytaj list Eliany", { to: "elianaRoom", effects: [{ artifact: ARTIFACTS.letter }, { flag: "readElianaLetter" }, { rep: { good: 1 } }] }),
      c("Dotknij kwiatowej korony", { to: "elianaRoom", effects: [{ item: ITEMS.flowerCrown }, { flag: "canCallEliana" }] }),
      c("Zabierz zabawkę", { to: "elianaRoom", effects: [{ rep: { greed: 2 } }], kind: "danger" }),
      c("Zostaw własny przedmiot na łóżku", { requireItem: ITEMS.childAmulet, to: "elianaRoom", effects: [{ removeItem: ITEMS.childAmulet }, { artifact: ARTIFACTS.tear }, { rep: { good: 2 } }], kind: "good" }),
      c("Zawołaj Elianę po imieniu", { to: "elianaRoom", when: () => hasFlag("readElianaBook") || hasFlag("knowsElianaPath") || hasFlag("readElianaLetter"), effects: [{ artifact: ARTIFACTS.tear }, { rep: { good: 2 } }], kind: "good" }),
      c("Wróć", { to: "ruinsMarket" }),
    ],
  },
  ashBridge: {
    title: "Most Popielnych Cieni",
    art: "ruins",
    text: () => "Idziesz główną aleją Valdorinu. Po obu stronach stoją cienie mieszkańców. Nie zatrzymują cię. Nie błagają. Tylko patrzą.",
    choices: [
      c("Idź prosto do pałacu", { to: "crownHall" }),
      c("Przemów do cieni", { to: "crownHall", effects: [{ flag: "shadowsSupport" }, { rep: { good: 1 } }] }),
      c("Uklęknij i poproś o przebaczenie", { requireGood: 5, to: "crownHall", effects: [{ flag: "shadowsSupport" }, { heal: 10 }], kind: "good" }),
      c("Rozkaż cieniom się usunąć", { to: "crownHall", effects: [{ rep: { ash: 1 } }], kind: "danger" }),
      c("Użyj Kryształu Świtu", { requireArtifact: ARTIFACTS.crystal, to: "crownHall", effects: [{ heal: 10 }, { damage: 2 }] }),
    ],
  },
  crownHall: {
    title: "Sala Korony",
    art: "crown",
    text: () => "Sala tronowa jest ogromna i martwa. Na tronie siedzi postać w spalonej zbroi. Na jej głowie spoczywa Korona Popiołu. Król pyta: „Przyszedłeś mnie osądzić, po władzę, czy jak wszyscy udajesz bohatera?”",
    choices: [
      c("Użyj Łzy Eliany", { when: () => hasArtifact(ARTIFACTS.tear), ending: () => crownFinalChoice("tear"), kind: "good" }),
      c("Przebacz królowi", { ending: () => crownFinalChoice("forgive"), kind: "good" }),
      c("Zniszcz Koronę", { ending: () => crownFinalChoice("destroy"), kind: "danger" }),
      c("Zamknij Koronę ponownie", { ending: () => crownFinalChoice("seal") }),
      c("Załóż Koronę", { ending: () => crownFinalChoice("wear"), kind: "danger" }),
      c("Zaatakuj Popielnego Króla", { ending: () => crownFinalChoice("fight"), kind: "danger" }),
    ],
  },
};

function setupAsh() {
  const canvas = document.querySelector("#ashCanvas");
  const ctx = canvas.getContext("2d");
  const flakes = Array.from({ length: 90 }, () => ({
    x: Math.random(),
    y: Math.random(),
    r: Math.random() * 2 + 0.5,
    s: Math.random() * 0.35 + 0.12,
  }));

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "rgba(239, 232, 220, 0.55)";
    flakes.forEach((flake) => {
      flake.y += flake.s / canvas.height;
      flake.x += Math.sin(flake.y * 12) * 0.0008;
      if (flake.y > 1) flake.y = -0.02;
      ctx.beginPath();
      ctx.arc(flake.x * canvas.width, flake.y * canvas.height, flake.r, 0, Math.PI * 2);
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }

  window.addEventListener("resize", resize);
  resize();
  draw();
}

function setMusicMood(mood) {
  music.mood = mood;
  if (!music.running || !music.oscillators.length || !music.context) return;
  const now = music.context.currentTime;
  getDroneFrequencies().forEach((frequency, index) => {
    const oscillator = music.oscillators[index];
    if (oscillator) oscillator.frequency.linearRampToValueAtTime(frequency, now + 1.8);
  });
}

function getDroneFrequencies() {
  const moods = {
    village: [55, 82.41, 110],
    forest: [49, 73.42, 98],
    swamp: [46.25, 69.3, 92.5],
    crypt: [41.2, 61.74, 82.41],
    fort: [55, 73.42, 110],
    tower: [65.41, 98, 130.81],
    ruins: [43.65, 65.41, 87.31],
    crown: [38.89, 58.27, 77.78],
  };
  return moods[music.mood] || moods.village;
}

function toggleMusic() {
  if (!state.heroKey) {
    renderNotice("Muzyka", "Muzyka włączy się po wyborze klasy postaci.", "start");
    return;
  }
  if (music.running) {
    stopMusic();
    return;
  }
  music.starting = false;
  startMusic({ quiet: false, fromButton: true });
}

async function startMusic(options = {}) {
  const { quiet = false, fromButton = false } = options;
  if (music.running) return true;
  if (music.starting && !fromButton) return false;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) {
    if (!quiet) renderNotice("Muzyka", "Ta przeglądarka nie obsługuje Web Audio API.");
    return false;
  }

  music.starting = true;
  if (!music.context) {
    music.context = new AudioContext();
  }
  try {
    await music.context.resume();
  } catch {
    music.starting = false;
    if (!quiet) renderNotice("Muzyka", "Chrome zablokował automatyczne audio. Kliknij dowolny wybór w grze albo przycisk muzyki.");
    return false;
  }

  if (music.context.state !== "running") {
    music.starting = false;
    if (!quiet) renderNotice("Muzyka", "Chrome zablokował automatyczne audio. Kliknij dowolny wybór w grze albo przycisk muzyki.");
    return false;
  }

  const context = music.context;
  music.master = context.createGain();
  music.master.gain.setValueAtTime(0.0001, context.currentTime);
  music.master.gain.exponentialRampToValueAtTime(0.9, context.currentTime + 0.7);
  music.master.connect(context.destination);

  music.delay = context.createDelay(2.5);
  const delayGain = context.createGain();
  music.delay.delayTime.value = 0.42;
  delayGain.gain.value = 0.42;
  music.delay.connect(delayGain);
  delayGain.connect(music.master);

  music.oscillators = getDroneFrequencies().map((frequency, index) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const filter = context.createBiquadFilter();
    oscillator.type = index === 1 ? "triangle" : "sine";
    oscillator.frequency.value = frequency;
    filter.type = "lowpass";
    filter.frequency.value = 420 + index * 90;
    gain.gain.value = index === 0 ? 0.34 : index === 1 ? 0.26 : 0.2;
    oscillator.connect(filter);
    filter.connect(gain);
    gain.connect(music.master);
    oscillator.start();
    return oscillator;
  });

  startNoiseLayer();
  music.running = true;
  music.starting = false;
  playChime(true);
  playPulse();
  scheduleChime();
  updateAudioButton();
  return true;
}

function startNoiseLayer() {
  const context = music.context;
  const buffer = context.createBuffer(1, context.sampleRate * 2, context.sampleRate);
  const data = buffer.getChannelData(0);
  for (let index = 0; index < data.length; index += 1) {
    data[index] = (Math.random() * 2 - 1) * 0.16;
  }

  const source = context.createBufferSource();
  const filter = context.createBiquadFilter();
  const gain = context.createGain();
  source.buffer = buffer;
  source.loop = true;
  filter.type = "lowpass";
  filter.frequency.value = 700;
  gain.gain.value = 0.09;
  source.connect(filter);
  filter.connect(gain);
  gain.connect(music.master);
  source.start();
  music.noise = source;
}

function scheduleChime() {
  if (!music.running || !music.context) return;
  const delay = 1800 + Math.random() * 2600;
  const timer = window.setTimeout(() => {
    playChime();
    if (Math.random() < 0.65) playPulse();
    scheduleChime();
  }, delay);
  music.timers.push(timer);
}

function playChime(forceBright = false) {
  const context = music.context;
  const scale = {
    village: [220, 261.63, 329.63],
    forest: [196, 246.94, 293.66],
    swamp: [174.61, 220, 261.63],
    crypt: [164.81, 196, 246.94],
    fort: [196, 261.63, 293.66],
    tower: [261.63, 329.63, 392],
    ruins: [174.61, 220, 293.66],
    crown: [155.56, 196, 233.08],
  }[music.mood] || [220, 261.63, 329.63];
  const frequency = scale[Math.floor(Math.random() * scale.length)] * (forceBright ? 2 : 1);
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = forceBright ? "triangle" : "sine";
  oscillator.frequency.value = frequency;
  gain.gain.setValueAtTime(0.0001, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(forceBright ? 0.55 : 0.34, context.currentTime + 0.05);
  gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + (forceBright ? 1.2 : 1.7));
  oscillator.connect(gain);
  gain.connect(music.master);
  if (music.delay) gain.connect(music.delay);
  oscillator.start();
  oscillator.stop(context.currentTime + (forceBright ? 1.3 : 1.8));
}

function playPulse() {
  const context = music.context;
  const roots = getDroneFrequencies();
  const frequency = roots[roots.length - 1] * 2;
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  const filter = context.createBiquadFilter();
  oscillator.type = "triangle";
  oscillator.frequency.value = frequency;
  filter.type = "lowpass";
  filter.frequency.value = 980;
  gain.gain.setValueAtTime(0.0001, context.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.28, context.currentTime + 0.04);
  gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + 0.5);
  oscillator.connect(filter);
  filter.connect(gain);
  gain.connect(music.master);
  oscillator.start();
  oscillator.stop(context.currentTime + 0.55);
}

function stopMusic() {
  if (!music.context || !music.running) return;
  const now = music.context.currentTime;
  music.master.gain.exponentialRampToValueAtTime(0.0001, now + 0.6);
  music.timers.forEach((timer) => window.clearTimeout(timer));
  music.timers = [];
  window.setTimeout(() => {
    music.oscillators.forEach((oscillator) => {
      try {
        oscillator.stop();
      } catch {
        // Oscillator mógł już zostać zatrzymany.
      }
    });
    if (music.noise) {
      try {
        music.noise.stop();
      } catch {
        // Warstwa szumu mogła już zostać zatrzymana.
      }
    }
    music.oscillators = [];
    music.noise = null;
    music.master?.disconnect();
    music.master = null;
    music.delay = null;
  }, 700);
  music.running = false;
  music.starting = false;
  updateAudioButton();
}

function updateAudioButton() {
  els.audioBtn.classList.toggle("is-playing", music.running);
  els.audioBtn.textContent = music.running ? "♫" : "♪";
  els.audioBtn.title = music.running ? "Wyłącz muzykę" : "Włącz muzykę";
}

els.audioBtn.addEventListener("click", toggleMusic);
els.restartBtn.addEventListener("click", newGame);
setupAsh();
newGame();

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js").catch(() => {
      // Gra działa także bez service workera, np. po otwarciu lokalnego pliku.
    });
  });
}
