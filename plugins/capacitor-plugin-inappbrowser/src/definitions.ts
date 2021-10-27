export interface InAppBrowserPlugin {
  open(options: { url: string; ref: string }): Promise<boolean>;
}
