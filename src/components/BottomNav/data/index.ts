import {
  AiOutlineAppstore,
  AiFillAppstore,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
import {
  MdOutlineGames,
  MdGames,
  MdOutlineVpnLock,
  MdVpnLock,
} from "react-icons/md";
import { RiSettings3Line, RiSettings3Fill } from "react-icons/ri";
import CONST from "../../../utils/constants";
import { Menus } from "./types";

export const menus: Menus[] = [
  {
    name: "Apps",
    iconFill: AiFillAppstore,
    iconOutline: AiOutlineAppstore,
    color: "text-blue-400",
    route: CONST.ROUTE_APPS,
  },
  {
    name: "Games",
    iconFill: MdGames,
    iconOutline: MdOutlineGames,
    color: "text-green-400",
    route: CONST.ROUTE_GAMES,
  },
  {
    name: "Favorites",
    iconFill: AiFillHeart,
    iconOutline: AiOutlineHeart,
    color: "text-red-400",
    route: CONST.ROUTE_FAVORITES,
  },
  {
    name: "Vpn",
    iconFill: MdVpnLock,
    iconOutline: MdOutlineVpnLock,
    color: "text-emerald-400",
    route: CONST.ROUTE_VPN,
  },
  {
    name: "Settings",
    iconFill: RiSettings3Fill,
    iconOutline: RiSettings3Line,
    color: "text-lime-400",
    route: CONST.ROUTE_SETTINGS,
  },
];
