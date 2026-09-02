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

## Contact form

The contact form uses Web3Forms. Create a local `.env` file from `.env.example` and set:

```
VITE_WEB3FORMS_ACCESS_KEY=your-existing-key
```

For Vercel, add the same variable under Project Settings → Environment Variables. Do not commit `.env`.

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

- Added 2 September 2026 Akoka drought field update and refreshed homepage latest-news feature.
- Refreshed the Programmes page with dedicated Maiwut community/capacity-strengthening photography and clearer programme-area labels.
- Replaced the September 2025 Akoka return/reintegration article image with the unused wide Community and CPC Engagement photograph for a better landscape presentation.
- Fixed the transparent footer logo treatment and added a keyboard-accessible skip link and 404 route.
