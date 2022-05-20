import { useEffect, useState } from "react";

import PortfolioItem from "./PortfolioItem";
import classes from "./PortfolioList.module.css";

const PortfolioList = () => {
  const [portfolio, setPortfolio] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      const response = await fetch(
        "https://xpert-academy-1579184148150-default-rtdb.europe-west1.firebasedatabase.app/portfolios.json"
      );

      if (!response.ok) {
        throw new Error("Ups... something went wrong");
      }

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
      setIsLoading(false);
    };

    fetchPortfolio().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  if (isLoading) {
    return <p className={classes.isloading}>Loading...</p>;
  }

  if (httpError) {
    return (<p className={classes.isloading}>{httpError}</p>);
  }

  const portfolioList = portfolio.map((item) => (
    <PortfolioItem
      key={item.id}
      id={item.id}
      name={item.name}
      category={item.category}
      imgurl={item.imgurl}
    />
  ));

  return <div className={classes.latestprojects}>{portfolioList}</div>;
};

export default PortfolioList;
