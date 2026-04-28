# Todo list

**Website:** https://3-dimensional.space (Demos, explanations, and documentation)

## Documented Struggles & Failed Attempts

- **Webpack External Libraries (resolved):** `three`, `webxr-polyfill`, `stats`, and `dat.gui` are now externalized in `webpack/webpack.prod.gen.js` and loaded by import map in demo HTML.
- **Factoring Core Library (open):** attempts to factor the core into a shared library with `dependOn` are still unstable with module output.
- **Stats.js Integration (resolved):** module aliasing and vendor copy are in place for modern Node.js tooling.
- **Git Submodules (open):** submodule management remains a workflow pain point.
- **Geometry SDFs (open):** exact SDF/light computations for Nil and SL2 still pending.
- **Boundary Creeping (open):** exact creeping for vertical boundaries in Nil still pending.

## General

- factor the core in a shared library
  (pending: wire a dedicated `thurstonCore` ESM entry and have geometry bundles import from it)

## Plan: Core Sharing Fix

- Step 1 (done): Create `src/thurstonCore.js` with geometry-independent exports only.
- Step 2 (done): Build `thurstonCore.js` as its own ESM output chunk.
- Step 3 (done): Replace direct core imports in `src/thurston*.js` with imports from `thurstonCore`.
- Step 4 (done): Keep `three`/`stats`/`dat.gui`/`webxr-polyfill` as externals and map all in import maps.
- Step 5: Add a smoke script that imports every geometry demo page and fails on unresolved module specifiers.

## E3

## H3

## S3

- cylinder
- example with the Hopf projection

## H2E

- vertical half spaces
- horizontal half spaces

## S2E

- multiples light directions

## Nil

- exact creeping for vertical boundaries
- directed SDF for horizontal planes
- exact SDF for balls
- exact light computations

## SL2

- exact SDF for balls
- exact light computations

## Sol
