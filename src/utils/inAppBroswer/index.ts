import { InAppBrowser } from 'capacitor-plugin-inappbrowser'

export const openBrowser = async (url: string) => {
  await InAppBrowser.open({ url, ref: '_blank' })
}
