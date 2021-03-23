/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";

const SsrSrRNComponent = ({ svgRef, ...props }) => (
  <svg {...props} width={458} height={37} viewBox="0 0 458 37" ref={svgRef}>
    <defs>
      <style>{".a{font-size:33px;font-family:GodoB, Godo B;}"}</style>
    </defs>
    <text className="a" transform="translate(229 28)">
      <tspan x={-228.773} y={0}>
        {"SSR : 10 | SR : 0 | R : 0 | N : 0"}
      </tspan>
    </text>
  </svg>
);

const ForwardRef = React.forwardRef((props, ref) => (
  <SsrSrRNComponent svgRef={ref} {...props} />
));
export default ForwardRef;
