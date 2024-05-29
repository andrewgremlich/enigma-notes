# Enigma Notes

A personal project to make my own versatile, end-to-end encrypted, collaborative note taking application.

## Objective

Something that I build is something that I will use! Also an attempt to just make my own stuff.

## Feature Notes

v0

- Pull from existing components from across the JavaScript eco-verse.

v1

- Start replacing components with my own.

## Commands

1. Run the app `npm run tauri:dev`.

## v0 Features to implement

- [Calendar](https://fullcalendar.io/docs/react)
  - This might be overkill, because I really just want an "event" view. Show a day and notes/summary to that day.
- [HeadlessUI](https://headlessui.com/react/menu)
- [Tanstack Table](https://tanstack.com/table/latest)
  - [handsontable?](https://handsontable.com/)
  - [React data grid?](https://github.com/adazzle/react-data-grid#readme)
- [CKEditor](https://ckeditor.com/docs/ckeditor5/latest/installation/integrations/react/react.html)
- [Charts](https://www.chartjs.org/docs/latest/getting-started/installation.html)
- [VexFlow](https://www.vexflow.com/)
- [excalidraw](https://github.com/excalidraw/excalidraw)
- Peer2Peer?
  - https://www.npmjs.com/package/simple-peer
  - https://crates.io/crates/libp2p
- Weather! Metadata to note
- Map! Where the note was written
  - log a path in maps
- AI to automate tasks
  - https://github.com/huggingface/candle
  - And a small model. Maybe allow slighly bigger.
- SQLite app data
  - https://crates.io/crates/sqlite
  - https://crates.io/crates/libsql
    - libsql exists to extend from sqlite...