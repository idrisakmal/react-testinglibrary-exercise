import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Slices from "./Slices";
import { changeFgImage } from "./activeSlice";

const MODES = [3, 5, 9];

const StripSequencing = () => {
  const [slices, setSlices] = useState(null);
  const [active, setActive] = useState(false);
  const [slicesNumber, setSlicesNumber] = useState(null);

  const dispatch = useDispatch();

  const bgImage = useSelector((state) => state.active.bgImage);
  const imageSrc = useSelector((state) => state.active.fgImage);

  const sliceSize = {
    width: 848,
    height: 477
  };

  const style = {
    display: "grid",
    gridTemplateColumns: `repeat(${slices},${sliceSize.width / slices}px)`
  };

  const getSlicesNumber = (item) => {
    let array = [];
    for (let i = 0; i < item; i++) {
      array.push({ id: i });
    }
    setSlicesNumber(array);
  };

  const frontImages = [
    {
      width: 712,
      height: 1200,
      src: "https://i.ibb.co/4TpnGLb/image-1.png",
      label: "First image"
    },
    {
      width: 1174,
      height: 1200,
      src: "https://i.ibb.co/xS1kYRH/image-2.png",
      label: "Second image"
    }
  ];

  const init = (item) => {
    setSlices(item);
    getSlicesNumber(item);
  };

  const changeImage = (src) => {
    dispatch(changeFgImage(src));
  };

  useEffect(() => {
    if (slices) {
      setActive(true);
    }
  }, [slices]);

  return active ? (
    <div style={style}>
      <Slices
        sliceSize={sliceSize}
        slicesNumber={slicesNumber}
        slices={slices}
        frontImage={imageSrc}
        backgroundImage={bgImage}
      />
    </div>
  ) : (
    <div style={{ display: "flex" }}>
      {frontImages.map((img, index) => (
        <button onClick={() => changeImage(img.src)} key={index}>
          {img.label}
        </button>
      ))}
      {MODES.map((item, index) => (
        <button onClick={() => init(item)} key={index}>
          {item}
        </button>
      ))}
    </div>
  );
};

export default StripSequencing;
