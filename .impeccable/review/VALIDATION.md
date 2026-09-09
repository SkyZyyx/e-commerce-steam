# Validation

Production build: `npm run build` passed.

Browser: Chromium, 1440 × 1000 desktop and 390 × 1000 interaction test / 390 × 844 screenshot viewport. All six design/device combinations passed:
- Search results and no-results state.
- Product categories, variants and matching cart totals.
- Add/remove cart items and native dialog dismissal.
- Manual and Chargily demonstration flows for 1 and 2; manual transfer, product detail and quantity changes for 3.
- FAQ interaction.
- No page JavaScript errors, no horizontal overflow, all image assets decoded.

Screenshots under 1/, 2/, 3/ are final production renders, with images loaded before capture. Design 1 renders a real WebGL canvas on both desktop and mobile. Motion and Three.js load from the locally built bundle. Reduced-motion browser contexts completed all interactions.

The build reports the expected size notice for dynamically loaded Three.js (approximately 181 kB compressed). No live payment integration is present or required at this design stage.

Independent Impeccable finish review: ship. Two requested fixes verified: announcement contrast 4.62:1 and yellow keyboard focus against cobalt 6.55:1. No remaining findings in the scoring pass.

## Additional designs 4 and 5 — 8 September 2026
Completed saved implementations after interruption. Production build passes. Both new routes passed Chromium checks at 1440px and 390px: search/no-results, product changes, variants, cart totals, manual and Chargily demo checkout, FAQ and mobile navigation. No JavaScript errors, missing images or horizontal overflow. Comparison page has five working links and five loaded preview images. Independent bounded finish review: ship, no remaining material findings. All original three routes retained.

## Routes 6 and 7
Production build passed. Playwright at 1440px and 390px passed search/empty states, category selection, variants, cart totals, removal, both simulated checkout methods, featured controls, FAQ and mobile navigation. Final captures show no horizontal overflow, missing images or page errors. Initial screenshot corrections hid the empty Escale toast and preserved Studio artwork aspect ratio on mobile. Detector warning for Studio tab underline is a false positive: the active tab uses a square underline, not an accent border on a rounded card.

## Routes 8, 9 and 10
Production build passed for all eleven entry pages. Playwright at 1440px and 390px passed search and empty states, category changes, variants, cart totals/removal, both simulated payment paths, motion/featured controls, FAQ and mobile menus. Root comparison has ten cards with all preview images loaded. Final captures across all new routes have no horizontal overflow, broken images or page errors. Initial corrections fixed the empty Terrain toast, mobile title breaks, and Récré headline/CTA overlap. Terrain darkened forest ink to meet normal text contrast on orange. Regex detectors returned no findings for 8-10 but HTML parser was degraded; not a complete computed-style audit. Existing Three.js build chunk advisory remains.
