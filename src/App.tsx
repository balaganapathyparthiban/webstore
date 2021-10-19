import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeableBrowser } from "@ionic-native/themeable-browser";

import routes from "./routes";
import BottomNav from "./components/BottomNav/BottomNav";
import SearchBar from "./components/SearchBar/SearchBar";
import NotFound from "./pages/NotFound/NotFound";

import "./assets/style/tailwind.css";
import "./assets/style/global.css";

const App: React.FC = () => {
  const openURL = () => {
    ThemeableBrowser.create("https://movies4us.me/", "_blank", {});
  };
  return (
    <div className="w-screen h-screen bg-white text-gray-800 overflow-hidden">
      <Router>
        <div className="w-full h-16 px-4 py-2">
          <SearchBar />
        </div>
        <div className="w-full h-[calc(100%-8rem)] overflow-x-hidden overflow-y-auto">
          <Switch>
            {routes.map((route, index) => (
              <Route
                key={[route.path, index].join("-")}
                exact={route.exact}
                path={route.path}
                component={route.component}
              />
            ))}
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
        <div className="w-full h-16">
          <BottomNav />
        </div>
      </Router>
    </div>
  );
};

export default App;
