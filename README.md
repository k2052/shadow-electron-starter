# shadow-electron-starter

ClojureScript + Shadow-cljs + Electron + Reagent

# Usage

## How to Run

```
npm install electron -g
npm install shadow-cljs -g
npm install

npm run dev
npm run start
```

## Release

```
npm run build
electron-packager . HelloWorld --platform=darwin --arch=x64 --version=1.4.13
```
