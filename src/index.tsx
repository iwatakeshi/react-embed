import * as React from 'react';
import {ReactEmbedProps} from './ReactEmbed';

export * from './ReactEmbed';

const Resource = React.lazy(() => import('./ReactEmbed') as any);

const Embed: React.SFC<ReactEmbedProps> = (props) => {
  return <Resource {...props} />;
};

export default Embed;
