import { useEffect, useState } from "react";
import { api } from "../../API/api";

import { FooterHome } from "../../COMPONENTS/footer-home/footer-home";
import { HeaderHome } from "../../COMPONENTS/header-home/header-home";
import { HomeItem } from "../../COMPONENTS/home-item/home-item";
import { TablesPayload } from "../../TYPES/tables";

import "./home.css";

type Props = {};

// eslint-disable-next-line no-empty-pattern
export default function Home({}: Props) {
  const [tables, setTables] = useState<TablesPayload[]>([]);
  useEffect(() => {
    async function loadTable() {
      const data = await api.getTable();
      setTables(data as TablesPayload[]);
    }
    loadTable();
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
      <FooterHome />
    </div>
  );
}
