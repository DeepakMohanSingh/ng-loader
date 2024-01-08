# NgOnWait

Cool ready-to-add loaders/spinners in your HTML templates until your content is loaded, without writing those hard CSS and JavaScript lines of code! 

- [Demo](https://github.com/DeepakMohanSingh/ng-on-wait/blob/main/README.md#demo)
- [Compatibility](https://github.com/DeepakMohanSingh/ng-on-wait/blob/main/README.md#compatibility)
- [Installation](https://github.com/DeepakMohanSingh/ng-on-wait/blob/main/README.md#installation)
- [Setup](https://github.com/DeepakMohanSingh/ng-on-wait/blob/main/README.md#setup)
- [Play with it](https://github.com/DeepakMohanSingh/ng-on-wait/tree/main#play-with-it)

## Demo

Here's a live demo of all that are included in this library.
- [Live demo](https://github.com/DeepakMohanSingh/ng-on-wait)

## Compatibility

This is built for Angular versions 16 and later. Install the latest version to stay updated with the latest designs and functionalities without any peer dependencies.

## Installation

Install the package 'ng-on-wait' from [NPM](https://www.npmjs.com/package/ng-on-wait)

```shell
npm install ng-on-wait
```

## Setup

`NgOnWaitModule` should be imported into the module where you are going to use this.

```typescript
...
import { NgOnWaitModule } from 'ng-on-wait';
...

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...
    NgxSkeletonLoaderModule,
    ...
  ],
  providers: []
})
```

## Play with it

| Input | Required | Supported Value | Default Value | Purpose |
| - | - | - | - | - |
| type | no |  'default' | 'default'  | The type of loader
| size | no | '<your_number>px', '<your_number>rem', '<your_number>em' | '1rem' | The size of the loader
| align | no | 'left, 'center', 'right' | 'center' | The alignment of the loader element within the parent element
| display | no | 'block, 'inline', 'inline-block' | 'block' | The display type of the loader element

