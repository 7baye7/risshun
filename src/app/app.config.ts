import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection, isDevMode } from '@angular/core';
import {provideRouter} from '@angular/router';
import {routes} from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { TranslocoHttpLoader } from './business-logic/transloco/transloco-loader';
import { provideTransloco } from '@jsverse/transloco';
import { DEFAULT_LOCALE } from './models/constants';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
    provideTransloco({
        config: { 
          availableLangs: ['en', 'ru'],
          defaultLang: DEFAULT_LOCALE,
          // Remove this option if your application doesn't support changing language in runtime.
          reRenderOnLangChange: true,
          prodMode: !isDevMode()
        },
        loader: TranslocoHttpLoader
      })
  ]
};
