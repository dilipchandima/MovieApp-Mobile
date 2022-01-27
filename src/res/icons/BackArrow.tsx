import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export default (props) => {
  return (
    <Svg width={25} height={25} viewBox="0 0 25 25" fill="none">
      <Path
        d="M15.545 18.844l-6-6 6-6"
        stroke="#FFFFFF"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
