import React from "react";
import Applications from "./pages/Applications/Applications";
import CONST from "./utils/constants";

type Routes = {
  path: string;
  exact?: boolean;
  component: React.FC;
};

const routes: Routes[] = [
  {
    path: CONST.ROUTE_APPS,
    exact: true,
    component: Applications,
  },
  {
    path: CONST.ROUTE_GAMES,
    component: Applications,
  },
  {
    path: CONST.ROUTE_FAVORITES,
    component: Applications,
  },
  {
    path: CONST.ROUTE_VPN,
    component: Applications,
  },
  {
    path: CONST.ROUTE_SETTINGS,
    component: Applications,
  },
];

export default routes;
