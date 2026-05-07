from __future__ import annotations

import random
import sys
from dataclasses import dataclass, field


try:
    sys.stdin.reconfigure(encoding="utf-8")
    sys.stdout.reconfigure(encoding="utf-8")
except AttributeError:
    pass


POTION = "Mikstura leczenia"
TORCH = "Pochodnia"
LOCKPICKS = "Wytrychy"
WOLF_PELT = "Wilcze futro"
OLD_AMULET = "Stary amulet"
SWAMP_MAP = "Mapa bagien"
PURE_BLOOD = "Eliksir czystej krwi"
IRON_RING = "Żelazny pierścień"
OLD_LETTER = "Stary list króla"
BLACKSMITH_TOOLS = "Skrzynia narzędzi kowala"

SILVER_KEY = "Srebrny Klucz"
DAWN_CRYSTAL = "Kryształ Świtu"
KING_SEAL = "Pieczęć Starego Króla"

WEAPONS = {
    "Stary miecz": 3,
    "Zardzewiały miecz": 3,
    "Sztylet i wytrychy": 2,
    "Iskra many": 1,
    "Stalowy miecz": 5,
    "Topór najemnika": 6,
    "Kostur iskier": 4,
}


@dataclass
class Enemy:
    name: str
    health: int
    attack: int
    gold: int = 0
    item: str | None = None
    undead: bool = False


@dataclass
class Player:
    hero_class: str
    max_health: int
    health: int
    gold: int
    base_attack: int
    weapon: str
    inventory: list[str] = field(default_factory=list)
    artifacts: set[str] = field(default_factory=set)
    statuses: set[str] = field(default_factory=set)
    reputation: int = 0
    running: bool = True

    @property
    def attack(self) -> int:
        return self.base_attack + WEAPONS.get(self.weapon, 0)

    def has(self, item: str) -> bool:
        return item in self.inventory

    def add_item(self, item: str) -> None:
        self.inventory.append(item)
        print(f"\nOtrzymujesz: {item}.")

    def remove_item(self, item: str) -> bool:
        if item in self.inventory:
            self.inventory.remove(item)
            return True
        return False

    def add_artifact(self, artifact: str) -> None:
        self.artifacts.add(artifact)
        print(f"\nArtefakt zdobyty: {artifact}.")


def divider() -> None:
    print("\n" + "=" * 68)


def pause() -> None:
    input("\nNaciśnij Enter, aby kontynuować...")


def show_status(player: Player) -> None:
    divider()
    print(f"Klasa: {player.hero_class}")
    print(f"Zdrowie: {player.health}/{player.max_health}")
    print(f"Złoto: {player.gold}")
    print(f"Broń: {player.weapon} (atak łącznie: {player.attack})")
    print("Ekwipunek:", ", ".join(player.inventory) if player.inventory else "brak")
    print("Artefakty:", ", ".join(sorted(player.artifacts)) if player.artifacts else "brak")
    if player.statuses:
        print("Statusy:", ", ".join(sorted(player.statuses)))


def choose(prompt: str, options: list[str]) -> int:
    while True:
        print(f"\n{prompt}")
        for index, option in enumerate(options, start=1):
            print(f"{index}. {option}")
        raw = input("> ").strip()
        if raw.isdigit() and 1 <= int(raw) <= len(options):
            return int(raw)
        print("Wybierz numer z listy.")


def spend_gold(player: Player, amount: int) -> bool:
    if player.gold < amount:
        print("\nNie masz tyle złota.")
        return False
    player.gold -= amount
    return True


def heal(player: Player, amount: int) -> None:
    before = player.health
    player.health = min(player.max_health, player.health + amount)
    print(f"\nOdzyskujesz {player.health - before} zdrowia.")


def damage_player(player: Player, amount: int, reason: str = "Otrzymujesz obrażenia") -> None:
    if amount <= 0:
        return
    if reason:
        print(f"\n{reason}: {amount}.")
    player.health -= amount
    if player.health <= 0:
        game_over(player)


