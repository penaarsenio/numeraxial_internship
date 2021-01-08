import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function DetailedComponent() {
  const value = { companyName: useSelector((state) => state.CompanyName) };

  const [detailsCompany, setDetails] = useState({
    name: null,
    price: null,
    PE: null,
    EPS: null,
  });

  useEffect(() => {
    axios
      .post("http://localhost:8080/companyDetails", value)
      .then(async (resp) => {
        try {
          console.log(resp.data.Name);
          setDetails((prevValue) => {
            return {
              name: resp.data.Name,
              price: resp.data.close,
              PE: resp.data.PERatio,
              EPS: resp.data.EPSEstimateCurrentYear,
            };
          });
        } catch {}
      });
  }, []);

  return (
    <div>
      <h1 class="Dashboard-Stock">Dashboard Stock</h1>

      <div class="Border">
        <h5 class="Border text-center">CORPORATE INFO</h5>
        <div>
          <p class="pl-1">CompanyName: {detailsCompany.name}</p>
        </div>
      </div>
      <div class="Border">
        <h5 class="Border text-center">MARKET VALUE</h5>
        <div>
          <p class="pl-1">Price: {detailsCompany.price}</p>
        </div>
      </div>
      <div class="Border">
        <h5 class="Border text-center">VALUATION</h5>
        <div>
          <p class="pl-1">P/E: {detailsCompany.PE}</p>
        </div>
      </div>
      <div class="Border">
        <h5 class="Border text-center">Growth</h5>
        <div>
          <p class="pl-1">EPS: {detailsCompany.EPS} </p>
        </div>
      </div>
      <div className="element">
        <h4>Candle Stick Graph</h4>
      </div>
    </div>
  );
}

export default DetailedComponent;
