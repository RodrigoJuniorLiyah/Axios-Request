import React, { useEffect, useState } from "react";
import api from "../services/api";

import { AxiosRequestStyle, Header, Body } from "./style";

const AxiosRequest: React.FC = () => {
  const [rowData, setRowData] = useState({});
  const [] = useState({});

  useEffect(() => {
    api.get(`/sales?page=0&size=10&sort=date,desc`).then((response) => {
      setRowData(response.data.content);
      console.log(response.data.content);
    });
  }, []);

  function Teste() {
    return (
      <>
        <div className="header">
          <div className="seller">
            <p>Vendedor</p>
          </div>
          <div className="deals">
            <p>Vendas</p>
          </div>
        </div>
        <div className="body">
          <div className="sellerName"></div>
          <div className="salesBySeller"></div>
        </div>
      </>
    );
  }

  return (
    <AxiosRequestStyle>
      <Header>
        <button>Quantidade de vendas</button>
        <button>% de Sucesso por vendedor</button>
        <button>Nome dos vendedores</button>
        <button>Todas Vendas:</button>
      </Header>
      <Body>
        <div className="table">{rowData ? <Teste /> : ""}</div>
      </Body>
    </AxiosRequestStyle>
  );
};

export default AxiosRequest;
