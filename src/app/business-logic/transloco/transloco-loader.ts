import { inject, Injectable } from "@angular/core";
import { Translation, TranslocoLoader } from "@jsverse/transloco";
import { HttpClient } from "@angular/common/http";
import { LocationStrategy } from "@angular/common";
import { Utils } from "../utils";

@Injectable({ providedIn: 'root' })
export class TranslocoHttpLoader implements TranslocoLoader {
    private http = inject(HttpClient);
    private locationStrategy = inject(LocationStrategy);

    getTranslation(lang: string) {
        const combinedPath = Utils.pathJoin([ this.locationStrategy.getBaseHref(), `/assets/i18n/${lang}.json`]);
        return this.http.get<Translation>(combinedPath);
    }
}
