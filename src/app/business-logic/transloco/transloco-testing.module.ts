import { TranslocoTestingModule, TranslocoTestingOptions } from '@jsverse/transloco';
import en from '../../../../public/assets/i18n/en.json';
import ru from '../../../../public/assets/i18n/en.json';

export function getTranslocoModule(options: TranslocoTestingOptions = {}) {
  return TranslocoTestingModule.forRoot({
    langs: { en, ru },
    translocoConfig: {
      availableLangs: ['en', 'ru'],
      defaultLang: 'en',
    },
    preloadLangs: true,
    ...options,
  });
}