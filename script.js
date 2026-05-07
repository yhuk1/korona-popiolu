const ITEMS = {
  potion: "Mikstura leczenia",
  torch: "Pochodnia",
  lockpicks: "Wytrychy",
  pelt: "Wilcze futro",
  amulet: "Stary amulet",
  map: "Mapa bagien",
  elixir: "Eliksir czystej krwi",
  tools: "Skrzynia narzędzi kowala",
  ring: "Żelazny pierścień",
  letter: "Stary list króla",
};

const ARTIFACTS = {
  key: "Srebrny Klucz",
  crystal: "Kryształ Świtu",
  seal: "Pieczęć Starego Króla",
};

const WEAPONS = {
  "Stary miecz": 3,
  "Zardzewiały miecz": 3,
  "Sztylet i wytrychy": 2,
  "Iskra many": 1,
  "Stalowy miecz": 5,
  "Kostur iskier": 4,
};

const backgrounds = {
  start: "linear-gradient(135deg, #211b18, #3b322b 45%, #15191a)",
  village: "linear-gradient(135deg, #2a211d, #4c3b2f 48%, #111819)",
  forest: "linear-gradient(135deg, #071411, #1f332b 50%, #110f0d)",
  swamp: "linear-gradient(135deg, #10201d, #344333 48%, #12110e)",
  crypt: "linear-gradient(135deg, #111114, #32323a 44%, #0b0b0d)",
  fort: "linear-gradient(135deg, #271815, #5a3027 45%, #151313)",
  tower: "linear-gradient(135deg, #101820, #314655 46%, #19151f)",
  ruins: "linear-gradient(135deg, #1a1a1a, #5a5750 45%, #0e0d0c)",
  crown: "linear-gradient(135deg, #100b09, #5b341f 45%, #0d0d0d)",
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
  choices: document.querySelector("#choices"),
  heroClass: document.querySelector("#heroClass"),
  health: document.querySelector("#health"),
  gold: document.querySelector("#gold"),
  attack: document.querySelector("#attack"),
  weapon: document.querySelector("#weapon"),
  inventory: document.querySelector("#inventory"),
  artifacts: document.querySelector("#artifacts"),
  statuses: document.querySelector("#statuses"),
  restartBtn: document.querySelector("#restartBtn"),
};

