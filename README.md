# Korona Popiołu

Prototyp gry wyboru / prostego RPG fantasy w języku polskim.

## Uruchomienie wersji HTML

Otwórz w przeglądarce plik:

`index.html`

W VS Code możesz też kliknąć plik prawym przyciskiem i wybrać opcję uruchomienia przez rozszerzenie Live Server, jeśli je masz.

## Uruchomienie na Androidzie

Najwygodniej uruchomić grę jako PWA:

1. Udostępnij folder projektu przez hosting statyczny, np. GitHub Pages, Netlify albo lokalny serwer w tej samej sieci.
2. Otwórz adres strony w Chrome na Androidzie.
3. W menu Chrome wybierz `Dodaj do ekranu głównego`.

Gra ma plik `manifest.webmanifest`, ikony aplikacji i `service-worker.js`, więc po uruchomieniu przez adres `http://` albo `https://` może działać jak instalowana aplikacja webowa.

Do szybkiego testu bez instalowania możesz też skopiować cały folder na telefon i otworzyć `index.html`, ale tryb instalacji i cache offline działają dopiero przez serwer.

## Uruchomienie wersji konsolowej

W katalogu projektu uruchom:

```powershell
python main.py
```

## Co jest w prototypie

- wybór klasy postaci,
- rozszerzone klasy: Wojownik, Łotrzyk, Uczeń Maga i Banita,
- zdrowie, złoto, broń, ekwipunek, artefakty i statusy fabularne,
- system reputacji: dobro, chciwość i popiół,
- dziennik zdarzeń pod opisem sceny, pokazujący nagrody i ważne informacje,
- sklepy, kowal, zniżki i konsekwencje decyzji,
- akty fabularne, Ravenford, las, bagna, krypta, fort, wieża, atak na wioskę, ruiny i Sala Korony,
- zadania poboczne, NPC, dodatkowe artefakty i moralne konsekwencje,
- przycisk `Poradnik` w menu głównym,
- generowane ilustracje lokacji w `assets/locations`,
- opcjonalna muzyka ambientowa generowana w przeglądarce,
- turowa walka z atakiem, miksturą i ucieczką,
- trzy główne artefakty oraz artefakty dodatkowe do najlepszych zakończeń,
- sześć zakończeń zależnych od decyzji, wiedzy i reputacji.
