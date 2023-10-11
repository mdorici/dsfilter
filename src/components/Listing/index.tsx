import { ProductDTO } from "../models/product-dto"
import "./styles.css";

type Props = {
  product: ProductDTO;
};

export default function Listing({ product }: Props) {
  return (
    <>
      <div className="card-product">
        <p className="product-name">{product.name}</p>
        <p className="product-price">
          <b>R$ {product.price.toFixed(2)}</b>
        </p>
      </div>
    </>
  );
}
