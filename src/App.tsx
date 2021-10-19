import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router-dom";
import { ThemeableBrowser } from "@ionic-native/themeable-browser";

import Home from "./pages/Home";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

import "./assets/style/tailwind.css";
import "./assets/style/global.css";

const App: React.FC = () => {
  const openURL = () => {
    ThemeableBrowser.create("https://www.facebook.com/", "_blank", {});
  };
  return (
    <IonApp>
      <IonRouterOutlet>
        <IonReactRouter>
          <Route exact path="/">
            <Home />
          </Route>
        </IonReactRouter>
      </IonRouterOutlet>
    </IonApp>
  );
};

export default App;
