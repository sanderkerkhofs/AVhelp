# Changelog

## 2026-08-05

### Header scrollt mee

- De header was `position: sticky` en bleef bij het scrollen bovenaan staan; op mobiel kostte dat ongeveer een vijfde van het scherm op elke pagina. Hij scrollt nu gewoon mee, op mobiel én desktop.
- `backdrop-filter: blur(10px)` en de halftransparante `--header-bg` verwijderd: die waren er alleen om tekst leesbaar te houden die onder de vastgezette balk doorliep. De headerachtergrond is nu een vlakke kleur (`#fbfdff` / `#0d1824`), passend bij de rest van de vlakke lay-out.
- De header blijft `position: relative` zodat het mobiele uitklapmenu er nog steeds onder hangt.
- Gecontroleerd op 390px en 1280px: header verdwijnt bij het scrollen, het uitklapmenu opent nog correct en de desktopnavigatie is onveranderd.

#### Nog open

- Navigatie is nu alleen bovenaan de pagina bereikbaar. Een header die verdwijnt bij scrollen naar beneden en terugkomt bij scrollen naar boven zou dat oplossen zonder de schermruimte terug in te leveren.

### Uniforme koppen, kaarten en witruimte

#### Typografie

- Eén vloeiende koppenladder in variabelen (`--fs-h1` t/m `--fs-h4`). Voorheen schaalden h1 en h2 mee met het scherm terwijl h3 en kaarttitels een vaste maat hadden: op mobiel was een kaarttitel (18,9px) nauwelijks groter dan de bodytekst (18px), op desktop zat er niets tussen 33,6px en 18,9px.
- Vaste rolverdeling: **h1/h2** zijn pagina- en sectietitels (donker), **h3** is altijd een kaarttitel (huisstijlblauw). Kaarttitels in de hero zijn niet langer even groot als een sectiekop.
- `eyebrow` en `card-label` waren twee bijna gelijke labelstijlen met verschillende maten (14,1px vs 12,5px); nu één gedeelde stijl.

#### Blokken en uitlijning

- Homepage: de waardekaarten gebruikten `<strong>` in plaats van een kop en een eigen component; ze zijn nu dezelfde `info-card service-card` met `<h3>` als op de dienstenpagina. `stats-strip`/`stat-card` verwijderd.
- Homepage: "Niemand staat er alleen voor" was een `<blockquote>` (27px, normaal) naast een `<h2>` (34px, vet) in de buurkaart; nu een gewone kaarttitel, zodat beide herokaarten identiek ogen.
- Herokaarten beginnen op desktop bovenaan in plaats van verticaal gecentreerd; de labels "Onze missie" en "Onze belofte" stonden 78px uit elkaar.
- Alle kaarten delen dezelfde binnenmarge, radius, rand en schaduw. Er liepen vijf paddings (16 t/m 19,2px) en drie radii (16/18/20px) door elkaar.
- Contactpagina: de contactpersonen zaten als kaart-in-een-kaart in een omkaderde wrapper en de sectiekop stond binnen de linkerkaart. Nu een gewone `section-heading` met drie gelijkwaardige kaarten; lange e-mailadressen breken niet meer af, dus beide persoonskaarten hebben dezelfde regelindeling.
- Opsommingen in kaarten staan links uitgelijnd binnen een gecentreerd blok, met accentbolletje, zodat ze niet als lopende tekst lezen.

#### Witruimte en opruiming

- Sectie-, kop- en kaartafstanden komen uit `--space-section` / `--space-heading` / `--space-card` in plaats van losse waardes per blok.
- De klasse `section accent` stond in de HTML maar had geen enkele CSS-regel, waardoor opeenvolgende secties niet van elkaar te onderscheiden waren. Ze krijgt nu een vlakke, lichte band (`--color-band`).
- Ongebruikte CSS verwijderd (1087 → 775 regels): `hero-trust`, `split-heading`, `preview-*`, `contact-pill`, `feature-list`, `steps`, `filter-*`, `faq`, `link-list`, `table-wrap`/tabelstijlen, `timeline*`, `contact-form`, `checkbox`, `field-error`, `form-success`, `mini-list`, `check-list`, `btn-secondary`, `dark-card`. Ook de dode klasse `accent-card` uit de dienstenpagina gehaald.
- Resultaat visueel gecontroleerd op 390px en 1440px, in light en dark mode.

#### Nog open

- `assets/js/main.js` bevat nog handlers voor het verwijderde filterpaneel, contactformulier en de FAQ (~100 regels). Ze doen niets (early return), maar zijn dode code.
- De herokaart "Onze belofte" heeft duidelijk minder inhoud dan "Onze missie" en oogt daardoor leeg op desktop; een extra zin lost dat beter op dan CSS.

### Eenvoudigere, vlakkere lay-out

- Alle gelaagde gradients en radial-shading (achtergrond, kaarten, hero-blokken, footer, filterpaneel) vervangen door vlakke kleuren uit de bestaande kleurenset.
- Kaarten en blokken (info-cards, hero-cards, stat-cards, contactkaarten) gebruiken nu consequent dezelfde achtergrondkleur in plaats van elk hun eigen tint.
- Groene accentvakken ("Onze belofte", "Wat doen wij", "Samen bouwen we verder", "Waarmee kunnen we je helpen?") krijgen niet langer een eigen groene achtergrond; ze zijn nu wit/donker zoals de rest van de kaarten.
- Overbodig geworden dark-mode kleurregels voor die vakken opgeruimd.
- Resultaat visueel gecontroleerd in light/dark mode en op mobiel/desktop.

### Contactgegevens gecentraliseerd

- Persoonlijke e-mailadressen van Rik Weltjens (`hendrik.weltjens01@gmail.com`) en Robin Agten (`robin.agten@hotmail.com`) toegevoegd op de contactpagina.
- Algemeen adres `info@avhelp.be` overal verwijderd.
- Telefoonnummers en e-mailadressen op de homepage en in de footer verwijderd; deze staan voortaan uitsluitend op de contactpagina.
- Footer- en homepage-links naar contactinfo verwijzen nu naar de contactpagina in plaats van rechtstreekse `mailto:`/`tel:`-links.

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
