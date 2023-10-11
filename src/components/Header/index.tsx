import { useContext } from "react";
import { ContextListCount } from "../../util/context-listing";
import "./styles.css";

export default function Header() {
  
  const { contextListCount } = useContext(ContextListCount);

  return (
    <header>
      <div className="container">
        <div className="dsf-header">
          <h2 className="title">DSFilter</h2>
          <h3 className="products-count">{contextListCount} produto(s)</h3>
        </div>
      </div>
    </header>
  );
}
