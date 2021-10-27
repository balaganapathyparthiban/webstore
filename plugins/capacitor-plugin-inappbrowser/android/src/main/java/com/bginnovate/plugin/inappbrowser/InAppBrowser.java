package com.bginnovate.plugin.inappbrowser;

import android.util.Log;

import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.plugin.WebView;

@CapacitorPlugin(
        name = "InAppBrowser"
)
public class InAppBrowser extends Plugin {

    @PluginMethod
    public void open(PluginCall call) {
        String url = call.getString("ur
    }
}