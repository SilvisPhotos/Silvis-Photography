# Silvis Galerie-Tool (Firebase-Version) — Setup-Anleitung

## 1. Firebase-Projekt erstellen
- Auf console.firebase.google.com ein neues Projekt anlegen (z.B. "silvis-galerie")
- Unter "Build" -> "Firestore Database" -> Datenbank erstellen (Produktionsmodus)
- Unter "Build" -> "Storage" -> Storage aktivieren
- Unter "Build" -> "Authentication" -> "E-Mail/Passwort" aktivieren
  -> dort einen Nutzer für DICH anlegen (deine E-Mail + ein Passwort) - das ist dein Admin-Login

## 2. Firebase-Konfiguration eintragen
- In der Firebase Console: Projekteinstellungen (Zahnrad oben links) -> "Web-App hinzufügen"
- Die angezeigten Werte (apiKey, authDomain, etc.) in firebase-config.js eintragen

## 3. Security Rules einfügen
- Die Regeln aus security-rules.txt in Firestore ("Regeln"-Tab) und Storage ("Regeln"-Tab) einfügen
- Jeweils auf "Veröffentlichen" klicken

## 4. Dateien zu deinem GitHub-Repo hinzufügen
- Diesen kompletten Ordner (admin/, galerie/, firebase-config.js) in dein bestehendes
  Silvis-Photography Repo hochladen, z.B. in einen Unterordner "galerie-tool"
- Commit + Push, GitHub Pages aktualisiert sich automatisch

## 5. Testen
- deine-domain.com/galerie-tool/admin/ aufrufen
- Mit deiner Admin-E-Mail einloggen
- Erste Galerie anlegen
- Über den Upload-Link Bilder hochladen -> prüfen ob Wasserzeichen erscheint
- Galerie-Link öffnen, Passwort eingeben, Favorit markieren -> Seite neu laden, bleibt es erhalten?

## Wichtiger Hinweis zum aktuellen Stand
- Der DOWNLOAD der Original-Bilder (ohne Wasserzeichen) ist in dieser Version
  noch NICHT für Kunden freischaltbar - das bräuchte eine Cloud Function
  (kostenpflichtiger "Blaze"-Tarif bei Firebase). Das ist ein guter nächster
  Ausbauschritt, aber fürs Testen/Lernen reicht dieser Stand völlig.
- Firebase Spark-Tarif (kostenlos) reicht für Firestore, Storage und Hosting
  in deinem aktuellen Umfang völlig aus.
