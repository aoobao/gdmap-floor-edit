# AGENTS.md

## Cursor Cloud specific instructions

This is `gdmap-floor-edit`, a Vue 2 single-page app (Vue CLI 3) for editing/viewing
indoor floor maps. It is purely client-side — there is no backend, database, or
secrets. All data is mocked in `src/assets/mock.js`. Standard commands are in
`README.md` / `package.json` (`yarn serve`, `yarn build`, `yarn lint`).

Non-obvious caveats:

- **Node version**: The toolchain is old (`@vue/cli-service` 3.x + `node-sass`
  4.13.1 + webpack 4) and only builds on **Node 12**. The VM default `node`
  (`/exec-daemon/node`, v22) shadows everything and will NOT build node-sass. The
  startup update script selects Node 12 via `nvm`, and `~/.bashrc` prepends Node 12
  to `PATH` so interactive shells default to it. If you spawn a shell that resolves
  to v22, run `nvm use 12` (or prepend `/home/ubuntu/.nvm/versions/node/v12.22.12/bin`
  to `PATH`).
- **Registry / TLS**: `yarn.lock` pins tarball URLs on the old `registry.npm.taobao.org`
  mirror, whose TLS cert is expired (it 301-redirects to `registry.npmmirror.com`).
  `yarn` must run with `strict-ssl false` (already persisted in `~/.yarnrc`) or
  `yarn install` fails with `CERT_HAS_EXPIRED`.
- **Dev server**: `yarn serve` runs webpack-dev-server on port **8080**.
- **Dead AMap key (map view is broken)**: `public/index.html` hardcodes a 高德/AMap
  JS API key that is recycled/invalid (`USER_KEY_RECYCLED`), so the global `AMap` is
  never defined. The map-editor view (`EditMap.vue`, shown when a leaf floor node like
  `1F` is selected) throws `AMap is not defined` and the map will not render. This is a
  pre-existing app data issue, not an environment problem. To exercise core
  functionality without a valid key, use the floor-image browse/upload flow: select a
  building node (e.g. `创业大厦A幢`) to see the thumbnail grid, then `楼层图上传` to
  open the upload dialog (building/floor selects + image file preview). A valid AMap key
  would be required to fully test the on-map marker placement.
- `yarn run test` is mentioned in the README but **no test script exists**; testing is
  manual via the dev server.
