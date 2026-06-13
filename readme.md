# Nopéfafa &amp; Royal Wash — Site d'invitation

Un site d'invitation d'une page pour l'inauguration de **Nopéfafa &amp; Royal Wash**,
le samedi 27 juin 2026 à partir de 17h, à Agoè Cacavéli (Lomé, Togo).

Le site présente le concept (Royal Wash, appartements meublés, espace VIP, coin photo
Vespa vintage, rooftop détente), les informations pratiques, et un formulaire de
confirmation de présence (RSVP).

## Technologies

- HTML / CSS / JavaScript statiques, sans framework ni étape de build.
- Esthétique noir &amp; or, art-déco raffinée (polices Marcellus, Cormorant Garamond, Pinyon Script via Google Fonts).
- Animations d'apparition au défilement avec `IntersectionObserver`.
- **Netlify Forms** pour collecter les réponses RSVP.
- **Netlify** pour l'hébergement.

## Structure

```
index.html      Page principale (hero, concept, galerie, infos, RSVP)
merci.html      Page de confirmation après envoi du formulaire
styles.css      Toute la mise en forme
script.js       Animations d'apparition au défilement
assets/         Cartons d'invitation (images sources)
netlify.toml    Configuration de publication + redirection /merci
```

## Lancer en local

Aucune dépendance n'est requise. Servez le dossier avec n'importe quel serveur statique,
par exemple via la CLI Netlify (recommandé pour émuler Netlify Forms) :

```bash
netlify dev --port 8889
```

Puis ouvrez http://localhost:8889.

## Formulaire RSVP

Le formulaire `rsvp` est détecté par Netlify au déploiement. Les réponses apparaissent
dans **Forms** sur le tableau de bord Netlify. Pour recevoir un e-mail à chaque réponse,
configurez une notification dans *Project configuration → Notifications*.
