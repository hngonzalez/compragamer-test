import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes';
import { RouterModule } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
    providers: [
    importProvidersFrom(RouterModule.forRoot(routes)),
    provideHttpClient(),
    importProvidersFrom(BrowserModule),
    provideAnimations()
]
})
  .catch(err => console.error(err));
