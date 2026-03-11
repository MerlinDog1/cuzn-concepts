# CuZn — Minimax DNA v1

A Codex-origin variant of the CuZn (Trade Etching Direct) website concept.

## Overview

This variant follows the **Codex-origin DNA** as defined in the CuZn project playbook. It preserves the winning aesthetic from the first Codex generation:

- **Aesthetic**: Cinematic dark charcoal (#0f0d0b) with subtle radial brass glow
- **Accent**: Brass (#d7b16e) used sparingly for kickers, borders, key highlights
- **Typography**: Cormorant Garamond (display) + Manrope (body)
- **Motion**: 700ms reveals, subtle parallax, restrained hover effects

## Tagline

> "We design for people who notice."

## Structure

```
minimax-dna-v1/
├── index.html      # Main website
├── styles.css     # CuZn DNA tokens + styles
├── script.js      # Interactions & animations
├── README.md      # This file
├── prompts.json   # Image generation prompts
└── images/        # Generated visuals (01-04)
```

## DNA Tokens

All CSS tokens are sourced from `/projects/CuZn/dna-tokens.css`:

- Colors: `--c-bg`, `--c-accent`, `--c-text`, `--c-muted`, `--c-line`
- Typography: `--ff-display`, `--ff-body`, `--fs-h1`, `--fs-h2`
- Layout: `--container`, `--gap-grid`, `--radius-*`
- Motion: `--dur-reveal`, `--dur-hover`, `--reveal-y`

## Sections

1. **Hero**: Eyebrow + monumental H1 + lead copy + 2 CTAs + material proof panel
2. **Craft**: 3 numbered cards (Design → Fabrication → Finishing)
3. **Sectors**: Application list (Hotels, Residences, Restaurants, Wellness)
4. **CTA**: Premium conversion block

## Image Generation

This variant uses prompts from the Nano Banana playbook for generating portfolio imagery. The prompts emphasize:

- Warm 2700K–3000K lighting
- Brass material rendering
- Luxury interior contexts
- Architectural photography aesthetics

## Credits

- **DNA Source**: `/projects/CuZn/design-dna-codex-origin-playbook.md`
- **Tokens**: `/projects/CuZn/dna-tokens.css`
- **Skeleton**: `/projects/CuZn/dna-starter-skeleton.md`

---

*CuZn — Trade Etching Direct | Bespoke Brass Signage*
