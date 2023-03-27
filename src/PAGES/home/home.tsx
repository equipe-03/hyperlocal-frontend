import { CardHome } from "../../COMPONENTS/card-home/card-home";

import { FooterHome } from "../../COMPONENTS/footer-home/footer-home";
import { HeaderHome } from "../../COMPONENTS/header-home/header-home";

import "./home.css";

export default function Home() {
  return (
    <div className="page-order">
      <HeaderHome />

      <div className="itens-adc">
        <CardHome />
      </div>
      <FooterHome />
    </div>
  );
}
