# Kif Escale — concept 06

Travel-counter retail: a sun-yellow departure board, ultramarine lettering and horizontal boarding passes. The hero's integrated featured ticket changes its game, imagery and purchasable variant. Asymmetric arched landscape windows keep real game art in the first screen. The catalog uses six broad, perforated tickets, with readable product variants and attached price stubs. Mobile converts each ticket into an image-and-title pair, a full-width variant row and a horizontal purchase stub.

Palette: sun #ffda35, ultramarine #1836a5, paper #fffdf5. No gradients. Local Outfit for display, DM Sans for text. The monumental destination headline intentionally exceeds the general 6rem floor because it is the direction's principal departure-board motif. Flat borders describe physical tickets; photographic windows carry soft offset depth. No fabricated reviews, guarantees or stock claims.

Local Motion animates the headline's clipping reveal, image arrival and the featured ticket's slide; feature changes have an image-window wipe. Catalog tickets slide on first visibility. Content remains visible without Motion; reduced-motion users get immediate states. Focus, selection, native inputs, empty results and disabled checkout share the palette.

All six categories are implemented. Filters, search (including variant names), selectors, featured-game controls, cart add/remove/totals, mobile navigation and FAQs work. Native dialog supplies keyboard focus management and Escape behavior. Checkout is explicitly simulated. CIB/Edahabia via Chargily and manual CCP/BaridiMob have separate explanations; no payment data or real transactions.

Prices, formulas, region availability and Kif branding are provisional. This is an independent HTML/CSS/JS design alternative; no selection or Svelte implementation is implied.

## Test selectors

- `.menu`, `#navigation`, `.cart-toggle`, `#cart-count`
- `[data-feature="0"]` through `2`, `#feature-title`, `#feature-price`, `#feature-add`
- `#search`, `[data-filter="all|jeu|stream|musique"]`, `.ticket`, `#empty`
- `[data-variant="steam"]`, `[data-add="steam"]` (IDs: steam, steam-gift, xbox, netflix, spotify, exitlag)
- `#cart`, `#close-cart`, `#cart-items`, `[data-remove]`, `#cart-total`
- `input[name="payment"][value="chargily|manual"]`, `#checkout-button`, `#checkout-status`
- `.faq details`, `#toast`

## Direction evidence
Mode: Persuade. FORM seed 72905389, assigned index 5, recorded in root DESIGN.md and /tmp/kif-six-seven-seed.txt. The user requested completed parallel code alternatives as the selection artifacts, with approval reserved for later Svelte implementation.
