import { WebPlugin } from '@capacitor/core';

import type { InAppBrowserPlugin } from './definitions';

export class InAppBrowserWeb extends WebPlugin implements InAppBrowserPlugin {
  async open(options: {url: string, ref: string, tittle: string}): Promise<boolean> {
    try {
      window.open(options.url, options.ref)
      return true
    } catch(error) {
      return false
    }
  }
}
