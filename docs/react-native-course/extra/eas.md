# Expo Application Services

Tot nu toe hebben we altijd gebruik gemaakt van de Expo Go app om onze applicaties te testen. Dit is een handige manier om snel je applicatie te testen op je eigen telefoon. Maar wat als je applicatie klaar is en je wilt deze delen met anderen? Dan kan je gebruik maken van de Expo Application Services (EAS). Met EAS kan je je applicatie bouwen, testen en publiceren.

Het is ook mogelijk om je applicatie lokaal te bouwen maar dit is niet altijd even eenvoudig. Met EAS kan je je applicatie bouwen in de cloud. Dit is een stuk eenvoudiger en sneller. Opgelet, EAS is niet gratis. Je kan wel gebruik maken van een gratis plan maar hier zijn enkele beperkingen aan verbonden.

## Installeren 

Het eerste wat je moet doen is de EAS CLI installeren. Dit kan je doen met het volgende commando:

```bash
npm install -g eas-cli
```

vervolgens kan je inloggen met het volgende commando:

```bash
eas login
```

Hier moet je inloggen met je Expo account die je ook gebruikt om in te loggen in de Expo Go app.

## Configuratie

Om EAS te gebruiken moet je een configuratie bestand toevoegen aan je project. Je kan een basis configuratie bestand toevoegen met het volgende commando:

```bash
eas build:configure
```

Dit commando zal een bestand `eas.json` toevoegen aan je project. In dit bestand kan je verschillende configuratie opties toevoegen.

Hieronder een voorbeeld van een `eas.json` bestand:

```json
{
  "cli": {
    "version": ">= 13.4.2",
    "appVersionSource": "remote"
  },
  "build": {
    "development": {
      "distribution": "internal",
      "ios": {
        "simulator": true
      },
      "android": {
        "buildType": "apk"
      }
    },
    "preview": {
      "distribution": "internal"
    },
    "production": {
      "autoIncrement": true
    }
  },
  "submit": {
    "production": {}
  }
}
```

Dit bestand zorgt ervoor dat we development builds kunnen maken voor iOS en Android. Voor iOS maken we gebruik van de simulator en voor Android maken we een APK bestand. 

## Builden

Als we een build willen maken voor android kunnen we het volgende commando gebruiken:

```bash
eas build --platform android --profile development
```

Dit commando zal in de cloud een build maken voor Android. Als je een build wil maken voor iOS kan je het volgende commando gebruiken:

```bash
eas build --platform ios --profile development
```

Dit kan enige tijd in beslag nemen omdat de build in de cloud gebeurt en we op de free tier zitten. Je krijgt een link naar de build zodat je deze kan opvolgen.

## Installeren op je telefoon

Als je naar de link gaat die je krijgt na het builden van je applicatie kan je de applicatie downloaden op je telefoon. Dit kan je doen door de QR code te scannen of door de link te openen in de browser van je telefoon. Je kan de applicatie dan installeren op je telefoon. Dit werkt alleen bij Android. Jammer genoeg moet je voor iOS een betalende developer account hebben om de applicatie te installeren op je telefoon. Je kan wel de applicatie installeren op een simulator door het bestand te slepen naar de simulator.