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
- zdrowie, złoto, broń, ekwipunek, artefakty i statusy fabularne,
- sklepy, kowal, zniżki i konsekwencje decyzji,
- eksploracja Ravenford, lasu, bagien, krypty, fortu, wieży i ruin,
- generowane ilustracje lokacji w `assets/locations`,
- turowa walka z atakiem, miksturą i ucieczką,
- trzy wymagane artefakty do finału,
- kilka zakończeń zależnych od decyzji.
