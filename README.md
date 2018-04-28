# MaterialR Card

[![Build Status](https://travis-ci.org/materialr/card.svg?branch=master)](https://travis-ci.org/materialr/card)
[![Coverage Status](https://coveralls.io/repos/github/materialr/card/badge.svg?branch=master)](https://coveralls.io/github/materialr/card?branch=master)
[![NSP Status](https://nodesecurity.io/orgs/materialr/projects/e64cc3fb-4ecc-42f2-9f6e-f87f905d50be/badge)](https://nodesecurity.io/orgs/materialr/projects/e64cc3fb-4ecc-42f2-9f6e-f87f905d50be)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Material card implementation for React

## Installation

```sh
$ npm install --save @materialr/card
```

## Demo

A full demo is available on the [MaterialR website](https://materialr.github.io/components/card)
showcasing all variants.

## Components

### Named exports

```js
import { ActionButton } from '@materialr/card';
```

**Props**

| Prop        | Type   | Required | Default   | Description                                           |
| ----------- | ------ | -------- | --------- | ----------------------------------------------------- |
| `children`  | node   | Yes      | N/A       | The child elements to render inside the action button |
| `className` | string | No       | undefined | Additional classNames to add                          |
| `disabled`  | bool   | No       | false     | Whether the action button is disabled                 |
| `onClick`   | func   | No       | undefined | The `click` handler method                            |
| `ripple`    | bool   | No       | false     | Whether the action button has a ripple enabled        |

```js
import { ActionButtons } from '@materialr/card';
```

**Props**

| Prop        | Type   | Required | Default   | Description                                            |
| ----------- | ------ | -------- | --------- | ------------------------------------------------------ |
| `children`  | node   | Yes      | N/A       | The child elements to render inside the action buttons |
| `className` | string | No       | undefined | Additional classNames to add                           |

```js
import { ActionIcon } from '@materialr/card';
```

**Props**

| Prop        | Type   | Required | Default   | Description                      |
| ----------- | ------ | -------- | --------- | -------------------------------- |
| `className` | string | No       | undefined | Additional classNames to add     |
| `icon`      | string | Yes      | N/A       | The material icon to render      |
| `title`     | string | No       | undefined | The title attribute for the icon |

```js
import { ActionIcons } from '@materialr/card';
```

**Props**

| Prop        | Type   | Required | Default   | Description                                          |
| ----------- | ------ | -------- | --------- | ---------------------------------------------------- |
| `children`  | node   | Yes      | N/A       | The child elements to render inside the action icons |
| `className` | string | No       | undefined | Additional classNames to add                         |

```js
import { ActionIconToggle } from '@materialr/icon-toggle';
```

**Props**

| Prop        | Type   | Required | Default   | Description                                            |
| ----------- | ------ | -------- | --------- | ------------------------------------------------------ |
| `className` | string | No       | undefined | Additional classNames to add                           |
| `disabled`  | bool   | No       | false     | Whether the icon-toggle is disabled                    |
| `iconOff`   | string | Yes      | N/A       | The material icon to render for the _off_ state        |
| `iconOn`    | string | Yes      | N/A       | The material icon to render for the _on_ state         |
| `labelOff`  | string | Yes      | N/A       | The title to add to the icon-toggle in the _off_ state |
| `labelOn`   | string | Yes      | N/A       | The title to add to the icon-toggle in the _on_ state  |
| `onChange`  | func   | Yes      | N/A       | The change handler method                              |

```js
import { Actions } from '@materialr/card';
```

**Props**

| Prop        | Type   | Required | Default   | Description                                          |
| ----------- | ------ | -------- | --------- | ---------------------------------------------------- |
| `children`  | node   | Yes      | N/A       | The child elements to render inside the action icons |
| `className` | string | No       | undefined | Additional classNames to add                         |
| `fullBleed` | bool   | No       | false     | Whether to render a full width action                |

```js
import { Card } from '@materialr/card';
```

**Props**

| Prop        | Type   | Required | Default   | Description                                          |
| ----------- | ------ | -------- | --------- | ---------------------------------------------------- |
| `children`  | node   | Yes      | N/A       | The child elements to render inside the action icons |
| `className` | string | No       | undefined | Additional classNames to add                         |
| `outlined`  | bool   | No       | false     | Whether to render an outlined card                   |

```js
import { MediaContent } from '@materialr/card';
```

**Props**

| Prop        | Type   | Required | Default   | Description                                           |
| ----------- | ------ | -------- | --------- | ----------------------------------------------------- |
| `children`  | node   | Yes      | N/A       | The child elements to render inside the media content |
| `className` | string | No       | undefined | Additional classNames to add                          |

```js
import { Media, MEDIA_ASPECT_RATIO_1_1, MEDIA_ASPECT_RATIO_16_9 } from '@materialr/card';
```

**Props**

| Prop          | Type                                                      | Required | Default                   | Description                   |
| ------------- | --------------------------------------------------------- | -------- | ------------------------- | ----------------------------- |
| `aspectRatio` | enum (`MEDIA_ASPECT_RATIO_1_1`/`MEDIA_ASPECT_RATIO_16_9`) | No       | `MEDIA_ASPECT_RATIO_16_9` | The aspect ratio of the media |
| `children`    | node                                                      | Yes      | N/A                       | The child elements to render  |
| `className`   | string                                                    | No       | undefined                 | Additional classNames to add  |
