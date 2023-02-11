const colors = [
  "#d87c7c",
  "#919e8b",
  "#d7ab82",
  "#6e7074",
  "#61a0a8",
  "#efa18d",
  "#787464",
  "#cc7e63",
  "#724e58",
  "#4b565b"
];

export const color0 = colors[0];
export const color1 = colors[1];
export const color2 = colors[2];
export const color3 = colors[3];
export const color4 = colors[4];

const Layers = (props: any) => (
  <svg xmlns="http://www.w3.org/2000/layers" width="100%" height="20">
    <linearGradient id="a">
      <stop offset="0" stopColor={color0} />
      <stop offset="1" stopColor={color1} />
    </linearGradient>
    <linearGradient id="b">
      <stop offset="0" stopColor={color2} />
      <stop offset=".5" stopColor={color3 }/>
      <stop offset="1" stopColor={color4} />
    </linearGradient>
    <rect fill="url(#b)" width="100%" height="20" />
    <rect fill="url(#a)" width="100%" height="10" />
  </svg>
)

export default Layers;
