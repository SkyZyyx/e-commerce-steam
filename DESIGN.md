---
name: Kif — ten completed design studies
description: Ten independent storefront prototypes awaiting the user's design selection.
colors:
  boutique-cream: "#f6f3eb"
  boutique-vermilion: "#d63d1c"
  boutique-ink: "#252820"
  club-cobalt: "#153cda"
  club-pale-blue: "#e2ebfb"
  club-acid-yellow: "#ddf852"
  club-navy: "#112460"
  premiere-charcoal: "#20221f"
  premiere-ivory: "#f1eee6"
  premiere-purchase: "#c7402c"
typography:
  boutique-display:
    fontFamily: "DM Sans, Arial, sans-serif"
  club-display:
    fontFamily: "Bebas Neue, Arial Narrow, sans-serif"
  premiere-display:
    fontFamily: "Instrument Serif, Georgia, serif"
  body:
    fontFamily: "DM Sans, Arial, sans-serif"
---

# Ten design studies

## Overview

**Creative North Star: "Ten distinct worlds, one digital storefront"**

Ten completed HTML/CSS/JavaScript prototypes are available at `/1/` through `/10/`; `/` is the comparison page linking to all ten studies. The user has NOT selected a final design. No Svelte implementation exists. These are comparison studies, not a single merged brand system; the route contracts in `1/DESIGN.md` through `10/DESIGN.md` retain each world's implementation details.

User explicitly requests ten completed code prototypes before selecting a design. This supersedes the skill's intermediate direction/comp approval gates. No final brand selected.

Grounded directions considered: (1) collectible gift boutique, (2) cultural poster shop, (3) cinema/game-library wall, (4) music sleeve shop, (5) digital department store, (6) travel ticket desk, (7) editorial entertainment magazine. Seed 0596465c assigned #3, included as /3; /1 and /2 provide requested alternatives. Festival typography challenger is competitive for /2 with required product imagery preserved; atelier is declined for audience/clarity, donates physical care; instruments declined for banned terminal aesthetic; garden and pickling systems declined for product clarity, donate spacing and shelf discipline. User brief governs.

**Key Characteristics:**
- Boutique: warm, tangible digital gifts.
- Club: graphic cultural posters and condensed lettering.
- Première: cinematic covers and editorial serif typography.

## Colors

Boutique uses cream, vermilion and olive ink; its announcement uses the darker vermilion for readable white text. Club combines cobalt, pale blue, acid yellow and navy, with pale-yellow keyboard focus on cobalt surfaces. Première uses theatrical charcoal, warm ivory and restrained tomato purchase controls. The frontmatter records the actual route-specific colors; do not blend the palettes before selection.

## Typography

All routes use the local variable DM Sans body font. Boutique also uses DM Sans for conversational display lettering. Club pairs Bebas Neue's condensed poster typography with DM Sans. Première uses Instrument Serif, including a real italic font, with DM Sans. Club's monumental headline is an intentional brief-led exception to the generic display-size floor.

## Layout

### /1/ — Kif Boutique

Asymmetric hero with large tangible product cards on a real Three.js rotating display. Friendly premium retail, then a compact catalog. Product imagery uses contain sizing. The hero stacks and the catalog becomes two columns on mobile.

### /2/ — Kif Club

Huge headline across the composition, independently tilted branded tickets, pale-blue editorial catalog and acid-yellow payment spread. Desktop tickets include Steam, Spotify and Netflix; the mobile hero keeps Steam and Spotify while all six products remain in the catalog. Motion clips the headline reveal and choreographs ticket arrival without resetting their tilt.

### /3/ — Kif Première

Charcoal cinematic hero with five distinct game covers, browsable features and a reserved caption area below the wall. An ivory catalog follows. Editorial title and cover hierarchy remain distinct from the other routes; the mobile layout preserves readable content and shopping controls.

## Elevation & Depth

Boutique's real Three.js scene supplies physical rotation and pointer response, with a pause control and image fallback. Club relies on flat poster layering and rotation. Première layers photographic covers with soft directional shadows and coordinated cover transitions. Local Motion animations respect reduced-motion preferences; visible content remains available when optional animation fails.

## Components

Each route implements all six products: Steam accounts, Steam gift cards, Xbox Game Pass, Netflix, Spotify and ExitLag. French provisional copy and DZD prices are explicitly illustrative. Search/filter, product selection, cart, demo checkout, FAQs, keyboard support and mobile navigation are implemented. Manual CCP/BaridiMob is separate from CIB/Edahabia via Chargily; no live payment or purchase occurs. Local imagery, fonts and JavaScript dependencies are shared.

The root browser pass exercised shopping flows across the tested viewports. The bounded correction round fixed the boutique announcement contrast and Club's focus contrast; the reviewer then returned ship. Prices, variants, stock, account terms, region compatibility, delivery, support contacts, final brand and production payment integration remain unconfirmed. The later approved implementation is intended for Svelte, Tailwind CSS and DaisyUI.

## Do's and Don'ts

- Do preserve each route's distinct world while the user compares designs.
- Do keep illustrative prices and separate payment workflows explicit.
- Do retain local imagery, reduced-motion behavior and visible keyboard focus.
- Don't imply that a final design has been selected or that Svelte has been implemented.
- Don't introduce gradients, terminal styling, cyberpunk, fabricated reviews, sales counts or guarantees.

## Additional studies — /4/ and /5/
User requested two more completely different completed prototypes using Frontend Design and Impeccable. Existing designs remain intact. Seed f2371ef3 assigned index 4 in a new candidate family: tactile deck, digital record shop, editorial auction, Swiss retail index, ticket office, pop confectionery, minimalist gallery. The retail index informs /5 and the playful product deck informs /4. The explicit request for finished alternative code designs again governs approval order. No direction selected for Svelte.

/4 Pop: mint, bubblegum pink, forest ink; rounded Outfit typography and a centered interactive product deck. /5 Sélection: white, oxblood, precise Outfit lettering; vertical navigation rail and expandable commerce rows. These replace neither the palettes nor the compositions of /1–/3.

## Additional studies — /6/ and /7/
The user requests two additional complete designs in parallel. Seed 72905389 assigned index 5 in the family: stamp shop, subscription calendar, department store, ticket counter, record store, leisure newspaper, curated gallery. Record store informs /7; ticket counter informs /6. Code prototypes remain the choice objects, with design approval before Svelte.

/6 Escale uses sun yellow, ultramarine ink, ticket-shaped merchandise rows and a destination-style hero. /7 Studio uses chocolate, peach and pale blue, a physical rotating record, album sleeves and mood browsing. Both preserve the same six product categories, honest demo pricing, local assets and distinct manual versus card checkout.

## Additional studies — /8/ through /10/
User extends the parallel collection to ten complete prototypes with wholly different vibes. /8 Terrain uses forest green, cream, condensed sports-editorial typography and game photography. /9 Récré uses orange, white and black with cut-paper product collage. /10 Objet uses pale lilac, off-white, architectural product displays and gallery-like space. Independent route DESIGN.md files document each built surface. Existing options remain intact, with no final Svelte direction selected.
