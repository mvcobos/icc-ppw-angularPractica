import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient, withFetch } from '@angular/common/http';

import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

// Configuracion generada por Firebase Console al registrar la app.
const firebaseConfig = {
  apiKey: "AIzaSyChKMzick2tMpsKBmvZCMmS1bv8F4SSCFg",
  authDomain: "ppw-practica-8ed91.firebaseapp.com",
  projectId: "ppw-practica-8ed91",
  storageBucket: "ppw-practica-8ed91.firebasestorage.app",
  messagingSenderId: "717531916465",
  appId: "1:717531916465:web:1c8b379862b5e141231a90",
  measurementId: "G-TBJ0986WZP"
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    // Firebase: inicializa la conexion con el proyecto.
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    // Auth: registra el servicio de autenticacion en el inyector global.
    provideAuth(() => getAuth()),
    // Firestore: registra la base de datos en el inyector global.
    provideFirestore(() => getFirestore()),
  ],
};