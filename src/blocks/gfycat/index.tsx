import * as React from 'react';
import {BlockProps} from '../..';

const Gfycat: React.SFC<BlockProps> = ({id, renderWrap}) => {
  if (typeof window === 'undefined') return null;
  return renderWrap(
    <iframe
      src={`https://gfycat.com/ifr/${id}`}
      width="100%"
      height="500px"
      frameBorder="0"
      scrolling="no"
      allowFullScreen
    />,
  );
};

export default Gfycat;
