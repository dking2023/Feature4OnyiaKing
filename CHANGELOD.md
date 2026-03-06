# Changelog

## [0.2.0] - 2026-03-05

### Added

- Added Parse initialization in `src/lib/parseClient.js`
- Added separate Parse Models for `Category`, `Person`, and `Story`
- Added UML diagram for Black Excellence data relationships
- Added Parse-based asynchronous loading for homepage and person profile pages
- Added Story relationship structure for future profile expansion
- Added Vite configuration for React + Parse compatibility
- Added client-side routing between Home, Category, and Person pages
- Added reusable React components for categories, leaders, and stories

### Changed

- Replaced old Feature 3 rendering approach with React + Vite structure
- Moved all Parse queries out of components and into Parse Models
- Updated homepage and person page to use async model/service loading
- Added development fallback to local JSON data when Parse is unavailable

### Fixed

- Prevented state updates after component unmount with cleanup logic
- Replaced console-only error handling with user-facing fallback messages
- Fixed white-screen issues caused by mixing old Preact/CDN code with React/Vite
