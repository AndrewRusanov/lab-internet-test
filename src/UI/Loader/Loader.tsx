import { FC, memo } from "react";
import { SizeLoader } from "./data/models";

import styles from "./Loader.module.css";

type Props = {
  isBig?: boolean;
  isSmall?: boolean;
};

const Loader: FC<Props> = ({ isBig = false, isSmall }) => {
  return (
    <div className={styles.loaderWrapper}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={
          isBig
            ? SizeLoader.BIG_WIDTH
            : isSmall
            ? SizeLoader.VERY_SMALL_WIDTH
            : SizeLoader.SMALL_WIDTH
        }
        height={
          isBig
            ? SizeLoader.BIG_HEIGHT
            : isSmall
            ? SizeLoader.VERY_SMALL_HEIGHT
            : SizeLoader.SMALL_HEIGHT
        }
        viewBox="0 0 220 256"
        fill="none"
      >
        <mask
          id="mask0_211_11"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="220"
          height="256"
        >
          <path
            d="M109.962 29.412L109.21 28.9734V29.58L67.4033 53.9679L25.349 78.5006L25.1009 78.6453V78.9324V177.063V177.35L25.349 177.495L67.4033 202.027L109.458 226.56L109.71 226.707L109.962 226.56L152.021 202.027L194.075 177.495L194.323 177.35V177.063V78.9091V78.6219L194.075 78.4772L152.021 53.9446L109.962 29.412ZM55.1091 32.4301L109.71 0.578842L164.32 32.4302L218.929 64.2883V191.712L164.32 223.565L109.71 255.421L55.1091 223.565L54.8571 223.997L55.1091 223.565L0.5 191.712V64.2883L55.1091 32.4301Z"
            fill="#F0EFEF"
            stroke="#F0EFEF"
          />
          <rect x="72" y="105" width="30" height="77" fill="#F0EFEF" />
          <rect x="37" y="82" width="100" height="24" fill="#F0EFEF" />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M173 182L173 82L147 82L147 120.384L110 120.384L110 144.626L147 144.626L147 182L173 182Z"
            fill="#F0EFEF"
          />
        </mask>
        <g mask="url(#mask0_211_11)">
          <rect fill="black" width="220" height="256" />
          <rect x="0" y="0" width="220" height="256" fill="#F0EFEF">
            <animate
              repeatCount="indefinite"
              attributeName="y"
              dur="2s"
              begin="0s"
              values="0;-400"
              fill="#F0EFEF"
            />
          </rect>
        </g>
      </svg>
    </div>
  );
};

export default memo(Loader);
