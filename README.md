## Known issues

Expo SDK and libreries are always updating their versions and deprecating others. before installing the libreries run.

```
    yarn add expo@latest
```

Next you can run:

```
    npx expo install --fix
```

Expo will show you what dependencies need to be updated. Install the dependencies expo suggest you. It is possible that there is cache and you have to run.

```
    yarn start --reset-cache
```
