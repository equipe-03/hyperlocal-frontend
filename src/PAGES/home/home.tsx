import { useEffect, useState } from "react";
import { api } from "../../API/api";
import { BtnGarcom } from "../../COMPONENTS/btn-garcom/btn-garcom";

import { FooterHome } from "../../COMPONENTS/footer-home/footer-home";
import { HeaderHome } from "../../COMPONENTS/header-home/header-home";
import { HomeItem } from "../../COMPONENTS/home-item/home-item";
import { TablesPayload } from "../../TYPES/tables";

import "./home.css";

type Props = {};

export default function Home({ }: Props) {
  const [tables, setTables] = useState<TablesPayload[]>([]);
  useEffect(() => {
    async function LoadTable() {
      const data = await api.getTable();
      setTables(data as TablesPayload[]);
    }
    LoadTable();
  }, []);
  return (
    <div className="home-content">
      <HeaderHome />
      <div className="home-table">
        <h2 className="home-h2">Escolha uma mesa</h2>
        <div className="home-container">
          {tables.map((tables) => (
            <HomeItem number={tables.number} key={tables.id} />
          ))}
        </div>
      </div>
      <div className="container-btn-garcom">< BtnGarcom /></div>
      <FooterHome />
    </div>
  );
}
