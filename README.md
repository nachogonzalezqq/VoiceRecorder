# VoiceRecorder
Simple voice recorder for ~~iOS and~~ Android built with React Native and Typescript

# How to run it locally

Simply clone this repo and run: 

npm install
npm run android (you'll need to have a running emulator)

After this, you can press cmd+option+i to open developer tools in the emulator, or you can run on your terminal:

adb shell input keyevent 82

You'll see a 'debug' option. This will open a new chrome window and by pressing f12 you'll be able to debug it, both by seeing the console and inspecting the source / setting breakpoints. (Running chrome debugger made this app to randomly crash, while it doesn't happen if chrome debugger is not active)

# How to install on your device

While in project's root folder, run:

cd android && ./gradlew assembleRelease

This will generate a .apk file. This will be located in:

/android/app/build/outputs/apk/release



Please feel free to fork it and add whatever cool features you can imagine.
