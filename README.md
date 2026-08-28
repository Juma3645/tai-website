# Thrive Africa Initiative — Website (React + Vite)

Same workflow you used for ProtectionSphere.

## First-time setup

1. Make sure Node.js is installed on your computer (same as you already have
   for ProtectionSphere — if you can run `npm run dev` there, you're set here).
2. Unzip this folder somewhere on your computer.
3. Open a terminal in this folder.
4. Run:

   ```
   npm install
   ```

   This downloads React, Vite, and React Router into a `node_modules` folder
   (not included in the zip — same as any React project).

5. Run:

   ```
   npm run dev
   ```

6. Open the local address it prints (usually `http://localhost:5173`) in your
   browser. Every page updates live as you edit files.

## Before publishing — one thing to set up

Open `src/pages/Contact.jsx` and find this line near the top:

```js
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/YOUR_FORM_ID'
```

Replace `YOUR_FORM_ID` with your real Formspree form ID (sign up free at
formspree.io with info@tafrica.org, create a form, copy the ID it gives you).

## Building for deployment

```
npm run build
```

This creates a `dist/` folder — that's what actually gets deployed to
Netlify/Vercel, not the source files. This is the step my sandbox can't run
(no internet access here to download the packages), so please run this
yourself once, check that it completes without errors, and let me know if
anything looks off — happy to help troubleshoot.

## What's different from the plain HTML version

This is heavier (loads React itself) but gives you the familiar
component-based workflow. For the actual live site on slow South Sudan
connections, the plain HTML/CSS/JS version I built first is still my
recommendation — this one is here because you asked for the same process as
ProtectionSphere.
