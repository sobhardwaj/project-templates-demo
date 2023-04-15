import { FC } from "react"
import { NavLink } from "react-router-dom"

import Navigation from "./Navigation"
const HeaderMenu: FC = () => (
  <Navigation
    mode={"horizontal"}
    items={[
      { key: "/", label: <NavLink to={"/"}>Home</NavLink> },
      { key: "/dashboard", label: <NavLink to={"/dashboard"}>Dashboard</NavLink> },
      { key: "/servers", label: <NavLink to={"/servers"}>Servers</NavLink> },
      { key: "/audits", label: <NavLink to={"/audits"}>Audit</NavLink> },
      { key: "/settings", label: <NavLink to={"/settings"}>Settings</NavLink> },
      { key: "/user-settings", label: <NavLink to={"/user-settings"}>User Settings</NavLink> },
    ]}
  />
)

export { HeaderMenu }
