import React from "react";

const Slice = ({ id, sliceSize, slices, frontImage, backgroundImage }) => {
  const background = `url(${frontImage}) center / contain no-repeat, url(${backgroundImage}) center / cover no-repeat`;

  const style = {
    height: `${sliceSize.height}px`,
    width: `${sliceSize.width / slices}px`, // The width should be relative to the slice number
    background,
    border: "1px solid red"
  };

  return <div style={style} id={id} />;
};

export default Slice;
