package com.bginnovate.plugin.inappbrowser;

import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.graphics.Color;
import android.os.Bundle;
import android.view.View;
import android.view.Window;
import android.view.WindowManager;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.RelativeLayout;
import android.widget.TextView;

import com.getcapacitor.JSObject;

public class InAppBrowserActivity extends AppCompatActivity {
    private JSObject options;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_inappbrowser);

        try {
            options = new JSObject(getIntent().getStringExtra("options"));
            this.loadWebView();
            this.loadToolBar();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @SuppressLint("NewApi")
    private void loadToolBar() {
        Window window = getWindow();
        int flags = window.getDecorView().getSystemUiVisibility();
        String bgColor = "#ffffff";
        String bgBottomLineColor = "#121212";
        String myToolbarTittle = "";

        if(getResources().getConfiguration().isNightModeActive()) {
            bgColor = "#121212";
            bgBottomLineColor = "#ffffff";
        }
        flags |= View.SYSTEM_UI_FLAG_LIGHT_STATUS_BAR;

        window.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
        window.setStatusBarColor(Color.parseColor(bgColor));
        window.getDecorView().setSystemUiVisibility(flags);

        RelativeLayout myToolbar = (RelativeLayout) findViewById(R.id.InAppBrowserToolbar);
        View myToolbarBottomLine = (View) findViewById(R.id.InAppBrowserToolbarBottomLine);
        TextView myToolbarTitle = (TextView) findViewById(R.id.InAppBrowserToolbarTitle);

        try {
            myToolbarTittle = options.getString("tittle");
        } catch (Exception e) {
            myToolbarTittle = "";
        }
        myToolbarTitle.append(myToolbarTittle);
        myToolbar.setBackgroundColor(Color.parseColor(bgColor));
        myToolbarBottomLine.setBackgroundColor(Color.parseColor(bgBottomLineColor));
    }

    @SuppressLint("SetJavaScriptEnabled")
    private void loadWebView() {
        WebView myWebView = (WebView) findViewById(R.id.InAppBrowserWebView);

        myWebView.setWebViewClient(new WebViewClient());
        myWebView.getSettings().setJavaScriptEnabled(true);

        try {
            myWebView.loadUrl(options.getString("url"));
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void navigateBackToHome(View view) {
        super.onBackPressed();
    }

    public void reloadPage(View view) {
        WebView myWebView = (WebView) findViewById(R.id.InAppBrowserWebView);
        myWebView.reload();
    }

    @SuppressLint("NewApi")
    public void toggleWebViewTheme(View view) {
        WebView myWebView = (WebView) findViewById(R.id.InAppBrowserWebView);

        if(myWebView.getSettings().getForceDark() == WebSettings.FORCE_DARK_ON) {
            myWebView.getSettings().setForceDark(WebSettings.FORCE_DARK_OFF);
        } else {
            myWebView.getSettings().setForceDark(WebSettings.FORCE_DARK_ON);
        }
    }
}