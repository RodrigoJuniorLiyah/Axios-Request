import React, { ReactElement, useEffect, useState } from "react";
import api from "../services/api";

import { AxiosRequestStyle, Header, Body } from "./style";

const AxiosRequest: React.FC = () => {
  const [url, setUrl] = useState("/sales/amount-by-seller");
  const [sellerName, setSellerName] = useState<ReactElement>();
  const [sum, setSum] = useState<ReactElement>();
  const [deals, setDeals] = useState(String);
  const [allDeals, setAllDeals] = useState();
  const [buttonInformation, setButtonInformation] = useState("");

  useEffect(() => {
    api.get(url).then((response) => {
      setSellerName(
        response.data.map((searchData: any) => (
          <p key={searchData.sum}>{searchData.sellerName}</p>
        ))
      );

      setSum(
        response.data.map((searchData: any) => (
          <p key={searchData.sum}>{searchData.sum}</p>
        ))
      );

      setDeals(
        response.data.map((searchData: any) => (
          <p key={searchData.deals}>
            {(searchData.deals * 100) / searchData.visited}%
          </p>
        ))
      );

      setAllDeals(
        response.data.map((searchData: any) => (
          <p key={searchData.deals}>{searchData.deals}</p>
        ))
      );

      console.log(response.data);
    });
  }, [url]);

  function AmountOfSales() {
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
          <div className="sellerName">{sellerName}</div>
          <div className="salesBySeller">{sum}</div>
        </div>
      </>
    );
  }

  function SuccessSales() {
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
          <div className="sellerName">{sellerName}</div>
          <div className="salesBySeller">{deals}</div>
        </div>
      </>
    );
  }

  function SellerName() {
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
          <div className="sellerName">{sellerName}</div>
        </div>
      </>
    );
  }

  function AllSales() {
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
          <div className="sellerName">{sellerName}</div>
          <div className="salesBySeller">{allDeals}</div>
        </div>
      </>
    );
  }

  function amountOfSales() {
    setButtonInformation("amountOfSales");
    setUrl(`/sales/amount-by-seller`);
  }

  function salesSuccess() {
    setUrl(`/sales/success-by-seller`);
    setButtonInformation("salesSuccess");
  }

  function sellerNameDiv() {
    setUrl(`/sales/success-by-seller`);
    setButtonInformation("sellerName");
  }

  function allSales() {
    setUrl(`/sales/success-by-seller`);
    setButtonInformation("allSales");
  }

  return (
    <AxiosRequestStyle>
      <Header>
        <button onClick={amountOfSales}>Quantidade de vendas</button>
        <button onClick={salesSuccess}>% de Sucesso por vendedor</button>
        <button onClick={sellerNameDiv}>Nome dos vendedores</button>
        <button onClick={allSales}>Todas Vendas</button>
      </Header>
      <Body>
        <div className="table">
          {buttonInformation === "amountOfSales" ? <AmountOfSales /> : ""}
          {buttonInformation === "salesSuccess" ? <SuccessSales /> : ""}
          {buttonInformation === "sellerName" ? <SellerName /> : ""}
          {buttonInformation === "allSales" ? <AllSales /> : ""}
        </div>
      </Body>
    </AxiosRequestStyle>
  );
};

export default AxiosRequest;
