const ITEMS = {
  potion: "Mikstura leczenia",
  smallPotion: "Mała mikstura",
  bigPotion: "Duża mikstura leczenia",
  bandage: "Mały bandaż",
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
  bellShard: "Fragment Dzwonu Ravenford",
  hiddenPathsMap: "Mapa ukrytych ścieżek",
  lorianPackage: "Zapieczętowana przesyłka Loriana",
  dawnCandle: "Świeca Świtu",
  guardWhistle: "Gwizdek Straży",
  forbiddenChronicle: "Księga Zakazanej Kroniki",
  deadCoin: "Moneta zmarłych",
  memoryElixir: "Eliksir Pamięci",
  knightOathBelt: "Pas Rycerskiej Przysięgi",
  captainHelm: "Hełm Kapitana",
  deadStreetsMap: "Mapa Martwych Ulic",
  untitledStarBook: "Księga Nienapisanej Drogi",
  honestMirrorShard: "Odłamek Szczerego Lustra",
  childRattle: "Grzechotka z Valdorinu",
  elianaHorse: "Zabawkowy Koń Eliany",
  brightShard: "Jasny Odłamek Woli",
  ashenSpur: "Popielna Ostroga",
  ashenArmor: "Popielna Zbroja",
  chainmail: "Wytarta kolczuga",
  lightCloak: "Lekki płaszcz",
  grapplingHook: "Linka z hakiem",
  dice: "Kościane kości do gry",
  gangSign: "Stary znak bandy",
  gateSword: "Miecz Strażnika Bramy",
  oathHammer: "Młot Przysięgi",
  lastGateShield: "Tarcza Ostatniej Bramy",
  royalGuardBlade: "Ostrze Królewskiej Straży",
  gatekeeperGloves: "Rękawice Bramnika",
  precisionLockpicks: "Zestaw Precyzyjnych Wytrychów",
  falseCoins: "Sakiewka Fałszywych Monet",
  poisonNeedles: "Igły z Jadem Topielca",
  sealKnife: "Nóż do Przecinania Pieczęci",
  pickpocketGloves: "Rękawiczki Kieszonkowca",
  apprenticeStaff: "Kostur ucznia",
  runicNotebook: "Notatnik runiczny",
  astromancerStaff: "Laska Astromanty",
  astromancerLens: "Soczewka Astromanty",
  silentManaRing: "Pierścień Cichej Many",
  runicChalk: "Kreda Runiczna",
  starDust: "Fiolka Gwiezdnego Pyłu",
  lastDreamAmulet: "Amulet Ostatniego Snu",
  debtClub: "Pałka Poborcy",
  raiderHook: "Hak Łupieżcy",
  debtorKnife: "Nóż Dłużnika",
  blackMarketChain: "Łańcuch z Czarnego Targu",
  blindSmoke: "Fiolka Ślepego Dymu",
  hangmanNail: "Gwóźdź z Szubienicy",
  mercJacket: "Skórzana Kurtka Najemnika",
  travelerCloak: "Płaszcz Podróżnika",
  apprenticeRobe: "Szata Ucznia",
  astromancerRobe: "Szata Astromanty",
  sealGuardArmor: "Pancerz Strażnika Pieczęci",
  shadowCloak: "Płaszcz Bez Cienia",
  mournerCloak: "Płaszcz Żałobnika",
  royalAshCloak: "Królewski Płaszcz z Popiołu",
  honestDebtRing: "Pierścień Uczciwego Długu",
  traitorMedallion: "Medalion Zdrajcy",
  ashWhisperPendant: "Wisior Popielnego Szeptu",
  astromancerEye: "Oko Astromanty",
  dawnSign: "Znak Świtu",
  arvandMedallion: "Pęknięty Medalion Arvanda",
  mirnaTincture: "Nalewka Mirny",
  fogDrops: "Krople Przeciw Mgłom",
  silverMoss: "Proszek Srebrnego Mchu",
  dawnOil: "Olej na Ostrze: Świt",
  rustOil: "Olej na Ostrze: Rdza",
  ashDust: "Popielny Proch",
  graveSalt: "Sól Grobowa",
  crushedRoot: "Zgnieciony Bagienny Korzeń",
  ritualCandle: "Rytualna Świeca Miasta bez Grobów",
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
  "Gołe ręce": 0,
  "Stary miecz": 3,
  "Sztylet": 2,
  "Iskra many": 2,
  "Kostur ucznia": 2,
  "Toporek": 3,
  "Toporek Banity": 4,
  "Stalowy miecz": 5,
  "Miecz Strażnika Bramy": 6,
  "Topór najemnika": 7,
  "Młot Przysięgi": 8,
  "Ostrze Królewskiej Straży": 9,
  "Para Cienkich Ostrzy": 4,
  "Sztylet Milczącego Dzwonu": 5,
  "Nóż do Przecinania Pieczęci": 4,
  "Siekiera drwala": 4,
  "Ostrze Kości": 7,
  "Kostur Iskier": 4,
  "Laska Astromanty": 6,
  "Pałka Poborcy": 4,
  "Hak Łupieżcy": 5,
  "Nóż Dłużnika": 5,
  "Łańcuch z Czarnego Targu": 5,
};

const EQUIPMENT_STATS = {
  [ITEMS.chainmail]: { defense: 2, dodge: -1, slot: "armor" },
  [ITEMS.lightCloak]: { dodge: 1, cunning: 1, slot: "armor" },
  [ITEMS.mercJacket]: { defense: 1, dodge: 1, slot: "armor" },
  [ITEMS.travelerCloak]: { will: 1, slot: "armor" },
  [ITEMS.apprenticeRobe]: { knowledge: 1, will: 1, slot: "armor" },
  [ITEMS.astromancerRobe]: { defense: 1, knowledge: 3, will: 2, slot: "armor" },
  [ITEMS.sealGuardArmor]: { defense: 3, will: 1, slot: "armor" },
  [ITEMS.shadowCloak]: { dodge: 3, cunning: 2, will: -1, slot: "armor" },
  [ITEMS.ashenArmor]: { defense: 4, will: -2, slot: "armor" },
  [ITEMS.mournerCloak]: { will: 2, slot: "armor" },
  [ITEMS.royalAshCloak]: { attack: 2, will: -3, slot: "armor" },
  [ITEMS.ring]: { defense: 1 },
  [ITEMS.knightOathBelt]: { will: 2 },
  [ITEMS.lastGateShield]: { defense: 3, will: 1 },
  [ITEMS.gatekeeperGloves]: { attack: 1, defense: 1 },
  [ITEMS.precisionLockpicks]: { cunning: 2 },
  [ITEMS.grapplingHook]: { cunning: 1 },
  [ITEMS.falseCoins]: { cunning: 1 },
  [ITEMS.pickpocketGloves]: { cunning: 2 },
  [ITEMS.runicNotebook]: { knowledge: 1 },
  [ITEMS.untitledStarBook]: { knowledge: 4, will: -1 },
  [ITEMS.astromancerLens]: { knowledge: 2 },
  [ITEMS.silentManaRing]: { knowledge: 1, will: 2 },
  [ITEMS.lastDreamAmulet]: { will: 3 },
  [ITEMS.bookNames]: { knowledge: 1, will: 1 },
  [ITEMS.childAmulet]: { will: 1 },
  [ITEMS.brightShard]: { will: 2 },
  [ITEMS.honestMirrorShard]: { will: 1 },
  [ITEMS.dice]: { cunning: 2 },
  [ITEMS.gangSign]: { cunning: 1 },
  [ITEMS.traitorMedallion]: { will: 1 },
  [ITEMS.ashWhisperPendant]: { knowledge: 1, will: -1 },
  [ITEMS.astromancerEye]: { knowledge: 2 },
  [ITEMS.dawnSign]: { will: 2 },
  [ITEMS.arvandMedallion]: { will: 1 },
  [ITEMS.hangmanNail]: { attack: 2, will: -1 },
};

const WEAPON_STATS = {
  "Sztylet": { dodge: 1 },
  "Miecz Strażnika Bramy": { defense: 1 },
  "Młot Przysięgi": { defense: 1 },
  "Ostrze Królewskiej Straży": { will: 1 },
  "Para Cienkich Ostrzy": { dodge: 2 },
  "Sztylet Milczącego Dzwonu": { cunning: 2 },
  "Nóż do Przecinania Pieczęci": { cunning: 3 },
  "Iskra many": { knowledge: 1 },
  "Kostur ucznia": { knowledge: 1 },
  "Kostur Iskier": { knowledge: 2 },
  "Laska Astromanty": { knowledge: 3, will: 1 },
  "Pałka Poborcy": { cunning: 1 },
  "Hak Łupieżcy": { cunning: 1 },
  "Nóż Dłużnika": { cunning: 2 },
  "Łańcuch z Czarnego Targu": { defense: 1 },
};

const STACKABLE_ITEMS = new Set([
  "Mikstura leczenia",
  "Mała mikstura",
  "Duża mikstura leczenia",
  "Mały bandaż",
  "Chleb",
  "Suszone mięso",
  "Igły z Jadem Topielca",
  "Fiolka Ślepego Dymu",
  "Proszek Srebrnego Mchu",
  "Olej na Ostrze: Świt",
  "Olej na Ostrze: Rdza",
  "Popielny Proch",
  "Kreda Runiczna",
  "Fiolka Gwiezdnego Pyłu",
  "Nalewka Mirny",
  "Krople Przeciw Mgłom",
  "Sól Grobowa",
  "Zgnieciony Bagienny Korzeń",
]);

const HEALING_ITEMS = {
  [ITEMS.potion]: 10,
  [ITEMS.smallPotion]: 6,
  [ITEMS.bigPotion]: 20,
  [ITEMS.bandage]: 5,
  [ITEMS.bread]: 3,
  [ITEMS.meat]: 5,
  [ITEMS.mirnaTincture]: 5,
  [ITEMS.crushedRoot]: 8,
};

const SLOT_LABELS = {
  head: "Głowa",
  armor: "Zbroja",
  weapon: "Broń",
  amulet: "Amulet",
  ring: "Pierścień",
  boots: "Buty",
  artifact: "Artefakt",
};

const EQUIPPABLE_SLOTS = new Set(["head", "armor", "amulet", "ring", "boots"]);

const HERO_MARKS = {
  warrior: "WOJ",
  rogue: "LOT",
  mage: "MAG",
  outlaw: "BAN",
};

const HERO_ART = {
  guide: "assets/ui/guide.svg",
  warrior: "assets/ui/portrait-warrior.svg",
  rogue: "assets/ui/portrait-rogue.svg",
  mage: "assets/ui/portrait-mage.svg",
  outlaw: "assets/ui/portrait-outlaw.svg",
  sketch: "assets/ui/hero-sketch.svg",
};

const HERO_PANEL_TEXT = {
  warrior: "Ciężka broń, pancerz i proste rozwiązania w walce.",
  rogue: "Wytrychy, unik i ciche ścieżki tam, gdzie inni muszą się bić.",
  mage: "Runy, duchy i magia świtu zamiast czystej siły.",
  outlaw: "Kontakty, brutalny spryt i rozmowy z ludźmi z cienia.",
};

const ITEM_ICON_ASSETS = {
  sword: "assets/ui/items/icon-sword.svg",
  axe: "assets/ui/items/icon-axe.svg",
  staff: "assets/ui/items/icon-staff.svg",
  armor: "assets/ui/items/icon-armor.svg",
  helm: "assets/ui/items/icon-helm.svg",
  ring: "assets/ui/items/icon-ring.svg",
  amulet: "assets/ui/items/icon-amulet.svg",
  boots: "assets/ui/items/icon-boots.svg",
  potion: "assets/ui/items/icon-potion.svg",
  book: "assets/ui/items/icon-book.svg",
  scroll: "assets/ui/items/icon-scroll.svg",
  key: "assets/ui/items/icon-key.svg",
  torch: "assets/ui/items/icon-torch.svg",
  map: "assets/ui/items/icon-map.svg",
  crown: "assets/ui/items/icon-crown.svg",
  crystal: "assets/ui/items/icon-crystal.svg",
  material: "assets/ui/items/icon-material.svg",
  gear: "assets/ui/items/icon-gear.svg",
};

const INVENTORY_GRID_SIZE = 24;
const SAVE_SLOT_COUNT = 3;
const AUTOSAVE_KEY = "koronaPopioluAutosaveV1";
const SAVE_SLOT_PREFIX = "koronaPopioluSaveSlot";

const HEROES = {
  warrior: {
    name: "Wojownik",
    health: 38,
    gold: 8,
    attack: 7,
    weapon: "Stary miecz",
    inventory: [ITEMS.chainmail, ITEMS.bread, ITEMS.torch, ITEMS.bandage],
    trait: "Może zastraszać słabszych przeciwników i rozwiązywać część scen pokazem siły.",
  },
  rogue: {
    name: "Łotrzyk",
    health: 30,
    gold: 16,
    attack: 5,
    weapon: "Sztylet",
    inventory: [ITEMS.lockpicks, ITEMS.lightCloak, ITEMS.grapplingHook, ITEMS.bread],
    trait: "Może otwierać zamki, rozbrajać pułapki, skradać się i kraść.",
  },
  mage: {
    name: "Uczeń Maga",
    health: 26,
    gold: 10,
    attack: 4,
    weapon: "Kostur ucznia",
    inventory: [ITEMS.smallPotion, ITEMS.torch, ITEMS.runicNotebook, "Iskra many"],
    trait: "Może odczytywać runy, rozpraszać iluzje i rozmawiać z duchami.",
  },
  outlaw: {
    name: "Banita",
    health: 32,
    gold: 5,
    attack: 6,
    weapon: "Toporek Banity",
    inventory: [ITEMS.meat, "Kaptur banity", ITEMS.dice, ITEMS.gangSign],
    trait: "Zna świat przestępczy i może dogadywać się z bandytami.",
  },
};

