import "./products.css";
import ProductChoose from "../../components/productchoose/productchoose";

export default function Products() {
  return (
    <>
      <div className="products-list">
        <ProductChoose
          to="iphone"
          name="iPhone"
          src="https://img.uswitch.com/qhi9fkhtpbo3/lpbRcccOiccIHFLJOx6Fm/5193fe2b1931e3c7c0ba8dc7f4d0c3ff/purple-back__2_.png"
        />
        <ProductChoose
          to="macbook"
          name="MacBook"
          src="https://images.macrumors.com/t/AI0UfpE0Io0I3yfew8TtFUxyi3s=/800x0/smart/article-new/2013/09/macbook-air-m2-roundup-header.png?lossy"
        />
      </div>
    </>
  );
}
