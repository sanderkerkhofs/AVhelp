# AVhelp Websiteplan (HTML, CSS, vanilla JS)

## 1. Doel van de website
Een toegankelijke en duidelijke website bouwen voor AVhelp Hechtel-Eksel, zodat mensen met een handicap, hun familie en mantelzorgers snel lokale informatie, ondersteuning en doorverwijzingen vinden.

## 2. Doelgroepen
- Mensen met een handicap in Hechtel-Eksel en omgeving
- Familieleden en mantelzorgers
- Vrijwilligers en lokale partners

## 3. Kernboodschap
AVhelp is een lokale, warme en betrouwbare wegwijzer naar hulp, rechten en activiteiten voor andersvaliden.

## 4. Inhoudelijke pijlers
Gebaseerd op objectief en referentiesites:
- Praktische hulp (ondersteuning, zorg, mobiliteit, vervoer)
- Rechten en premies (duidelijke samenvatting + links naar officiële bronnen)
- Lokale informatie (gemeentediensten, toegankelijke plekken, contactpunten)
- Activiteiten en betrokkenheid (nieuws, evenementen, vrijwilligers)

## 5. Sitemap (pagina-structuur)
1. Home
2. Over AVhelp
3. Hulp en Diensten
4. Rechten en Premies
5. Lokale Toegankelijkheid
6. Nieuws en Activiteiten
7. Contact

## 6. Doel per pagina
- Home: snelle oriëntatie met 3-4 grote actieknoppen ("Zoek hulp", "Rechten", "Contact", "Activiteiten")
- Over AVhelp: missie, werking, team, partners
- Hulp en Diensten: overzicht per categorie met duidelijke doorverwijslinks
- Rechten en Premies: eenvoudige uitleg in begrijpbare taal + officiële links
- Lokale Toegankelijkheid: lokale adressen, openingsuren, bereikbaarheid
- Nieuws en Activiteiten: kalender, recente updates
- Contact: telefoon, e-mail, formulier en nuttige contactpersonen

## 7. Designrichting (afgeleid van logo)
- Primair blauw: vertrouwen en duidelijkheid
- Accent groen: zorg, groei en toegankelijkheid
- Heldere, lichte achtergrond met sterke contrasten
- Moderne, schreefloze typografie
- Vriendelijke visuele stijl met veel witruimte

Voorstel kleuren:
- --color-primary: #003B71
- --color-accent: #76A347
- --color-bg: #F6F8FB
- --color-text: #1E2A36
- --color-white: #FFFFFF

## 8. Toegankelijkheidseisen (must-have)
- Semantische HTML (header, nav, main, section, footer)
- Volledig bruikbaar met toetsenbord
- Zichtbare focus states op links/knoppen/formulieren
- Kleurcontrast conform WCAG-richtlijnen
- Alt-teksten voor afbeeldingen en iconen
- Duidelijke labels en foutmeldingen bij formulieren
- Geen cruciale informatie enkel via kleur
- Lettergrootte en regelafstand leesvriendelijk (min. 18px body)

## 9. Technische scope (enkel HTML, CSS, vanilla JS)
### HTML
- Statische multipage website
- Herbruikbare structuur op elke pagina
- Heldere koppenstructuur (H1-H2-H3)

### CSS
- 1 hoofdstylesheet met CSS-variabelen
- Mobile-first responsive layout
- Componenten: knoppen, kaarten, navigatie, formulieren

### JavaScript (vanilla)
- Mobiel menu openen/sluiten
- Eenvoudige zoek/filterfunctie op pagina "Hulp en Diensten"
- Formvalidatie op contactpagina
- Eventueel eenvoudige reveal-on-scroll animaties (subtiel)

## 10. Aanbevolen projectstructuur
- index.html
- over.html
- diensten.html
- rechten.html
- lokaal.html
- nieuws.html
- contact.html
- assets/css/style.css
- assets/js/main.js
- assets/img/logo-avhelp.png

## 11. Faseplanning
### Fase 1: Inhoud en wireframe (0.5-1 dag)
- Definitieve secties bepalen per pagina
- Navigatiestructuur vastleggen

### Fase 2: HTML-basis (1 dag)
- Alle pagina’s opzetten met semantische structuur
- Navigatie en footer overal consistent

### Fase 3: CSS-designsystem + responsive (1-2 dagen)
- Kleuren, typografie, spacing en componenten
- Tablet/mobile layouts afwerken

### Fase 4: JavaScript interacties (0.5-1 dag)
- Menu, filter en formuliervalidatie implementeren

### Fase 5: Toegankelijkheid en inhoudsfinalisatie (1 dag)
- Keyboard test, contrastcontrole, linkcontrole
- Teksten in duidelijke taal finetunen

## 12. Prioriteiten (MVP)
Voor een sterke eerste versie:
1. Home
2. Hulp en Diensten
3. Rechten en Premies
4. Contact

Daarna uitbreiden met:
- Lokale Toegankelijkheid
- Nieuws en Activiteiten
- Over AVhelp

## 13. Contentrichtlijnen
- Schrijf in korte, duidelijke zinnen
- Vermijd moeilijke vaktaal
- Werk met scanbare blokken en opsommingen
- Zet belangrijke acties bovenaan (telefoon, mail, doorverwijzing)
- Vermeld altijd datum van laatste update bij infopagina’s

## 14. Succescriteria
De website is geslaagd als:
- Bezoekers binnen 10 seconden weten waar ze moeten klikken
- Belangrijke hulpinfo binnen 3 klikken bereikbaar is
- Contact opnemen op mobiel vlot en duidelijk is
- De site toegankelijk en leesbaar is voor een brede doelgroep
