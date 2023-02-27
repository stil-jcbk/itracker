import { NavLink } from "react-router-dom";

type Navbutton = {
  to: string;
  children: any;
};

export default function Navbutton(props: Navbutton) {
  return (
    <>
      <NavLink to={props.to}>
        {({ isActive }) => (
          <div className={`button ${isActive ? "active" : ""}`}>{props.children}</div>
        )}
      </NavLink>
    </>
  );
}