def game_over(player: Player) -> None:
    player.health = 0
    print("\nTwoja wyprawa kończy się w popiele. Valdorin czeka na kolejnego śmiałka.")
    player.running = False


def create_player() -> Player:
    divider()
    print("KORONA POPIOŁU")
    print("Przygodówka wyboru / proste RPG fantasy\n")
    choice = choose(
        "Wybierz klasę postaci:",
        [
            "Wojownik - zdrowie 35, złoto 8, atak 6, Stary miecz",
            "Łotrzyk - zdrowie 28, złoto 15, atak 4, Sztylet i wytrychy",
            "Uczeń Maga - zdrowie 24, złoto 10, atak 3, Iskra many",
        ],
    )
    if choice == 1:
        return Player("Wojownik", 35, 35, 8, 6, "Stary miecz", [POTION])
    if choice == 2:
        return Player("Łotrzyk", 28, 28, 15, 4, "Sztylet i wytrychy", [LOCKPICKS, POTION])
    return Player("Uczeń Maga", 24, 24, 10, 3, "Iskra many", [POTION])


def fight(player: Player, enemy: Enemy, allow_sacrifice: bool = False) -> bool:
    divider()
    print(f"Walka: {enemy.name}")
    while player.running and enemy.health > 0:
        print(f"\n{enemy.name}: {enemy.health} zdrowia")
        print(f"Ty: {player.health}/{player.max_health} zdrowia")
        options = ["Atakuj", "Użyj mikstury leczenia", "Spróbuj uciec"]
        if allow_sacrifice and "Wola zniszczenia" in player.statuses and player.health > 10:
            options.append("Poświęć 10 zdrowia, aby zadać 15 obrażeń")
        action = choose("Co robisz?", options)

        if action == 2:
            if player.remove_item(POTION):
                heal(player, 10)
            else:
                print("\nNie masz mikstury.")
                continue
        elif action == 3:
            if random.random() < 0.5:
                print("\nUciekasz z walki.")
                return False
            print("\nNie udało się uciec.")
        elif action == 4 and len(options) == 4:
            player.health -= 10
            enemy.health -= 15
            print("\nWola zniszczenia rozdziera powietrze. Wróg otrzymuje 15 obrażeń.")
        else:
            damage = player.attack
            if enemy.undead and player.weapon == "Kostur iskier":
                damage += 3
                print("\nKostur iskier rozświetla martwe kości.")
            if "Błogosławieństwo kapliczki" in player.statuses:
                damage += 2
                player.statuses.remove("Błogosławieństwo kapliczki")
                print("\nBłogosławieństwo dodaje ci siły.")
            enemy.health -= damage
            print(f"\nZadajesz {damage} obrażeń.")

        if enemy.health <= 0:
            break
        damage_player(player, enemy.attack, f"{enemy.name} kontratakuje")

    if not player.running:
        return False

    print(f"\nPokonujesz: {enemy.name}.")
    if enemy.gold:
        player.gold += enemy.gold
        print(f"Zdobywasz {enemy.gold} złota.")
    if enemy.item:
        player.add_item(enemy.item)
    return True


