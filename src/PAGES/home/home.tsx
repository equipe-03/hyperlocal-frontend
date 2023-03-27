import { CardItemOrder } from "../../COMPONENTS/card-item-order/card-item-order";
import FooterOrder from "../../COMPONENTS/footer-order/footer-order";
import { HeaderMesa } from "../../COMPONENTS/header-mesa/header-mesa";
import "./home.css";

export default function Home() {
  return (
    <div className="page-order">
      <HeaderMesa />
      <div className="itens-adc">
        <CardItemOrder />
        <CardItemOrder />
        <button className="btn-adicionar-mais">Adicionar mais itens</button>
      </div>
      <FooterOrder />
    </div>
  );
}
