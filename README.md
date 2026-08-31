# Parts Inventory

Mobile-first searchable parts inventory for iPhone/Safari.

## Current behavior
- Search part number, description, or model data.
- Enter Qty On Hand.
- A part is **VERIFIED only when Qty On Hand >= MinStndrdTrckQty**.
- Parts below the minimum remain **NEEDS PARTS**.
- Parts Needed view shows exact quantity required.
- Export produces `Parts_Needed.csv`.
- Quantities persist in browser local storage.

## Data
Replace the `PARTS` array in `index.html` with the parts catalog. Each record should include:
- `MfgNmbr`
- `Description`
- `MinStndrdTrckQty`

## GitHub Pages
Enable GitHub Pages for the `main` branch and root folder. The app can then be opened from the Pages URL in Safari and added to the iPhone Home Screen.