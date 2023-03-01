# MySQL Connectie

Als we een applicatie willen maken die data uit een database haalt, dan moeten we eerst een connectie maken met die database. In deze les gaan we een connectie maken met een MySQL database.

## MySQL2

MySQL2 is een npm package die het mogelijk maakt om een connectie te maken met een MySQL database. Vergis je niet met een andere package met een gelijkaardige naam: mysql. MySQL2 biedt een aantal verbeteringen ten opzichte van mysql en heeft een betere TypeScript support.

We installeren MySQL2:

```
npm install mysql2
```

## Gebruik

Stel dat je een tabel hebt met de volgende structuur:

```sql
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);
```



