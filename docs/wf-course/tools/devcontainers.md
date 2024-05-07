# Devcontainers: One Click Dev Environments

## Dev Environment

Een Dev Environment is simpelweg een systeem waar alle software, tools en hardware op geïnstalleerd zijn, zodat jij kunt programmeren aan een specifiek project. Met software en tools wordt echt alles bedoeld dat je gebruikt tijdens het programmeren:
 - Code Editors (bv. VS Code of Visual Studio)
 - Plugins (bv. een Markdown extension in VS Code)
 - Compilers (bv. de .NET compiler voor C#)
 - Sandbox omgevingen (bv. NodeJS)
 - ...

Meestal heb je op één toestel meerdere Dev Environments geïnstalleerd. Het is nu eenmaal niet praktisch om rond te lopen met 5 laptops...

### Dev Environment Problemen

Een Dev Environment is dus vaak een complex systeem van allerlei software, tools en specifieke instellingen die samenwerken om een stuk software te ontwikkelen. Wat kan er allemaal misgaan?

#### Oh Nee, mijn Laptop is Kapot!

Je laptop gaat stuk, en je koopt een nieuwe. Nu moet je ALLE software en tools opnieuw installeren. Niet alleen dat, maar je zult er ook op moeten letten dat je EXACT dezelfde versie van die software en tools terug installeert! Weet jij nog of je versie 18.17.1 of versie 17.9.2 had geïnstalleerd op je laptop?

#### Oh Nee, een Groepswerk!

Je moet samenwerken met iemand anders. Het project werkt perfect op jouw Dev Environment, maar wilt om één of andere reden niet draaien op die van je teamgenoot. Tijd om ELKE tool en software die je gebruikt na te kijken op versie nummer! 

#### Oh Nee, een Oud Project Werkt Niet Meer!

Voor je nieuwste projecten heb je NodeJS geupdate naar de nieuwste versie. Oeps! Nu werken je oude projecten, die gebruik maakten van een oude versie van NodeJS, niet meer!

#### Deployment Hell

Alles werkt perfect op jouw systeem, en ook op die van je teamgenoten. Maar tijdens het deployen naar de server, merk je dat je software niet werkt. Tijd om ELKE tool en software die je gebruikt (opnieuw) na te kijken op versie nummer! 

## Docker to the Rescue!

We kunnen een Docker Container zo samenstellen dat alle tools en instellingen daarin geïnstalleerd staan. Je installeert niets meer op je eigen systeem, alles zit netjes verpakt in een Docker Container! Zo'n Docker Container waarin je je Dev Environment opslaat voor één specifiek project, dàt heet een DevContainer.

### Wat Heb je Nodig?

Je hebt in feite slechts 2 programma's nodig op je computer:

 - Docker Desktop*
 - Visual Studio Code

**Om Docker te laten werken moet je WSL geïnstalleerd hebben op je Windows computer. Dus in principe moet je 3 dingen installeren.*

### Hoe Maak je een DevContainer?

 1. Ga naar github en maak een nieuwe repository (via classrooms invite).
 2. Open VS Code, en installeer het `Remote Development` extension pack. Dit geeft je alle tools die je nodig hebt om een DevContainer te maken en gebruiken.
 3. In VS Code, gebruik de toets-combinatie `CTRL + SHIFT + P` om het `Command Palette` venster te openen.
 4. In het `command palette` window kies je voor de optie:  
    `"Dev Containers: Clone Repository in Container Volume..."`
 5. VS Code vraagt om de url naar een repository. Plak hier de HTTPS link die je in stap 1 kopieerde.  
    (*eventjes wachten...*)
 6. Kies hier voor de geschikte DevContainer configuratie. In het geval van React kiezen we voor `Node.js & TypeScript`.  
    Kies ook voor de default versie van Node.
 7. Je kan in de volgende stap extra features aanduiden. Voor React hebben we niks nodig, dus klik gewoon op 'ok'.  
    (*eventjes wachten...* De containers worden nu gedownload en opgestart. Zeker de eerste keer kan dit een tijdje duren!)

Proficiat, je hebt een volledig werkende DevContainer! 

Enkele vreemde zaken om op te merken:
 - Ga in VS Code naar `Terminal > New Terminal` en merk op dat het pad niet langer begint met C:\. Dit komt omdat je niet langer in een Windows omgeving werkt, maar wel in een Linux omgeving!
 - Node werkt, zelfs als je Node nooit geinstalleerd hebt op je systeem.
 - Git werkt, zelfs als je Git nooit geinstalleerd hebt op je systeem. 

Vergeet niet je werk te committen en pushen!

### Trouble Shooting

#### WSL versie is niet up-to-date

Als je de DevContainer probeert te openen, maar je krijgt een foutmelding dat je WSL versie niet up-to-date is, dan moet je WSL updaten. Dit kan je doen door het volgende stappenplan te volgen:

- Open Powershell als administrator (rechtermuisknop op het Powershell icoontje, en kies voor `Run as Administrator`)
- Voer de volgende commando's uit: 

```
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
wsl --set-default-version 2
wsl --update
```

- Hierna kan je best je computer herstarten om zeker te zijn dat alles goed werkt.
