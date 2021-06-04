# Contributing

You're welcome contributing to Rust Jungle. Please read the following instructions before starting.

For bigger changes, please create an issue before.

## Commits

Commits should follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) convention.

## Developing

To get started developing, just run:

```
git clone https://github.com/Zerotask/rust-jungle.git
cd rust-jungle
npm i
npm run dev
```

This will open a local development server in a watching mode.

To ensure that your changes are Prettier and ESLint compliant,

you can run `npm run lint` or `npm run lint:fix` to automatically fix it, if possible.

## Building

You can build / compile the entire project with `npm run build`

and with `npm run start` you can test it.

## Add or update a lesson

The core of a lesson is the Lesson component. If you want to add or update a lesson, you have to ensure, that this component is imported.

After it, you can use it like an HTML tag and just pass data via attributes.

`<Lesson index="{99}" title="Test" summary="" tags="" previous="" next="" playgroundUrl="" furtherInformationUrls="">content</lesson>`