const ENEMIES = {
  wolf: { name: "Wilk Cienia", health: 12, attack: 3, gold: 4, item: ITEMS.pelt, xp: 35 },
  oldWolf: { name: "Stary Wilk", health: 20, attack: 5, item: ITEMS.tooth, xp: 60 },
  forestWraith: { name: "Leśny Upiór", health: 18, attack: 4, ghost: true, xp: 55 },
  drowned: { name: "Topielec", health: 16, attack: 4, gold: 7, poison: true, xp: 50 },
  skeleton: { name: "Szkielet Wartownik", health: 18, attack: 5, gold: 9, undead: true, xp: 55 },
  cryptGuardian: { name: "Strażnik Krypty", health: 26, attack: 6, item: ITEMS.amulet, undead: true, xp: 90 },
  mercenary: { name: "Najemnik Zdrajców", health: 20, attack: 5, gold: 12, xp: 70 },
  cael: { name: "Dowódca Cael", health: 30, attack: 7, xp: 100 },
  wispTrickster: { name: "Błędnik", health: 18, attack: 5, gold: 8 },
  scribeShade: { name: "Cień Skryby", health: 20, attack: 5, undead: true },
  fugitiveWraith: { name: "Upiór Uciekiniera", health: 22, attack: 6, undead: true },
  marketShade: { name: "Cień Rynku", health: 18, attack: 5, undead: true },
  actor: { name: "Aktor Bez Twarzy", health: 24, attack: 6, item: ITEMS.theaterMask, undead: true, xp: 140 },
  ashKnight: { name: "Popielny Rycerz", health: 32, attack: 8, undead: true, xp: 130 },
  ashKing: { name: "Popielny Król", health: 45, attack: 8, finalBoss: true, undead: true, xp: 250 },
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

const LOCATION_ATMOSPHERE = {
  start: "Czarny deszcz pada od trzech dni. Valdorin czeka na kolejnego śmiałka.",
  village: "Ravenford jeszcze oddycha, ale mgła stoi już przy pierwszych płotach.",
  forest: "Gałęzie są czarne jak popiół, a każdy trzask brzmi jak krok za plecami.",
  swamp: "Bagna poruszają się powoli, jakby pod błotem spało coś ogromnego.",
  crypt: "Cisza jest tu cięższa od kamienia. Nawet oddech brzmi obco.",
  fort: "Stare chorągwie strzegą przysięgi, której nikt już nie rozumie do końca.",
  tower: "Srebrne runy świecą zimnym światłem, a niebo zdaje się zbyt blisko.",
  ruins: "Martwe miasto patrzy z pustych okien i nie pozwala łatwo odejść.",
  crown: "Korona czeka tam, gdzie kończą się imiona i zaczyna popiół.",
};

const SCENE_VISUALS = {
  village: {
    kicker: "Valdorin / ostatnie światła",
    title: "Ravenford",
    text: "Karczma, kowal i targ są jeszcze bezpieczne, ale wieś czuje oddech mgły.",
    marks: ["Handel", "Plotki", "Zadania"],
  },
  forest: {
    kicker: "Szlak / czarne drzewa",
    title: "Mroczny Las",
    text: "Ścieżki prowadzą do rozbitego wozu, kapliczki i miejsc, gdzie polują cienie.",
    marks: ["Zasadzki", "Tropy", "Futro"],
  },
  swamp: {
    kicker: "Pogranicze / martwa woda",
    title: "Bagna Umarłych",
    text: "Błoto ukrywa topielców, zielarkę i drogi, które bez mapy potrafią pożreć dzień.",
    marks: ["Trucizna", "Zielarka", "Mapa"],
  },
  crypt: {
    kicker: "Podziemia / cisza",
    title: "Krypta Milczących",
    text: "Kamienne drzwi nie słuchają siły. Tutaj cisza jest próbą, a klucz nagrodą.",
    marks: ["Pochodnia", "Nieumarli", "Klucz"],
  },
  fort: {
    kicker: "Północ / zdradzone mury",
    title: "Fort Zdrajców",
    text: "Za czerwonymi chorągwiami czekają strażnicy, przysięgi i Pieczęć Starego Króla.",
    marks: ["Negocjacje", "Skradanie", "Pieczęć"],
  },
  tower: {
    kicker: "Runy / niebo bez świtu",
    title: "Wieża Astromanty",
    text: "Srebrne znaki badają twoją wolę, zanim pozwolą dotknąć Kryształu Świtu.",
    marks: ["Magia", "Lustra", "Kryształ"],
  },
  ruins: {
    kicker: "Stolica / popielny śnieg",
    title: "Ruiny Valdorinu",
    text: "Martwe ulice prowadzą ku pałacowi. Każde okno pamięta imię kogoś utraconego.",
    marks: ["List króla", "Fontanna", "Finał"],
  },
  crown: {
    kicker: "Sala tronu / koniec drogi",
    title: "Sala Korony",
    text: "Na tronie czeka Popielny Król, a Korona waży więcej niż całe królestwo.",
    marks: ["Boss", "Korona", "Zakończenie"],
  },
  start: {
    kicker: "Początek",
    title: "Wybór postaci",
    text: "Wybierz klasę i wejdź do Ravenford.",
    marks: ["Klasa", "Start", "Muzyka"],
  },
};

const XP_LEVELS = [0, 100, 250, 450, 700, 1000, 1350, 1750];
const SKILL_POINTS_PER_LEVEL = 2;

const SKILLS = {
  strength: {
    name: "Siła",
    description: "Każdy punkt zwiększa atak o 1.",
    bonus: "+1 Atak",
    max: 5,
  },
  endurance: {
    name: "Hart",
    description: "Każdy punkt zwiększa obronę o 1 i maksymalne zdrowie o 2.",
    bonus: "+1 Obrona, +2 zdrowia",
    max: 5,
  },
  reflex: {
    name: "Refleks",
    description: "Każdy punkt zwiększa unik o 1.",
    bonus: "+1 Unik",
    max: 5,
  },
  will: {
    name: "Wola",
    description: "Każdy punkt wzmacnia odporność na klątwę, nieumarłych i finałowe próby.",
    bonus: "+1 Wola",
    max: 5,
  },
  knowledge: {
    name: "Wiedza",
    description: "Każdy punkt pomaga przy runach, magii, sekretach i rozmowach z duchami.",
    bonus: "+1 Wiedza",
    max: 5,
  },
  cunning: {
    name: "Spryt",
    description: "Każdy punkt pomaga przy skradaniu, zamkach, unikaniu zasadzek i fortelach.",
    bonus: "+1 Spryt",
    max: 5,
  },
};

let state;
let selectedInventoryItem = null;
let selectedJournalTab = "quests";

function defaultEquipmentSlots() {
  return {
    head: "",
    armor: "",
    amulet: "",
    ring: "",
    boots: "",
  };
}

const els = {
  sceneName: document.querySelector("#sceneName"),
  sceneAtmosphere: document.querySelector("#sceneAtmosphere"),
  sceneThumb: document.querySelector("#sceneThumb"),
  sceneHero: document.querySelector("#sceneHero"),
  sceneHeroKicker: document.querySelector("#sceneHeroKicker"),
  sceneHeroTitle: document.querySelector("#sceneHeroTitle"),
  sceneHeroText: document.querySelector("#sceneHeroText"),
  sceneHeroMarks: document.querySelector("#sceneHeroMarks"),
  combatPanel: document.querySelector("#combatPanel"),
  storyText: document.querySelector("#storyText"),
  eventLog: document.querySelector("#eventLog"),
  choices: document.querySelector("#choices"),
  heroClass: document.querySelector("#heroClass"),
  health: document.querySelector("#health"),
  gold: document.querySelector("#gold"),
  level: document.querySelector("#level"),
  xp: document.querySelector("#xp"),
  skillPointsPanel: document.querySelector("#skillPointsPanel"),
  healthBar: document.querySelector("#healthBar"),
  xpBar: document.querySelector("#xpBar"),
  panelHeroPortrait: document.querySelector("#panelHeroPortrait"),
  panelHeroLevel: document.querySelector("#panelHeroLevel"),
  panelHeroName: document.querySelector("#panelHeroName"),
  panelHeroMotto: document.querySelector("#panelHeroMotto"),
  journeyProgress: document.querySelector("#journeyProgress"),
  currentQuestTitle: document.querySelector("#currentQuestTitle"),
  currentQuestObjective: document.querySelector("#currentQuestObjective"),
  artifactTrail: document.querySelector("#artifactTrail"),
  attack: document.querySelector("#attack"),
  weapon: document.querySelector("#weapon"),
  defense: document.querySelector("#defense"),
  dodge: document.querySelector("#dodge"),
  will: document.querySelector("#will"),
  knowledge: document.querySelector("#knowledge"),
  cunning: document.querySelector("#cunning"),
  inventory: document.querySelector("#inventory"),
  artifacts: document.querySelector("#artifacts"),
  statuses: document.querySelector("#statuses"),
  reputation: document.querySelector("#reputation"),
  statsOpenBtn: document.querySelector("#statsOpenBtn"),
  statsModal: document.querySelector("#statsModal"),
  statsCloseBtn: document.querySelector("#statsCloseBtn"),
  statsHeroSummary: document.querySelector("#statsHeroSummary"),
  skillPoints: document.querySelector("#skillPoints"),
  skillTree: document.querySelector("#skillTree"),
  artifactsOpenBtn: document.querySelector("#artifactsOpenBtn"),
  artifactsModal: document.querySelector("#artifactsModal"),
  artifactsCloseBtn: document.querySelector("#artifactsCloseBtn"),
  artifactGrid: document.querySelector("#artifactGrid"),
  artifactsSummary: document.querySelector("#artifactsSummary"),
  inventoryOpenBtn: document.querySelector("#inventoryOpenBtn"),
  inventoryModal: document.querySelector("#inventoryModal"),
  inventoryCloseBtn: document.querySelector("#inventoryCloseBtn"),
  inventoryGrid: document.querySelector("#inventoryGrid"),
  itemDetails: document.querySelector("#itemDetails"),
  inventoryHeroSummary: document.querySelector("#inventoryHeroSummary"),
  inventoryHeroSketch: document.querySelector("#inventoryHeroSketch"),
  journalInlineBtn: document.querySelector("#journalInlineBtn"),
  journalModal: document.querySelector("#journalModal"),
  journalCloseBtn: document.querySelector("#journalCloseBtn"),
  journalEntries: document.querySelector("#journalEntries"),
  journalOverview: document.querySelector("#journalOverview"),
  journalPreview: document.querySelector("#journalPreview"),
  journalSummary: document.querySelector("#journalSummary"),
  mapOpenBtn: document.querySelector("#mapOpenBtn"),
  mapModal: document.querySelector("#mapModal"),
  mapCloseBtn: document.querySelector("#mapCloseBtn"),
  mapGrid: document.querySelector("#mapGrid"),
  mapOverview: document.querySelector("#mapOverview"),
  mapSummary: document.querySelector("#mapSummary"),
  settingsOpenBtn: document.querySelector("#settingsOpenBtn"),
  settingsModal: document.querySelector("#settingsModal"),
  settingsCloseBtn: document.querySelector("#settingsCloseBtn"),
  settingsMusicBtn: document.querySelector("#settingsMusicBtn"),
  saveSlots: document.querySelector("#saveSlots"),
  settingsGuideBtn: document.querySelector("#settingsGuideBtn"),
  settingsRestartBtn: document.querySelector("#settingsRestartBtn"),
  startLoadBtn: document.querySelector("#startLoadBtn"),
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
  session: 0,
  mood: "village",
  oscillators: [],
  timers: [],
};

function newGame() {
  selectedInventoryItem = null;
  state = {
    heroKey: "",
    heroClass: "-",
    maxHealth: 0,
    health: 0,
    gold: 0,
    level: 1,
    xp: 0,
    skillPoints: 0,
    skills: {
      strength: 0,
      endurance: 0,
      reflex: 0,
      will: 0,
      knowledge: 0,
      cunning: 0,
    },
    baseAttack: 0,
    weapon: "-",
    equipment: defaultEquipmentSlots(),
    inventory: [],
    artifacts: [],
    statuses: [],
    actionLog: [],
    notifications: [],
    flags: {},
    rep: { good: 0, greed: 0, ash: 0 },
    nextAttackBonus: 0,
    scene: "start",
    enemy: null,
    afterFight: null,
    returnScene: null,
    fightFlags: {},
  };
  closeInventory();
  closeStats();
  closeArtifacts();
  closeJournal();
  closeMap();
  closeSettings();
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
  state.equipment = defaultEquipmentSlots();
  state.inventory = [...hero.inventory];
  autoEquipStartingGear();
  addStatus(hero.trait);
  startMusic({ quiet: true, fromButton: true });
  renderScene("dream");
}

function openGuide() {
  window.open("korona_popiolu_poradnik_www.html", "_blank", "noopener");
}

function canUseStorage() {
  try {
    return typeof localStorage !== "undefined";
  } catch {
    return false;
  }
}

function saveSlotKey(slot) {
  return slot === "auto" ? AUTOSAVE_KEY : `${SAVE_SLOT_PREFIX}${slot}`;
}

function readSaveData(slot) {
  if (!canUseStorage()) return false;
  const raw = localStorage.getItem(saveSlotKey(slot));
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function hasSavedGame(slot = "auto") {
  return Boolean(readSaveData(slot));
}

function saveSlotLabel(data) {
  if (!data?.state) return "Puste miejsce";
  const date = data.savedAt ? new Date(data.savedAt) : null;
  const time = date && !Number.isNaN(date.getTime()) ? date.toLocaleString("pl-PL", { dateStyle: "short", timeStyle: "short" }) : "bez daty";
  return `${data.state.heroClass || "Postać"} / poziom ${data.state.level || 1} / ${time}`;
}

function savePayload() {
  return {
    savedAt: new Date().toISOString(),
    selectedJournalTab,
    state,
  };
}

function normalizeLoadedState(loadedState) {
  state = {
    ...state,
    ...loadedState,
    skills: {
      strength: 0,
      endurance: 0,
      reflex: 0,
      will: 0,
      knowledge: 0,
      cunning: 0,
      ...(loadedState.skills || {}),
    },
    equipment: {
      ...defaultEquipmentSlots(),
      ...(loadedState.equipment || {}),
    },
    inventory: loadedState.inventory || [],
    artifacts: loadedState.artifacts || [],
    statuses: loadedState.statuses || [],
    actionLog: loadedState.actionLog || [],
    notifications: loadedState.notifications || [],
    flags: loadedState.flags || {},
    rep: {
      good: 0,
      greed: 0,
      ash: 0,
      ...(loadedState.rep || {}),
    },
    fightFlags: loadedState.fightFlags || {},
    enemy: null,
    afterFight: null,
  };
}

function saveGame(manual = false, slot = "auto") {
  if (!state?.maxHealth || state.enemy) {
    if (manual) {
      addNotification(state.enemy ? "Nie można zapisać gry w trakcie walki." : "Najpierw wybierz klasę postaci.", "info");
      renderNotifications();
      renderSettingsModal();
    }
    return false;
  }
  if (!canUseStorage()) {
    if (manual) {
      addNotification("Przeglądarka nie pozwala teraz zapisać gry.", "danger");
      renderNotifications();
    }
    return false;
  }
  localStorage.setItem(saveSlotKey(slot), JSON.stringify(savePayload()));
  if (manual) {
    addNotification(slot === "auto" ? "Gra została zapisana." : `Gra została zapisana w slocie ${slot}.`, "good");
    renderNotifications();
    renderSettingsModal();
  }
  return true;
}

function loadGame(slot = "auto") {
  const data = readSaveData(slot);
  if (!data) {
    addNotification("Brak zapisanego stanu gry.", "info");
    renderNotifications();
    renderSettingsModal();
    return false;
  }
  try {
    if (!data?.state) throw new Error("Brak danych zapisu");
    normalizeLoadedState(data.state);
    selectedJournalTab = data.selectedJournalTab || "quests";
    selectedInventoryItem = null;
    closeInventory();
    closeStats();
    closeArtifacts();
    closeJournal();
    closeMap();
    closeSettings();
    renderScene(SCENES[state.scene] ? state.scene : "village");
    addNotification(slot === "auto" ? "Wczytano zapis gry." : `Wczytano slot ${slot}.`, "good");
    renderNotifications();
    return true;
  } catch {
    addNotification("Nie udało się wczytać zapisu gry.", "danger");
    renderNotifications();
    renderSettingsModal();
    return false;
  }
}

function autoSaveGame() {
  saveGame(false, "auto");
}

function addStats(target, source = {}) {
  target.attack += source.attack || 0;
  target.defense += source.defense || 0;
  target.dodge += source.dodge || 0;
  target.will += source.will || 0;
  target.knowledge += source.knowledge || 0;
  target.cunning += source.cunning || 0;
}

function equipmentSlots() {
  if (!state.equipment) state.equipment = defaultEquipmentSlots();
  return state.equipment;
}

function equippedSlotForItem(item) {
  if (!item) return "";
  if (state.weapon === item) return "weapon";
  const entry = Object.entries(equipmentSlots()).find(([, equippedItem]) => equippedItem === item);
  return entry ? entry[0] : "";
}

function isEquippedItem(item) {
  return Boolean(equippedSlotForItem(item));
}

function equippedWearableItems() {
  return Object.values(equipmentSlots()).filter(Boolean);
}

function equipmentStats() {
  const stats = { attack: 0, defense: 0, dodge: 0, will: 0, knowledge: 0, cunning: 0 };
  equippedWearableItems().forEach((item) => addStats(stats, EQUIPMENT_STATS[item]));

  const passiveItems = [...new Set(state.inventory || [])].filter((item) => {
    const itemStats = EQUIPMENT_STATS[item];
    return itemStats && !EQUIPPABLE_SLOTS.has(itemSlot(item));
  });
  passiveItems.forEach((item) => addStats(stats, EQUIPMENT_STATS[item]));

  addStats(stats, WEAPON_STATS[state.weapon]);
  if (hasArtifact(ARTIFACTS.shard)) addStats(stats, { attack: 3, will: -1 });
  if (hasArtifact(ARTIFACTS.crystal)) addStats(stats, { will: 2 });
  if (hasArtifact(ARTIFACTS.dawn)) addStats(stats, { will: 1 });
  return stats;
}

function skillStats() {
  const skills = state?.skills || {};
  return {
    attack: skills.strength || 0,
    defense: skills.endurance || 0,
    dodge: skills.reflex || 0,
    will: skills.will || 0,
    knowledge: skills.knowledge || 0,
    cunning: skills.cunning || 0,
  };
}

function attackValue() {
  return state.baseAttack + (WEAPONS[state.weapon] || 0) + equipmentStats().attack + skillStats().attack;
}

function defenseValue() {
  return Math.max(0, equipmentStats().defense + skillStats().defense);
}

function dodgeValue() {
  return equipmentStats().dodge + skillStats().dodge;
}

function willValue() {
  return equipmentStats().will + skillStats().will;
}

function knowledgeValue() {
  return equipmentStats().knowledge + skillStats().knowledge;
}

function cunningValue() {
  return equipmentStats().cunning + skillStats().cunning;
}

function has(item) {
  if (!item || !state) return false;
  return state.inventory.includes(item) || state.weapon === item || Object.values(equipmentSlots()).includes(item);
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
  if (STACKABLE_ITEMS.has(item) || !has(item)) {
    state.inventory.push(item);
    addNotification(`Otrzymujesz: ${item}.`, "item");
  }
}

function removeInventoryItem(item, notify = true) {
  const index = state.inventory.indexOf(item);
  if (index === -1) return false;
  state.inventory.splice(index, 1);
  if (notify) addNotification(`Tracisz: ${item}.`, "loss");
  return true;
}

function removeItem(item) {
  if (removeInventoryItem(item, true)) return true;
  const slot = equippedSlotForItem(item);
  if (slot === "weapon") {
    state.weapon = "Gołe ręce";
    addNotification(`Tracisz: ${item}.`, "loss");
    return true;
  }
  if (EQUIPPABLE_SLOTS.has(slot)) {
    equipmentSlots()[slot] = "";
    addNotification(`Tracisz: ${item}.`, "loss");
    return true;
  }
  return false;
}

function equipEquipmentItem(item, silent = false) {
  const slot = itemSlot(item);
  if (!EQUIPPABLE_SLOTS.has(slot) || !state.inventory.includes(item)) return false;
  removeInventoryItem(item, false);
  const slots = equipmentSlots();
  const previousItem = slots[slot];
  if (previousItem && previousItem !== item) state.inventory.push(previousItem);
  slots[slot] = item;
  selectedInventoryItem = item;
  if (!silent) {
    addNotification(`Zakładasz: ${item}.`, "item");
    renderStats();
    renderNotifications();
    renderInventoryModal();
    autoSaveGame();
  }
  return true;
}

function unequipEquipmentItem(itemOrSlot, silent = false) {
  const slot = EQUIPPABLE_SLOTS.has(itemOrSlot) ? itemOrSlot : equippedSlotForItem(itemOrSlot);
  if (!EQUIPPABLE_SLOTS.has(slot)) return false;
  const item = equipmentSlots()[slot];
  if (!item) return false;
  if (STACKABLE_ITEMS.has(item) || !state.inventory.includes(item)) state.inventory.push(item);
  equipmentSlots()[slot] = "";
  selectedInventoryItem = item;
  if (!silent) {
    addNotification(`Zdejmujesz: ${item}.`, "item");
    renderStats();
    renderNotifications();
    renderInventoryModal();
    autoSaveGame();
  }
  return true;
}

function autoEquipStartingGear() {
  EQUIPPABLE_SLOTS.forEach((slot) => {
    const candidate = [...new Set(state.inventory)]
      .filter((item) => itemSlot(item) === slot)
      .sort((a, b) => itemScore(b) - itemScore(a))[0];
    if (candidate) equipEquipmentItem(candidate, true);
  });
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

function renderReputationPanel() {
  if (!els.reputation) return;
  const rows = [
    { key: "good", label: "Dobro", tone: "good" },
    { key: "greed", label: "Chciwość", tone: "greed" },
    { key: "ash", label: "Popiół", tone: "ash" },
  ];

  els.reputation.innerHTML = "";
  rows.forEach((row) => {
    const value = Math.max(0, state.rep[row.key] || 0);
    const width = Math.min(100, value * 12.5);
    const li = document.createElement("li");
    li.className = `reputation-row reputation-${row.tone}`;
    li.innerHTML = `
      <span>
        <strong>${escapeHTML(row.label)}</strong>
        <em>${value}</em>
      </span>
      <i><b style="width: ${width}%"></b></i>
    `;
    els.reputation.appendChild(li);
  });
}

function xpLabel() {
  if (!state.maxHealth) return "-";
  const next = XP_LEVELS[state.level] || "maks.";
  return next === "maks." ? `${state.xp} / maks.` : `${state.xp} / ${next}`;
}

function xpProgress() {
  if (!state.maxHealth) return 0;
  const currentFloor = XP_LEVELS[state.level - 1] || 0;
  const next = XP_LEVELS[state.level];
  if (!next) return 100;
  return Math.max(0, Math.min(100, ((state.xp - currentFloor) / (next - currentFloor)) * 100));
}

function addXP(amount) {
  if (!amount) return;
  state.xp += amount;
  addNotification(`Doświadczenie +${amount} XP.`, "xp");

  while (state.level < XP_LEVELS.length && state.xp >= XP_LEVELS[state.level]) {
    state.level += 1;
    state.maxHealth += 3;
    state.health = Math.min(state.maxHealth, state.health + 3);
    state.skillPoints += SKILL_POINTS_PER_LEVEL;
    addNotification(`Awans na poziom ${state.level}: +3 maks. zdrowia i +${SKILL_POINTS_PER_LEVEL} punkty umiejętności.`, "good");
  }
}

function addNotification(text, type = "info") {
  if (!state?.notifications) return;
  state.notifications.push({ text, type });
  if (state.notifications.length > 8) state.notifications.shift();
  if (state.actionLog) {
    const sceneTitle = SCENES?.[state.scene]?.title || "Początek";
    state.actionLog.unshift({ text, type, scene: sceneTitle });
    if (state.actionLog.length > 40) state.actionLog.pop();
  }
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
    if (effect.xp) addXP(effect.xp);
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
  if (choice.requireFlag) return `wymaga wcześniejszego tropu`;
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

function renderSceneHero(title, art, atmosphere = "") {
  if (!els.sceneHero) return;
  const visual = SCENE_VISUALS[art] || SCENE_VISUALS.village;
  const isStart = document.body.classList.contains("is-start");
  els.sceneHero.hidden = isStart;
  if (isStart) return;

  els.sceneHero.style.setProperty("--scene-hero-art", `url("${sceneArt[art] || sceneArt.village}")`);
  if (els.sceneHeroKicker) els.sceneHeroKicker.textContent = visual.kicker;
  if (els.sceneHeroTitle) els.sceneHeroTitle.textContent = visual.title || title;
  if (els.sceneHeroText) els.sceneHeroText.textContent = atmosphere || visual.text;
  if (els.sceneHeroMarks) {
    els.sceneHeroMarks.innerHTML = (visual.marks || [])
      .map((mark) => `<span>${escapeHTML(mark)}</span>`)
      .join("");
  }
}

function renderScene(id) {
  const scene = SCENES[id];
  state.scene = id;
  const art = scene.art || "village";
  document.body.classList.remove("combat-pulse");
  document.body.style.setProperty("--page-art", `url("${sceneArt[art]}")`);
  document.body.dataset.scene = art;
  document.body.classList.toggle("is-start", id === "start");
  setMusicMood(art);
  if (els.combatPanel) {
    els.combatPanel.hidden = true;
    els.combatPanel.innerHTML = "";
  }
  if (els.sceneThumb) els.sceneThumb.style.setProperty("--scene-thumb-art", `url("${sceneArt[art]}")`);
  els.sceneName.textContent = scene.title;
  const atmosphere = scene.atmosphere || LOCATION_ATMOSPHERE[art] || "";
  if (els.sceneAtmosphere) els.sceneAtmosphere.textContent = atmosphere;
  renderSceneHero(scene.title, art, atmosphere);
  els.storyText.innerHTML = scene.text().split("\n").map((p) => `<p>${p}</p>`).join("");
  renderNotifications();
  els.choices.innerHTML = "";

  scene.choices.filter(canShow).forEach((choice) => {
    els.choices.appendChild(renderChoiceButton(choice, () => takeChoice(choice)));
  });
  renderStats();
  autoSaveGame();
}

function renderNotice(title, text, backScene = state.scene) {
  renderCustom(title, text, [{ label: "Wróć", action: () => renderScene(backScene) }], SCENES[backScene]?.art || "village");
}

function renderCustom(title, text, choices, art = "village") {
  document.body.style.setProperty("--page-art", `url("${sceneArt[art]}")`);
  document.body.dataset.scene = art;
  document.body.classList.toggle("is-start", false);
  setMusicMood(art);
  if (els.combatPanel) {
    els.combatPanel.hidden = true;
    els.combatPanel.innerHTML = "";
  }
  if (els.sceneThumb) els.sceneThumb.style.setProperty("--scene-thumb-art", `url("${sceneArt[art]}")`);
  els.sceneName.textContent = title;
  const atmosphere = LOCATION_ATMOSPHERE[art] || "";
  if (els.sceneAtmosphere) els.sceneAtmosphere.textContent = atmosphere;
  renderSceneHero(title, art, atmosphere);
  els.storyText.innerHTML = text.split("\n").map((p) => `<p>${p}</p>`).join("");
  renderNotifications();
  els.choices.innerHTML = "";
  choices.forEach((choice) => {
    els.choices.appendChild(renderChoiceButton(choice, choice.action));
  });
  renderStats();
}

function automaticChoiceVisual(choice) {
  if (document.body.classList.contains("is-start") || choice.asset || choice.icon) return {};
  const label = `${choice.label} ${choice.description || ""} ${choice.meta || ""}`.toLowerCase();

  if (/atak|zaatak|walcz|wilk|topielec|szkielet|cień|upi[oó]r|rycerz|najemnik|boss|kr[oó]l|polana|bandyt/.test(label)) {
    return { iconAsset: ITEM_ICON_ASSETS.sword, description: "Ryzykowny wybór. Może dojść do walki.", visualClass: "choice-risk" };
  }
  if (/kup|sprzedaj|sklep|kowal|targ|handl|zapłać|złot/.test(label)) {
    return { iconAsset: ITEM_ICON_ASSETS.material, description: "Handel, usługa albo wymiana zasobów.", visualClass: "choice-trade" };
  }
  if (/porozmawiaj|zapytaj|przekonaj|przemów|dialog|dow[oó]dca|kronikarz|zielark|kupc/.test(label)) {
    return { iconAsset: ITEM_ICON_ASSETS.scroll, description: "Rozmowa może odblokować trop lub zadanie.", visualClass: "choice-lore" };
  }
  if (/zbadaj|przeszukaj|szukaj|sprawdź|odczytaj|ukryty|ślad|list|tablic|run/.test(label)) {
    return { iconAsset: ITEM_ICON_ASSETS.book, description: "Dokładne badanie miejsca może coś ujawnić.", visualClass: "choice-search" };
  }
  if (/mag|mana|zaklę|run|kryształ|świt|modl|kaplicz|duch|wizj/.test(label)) {
    return { iconAsset: ITEM_ICON_ASSETS.crystal, description: "Próba związana z magią, wiarą albo klątwą.", visualClass: "choice-magic" };
  }
  if (/lecz|mikstur|odpocznij|fontann|wypij|rana|zdrow/.test(label)) {
    return { iconAsset: ITEM_ICON_ASSETS.potion, description: "Sposób na odzyskanie sił albo przetrwanie.", visualClass: "choice-heal" };
  }
  if (/klucz|zamek|otw[oó]rz|wytrych|drzwi|bram/.test(label)) {
    return { iconAsset: ITEM_ICON_ASSETS.key, description: "Próba przejścia przez zamknięte przejście.", visualClass: "choice-key" };
  }
  if (/korona|artefakt|pieczęć|relikt|sala tron/.test(label)) {
    return { iconAsset: ITEM_ICON_ASSETS.crown, description: "Decyzja związana z główną klątwą.", visualClass: "choice-artifact" };
  }
  if (/wr[oó]ć|idź|wejdź|zejdź|przejdź|podejdź|wyrusz|droga|las|bagna|krypt|fort|wieża|ruiny|ravenford|gospoda/.test(label)) {
    return { iconAsset: ITEM_ICON_ASSETS.map, description: "Przejście do kolejnego miejsca wyprawy.", visualClass: "choice-travel" };
  }

  return { iconAsset: ITEM_ICON_ASSETS.scroll, description: "Decyzja fabularna. Może zmienić dalszą wyprawę.", visualClass: "choice-story" };
}

function renderChoiceButton(choice, handler) {
  const button = document.createElement("button");
  button.type = "button";
  const available = isAvailable(choice);
  const autoVisual = automaticChoiceVisual(choice);
  if (choice.kind) button.classList.add(choice.kind);
  if (autoVisual.visualClass) button.classList.add(autoVisual.visualClass);
  if (choice.description || choice.meta || choice.icon || choice.asset || autoVisual.iconAsset || autoVisual.description || autoVisual.meta) {
    button.classList.add("choice-card");
  }
  button.disabled = choice.disabled === true;

  const content = document.createElement("span");
  content.className = "choice-content";

  if (choice.asset) {
    const art = document.createElement("span");
    art.className = "choice-art";
    art.innerHTML = `<img src="${escapeHTML(choice.asset)}" alt="" loading="lazy" />`;
    content.appendChild(art);
    content.classList.add("has-choice-art");
  } else if (choice.icon) {
    const icon = document.createElement("span");
    icon.className = "choice-icon";
    icon.textContent = choice.icon;
    content.appendChild(icon);
  } else if (autoVisual.iconAsset) {
    const icon = document.createElement("span");
    icon.className = "choice-icon choice-icon-image";
    icon.innerHTML = `<img src="${escapeHTML(autoVisual.iconAsset)}" alt="" loading="lazy" />`;
    content.appendChild(icon);
  }

  const copy = document.createElement("span");
  const title = document.createElement("span");
  title.className = "choice-title";
  title.textContent = available ? choice.label : `${choice.label} (${describeRequirement(choice)})`;
  copy.appendChild(title);

  const descriptionText = choice.description || autoVisual.description;
  if (descriptionText) {
    const description = document.createElement("span");
    description.className = "choice-desc";
    description.textContent = descriptionText;
    copy.appendChild(description);
  }

  const metaText = choice.meta || autoVisual.meta;
  if (metaText) {
    const meta = document.createElement("span");
    meta.className = "choice-meta";
    meta.textContent = metaText;
    copy.appendChild(meta);
  }

  if (!choice.icon && !choice.asset && !autoVisual.iconAsset && !descriptionText && !metaText) {
    button.textContent = title.textContent;
  } else {
    content.appendChild(copy);
    button.appendChild(content);
  }

  button.addEventListener("click", handler);
  return button;
}

function mainArtifactTrail() {
  return [
    {
      name: ARTIFACTS.key,
      label: "Klucz",
      icon: ITEM_ICON_ASSETS.key,
      hint: "Krypta Milczących",
    },
    {
      name: ARTIFACTS.crystal,
      label: "Kryształ",
      icon: ITEM_ICON_ASSETS.crystal,
      hint: "Wieża Astromanty",
    },
    {
      name: ARTIFACTS.seal,
      label: "Pieczęć",
      icon: ITEM_ICON_ASSETS.crown,
      hint: "Fort Zdrajców",
    },
  ];
}

function renderJourneyPanel() {
  if (els.journeyProgress) els.journeyProgress.textContent = `${mainArtifactCount()} / 3`;
  if (els.currentQuestTitle || els.currentQuestObjective) {
    const quests = questEntries();
    const activeQuest = quests.find((quest) => !quest.completed);
    if (els.currentQuestTitle) {
      els.currentQuestTitle.textContent = activeQuest ? activeQuest.title : state.maxHealth ? "Droga do finału otwarta" : "Aktualny cel";
    }
    if (els.currentQuestObjective) {
      els.currentQuestObjective.textContent = activeQuest
        ? activeQuest.objective
        : state.maxHealth
          ? "Masz najważniejsze tropy. Rusz do Ruin Valdorinu albo domknij poboczne historie."
          : "Wybierz klasę postaci, aby rozpocząć zapiski wyprawy.";
    }
  }
  if (els.artifactTrail) {
    els.artifactTrail.innerHTML = "";
    mainArtifactTrail().forEach((artifact) => {
      const owned = hasArtifact(artifact.name);
      const slot = document.createElement("span");
      slot.className = `artifact-slot ${owned ? "is-owned" : ""}`;
      slot.title = owned ? artifact.name : artifact.hint;
      slot.innerHTML = `
        <img src="${escapeHTML(artifact.icon)}" alt="" loading="lazy" />
        <small>${escapeHTML(owned ? artifact.label : "?")}</small>
      `;
      els.artifactTrail.appendChild(slot);
    });
  }
}

function renderStats() {
  if (els.heroClass) els.heroClass.textContent = state.heroClass;
  els.health.textContent = state.maxHealth ? `${state.health}/${state.maxHealth}` : "-";
  els.gold.textContent = state.gold;
  if (els.level) els.level.textContent = state.maxHealth ? state.level : "-";
  if (els.xp) els.xp.textContent = xpLabel();
  if (els.skillPointsPanel) els.skillPointsPanel.textContent = state.maxHealth ? state.skillPoints : "-";
  if (els.healthBar) els.healthBar.style.width = state.maxHealth ? `${Math.max(0, Math.min(100, (state.health / state.maxHealth) * 100))}%` : "0%";
  if (els.xpBar) els.xpBar.style.width = `${xpProgress()}%`;
  if (els.panelHeroPortrait) {
    const portrait = HERO_ART[state.heroKey] || "assets/crown.svg";
    els.panelHeroPortrait.innerHTML = `<img src="${escapeHTML(portrait)}" alt="" loading="lazy" />`;
  }
  if (els.panelHeroLevel) els.panelHeroLevel.textContent = state.maxHealth ? `Poziom ${state.level}` : "Poziom -";
  if (els.panelHeroName) els.panelHeroName.textContent = state.maxHealth ? state.heroClass : "Nieznany wędrowiec";
  if (els.panelHeroMotto) {
    els.panelHeroMotto.textContent = state.maxHealth ? HERO_PANEL_TEXT[state.heroKey] || "Wędrowiec Valdorinu." : "Wybierz klasę, aby rozpocząć wyprawę.";
  }
  els.attack.textContent = state.maxHealth ? attackValue() : "-";
  els.weapon.textContent = state.weapon;
  if (els.defense) els.defense.textContent = state.maxHealth ? defenseValue() : "-";
  if (els.dodge) els.dodge.textContent = state.maxHealth ? dodgeValue() : "-";
  if (els.will) els.will.textContent = state.maxHealth ? willValue() : "-";
  if (els.knowledge) els.knowledge.textContent = state.maxHealth ? knowledgeValue() : "-";
  if (els.cunning) els.cunning.textContent = state.maxHealth ? cunningValue() : "-";
  fillList(els.inventory, state.inventory);
  fillList(els.artifacts, state.artifacts);
  if (els.statuses) fillList(els.statuses, state.statuses);
  renderReputationPanel();
  renderJourneyPanel();
  renderJournalPreview();
  renderStatsModal();
  renderArtifactsModal();
  renderInventoryModal();
  renderJournalModal();
}

function fillList(element, values) {
  if (!element) return;
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

function isArtifactItem(item) {
  return Object.values(ARTIFACTS).includes(item);
}

function itemSlot(item) {
  if (!item) return "bag";
  if (WEAPONS[item] !== undefined) return "weapon";
  if (isArtifactItem(item)) return "artifact";
  const lower = item.toLowerCase();
  if (lower.includes("hełm") || lower.includes("kaptur")) return "head";
  if (EQUIPMENT_STATS[item]?.slot === "armor" || /zbroja|płaszcz|kolczuga|szata|kurtka|pancerz/.test(lower)) return "armor";
  if (/amulet|wisior|medalion/.test(lower)) return "amulet";
  if (lower.includes("pierścień")) return "ring";
  if (/but|ostroga/.test(lower)) return "boots";
  return "bag";
}

function itemStats(item) {
  const stats = { attack: 0, defense: 0, dodge: 0, will: 0, knowledge: 0, cunning: 0 };
  if (WEAPONS[item] !== undefined) stats.attack += WEAPONS[item];
  addStats(stats, EQUIPMENT_STATS[item]);
  addStats(stats, WEAPON_STATS[item]);
  if (item === ARTIFACTS.shard) addStats(stats, { attack: 3, will: -1 });
  if (item === ARTIFACTS.crystal) addStats(stats, { will: 2 });
  if (item === ARTIFACTS.dawn) addStats(stats, { will: 1 });
  return stats;
}

function itemScore(item) {
  const stats = itemStats(item);
  return stats.attack * 2 + stats.defense * 2 + stats.dodge + stats.will + stats.knowledge + stats.cunning;
}

function itemBonusList(item) {
  const stats = itemStats(item);
  const labels = [
    ["attack", "Atak"],
    ["defense", "Obrona"],
    ["dodge", "Unik"],
    ["will", "Wola"],
    ["knowledge", "Wiedza"],
    ["cunning", "Spryt"],
  ];
  const bonuses = labels
    .filter(([key]) => stats[key])
    .map(([key, label]) => `${label} ${stats[key] > 0 ? "+" : ""}${stats[key]}`);
  if (HEALING_ITEMS[item]) bonuses.push(`Leczenie +${HEALING_ITEMS[item]}`);
  return bonuses;
}

function itemValue(item) {
  if (isArtifactItem(item)) return "bezcenny";
  if (HEALING_ITEMS[item]) return `${Math.max(2, Math.round(HEALING_ITEMS[item] / 2))} złota`;
  const weaponValue = WEAPONS[item] ? WEAPONS[item] * 4 : 0;
  const scoreValue = Math.max(0, itemScore(item)) * 3;
  const base = weaponValue || scoreValue || (STACKABLE_ITEMS.has(item) ? 3 : 8);
  return `${Math.max(1, base)} złota`;
}

function itemRarity(item) {
  if (isArtifactItem(item)) return "artifact";
  const lower = item.toLowerCase();
  if (/czarny|popieln|szubienic|koron/.test(lower)) return "cursed";
  if (/królewsk|przysięg|ostatni|astromant|eliany/.test(lower) || itemScore(item) >= 8) return "legendary";
  if (/kryształ|run|mana|świt|duch|umar/.test(lower) || knowledgeValueFromItem(item) > 0 || willValueFromItem(item) >= 2) return "magic";
  if (WEAPONS[item] !== undefined || itemScore(item) > 0 || HEALING_ITEMS[item]) return "good";
  return "common";
}

function rarityLabel(rarity) {
  return {
    common: "zwykły",
    good: "dobry",
    magic: "magiczny",
    cursed: "przeklęty",
    legendary: "legendarny",
    artifact: "artefakt",
  }[rarity] || rarity;
}

function knowledgeValueFromItem(item) {
  return itemStats(item).knowledge || 0;
}

function willValueFromItem(item) {
  return itemStats(item).will || 0;
}

function itemIcon(item) {
  const slot = itemSlot(item);
  const lower = item.toLowerCase();
  if (slot === "weapon") return "⚔";
  if (slot === "armor") return "⬟";
  if (slot === "head") return "◠";
  if (slot === "amulet") return "◆";
  if (slot === "ring") return "○";
  if (slot === "boots") return "⌁";
  if (slot === "artifact") return "✦";
  if (HEALING_ITEMS[item]) return "✚";
  if (/mapa/i.test(lower)) return "⌖";
  if (/księga|dziennik|list|notatnik/i.test(lower)) return "▤";
  if (/klucz|wytrych/i.test(lower)) return "⚿";
  if (/pochodnia|świeca/i.test(lower)) return "♨";
  if (/kość|kieł|futro|korzeń|mech|sól|proch|pył/i.test(lower)) return "✣";
  return item.slice(0, 2).toUpperCase();
}

function itemIconAsset(item) {
  const slot = itemSlot(item);
  const lower = item.toLowerCase();
  if (item === ARTIFACTS.crystal || /kryształ|odłamek/.test(lower)) return ITEM_ICON_ASSETS.crystal;
  if (isArtifactItem(item) || /korona/.test(lower)) return ITEM_ICON_ASSETS.crown;
  if (slot === "weapon") {
    if (/topór|toporek|młot|pałka|hak|łańcuch|siekiera/.test(lower)) return ITEM_ICON_ASSETS.axe;
    if (/kostur|laska|iskra/.test(lower)) return ITEM_ICON_ASSETS.staff;
    return ITEM_ICON_ASSETS.sword;
  }
  if (slot === "armor") return ITEM_ICON_ASSETS.armor;
  if (slot === "head") return ITEM_ICON_ASSETS.helm;
  if (slot === "amulet") return ITEM_ICON_ASSETS.amulet;
  if (slot === "ring") return ITEM_ICON_ASSETS.ring;
  if (slot === "boots") return ITEM_ICON_ASSETS.boots;
  if (HEALING_ITEMS[item] || /eliksir|nalewka|fiolka|krople/.test(lower)) return ITEM_ICON_ASSETS.potion;
  if (/mapa/.test(lower)) return ITEM_ICON_ASSETS.map;
  if (/księga|dziennik|notatnik/.test(lower)) return ITEM_ICON_ASSETS.book;
  if (/list|przesyłka|zwój/.test(lower)) return ITEM_ICON_ASSETS.scroll;
  if (/klucz|wytrych/.test(lower)) return ITEM_ICON_ASSETS.key;
  if (/pochodnia|świeca/.test(lower)) return ITEM_ICON_ASSETS.torch;
  if (/kość|kości|kieł|futro|korzeń|mech|sól|proch|pył|olej|kreda|gwóźdź/.test(lower)) return ITEM_ICON_ASSETS.material;
  return "";
}

function itemIconHTML(item, className) {
  const asset = itemIconAsset(item);
  if (asset) return `<img class="${className}" src="${escapeHTML(asset)}" alt="" loading="lazy" />`;
  return `<span class="${className}">${escapeHTML(itemIcon(item))}</span>`;
}

function itemDescription(item) {
  if (isArtifactItem(item)) return "Artefakt fabularny. Jego znaczenie wykracza poza zwykłą wartość w złocie.";
  if (HEALING_ITEMS[item]) return `Przywraca ${HEALING_ITEMS[item]} zdrowia poza walką. Mikstury możesz też wykorzystać w walce.`;
  const slot = itemSlot(item);
  if (slot === "weapon") return "Broń, którą można założyć jako główny oręż postaci.";
  if (slot !== "bag") return `Element wyposażenia: ${SLOT_LABELS[slot]}. Bonus działa dopiero po założeniu.`;
  if (STACKABLE_ITEMS.has(item)) return "Przedmiot użytkowy, którego można użyć w odpowiedniej scenie albo walce.";
  return "Przedmiot zebrany podczas podróży przez Valdorin.";
}

function itemTooltip(item) {
  const bonuses = itemBonusList(item);
  const lines = [item, SLOT_LABELS[itemSlot(item)] || "Plecak", itemDescription(item)];
  if (bonuses.length) lines.push(bonuses.join(", "));
  lines.push(`Wartość: ${itemValue(item)}`);
  return lines.join("\n");
}

function inventoryEntries() {
  const counts = new Map();
  state.inventory.forEach((item) => counts.set(item, (counts.get(item) || 0) + 1));
  const entries = [...counts.entries()].map(([name, count]) => ({ name, count, source: "inventory" }));
  state.artifacts.forEach((name) => entries.push({ name, count: 1, source: "artifact" }));
  return entries;
}

function bestSlotItem(slot) {
  if (slot === "weapon") return state.weapon && state.weapon !== "-" ? state.weapon : "";
  if (slot === "artifact") return state.artifacts[0] || "";
  return equipmentSlots()[slot] || "";
}

function activeEquipment() {
  return Object.keys(SLOT_LABELS).reduce((acc, slot) => {
    acc[slot] = bestSlotItem(slot);
    return acc;
  }, {});
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function openStats() {
  if (!els.statsModal) return;
  els.statsModal.classList.remove("hidden");
  renderStatsModal();
}

function closeStats() {
  if (els.statsModal) els.statsModal.classList.add("hidden");
}

function renderStatsModal() {
  if (!els.statsModal || els.statsModal.classList.contains("hidden")) return;
  if (els.statsHeroSummary) {
    els.statsHeroSummary.textContent = state.maxHealth
      ? `${state.heroClass} / poziom ${state.level} / ${state.health}/${state.maxHealth} zdrowia / ${state.gold} złota / punkty: ${state.skillPoints}`
      : "Brak aktywnej postaci.";
  }
  renderSkillTree();
}

function renderSkillTree() {
  if (!els.skillTree) return;
  if (els.skillPoints) {
    els.skillPoints.textContent = state.maxHealth ? `${state.skillPoints} pkt` : "0 pkt";
  }
  els.skillTree.innerHTML = "";

  Object.entries(SKILLS).forEach(([key, skill]) => {
    const rank = state.skills?.[key] || 0;
    const canSpend = state.maxHealth > 0 && state.skillPoints > 0 && rank < skill.max;
    const card = document.createElement("article");
    card.className = "skill-card";
    card.innerHTML = `
      <div>
        <span>${escapeHTML(skill.bonus)}</span>
        <strong>${escapeHTML(skill.name)} ${rank}/${skill.max}</strong>
        <p>${escapeHTML(skill.description)}</p>
      </div>
      <button type="button" ${canSpend ? "" : "disabled"}>${rank >= skill.max ? "Maks." : "Dodaj"}</button>
    `;
    card.querySelector("button").addEventListener("click", () => spendSkillPoint(key));
    els.skillTree.appendChild(card);
  });
}

function spendSkillPoint(skillKey) {
  const skill = SKILLS[skillKey];
  if (!skill || !state.maxHealth || state.skillPoints <= 0) return;
  if ((state.skills[skillKey] || 0) >= skill.max) return;

  state.skills[skillKey] += 1;
  state.skillPoints -= 1;

  if (skillKey === "endurance") {
    state.maxHealth += 2;
    state.health = Math.min(state.maxHealth, state.health + 2);
  }

  addNotification(`Rozwój: ${skill.name} +1.`, "good");
  renderStats();
  renderNotifications();
  autoSaveGame();
}

function artifactCatalog() {
  return [
    {
      name: ARTIFACTS.key,
      type: "Główny artefakt",
      description: "Otwiera zapieczętowaną drogę pod ruinami Valdorinu.",
      hint: "Szukaj go w Krypcie Milczących.",
    },
    {
      name: ARTIFACTS.crystal,
      type: "Główny artefakt",
      description: "Chroni przed klątwą Korony i osłabia Popielnego Króla.",
      hint: "Zdobywany na szczycie Wieży Astromanty.",
    },
    {
      name: ARTIFACTS.seal,
      type: "Główny artefakt",
      description: "Pozwala wejść do sali tronowej bez śmiercionośnych pułapek.",
      hint: "Ukryty w Forcie Zdrajców.",
    },
    {
      name: ARTIFACTS.letter,
      type: "Trop fabularny",
      description: "Ujawnia prawdę o królu, Elianie i pierwszej cenie Korony.",
      hint: "Szukaj królewskich zapisków w ruinach i wieży.",
    },
    {
      name: ARTIFACTS.tear,
      type: "Dodatkowy artefakt",
      description: "Wspomnienie Eliany, które może otworzyć łagodniejsze rozwiązanie finału.",
      hint: "Poznaj historię księżniczki i wróć do jej pokoju.",
    },
    {
      name: ARTIFACTS.shard,
      type: "Przeklęty artefakt",
      description: "Daje siłę, ale wzmacnia popielny wpływ Korony.",
      hint: "Pojawia się przy wyborach bliskich zniszczeniu i władzy.",
    },
    {
      name: ARTIFACTS.dawn,
      type: "Błogosławieństwo",
      description: "Ślad Świtu, który wzmacnia wolę i pomaga przeciw ciemności.",
      hint: "Można otrzymać przy kaplicach i świętych miejscach.",
    },
  ];
}

function openArtifacts() {
  if (!els.artifactsModal) return;
  els.artifactsModal.classList.remove("hidden");
  renderArtifactsModal();
}

function closeArtifacts() {
  if (els.artifactsModal) els.artifactsModal.classList.add("hidden");
}

function renderArtifactsModal() {
  if (!els.artifactsModal || els.artifactsModal.classList.contains("hidden") || !els.artifactGrid) return;
  const owned = artifactCatalog().filter((artifact) => hasArtifact(artifact.name)).length;
  if (els.artifactsSummary) {
    els.artifactsSummary.textContent = `Główne artefakty: ${mainArtifactCount()} / 3. Wszystkie relikty: ${owned} / ${artifactCatalog().length}.`;
  }
  els.artifactGrid.innerHTML = "";
  artifactCatalog().forEach((artifact) => {
    const isOwned = hasArtifact(artifact.name);
    const card = document.createElement("article");
    card.className = `artifact-card ${isOwned ? "is-owned" : "is-missing"}`;
    card.innerHTML = `
      <span>${escapeHTML(artifact.type)}</span>
      <strong>${escapeHTML(artifact.name)}</strong>
      <p>${escapeHTML(isOwned ? artifact.description : artifact.hint)}</p>
      <em>${isOwned ? "Zdobyty" : "Nie zdobyto"}</em>
    `;
    els.artifactGrid.appendChild(card);
  });
}

function openInventory() {
  if (!els.inventoryModal) return;
  const currentWeapon = state.weapon && state.weapon !== "-" ? state.weapon : null;
  selectedInventoryItem = selectedInventoryItem || currentWeapon || state.inventory[0] || state.artifacts[0] || null;
  els.inventoryModal.classList.remove("hidden");
  renderInventoryModal();
}

function closeInventory() {
  if (els.inventoryModal) els.inventoryModal.classList.add("hidden");
}

function openJournal() {
  if (!els.journalModal) return;
  els.journalModal.classList.remove("hidden");
  renderJournalModal();
}

function closeJournal() {
  if (els.journalModal) els.journalModal.classList.add("hidden");
}

function mapDestinations() {
  const hasHero = state.maxHealth > 0;
  return [
    {
      title: "Ravenford",
      art: "village",
      scene: "village",
      description: "Gospoda, sklep, kuźnia i tablica ogłoszeń.",
      unlocked: hasHero,
      requirement: "Wybierz klasę postaci.",
    },
    {
      title: "Mroczny Las",
      art: "forest",
      scene: "forest",
      description: "Kupiecki wóz, kapliczka, stara chata i pierwsze bestie.",
      unlocked: hasHero,
      requirement: "Wybierz klasę postaci.",
    },
    {
      title: "Bagna Umarłych",
      art: "swamp",
      scene: () => (has(ITEMS.swampMap) || state.heroKey === "rogue" ? "swamp" : "swampRisk"),
      description: "Mgła, przewoźnik, zielarka Mirna i zatrute ścieżki.",
      unlocked: hasHero,
      requirement: "Wybierz klasę postaci.",
    },
    {
      title: "Krypta Milczących",
      art: "crypt",
      scene: "cryptStart",
      description: "Próba ciszy i droga do Srebrnego Klucza.",
      unlocked: hasHero && (has(ITEMS.torch) || state.heroKey === "mage"),
      requirement: "Wymaga pochodni albo magii.",
    },
    {
      title: "Fort Zdrajców",
      art: "fort",
      scene: "fortGate",
      description: "Strażnicy Caela i Pieczęć Starego Króla.",
      unlocked: hasHero,
      requirement: "Wybierz klasę postaci.",
    },
    {
      title: "Wieża Astromanty",
      art: "tower",
      scene: "towerDoor",
      description: "Sala luster, runy i Kryształ Świtu.",
      unlocked: hasHero && mainArtifactCount() > 0,
      requirement: "Wymaga co najmniej jednego artefaktu.",
    },
    {
      title: "Ruiny Valdorinu",
      art: "ruins",
      scene: "ruinsGate",
      description: "Martwa stolica i droga do pałacu Korony.",
      unlocked: hasHero,
      requirement: "Wybierz klasę postaci.",
    },
    {
      title: "Sala Korony",
      art: "crown",
      scene: "crownHall",
      description: "Finałowa próba Popielnego Króla.",
      unlocked: hasHero && mainArtifactCount() >= 3,
      requirement: "Wymaga trzech głównych artefaktów.",
    },
  ];
}

function openMap() {
  if (!els.mapModal) return;
  els.mapModal.classList.remove("hidden");
  renderMapModal();
}

function closeMap() {
  if (els.mapModal) els.mapModal.classList.add("hidden");
}

function renderMapOverview(destinations) {
  if (!els.mapOverview) return;
  const unlocked = destinations.filter((destination) => destination.unlocked).length;
  const locked = destinations.length - unlocked;
  const current = destinations.find((destination) => destination.art === document.body.dataset.scene);
  els.mapOverview.innerHTML = `
    <article>
      <span>Aktualnie</span>
      <strong>${escapeHTML(current?.title || "Nieznany trakt")}</strong>
    </article>
    <article>
      <span>Dostępne</span>
      <strong>${unlocked}</strong>
    </article>
    <article>
      <span>Zablokowane</span>
      <strong>${locked}</strong>
    </article>
    <article>
      <span>Artefakty</span>
      <strong>${mainArtifactCount()} / 3</strong>
    </article>
  `;
}

function renderMapModal() {
  if (!els.mapModal || els.mapModal.classList.contains("hidden") || !els.mapGrid) return;
  const destinations = mapDestinations();
  const unlockedCount = destinations.filter((destination) => destination.unlocked).length;
  if (els.mapSummary) {
    els.mapSummary.textContent = `Dostępne lokacje: ${unlockedCount} / ${destinations.length}. Artefakty główne: ${mainArtifactCount()} / 3.`;
  }
  renderMapOverview(destinations);
  els.mapGrid.innerHTML = "";
  destinations.forEach((destination, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `map-card ${destination.unlocked ? "is-open" : "is-locked"} ${destination.art === document.body.dataset.scene ? "is-current" : ""}`;
    card.disabled = !destination.unlocked;
    card.style.setProperty("--map-card-art", `url("${sceneArt[destination.art]}")`);
    card.innerHTML = `
      <i>${String(index + 1).padStart(2, "0")}</i>
      <span>${destination.art === document.body.dataset.scene ? "Tu jesteś" : destination.unlocked ? "Dostępne" : "Zablokowane"}</span>
      <strong>${escapeHTML(destination.title)}</strong>
      <p>${escapeHTML(destination.description)}</p>
      <em>${escapeHTML(destination.unlocked ? "Przejdź" : destination.requirement)}</em>
    `;
    card.addEventListener("click", () => {
      if (!destination.unlocked) return;
      closeMap();
      const target = typeof destination.scene === "function" ? destination.scene() : destination.scene;
      renderScene(target);
    });
    els.mapGrid.appendChild(card);
  });
}

function openSettings() {
  if (!els.settingsModal) return;
  els.settingsModal.classList.remove("hidden");
  renderSettingsModal();
}

function closeSettings() {
  if (els.settingsModal) els.settingsModal.classList.add("hidden");
}

function renderSettingsModal() {
  if (!els.settingsModal || els.settingsModal.classList.contains("hidden")) return;
  if (els.settingsMusicBtn) {
    els.settingsMusicBtn.textContent = music.running ? "Wyłącz muzykę" : "Włącz muzykę";
  }
  if (els.saveSlots) renderSaveSlots();
}

function renderSaveSlots() {
  els.saveSlots.innerHTML = "";
  for (let slot = 1; slot <= SAVE_SLOT_COUNT; slot += 1) {
    const data = readSaveData(slot);
    const card = document.createElement("article");
    card.className = "save-slot";
    card.innerHTML = `
      <div>
        <span>Slot ${slot}</span>
        <strong>${escapeHTML(saveSlotLabel(data))}</strong>
      </div>
      <div class="save-slot-actions">
        <button type="button" data-save-slot="${slot}" ${!state.maxHealth || state.enemy ? "disabled" : ""}>Zapisz</button>
        <button type="button" data-load-slot="${slot}" ${data ? "" : "disabled"}>Wczytaj</button>
      </div>
    `;
    els.saveSlots.appendChild(card);
  }
}

function questEntries() {
  const quests = [];
  const addQuest = ({ title, objective, details, completed, visible = true }) => {
    if (!visible) return;
    quests.push({
      title,
      objective,
      details,
      completed: Boolean(completed),
    });
  };

  addQuest({
    title: "Otwórz drogę do Ruin Valdorinu",
    objective: hasFlag("mainQuestKnown")
      ? `Zdobądź trzy główne artefakty. Postęp: ${mainArtifactCount()} / 3.`
      : "Porozmawiaj z kronikarzem Edrinem w gospodzie i poznaj warunek wejścia do ruin.",
    details: "Potrzebujesz Srebrnego Klucza, Kryształu Świtu i Pieczęci Starego Króla.",
    completed: mainArtifactCount() >= 3,
    visible: state.maxHealth > 0,
  });

  addQuest({
    title: "Srebrny Klucz",
    objective: hasArtifact(ARTIFACTS.key)
      ? "Srebrny Klucz jest już w twoich rękach."
      : "Wejdź do Krypty Milczących. Zabierz pochodnię albo użyj magii i przejdź próbę ciszy.",
    details: "Klucz otwiera drogę pod ruinami.",
    completed: hasArtifact(ARTIFACTS.key),
    visible: hasFlag("mainQuestKnown") || hasArtifact(ARTIFACTS.key),
  });

  addQuest({
    title: "Pieczęć Starego Króla",
    objective: hasArtifact(ARTIFACTS.seal)
      ? "Pieczęć Starego Króla została zdobyta."
      : "Dotrzyj do Fortu Zdrajców i przekonaj, przekup albo pokonaj dowódcę Caela.",
    details: "Pieczęć dezaktywuje pułapki sali tronowej.",
    completed: hasArtifact(ARTIFACTS.seal),
    visible: hasFlag("mainQuestKnown") || hasArtifact(ARTIFACTS.seal),
  });

  addQuest({
    title: "Kryształ Świtu",
    objective: hasArtifact(ARTIFACTS.crystal)
      ? "Kryształ Świtu chroni cię przed klątwą Korony."
      : mainArtifactCount() > 0
        ? "Wejdź do Wieży Astromanty i przejdź próbę luster."
        : "Zdobądź najpierw dowolny artefakt, wtedy drzwi Wieży Astromanty zareagują.",
    details: "Kryształ jest potrzebny do pełnego finału i osłabia Popielnego Króla.",
    completed: hasArtifact(ARTIFACTS.crystal),
    visible: hasFlag("mainQuestKnown") || hasArtifact(ARTIFACTS.crystal),
  });

  addQuest({
    title: "Skrzynia narzędzi Borena",
    objective: hasFlag("borenQuestDone")
      ? "Zadanie dla kowala zostało zakończone."
      : has(ITEMS.tools)
        ? "Wróć do Kuźni Borena w Ravenford i oddaj skrzynię narzędzi."
        : hasFlag("foundBorenApprentice")
          ? "Przeszukaj chatę drwala w Mrocznym Lesie i odnajdź skrzynię narzędzi."
          : "Idź do Mrocznego Lasu. Trop prowadzi do starej chaty drwala.",
    details: "Nagroda zależy od tego, czy opowiesz Borenowi również o jego uczniu.",
    completed: hasFlag("borenQuestDone"),
    visible: hasFlag("borenQuestStarted") || has(ITEMS.tools) || hasFlag("borenQuestDone"),
  });

  addQuest({
    title: "Chory strażnik Edric",
    objective: hasFlag("edricQuestDone")
      ? "Los Edrica został rozstrzygnięty."
      : has(ITEMS.elixir)
        ? "Wróć do gospody w Ravenford i użyj Eliksiru Czystej Krwi na Edricu."
        : "Zdobądź Eliksir Czystej Krwi u zielarki Mirny na Bagnach Umarłych.",
    details: "Uratowany Edric może zostawić ci Gwizdek Straży.",
    completed: hasFlag("edricQuestDone"),
    visible: hasFlag("edricLead") || hasFlag("edricQuestDone") || has(ITEMS.elixir) || hasStatus("Edric potrzebuje eliksiru od Mirny"),
  });

  addQuest({
    title: "Dzwon pod ziemią",
    objective: hasFlag("bellQuestDone")
      ? "Sprawa fragmentu dzwonu została zamknięta."
      : "Zbadaj odłamek pod starą studnią Ravenford i zdecyduj, komu go oddać.",
    details: "Dzwon reaguje na mgłę z lasu i może osłabić wpływ Korony.",
    completed: hasFlag("bellQuestDone"),
    visible: hasFlag("mainQuestKnown") || hasFlag("bellQuestDone"),
  });

  addQuest({
    title: "Rycerz bez herbu",
    objective: hasFlag("heraldlessKnightDone")
      ? "Duch rycerza odzyskał spokój albo prawda została zabezpieczona."
      : has(ITEMS.silverOrnament)
        ? "Wróć do rycerza w Mrocznym Lesie i oddaj odnaleziony herb."
        : "Szukaj srebrnej ozdoby lub dowodu prawdziwego buntu w Mrocznym Lesie.",
    details: "Ten trop może pomóc w rozmowie z Caelem w Forcie Zdrajców.",
    completed: hasFlag("heraldlessKnightDone"),
    visible: hasFlag("heraldlessKnightDone") || has(ITEMS.silverOrnament) || hasStatus("Dowód prawdziwego buntu"),
  });

  addQuest({
    title: "Korzeń z serca bagien",
    objective: hasFlag("rootHeartDone")
      ? "Sprawa bagiennego korzenia została rozwiązana."
      : "Na bagnach poproś duchy o zgodę albo zdecyduj, czy zabrać korzeń siłą.",
    details: "Korzeń i pomoc zielarki mogą doprowadzić do Eliksiru Czystej Krwi.",
    completed: hasFlag("rootHeartDone"),
    visible: hasFlag("rootHeartDone") || has(ITEMS.root) || has(ITEMS.elixir),
  });

  addQuest({
    title: "Rauk, dezerter z fortu",
    objective: hasFlag("raukQuestDone")
      ? "Los Rauka został rozstrzygnięty."
      : "Po zdobyciu pierwszego artefaktu odszukaj dezertera przy trakcie i zdecyduj, komu może zaufać.",
    details: "Rauk zna fort i boi się szeptu Korony.",
    completed: hasFlag("raukQuestDone"),
    visible: mainArtifactCount() >= 1 || hasFlag("raukQuestDone"),
  });

  addQuest({
    title: "Łza Księżniczki Eliany",
    objective: hasArtifact(ARTIFACTS.tear)
      ? "Łza Eliany została zdobyta."
      : "Poznaj historię Eliany, wróć do jej pokoju w ruinach i spróbuj naprawić wspomnienie.",
    details: "Ten dodatkowy artefakt otwiera łagodniejsze rozwiązania w finale.",
    completed: hasArtifact(ARTIFACTS.tear),
    visible: hasFlag("knowsElianaPath") || hasFlag("readElianaBook") || hasFlag("readElianaLetter") || hasArtifact(ARTIFACTS.tear),
  });

  return quests.sort((a, b) => Number(a.completed) - Number(b.completed));
}

function journalInfoEntries() {
  const entries = [];
  state.statuses.forEach((text, index) => {
    entries.push({ label: `Wpis ${index + 1}`, text });
  });
  if (!entries.length && !state.maxHealth) {
    entries.push({ label: "Pusta karta", text: "Wybierz klasę postaci, aby rozpocząć zapiski z podróży." });
  }
  if (!entries.length) {
    entries.push({ label: "Pusta karta", text: "Nie zapisano jeszcze żadnej ważnej informacji." });
  }
  return entries;
}

function journalRecentEntries() {
  if (!state.actionLog?.length) {
    return [{ label: "Pusta karta", text: "Nie ma jeszcze ostatnich działań do zapisania." }];
  }
  return state.actionLog.map((entry, index) => ({
    label: `${index + 1}. ${entry.scene}`,
    text: entry.text,
    type: entry.type,
  }));
}

function journalCountLabel(count) {
  if (count === 1) return "1 wpis";
  return `${count} wpisów`;
}

function renderJournalPreview() {
  if (!els.journalPreview) return;
  const quests = questEntries();
  const activeQuests = quests.filter((quest) => !quest.completed).length;
  if (!state.statuses.length && !activeQuests) {
    els.journalPreview.textContent = "Brak wpisów.";
    return;
  }
  const lastEntry = state.statuses[state.statuses.length - 1];
  els.journalPreview.textContent = `${activeQuests} aktywnych zadań / ${journalCountLabel(state.statuses.length)}${lastEntry ? `. Ostatni: ${lastEntry}` : "."}`;
}

function renderJournalOverview(quests) {
  if (!els.journalOverview) return;
  const active = quests.filter((quest) => !quest.completed).length;
  const completed = quests.filter((quest) => quest.completed).length;
  const info = state.statuses.length;
  const recent = state.actionLog?.length || 0;
  const cards = [
    { label: "Aktywne", value: active, tone: "active" },
    { label: "Ukończone", value: completed, tone: "done" },
    { label: "Informacje", value: info, tone: "info" },
    { label: "Ostatnie", value: recent, tone: "recent" },
  ];
  els.journalOverview.innerHTML = cards.map((card) => `
    <article class="journal-overview-card journal-overview-${card.tone}">
      <span>${escapeHTML(card.label)}</span>
      <strong>${card.value}</strong>
    </article>
  `).join("");
}

function renderJournalModal() {
  if (!els.journalModal || els.journalModal.classList.contains("hidden") || !els.journalEntries) return;
  const quests = questEntries();
  const activeQuests = quests.filter((quest) => !quest.completed).length;
  if (els.journalSummary) {
    els.journalSummary.textContent = `${activeQuests} aktywnych zadań / ${mainArtifactCount()} z 3 głównych artefaktów / ${repLabel()}`;
  }
  renderJournalOverview(quests);
  document.querySelectorAll("[data-journal-tab]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.journalTab === selectedJournalTab);
  });
  els.journalEntries.innerHTML = "";

  if (selectedJournalTab === "quests") {
    if (!quests.length) {
      els.journalEntries.innerHTML = `<article class="journal-entry"><span>Pusta karta</span><p>Nie masz jeszcze żadnego zadania.</p></article>`;
      return;
    }
    quests.forEach((quest) => {
      const node = document.createElement("article");
      node.className = `journal-entry ${quest.completed ? "is-completed" : "is-active"}`;
      node.innerHTML = `
        <div class="journal-entry-top">
          <span>${quest.completed ? "Ukończone" : "Aktywne"}</span>
          <em class="quest-state">${quest.completed ? "Zakończone" : "Do wykonania"}</em>
        </div>
        <strong>${escapeHTML(quest.title)}</strong>
        <p><b>Cel:</b> ${escapeHTML(quest.objective)}</p>
        <p><b>Trop:</b> ${escapeHTML(quest.details)}</p>
      `;
      els.journalEntries.appendChild(node);
    });
    return;
  }

  const entries = selectedJournalTab === "recent" ? journalRecentEntries() : journalInfoEntries();
  entries.forEach((entry) => {
    const node = document.createElement("article");
    node.className = `journal-entry journal-entry-note ${entry.type ? `event-${entry.type}` : ""}`;
    node.innerHTML = `
      <div class="journal-entry-top">
        <span>${escapeHTML(entry.label)}</span>
      </div>
      <p>${escapeHTML(entry.text)}</p>
    `;
    els.journalEntries.appendChild(node);
  });
}

function selectInventoryItem(item) {
  if (!item) {
    selectedInventoryItem = null;
  } else {
    selectedInventoryItem = item;
  }
  renderInventoryModal();
}

function renderInventoryModal() {
  if (!els.inventoryModal || els.inventoryModal.classList.contains("hidden")) return;
  if (selectedInventoryItem && selectedInventoryItem !== state.weapon && !has(selectedInventoryItem) && !hasArtifact(selectedInventoryItem)) {
    selectedInventoryItem = state.weapon && state.weapon !== "-" ? state.weapon : state.inventory[0] || state.artifacts[0] || null;
  }
  const equipment = activeEquipment();

  if (els.inventoryHeroSummary) {
    els.inventoryHeroSummary.textContent = state.maxHealth
      ? `${state.heroClass} / poziom ${state.level} / ${state.gold} złota / ${state.health}/${state.maxHealth} zdrowia`
      : "Brak bohatera";
  }
  if (els.inventoryHeroSketch) {
    els.inventoryHeroSketch.innerHTML = state.heroKey
      ? `<img src="${escapeHTML(HERO_ART.sketch)}" alt="" loading="lazy" /><span>${escapeHTML(HERO_MARKS[state.heroKey] || "")}</span>`
      : "?";
  }

  document.querySelectorAll(".equip-slot").forEach((button) => {
    const slot = button.dataset.slot;
    const item = equipment[slot];
    button.classList.remove("rarity-common", "rarity-good", "rarity-magic", "rarity-cursed", "rarity-legendary", "rarity-artifact", "is-selected");
    if (item) {
      button.classList.add(`rarity-${itemRarity(item)}`);
      if (selectedInventoryItem === item) button.classList.add("is-selected");
    }
    button.title = item ? itemTooltip(item) : `${SLOT_LABELS[slot]}: puste`;
    button.innerHTML = `
      <span>${escapeHTML(SLOT_LABELS[slot])}</span>
      <i class="slot-icon">${item ? itemIconHTML(item, "slot-icon-img") : "·"}</i>
      <strong>${escapeHTML(item || "puste")}</strong>
    `;
    button.onclick = () => selectInventoryItem(item || null);
  });

  renderInventoryGrid();
  renderItemDetails(selectedInventoryItem);
}

function renderInventoryGrid() {
  if (!els.inventoryGrid) return;
  const entries = inventoryEntries();
  els.inventoryGrid.innerHTML = "";
  const size = Math.max(INVENTORY_GRID_SIZE, entries.length);

  for (let index = 0; index < size; index += 1) {
    const entry = entries[index];
    const cell = document.createElement("button");
    cell.type = "button";
    cell.className = "inventory-cell";

    if (!entry) {
      cell.classList.add("is-empty");
      cell.disabled = true;
      cell.setAttribute("aria-label", "Puste miejsce");
      els.inventoryGrid.appendChild(cell);
      continue;
    }

    cell.classList.add(`rarity-${itemRarity(entry.name)}`);
    if (selectedInventoryItem === entry.name) cell.classList.add("is-selected");
    cell.title = itemTooltip(entry.name);
    cell.setAttribute("aria-label", entry.name);
    cell.innerHTML = `<span class="inventory-cell-icon">${itemIconHTML(entry.name, "inventory-cell-img")}</span>${entry.count > 1 ? `<span class="inventory-cell-count">${entry.count}</span>` : ""}`;
    cell.addEventListener("click", () => selectInventoryItem(entry.name));
    els.inventoryGrid.appendChild(cell);
  }
}

function renderItemDetails(item) {
  if (!els.itemDetails) return;
  if (!item) {
    els.itemDetails.innerHTML = `
      <p class="item-details-kicker">Przedmiot</p>
      <h4>Pusta karta</h4>
      <p>Kurz osiada na nieopisanym miejscu w kronice.</p>
    `;
    return;
  }

  const slot = itemSlot(item);
  const bonuses = itemBonusList(item);
  const actions = [];
  const inBag = state.inventory.includes(item);
  const equippedSlot = equippedSlotForItem(item);
  if (HEALING_ITEMS[item] && inBag) actions.push(`<button type="button" data-action="use">Użyj</button>`);
  if (WEAPONS[item] !== undefined && inBag && state.weapon !== item) actions.push(`<button type="button" data-action="equip">Załóż</button>`);
  if (state.weapon === item && item !== "Gołe ręce") actions.push(`<button type="button" data-action="unequip">Zdejmij</button>`);
  if (EQUIPPABLE_SLOTS.has(slot) && inBag && equippedSlot !== slot) actions.push(`<button type="button" data-action="wear">Załóż</button>`);
  if (EQUIPPABLE_SLOTS.has(slot) && equippedSlot === slot) actions.push(`<button type="button" data-action="takeoff">Zdejmij</button>`);
  if (inBag && !isArtifactItem(item)) actions.push(`<button type="button" class="danger" data-action="drop">Wyrzuć</button>`);

  els.itemDetails.innerHTML = `
    <div class="item-details-title">
      <span class="item-details-icon">${itemIconHTML(item, "item-details-img")}</span>
      <div>
        <p class="item-details-kicker">${escapeHTML(SLOT_LABELS[slot] || "Plecak")} / ${escapeHTML(rarityLabel(itemRarity(item)))}</p>
        <h4>${escapeHTML(item)}</h4>
      </div>
    </div>
    <p>${escapeHTML(itemDescription(item))}</p>
    ${bonuses.length ? `<ul class="item-bonus-list">${bonuses.map((bonus) => `<li>${escapeHTML(bonus)}</li>`).join("")}</ul>` : ""}
    <p>Wartość: ${escapeHTML(itemValue(item))}</p>
    ${actions.length ? `<div class="item-actions">${actions.join("")}</div>` : ""}
  `;

  els.itemDetails.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.action;
      if (action === "use") useInventoryItem(item);
      if (action === "equip") equipInventoryWeapon(item);
      if (action === "unequip") unequipInventoryWeapon();
      if (action === "wear") equipEquipmentItem(item);
      if (action === "takeoff") unequipEquipmentItem(item);
      if (action === "drop") dropInventoryItem(item);
    });
  });
}

function useInventoryItem(item) {
  const healing = HEALING_ITEMS[item];
  if (!healing) return;
  if (state.health >= state.maxHealth) {
    addNotification("Zdrowie jest już pełne.", "info");
    renderNotifications();
    renderInventoryModal();
    return;
  }
  if (!removeItem(item)) return;
  heal(healing);
  if (!has(item)) selectedInventoryItem = state.inventory[0] || state.artifacts[0] || state.weapon || null;
  renderStats();
  renderNotifications();
  renderInventoryModal();
  autoSaveGame();
}

function equipInventoryWeapon(item) {
  if (WEAPONS[item] === undefined || !state.inventory.includes(item)) return;
  if (!removeInventoryItem(item, false)) return;
  const previousWeapon = state.weapon;
  if (previousWeapon && previousWeapon !== "-" && previousWeapon !== "Gołe ręce" && previousWeapon !== item && !state.inventory.includes(previousWeapon)) {
    state.inventory.push(previousWeapon);
  }
  state.weapon = item;
  selectedInventoryItem = item;
  addNotification(`Zakładasz broń: ${item}.`, "item");
  renderStats();
  renderNotifications();
  renderInventoryModal();
  autoSaveGame();
}

function unequipInventoryWeapon() {
  if (!state.weapon || state.weapon === "-" || state.weapon === "Gołe ręce") return;
  const removedWeapon = state.weapon;
  if (!state.inventory.includes(removedWeapon)) state.inventory.push(removedWeapon);
  state.weapon = "Gołe ręce";
  selectedInventoryItem = removedWeapon;
  addNotification(`Zdejmujesz broń: ${removedWeapon}.`, "item");
  renderStats();
  renderNotifications();
  renderInventoryModal();
  autoSaveGame();
}

function dropInventoryItem(item) {
  if (!state.inventory.includes(item) || isArtifactItem(item)) return;
  removeInventoryItem(item, false);
  addNotification(`Wyrzucasz: ${item}.`, "loss");
  if (!has(item)) selectedInventoryItem = state.inventory[0] || state.artifacts[0] || state.weapon || null;
  renderStats();
  renderNotifications();
  renderInventoryModal();
  autoSaveGame();
}

function useHealingItem(item) {
  const healing = HEALING_ITEMS[item];
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
  scaleEnemy(enemy);
  if (enemy.name === "Cień Gracza") {
    enemy.health = state.health + 5 + Math.max(0, state.rep.greed - 2) * 2;
    enemy.attack = Math.ceil(attackValue() / 2) + 3 + Math.max(0, state.rep.ash - 2);
    if (hasFlag("knowsOwnFear")) enemy.health = Math.max(8, Math.floor(enemy.health * 0.85));
    if (hasFlag("tookChildTreasure")) enemy.health += 6;
  }
  if (enemy.name === "Popielny Król") {
    if (hasArtifact(ARTIFACTS.crystal)) enemy.attack -= 2;
    if (hasFlag("destroyedShrine")) enemy.health += 10;
    if (hasArtifact(ARTIFACTS.dawn)) enemy.health -= 5;
    if (hasFlag("marketVoicesRestored")) enemy.health -= 5;
    if (hasFlag("freedAshenKnight")) enemy.health -= 5;
    if (hasFlag("prayedForValdorinAll")) enemy.health -= 8;
    if (hasFlag("cleansedBlackShard")) enemy.attack -= 1;
  }
  state.enemy = enemy;
  state.afterFight = winSceneOrFn;
  state.returnScene = loseScene;
  state.fightFlags = {};
  renderFight();
}

function scaleEnemy(enemy) {
  enemy.maxHealth = enemy.maxHealth || enemy.health;
  const artifacts = mainArtifactCount();
  const levelPressure = Math.max(0, state.level - 1) * 0.04;
  let healthScale = 1.18 + artifacts * 0.08 + levelPressure;
  let attackBonus = 1 + Math.floor(artifacts / 2);

  if (enemy.finalBoss) {
    healthScale += 0.18;
    attackBonus += 2;
  }

  if (enemy.undead || enemy.ghost) healthScale += 0.06;
  enemy.health = Math.max(1, Math.ceil(enemy.health * healthScale));
  enemy.maxHealth = enemy.health;
  enemy.attack = Math.max(1, Math.ceil(enemy.attack + attackBonus));
}

function enemyTypeLabel(enemy) {
  if (enemy.finalBoss) return "Boss finałowy";
  if (enemy.undead) return "Nieumarły";
  if (enemy.ghost) return "Duch";
  if (/wil|best|topiel|upiór|cień/i.test(enemy.name)) return "Bestia klątwy";
  return "Przeciwnik";
}

function enemyPortraitGlyph(enemy) {
  if (enemy.finalBoss) return "KRÓL";
  if (/cień/i.test(enemy.name)) return "CIEŃ";
  if (/wil/i.test(enemy.name)) return "WILK";
  if (/szkielet|strażnik/i.test(enemy.name)) return "KOŚĆ";
  if (/topiel/i.test(enemy.name)) return "BAG";
  if (/rycerz|cael|dowódca/i.test(enemy.name)) return "FORT";
  if (/duch|upiór|widmo|zjawa/i.test(enemy.name)) return "DUCH";
  return "WRÓG";
}

function renderCombatPanel() {
  if (!els.combatPanel || !state.enemy) return;
  const enemy = state.enemy;
  const maxHealth = Math.max(1, enemy.maxHealth || enemy.health);
  const healthPercent = Math.max(0, Math.min(100, (enemy.health / maxHealth) * 100));
  els.combatPanel.hidden = false;
  els.combatPanel.innerHTML = `
    <div class="enemy-portrait">${escapeHTML(enemyPortraitGlyph(enemy))}</div>
    <div class="enemy-card-copy">
      <span>${escapeHTML(enemyTypeLabel(enemy))}</span>
      <strong>${escapeHTML(enemy.name)}</strong>
      <div class="enemy-stats">
        <small>Atak ${enemy.attack}</small>
        <small>Zdrowie ${Math.max(0, enemy.health)} / ${maxHealth}</small>
      </div>
      <div class="enemy-meter"><b style="width: ${healthPercent}%"></b></div>
    </div>
  `;
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
  if (state.weapon === "Młot Przysięgi" && !state.fightFlags.oathHammerUsed) {
    options.push({ label: "Uderz Młotem Przysięgi", action: useOathHammer, kind: "danger" });
  }
  if (has(ITEMS.guardWhistle) && !enemy.finalBoss) {
    options.push({ label: "Użyj Gwizdka Straży", action: useGuardWhistle, kind: "good" });
  }
  if (has(ITEMS.poisonNeedles)) {
    options.push({ label: "Rzuć igły z jadem", action: usePoisonNeedles, kind: "danger" });
  }
  if (has(ITEMS.silverMoss) && enemy.undead) {
    options.push({ label: "Proszek srebrnego mchu", action: useSilverMoss, kind: "good" });
  }
  if (has(ITEMS.dawnOil) && !state.fightFlags.dawnOil) {
    options.push({ label: "Nałóż olej Świtu", action: useDawnOil, kind: "good" });
  }
  if (has(ITEMS.ashDust)) {
    options.push({ label: "Rzuć Popielny Proch", action: useAshDust, kind: "danger" });
  }
  if (has(ITEMS.blindSmoke)) {
    options.push({ label: "Fiolka ślepego dymu", action: useBlindSmoke });
  }
  renderCustom(
    `Walka: ${enemy.name}`,
    `${message ? `${message}\n` : ""}${enemy.name}: ${enemy.health} zdrowia.\nTy: ${state.health}/${state.maxHealth} zdrowia.`,
    options,
    enemy.finalBoss ? "crown" : SCENES[state.scene]?.art || "forest",
  );
  renderCombatPanel();
  document.body.classList.add("combat-pulse");
  window.setTimeout(() => document.body.classList.remove("combat-pulse"), 220);
}

function playerAttack() {
  const enemy = state.enemy;
  let amount = attackValue() + state.nextAttackBonus;
  if (enemy.undead && state.weapon === "Kostur Iskier") amount += 3;
  if (enemy.undead && state.weapon === "Miecz Strażnika Bramy") amount += 2;
  if ((enemy.undead || enemy.ghost) && state.fightFlags.dawnOil) amount += 2;
  if ((enemy.name.includes("Rycerz") || enemy.name.includes("Strażnik")) && state.weapon === "Ostrze Królewskiej Straży") amount += 3;
  if (isHumanEnemy(enemy) && state.weapon === "Topór najemnika") amount += 2;
  if (state.heroKey === "rogue" && state.weapon === "Para Cienkich Ostrzy" && !state.fightFlags.attacked) amount += 2;
  if (state.heroKey === "outlaw" && state.weapon === "Nóż Dłużnika" && (hasFlag("intimidatedEnemy") || enemy.name.includes("Najemnik"))) amount += 2;
  if (enemy.ghost && has(ITEMS.torch)) amount += 2;
  if (state.weapon === "Siekiera drwala" && enemy.name.includes("Wilk")) amount += 2;
  if (has(ITEMS.hangmanNail) && enemy.ghost) amount += 2;
  state.nextAttackBonus = 0;
  state.fightFlags.attacked = true;
  enemy.health -= amount;
  if (enemy.health <= 0) return winFight(`Zadajesz ${amount} obrażeń.`);
  enemyStrike(`Zadajesz ${amount} obrażeń.`);
}

function isHumanEnemy(enemy) {
  return ["Najemnik", "Cael", "Dowódca", "Strażnik", "Rauk"].some((name) => enemy.name.includes(name));
}

function usePotionInFight() {
  if (removeItem(ITEMS.bigPotion)) {
    heal(20);
    return enemyStrike("Wypijasz dużą miksturę leczenia.");
  }
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

function useOathHammer() {
  state.fightFlags.oathHammerUsed = true;
  const amount = Math.max(6, attackValue() - 2);
  state.enemy.health -= amount;
  if (state.enemy.health <= 0) return winFight(`Młot Przysięgi odbiera wrogowi ${amount} zdrowia.`);
  renderFight(`Młot Przysięgi uderza w ziemię. Wróg traci ${amount} zdrowia i gubi turę.`);
}

function useGuardWhistle() {
  if (!removeItem(ITEMS.guardWhistle)) return renderFight("Nie masz Gwizdka Straży.");
  state.enemy.health -= 8;
  if (state.enemy.health <= 0) return winFight("Gwizdek Straży przyzywa pomoc i kończy walkę.");
  renderFight("Gwizdek Straży odciąga przeciwnika. Wróg traci 8 zdrowia i nie kontratakuje.");
}

function usePoisonNeedles() {
  if (!removeItem(ITEMS.poisonNeedles)) return renderFight("Nie masz igieł z jadem.");
  state.enemy.health -= 6;
  state.enemy.attack = Math.max(1, state.enemy.attack - 1);
  if (state.enemy.health <= 0) return winFight("Jad Topielca kończy walkę.");
  enemyStrike("Igły z jadem zadają 6 obrażeń i osłabiają atak przeciwnika.");
}

function useSilverMoss() {
  if (!removeItem(ITEMS.silverMoss)) return renderFight("Nie masz proszku srebrnego mchu.");
  state.enemy.health -= 3;
  if (state.enemy.health <= 0) return winFight("Srebrny mech rozsypuje nieumarłego w pył.");
  renderFight("Srebrny mech osłabia nieumarłego o 3 zdrowia.");
}

function useDawnOil() {
  if (!removeItem(ITEMS.dawnOil)) return renderFight("Nie masz oleju Świtu.");
  state.fightFlags.dawnOil = true;
  renderFight("Olej Świtu rozgrzewa ostrze. Przeciw cieniom i nieumarłym zadasz +2 obrażenia.");
}

function useAshDust() {
  if (!removeItem(ITEMS.ashDust)) return renderFight("Nie masz Popielnego Prochu.");
  state.rep.ash += 1;
  addNotification("Reputacja: popiół +1.", "danger");
  state.enemy.health -= 12;
  if (state.enemy.health <= 0) return winFight("Popielny Proch rozrywa przeciwnika.");
  enemyStrike("Popielny Proch zadaje 12 obrażeń, ale Korona słyszy ten wybór.");
}

function useBlindSmoke() {
  if (!removeItem(ITEMS.blindSmoke)) return renderFight("Nie masz fiolki ślepego dymu.");
  state.enemy = null;
  renderScene(state.returnScene || "village");
}

function flee() {
  const fleeChance = Math.max(0.25, Math.min(0.5, 0.35 + Math.max(0, cunningValue()) * 0.02 + Math.max(0, dodgeValue()) * 0.01));
  if (Math.random() < fleeChance) {
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
  const dodgeChance = Math.max(0, Math.min(0.35, dodgeValue() * 0.06));
  if (dodgeChance && Math.random() < dodgeChance) {
    return renderFight(`${prefix} Unikasz kontrataku.`);
  }
  if (has(ITEMS.lastGateShield) && !state.fightFlags.shieldUsed && amount >= 5) {
    state.fightFlags.shieldUsed = true;
    return renderFight(`${prefix} Tarcza Ostatniej Bramy pochłania cały cios.`);
  }
  amount -= defenseValue();
  if (enemy.undead || enemy.finalBoss) amount -= Math.floor(Math.max(0, willValue()) / 2);
  amount = Math.max(1, amount);
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
  if (enemy.weapon) {
    state.weapon = enemy.weapon;
    addNotification(`Nowa broń: ${enemy.weapon}.`, "item");
  }
  if (enemy.xp) addXP(enemy.xp);
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
  if (mode === "forgive" && (hasArtifact(ARTIFACTS.letter) || hasFlag("readElianaBook") || hasFlag("prayedForKing")) && state.rep.good >= 5) return endingBest();
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
    atmosphere: "Wybór klasy uruchamia muzykę i rozpoczyna historię w Ravenford.",
    text: () => "Valdorin budzi starą klątwę. Wybierz wędrowca, który przejdzie przez czarny deszcz, popiół i pamięć umarłego miasta.\nKażda klasa ma inny ekwipunek startowy, inne statystyki i własne sposoby rozwiązywania scen.",
    choices: [
      c("Poradnik", { action: openGuide, kind: "good", asset: HERO_ART.guide, description: "Solucja, zakończenia, misje poboczne, wyposażenie i taktyki.", meta: "Otwiera osobną stronę HTML" }),
      c("Wojownik", { action: () => chooseHero("warrior"), asset: HERO_ART.warrior, description: "Najwięcej zdrowia, cięższa broń i pancerz. Dobry w walce i zastraszaniu.", meta: "Zdrowie 38 / Złoto 8 / Broń: Stary miecz" }),
      c("Łotrzyk", { action: () => chooseHero("rogue"), asset: HERO_ART.rogue, description: "Wytrychy, unik, spryt i ciche przejścia. Często omija walkę.", meta: "Zdrowie 30 / Złoto 16 / Broń: Sztylet" }),
      c("Uczeń Maga", { action: () => chooseHero("mage"), asset: HERO_ART.mage, description: "Słabszy fizycznie, ale czyta runy, rozprasza iluzje i rozmawia z duchami.", meta: "Zdrowie 26 / Złoto 10 / Broń: Kostur ucznia" }),
      c("Banita", { action: () => chooseHero("outlaw"), asset: HERO_ART.outlaw, description: "Brutalny spryt, kontakty z półświatkiem i lepsze rozmowy z dezerterami.", meta: "Zdrowie 32 / Złoto 5 / Broń: Toporek Banity" }),
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
      c("Dzwon pod ziemią", { to: "bellQuest", when: () => hasFlag("mainQuestKnown") && !hasFlag("bellQuestDone") }),
      c("Sklep Loriana", { to: "shop" }),
      c("Kuźnia Borena", { to: "forge" }),
      c("Kaplica Świtu", { to: "chapel" }),
      c("Tablica ogłoszeń", { to: "noticeBoard" }),
      c("Dezerter przy trakcie", { to: "raukQuest", when: () => mainArtifactCount() >= 1 && !hasFlag("raukQuestDone") }),
      c("Nocny atak na Ravenford", { to: "nightAttack", when: () => mainArtifactCount() >= 1 && !hasFlag("nightAttackDone"), kind: "danger" }),
      c("Kronikarz przy studni", { to: "edrinWell", when: () => mainArtifactCount() >= 2 && !hasFlag("edrinWellDone") }),
    ],
  },
  bellQuest: {
    title: "Dzwon, który bije pod ziemią",
    art: "village",
    text: () => "Karczmarz Oren prowadzi cię pod starą studnię. Tam, pod kamiennym wieńcem, tkwi odłamek metalu, który drży w rytmie odległych ruin.\n„To z niego odlano serce dzwonu” - mówi Oren. „Kiedy bije, mgła odpowiada.”",
    choices: [
      c("Oddaj fragment Alenie do oczyszczenia", { to: "village", effects: [{ xp: 80 }, { gold: 5 }, { status: "Oczyszczony Dzwon Ravenford" }, { flag: "cleansedBell" }, { flag: "bellQuestDone" }, { rep: { good: 1 } }], kind: "good" }),
      c("Pokaż fragment Edrinowi", { to: "village", effects: [{ xp: 70 }, { status: "Wie, że Ravenford zbudowano na dawnym trakcie Valdorinu" }, { flag: "edrinBellTruth" }, { flag: "bellQuestDone" }, { rep: { good: 1 } }] }),
      c("Sprzedaj fragment Lorianowi", { to: "village", effects: [{ xp: 40 }, { gold: 15 }, { status: "Sprzedał fragment dzwonu" }, { flag: "soldBellFragment" }, { flag: "bellQuestDone" }, { rep: { greed: 1 } }], kind: "danger" }),
      c("Zniszcz fragment", { to: "village", effects: [{ xp: 60 }, { status: "Przerwał głos dzwonu" }, { flag: "destroyedBellFragment" }, { flag: "bellQuestDone" }, { rep: { ash: 1 } }], kind: "danger" }),
      c("Jeszcze nie teraz", { to: "village" }),
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
      c("Zajmij się chorym strażnikiem", { to: "edricQuest", unless: () => hasFlag("edricQuestDone") }),
      c("Zapytaj Edrina o zaginioną księgę", { to: "edrinBookQuest", unless: () => hasFlag("edrinBookDone") }),
      c("Wróć na plac", { to: "village" }),
    ],
  },
  edricQuest: {
    title: "Chory strażnik Ravenford",
    art: "village",
    text: () => "Edric leży przy kominku i próbuje przypomnieć sobie imię żony. Mgła nie zostawiła rany na skórze, tylko dziurę w pamięci.\n„Jeśli zapomnę, po co wracać?” - pyta.",
    choices: [
      c("Wylecz Edrica Eliksirem Czystej Krwi", { requireItem: ITEMS.elixir, to: "tavern", effects: [{ removeItem: ITEMS.elixir }, { xp: 130 }, { item: ITEMS.guardWhistle }, { flag: "healedEdric" }, { flag: "edricQuestDone" }, { status: "Wyleczył Edrica" }, { rep: { good: 2 } }], kind: "good" }),
      c("Spowolnij klątwę magią", { requireClass: "mage", to: "tavern", effects: [{ xp: 80 }, { flag: "edricQuestDone" }, { status: "Edric wskazał dawny trakt do fortu" }, { rep: { good: 1 } }] }),
      c("Zachowaj eliksir dla siebie", { to: "tavern", effects: [{ xp: 30 }, { flag: "edricQuestDone" }, { flag: "edricForgotten" }, { status: "Edric traci imiona" }, { rep: { greed: 1 } }], kind: "danger" }),
      c("Wróć", { to: "tavern" }),
    ],
  },
  edrinBookQuest: {
    title: "Zaginiona księga kronikarza",
    art: "village",
    text: () => "Edrin przyznaje, że ukrył starszą wersję kroniki za gospodą. Ślad popiołu prowadzi do lasu, jakby sama księga próbowała wrócić do Korony.",
    choices: [
      c("Odzyskaj księgę i oddaj Edrinowi", { fight: { enemy: () => ({ ...ENEMIES.scribeShade, xp: 90 }), win: () => { addNotification("Edrin przyjmuje księgę drżącymi rękami.", "info"); addStatus("Zaufanie Kronikarza"); setFlag("edrinBookDone"); state.gold += 10; addNotification("Zdobywasz 10 złota.", "item"); renderScene("tavern"); } }, kind: "danger" }),
      c("Oddaj księgę Alenie", { fight: { enemy: () => ({ ...ENEMIES.scribeShade, xp: 120 }), win: () => { setFlag("edrinBookDone"); setFlag("gaveBookToAlena"); addStatus("Alena zna pełniejszą historię Eliany"); state.rep.good += 2; addNotification("Reputacja: dobro +2.", "good"); renderScene("chapel"); } }, kind: "good" }),
      c("Zachowaj zakazaną kronikę", { fight: { enemy: () => ({ ...ENEMIES.scribeShade, xp: 70 }), win: () => { setFlag("edrinBookDone"); addItem(ITEMS.forbiddenChronicle); state.rep.ash += 1; addNotification("Reputacja: popiół +1.", "danger"); renderScene("tavern"); } }, kind: "danger" }),
      c("Wróć", { to: "tavern" }),
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
      c("Kup dużą miksturę leczenia", { action: () => buy(ITEMS.bigPotion, hasStatus("Pomógł kupcowi") ? 8 : 12, "shop") }),
      c("Kup mapę bagien", { action: () => buy(ITEMS.swampMap, hasStatus("Pomógł kupcowi") ? 5 : hasStatus("Okradł kupca") ? 12 : 8, "shop") }),
      c("Kup wytrychy", { action: () => buy(ITEMS.lockpicks, 10, "shop") }),
      c("Kup zestaw precyzyjnych wytrychów", { action: () => buy(ITEMS.precisionLockpicks, hasStatus("Pomógł kupcowi") ? 9 : 14, "shop") }),
      c("Kup linkę z hakiem", { action: () => buy(ITEMS.grapplingHook, 7, "shop") }),
      c("Kup kredę runiczną", { action: () => buy(ITEMS.runicChalk, 6, "shop") }),
      c("Kup Kostur Iskier - 12 złota", { requireGold: 12, to: "shop", when: () => state.heroKey === "mage" || knowledgeValue() >= 2, effects: [{ weapon: "Kostur Iskier" }] }),
      c("Kup fiolkę ślepego dymu", { action: () => buy(ITEMS.blindSmoke, 8, "shop"), when: () => state.heroKey === "rogue" || state.heroKey === "outlaw" }),
      c("Kup chleb", { action: () => buy(ITEMS.bread, 2, "shop") }),
      c("Ostatnia przesyłka Loriana", { to: "lorianPackage", when: () => hasStatus("Pomógł kupcowi") && !hasFlag("lorianPackageDone") }),
      c("Zapytaj o czarny handel", { to: "blackMarket", when: () => state.heroKey === "outlaw" || state.rep.greed >= 2 }),
      c("Wróć", { to: "village" }),
    ],
  },
  blackMarket: {
    title: "Czarny handlarz",
    art: "village",
    text: () => "Za sklepem Loriana stoi wędrowiec z twarzą ukrytą pod mokrym kapturem. Na płachcie ma rzeczy, których uczciwi kupcy nie opisują w księgach.",
    choices: [
      c("Kup Sakiewkę Fałszywych Monet - 12 złota", { requireGold: 12, to: "blackMarket", effects: [{ item: ITEMS.falseCoins }, { rep: { greed: 1 } }] }),
      c("Kup Pałkę Poborcy - 12 złota", { requireGold: 12, to: "blackMarket", effects: [{ weapon: "Pałka Poborcy" }] }),
      c("Kup Łańcuch z Czarnego Targu - 18 złota", { requireGold: 18, to: "blackMarket", effects: [{ weapon: "Łańcuch z Czarnego Targu" }, { rep: { greed: 1 } }] }),
      c("Kup Popielny Proch - 10 złota", { requireGold: 10, to: "blackMarket", effects: [{ item: ITEMS.ashDust }, { rep: { ash: 1 } }], kind: "danger" }),
      c("Kup Gwóźdź z Szubienicy - 9 złota", { requireGold: 9, to: "blackMarket", effects: [{ item: ITEMS.hangmanNail }, { rep: { ash: 1 } }], kind: "danger" }),
      c("Wróć", { to: "shop" }),
    ],
  },
  lorianPackage: {
    title: "Ostatnia przesyłka Loriana",
    art: "village",
    text: () => "Lorian kładzie na ladzie paczkę owiniętą w ceratę. W środku brzęczą stare monety, ale pod sznurkiem widać pieczęć rodziny, która uciekła z Valdorinu po pierwszej nocy klątwy.",
    choices: [
      c("Dostarcz paczkę bez otwierania", { to: "shop", effects: [{ xp: 90 }, { gold: 10 }, { item: ITEMS.honestDebtRing }, { status: "Zaufanie Loriana" }, { flag: "lorianPackageDone" }, { rep: { good: 1 } }], kind: "good" }),
      c("Oddaj list Alenie", { to: "chapel", effects: [{ xp: 120 }, { status: "Modlitwa za podziemia Valdorinu" }, { flag: "lorianPackageDone" }, { flag: "gaveLorianLetterToAlena" }, { rep: { good: 2 } }], kind: "good" }),
      c("Oddaj list Edrinowi", { to: "tavern", effects: [{ xp: 110 }, { status: "Wie o uciekinierach z podziemi Valdorinu" }, { flag: "lorianPackageDone" }, { flag: "edrinKnowsUndergroundSurvivors" }, { rep: { good: 1 } }] }),
      c("Sprzedaj stare monety", { to: "shop", effects: [{ xp: 40 }, { gold: 35 }, { item: ITEMS.falseCoins }, { flag: "lorianPackageDone" }, { status: "Sprzedał monety uciekinierów" }, { rep: { greed: 1 } }], kind: "danger" }),
      c("Wróć", { to: "shop" }),
    ],
  },
  forge: {
    title: "Kuźnia Borena",
    art: "village",
    text: () => "Boren jest praktyczny i szorstki. Nie wierzył w legendy, dopóki mgła nie zabrała jego ucznia. Teraz prosi o skrzynię narzędzi z Mrocznego Lasu.",
    choices: [
      c("Kup Stalowy miecz - 15 złota", { requireGold: 15, to: "forge", effects: [{ weapon: "Stalowy miecz" }] }),
      c("Kup Topór najemnika - 18 złota", { requireGold: 18, to: "forge", effects: [{ weapon: "Topór najemnika" }] }),
      c("Kup Miecz Strażnika Bramy - 24 złota", { requireGold: 24, to: "forge", when: () => hasArtifact(ARTIFACTS.key) || hasFlag("cryptRespect"), effects: [{ weapon: "Miecz Strażnika Bramy" }] }),
      c("Kup Parę Cienkich Ostrzy - 14 złota", { requireGold: 14, to: "forge", when: () => state.heroKey === "rogue", effects: [{ weapon: "Para Cienkich Ostrzy" }] }),
      c("Kup Skórzaną Kurtkę Najemnika - 10 złota", { requireGold: 10, to: "forge", effects: [{ item: ITEMS.mercJacket }] }),
      c("Kup Rękawice Bramnika - 10 złota", { requireGold: 10, to: "forge", when: () => hasFlag("cleansedBell") || hasFlag("edrinBellTruth"), effects: [{ item: ITEMS.gatekeeperGloves }] }),
      c("Przekuj dzwon na Sztylet Milczącego Dzwonu", { requireGold: 8, to: "forge", when: () => hasFlag("edrinBellTruth") && state.heroKey === "rogue" && !hasFlag("silentBellDaggerMade"), effects: [{ weapon: "Sztylet Milczącego Dzwonu" }, { flag: "silentBellDaggerMade" }] }),
      c("Przyjmij zadanie Borena", { to: "forge", unless: () => hasFlag("borenQuestStarted"), effects: [{ flag: "borenQuestStarted" }, { status: "Boren szuka skrzyni narzędzi" }] }),
      c("Oddaj skrzynię i opowiedz o uczniu", { requireItem: ITEMS.tools, when: () => hasFlag("foundBorenApprentice") && !hasFlag("borenQuestDone"), to: "forge", effects: [{ removeItem: ITEMS.tools }, { xp: 150 }, { weapon: "Stalowy miecz" }, { flag: "helpedBoren" }, { flag: "borenQuestDone" }, { status: "Boren naprawi Pieczęć, jeśli będzie trzeba" }, { rep: { good: 2 } }], kind: "good" }),
      c("Oddaj skrzynię narzędzi", { requireItem: ITEMS.tools, when: () => !hasFlag("borenQuestDone"), to: "forge", effects: [{ removeItem: ITEMS.tools }, { xp: 80 }, { item: ITEMS.ring }, { flag: "helpedBoren" }, { flag: "borenQuestDone" }, { status: "Pomógł kowalowi" }, { rep: { good: 1 } }] }),
      c("Zachowaj narzędzia dla siebie", { requireItem: ITEMS.tools, when: () => !hasFlag("borenQuestDone"), to: "forge", effects: [{ xp: 40 }, { flag: "keptBorenTools" }, { flag: "borenQuestDone" }, { status: "Boren odmawia zniżek" }, { rep: { greed: 1 } }], kind: "danger" }),
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
      c("Sprawdź księgę zmarłych drwala", { requireFlag: "woodcutterInitials", to: "chapel", unless: () => hasFlag("woodcutterNameKnown"), effects: [{ flag: "woodcutterNameKnown" }, { status: "Zna imię drwala: Tomasz Rana" }] }),
      c("Świece dla Kaplicy Świtu", { to: "candlesQuest", unless: () => hasFlag("candlesQuestDone") }),
      c("Odbierz Znak Świtu", { to: "chapel", when: () => hasFlag("gaveCandlesToChapel") && !has(ITEMS.dawnSign), effects: [{ item: ITEMS.dawnSign }, { status: "Znak Świtu wzmacnia wolę" }], kind: "good" }),
      c("Modlitwa za miasto bez grobów", { to: "prayerQuest", when: () => (hasArtifact(ARTIFACTS.letter) || hasFlag("visitedRuins") || hasFlag("marketVoicesRestored")) && !hasFlag("prayerQuestDone") }),
      c("Wróć", { to: "village" }),
    ],
  },
  candlesQuest: {
    title: "Świece dla Kaplicy Świtu",
    art: "village",
    text: () => "Alena pokazuje kosz wosku, ziół i resztek knotów. „Jedna świeca trzyma ciemność z daleka. Kilka może utrzymać całe Ravenford przez noc.”",
    choices: [
      c("Oddaj wszystko kaplicy", { to: "chapel", effects: [{ xp: 100 }, { status: "Światło w Kaplicy" }, { flag: "gaveCandlesToChapel" }, { flag: "candlesQuestDone" }, { rep: { good: 2 } }], kind: "good" }),
      c("Podziel świece z Aleną", { to: "chapel", effects: [{ xp: 80 }, { item: ITEMS.dawnCandle }, { item: ITEMS.dawnCandle }, { flag: "candlesQuestDone" }, { status: "Niesie Świece Świtu" }, { rep: { good: 1 } }] }),
      c("Sprzedaj składniki", { to: "village", effects: [{ xp: 30 }, { gold: 20 }, { flag: "candlesQuestDone" }, { status: "Sprzedał składniki kaplicy" }, { rep: { greed: 1 } }], kind: "danger" }),
      c("Wróć", { to: "chapel" }),
    ],
  },
  prayerQuest: {
    title: "Modlitwa za miasto bez grobów",
    art: "village",
    text: () => "Alena chce odprawić rytuał pamięci dla miasta, które nigdy nie miało grobów. Na ołtarzu czeka świeca, garść popiołu i puste miejsce na imiona.",
    choices: [
      c("Módl się za mieszkańców", { requireFlag: "marketVoicesRestored", to: "chapel", effects: [{ xp: 180 }, { status: "Pamięć Valdorinu" }, { flag: "prayedForValdorin" }, { flag: "prayerQuestDone" }, { rep: { good: 2 } }], kind: "good" }),
      c("Módl się za Elianę", { when: () => hasFlag("readElianaBook") || hasFlag("readElianaLetter") || hasArtifact(ARTIFACTS.tear), to: "chapel", effects: [{ xp: 200 }, { status: "Modlitwa za Elianę" }, { flag: "prayedForEliana" }, { flag: "prayerQuestDone" }, { rep: { good: 2 } }], kind: "good" }),
      c("Módl się za Arvanda", { requireGood: 5, to: "chapel", effects: [{ xp: 180 }, { status: "Modlitwa za Arvanda" }, { flag: "prayedForKing" }, { flag: "prayerQuestDone" }, { rep: { good: 1 } }] }),
      c("Módl się za wszystkich", { requireGood: 8, when: () => hasFlag("marketVoicesRestored") && (hasFlag("prayedForEliana") || hasArtifact(ARTIFACTS.tear) || hasFlag("readElianaBook")), to: "chapel", effects: [{ xp: 250 }, { item: ITEMS.ritualCandle }, { item: ITEMS.mournerCloak }, { status: "Rytuał Miasta bez Grobów" }, { flag: "prayedForValdorinAll" }, { flag: "prayerQuestDone" }, { rep: { good: 3 } }], kind: "good" }),
      c("Wróć", { to: "chapel" }),
    ],
  },
  noticeBoard: {
    title: "Tablica ogłoszeń",
    art: "village",
    text: () => "Na mokrych kartkach widać prośby o pomoc: skrzynia narzędzi Borena, zagubione dziecko, głód w Ravenford, chory strażnik, świece Aleny i plotki o duchu drwala.",
    choices: [
      c("Pomóż z głodem w Ravenford", { requireItem: ITEMS.bread, to: "noticeBoard", unless: () => hasFlag("helpedVillageHunger"), effects: [{ removeItem: ITEMS.bread }, { xp: 40 }, { flag: "helpedVillageHunger" }, { rep: { good: 1 } }, { status: "Pomógł głodnym w Ravenford" }] }),
      c("Poszukaj zagubionego dziecka", { to: "lostChild" }),
      c("Zapisz trop do chorego strażnika", { to: "noticeBoard", unless: () => hasFlag("edricLead"), effects: [{ flag: "edricLead" }, { status: "Edric potrzebuje eliksiru od Mirny" }] }),
      c("Zapisz trop do skrzyni Borena", { to: "noticeBoard", unless: () => hasFlag("borenQuestStarted"), effects: [{ flag: "borenQuestStarted" }, { status: "Skrzynia Borena zaginęła w lesie" }] }),
      c("Wróć", { to: "village" }),
    ],
  },
  lostChild: {
    title: "Zagubione dziecko",
    art: "forest",
    text: () => hasFlag("savedChild") || hasFlag("abandonedChild") || hasFlag("tookChildTreasure")
      ? "Na granicy lasu zostały tylko ślady małych stóp i wypalone kręgi po błędnych ognikach."
      : "Na granicy lasu znajdujesz ślady małych stóp. Blade światło krąży między drzewami, a obok niego widać małą skrzynię zaplątaną w korzenie.",
    choices: [
      c("Ratuj chłopca natychmiast", { to: "village", unless: () => hasFlag("savedChild") || hasFlag("abandonedChild") || hasFlag("tookChildTreasure"), effects: [{ xp: 140 }, { gold: 8 }, { item: ITEMS.childAmulet }, { flag: "savedChild" }, { rep: { good: 2 } }, { status: "Uratował zagubione dziecko" }], kind: "good" }),
      c("Najpierw zabierz skarb", { to: "village", unless: () => hasFlag("savedChild") || hasFlag("abandonedChild") || hasFlag("tookChildTreasure"), effects: [{ xp: 50 }, { gold: 30 }, { flag: "tookChildTreasure" }, { status: "Wybrał skarb zamiast dziecka" }, { rep: { ash: 2 } }], kind: "danger" }),
      c("Ratuj chłopca i zabierz skarb", { unless: () => hasFlag("savedChild") || hasFlag("abandonedChild") || hasFlag("tookChildTreasure"), fight: { enemy: () => ({ ...ENEMIES.wispTrickster, xp: 170, gold: 20 }), win: () => { addItem(ITEMS.childAmulet); setFlag("savedChild"); state.rep.good += 1; addNotification("Reputacja: dobro +1.", "good"); renderScene("village"); } }, kind: "danger" }),
      c("Użyj Kryształu Świtu", { requireArtifact: ARTIFACTS.crystal, unless: () => hasFlag("savedChild") || hasFlag("abandonedChild") || hasFlag("tookChildTreasure"), to: "village", effects: [{ xp: 180 }, { item: ITEMS.childAmulet }, { flag: "savedChild" }, { status: "Ogniki zgasły przed Kryształem Świtu" }, { rep: { good: 2 } }], kind: "good" }),
      c("Zostaw mu jedzenie i odejdź", { requireItem: ITEMS.bread, to: "village", unless: () => hasFlag("savedChild") || hasFlag("abandonedChild") || hasFlag("tookChildTreasure"), effects: [{ removeItem: ITEMS.bread }, { xp: 70 }, { flag: "fedChild" }, { rep: { good: 1 } }] }),
      c("Zostaw je", { to: "village", unless: () => hasFlag("savedChild") || hasFlag("abandonedChild") || hasFlag("tookChildTreasure"), effects: [{ xp: 30 }, { flag: "abandonedChild" }, { rep: { greed: 1 } }] }),
      c("Wróć", { to: "village" }),
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
      c("Rycerz bez herbu", { to: "heraldlessKnight", unless: () => hasFlag("heraldlessKnightDone") }),
      c("Ukryta ścieżka na bagna", { to: "swamp", when: () => has(ITEMS.hiddenPathsMap) || has(ITEMS.swampMap) || state.heroKey === "rogue" }),
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
  heraldlessKnight: {
    title: "Rycerz bez herbu",
    art: "forest",
    text: () => "Przy drodze do fortu stoi rycerz bez tarczy i bez barw. Jego zbroja jest pusta w środku, ale głos brzmi pewnie: „Herb jest wart tyle, ile czyn, który za nim stoi.”",
    choices: [
      c("Zwróć mu odnaleziony herb", { requireItem: ITEMS.silverOrnament, to: "forest", effects: [{ removeItem: ITEMS.silverOrnament }, { xp: 130 }, { item: ITEMS.knightOathBelt }, { flag: "heraldlessKnightDone" }, { status: "Rycerz bez herbu odzyskał spokój" }, { rep: { good: 2 } }], kind: "good" }),
      c("Obiecaj oddać dowód Caelowi", { to: "forest", effects: [{ xp: 150 }, { flag: "heraldlessKnightDone" }, { flag: "trueRebellionProof" }, { status: "Dowód prawdziwego buntu" }, { rep: { good: 1 } }] }),
      c("Zniszcz symbol fałszywego honoru", { to: "forest", effects: [{ xp: 100 }, { flag: "heraldlessKnightDone" }, { status: "Odrzucił fałszywy honor" }, { rep: { ash: 1 } }], kind: "danger" }),
      c("Sprzedaj historię rycerza", { to: "village", effects: [{ xp: 40 }, { gold: 25 }, { flag: "heraldlessKnightDone" }, { rep: { greed: 1 } }], kind: "danger" }),
      c("Wróć", { to: "forest" }),
    ],
  },
  woodcutterHut: {
    title: "Chata drwala",
    art: "forest",
    text: () => "Chata jest pusta, ale na stole stoi miska jeszcze ciepłej zupy. Na ścianie ktoś wyrył paznokciami: „Las odda ciało, ale zabierze imię.”",
    choices: [
      c("Zjedz zupę", { to: "forest", when: () => hasStatus("Pomógł kupcowi") || hasStatus("Modlił się przy kapliczce"), effects: [{ heal: 4 }] }),
      c("Odczytaj inicjały na toporze", { to: "woodcutterHut", unless: () => hasFlag("woodcutterInitials"), effects: [{ flag: "woodcutterInitials" }, { status: "Na toporze widnieją inicjały T.R." }] }),
      c("Przeszukaj chatę", { to: "forest", unless: () => hasFlag("foundAxe"), effects: [{ weapon: "Siekiera drwala" }, { flag: "foundAxe" }, { xp: 30 }, { flag: "stoleWoodcutterAxe" }, { rep: { greed: 1 } }] }),
      c("Szukaj skrzyni Borena", { to: "woodcutterHut", when: () => hasFlag("borenQuestStarted") && !has(ITEMS.tools), effects: [{ item: ITEMS.tools }, { status: "Znalazł skrzynię narzędzi Borena" }] }),
      c("Szukaj ucznia Borena", { to: "woodcutterHut", when: () => hasFlag("borenQuestStarted") && !hasFlag("foundBorenApprentice"), effects: [{ flag: "foundBorenApprentice" }, { status: "Uczeń Borena ukrył się przed upiorem" }, { rep: { good: 1 } }] }),
      c("Sprawdź piwnicę", { to: "woodcutterGhost" }),
      c("Wróć", { to: "forest" }),
    ],
  },
  woodcutterGhost: {
    title: "Duch drwala",
    art: "forest",
    text: () => "W piwnicy stoi cień człowieka bez imienia. Opowiada o Bagiennym Przewoźniku i o ścieżce, której nie widzą żywi.",
    choices: [
      c("Powiedz prawdziwe imię: Tomasz Rana", { requireFlag: "woodcutterNameKnown", to: "forest", unless: () => hasFlag("woodcutterFreed"), effects: [{ xp: 100 }, { item: ITEMS.hiddenPathsMap }, { flag: "woodcutterFreed" }, { status: "Uwolnił ducha drwala" }, { rep: { good: 2 } }], kind: "good" }),
      c("Skłam i podaj fałszywe imię", { unless: () => hasFlag("woodcutterFreed"), fight: { enemy: () => ({ ...ENEMIES.forestWraith, xp: 60 }), win: () => { setFlag("woodcutterFreed"); state.weapon = "Siekiera drwala"; addNotification("Nowa broń: Siekiera drwala.", "item"); state.rep.ash += 1; addNotification("Reputacja: popiół +1.", "danger"); renderScene("forest"); } }, kind: "danger" }),
      c("Wysłuchaj go do końca", { to: "forest", effects: [{ item: ITEMS.swampMap }, { xp: 50 }, { rep: { good: 1 } }, { status: "Wysłuchał ducha drwala" }] }),
      c("Przemów do ducha", { requireClass: "mage", to: "forest", effects: [{ item: ITEMS.hiddenPathsMap }, { artifact: ARTIFACTS.dawn }, { xp: 100 }, { flag: "woodcutterFreed" }, { rep: { good: 1 } }] }),
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
      c("Kup nalewkę Mirny - 6 złota", { action: () => buy(ITEMS.mirnaTincture, 6, "herbalist") }),
      c("Kup igły z jadem Topielca - 9 złota", { action: () => buy(ITEMS.poisonNeedles, 9, "herbalist") }),
      c("Kup proszek srebrnego mchu - 7 złota", { action: () => buy(ITEMS.silverMoss, 7, "herbalist") }),
      c("Kup krople przeciw mgłom - 8 złota", { action: () => buy(ITEMS.fogDrops, 8, "herbalist") }),
      c("Serce Bagiennego Korzenia", { to: "rootHeartQuest", unless: () => hasFlag("rootHeartDone") }),
      c("Okradnij chatę", { to: "swamp", effects: [{ item: ITEMS.potion }, { item: ITEMS.smallPotion }, { rep: { greed: 2 } }], kind: "danger" }),
      c("Wróć", { to: "swamp" }),
    ],
  },
  rootHeartQuest: {
    title: "Serce Bagiennego Korzenia",
    art: "swamp",
    text: () => "Mirna mówi o korzeniu rosnącym na kościach uciekinierów z Valdorinu. „Jeśli wyrwiesz go jak chwast, obudzą się ludzie, którzy próbowali tylko przeżyć.”",
    choices: [
      c("Poproś duchy o zgodę", { to: "swamp", when: () => state.rep.good >= 3 || has(ITEMS.bookNames), effects: [{ xp: 150 }, { item: ITEMS.memoryElixir }, { flag: "rootHeartDone" }, { flag: "gainedSpiritRespect" }, { status: "Szacunek duchów bagien" }, { rep: { good: 2 } }], kind: "good" }),
      c("Wyrwij korzeń siłą", { fight: { enemy: () => ({ ...ENEMIES.fugitiveWraith, xp: 90, item: ITEMS.root }), win: () => { setFlag("rootHeartDone"); state.rep.ash += 1; addNotification("Reputacja: popiół +1.", "danger"); renderScene("swamp"); } }, kind: "danger" }),
      c("Zostaw korzeń w spokoju", { to: "swamp", effects: [{ xp: 60 }, { flag: "rootHeartDone" }, { status: "Szacunek dla Uciekinierów" }, { rep: { good: 1 } }] }),
      c("Wróć", { to: "herbalist" }),
    ],
  },
  deadFerry: {
    title: "Martwy prom",
    art: "swamp",
    text: () => "Przy zgniłym pomoście stoi prom bez przewoźnika. Na burcie wydrapano: „Zapłać, wspomnij albo oddaj coś, czego żałujesz.”",
    choices: [
      c("Zapłać trzema monetami", { requireGold: 3, to: "swamp", effects: [{ xp: 120 }, { item: ITEMS.ferrymanMark }, { flag: "paidFerrymanProperly" }, { status: "Ostatni uciekinierzy Valdorinu" }, { rep: { good: 1 } }], kind: "good" }),
      c("Oszukaj Przewoźnika", { when: () => state.heroKey === "rogue" || state.heroKey === "outlaw" || has(ITEMS.falseCoins), to: "swamp", effects: [{ xp: 50 }, { flag: "cheatedFerryman" }, { rep: { greed: 1 } }], kind: "danger" }),
      c("Wspomnij kogoś zmarłego", { to: "swamp", effects: [{ status: "Wizja bagiennego przewoźnika" }, { rep: { good: 1 } }] }),
      c("Oddaj jeden przedmiot", { requireItem: ITEMS.silverOrnament, to: "swamp", effects: [{ removeItem: ITEMS.silverOrnament }, { rep: { good: 1 } }] }),
      c("Przepłyń samemu", { fight: { enemy: () => ({ ...ENEMIES.drowned, xp: 30 }), win: "swamp" }, kind: "danger" }),
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
      c("Poproś o Bagienny Korzeń", { to: "swamp", when: () => state.rep.good >= 2 || has(ITEMS.bookNames), effects: [{ item: ITEMS.root }, { xp: 80 }, { status: "Korzeń oddany za zgodą duchów" }, { rep: { good: 1 } }], kind: "good" }),
      c("Wyrwij Bagienny Korzeń", { fight: { enemy: () => ({ ...ENEMIES.fugitiveWraith, xp: 90, item: ITEMS.root }), win: "swamp" }, kind: "danger" }),
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
      c("Załóż hełm kapitana", { to: "whisperWell", effects: [{ xp: 120 }, { damage: 4 }, { status: "Pierwsza przemiana króla" }, { flag: "sawFirstTransformation" }] }),
      c("Zostaw hełm i uklęknij", { to: "whisperWell", effects: [{ xp: 90 }, { item: ITEMS.amulet }, { flag: "cryptRespect" }, { rep: { good: 1 } }], kind: "good" }),
      c("Zabierz hełm na sprzedaż", { fight: { enemy: () => ({ ...ENEMIES.skeleton, xp: 50, item: ITEMS.captainHelm }), win: "whisperWell" }, effects: [{ flag: "desecratedCrypt" }, { rep: { greed: 1 } }], kind: "danger" }),
      c("Zniszcz hełm", { to: "whisperWell", effects: [{ xp: 60 }, { status: "Wola Zniszczenia" }, { rep: { ash: 1 } }], kind: "danger" }),
      c("Przejdź dalej", { to: "whisperWell" }),
    ],
  },
  whisperWell: {
    title: "Studnia Szeptów",
    art: "crypt",
    text: () => "Studnia nie ma wody. Z jej wnętrza dochodzą szepty. Nie rozumiesz słów, ale głosy znają twoje myśli.",
    choices: [
      c("Wrzuć monetę", { requireGold: 1, to: "silverKeyRoom", effects: [{ status: "Zna wskazówkę do finału" }] }),
      c("Wypowiedz swoje imię", { to: "silverKeyRoom", effects: [{ xp: 130 }, { damage: 3 }, { item: ITEMS.bookNames }, { status: "Służąca Eliany miała na imię Nera" }, { flag: "knowsNeraName" }] }),
      c("Użyj Księgi Imion Umarłych", { requireItem: ITEMS.bookNames, to: "silverKeyRoom", effects: [{ xp: 160 }, { status: "Służąca Eliany miała na imię Nera" }, { flag: "knowsNeraName" }, { rep: { good: 1 } }], kind: "good" }),
      c("Wypowiedz cudze imię", { to: "silverKeyRoom", effects: [{ xp: 100 }, { flag: "sacrificedNameToWell" }, { status: "Poświęcił cudze imię Studni" }, { rep: { ash: 2 } }], kind: "danger" }),
      c("Posłuchaj szeptów", { to: "silverKeyRoom", effects: [{ damage: 3 }, { status: "Usłyszał myśli zmarłych" }] }),
      c("Zatkaj studnię", { to: "silverKeyRoom", effects: [{ flag: "sealedWhisperWell" }, { rep: { ash: 1 } }], kind: "danger" }),
    ],
  },
  silverKeyRoom: {
    title: "Komnata Srebrnego Klucza",
    art: "crypt",
    text: () => "W ostatniej komnacie leży sarkofag strażnika. Na jego piersi spoczywa Srebrny Klucz. Nie jest zimny.",
    choices: [
      c("Zabierz Miecz Strażnika Bramy", { to: "silverKeyRoom", unless: () => hasFlag("tookGateSword"), effects: [{ weapon: "Miecz Strażnika Bramy" }, { flag: "tookGateSword" }] }),
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
      c("Porozmawiaj o dezerterze Rauku", { to: "raukQuest", unless: () => hasFlag("raukQuestDone") }),
      c("Wróć", { to: "village" }),
    ],
  },
  raukQuest: {
    title: "Dezerter ze Straży Pieczęci",
    art: "fort",
    text: () => "Na trakcie między Ravenford a fortem klęczy Rauk, strażnik bez płaszcza. „Nie wracam tam. Za bramą coś zna moje sny” - mówi.",
    choices: [
      c("Ukryj Rauka w Ravenford", { to: "village", effects: [{ xp: 140 }, { flag: "sparedRauk" }, { flag: "raukQuestDone" }, { status: "Szept Korony" }, { rep: { good: 1 } }], kind: "good" }),
      c("Odprowadź go do Fortu", { to: "fortGate", effects: [{ xp: 100 }, { flag: "raukReturned" }, { flag: "raukQuestDone" }, { status: "Cael docenia uczciwość" }, { rep: { good: 1 } }] }),
      c("Zabij dezertera", { to: "village", effects: [{ xp: 50 }, { gold: 10 }, { flag: "raukKilled" }, { flag: "raukQuestDone" }, { rep: { ash: 1 } }], kind: "danger" }),
      c("Pozwól mu odejść", { to: "village", effects: [{ xp: 70 }, { flag: "raukGone" }, { flag: "raukQuestDone" }, { status: "Rauk może odpowiedzieć na szept Korony" }] }),
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
      c("Zaufaj Ivarze przy czerwonych znakach", { to: "cael", unless: () => hasFlag("hasDeadStreetsMap"), effects: [{ xp: 120 }, { item: ITEMS.deadStreetsMap }, { flag: "hasDeadStreetsMap" }, { status: "Zna bezpieczniejszą trasę przez ruiny" }, { rep: { good: 1 } }], kind: "good" }),
      c("Ukradnij Mapę Martwych Ulic", { to: "cael", unless: () => hasFlag("hasDeadStreetsMap"), effects: [{ xp: 60 }, { item: ITEMS.deadStreetsMap }, { flag: "hasDeadStreetsMap" }, { status: "Fort nie ufa złodziejowi mapy" }, { rep: { greed: 1 } }], kind: "danger" }),
      c("Otwórz ukryty skarbiec", { requireItem: ITEMS.precisionLockpicks, to: "mapRoom", unless: () => hasFlag("fortVaultOpen"), effects: [{ weapon: "Nóż do Przecinania Pieczęci" }, { item: ITEMS.traitorMedallion }, { flag: "fortVaultOpen" }, { rep: { greed: 1 } }] }),
      c("Zignoruj ostrzeżenia Ivary", { to: "cael", unless: () => hasFlag("ignoredIvara"), effects: [{ flag: "ignoredIvara" }, { status: "Zignorował czerwone znaki na mapie" }, { rep: { ash: 1 } }], kind: "danger" }),
      c("Idź do Caela", { to: "cael" }),
    ],
  },
  cael: {
    title: "Dowódca Cael",
    art: "fort",
    text: () => "Cael mówi: „Każdy bohater wierzy, że jest silniejszy od tych, którzy przyszli przed nim. A potem Korona przemawia jego głosem.”",
    choices: [
      c("Przekonaj go dowodami przebudzenia Korony", { when: () => hasFlag("cleansedBell") || hasFlag("healedEdric") || hasArtifact(ARTIFACTS.key) || hasFlag("trueRebellionProof"), action: () => { addXP(180); addArtifact(ARTIFACTS.seal); addItem(ITEMS.sealGuardArmor); state.weapon = "Młot Przysięgi"; addNotification("Nowa broń: Młot Przysięgi.", "item"); setFlag("convincedCael"); setFlag("caelAlly"); addStatus("Cael jako sojusznik"); state.rep.good += 2; addNotification("Reputacja: dobro +2.", "good"); completeArtifactEvent(); }, kind: "good" }),
      c("Przekonaj go, że nie chcesz władzy", { requireGood: 3, action: () => { addXP(120); addArtifact(ARTIFACTS.seal); setFlag("convincedCael"); addStatus("Przekonał Caela"); state.rep.good += 1; addNotification("Reputacja: dobro +1.", "good"); completeArtifactEvent(); }, kind: "good" }),
      c("Poproś o prawdę", { to: "cael", effects: [{ status: "Wie, że zdrajcy byli pierwszymi obrońcami" }] }),
      c("Pokaż Stary List Króla", { requireArtifact: ARTIFACTS.letter, action: () => { addXP(130); addArtifact(ARTIFACTS.seal); setFlag("convincedCael"); setFlag("caelAlly"); completeArtifactEvent(); }, kind: "good" }),
      c("Zastrasz Caela", { requireClass: "warrior", action: () => { addXP(100); addArtifact(ARTIFACTS.seal); setFlag("convincedCael"); addStatus("Złamana przysięga przez strach"); state.rep.ash += 1; addNotification("Reputacja: popiół +1.", "danger"); completeArtifactEvent(); }, kind: "danger" }),
      c("Zaoferuj 20 złota", { requireGold: 20, action: () => { addXP(80); addArtifact(ARTIFACTS.seal); completeArtifactEvent(); } }),
      c("Wyzwij go na pojedynek", { fight: { enemy: () => ({ ...ENEMIES.cael, xp: 100 }), win: () => { addArtifact(ARTIFACTS.seal); setFlag("killedCael"); addStatus("Zabił Caela"); state.rep.ash += 1; addNotification("Reputacja: popiół +1.", "danger"); completeArtifactEvent(); } }, kind: "danger" }),
      c("Spróbuj ukraść Pieczęć", { requireClass: "rogue", action: () => { addXP(80); addArtifact(ARTIFACTS.seal); state.rep.greed += 2; addNotification("Reputacja: chciwość +2.", "danger"); completeArtifactEvent(); }, kind: "danger" }),
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
      c("Weź Soczewkę Astromanty", { to: "starLibrary", unless: () => has(ITEMS.astromancerLens), effects: [{ item: ITEMS.astromancerLens }] }),
      c("Załóż Szatę Astromanty", { to: "starLibrary", when: () => state.heroKey === "mage", unless: () => has(ITEMS.astromancerRobe), effects: [{ item: ITEMS.astromancerRobe }] }),
      c("Weź Laskę Astromanty", { to: "starLibrary", when: () => state.heroKey === "mage" || knowledgeValue() >= 3, unless: () => hasFlag("tookAstromancerStaff"), effects: [{ weapon: "Laska Astromanty" }, { flag: "tookAstromancerStaff" }] }),
      c("Czytaj Księgę gwiazd bez tytułu", { to: "starLibrary", unless: () => hasFlag("untitledBookDone"), effects: [{ xp: 150 }, { damage: 3 }, { flag: "untitledBookDone" }, { status: "Zna jedno możliwe zakończenie" }] }),
      c("Zamknij Księgę bez tytułu", { to: "starLibrary", unless: () => hasFlag("untitledBookDone"), effects: [{ xp: 100 }, { flag: "untitledBookDone" }, { flag: "rejectedFateBook" }, { status: "Odmówił przeznaczeniu" }, { rep: { good: 1 } }], kind: "good" }),
      c("Zabierz Księgę Nienapisanej Drogi", { to: "mirrors", unless: () => hasFlag("untitledBookDone"), effects: [{ xp: 120 }, { item: ITEMS.untitledStarBook }, { flag: "untitledBookDone" }, { status: "Księga szepcze o finale" }, { rep: { ash: 1 } }], kind: "danger" }),
      c("Spal księgi", { fight: { enemy: () => ({ ...ENEMIES.forestWraith, xp: 80 }), win: "mirrors" }, effects: [{ status: "Wola Zniszczenia" }, { rep: { ash: 2 } }], kind: "danger" }),
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
      c("Zapytaj lustro o własny lęk", { to: "mirrors", unless: () => hasFlag("mirrorQuestDone"), effects: [{ xp: 130 }, { flag: "knowsOwnFear" }, { flag: "mirrorQuestDone" }, { status: "Zna własny lęk" }, { rep: { good: 1 } }], kind: "good" }),
      c("Zapytaj lustro o własne pragnienie", { to: "mirrors", unless: () => hasFlag("mirrorQuestDone"), effects: [{ xp: 120 }, { bonus: 1 }, { flag: "mirrorQuestDone" }, { status: "Zna własne pragnienie" }, { rep: { ash: 1 } }], kind: "danger" }),
      c("Zabierz Płaszcz Bez Cienia", { to: "mirrors", unless: () => has(ITEMS.shadowCloak), effects: [{ item: ITEMS.shadowCloak }, { rep: { ash: 1 } }], kind: "danger" }),
      c("Rozbij wszystkie lustra", { fight: { enemy: () => ({ name: "Cień Gracza", health: 1, attack: 1, xp: 150, item: ITEMS.honestMirrorShard }), win: "crystalRoof" }, kind: "danger" }),
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
    text: () => {
      const aids = [];
      if (hasFlag("cleansedBell")) aids.push("oczyszczony dzwon rozprasza pierwszą falę mgły");
      if (hasFlag("gaveCandlesToChapel")) aids.push("świece Aleny płoną w oknach domów");
      if (hasFlag("healedEdric")) aids.push("Edric prowadzi strażników na plac");
      return `Kiedy wracasz do Ravenford, dzwon bije po raz drugi. Mgła już jest na placu. Z jej wnętrza wychodzą postacie z popiołu. Nie atakują od razu. Stoją i patrzą w okna domów.${aids.length ? `\nPomaga ci to, że ${aids.join(", ")}.` : ""}`;
    },
    choices: [
      c("Broń mieszkańców", { fight: { enemy: () => {
        const knight = { ...ENEMIES.ashKnight, xp: 120 };
        if (hasFlag("cleansedBell")) knight.health -= 6;
        if (hasFlag("gaveCandlesToChapel")) knight.attack -= 2;
        if (hasFlag("healedEdric")) knight.health -= 4;
        return knight;
      }, win: () => { setFlag("nightAttackDone"); state.rep.good += 2; addNotification("Reputacja: dobro +2.", "good"); renderScene("village"); } }, kind: "danger" }),
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
        setFlag("visitedRuins");
        if (!hasArtifact(ARTIFACTS.seal) && !has(ITEMS.deadStreetsMap)) damage(8);
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
      c("Przeszukaj stragany", { to: "ruinsMarket", effects: [{ xp: 50 }, { gold: 30 }, { flag: "angeredMarketShadows" }, { rep: { ash: 2 } }], kind: "danger" }),
      c("Dotknij jednej z postaci", { to: "ruinsMarket", effects: [{ status: "Wspomnienie ostatnich chwil miasta" }, { rep: { good: 1 } }] }),
      c("Wrzuć monetę do fontanny", { requireGold: 1, to: "ruinsMarket", effects: [{ heal: 10 }] }),
      c("Odczytaj tablicę ogłoszeń", { to: "ruinsMarket", effects: [{ status: "Wie o chorobie księżniczki" }, { flag: "knowsElianaIllness" }] }),
      c("Zapisz prawdziwe imiona mieszkańców", { requireItem: ITEMS.bookNames, to: "ruinsMarket", unless: () => hasFlag("marketVoicesRestored"), effects: [{ xp: 220 }, { flag: "marketVoicesRestored" }, { status: "Głosy Rynku" }, { rep: { good: 3 } }], kind: "good" }),
      c("Wpisz losowe imiona", { fight: { enemy: () => ({ ...ENEMIES.marketShade, xp: 80 }), win: "ruinsMarket" }, unless: () => hasFlag("marketVoicesRestored"), effects: [{ rep: { ash: 1 } }], kind: "danger" }),
      c("Zbrojownia pałacowa", { to: "royalArmory" }),
      c("Dom królewskiego medyka", { to: "medicHouse" }),
      c("Spalony teatr", { to: "burnedTheater" }),
      c("Pokój Eliany", { to: "elianaRoom" }),
      c("Most Popielnych Cieni", { to: "ashBridge" }),
    ],
  },
  royalArmory: {
    title: "Zbrojownia pałacowa",
    art: "ruins",
    text: () => "Za zapadniętą kratą leżą resztki królewskiej zbrojowni. Część broni rozsypuje się w popiół, ale kilka przedmiotów nadal pamięta rozkazy straży.",
    choices: [
      c("Weź Ostrze Królewskiej Straży", { to: "royalArmory", unless: () => hasFlag("tookRoyalBlade"), effects: [{ weapon: "Ostrze Królewskiej Straży" }, { flag: "tookRoyalBlade" }] }),
      c("Weź Tarczę Ostatniej Bramy", { to: "royalArmory", unless: () => has(ITEMS.lastGateShield), effects: [{ item: ITEMS.lastGateShield }] }),
      c("Weź Królewski Płaszcz z Popiołu", { to: "royalArmory", unless: () => has(ITEMS.royalAshCloak), effects: [{ item: ITEMS.royalAshCloak }, { rep: { ash: 3 } }], kind: "danger" }),
      c("Weź Pęknięty Medalion Arvanda", { to: "royalArmory", unless: () => has(ITEMS.arvandMedallion), effects: [{ item: ITEMS.arvandMedallion }, { status: "Medalion Arvanda odblokowuje dodatkowy dialog z królem" }] }),
      c("Wróć", { to: "ruinsMarket" }),
    ],
  },
  medicHouse: {
    title: "Dom królewskiego medyka",
    art: "ruins",
    text: () => "Dom pachnie ziołami i starą chorobą. Na stole leży dziennik medyka. Ostatnie zdanie urywa się w połowie, jakby autor nagle zapomniał, kim jest.",
    choices: [
      c("Przeczytaj dziennik", { to: "medicHouse", effects: [{ item: ITEMS.medicDiary }, { flag: "knowsElianaIllness" }, { status: "Wie, że Eliana była śmiertelnie chora" }] }),
      c("Zabierz lekarstwa", { to: "medicHouse", effects: [{ item: ITEMS.potion }, { item: ITEMS.smallPotion }, { rep: { greed: 1 } }] }),
      c("Popiół w kołysce", { to: "cradleAshQuest", unless: () => hasFlag("cradleQuestDone") }),
      c("Poszukaj piwnicy", { to: "medicHouse", when: () => hasArtifact(ARTIFACTS.crystal) && state.rep.good >= 5, effects: [{ artifact: ARTIFACTS.tear }, { status: "Zdobył Łzę Księżniczki Eliany" }], kind: "good" }),
      c("Spal dom", { to: "ruinsMarket", effects: [{ status: "Wola Zniszczenia" }, { flag: "burnedMedicHouse" }, { rep: { ash: 2 } }], kind: "danger" }),
      c("Wróć", { to: "ruinsMarket" }),
    ],
  },
  cradleAshQuest: {
    title: "Popiół w kołysce",
    art: "ruins",
    text: () => "W zrujnowanym domu kołyska skrzypi sama z siebie. Cień matki prosi, by nie budzić dziecka, którego świat już nie widzi.",
    choices: [
      c("Oddaj grzechotkę matce", { to: "medicHouse", effects: [{ xp: 120 }, { item: ITEMS.lastDreamAmulet }, { flag: "cradleQuestDone" }, { flag: "childrenShadowsCalm" }, { status: "Cienie dzieci są spokojniejsze" }, { rep: { good: 2 } }], kind: "good" }),
      c("Zanieś grzechotkę do kaplicy", { to: "chapel", effects: [{ xp: 150 }, { item: ITEMS.childRattle }, { flag: "cradleQuestDone" }, { flag: "prayedForChildren" }, { status: "Modlitwa za dzieci Valdorinu" }, { rep: { good: 2 } }], kind: "good" }),
      c("Zabierz grzechotkę na sprzedaż", { to: "medicHouse", effects: [{ xp: 40 }, { gold: 20 }, { item: ITEMS.childRattle }, { flag: "cradleQuestDone" }, { rep: { ash: 1 } }], kind: "danger" }),
      c("Wróć", { to: "medicHouse" }),
    ],
  },
  burnedTheater: {
    title: "Spalony teatr",
    art: "ruins",
    text: () => "W teatrze nadal siedzi publiczność z popiołu. Na scenie stoi aktorka z ręką uniesioną w dramatycznym geście. Kiedy wchodzisz, kurtyna sama się podnosi.",
    choices: [
      c("Odpowiedz: nie bez zgody Eliany", { to: "burnedTheater", unless: () => hasFlag("theaterQuestDone"), effects: [{ xp: 180 }, { flag: "theaterQuestDone" }, { flag: "elianaFearedCrown" }, { status: "Eliana bała się Korony" }, { rep: { good: 2 } }], kind: "good" }),
      c("Odpowiedz: tak, jeśli to ktoś kochany", { to: "burnedTheater", unless: () => hasFlag("theaterQuestDone"), effects: [{ xp: 80 }, { flag: "theaterQuestDone" }, { status: "Korona zna twoją wymówkę" }, { rep: { ash: 1 } }], kind: "danger" }),
      c("Odpowiedz: nie wiem", { to: "burnedTheater", unless: () => hasFlag("theaterQuestDone"), effects: [{ xp: 120 }, { flag: "theaterQuestDone" }, { status: "Widział dodatkową scenę ostatniego dnia" }] }),
      c("Obejrzyj przedstawienie", { to: "burnedTheater", effects: [{ status: "Zna alegorię upadku króla" }, { rep: { good: 1 } }] }),
      c("Przerwij przedstawienie", { fight: { enemy: () => ({ ...ENEMIES.actor, xp: 140 }), win: "ruinsMarket" }, kind: "danger" }),
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
      c("Napraw zabawkowego konia", { requireItem: ITEMS.tools, to: "elianaRoom", unless: () => hasFlag("elianaToyDone"), effects: [{ xp: 200 }, { flag: "repairedElianaToy" }, { flag: "elianaToyDone" }, { status: "Naprawił wspomnienie Eliany" }, { rep: { good: 2 } }], kind: "good" }),
      c("Poproś Borena o naprawę konia", { requireFlag: "helpedBoren", to: "elianaRoom", unless: () => hasFlag("elianaToyDone"), effects: [{ xp: 200 }, { flag: "repairedElianaToy" }, { flag: "elianaToyDone" }, { status: "Boren naprawił wspomnienie Eliany" }, { rep: { good: 2 } }], kind: "good" }),
      c("Zostaw Świecę Świtu przy koniu", { requireItem: ITEMS.dawnCandle, to: "elianaRoom", unless: () => hasFlag("elianaToyDone"), effects: [{ removeItem: ITEMS.dawnCandle }, { xp: 140 }, { flag: "elianaToyDone" }, { status: "Eliana słyszy ciepły płomień" }, { rep: { good: 1 } }], kind: "good" }),
      c("Zabierz zabawkę", { to: "elianaRoom", unless: () => hasFlag("elianaToyDone"), effects: [{ xp: 40 }, { item: ITEMS.elianaHorse }, { flag: "stoleElianaToy" }, { flag: "elianaToyDone" }, { rep: { greed: 2 } }], kind: "danger" }),
      c("Zniszcz zabawkowego konia", { to: "elianaRoom", unless: () => hasFlag("elianaToyDone"), effects: [{ xp: 60 }, { status: "Wola Zniszczenia" }, { flag: "destroyedElianaToy" }, { flag: "elianaToyDone" }, { rep: { ash: 1 } }], kind: "danger" }),
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
      c("Czarny odłamek w dłoni dziecka", { to: "blackShardChild", unless: () => hasFlag("blackShardChildDone") }),
      c("Ostatni rozkaz Popielnego Rycerza", { to: "ashenKnightQuest", unless: () => hasFlag("ashenKnightQuestDone") }),
    ],
  },
  blackShardChild: {
    title: "Czarny odłamek w dłoni dziecka",
    art: "ruins",
    text: () => "Na moście stoi cień dziecka. W małej dłoni ściska odłamek czarnego metalu. „To nie moje. Ale nie mogę puścić.”",
    choices: [
      c("Zabierz odłamek", { to: "ashBridge", effects: [{ xp: 120 }, { artifact: ARTIFACTS.shard }, { flag: "blackShardChildDone" }, { rep: { ash: 2 } }], kind: "danger" }),
      c("Oczyść odłamek Kryształem Świtu", { requireArtifact: ARTIFACTS.crystal, to: "ashBridge", effects: [{ xp: 220 }, { item: ITEMS.brightShard }, { flag: "cleansedBlackShard" }, { flag: "blackShardChildDone" }, { status: "Jasny Odłamek Woli chroni przed pokusą Korony" }, { rep: { good: 2 } }], kind: "good" }),
      c("Zniszcz odłamek", { to: "ashBridge", effects: [{ xp: 160 }, { status: "Wola Zniszczenia" }, { flag: "destroyedBlackShard" }, { flag: "blackShardChildDone" }, { rep: { ash: 1 } }], kind: "danger" }),
      c("Zostaw dziecko z odłamkiem", { to: "ashBridge", effects: [{ xp: 40 }, { flag: "blackShardChildDone" }] }),
      c("Wróć", { to: "ashBridge" }),
    ],
  },
  ashenKnightQuest: {
    title: "Ostatni rozkaz Popielnego Rycerza",
    art: "ruins",
    text: () => "Popielny Rycerz zastępuje ci drogę. „Rozkaz królewski: bramy zamknięte. Nikt nie opuszcza Valdorinu.” Nie wie, że od rozkazu minęło sto lat.",
    choices: [
      c("Pokaż Pieczęć Starego Króla", { requireArtifact: ARTIFACTS.seal, to: "ashBridge", effects: [{ xp: 200 }, { item: ITEMS.ashenSpur }, { flag: "freedAshenKnight" }, { flag: "ashenKnightQuestDone" }, { status: "Popielny Rycerz odzyskał wolę" }, { rep: { good: 2 } }], kind: "good" }),
      c("Pokaż ostatni list Eliany", { when: () => hasFlag("readElianaLetter") || hasFlag("elianaFearedCrown"), to: "ashBridge", effects: [{ xp: 200 }, { item: ITEMS.ashenSpur }, { flag: "freedAshenKnight" }, { flag: "ashenKnightQuestDone" }, { rep: { good: 2 } }], kind: "good" }),
      c("Pokonaj rycerza", { fight: { enemy: () => ({ ...ENEMIES.ashKnight, xp: 130, item: ITEMS.ashenArmor }), win: () => { setFlag("ashenKnightQuestDone"); state.rep.ash += 1; addNotification("Reputacja: popiół +1.", "danger"); renderScene("ashBridge"); } }, kind: "danger" }),
      c("Podporządkuj go Czarnym Odłamkiem", { requireArtifact: ARTIFACTS.shard, to: "ashBridge", effects: [{ xp: 150 }, { flag: "ashKnightBound" }, { flag: "ashenKnightQuestDone" }, { status: "Popielny Rycerz słucha twojego rozkazu" }, { rep: { ash: 3 } }], kind: "danger" }),
      c("Wróć", { to: "ashBridge" }),
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
  if (music.running || music.starting) {
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
  const session = music.session + 1;
  music.session = session;
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

  if (session !== music.session) return false;

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
  const session = music.session;
  const delay = 1800 + Math.random() * 2600;
  const timer = window.setTimeout(() => {
    if (session !== music.session || !music.running) return;
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
  music.session += 1;
  music.timers.forEach((timer) => window.clearTimeout(timer));
  music.timers = [];
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
  try {
    music.master?.disconnect();
  } catch {
    // Master mógł być już odłączony.
  }
  if (music.context) {
    music.context.close().catch(() => {});
  }
  music.context = null;
  music.oscillators = [];
  music.noise = null;
  music.master = null;
  music.delay = null;
  music.running = false;
  music.starting = false;
  updateAudioButton();
}

function updateAudioButton() {
  els.audioBtn.classList.toggle("is-playing", music.running);
  els.audioBtn.textContent = music.running ? "♫" : "♪";
  els.audioBtn.title = music.running ? "Wyłącz muzykę" : "Włącz muzykę";
  renderSettingsModal();
}

els.audioBtn.addEventListener("click", toggleMusic);
els.restartBtn.addEventListener("click", newGame);
els.statsOpenBtn?.addEventListener("click", openStats);
els.statsCloseBtn?.addEventListener("click", closeStats);
els.statsModal?.addEventListener("click", (event) => {
  if (event.target === els.statsModal) closeStats();
});
els.artifactsOpenBtn?.addEventListener("click", openArtifacts);
els.artifactsCloseBtn?.addEventListener("click", closeArtifacts);
els.artifactsModal?.addEventListener("click", (event) => {
  if (event.target === els.artifactsModal) closeArtifacts();
});
els.inventoryOpenBtn?.addEventListener("click", openInventory);
els.inventoryCloseBtn?.addEventListener("click", closeInventory);
els.inventoryModal?.addEventListener("click", (event) => {
  if (event.target === els.inventoryModal) closeInventory();
});
els.journalInlineBtn?.addEventListener("click", openJournal);
els.journalCloseBtn?.addEventListener("click", closeJournal);
els.journalModal?.addEventListener("click", (event) => {
  if (event.target === els.journalModal) closeJournal();
});
els.mapOpenBtn?.addEventListener("click", openMap);
els.mapCloseBtn?.addEventListener("click", closeMap);
els.mapModal?.addEventListener("click", (event) => {
  if (event.target === els.mapModal) closeMap();
});
els.settingsOpenBtn?.addEventListener("click", openSettings);
els.settingsCloseBtn?.addEventListener("click", closeSettings);
els.settingsModal?.addEventListener("click", (event) => {
  if (event.target === els.settingsModal) closeSettings();
});
els.settingsMusicBtn?.addEventListener("click", toggleMusic);
els.saveSlots?.addEventListener("click", (event) => {
  const saveButton = event.target.closest("[data-save-slot]");
  const loadButton = event.target.closest("[data-load-slot]");
  if (saveButton) saveGame(true, Number(saveButton.dataset.saveSlot));
  if (loadButton) loadGame(Number(loadButton.dataset.loadSlot));
});
els.settingsGuideBtn?.addEventListener("click", openGuide);
els.settingsRestartBtn?.addEventListener("click", newGame);
els.startLoadBtn?.addEventListener("click", openSettings);
document.querySelectorAll("[data-journal-tab]").forEach((button) => {
  button.addEventListener("click", () => {
    selectedJournalTab = button.dataset.journalTab;
    renderJournalModal();
  });
});
window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeStats();
    closeArtifacts();
    closeInventory();
    closeJournal();
    closeMap();
    closeSettings();
  }
});
setupAsh();
newGame();

if ("serviceWorker" in navigator && location.protocol !== "file:") {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js").catch(() => {
      // Gra działa także bez service workera, np. po otwarciu lokalnego pliku.
    });
  });
}
