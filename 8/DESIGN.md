# Kif Terrain — concept 08

A sports editorial storefront: off-white paper, deep forest green, burnt orange and oversized condensed typography. An asymmetric photography-led hero pairs monumental “Le jeu n’attend pas” lettering with a wide real Forza image and a smaller supporting image. The orange round editorial stamp belongs to the sporting magazine language. It contains no fabricated results, audience counts or commercial claims.

The featured game selector forms a green scorecard strip beneath the hero. Three visible choices update the game, photography and product variant; its add button purchases that exact demo variant. A dense three-column magazine catalog uses simple rules, product imagery and inline variant selection, with no enclosing rounded cards. Mobile keeps a two-column editorial catalog and stacks the hero and checkout information.

Colors: forest #0d2d20, off-white #f5f4ed, orange #ec682f. Local Bebas Neue display and DM Sans body. Monumental hero letters intentionally exceed the general 6rem craft floor to serve the condensed sports editorial brief. No gradients, terminal styling or cyberpunk elements. Motion combines a clipping headline reveal, photographic wipe and restrained product arrival. Reduced motion suppresses animation; all content is visible by default if the optional local module fails.

Functional scope: all six categories, search including variants, category filters, variant prices, featured selectors, cart quantities, removing one item at a time, total, native accessible dialog, keyboard focus, mobile navigation and FAQs. Checkout distinguishes CIB/Edahabia via Chargily from a separate manual CCP/BaridiMob workflow. Both are simulated and ask for no banking data or actual transfer.

All prices, variants, availability, regions and account conditions remain illustrative. Kif branding is provisional. HTML/CSS/JS only; no final design selection or Svelte implementation.

Test selectors: #search; [data-filter=all|jeu|stream|musique]; [data-variant=steam] and [data-add=steam] with product IDs steam, steam-gift, xbox, netflix, spotify, exitlag; .product; #empty; [data-feature="0".."2"]; #feature-title; #feature-add; .cart-toggle; #cart-count; #cart; #cart-items; [data-remove]; #cart-total; #close-cart; input[name=payment] values chargily/manual; #checkout-button; #checkout-status; .menu; #navigation; .faq details.

## FORM and seed record

FORM world: sports print editorial. Form uses asymmetric photographic columns, condensed all-caps display, ruled magazine product columns and an integrated green scorecard purchase strip. Ornament is limited to the orange sporting stamp. Rhythm alternates dense selection blocks with spacious typographic headings. Material is matte off-white paper and flat ink.

Terrain was the pinned parent direction before implementation. Root generated seed `eb96e112` (assigned index 6) after this route was built, documented in `/tmp/kif-terrain-seed.txt`; this is a post-build documented check, not evidence of a pre-build concept selection.
