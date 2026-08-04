# Changelog

## 2026-08-04

### Sitestructuur herzien
- Website teruggebracht naar drie pagina's: **Home** (Wie zijn wij), **Diensten** (Wat doen wij) en **Contact**.
- Pagina's "Over" en "Nieuws" verwijderd; `/over` en `/nieuws` (en de oude `.html`-adressen) redirecten nu naar de home- of dienstenpagina zodat bestaande links blijven werken.
- Gedeelde `templates/base.html` toegevoegd zodat header, navigatie en footer nog maar op één plek staan.
- Route `/old/...` en de map `old_version/` ongewijzigd behouden.
- Inhoud herschreven op basis van de aangeleverde tekst (`input_mail_31_July.md`): missie, de acht ondersteuningsthema's (mobiliteit, hulpmiddelen, vervoer, toegankelijkheid, administratie, documenten, tegemoetkomingen, overheidsdiensten) en de contactgegevens van Rik Weltjens en Robin Agten.

### Mobielvriendelijke, gecentreerde lay-out
- Content herschikt in gestapelde, gecentreerde blokken in plaats van brede meerkoloms-rasters.
- Maximaal twee kolommen naast elkaar vanaf 740px; alles stapelt op mobiel.
- Mobiel uitklapmenu en logo-afmeting gefixt (hing eerst op een vaste hoogte en sneed het logo af).
- Reveal-animatie bij scrollen valt terug op zichtbare content zonder JavaScript en bij "verminderde beweging".

### Desktop opnieuw verbreed
- Vanaf 1000px vult de inhoud de breedte weer beter (contentbreedte 880px → 1160px op grote schermen).
- Contactblokjes, missie-/belofte-kaarten en waardekaarten staan op desktop weer naast elkaar; dienstenkaarten tonen 3 kolommen.
- Contactpagina toont de twee contactpersonen pas naast elkaar vanaf 1200px, zodat namen en telefoonnummers niet afbreken.

### Overige fixes
- Dark mode contrastproblemen opgelost (lichte kaarten met lichte tekst, witte tekst op lichtblauwe knoppen).
- Ongebruikte Tailwind CDN-koppeling verwijderd.
- Hero-knoppen "Bekijk wat wij doen" / "Stel je vraag" verwijderd op verzoek.
