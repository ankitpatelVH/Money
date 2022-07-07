# Money

# asdsa
Make sure you have the required tools installed. Latest versions used in development listed below:
- Node
- Android Studio
- XCode
- Editor (ex: VS Code)

### Setup
Clone project to your machine and open the folder in you editer then open your editer terminal then run `npm install` to install all the packages.
Now go to the ios folder and write command in terminal `pod install` it will install all the cocoapods for ios.

### Installing to devices
React Native debug builds allow you to stream Javascript updates from your dev machine to your testing device. However, you will occasionally need to install to new devices, and if you update any native packages or add new files you will need to do a fresh install of the app.

1. Delete any old versions on the device
2. Start a dev server: `npx react-native start`
3. Run `npx react-native run-android` or `npx react-native run-ios` (though you may prefer to skip this step and use xCode directly on that platform).
- You can also use yarn if you wanna.

#### Android
If you have trouble installing a new build: 
- check if your android sdk path is matching with `android/local.properties` if not then change `sdk.dir` with your sdk path.
- close and reopen terminal window
- run `./gradlew clean` in android folder

#### iOS:
In xCode, open the xCode workspace and not the project.

If having trouble with new build installation:
- make sure to run `pod install` after adding new library

## Useful Links
### Used packages
- For Navigation of screens we used react default navigations libraries you refer the doc from below link.
    - https://reactnavigation.org/docs/getting-started
    
- For persiste data into device and fetch from server we use below packages.
    - For connection to server
        - https://github.com/axios/axios
    
    - Persiste data with redux
        - https://github.com/reduxjs/redux
        - https://github.com/reduxjs/react-redux
        - https://github.com/reduxjs/redux-thunk //middleware for redux
        - https://github.com/rt2zz/redux-persist
    
    - Local storage
        - https://react-native-async-storage.github.io/async-storage/docs/install
    
- For SVG icons
    - https://github.com/react-native-svg/react-native-svg
    - https://github.com/kristerkari/react-native-svg-transformer
    
- For Format date
    - https://momentjs.com/
    
### Other
    - https://reactnative.dev/
    - https://nodejs.org/
    
    
