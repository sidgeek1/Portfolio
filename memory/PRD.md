# PRD — Abhishek Siddant 3D Portfolio

## Original problem
Build a portfolio website for a Data/Strategy Analyst where the site is 3D interactive.
User: Abhishek Siddant (Jonnalagadda), abhisheksiddantj@gmail.com, LinkedIn in/abhishek-siddant-jonnalagadda, 4 yrs exp. Both 3D hero + interactive 3D data viz. Sections: Hero, About, Skills, Projects, Experience, Contact (links only). Dark theme.

## Architecture
Frontend-only React (CRA/craco). three + @react-three/fiber (no drei; OrbitControls from three/examples), framer-motion, lenis, sonner. Components in /app/frontend/src/components/portfolio/, content in data.js.

## Implemented (2026-06)
- Brand "Siddant/Signal" + SVG bar-mark logo/favicon
- Hero: instanced 3D data-bar field reacting to cursor (raycast bump, camera parallax, idle wander), masked line reveal, hero-only custom cursor, scroll parallax
- Slow editorial marquee, About w/ counters + pillars, bento Toolkit, 3D Data Studio (3 datasets, orbit/zoom, click-bar readout, autorotate toggle), clipped-frame case studies with parallax, experience list, contact (mailto, copy, LinkedIn)
- Tested: 100% frontend pass
- 2026-06: All content replaced with real resume data (experience x4, 4 resume projects, skills, education, certs, achievements, phone/location, résumé download link); studio datasets themed to resume domains
- 2026-06: Toned-down headings (hero "Data into decisions."), nav shows "Abhishek Siddant", removed Airflow/BiLSTM tags, generic skill notes; CSV upload in 3D Studio (client-side parse, ≤8×10, sample download)

## Backlog
- P1: Case-study detail pages; GitHub link (URL not provided)
- P2: Case-study detail pages; light-weight WebGL fallback image for low-end devices
