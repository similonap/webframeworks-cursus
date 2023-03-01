# Inleiding

## Frontend

De frontend is wat de gebruiker ziet: met HTML, CSS en TypeScript (of JavaScript) zorg je voor een structuur waarin de gebruiker kan navigeren. CSS helpt je met layout en opmaak, en TypeScript zorgt voor interactie. Het proces bevindt zich volledig in de browser. 
Scripts gebruik je om interactie toe te laten door de gebruiker. Deze interactie kan lokale aanpassingen veroorzaken in de client, bv het veranderen van een kleur van een knop, het sorteren van een lijst etc. Maar scripts kunnen ook communiceren buiten het proces in de browser. Adhv API calls kan de client data ophalen van de backend, of data versturen naar de backend.

## Backend
De backend zorgt voor de connectie met databases, het verwerken van data en het beschikbaar stellen van deze data via een API. Dit proces bevind zich op de server. Client applicaties kunnen deze server applicatie raadplegen om data op te halen of te verwerken.

## Express
Express is een populair Web Application Framework gemaakt op Node.js waarmee we web applicaties en APIs kunnen bouwen.

![alt text](img/frontback.png)

Aan de hand van Express kunnen we onze applicaties als een full TypeScript (of JavaScript) stack schrijven, m.a.w. onze code op de backend en de code in de client is allemaal TypeScript.

Dit type frameworks laat ons ook toe de client paginas dynamisch te genereren. Dit wil zeggen dat de finale HTML/CSS/TS pagina niet bestaat tot een gebruiker de server raadpleegt. Express zal deze pagina aanmaken met alle nodige data (bv. data uit de database). 

Fictief voorbeeld:  De gebruiker gaat naar http://webontwikkeling.ap/. Express herkent dat de gebruiker de root pagina wil. De ontwikkelaar heeft gezorgd dat Express hier een mooie hoofdpagina toont met de laatste 3 nieuwtjes (die uit een database komen) over Webontwikkeling. Onderdelen van deze pagina bestonden (bv. de CSS, wat HTML en een stukje client script) maar Express vult de ontbrekende data in en stuurt mooie volledige HTML/CSS/TS naar de client.
