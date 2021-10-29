package com.bginnovate.webstore;

import android.annotation.SuppressLint;
import android.graphics.Color;
import android.os.Bundle;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;

import com.bginnovate.plugin.inappbrowser.InAppBrowser;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @SuppressLint("NewApi")
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        Window window = getWindow();
        window.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);

        String statusBarColor = "#ffffff";
        if(getResources().getConfiguration().isNightModeActive()) {
            statusBarColor = "#121212";
        }

        int flags = window.getDecorView().getSystemUiVisibility();
        flags |= View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR;

        window.setStatusBarColor(Color.parseColor(statusBarColor));
        window.getDecorView().setSystemUiVisibility(flags);

        registerPlugin(InAppBrowser.class);
    }
}
