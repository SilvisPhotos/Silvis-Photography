# 📸 Silvis Photography

Website für Portrait-, Babybauch- und Familienfotografie im Outdoor-Stil.
Natürliches Licht, echte Momente, keine gestellten Posen.

🔗 **Live:** `https://DEIN-USERNAME.github.io/silvis-photography` *(nach Aktivierung von GitHub Pages, siehe unten)*

---

## Über dieses Projekt

Eine einseitige, statische Website — reines HTML/CSS, keine Frameworks, keine Build-Tools.
Alles liegt in einer einzigen Datei: `index.html`.

**Bereiche der Seite:**
- Hero mit Einstiegstext
- Angebot: Portraits · Babybauch · Familie Outdoor
- Galerie
- Über mich
- Kontakt

**Standort:** Großbottwar & Umgebung, weitere Reise nach Absprache möglich

---

## Struktur

```
silvis-photography/
├── index.html      ← die gesamte Website (HTML + CSS)
└── README.md        ← diese Datei
```

---

## Lokal ansehen

Kein Server nötig — einfach `index.html` doppelklicken, sie öffnet sich im Browser.

---

## Deployment mit GitHub Pages

1. Dieses Repository ist bereits vorbereitet — `index.html` liegt im Root
2. Gehe zu **Settings → Pages**
3. Unter **Branch** `main` und `/ (root)` auswählen, dann **Save**
4. Nach 1–2 Minuten ist die Seite live unter
   `https://DEIN-USERNAME.github.io/silvis-photography`

---

## Eigene Domain verbinden

1. Domain bei einem Registrar registrieren (z. B. IONOS, Strato, Namecheap)
2. In **Settings → Pages → Custom domain** die Domain eintragen, z. B. `silvis-photography.de`
3. Beim Registrar in den DNS-Einstellungen:
   - `www`-Subdomain → **CNAME** auf `DEIN-USERNAME.github.io`
   - Root-Domain (ohne www) → **A-Records** auf die IP-Adressen von GitHub Pages (werden nach Eintragen der Custom Domain in den Pages-Settings angezeigt)
4. DNS-Änderungen können ein paar Stunden brauchen, bis sie greifen

---

## Inhalte anpassen

- **Fotos:** Platzhalter-Farbflächen in `index.html` durch `background-image: url('dein-foto.jpg')` ersetzen (Bilddateien in denselben Ordner legen)
- **E-Mail:** `hallo@silvis-photography.de` durch die echte Adresse ersetzen
- **Social Links:** `href="#"` bei Instagram/WhatsApp durch echte URLs ersetzen

---

© 2026 Silvis Photography
