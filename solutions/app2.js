const user = {
  firstName: 'John',
  lastName: 'Doe',
};

let {lastName:l='unknown', firstName:f='unknown', job:j='unknown'} = user; 



export {
  f,
  l,
  j,
};



/*
## 2. feladat
- A `solutions/app2.js` fájlban dolgozz!
- Adott az alábbi objektum:
```javascript
    const user = {
        firstName: 'John',
        lastName: 'Doe'
    };
```
- Mentsd el külön `l`, `f` és `j` változókba a fenti objektum lastName, firstName és job property-jeit! 
- Ha valamelyik nincs megadva, akkor az érték legyen az "unknown" string!
*/