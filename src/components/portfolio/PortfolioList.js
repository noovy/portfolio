import { useEffect, useState } from "react";

import PortfolioItem from "./PortfolioItem";
import classes from "./PortfolioList.module.css";

const PortfolioList = () => {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    const fetchPortfolio = async () => {
      const response = await fetch(
        "https://xpert-academy-1579184148150-default-rtdb.europe-west1.firebasedatabase.app/portfolios.json"
      );
      const responseData = await response.json();
      console.log(responseData);
      const loadedPortfolio = [];

      for (const key in responseData) {
        loadedPortfolio.push({
          id: key,
          name: responseData[key].name,
          category: responseData[key].category,
          imgurl: responseData[key].imgurl,
        });
      }

      setPortfolio(loadedPortfolio);
    };

    fetchPortfolio();
  }, []);

  const portfolioList = portfolio.map((item) => (
    <PortfolioItem
      key={item.id}
      id={item.id}
      name={item.name}
      category={item.category}
      imgurl={item.imgurl}
    />
  ));

  return (
        <div className={classes.latestprojects}>
            {portfolioList}
        </div>
  );
};

export default PortfolioList;
