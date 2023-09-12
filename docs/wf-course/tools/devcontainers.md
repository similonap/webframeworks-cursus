# Devcontainers: One Click Dev Environments

## Dev Environment

Een Dev Environment is simpelweg een systeem waar alle software, tools en hardware op geïnstalleerd zijn, zodat jij kunt programmeren aan een specifiek project. Met software en tools wordt echt alles bedoeld dat je gebruikt tijdens het programmeren:
 - Code Editors (bv. VS Code of Visual Studio)
 - Plugins (bv. een Markdown extension in VS Code)
 - Compilers (bv. de .NET compiler voor C#)
 - Sandbox omgevingen (bv. NodeJS)
 - ...

Meestal heb je op één toestel meerdere Dev Environments geïnstalleerd. Het is nu eenmaal niet praktisch om rond te lopen met 5 laptops...

## Dev Environment Problemen

Een Dev Environment is dus vaak een complex systeem van allerlei software, tools en specifieke instellingen die samenwerken om een stuk software te ontwikkelen. Wat kan er allemaal misgaan?

### Oh Nee, mijn Laptop is Kapot!

Je laptop gaat stuk, en je koopt een nieuwe. Nu moet je ALLE software en tools opnieuw installeren. Niet alleen dat, maar je zult er ook op moeten letten dat je EXACT dezelfde versie van die software en tools terug installeert! Weet jij nog of je versie 18.17.1 of versie 17.9.2 had geïnstalleerd op je laptop?

### Oh Nee, een Groepswerk!

Je moet samenwerken met iemand anders. Het project werkt perfect op jouw Dev Environment, maar wilt om één of andere reden niet draaien op die van je teamgenoot. Tijd om ELKE tool en software die je gebruikt na te kijken op versie nummer! 

### Oh Nee, een Oud Project Werkt Niet Meer!

Voor je nieuwste projecten heb je NodeJS geupdate naar de nieuwste versie. Oeps! Nu werken je oude projecten, die gebruik maakten van een oude versie van NodeJS, niet meer!

### Deployment Hell

Alles werkt perfect op jouw systeem, en ook op die van je teamgenoten. Maar tijdens het deployen naar de server, merk je dat je software niet werkt. Tijd om ELKE tool en software die je gebruikt (opnieuw) na te kijken op versie nummer! 

## Docker to the Rescue!

We kunnen een Docker Container zo samenstellen dat alle tools en instellingen daarin geïnstalleerd staan. Je installeert niets meer op je eigen systeem, alles zit netjes verpakt in een Docker Container! Zo'n Docker Container waarin je je Dev Environment opslaat voor één specifiek project, dat heet een DevContainer.

