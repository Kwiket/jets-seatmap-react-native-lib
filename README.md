# jets-seatmap-react-native-lib

React Native library that helps to render a plane seat map by flight relying on Quicket GmbH API and data.


Prerequisites:
- Homebrew
- Node
- OpenJDK
- Yarn
- React Native
- Gradle
- Cocoapod
- @react-native-async-storage/async-storage
- react-native-svg
- react-native-base64


If you're unable to run the project, please, make sure to [download and install](https://reactnative.dev/docs/environment-setup) the latest SDK for corresponding OS


## Installation Guide

1. Install Xcode from AppStore run and accept licence.

2. Install brew:
    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"

3. Install JDK 
    1. brew install openjdk@{version}
    2. echo 'export PATH="/opt/homebrew/opt/openjdk@{version}/bin:$PATH"' >> ~/.zshrc

4. Install React-Native

5. Install Android SDK, maybe Android-Studio And set ANDROID-HOME
    1. echo 'export ANDROID_HOME="{YOUR PATH TO ANDROID SDK FOLDER}"' >> ~/.zshrc
    2. echo 'export PATH="$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools:$PATH"' >> ~/.zshrc

6. Make sure after reboot you still able to see those variables.

8. Install Yarn brew install yarn

9. Brew install watchman
    1. brew install watchman
    2. Watchman may not work with Flipper for Apple silicon processors  (https://github.com/facebook/flipper/issues/5412)
    3. for rn 0.74+ Flipper is deprecated

10. Clone lib repository 

11. yarn add @react-native-async-storage/async-storage

12. yarn add react-native-svg

13. yarn add react-native-base64

14. To apply changes clean cache:
    1. cd android && ./gradlew clean 
    2. cd iOS && pod install --repo-update

15. Add api details to `config-mock.js` or to you own config:

```
  apiUrl: JETS_BASE_API_URL,
  apiAppId: JETS_APP_ID,
  apiKey: JETS_PRIVATE_KEY,
```

Run App:

`yarn ios/android`

By default you will see a loading progress bar - just input your flight parameters and seat map will be rendered

Now you can customize the source code of the library, first of all apply you styles as StyleSheet or jsx/tsx styles.

To connect the library to the project, you need to run:

`yarn add name-of-your-lib-variation`

or include this string into your package.json dependencies if you use the github repo:

`"jets-seatmap-react-native-lib": "github:Kwiket/jets-seatmap-react-native-lib#branch"`

or you can maulay link module, add source code to the modules folder and add this string into your package.json.

`"jets-seatmap-react-native-lib": "link:./modules/jets-seatmap-react-native-lib"`

