import { useParams } from "react-router-dom";
import ProductPrice from "../components/productprice/productprice";

export default function Product() {
  const { product } = useParams();

  return (
    <>
      <ProductPrice name="iPhone X" current={1300} highest={2000} lowest={1000} src="asdf" />
      <ProductPrice name="iPhone 11" current={2400} highest={2800} lowest={1900} src="asdf" />
      <ProductPrice name="iPhone 12" current={3} highest={3} lowest={3} src="asdf" />
      <ProductPrice name="iPhone 13" current={3} highest={3} lowest={3} src="asdf" />
      <ProductPrice name="iPhone 14" current={3} highest={3} lowest={3} src="asdf" />
    </>
  );
}
