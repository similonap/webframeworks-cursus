# Labo 5

Voor dit labo moet je de volgende theorie bekeken hebben:
- Routing en navigatie

## Opdracht: Rainbow Navigation

Ga verder met de code van labo 4 en kopieer deze naar een nieuw project.

We bouwen de volgende applicatie:

![picture 8](../images/rainbows-navigation.gif)

De applicatie bestaat uit drie schermen:
- Een simpel "Home" scherm met een knop die naar scherm 3 gaat
- Een scherm dat de oefening van vorige week bevat
- Een scherm met een lijst van 200 kleuren verkregen via `rainbow-colors-array-ts`

Wanneer je op een kleur drukt, krijg je een detail scherm. Dit scherm heeft als achtergrondkleur de geselecteerde kleur en toont de hex waarde in de titel en in het midden van het scherm

#### Tips:
- Gebruik const colors = rca(200,"hex",true); voor de 200 kleuren die je toont op het 3e scherm.
- Je hebt een custom component nodig voor de inhoud van het labo van vorige week.
- Je hebt hier een combinatie van Stack en Tab navigatie nodig.