function newGame() {
  state = {
    heroClass: "-",
    maxHealth: 0,
    health: 0,
    gold: 0,
    baseAttack: 0,
    weapon: "-",
    inventory: [],
    artifacts: [],
    statuses: [],
    reputation: 0,
    nextAttackBonus: 0,
    scene: "start",
    enemy: null,
    afterFight: null,
  };
  renderStart();
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

function addItem(item) {
  state.inventory.push(item);
}

function removeItem(item) {
  const index = state.inventory.indexOf(item);
  if (index === -1) return false;
  state.inventory.splice(index, 1);
  return true;
}

function addStatus(status) {
  if (!state.statuses.includes(status)) state.statuses.push(status);
}

function addArtifact(artifact) {
  if (!state.artifacts.includes(artifact)) state.artifacts.push(artifact);
}

function spend(amount) {
  if (state.gold < amount) return false;
  state.gold -= amount;
  return true;
}

function heal(amount) {
  state.health = Math.min(state.maxHealth, state.health + amount);
}

function hurt(amount) {
  state.health -= amount;
  if (state.health <= 0) {
    state.health = 0;
    renderEnding("Koniec wyprawy", "Twoja wyprawa kończy się w popiele. Valdorin czeka na kolejnego śmiałka.");
    return true;
  }
  return false;
}

function choice(label, action, kind = "") {
  return { label, action, kind };
}

function render(sceneName, text, choices, image = "start") {
  state.scene = image;
  document.body.style.setProperty("--page-art", `url("${sceneArt[image] || sceneArt.start}")`);
  els.sceneName.textContent = sceneName;
  els.storyText.innerHTML = text.split("\n").map((p) => `<p>${p}</p>`).join("");
  els.choices.innerHTML = "";

  choices.forEach((item) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = item.label;
    if (item.kind) button.classList.add(item.kind);
    button.addEventListener("click", item.action);
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

function createHero(heroClass) {
  if (heroClass === "Wojownik") {
    Object.assign(state, { heroClass, maxHealth: 35, health: 35, gold: 8, baseAttack: 6, weapon: "Stary miecz", inventory: [ITEMS.potion] });
  } else if (heroClass === "Łotrzyk") {
    Object.assign(state, { heroClass, maxHealth: 28, health: 28, gold: 15, baseAttack: 4, weapon: "Sztylet i wytrychy", inventory: [ITEMS.lockpicks, ITEMS.potion] });
  } else {
    Object.assign(state, { heroClass, maxHealth: 24, health: 24, gold: 10, baseAttack: 3, weapon: "Iskra many", inventory: [ITEMS.potion] });
  }
  renderPrologue();
}

function renderStart() {
  render(
    "Wybór postaci",
    "Królestwo Valdorin umiera powoli. Pola jałowieją, lasy chorują, a z mgły wychodzą potwory.\nWybierz wędrowca, który ruszy po trzy artefakty potrzebne do otwarcia drogi ku Koronie Popiołu.",
    [
      choice("Wojownik", () => createHero("Wojownik")),
      choice("Łotrzyk", () => createHero("Łotrzyk")),
      choice("Uczeń Maga", () => createHero("Uczeń Maga")),
    ],
    "start",
  );
}

function renderPrologue() {
  render(
    "Gospoda w Ravenford",
    "Budzisz się przy dźwięku dzwonu alarmowego. Przez okno widzisz, jak z lasu nadciąga gęsta, popielata mgła.\nStary kronikarz patrzy prosto na ciebie. „To się zaczęło. Korona Popiołu znowu woła.”",
    [
      choice("Porozmawiaj z kronikarzem", () => {
        if (!has(ITEMS.torch)) addItem(ITEMS.torch);
        addStatus("Zna zadanie główne");
        renderMessage("Kronikarz", "Srebrny Klucz spoczywa w Krypcie Milczących. Pieczęć Króla zabrali zdrajcy z północnego fortu. Kryształ Świtu ukrył ostatni mag na szczycie swojej wieży.\nOtrzymujesz pochodnię.", renderVillage, "village");
      }, "good"),
      choice("Wyjdź przed gospodę", renderVillage),
      choice("Przeszukaj swój pokój", () => {
        if (!has(ITEMS.amulet)) addItem(ITEMS.amulet);
        renderMessage("Twój pokój", "Pod deską łóżka znajdujesz Stary amulet. Może ochronić przed jedną pułapką.", renderPrologue);
      }),
      choice("Zapytaj karczmarza", () => renderMessage("Plotki", "Karczmarz mówi, że bagna najlepiej przejść z mapą, a fort słucha tylko złota albo honoru.", renderPrologue)),
    ],
    "village",
  );
}

function renderMessage(title, text, back, image = state.scene) {
  render(title, text, [choice("Dalej", back)], image);
}

function renderVillage() {
  render(
    "Wioska Ravenford",
    "Ravenford drży pod czarnym deszczem. To ostatnie ciepłe miejsce przed drogą. Z rynku prowadzą ścieżki do lasu, bagien, fortu, wieży i ruin.",
    [
      choice("Sklep", renderShop),
      choice("Kowal", renderBlacksmith),
      choice("Mroczny Las", renderForest),
      choice("Bagna Umarłych", enterSwamp),
      choice("Krypta Milczących", renderCrypt),
      choice("Fort Zdrajców", renderFort),
      choice("Wieża Astromanty", renderTower),
      choice("Ruiny Valdorinu", renderRuins, "danger"),
    ],
    "village",
  );
}

function renderShop() {
  const discount = state.statuses.includes("Pomógł kupcowi");
  const price = (value) => (discount ? Math.max(1, Math.floor(value / 2)) : value);
  const buy = (item, cost) => {
    if (!spend(cost)) return renderMessage("Sklep", "Nie masz tyle złota.", renderShop, "village");
    addItem(item);
    renderMessage("Sklep", `Kupujesz: ${item}.`, renderShop, "village");
  };
  render(
    "Sklep",
    discount ? "Kupiec pamięta twoją pomoc i obniża ceny." : "Kupiec sprzedaje wszystko, co może jeszcze ocalić życie.",
    [
      choice(`Mikstura - ${price(5)} złota`, () => buy(ITEMS.potion, price(5))),
      choice(`Pochodnia - ${price(3)} złota`, () => buy(ITEMS.torch, price(3))),
      choice(`Mapa bagien - ${price(8)} złota`, () => buy(ITEMS.map, price(8))),
      choice(`Wytrychy - ${price(10)} złota`, () => buy(ITEMS.lockpicks, price(10))),
      choice("Wróć", renderVillage),
    ],
    "village",
  );
}

function renderBlacksmith() {
  const discount = state.statuses.includes("Pomógł kowalowi");
  const swordCost = discount ? 10 : 15;
  const repairCost = discount ? 4 : 6;
  render(
    "Kowal",
    "Kowal ociera sadzę z twarzy. Prosi o skrzynię narzędzi z Mrocznego Lasu. W zamian obiecuje zniżki i Żelazny pierścień.",
    [
      choice(`Kup Stalowy miecz - ${swordCost} złota`, () => {
        if (!spend(swordCost)) return renderMessage("Kowal", "Nie masz tyle złota.", renderBlacksmith, "village");
        state.weapon = "Stalowy miecz";
        renderMessage("Kowal", "Nowa broń dobrze leży w dłoni.", renderBlacksmith, "village");
      }),
      choice(`Napraw broń - ${repairCost} złota`, () => {
        if (!spend(repairCost)) return renderMessage("Kowal", "Nie masz tyle złota.", renderBlacksmith, "village");
        state.weapon = "Zardzewiały miecz";
        renderMessage("Kowal", "Stara stal znowu gryzie.", renderBlacksmith, "village");
      }),
      choice("Oddaj skrzynię narzędzi", () => {
        if (!removeItem(ITEMS.tools)) return renderMessage("Kowal", "Nie masz jego skrzyni.", renderBlacksmith, "village");
        addStatus("Pomógł kowalowi");
        addItem(ITEMS.ring);
        renderMessage("Kowal", "Kowal daje ci Żelazny pierścień i obiecuje zniżki.", renderBlacksmith, "village");
      }, "good"),
      choice("Wróć", renderVillage),
    ],
    "village",
  );
}

function renderForest() {
  render(
    "Mroczny Las",
    "Drzewa są czarne, jakby spalone od środka. Na ziemi widzisz świeże ślady krwi prowadzące do przewróconego wozu.",
    [
      choice("Zbadaj przewrócony wóz", renderCart),
      choice("Idź za śladami krwi", () => {
        if (state.statuses.includes("Pokonał Wilka Cienia")) return renderMessage("Las", "Wilk już tu nie poluje.", renderForest, "forest");
        startFight({ name: "Wilk Cienia", health: 12, attack: 3, gold: 4, item: ITEMS.pelt }, () => {
          addStatus("Pokonał Wilka Cienia");
          renderMessage("Las", "Pokonujesz Wilka Cienia i zdobywasz Wilcze futro.", renderForest, "forest");
        });
      }, "danger"),
      choice("Wejdź między drzewa", () => {
        if (!has(ITEMS.tools) && !state.statuses.includes("Pomógł kowalowi")) {
          addItem(ITEMS.tools);
          renderMessage("Las", "Między korzeniami znajdujesz skrzynię narzędzi kowala.", renderForest, "forest");
        } else {
          renderMessage("Las", "Pośród drzew nie znajdujesz nic nowego.", renderForest, "forest");
        }
      }),
      choice("Stara kapliczka", renderShrine),
      choice("Wróć", renderVillage),
    ],
    "forest",
  );
}

function renderCart() {
  if (state.statuses.includes("Los kupca rozstrzygnięty")) return renderMessage("Wóz", "Przewrócony wóz pustoszeje w deszczu.", renderForest, "forest");
  render(
    "Zniszczony wóz",
    "Przy wozie leży ranny kupiec. Oddycha płytko, a jego sakwa leży otwarta w błocie.",
    [
      choice("Pomóż kupcowi", () => {
        addStatus("Los kupca rozstrzygnięty");
        if (removeItem(ITEMS.potion)) {
          addStatus("Pomógł kupcowi");
          renderMessage("Kupiec", "Oddajesz miksturę. Kupiec przeżyje, a sklep w Ravenford zapamięta twoją pomoc.", renderForest, "forest");
        } else {
          if (hurt(3)) return;
          addStatus("Pomógł kupcowi");
          renderMessage("Kupiec", "Dźwigasz kupca do drogi i tracisz 3 zdrowia. Kupiec przeżyje.", renderForest, "forest");
        }
      }, "good"),
      choice("Przeszukaj wóz", () => {
        addStatus("Los kupca rozstrzygnięty");
        addStatus("Okradł kupca");
        state.gold += 12;
        renderMessage("Wóz", "Znajdujesz 12 złota. Las jakby robi się cichszy.", renderForest, "forest");
      }, "danger"),
      choice("Zostaw go", () => {
        addStatus("Los kupca rozstrzygnięty");
        renderMessage("Wóz", "Odchodzisz. Kupiec nie zawoła drugi raz.", renderForest, "forest");
      }),
    ],
    "forest",
  );
}

function renderShrine() {
  render(
    "Stara kapliczka",
    "Zniszczony posąg bogini świtu patrzy bez twarzy.",
    [
      choice("Pomódl się", () => {
        if (hasArtifact(ARTIFACTS.crystal)) addStatus("Modlił się z Kryształem Świtu");
        renderMessage("Kapliczka", hasArtifact(ARTIFACTS.crystal) ? "Kryształ odpowiada ciepłem. Ten gest może mieć znaczenie." : "Widzisz krótką wizję słońca nad martwym miastem.", renderForest, "forest");
      }, "good"),
      choice("Złóż 5 złota", () => {
        if (!spend(5)) return renderMessage("Kapliczka", "Nie masz tyle złota.", renderShrine, "forest");
        state.nextAttackBonus += 2;
        addStatus("Błogosławieństwo kapliczki");
        renderMessage("Kapliczka", "Następna walka zacznie się z premią +2 do ataku.", renderForest, "forest");
      }),
      choice("Zniszcz posąg", () => {
        if (!state.statuses.includes("Zniszczył kapliczkę")) {
          state.gold += 10;
          addStatus("Zniszczył kapliczkę");
        }
        renderMessage("Kapliczka", "W podstawie było 10 złota. W finale król będzie silniejszy.", renderForest, "forest");
      }, "danger"),
      choice("Wróć", renderForest),
    ],
    "forest",
  );
}

function enterSwamp() {
  if (!has(ITEMS.map) && Math.random() < 0.5) {
    if (hurt(5)) return;
    return startFight({ name: "Topielec", health: 16, attack: 4, gold: 7 }, () => {
      poisonAfterSwamp();
      renderSwamp();
    });
  }
  renderSwamp();
}

function renderSwamp() {
  render(
    "Bagna Umarłych",
    "Bagna oddychają jak żywa istota. Z błota wystają stare hełmy, kości i resztki sztandarów.",
    [
      choice("Idź za śladami kamieni", renderCrypt),
      choice("Przejdź przez mgłę", () => startFight({ name: "Topielec", health: 16, attack: 4, gold: 7 }, () => {
        poisonAfterSwamp();
        renderSwamp();
      }), "danger"),
      choice("Zatopiona chata", renderHerbalist),
      choice("Wróć do lasu", renderForest),
    ],
    "swamp",
  );
}

function poisonAfterSwamp() {
  if (!has(ITEMS.elixir)) hurt(3);
}

function renderHerbalist() {
  render(
    "Zielarka",
    "W zatopionej chacie zielarka miesza czarny napar. Wie, jak przeżyć truciznę Krypty Milczących.",
    [
      choice("Kup miksturę - 5 złota", () => {
        if (!spend(5)) return renderMessage("Zielarka", "Nie masz tyle złota.", renderHerbalist, "swamp");
        addItem(ITEMS.potion);
        renderMessage("Zielarka", "Kupujesz miksturę.", renderHerbalist, "swamp");
      }),
      choice("Oddaj Wilcze futro", () => {
        if (!removeItem(ITEMS.pelt)) return renderMessage("Zielarka", "Nie masz Wilczego futra.", renderHerbalist, "swamp");
        addItem(ITEMS.elixir);
        addStatus("Uratował zielarkę");
        renderMessage("Zielarka", "Otrzymujesz Eliksir czystej krwi.", renderSwamp, "swamp");
      }, "good"),
      choice("Okradnij chatę", () => {
        if (!state.statuses.includes("Okradł zielarkę")) {
          addItem(ITEMS.potion);
          addItem(ITEMS.potion);
          addStatus("Okradł zielarkę");
          state.maxHealth = Math.max(1, state.maxHealth - 5);
          state.health = Math.min(state.health, state.maxHealth);
        }
        renderMessage("Zielarka", "Zdobywasz dwie mikstury, ale klątwa obniża twoje maksymalne zdrowie o 5.", renderSwamp, "swamp");
      }, "danger"),
      choice("Wróć", renderSwamp),
    ],
    "swamp",
  );
}

function renderCrypt() {
  if (!has(ITEMS.torch) && state.heroClass !== "Uczeń Maga") return renderMessage("Krypta Milczących", "Krypta jest zbyt ciemna. Potrzebujesz pochodni albo magii.", renderVillage, "crypt");
  if (state.health <= 5) return renderMessage("Krypta Milczących", "Jesteś zbyt słaby, by zejść do krypty.", renderVillage, "crypt");
  render(
    "Krypta Milczących",
    "Schodzisz po kamiennych stopniach. Na końcu korytarza widzisz kamienne drzwi z napisem: „Wejdzie ten, kto nie boi się ciszy.”",
    [
      choice("Wejdź bez słowa", cryptReward, "good"),
      choice("Krzyknij swoje imię", () => startFight({ name: "Szkielet Wartownik", health: 18, attack: 5, gold: 9, undead: true }, cryptReward), "danger"),
      choice("Uderz w drzwi", () => {
        if (hurt(4)) return;
        startFight({ name: "Szkielet Wartownik", health: 18, attack: 5, gold: 9, undead: true }, cryptReward);
      }, "danger"),
      choice("Użyj Starego amuletu", () => {
        if (!removeItem(ITEMS.amulet)) return renderMessage("Krypta", "Nie masz Starego amuletu.", renderCrypt, "crypt");
        cryptReward();
      }),
      choice("Wycofaj się", renderVillage),
    ],
    "crypt",
  );
}

function cryptReward() {
  if (!hasArtifact(ARTIFACTS.key)) {
    addArtifact(ARTIFACTS.key);
    state.gold += 10;
    return renderMessage("Srebrny Klucz", "Na sarkofagu leży klucz z jasnego metalu. Zdobywasz Srebrny Klucz i 10 złota.", renderVillage, "crypt");
  }
  renderMessage("Krypta", "Grobowiec jest już pusty.", renderVillage, "crypt");
}

function renderFort() {
  render(
    "Fort Zdrajców",
    "Fort stoi na wzgórzu jak złamany ząb. Potomkowie zdrajców ukryli tu Pieczęć Starego Króla.",
    [
      choice("Podejdź do bramy", () => {
        if (state.statuses.includes("Pomógł kupcowi")) return renderCommander();
        startFight({ name: "Najemnik Zdrajców", health: 20, attack: 5, gold: 12 }, renderCommander);
      }, "danger"),
      choice("Zakradnij się przez mur", () => {
        if (has(ITEMS.lockpicks) || state.heroClass === "Łotrzyk") {
          state.gold += 8;
          return renderMessage("Fort", "Przechodzisz po cichu i znajdujesz 8 złota.", renderCommander, "fort");
        }
        renderMessage("Fort", "Bez wytrychów nie otworzysz bocznego przejścia.", renderFort, "fort");
      }),
      choice("Obserwuj strażników", () => renderMessage("Fort", "Strażnicy boją się dowódcy bardziej niż ciebie. Nie wszyscy wierzą, że Pieczęć powinna zostać w forcie.", renderFort, "fort")),
      choice("Wróć", renderVillage),
    ],
    "fort",
  );
}

function renderCommander() {
  if (hasArtifact(ARTIFACTS.seal)) return renderMessage("Fort", "Fort nie ma już czego ci dać.", renderVillage, "fort");
  render(
    "Dowódca fortu",
    "„Korona nie daje się zniszczyć. Ona wybiera. My tylko opóźniamy kolejnego głupca.”",
    [
      choice("Zażądaj Pieczęci", () => startFight({ name: "Dowódca Zdrajców", health: 28, attack: 7, gold: 18 }, sealReward), "danger"),
      choice("Przekonaj dowódcę", () => {
        if (state.statuses.includes("Pomógł kupcowi") || state.statuses.includes("Błogosławieństwo kapliczki")) return sealReward();
        renderMessage("Dowódca", "Nie masz dowodu, że różnisz się od poprzednich śmiałków.", renderCommander, "fort");
      }, "good"),
      choice("Zaatakuj", () => startFight({ name: "Dowódca Zdrajców", health: 28, attack: 7, gold: 18 }, sealReward), "danger"),
      choice("Zapłać 20 złota", () => {
        if (!spend(20)) return renderMessage("Dowódca", "Nie masz tyle złota.", renderCommander, "fort");
        sealReward();
      }),
    ],
    "fort",
  );
}

function sealReward() {
  addArtifact(ARTIFACTS.seal);
  renderMessage("Pieczęć Starego Króla", "Dowódca oddaje Pieczęć Starego Króla.", renderVillage, "fort");
}

function renderTower() {
  if (!state.artifacts.length) return renderMessage("Wieża Astromanty", "Runy wieży pozostają zimne. Musisz najpierw zdobyć choć jeden artefakt.", renderVillage, "tower");
  render(
    "Wieża Astromanty",
    "Wieża jest tak wysoka, że jej szczyt ginie w chmurach. Srebrne znaki zapalają się jeden po drugim.",
    [
      choice("Wejdź do wieży", renderMirrors),
      choice("Zbadaj runy", () => renderMessage("Runy", state.heroClass === "Uczeń Maga" ? "Odczytujesz: „Świt nie jest światłem. Świt jest wyborem.”" : "Runy lśnią, lecz nie zdradzają sensu.", renderTower, "tower")),
      choice("Obejdź wieżę", () => {
        state.weapon = "Kostur iskier";
        renderMessage("Wieża", "Za wieżą znajdujesz Kostur iskier.", renderTower, "tower");
      }),
      choice("Wróć", renderVillage),
    ],
    "tower",
  );
}

function renderMirrors() {
  render(
    "Sala luster",
    "Widzisz trzy odbicia. Pierwsze każe zawrócić. Drugie kusi Koroną. Trzecie chce zniszczyć wszystko.",
    [
      choice("Dotknij pierwszego lustra", () => {
        heal(10);
        state.gold = Math.max(0, state.gold - 5);
        crystalReward();
      }),
      choice("Dotknij drugiego lustra", () => {
        state.nextAttackBonus += 2;
        crystalReward();
      }),
      choice("Dotknij trzeciego lustra", () => {
        if (hurt(5)) return;
        addStatus("Wola zniszczenia");
        crystalReward();
      }),
      choice("Rozbij lustra", () => {
        const shadowHealth = state.statuses.includes("Błogosławieństwo kapliczki") ? Math.max(1, state.health - 8) : state.health;
        startFight({ name: "Cień Gracza", health: shadowHealth, attack: 5 }, crystalReward);
      }, "danger"),
    ],
    "tower",
  );
}

function crystalReward() {
  if (!hasArtifact(ARTIFACTS.crystal)) {
    addArtifact(ARTIFACTS.crystal);
    state.maxHealth += 5;
    state.health += 5;
    return renderMessage("Kryształ Świtu", "Na szczycie wieży leży Kryształ Świtu. Maksymalne zdrowie wzrasta o 5.", renderVillage, "tower");
  }
  renderMessage("Wieża", "Szczyt wieży jest już pusty.", renderVillage, "tower");
}

function renderRuins() {
  if (state.artifacts.length < 3) return renderEnding("Zgubiony w popiele", "Brama zamyka się za tobą. Ulice zmieniają kształt. Po kilku dniach jesteś tylko kolejnym cieniem w oknie martwego miasta.");
  render(
    "Ruiny Valdorinu",
    "Dawna stolica wygląda jak miasto pogrzebane w szarym śniegu. Na końcu głównej alei wznosi się pałac królewski.",
    [
      choice("Idź główną aleją", () => renderMessage("Aleja", "Każdy krok brzmi jak cudze wspomnienie.", renderRuins, "ruins")),
      choice("Przeszukaj domy", () => {
        if (!state.statuses.includes("Przeszukał domy Valdorinu")) {
          state.gold += 10;
          addItem(ITEMS.potion);
          addItem(ITEMS.letter);
          addStatus("Przeszukał domy Valdorinu");
        }
        renderMessage("Stary list króla", "List ujawnia, że król chciał ocalić córkę. Korona spełniła życzenie, ale zabrała życie całemu miastu.", renderRuins, "ruins");
      }, "good"),
      choice("Wejdź do pałacu", renderCrownHall, "danger"),
      choice("Fontanna", () => {
        if (spend(5)) {
          state.health = state.maxHealth;
          renderMessage("Fontanna", "Wrzucasz 5 złota i odzyskujesz pełne zdrowie.", renderRuins, "ruins");
        } else if (!hurt(5)) {
          renderMessage("Fontanna", "Pijesz bez ofiary. Tracisz 5 zdrowia i słyszysz głosy zmarłych.", renderRuins, "ruins");
        }
      }),
    ],
    "ruins",
  );
}

function renderCrownHall() {
  if (!hasArtifact(ARTIFACTS.key) || !hasArtifact(ARTIFACTS.crystal) || !hasArtifact(ARTIFACTS.seal)) return renderRuins();
  const options = [
    choice("Zaatakuj króla", fightAshKing, "danger"),
    choice("Spróbuj zniszczyć Koronę", fightAshKing, "danger"),
    choice("Załóż Koronę", () => renderEnding("Władca Popiołu", "Gdy Korona dotyka twojej głowy, słyszysz tysiące głosów. Potem przychodzi cisza. Martwe miasto czeka na rozkaz nowego Popielnego Króla."), "danger"),
    choice("Przemów do króla", () => has(ITEMS.letter) ? goodEnding() : fightAshKing(), "good"),
  ];
  if (has(ITEMS.letter)) options.push(choice("Przebacz królowi", goodEnding, "good"));
  render(
    "Sala Korony",
    "Na tronie siedzi postać w spalonej zbroi. Na jej głowie spoczywa Korona Popiołu. Martwy król unosi głowę i pyta, czy przyszedłeś go osądzić.",
    options,
    "crown",
  );
}

function fightAshKing() {
  const health = state.statuses.includes("Zniszczył kapliczkę") ? 50 : 40;
  const attack = hasArtifact(ARTIFACTS.crystal) ? 6 : 8;
  startFight({ name: "Popielny Król", health, attack, finalBoss: true }, () => {
    if (has(ITEMS.letter) || hasArtifact(ARTIFACTS.crystal)) goodEnding();
    else renderEnding("Nowy Strażnik", "Zasiadasz na tronie nie jako władca, ale jako strażnik. Korona nadal istnieje. Klątwa słabnie, lecz nie znika.");
  });
}

function goodEnding() {
  renderEnding("Świt nad Valdorinem", "Korona pęka w twoich dłoniach. Przez szczeliny w murach wpada pierwsze prawdziwe światło od stu lat. Cienie mieszkańców unoszą się ku niebu. Królestwo po raz pierwszy od dawna widzi nadzieję.");
}

function renderEnding(title, text) {
  render(
    title,
    text,
    [
      choice("Nowa gra", newGame, "good"),
    ],
    "crown",
  );
}

function startFight(enemy, afterWin) {
  state.enemy = { ...enemy };
  state.afterFight = afterWin;
  renderFight();
}

function renderFight(message = "") {
  const enemy = state.enemy;
  const sacrifice = enemy.finalBoss && state.statuses.includes("Wola zniszczenia") && state.health > 10;
  const choices = [
    choice("Atakuj", playerAttack, "danger"),
    choice("Użyj mikstury", usePotion, "good"),
    choice("Spróbuj uciec", flee),
  ];
  if (sacrifice) choices.push(choice("Poświęć 10 zdrowia", sacrificeStrike, "danger"));
  render(
    `Walka: ${enemy.name}`,
    `${message ? `${message}\n` : ""}${enemy.name}: ${enemy.health} zdrowia.\nTy: ${state.health}/${state.maxHealth} zdrowia.`,
    choices,
    state.scene,
  );
}

function playerAttack() {
  const enemy = state.enemy;
  let damage = attackValue() + state.nextAttackBonus;
  if (enemy.undead && state.weapon === "Kostur iskier") damage += 3;
  state.nextAttackBonus = 0;
  enemy.health -= damage;
  if (enemy.health <= 0) return winFight(`Zadajesz ${damage} obrażeń.`);
  enemyStrike(`Zadajesz ${damage} obrażeń.`);
}

function usePotion() {
  if (!removeItem(ITEMS.potion)) return renderFight("Nie masz mikstury.");
  heal(10);
  enemyStrike("Wypijasz miksturę i odzyskujesz zdrowie.");
}

function flee() {
  if (Math.random() < 0.5) {
    state.enemy = null;
    return renderMessage("Ucieczka", "Uciekasz z walki.", renderVillage, "village");
  }
  enemyStrike("Nie udało się uciec.");
}

function sacrificeStrike() {
  state.health -= 10;
  state.enemy.health -= 15;
  if (state.enemy.health <= 0) return winFight("Poświęcasz 10 zdrowia i zadajesz 15 obrażeń.");
  enemyStrike("Poświęcasz 10 zdrowia i zadajesz 15 obrażeń.");
}

function enemyStrike(prefix) {
  const enemy = state.enemy;
  if (hurt(enemy.attack)) return;
  renderFight(`${prefix} ${enemy.name} kontratakuje za ${enemy.attack} obrażeń.`);
}

function winFight(prefix) {
  const enemy = state.enemy;
  if (enemy.gold) state.gold += enemy.gold;
  if (enemy.item) addItem(enemy.item);
  state.enemy = null;
  const afterWin = state.afterFight;
  state.afterFight = null;
  renderStats();
  afterWin(prefix);
}

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

els.restartBtn.addEventListener("click", newGame);
setupAsh();
newGame();

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js").catch(() => {
      // Gra nadal działa bez service workera, np. po otwarciu lokalnego pliku.
    });
  });
}
