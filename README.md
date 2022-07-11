<div align="center">
    <img src="neopop-land.png" alt="NeoPop Banner">
    <h1>NeoPOP</h1>
    <strong>NeoPOP is CRED's inbuilt library for using NeoPOP components in your React Native app.</strong>
</div>
<br>
<div align="center">
    <a href="https://github.com/efoken/neopop-react-native/blob/main/LICENSE">
        <img src="https://badgen.net/github/license/efoken/neopop-react-native" alt="License">
    </a>
    <a href="https://twitter.com/cred_club">
        <img src="https://img.shields.io/twitter/follow/cred_club?label=Twitter&style=flat&logo=twitter&color=1DA1F2" alt="CRED Twitter">
    </a>
</div>
<div align="center">
    <br>
    <a href="https://playground.cred.club"><b>Playground/Docs »</b></a>
    <br><br>
</div>

## what is NeoPOP?

NeoPOP was created with one simple goal, to create the next generation of the next beautiful, more affirmative, design system. NeoPOP stays true to everything that design at CRED stands for.

## what this library features?

-   Easy to use and beautifully designed React Native components based on NeoPOP design system.
-   Flexible and composable components which accepts custom configurations.
-   Commonly used utility methods and functions.
-   Fluid and highly optimized animations.

> note: currently the components in this library are optimized for mobile views, we will soon release support for desktop views.

## how to install?

to use NeoPOP library, all you need to do is install the `neopop-react-native` package and its peer dependencies:

```sh
yarn add neopop-react-native react react-dom react-native react-native-svg react-native-web

# or

npm i neopop-react-native react react-dom react-native react-native-svg react-native-web
```

## how to use?

to start using the library you can,

-   import components from `neopop-react-native/components`
-   import primitives from `neopop-react-native/primitives`
-   import hooks from `neopop-react-native/hooks`
-   import utils from `neopop-react-native/utils`

for example, to use button refer the following code snippet:

```jsx
import { Button } from 'neopop-react-native/components';

const Page = () => (
    <Button
        variant="primary"
        kind="elevated"
        size="big"
        colorMode="dark"
        onPress={() => {
            console.log("I'm pressed");
        }}
    >
        Primary
    </Button>
);

export default Page;
```

a detailed documentation and an interactive playground can be found [here](https://playground.cred.club)

## contributing

pull requests are welcome! we'd love help improving this library. feel free to browse through open issues to look for things that need work. if you have a feature request or bug, please open a new issue so we can track it.

## contributors

-   Eike Foken — [Github](https://github.com/efoken) | [Linkedin](https://www.linkedin.com/in/eike-foken/)

## license

```
Copyright 2022 Eike Foken.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
