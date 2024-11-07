import React from "react";
import "./css/blureffect.css";

export function ScrollBlur() {
  return (
    <div>
      <div className="grids-2 ">
        <div className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent sm:text-2xl md:text-5xl max-w-6xl mx-auto">
          At ARFIAA MEDIA, we specialize in transforming your digital presence
          with innovative solutions that drive results. Our expertise spans
          across multiple facets of the digital landscape.
        </div>
      </div>

      <div className="grids grids-3">
        <div className="autoBLur">UI/UX</div>
        <div className="autoBLur">Web Dev</div>
        <div className="autoBLur">Web Design</div>
        <div className="autoBLur">Marketing</div>
      </div>
    </div>
  );
}
