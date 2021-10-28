M�dos�t�sok a projekten az �r�n bemutatott verzi�hoz k�pest:

1. Randomgener�l�s jav�t�sa

Ahogy az �ra legv�g�n elhangzott, a v�letlenszer� p�lya kiv�laszt�s�n�l nem volt optim�lis az el�re meg�rt k�d. Ezt jav�tottam.

2. Eg�rmozgat�s ellen�rz�se

A feladat az volt, hogy amennyiben a felhaszn�l� 5 mp-ig nem mozgatja az egeret a fel�leten, jelez�k az inaktivit�s�t egy felugr� ablak megjelen�t�s�vel. A helyes m�k�d�st egy igencsak trivi�lis hiba akad�lyozta meg. Az eg�r mozg�s�nak figyel�s�t (azt a k�dr�szletet, mely ilyenkor �jraind�tja az id�z�t�t) ugyanahhoz az esem�nykezel�h�z adtam hozz�, amely a kattint�st is lekezeli a gombok eset�ben. Csakhogy a kett�t k�t k�l�n Listener interf�szen kereszt�l kell vizsg�lni: a mozg�st a MouseMotionListener, a kattint�st a MouseListener interf�sszel, el�bbit az addMouseMotionListener, ut�bbit az addMouseListener paranccsal hozz��dva a megfelel� objektumhoz (eset�nkben a gombokhoz). Mivel a MouseAdapter absztrakt oszt�ly mindk�t eml�tett interf�szt megval�s�tja, �nmag�ban az, hogy fel�ldefin�ltam a k�dban a mouseMoved met�dus�t, nem okozott ford�t�si hib�t, ez�rt is siklottam �t a dem� v�g�n a probl�ma felett. Ha viszont csak az addMouseListener paranccsal adom �t a gombnak ezt az esem�nykezel�t, akkor ez a mouseMoved met�dus sosem ker�l megh�v�sra.

Fontos, hogy mivel a gombokhoz adjuk csak hozz� ezt a mozg�st figyel� esem�nykezel�t, ha az ablak m�s r�szein (pl. a men�sor felett) mozgatjuk az egeret 5 mp-ig, akkor a felirat meg fog jelenni! Ezt most nem tekintj�k hib�nak, de ha m�s feladatot kapunk, ott fontos, hogy a megfelel� objektumoknak adjuk �t ezt az esem�nykezel�t, melyek feletti mozgat�st megfigyelni szeretn�nk.

3. �ra

Felvettem egy m�sik id�z�t�t is, mely m�sodpercenk�nt n�veli a j�t�kid�t eggyel, �s friss�t egy feliratot a p�lya felett.

4. Id�z�t�k ideiglenes meg�ll�t�sa

Az �ra v�g�n �szlelhet� volt m�g egy kisebb hiba, hogy mikor megjelent a megfelel� figyelmeztet� ablak, �s azt bez�rtuk, szinte r�gt�n megjelent a k�vetkez� figyelmeztet�s. Mi�rt? Ugyanis amint megjelent az egyik ablak, a h�tt�rben az id�z�t� ment tov�bb, �s ha az 5 mp nagy r�sz�t azzal t�lt�tt�k, hogy elolvassuk a kapott �zenetet, �s r�kattintsunk az OK gombra, akkor szinte azonnal kaptuk a k�vetkez� jelz�st. Hasonl�an szerencs�tlen, ha az id�z�t� pereg olyankor is, mikor p�ld�ul ment�shez vagy bet�lt�shez megjelenik a f�jl kiv�laszt�s�t felk�n�l� ablak. Ez�rt minden felugr� ablak megjelen�t�se el�tt le�ll�tom, majd ut�na �jraind�tom mindk�t id�z�t�t (mozg�s �rz�kel�se �s az �ra) az �j stopTimers �s resetTimers met�dusokkal.

Fontos! A timereink ilyenkor nem folytatj�k, hanem �jrakezdik az sz�ml�l�st. Azaz minden resetTimers h�v�s ut�n �jra 5 mp-�nk van mozgatni az egeret a gombok felett, miel�tt figyelmeztet�st kapunk. Hasonl�an az �ra is egy teljes mp m�lva fogja n�velni az id�t. Ez az el�bbi esetben kimondottan hasznos, hiszen mi val�ban azt szeretn�nk, ha az utols� akci� (a felugr� ablak bez�r�sa) ut�n 5 mp-�nk lenne a figyelmeztet�s megjelen�s�ig. Az �ra eset�ben viszont ezzel l�nyeg�ben egy kicsit "id�t nyer�nk", hiszen �gy a megszak�tott m�sodpercet megny�jtjuk kiss�, de mivel a m�sodperc el�g kis id�egys�g, ez itt nem kritikus. Nagyobb id�egys�gek eset�n viszont figyelj�nk erre.

5. J�t�k ellen�rz�se

Egy �j men�pontban felvettem a j�t�k ellen�rz�s�nek lehet�s�g�t. Hib�tlan kit�lt�s eset�n gratul�lunk a felhaszn�l�nak, �s �j j�t�kot ind�tunk (azonos neh�zs�gi szinten, de m�sik p�ly�val. Hiba eset�n jelezz�k a hib�k sz�m�t, �s a felhaszn�l� folytathatja a j�t�kot.