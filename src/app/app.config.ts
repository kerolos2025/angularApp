import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { provideHttpClient } from '@angular/common/http';
import { provideTranslation } from './translation.config';





export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)
    ,provideAnimations(),
    provideToastr({
      closeButton: true,
      positionClass: 'toast-top-right',
      countDuplicates: true,
      timeOut: 1500,
      progressBar: true,
    }),
    provideHttpClient(),
    provideTranslation()
  ]
};
