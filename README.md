# Saurabh Sharma — Engineering Portfolio

**Live site:** https://saurabh11sharma.github.io  
**GitHub:** https://github.com/Saurabh11Sharma

A responsive professional portfolio for a Senior Software Engineer and Technical Lead with 13 years of experience across Node.js, TypeScript, AWS, React, Next.js, backend systems and engineering leadership.

## What the site contains

- A clear professional introduction and engineering focus.
- Core capabilities across backend, frontend, cloud, data, architecture and technical leadership.
- Links to public repositories with descriptions based on their current contents.
- Professional delivery summaries for UKRI Funding Service, Verizon NTT and SSENSE. Client source code is private and is not published here.
- Career history, education and certification aligned with the current résumé.
- A learning section linking to the Developer Mastery Vault and selected technical books.
- Downloadable résumé, contact links and responsive layouts.
- Light / dark theme control and mobile navigation.

## Technology

- React 18
- Vite 5
- Tailwind CSS 3
- Lucide React icons
- Custom responsive CSS
- GitHub Pages with GitHub Actions

## Run locally

Requirements: Node.js 20 or a compatible current LTS release, and npm.

    git clone https://github.com/Saurabh11Sharma/saurabh11sharma.github.io.git
    cd saurabh11sharma.github.io
    npm ci
    npm run dev

Vite prints the local development URL in the terminal.

## Build and preview

    npm run build
    npm run preview

The production output is generated in the dist directory.

## Deployment

The GitHub Actions workflow in .github/workflows/pages.yml builds the site on pushes to main and deploys the generated dist directory to GitHub Pages. GitHub Pages must be configured to use GitHub Actions as its build and deployment source.

## Project structure

    public/
      favicon.svg
      Saurabh_Sharma.pdf
    src/
      App.jsx
      index.css
      main.jsx
    .github/workflows/
      pages.yml
    index.html
    package.json
    vite.config.js

## Updating portfolio content

Most content is defined near the top of src/App.jsx:

- PROFILE — name, role, contact links and résumé path.
- expertise — capability cards.
- projects — public repository cards.
- experience — professional career timeline.
- books and education — reading list, education and certification.

Keep claims verifiable and link project cards to the exact repository. Client work should be described as professional experience or a case study; do not publish proprietary source code or confidential data.

## Résumé asset

The site serves `public/Saurabh_Sharma.pdf` at `/Saurabh_Sharma.pdf`. This file was replaced with the exact uploaded CV stored as `public/Saurabh Sharma_Full_Stack_Node.pdf`; the two files currently contain identical PDF data. Keep the canonical `Saurabh_Sharma.pdf` asset aligned with the latest approved résumé before sharing the portfolio with recruiters.

## License

The repository currently declares MIT in package metadata. Review the LICENSE file in the repository for the precise terms.