def prologue(player: Player) -> str:
    while player.running:
        divider()
        print(
            "Budzisz się przy dźwięku dzwonu alarmowego. Ludzie krzyczą na ulicy. "
            "Przez okno widzisz, jak z lasu nadciąga popielata mgła. Karczmarz "
            "zamyka drzwi na belkę, a stary kronikarz patrzy prosto na ciebie.\n"
            "\n\"To się zaczęło\" - mówi cicho. - \"Korona Popiołu znowu woła.\""
        )
        action = choose(
            "Co robisz?",
            [
                "Porozmawiaj z kronikarzem",
                "Wyjdź przed gospodę",
                "Przeszukaj swój pokój",
                "Zapytaj karczmarza o plotki",
                "Pokaż status postaci",
            ],
        )
        if action == 1:
            print(
                "\nKronikarz mówi o trzech artefaktach: Srebrnym Kluczu, Krysztale "
                "Świtu i Pieczęci Starego Króla. Bez nich ruiny pożrą każdego."
            )
            if not player.has(TORCH):
                player.add_item(TORCH)
            player.statuses.add("Zna zadanie główne")
            pause()
            return "village"
        if action == 2:
            return "village"
        if action == 3:
            if OLD_AMULET not in player.inventory:
                player.add_item(OLD_AMULET)
            else:
                print("\nNie znajdujesz już nic użytecznego.")
            pause()
        if action == 4:
            print("\nKarczmarz szepcze, że bagna najlepiej przejść z mapą, a fort słucha tylko złota albo honoru.")
            pause()
        if action == 5:
            show_status(player)
            pause()
    return "quit"


def village(player: Player) -> str:
    while player.running:
        divider()
        print("Ravenford drży pod czarnym deszczem. To ostatnie ciepłe miejsce przed drogą.")
        action = choose(
            "Dokąd idziesz?",
            [
                "Sklep",
                "Kowal",
                "Mroczny Las",
                "Bagna Umarłych",
                "Krypta Milczących",
                "Fort Zdrajców",
                "Wieża Astromanty",
                "Ruiny Valdorinu",
                "Pokaż status",
                "Zakończ grę",
            ],
        )
        destinations = {
            1: "shop",
            2: "blacksmith",
            3: "forest",
            4: "swamp",
            5: "crypt",
            6: "fort",
            7: "tower",
            8: "ruins",
        }
        if action in destinations:
            return destinations[action]
        if action == 9:
            show_status(player)
            pause()
        if action == 10:
            player.running = False
            return "quit"
    return "quit"


