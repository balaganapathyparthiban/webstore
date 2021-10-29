export interface InAppBrowserPlugin {
  open(options: { url: string; ref: string, tittle: string }): Promise<boolean>;
}
 