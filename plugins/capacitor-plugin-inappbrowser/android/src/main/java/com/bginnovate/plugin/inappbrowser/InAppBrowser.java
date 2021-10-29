package com.bginnovate.plugin.inappbrowser;

import android.content.Context;
import android.content.Intent;
import android.util.Log;

import com.getcapacitor.JSObject;
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
        Context context = getContext();

        JSObject options = call.getData();

        Intent intent = new Intent(context, InAppBrowserActivity.class);
        intent.putExtra("options", options.toString());
        context.startActivity(intent);
    }
}