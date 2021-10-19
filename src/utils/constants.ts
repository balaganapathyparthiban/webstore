type ConstMap<T> = { [key: string]: T };

const CONST: ConstMap<string> = {};

CONST.ROUTE_APPS = "/";
CONST.ROUTE_GAMES = '/games'
CONST.ROUTE_FAVORITES = '/favorites'
CONST.ROUTE_VPN = '/vpn'
CONST.ROUTE_SETTINGS = '/settings'

export default CONST;
