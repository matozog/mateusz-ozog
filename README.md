# Mateusz Ożóg – portfolio

Personal portfolio page: introduction, education, work experience and projects.

Live: https://matozog.github.io/mateusz-ozog/

## Tech stack

- React 18 + TypeScript, built with Vite
- Tailwind CSS (plus a few MUI components)
- Deployed to GitHub Pages by GitHub Actions

## Scripts

| Command                | Description                                    |
| ---------------------- | ---------------------------------------------- |
| `npm run dev`          | Start the dev server (also exposed on the LAN) |
| `npm run build`        | Type-check and build to `dist/`                |
| `npm run preview`      | Serve the production build locally             |
| `npm run lint`         | Run ESLint                                     |
| `npm run format`       | Format all files with Prettier                 |
| `npm run format:check` | Check formatting without writing               |

## Project structure

```
src/
  analytics/    Google Analytics, loaded only after cookie consent
  assets/       Images
  components/   Reusable UI components
  constants/    Shared types, colors, links and technology icons
  data/         Page content – education, experience, projects
  hooks/        Custom React hooks
  sections/     Page sections (header, introduction, education, ...)
  utils/        Small helpers
public/         Favicon and social preview image
```

## Updating content

To update the page content (jobs, education, projects), edit the files in `src/data/`.
The "years of experience" in the introduction are calculated from the career start dates in `src/data/experience.ts`.

## CI / deployment

`.github/workflows/ci.yml` runs lint, format check and build on every push to `master` / `development` and on pull requests.
A push to `master` additionally deploys the build to GitHub Pages.
