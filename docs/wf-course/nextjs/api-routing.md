---
sidebar_position: 2
---

# API Routing

Tot nu toe hebben we altijd gezien we data ophalen uit een externe API met behulp van de `fetch` API. Soms is het niet aangewezen om rechstreeks een externe API aan te roepen vanuit de client. Bijvoorbeeld als je een API hebt die gebruik maakt van een secret key. Deze key wil je niet zomaar blootstellen aan de client. Of bijvoorbeeld als je applicatie moet gebruik maken van een database. De client kan nooit rechtstreeks communiceren met een database. De client moet altijd communiceren met een server die op zijn beurt communiceert met de database.

In plaats van een aparte API server te maken (met bijvoorbeeld express.js), kan je ook gebruik maken van de API routing functionaliteit van Next.js. Deze functionaliteit laat je toe om een API te maken die draait op dezelfde server als je applicatie.

## API routes aanmaken

Het aanmaken van API routes is zeer gelijkaardig aan het aanmaken van pagina's. Je maakt een bestand aan in de `pages/api` folder. We kunnen bijvoorbeeld een bestand `hello.ts` aanmaken met de volgende inhoud:

```ts
import type { NextApiRequest, NextApiResponse } from 'next'
 
type ResponseData = {
  message: string
}
 
const handler = (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  res.status(200).json({ message: 'Hello from Next.js!' })
}

export handler;
```

Deze code zorgt ervoor dat je een API hebt die je kan bereiken op `http://localhost:3000/api/hello`. Deze geeft een status code `200` terug en een JSON object met een `message` property. 

Interessant om te weten is dat de API altijd beschikbaar is op hetzelfde domein als de rest van de applicatie wat ervoor zorgt dat je geen problemen hebt met CORS. Heb je een API die op een ander domein draait en stricte CORS policies heeft dan kan je op die manier een proxy API maken die wel toegankelijk is vanuit je applicatie. 

## Verschillende HTTP methodes

Je kan niet zoals in express aanduiden welke HTTP methode je wil gebruiken voor een bepaalde route. Elke request met een bepaalde HTTP methode zal terecht komen in de handler. Het is aan jou om te bepalen wat je doet met de request. Je kan bijvoorbeeld gebruik maken van een `if` statement om te bepalen wat je doet met een bepaalde HTTP methode.

```ts
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
}

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) => {
  if (req.method === 'GET') {
    res.status(200).json({ message: 'Hello from Next.js!' })
  } else if (req.method === 'POST') {
    res.status(200).json({ message: 'Hello from Next.js!' })
  } else {
    res.status(405).json({ message: 'Method not allowed' })
  }
}

export default handler;
```

## Request helpers

Next.js biedt een aantal handige helpers aan om informatie op te halen uit de request. Deze helpers zijn beschikbaar op de `req` parameter van de handler.

- `req.query`: Een object met alle query parameters. Bijvoorbeeld `http://localhost:3000/api/hello?name=John` zal een object `{ name: 'John' }` opleveren.
- `req.body`: Een object met de body van de request. Deze is enkel beschikbaar als de request een body heeft. Bijvoorbeeld bij een `POST` request.
- `req.cookies`: Een object met alle cookies die aanwezig zijn in de request.

## Response helpers

Next.js biedt ook een aantal handige helpers aan om een response te sturen. Deze helpers zijn beschikbaar op de `res` parameter van de handler.

- `res.status(code)`: Zet de status code van de response. Bijvoorbeeld `res.status(200)` zal een status code `200` terugsturen.
- `res.json(data)`: Stuurt een JSON object terug als response. Bijvoorbeeld `res.json({ message: 'Hello from Next.js!' })` zal een JSON object `{ message: 'Hello from Next.js!' }` terugsturen.
- `res.redirect(url)`: Stuurt een redirect terug als response. Bijvoorbeeld `res.redirect('/about')` zal een redirect naar `/about` terugsturen.

## Dynamische API routes

Net zoals bij de pagina's kan je ook gebruik maken van dynamische routes. Je kan dit doen door een bestand aan te maken met de naam van de route tussen vierkante haken. Als je een bestand `pages/api/post/[pid].ts` maakt met de volgende inhoud:

```ts
import type { NextApiRequest, NextApiResponse } from 'next'
 
const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { pid } = req.query
  res.json({pid: pid})
}

export handler;
```

Dan zal je een API hebben die je kan bereiken op `http://localhost:3000/api/post/1`. Deze zal dan `Post: 1` terugsturen als response.