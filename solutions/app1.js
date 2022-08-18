const user = {
  firstName: 'John',
  lastName: 'Doe',
};
let {lastName='unknown', firstName='unknown', job='unknown'} = user; 



export {
  firstName,
  lastName,
  job,
};

//

// export {
//   firstName,
//   lastName,
//   job,
// };
/*
## 1. feladat
- A `solutions/app1.js` fájlban dolgozz!
- Adott az alábbi objektum:
```javascript
    const user = {
        firstName: 'John',
        lastName: 'Doe'
    };
```
- Mentsd el külön lastName, firstName és job változókba a fenti objektum 
property-jeit destructuring használatával!
- Ha valamelyik nincs megadva, akkor az érték legyen az "unknown" string!
*/
