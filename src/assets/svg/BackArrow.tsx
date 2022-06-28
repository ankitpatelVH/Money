import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';

const BackArrow = (props: SvgProps) => (
  <Svg width={10.003} height={17.498} {...props}>
    <Path
      data-name="Icon ionic-ios-arrow-back"
      d="m3.016 8.747 6.62-6.615A1.25 1.25 0 1 0 7.865.366l-7.5 7.5A1.248 1.248 0 0 0 .329 9.59l7.532 7.547a1.25 1.25 0 1 0 1.771-1.766Z"
      fill="#000000"
    />
  </Svg>
);

export default BackArrow;