def shop(player: Player) -> str:
    while player.running:
        divider()
        discount = "Pomógł kupcowi" in player.statuses
        print("Kupiec rozkłada towar. Jego uśmiech jest cieplejszy, jeśli pamięta twoją pomoc.")
        items = [(POTION, 5), (TORCH, 3), (SWAMP_MAP, 8), (LOCKPICKS, 10)]
        labels = []
        for name, price in items:
            final = max(1, price // 2) if discount else price
            labels.append(f"Kup: {name} - {final} złota")
        labels.append("Wróć do wioski")
        action = choose("Co kupujesz?", labels)
        if action == len(labels):
            return "village"
        item, price = items[action - 1]
        final = max(1, price // 2) if discount else price
        if spend_gold(player, final):
            player.add_item(item)
            pause()


def blacksmith(player: Player) -> str:
    while player.running:
        divider()
        discount = "Pomógł kowalowi" in player.statuses
        sword_price = 10 if discount else 15
        repair_price = 4 if discount else 6
        action = choose(
            "Kowal ociera sadzę z twarzy. Czego potrzebujesz?",
            [
                f"Kup Stalowy miecz - {sword_price} złota",
                f"Napraw broń na Zardzewiały miecz - {repair_price} złota",
                "Oddaj skrzynię narzędzi kowala",
                "Zapytaj o Fort Zdrajców",
                "Wróć do wioski",
            ],
        )
        if action == 1 and spend_gold(player, sword_price):
            player.weapon = "Stalowy miecz"
            print("\nNowa broń dobrze leży w dłoni.")
            pause()
        elif action == 2 and spend_gold(player, repair_price):
            player.weapon = "Zardzewiały miecz"
            print("\nTo nadal stara stal, ale teraz przynajmniej gryzie.")
            pause()
        elif action == 3:
            if player.remove_item(BLACKSMITH_TOOLS):
                player.statuses.add("Pomógł kowalowi")
                player.add_item(IRON_RING)
                print("\nKowal obiecuje zniżkę na broń.")
            else:
                print("\nNie masz jego skrzyni narzędzi.")
            pause()
        elif action == 4:
            print("\nKowal mówi: uszkodzony mur fortu da się przejść po cichu, jeśli masz wytrychy albo łotrowskie ręce.")
            pause()
        elif action == 5:
            return "village"


def forest(player: Player) -> str:
    while player.running:
        divider()
        print(
            "Drzewa są czarne, jakby spalone od środka. W powietrzu czuć wilgoć "
            "i zapach starego dymu."
        )
        action = choose(
            "Co robisz w Mrocznym Lesie?",
            [
                "Zbadaj przewrócony wóz",
                "Idź za śladami krwi",
                "Wejdź między drzewa",
                "Zbadaj starą kapliczkę",
                "Wróć do Ravenford",
            ],
        )
        if action == 1:
            wrecked_cart(player)
        elif action == 2:
            if "Pokonał Wilka Cienia" in player.statuses:
                print("\nLas milczy. Wilk już tu nie poluje.")
                pause()
            elif fight(player, Enemy("Wilk Cienia", 12, 3, 4, WOLF_PELT)):
                player.statuses.add("Pokonał Wilka Cienia")
                pause()
        elif action == 3:
            if BLACKSMITH_TOOLS not in player.inventory and "Pomógł kowalowi" not in player.statuses:
                print("\nMiędzy korzeniami znajdujesz skrzynię narzędzi kowala.")
                player.add_item(BLACKSMITH_TOOLS)
            else:
                print("\nPośród drzew nie znajdujesz nic nowego.")
            pause()
        elif action == 4:
            shrine(player)
        elif action == 5:
            return "village"
    return "quit"


def wrecked_cart(player: Player) -> None:
    if "Los kupca rozstrzygnięty" in player.statuses:
        print("\nPrzewrócony wóz pustoszeje w deszczu.")
        pause()
        return
    action = choose("Przy wozie leży ranny kupiec.", ["Pomóż kupcowi", "Przeszukaj wóz", "Zostaw go"])
    player.statuses.add("Los kupca rozstrzygnięty")
    if action == 1:
        if player.remove_item(POTION):
            print("\nOddajesz kupcowi miksturę. Mężczyzna przeżyje.")
        else:
            damage_player(player, 3, "Dźwigasz kupca do bezpiecznego miejsca i tracisz siły")
        player.statuses.add("Pomógł kupcowi")
        player.reputation += 1
    elif action == 2:
        player.gold += 12
        player.reputation -= 1
        player.statuses.add("Okradł kupca")
        print("\nZnajdujesz 12 złota. Las jakby robi się cichszy.")
    else:
        print("\nOdchodzisz. Kupiec nie zawoła drugi raz.")
    pause()


def shrine(player: Player) -> None:
    action = choose(
        "Zniszczony posąg bogini świtu patrzy bez twarzy.",
        ["Pomódl się", "Złóż ofiarę 5 złota", "Zniszcz posąg", "Odejdź"],
    )
    if action == 1:
        if DAWN_CRYSTAL in player.artifacts:
            player.statuses.add("Modlił się z Kryształem Świtu")
            print("\nKryształ odpowiada ciepłem. Coś dobrego zapamięta ten gest.")
        else:
            print("\nWidzisz krótką wizję słońca nad martwym miastem.")
    elif action == 2:
        if spend_gold(player, 5):
            player.statuses.add("Błogosławieństwo kapliczki")
            print("\nNastępna walka zacznie się z premią do ataku.")
    elif action == 3:
        if "Zniszczył kapliczkę" not in player.statuses:
            player.gold += 10
            player.statuses.add("Zniszczył kapliczkę")
            print("\nW podstawie posągu było 10 złota. Coś zimnego przesuwa się po twoim karku.")
        else:
            print("\nKapliczka jest już tylko rumowiskiem.")
    pause()


def swamp(player: Player) -> str:
    if not player.has(SWAMP_MAP):
        print("\nBez mapy bagna próbują cię połknąć.")
        if random.random() < 0.5:
            damage_player(player, 5, "Gubisz się w błocie")
            if player.running and fight(player, Enemy("Topielec", 16, 4, 7)):
                swamp_poison(player)
                pause()
        elif player.running:
            print("\nTym razem szczęście prowadzi cię przez mgłę.")
            pause()
    while player.running:
        divider()
        print("Bagna oddychają jak żywa istota. Z błota wystają stare hełmy i kości.")
        action = choose(
            "Co robisz?",
            ["Idź za śladami kamieni", "Przejdź przez mgłę", "Zbadaj zatopioną chatę", "Wróć do lasu"],
        )
        if action == 1:
            print("\nKamienie prowadzą do starej drogi ku Krypcie Milczących.")
            pause()
            return "crypt"
        if action == 2:
            if fight(player, Enemy("Topielec", 16, 4, 7)):
                swamp_poison(player)
                pause()
        if action == 3:
            herbalist(player)
        if action == 4:
            return "forest"
    return "quit"


def swamp_poison(player: Player) -> None:
    if not player.has(PURE_BLOOD):
        damage_player(player, 3, "Trucizna bagien wchodzi pod skórę")


def herbalist(player: Player) -> None:
    while player.running:
        action = choose(
            "W zatopionej chacie zielarka miesza czarny napar.",
            ["Porozmawiaj", "Kup miksturę - 5 złota", "Oddaj Wilcze futro", "Okradnij chatę", "Wyjdź"],
        )
        if action == 1:
            print("\nZielarka mówi, że krypta zatruwa krew tych, którzy idą z hałasem w sercu.")
            pause()
        elif action == 2 and spend_gold(player, 5):
            player.add_item(POTION)
            pause()
        elif action == 3:
            if player.remove_item(WOLF_PELT):
                player.statuses.add("Uratował zielarkę")
                player.add_item(PURE_BLOOD)
            else:
                print("\nNie masz wilczego futra.")
            pause()
        elif action == 4:
            if "Okradł zielarkę" not in player.statuses:
                player.add_item(POTION)
                player.add_item(POTION)
                player.statuses.add("Okradł zielarkę")
                player.max_health = max(1, player.max_health - 5)
                player.health = min(player.health, player.max_health)
                print("\nKlątwa zielarki obniża twoje maksymalne zdrowie o 5.")
            else:
                print("\nChata jest już pusta i lodowata.")
            pause()
        elif action == 5:
            return


def crypt(player: Player) -> str:
    if not (player.has(TORCH) or player.hero_class == "Uczeń Maga"):
        print("\nKrypta jest zbyt ciemna. Potrzebujesz pochodni albo magii.")
        pause()
        return "village"
    if player.health <= 5:
        print("\nJesteś zbyt słaby, by zejść do krypty.")
        pause()
        return "village"
    while player.running:
        divider()
        print("Schodzisz po kamiennych stopniach. Cisza gęstnieje jak mokry całun.")
        action = choose(
            "Przed tobą kamienne drzwi bez klamki.",
            ["Wejdź bez słowa", "Krzyknij swoje imię", "Uderz w drzwi bronią", "Użyj Starego amuletu", "Wycofaj się"],
        )
        if action == 1:
            print("\nDrzwi otwierają się bez szelestu.")
            crypt_reward(player)
            return "village"
        if action == 2:
            if fight(player, Enemy("Szkielet Wartownik", 18, 5, 9, undead=True)):
                crypt_reward(player)
                return "village"
        if action == 3:
            damage_player(player, 4, "Kamień odpowiada bólem w kościach")
            if player.running and fight(player, Enemy("Szkielet Wartownik", 18, 5, 9, undead=True)):
                crypt_reward(player)
                return "village"
        if action == 4:
            if player.remove_item(OLD_AMULET):
                print("\nAmulet pęka, a drzwi ustępują.")
                crypt_reward(player)
                return "village"
            print("\nNie masz Starego amuletu.")
            pause()
        if action == 5:
            return "village"
    return "quit"


def crypt_reward(player: Player) -> None:
    if SILVER_KEY not in player.artifacts:
        print(
            "\nNa sarkofagu leży klucz z jasnego metalu. Nie odbija światła, "
            "ale sam delikatnie świeci."
        )
        player.add_artifact(SILVER_KEY)
        player.gold += 10
        print("Zdobywasz także 10 złota.")
    else:
        print("\nGrobowiec jest już pusty.")
    pause()


def fort(player: Player) -> str:
    while player.running:
        divider()
        print("Fort Zdrajców stoi na wzgórzu jak złamany ząb.")
        action = choose(
            "Jak wejdziesz?",
            ["Podejdź do bramy", "Zakradnij się przez uszkodzony mur", "Obserwuj strażników", "Wróć"],
        )
        if action == 1:
            if "Pomógł kupcowi" in player.statuses:
                print("\nStrażnik rozpoznaje cię jako uczciwego wędrowca i prowadzi do dowódcy.")
                pause()
                commander(player)
            elif fight(player, Enemy("Najemnik Zdrajców", 20, 5, 12)):
                commander(player)
        elif action == 2:
            if player.has(LOCKPICKS) or player.hero_class == "Łotrzyk":
                print("\nPrzechodzisz po cichu i znajdujesz 8 złota.")
                player.gold += 8
                pause()
                commander(player)
            else:
                print("\nBez wytrychów nie otworzysz bocznego przejścia.")
                pause()
        elif action == 3:
            print("\nStrażnicy boją się dowódcy bardziej niż ciebie. Nie są pewni, czy Pieczęć powinna zostać w forcie.")
            pause()
        elif action == 4:
            return "village"
        if KING_SEAL in player.artifacts:
            return "village"
    return "quit"


def commander(player: Player) -> None:
    if KING_SEAL in player.artifacts:
        print("\nFort nie ma już czego ci dać.")
        pause()
        return
    print(
        "\nDowódca mówi: \"Korona nie daje się zniszczyć. Ona wybiera. "
        "My tylko opóźniamy kolejnego głupca.\""
    )
    action = choose(
        "Jak odpowiadasz?",
        ["Zażądaj Pieczęci", "Przekonaj dowódcę", "Zaatakuj", "Zaproponuj zapłatę 20 złota"],
    )
    if action == 1:
        print("\nDowódca dobywa broni. Żądania są tu tańsze niż krew.")
        if fight(player, Enemy("Dowódca Zdrajców", 28, 7, 18)):
            player.add_artifact(KING_SEAL)
    elif action == 2:
        if "Pomógł kupcowi" in player.statuses or "Błogosławieństwo kapliczki" in player.statuses:
            print("\nDowódca długo milczy, po czym oddaje Pieczęć.")
            player.add_artifact(KING_SEAL)
        else:
            print("\nNie masz dowodu, że różnisz się od poprzednich śmiałków.")
    elif action == 3:
        if fight(player, Enemy("Dowódca Zdrajców", 28, 7, 18)):
            player.add_artifact(KING_SEAL)
    elif action == 4:
        if spend_gold(player, 20):
            player.add_artifact(KING_SEAL)
    pause()


def tower(player: Player) -> str:
    if not player.artifacts:
        print("\nRuny wieży pozostają zimne. Musisz najpierw zdobyć choć jeden artefakt.")
        pause()
        return "village"
    while player.running:
        divider()
        print("Wieża Astromanty ginie w chmurach, a srebrne znaki zapalają się pod twoją dłonią.")
        action = choose("Co robisz?", ["Wejdź do wieży", "Zbadaj runy", "Obejdź wieżę", "Wróć"])
        if action == 1:
            mirror_hall(player)
            if player.running:
                tower_reward(player)
            return "village"
        if action == 2:
            if player.hero_class == "Uczeń Maga":
                print("\nOdczytujesz runę: 'Świt nie jest światłem. Świt jest wyborem.'")
            else:
                print("\nRuny lśnią, lecz nie zdradzają sensu.")
            pause()
        if action == 3:
            if player.weapon != "Kostur iskier":
                print("\nZa wieżą znajdujesz Kostur iskier ukryty w popiele.")
                player.weapon = "Kostur iskier"
            else:
                print("\nWiatr śpiewa między kamieniami.")
            pause()
        if action == 4:
            return "village"
    return "quit"


def mirror_hall(player: Player) -> None:
    action = choose(
        "W sali luster widzisz trzy odbicia samego siebie.",
        ["Dotknij pierwszego lustra", "Dotknij drugiego lustra", "Dotknij trzeciego lustra", "Rozbij lustra"],
    )
    if action == 1:
        heal(player, 10)
        loss = min(5, player.gold)
        player.gold -= loss
        print(f"Lustro zabiera {loss} złota.")
        pause()
    elif action == 2:
        print("\nWidzisz siebie na tronie z Koroną Popiołu. Wizja zostawia w dłoniach siłę.")
        player.statuses.add("Błogosławieństwo kapliczki")
        pause()
    elif action == 3:
        damage_player(player, 5, "Trzecie odbicie uśmiecha się twoją raną")
        if player.running:
            player.statuses.add("Wola zniszczenia")
            print("Otrzymujesz status: Wola zniszczenia.")
            pause()
    elif action == 4:
        shadow_health = player.health
        if "Błogosławieństwo kapliczki" in player.statuses:
            shadow_health = max(1, shadow_health - 8)
        fight(player, Enemy("Cień Gracza", shadow_health, 5))
        pause()


def tower_reward(player: Player) -> None:
    if DAWN_CRYSTAL not in player.artifacts:
        print(
            "\nNa szczycie wieży leży Kryształ Świtu. Przez chwilę czujesz ciepło, "
            "którego w tym świecie dawno nie było."
        )
        player.add_artifact(DAWN_CRYSTAL)
        player.max_health += 5
        player.health += 5
        print("Maksymalne zdrowie wzrasta o 5.")
    else:
        print("\nSzczyt wieży jest pusty.")
    pause()


def ruins(player: Player) -> str:
    divider()
    print(
        "Dawna stolica wygląda jak miasto pogrzebane w szarym śniegu. "
        "W oknach stoją cienie ludzi, którzy umarli sto lat temu."
    )
    if len(player.artifacts) < 3:
        ending_lost(player)
        return "quit"
    while player.running:
        action = choose(
            "Co robisz w ruinach?",
            ["Idź główną aleją", "Przeszukaj zniszczone domy", "Wejdź do pałacu", "Odpocznij przy fontannie"],
        )
        if action == 1:
            print("\nAleja prowadzi pod pałac. Każdy krok brzmi jak cudze wspomnienie.")
            pause()
        elif action == 2:
            ruined_houses(player)
        elif action == 3:
            crown_hall(player)
            return "quit"
        elif action == 4:
            fountain(player)
    return "quit"


def ruined_houses(player: Player) -> None:
    if "Przeszukał domy Valdorinu" in player.statuses:
        print("\nDomy oddały już wszystko oprócz kurzu.")
    else:
        player.statuses.add("Przeszukał domy Valdorinu")
        player.gold += 10
        player.add_item(POTION)
        player.add_item(OLD_LETTER)
        print(
            "\nStary list ujawnia, że król chciał ocalić córkę. Korona spełniła "
            "życzenie, ale zabrała całe miasto."
        )
    pause()


def fountain(player: Player) -> None:
    action = choose("Fontanna jest pełna srebrnej wody.", ["Wrzuć 5 złota", "Wypij bez ofiary", "Odejdź"])
    if action == 1:
        if spend_gold(player, 5):
            player.health = player.max_health
            print("\nOdzyskujesz pełnię zdrowia.")
    elif action == 2:
        damage_player(player, 5, "Woda smakuje jak popiół")
        if player.running:
            print("Słyszysz głosy zmarłych.")
    pause()


def crown_hall(player: Player) -> None:
    divider()
    missing = [artifact for artifact in [SILVER_KEY, DAWN_CRYSTAL, KING_SEAL] if artifact not in player.artifacts]
    if missing:
        ending_lost(player)
        return
    print(
        "Sala tronowa jest ogromna i martwa. Na tronie siedzi postać w spalonej "
        "zbroi. Na jej głowie spoczywa Korona Popiołu."
    )
    options = ["Zaatakuj króla", "Spróbuj zniszczyć Koronę", "Załóż Koronę", "Przemów do króla"]
    if player.has(OLD_LETTER):
        options.append("Przebacz królowi")
    action = choose("Martwy król pyta, po co przyszedłeś.", options)
    if action == 3:
        ending_evil(player)
    elif action == 5 and player.has(OLD_LETTER):
        ending_good(player, persuaded=True)
    elif action == 4 and player.has(OLD_LETTER):
        ending_good(player, persuaded=True)
    else:
        ash_king_health = 40
        ash_king_attack = 8
        if DAWN_CRYSTAL in player.artifacts:
            ash_king_attack -= 2
        if "Zniszczył kapliczkę" in player.statuses:
            ash_king_health += 10
        if fight(player, Enemy("Popielny Król", ash_king_health, ash_king_attack), allow_sacrifice=True):
            if action == 2 and DAWN_CRYSTAL in player.artifacts:
                ending_good(player, persuaded=False)
            elif player.has(OLD_LETTER):
                ending_good(player, persuaded=False)
            else:
                ending_neutral(player)


def ending_good(player: Player, persuaded: bool) -> None:
    divider()
    if persuaded:
        print(
            "Pokazujesz królowi prawdę i przebaczenie. Korona pęka, zanim zdąży "
            "upaść z jego głowy."
        )
    print(
        "ŚWIT NAD VALDORINEM\n\n"
        "Korona pęka w twoich dłoniach. Przez szczeliny w murach wpada pierwsze "
        "prawdziwe światło od stu lat. Cienie mieszkańców Valdorinu unoszą się "
        "ku niebu. Królestwo nie zostaje od razu uzdrowione, ale ludzie pierwszy "
        "raz od dawna widzą nadzieję."
    )
    player.running = False


def ending_neutral(player: Player) -> None:
    divider()
    print(
        "NOWY STRAŻNIK\n\n"
        "Zasiadasz na tronie nie jako władca, ale jako strażnik. Korona nadal "
        "istnieje. Klątwa słabnie, lecz nie znika. Wiesz, że pewnego dnia ktoś "
        "inny przyjdzie po jej moc."
    )
    player.running = False


def ending_evil(player: Player) -> None:
    divider()
    print(
        "WŁADCA POPIOŁU\n\n"
        "Gdy Korona dotyka twojej głowy, słyszysz tysiące głosów. Ból trwa tylko "
        "chwilę. Potem przychodzi cisza. Martwe miasto czeka na rozkaz nowego "
        "Popielnego Króla."
    )
    player.running = False


def ending_lost(player: Player) -> None:
    divider()
    print(
        "ZGUBIONY W POPIELE\n\n"
        "Brama zamyka się za tobą. Ulice zmieniają kształt. Po kilku godzinach "
        "nie pamiętasz swojego imienia. Po kilku dniach jesteś tylko kolejnym "
        "cieniem w oknie martwego miasta."
    )
    player.running = False


def main() -> None:
    random.seed()
    player = create_player()
    scene = prologue(player)
    routes = {
        "village": village,
        "shop": shop,
        "blacksmith": blacksmith,
        "forest": forest,
        "swamp": swamp,
        "crypt": crypt,
        "fort": fort,
        "tower": tower,
        "ruins": ruins,
    }
    while player.running and scene != "quit":
        scene = routes[scene](player)
    print("\nDziękuję za grę w Koronę Popiołu.")


if __name__ == "__main__":
    main()
