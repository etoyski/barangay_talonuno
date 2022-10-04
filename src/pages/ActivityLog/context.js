import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "d3a68d3a93a54948a016a1553bc4d20c";

  useEffect(() => {
    axios.get("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
    .then(res => {
      console.log(res.data)
      setPost(res.data)
    }).catch(err => {
      console.log(err)
    },[])

  })

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};