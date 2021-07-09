import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 34 38" {...props}>
      <g>
        <g>
          <path
            d="M3.64,15.33a1.67,1.67,0,0,1-1.83-1.07c-.19-.7.21-1.62.94-1.66a1.66,1.66,0,0,1,1.81,1.12A1.31,1.31,0,0,1,3.64,15.33Zm0-2.15a.39.39,0,0,0-.38.4.4.4,0,0,0,.38.41A.4.4,0,0,0,4,13.58.39.39,0,0,0,3.66,13.18Z"
            fill="#585857"
          />
          <path
            d="M28.89,13.72a1.66,1.66,0,0,1,1.82-1.12c.72,0,1.12,1,.93,1.66a1.66,1.66,0,0,1-1.83,1.07A1.31,1.31,0,0,1,28.89,13.72Zm1.69-.14a.38.38,0,1,0,.75,0,.38.38,0,1,0-.75,0Z"
            fill="#585857"
          />
        </g>
        <g>
          <path
            d="M22.86,30.27c0-3.65-5.82-.56-5.82-2.85,0,2.29-5.82-.8-5.82,2.85A5.47,5.47,0,0,0,17,36,5.47,5.47,0,0,0,22.86,30.27Z"
            fill="#bdbcbc"
          />
          <path
            d="M22.79,29.61C22.09,27,17,29.56,17,27.42c0,2.12-4.95-.35-5.72,2.12-.06.2,1.94,1.83,5.74,1.83S22.84,29.8,22.79,29.61Z"
            fill="#cdcccc"
          />
          <path d="M17,27.45v0c0,2.29-5.82-.8-5.82,2.85A5.47,5.47,0,0,0,17,36h0Z" fill="#b3b3b3" />
          <path d="M17,27.45v0c0,2.12-4.95-.35-5.72,2.12-.06.2,1.94,1.82,5.72,1.83Z" fill="#c3c2c2" />
        </g>
        <g>
          <path
            d="M17.06,9.93a6.54,6.54,0,0,1,2.68.57c3.13,1.41,4.63,5.25,3.65,8.72l0,.09a6.52,6.52,0,0,0-.17,2.6h0A5.13,5.13,0,0,1,23,24.22a6.16,6.16,0,0,1-5.78,4.37h-.36a6.14,6.14,0,0,1-5.77-4.37A5.14,5.14,0,0,1,11,21.91h0a6.18,6.18,0,0,0-.17-2.6l-.17-.59a7.51,7.51,0,0,1,0-4.28,6.09,6.09,0,0,1,5.83-4.51Z"
            fill="#4d4d4c"
          />
          <path
            d="M17,9.93h-.58a6.09,6.09,0,0,0-5.83,4.51,7.51,7.51,0,0,0,0,4.28l.17.59a6.18,6.18,0,0,1,.17,2.6,5.14,5.14,0,0,0,.17,2.31,6.14,6.14,0,0,0,5.77,4.37H17Z"
            fill="#585857"
          />
        </g>
      </g>
    </Svg>
  );
};

export default Icon;