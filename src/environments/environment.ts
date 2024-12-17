// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

//profe porque lo hizo asi me enrede, main usa la de abajo y app.module la de const
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyA1u_w_6Gtkr_ArUAiK-cB3ZPJibx0OhPA",
    authDomain: "proyectocomida-f9f9e.firebaseapp.com",
    projectId: "proyectocomida-f9f9e",
    storageBucket: "proyectocomida-f9f9e.firebasestorage.app",
    messagingSenderId: "208793762597",
    appId: "1:208793762597:web:ed1e6f261d975b4cdff8cc"
  }
};

export const firebaseConfig = {
  apiKey: "AIzaSyA1u_w_6Gtkr_ArUAiK-cB3ZPJibx0OhPA",
  authDomain: "proyectocomida-f9f9e.firebaseapp.com",
  projectId: "proyectocomida-f9f9e",
  storageBucket: "proyectocomida-f9f9e.firebasestorage.app",
  messagingSenderId: "208793762597",
  appId: "1:208793762597:web:ed1e6f261d975b4cdff8cc"
}

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
