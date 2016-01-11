# Alkalmazások fejlesztése 3. beadandó (ember rész)
- [Leírás](https://www.github.com/3BL/alkfejlbead3ember#leírás)
- [Követelmények](https://www.github.com/3BL/alkfejlbead3ember#követelmények)
- [Technológiák](https://www.github.com/3BL/alkfejlbead3ember#technológiák)
- [Végpontok](https://www.github.com/3BL/alkfejlbead3ember#végpontok)
- [Modellek](https://www.github.com/3BL/alkfejlbead3ember#modellek)
- [Folyamatok](https://www.github.com/3BL/alkfejlbead3ember#folyamatok)
- [Felhasználói interfész](https://www.github.com/3BL/alkfejlbead3ember#interfész)
- [Adatok ellenőrzése](https://www.github.com/3BL/alkfejlbead3ember#Adatok ellenőrzése)


##Leírás
Ez a projekt az ELTE-IK programtervező informatikus Bsc szak Alkalmazások fejlesztése tárgy harmadik
beadandója. Én egy kutyachip nyilványtartó programot választottam, ahol meg lehet nézni egy oldalon, 
hogy mely chipek hibásak, és a hiba melyik kutyáknál jött elő.


##Követelmények

Funkcionális elvárások

    Felhasználóként szeretnénk felvinni egy chipet, ami hibás --> új chip felvétel
    Felhasználóként szeretnénk megtekinteni, szerkeszteni, törölni a chipeket

Nem funkcionális követelmények

    Felhasználóbarát, ergonomikus elrendezés és kinézet.
    Gyors működés.
    Funkciókhoz való hozzáférés.


##Technológiák
A project javascript-ben azon belül pedig ember.js-es technológiával van megvalósítva, a megjelenítéshez
a handlebars fájlok felelnek az adatbázist pedig egy restapi-s workspace biztosítja.
 

##Végpontok

 * főoldal: https://bead3ember-a3bl.c9users.io
 * chiplista: /errors/list
 * chip megtekintése: /errors/error_id
 * chip szerkesztése: /errors/edit/error_id
 * chip felvétele: /errors/list
 * kutyalista: /errors/listkiskutya
 * új kiskutya hozzáadása: /errors/error_id/newkiskutya


##Modellek
![Adatbázis modell](https://github.com/3BL/alkfejlbead3ember/blob/master/documentation/bead3relation.png)

Itt egy kép látható az adatbázis modellről. Az error modell tükrözi a chiphibát akinek egy egyedi adattagja van,
az id-ja, tehát két ugyanolyan objektum nem lehet az adatbázisban. Lehet sok hiba, mindegyikhez lehetnek
kiskutyák hozzárendelve, ez a kiskutyak adattag, egy kiskutyákat tartalmazó tömb, ezeket látja a felhasználó kilistázva a
kutyalista oldalon. ** A one-to-many kapcsolat úgy valósul meg, hogy egy error-hoz több kutya is lehet rendelve, viszont visszafele már nem működik a dolog, minden kutyához csak egy hibás chip van rendelve az id-je alapján. **

##Folyamatok
![Adatbázis modell](https://github.com/3BL/alkfejlbead3ember/blob/master/documentation/bead3folyamat.png)


##Interfész
![Adatbázis modell](https://github.com/3BL/alkfejlbead3ember/blob/master/documentation/webdesign.png)

Röviden a felhasználói interfészről. A jobb felső sarokban vannak a linkek, a főoldal link értelemszerüen az index.html-re visz,
a hibalista link a hibás chipek oldalára, a kutyalista pedig a kutyákat listázó oldalra.


##Adatok ellenőrzése
Mikor új adatokat akarunk felvinni, a validator mindig figyeli, hogy az input mezők ne legyenek üresek, figyelmeztet az esetleges
hibákra, és ajánlott értékeket ír az üres input mezőkre.

##Fejlesztés és felhasználás


Én a cloud9 webes felüleletet használtam a projekt megírásához Windows-on. Ha valaki folytatni szeretné,
akkor egyszerüen csak le kell töltenie, és a saját cloud9 projektjébe importálnia. Cloud9 használata esetén az npm install utasítás bash-beli futtása kell először a működéshez, majd a ./node_modules/.bin/ember serve parancs és a restapi-s projektben pedig, a server.js futtaására van szükség.

A fejlesztés zökkenőmentes menetéhez szükség lesz 2GB memóriára és valamilyen 2 magos processzorra minimum.


##Funkció lista 


- error, kiskutya egyedi az id alapján, csak egy lehet mindegyikből
- Chiplistázó oldal müködik
- Szerkesztés/Törlés funkció müködik

További fejlesztési lehetőség:
- többféle tesztelési és validációs lehetőség implementálása
- login, regisztráció implementálása
- minden chipnél csak a hozzá felvett ebeket lássuk
