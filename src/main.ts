import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

//imports de firebase
import { initializeApp } from "firebase/app";
import { environment } from "./environments/environment";

const app = initializeApp(environment.firebaseConfig);


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
