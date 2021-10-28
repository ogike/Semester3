Módosítások a projekten az órán bemutatott verzióhoz képest:

1. Randomgenerálás javítása

Ahogy az óra legvégén elhangzott, a véletlenszerû pálya kiválasztásánál nem volt optimális az elõre megírt kód. Ezt javítottam.

2. Egérmozgatás ellenõrzése

A feladat az volt, hogy amennyiben a felhasználó 5 mp-ig nem mozgatja az egeret a felületen, jelezük az inaktivitását egy felugró ablak megjelenítésével. A helyes mûködést egy igencsak triviális hiba akadályozta meg. Az egér mozgásának figyelését (azt a kódrészletet, mely ilyenkor újraindítja az idõzítõt) ugyanahhoz az eseménykezelõhöz adtam hozzá, amely a kattintást is lekezeli a gombok esetében. Csakhogy a kettõt két külön Listener interfészen keresztül kell vizsgálni: a mozgást a MouseMotionListener, a kattintást a MouseListener interfésszel, elõbbit az addMouseMotionListener, utóbbit az addMouseListener paranccsal hozzáádva a megfelelõ objektumhoz (esetünkben a gombokhoz). Mivel a MouseAdapter absztrakt osztály mindkét említett interfészt megvalósítja, önmagában az, hogy felüldefináltam a kódban a mouseMoved metódusát, nem okozott fordítási hibát, ezért is siklottam át a demó végén a probléma felett. Ha viszont csak az addMouseListener paranccsal adom át a gombnak ezt az eseménykezelõt, akkor ez a mouseMoved metódus sosem kerül meghívásra.

Fontos, hogy mivel a gombokhoz adjuk csak hozzá ezt a mozgást figyelõ eseménykezelõt, ha az ablak más részein (pl. a menüsor felett) mozgatjuk az egeret 5 mp-ig, akkor a felirat meg fog jelenni! Ezt most nem tekintjük hibának, de ha más feladatot kapunk, ott fontos, hogy a megfelelõ objektumoknak adjuk át ezt az eseménykezelõt, melyek feletti mozgatást megfigyelni szeretnénk.

3. Óra

Felvettem egy másik idõzítõt is, mely másodpercenként növeli a játékidõt eggyel, és frissít egy feliratot a pálya felett.

4. Idõzítõk ideiglenes megállítása

Az óra végén észlelhetõ volt még egy kisebb hiba, hogy mikor megjelent a megfelelõ figyelmeztetõ ablak, és azt bezártuk, szinte rögtön megjelent a következõ figyelmeztetés. Miért? Ugyanis amint megjelent az egyik ablak, a háttérben az idõzítõ ment tovább, és ha az 5 mp nagy részét azzal töltöttük, hogy elolvassuk a kapott üzenetet, és rákattintsunk az OK gombra, akkor szinte azonnal kaptuk a következõ jelzést. Hasonlóan szerencsétlen, ha az idõzítõ pereg olyankor is, mikor például mentéshez vagy betöltéshez megjelenik a fájl kiválasztását felkínáló ablak. Ezért minden felugró ablak megjelenítése elõtt leállítom, majd utána újraindítom mindkét idõzítõt (mozgás érzékelése és az óra) az új stopTimers és resetTimers metódusokkal.

Fontos! A timereink ilyenkor nem folytatják, hanem újrakezdik az számlálást. Azaz minden resetTimers hívás után újra 5 mp-ünk van mozgatni az egeret a gombok felett, mielõtt figyelmeztetést kapunk. Hasonlóan az óra is egy teljes mp múlva fogja növelni az idõt. Ez az elõbbi esetben kimondottan hasznos, hiszen mi valóban azt szeretnénk, ha az utolsó akció (a felugró ablak bezárása) után 5 mp-ünk lenne a figyelmeztetés megjelenéséig. Az óra esetében viszont ezzel lényegében egy kicsit "idõt nyerünk", hiszen így a megszakított másodpercet megnyújtjuk kissé, de mivel a másodperc elég kis idõegység, ez itt nem kritikus. Nagyobb idõegységek esetén viszont figyeljünk erre.

5. Játék ellenõrzése

Egy új menüpontban felvettem a játék ellenõrzésének lehetõségét. Hibátlan kitöltés esetén gratulálunk a felhasználónak, és új játékot indítunk (azonos nehézségi szinten, de másik pályával. Hiba esetén jelezzük a hibák számát, és a felhasználó folytathatja a játékot.