import React, { useState, useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";


const BubblePage = () => {

  const [colorList, setColorList] = useState([]);
  
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    getData();
  }, [])

  const getData = () => {
    axiosWithAuth()
    .get("/colors")
    .then(res => {
        // console.log("rd: BubblePage: getData ", res.data);
        setColorList(res.data);
    })
    .catch(err => console.error(err));
  };

  return (
    <>
      <Bubbles colors={colorList} />
      <ColorList colors={colorList} updateColors={setColorList} />
    </>
  );
};

export default BubblePage;
