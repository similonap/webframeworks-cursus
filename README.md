# Webframeworks: cursusconfiguratie

Deze repository bevat alleen de configuratie en navigatie van de cursus.
Alle lessen, labo-opdrachten, starters, oplossingen, afbeeldingen en interactieve
viewers staan in
[web-monorepo-docusaurus](https://github.com/similonap/web-monorepo-docusaurus).

## Lokaal gebruiken

Gebruik Node.js 22 of nieuwer en clone de repository inclusief submodule:

```bash
git clone --recurse-submodules https://github.com/similonap/webframeworks-cursus.git
cd webframeworks-cursus
npm run setup
npm start
```

De gedeelde monorepo staat in `course-material/`. De cursus wordt gegenereerd in
`.course/`; een productiebuild staat in `.course/build/`.

```bash
npm run assemble  # cursus samenstellen en oefeningdownloads maken
npm start         # samenstellen en de ontwikkelserver starten
npm run build     # samenstellen en een productiebuild maken
npm run serve     # de bestaande productiebuild bekijken
npm run typecheck # TypeScript-controle op de samengestelde cursus
```

`docusaurus.config.ts` bepaalt de cursusnaam, navigatie en huisstijl.
`sidebars.ts` selecteert uitsluitend het Webframeworks-materiaal uit de monorepo.
Bewerk cursusinhoud niet in deze repository, maar in de monorepo. Elke opdracht
heeft daar een eigen Markdown-pagina en een afzonderlijke `starter/`-map; wanneer
de oorspronkelijke cursus een oplossing bevatte, staat die in `solution/`.

Als `../web-monorepo-docusaurus` aanwezig is, gebruiken de npm-commando's die
lokale checkout automatisch. Zo kan je ongepubliceerde wijzigingen meteen testen.
Je kan ook expliciet een checkout kiezen met `COURSE_MATERIAL_DIR`.

Zonder lokale checkout halen de npm-prehooks voor elke nieuwe assembly de nieuwste
`main` van de submodule op en installeren ze de bijbehorende dependencies:

```bash
COURSE_MATERIAL_DIR=/pad/naar/web-monorepo-docusaurus npm start
```
