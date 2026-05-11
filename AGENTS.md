# Scope

These instructions apply to the entire `toque-y-fama` repository.

# Layout

- `src/` contains the React application entry point, styles, service worker setup, and tests.
- `public/` contains the HTML shell, manifest, icons, and other static browser assets.
- `package.json` and `package-lock.json` define the Create React App toolchain and npm dependency lock.

# Change Guidelines

- Keep changes focused on the React app or static assets needed for the task.
- Preserve the Create React App conventions unless there is a specific reason to change the build setup.
- Use npm with the checked-in `package-lock.json`; do not introduce another package manager lockfile.
- Keep component, utility, and style boundaries simple. Add abstractions only when they reduce real duplication or isolate meaningful behavior.
- Document new or modified code with accurate docstrings or comments when the intent is not obvious from the implementation.
- Avoid `npm run eject` unless the user explicitly asks for it.

# Validation

- Run `npm test -- --watchAll=false` for testable code changes.
- Run `npm run build` when changing production code, dependencies, configuration, or static assets that affect the bundled app.
