import * as React from 'react';
import {ReactEmbedProps} from './ReactEmbed';
import dynamic from 'next/dynamic';
export * from './ReactEmbed';

const Resource = dynamic(() => import('./ReactEmbed') as any) as any;

const Embed: React.SFC<ReactEmbedProps> = (props) => {
  return <Resource {...props} />;
};

export default Embed;
