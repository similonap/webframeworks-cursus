---
sidebar_position: 3
---

# Android Emulator

Een emulator is een programma dat een virtuele Android-telefoon nabootst. Je kunt het gebruiken om je app te testen zonder dat je een fysieke telefoon nodig hebt. Het is ook handig om te gebruiken als je een app wilt testen op een telefoon met een ander besturingssysteem dan het jouwe.

## Android Studio

### Installeren

We gaan de ingebouwde emulator van Android Studio gebruiken. Als je Android Studio nog niet hebt geïnstalleerd, kan je dat [hier](https://developer.android.com/studio) doen. Gebruik alle standaardinstellingen tijdens de installatie. Daarna kan je Android Studio starten.

De eerste keer dat je Android Studio opstart, moet je doorheen een aantal stappen gaan in een wizard. Ook deze kan je doorlopen door de standaardinstellingen te gebruiken. Deze wizard zal ook alle Android SDK's downloaden die nodig zijn om de emulator te gebruiken. Dit kan even duren.

![Android Studio](../images/androidstudiowizard.png)

Na de wizard krijg je het volgende scherm te zien. Je klikt hier op `More Actions` en dan op `Virtual Device Manager`.

![Android Studio](../images/virtualdevicemanager.png)

Normaal gezien zou er standaard al een emulator beschikbaar moeten zijn. Als dit niet het geval is, kan je een nieuwe emulator aanmaken door op `Create Device` te klikken.

Let op dat je emulator genoeg geheugen en opslagruimte heeft. Als je een emulator aanmaakt, kan je de instellingen aanpassen door het pen-icoontje te gebruiken. Als je dan de Advanced Settings opent, kan je de instellingen aanpassen. 2gb storage en 2gb RAM zou voldoende moeten zijn.

![Android Studio](../images/increasesize.png)

Als dit allemaal gedaan is kan je de emulator starten door op `Play` te klikken. Je krijgt dan een scherm te zien waarin je de emulator kan starten. Als je de emulator start, zal je een virtuele Android-telefoon zien. Je kan de emulator nu gebruiken om je app te testen.

![Android Studio](../images/emulator.png)

:::warning
Wacht tot de emulator helemaal geladen is voor je de app opstart. Als je de app opstart voor de emulator helemaal geladen is, kan het zijn dat de app niet correct werkt.
:::

### Gebruiken met Expo CLI

Als je expo gebruikt om je app te testen, kan je de emulator gebruiken door de volgende stappen te volgen:

1. Open Android Studio en start de emulator op.
2. Open een terminal in de map waar je je app in hebt staan.
3. Voer het volgende commando uit: `expo start --android` of door `a` te drukken in de terminal waarin je `expo start` hebt uitgevoerd.

:::info
De eerste keer kan dit een tijdje duren want de Expo Go app moet gedownload en geinstalleerd worden op de emulator. Dit gebeurt automatisch door de Expo CLI.
:::

