import React from "react";
import Slice from "./Slice";
import { useSelector } from "react-redux";

const Slices = ({ sliceSize, slicesNumber, slices, backgroundImage }) => {
  const frontImage = useSelector((state) => state.active.fgImage);

  return slicesNumber.map((slice) => (
    <Slice
      sliceSize={sliceSize}
      key={slice.id}
      id={slice.id}
      slices={slices}
      frontImage={frontImage}
      backgroundImage={backgroundImage}
    />
  ));
};

export default Slices;
