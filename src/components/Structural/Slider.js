import React, { useEffect, useState } from "react";

function Slider(props) {
  // <Slider
  //   containerClass="hero-slider"
  //   slideClass="hero-slide"
  //   base="/assets/images/hero-slider/"
  //   files={[
  //     "slide-1.jpg",
  //     "slide-2.jpg",
  //   ]}
  // />;

  const { base, controller, files } = props;

  const [index, setIndex] = useState(0);

  let maxSlides = controller.length - 1;

  useEffect(() => {
    const slideManager = setInterval(() => {
      setIndex((index) => {
        if (index >= maxSlides) {
          return 0;
        } else return index + 1;
      });
    }, 3000);
    return () => {
      clearInterval(slideManager);
    };
  }, []);

  return (
    <div className="hero-slider">
      <img
        className="hero-slide"
        src={base + controller[index].fileName}
        alt={"slider image " + Math.random().toFixed(2) * 100}
      />
    </div>
  );
}

export default Slider;
