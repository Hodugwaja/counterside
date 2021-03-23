/**
 *
 * This file was generated with Adobe XD React Exporter
 * Exporter for Adobe XD is written by: Johannes Pichler <j.pichler@webpixels.at>
 *
 **/

import React from "react";

const CountersiDeComponent = ({ svgRef, ...props }) => (
  <svg {...props} width={428} height={81} viewBox="0 0 428 81" ref={svgRef}>
    <defs>
      <style>
        {
          ".a{fill:#fff;font-size:67px;font-family:Blanka-Regular, Blanka;}.b{fill:red;}"
        }
      </style>
    </defs>
    <text className="a" transform="translate(0 80)">
      <tspan x={0} y={0}>
        {"counte"}
      </tspan>
      <tspan className="b" y={0}>
        {"r"}
      </tspan>
      <tspan y={0}>{"siDe"}</tspan>
    </text>
  </svg>
);

const ForwardRef = React.forwardRef((props, ref) => (
  <CountersiDeComponent svgRef={ref} {...props} />
));
export default ForwardRef;
