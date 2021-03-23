/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";

const SsrComponent = ({ svgRef, ...props }) => (
  <svg {...props} width={166} height={37} viewBox="0 0 166 37" ref={svgRef}>
    <defs>
      <style>{".a{font-size:33px;font-family:GodoB, Godo B;}"}</style>
    </defs>
    <text className="a" transform="translate(83 28)">
      <tspan x={-82.747} y={0}>
        {"\uD68D\uB4DD\uD55C SSR"}
      </tspan>
    </text>
  </svg>
);

const ForwardRef = React.forwardRef((props, ref) => (
  <SsrComponent svgRef={ref} {...props} />
));
export default ForwardRef;
