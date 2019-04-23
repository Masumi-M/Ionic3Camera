# Ionic3Camera

## Description
This is an sample project to know how to use Camera in Ionic.

## How did I made?
### Preparation
1. Start the project by `ionic start`. (I chose sidemenu in this project)
2. Add the plugin by `ionic cordova plugin add cordova-plugin-camera`.
3. Install npm by `npm install --save @ionic-native/camera@4`
4. Add Camera to the @NgModule's provider. (`src > app > app.module.ts`)

### Let's Take a Photo (Backside => `src > app > pages > home.ts`)
5. Add `Camera` as variable camera.
6. Add `CameraOptions` inside `savePhoto` function.
7. Get the photo's URI by `getPicture` command.

### Let's Take a Photo (Frontside => `src > app > pages > home.html`)
8. Add camera button.
9. Add preview image by referencing `photoURI`.

### Build to iOS
10. Build the app by adding the platform(`ionic cordova platform add ios`) and building it (`ionic cordova build ios`).
