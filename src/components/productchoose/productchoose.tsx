import { NavLink } from "react-router-dom";
import "./productchoose.css"

type ProductChooseProps = {
  src: string;
  name: string;
  to: string;
}

export default function ProductChoose(props: ProductChooseProps){
  return(
    <NavLink to={props.to}>
    <div className="product-choose">
      <div className="image-wrap">
      <img className="image" src={props.src} alt="" />
      </div>
      <h1 className="name">{props.name}</h1>
    </div>
    </NavLink>
  )
}