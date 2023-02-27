import "./productprice.css"

type Props = {
  name: string;
  current: number;
  highest: number;
  lowest: number;
  src: string;
}

export default function ProductPrice(props: Props){
  return(
    <div className="product">
      <h2 className="name">{props.name} </h2>
      <ul className="prices">
        <li>aktualna: <span className="price">{props.current}</span></li>
        <li>najwyższa: <span className="price">{props.highest}</span></li>
        <li>najniższa: <span className="price">{props.lowest}</span></li>
      </ul>
    </div>
  )
}