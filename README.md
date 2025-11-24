# Warfighter Resource Points Counter

A small helper tool for the Warfighter (DVG) tabletop wargame. During team setup players receive Resource Points (RP) which they spend on:
- soldiers
- guns
- equipment
- skills

The app speeds up setup by live tracking:
- total RP spent
- RP remaining
- per-soldier RP allocation

## Features
- Add / remove soldiers dynamically
- Live totals (spent / remaining)
- Automatic zero clearing on focus (custom v-zero-clear directive)
- Global LESS styling (main.less)
- One-click reset

## Usage
1. Enter total available Resources.
2. Add soldiers (+ Add Soldier).
3. Fill RP for soldier, gun, equipment, skill.
4. Watch remaining RP update.
5. Remove a soldier via Soldier downed button.

## Development
Install:
npm install

Dev server:
npm run dev

Build:
npm run build

Preview build:
npm run preview

## Tech Stack
- Vue 3 + Vite
- TypeScript (components)
- LESS (global styles)
- Custom Vue directive (v-zero-clear)

## Note
No licensed rules content included – this is only a helper calculator.
