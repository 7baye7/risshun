import { DOCUMENT, LocationStrategy } from '@angular/common';
import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { FaviconInfo } from '../models/favicon';
import { Utils } from '../business-logic/utils';

@Injectable({
  providedIn: 'root'
})
export class FaviconService {
  private renderer: Renderer2;

  constructor(@Inject(DOCUMENT) private doc: Document, 
    @Inject(LocationStrategy) private locationStrategy: LocationStrategy, 
    rendererFactory: RendererFactory2)
  {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  /**
   * Sets favicons taking proper baseHref into account,
   * so whether the site is deployed to https://foo.com, or https://foo.com/bar,
   * favicons always have proper paths.
   * @param favicons - array of favicon infos.
   */
  setFavicons(favicons: FaviconInfo[]) : void
  {
    for(const faviconInfo of favicons)
    {
      const link = this.renderer.createElement('link');
      link.rel = faviconInfo.rel;
      link.href = Utils.pathJoin([ this.locationStrategy.getBaseHref(), faviconInfo.relativeHref ]);
      if(faviconInfo.type)
      {
        link.type = faviconInfo.type;
      }
      if(faviconInfo.sizes)
      {
        link.sizes = faviconInfo.sizes; 
      }
      const head = this.doc.getElementsByTagName('head')[0];
      this.renderer.appendChild(head, link);
    }
  }
}
