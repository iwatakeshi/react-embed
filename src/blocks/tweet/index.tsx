import * as React from 'react';
import {BlockProps} from '../../ReactEmbed';
import {rule} from 'p4-css';

const blockClass = rule({});
declare global {
  interface Window {
    twttr: any;
  }
}

class TwitterTweet extends React.PureComponent<BlockProps, {}> {
  mounted: boolean = true;

  componentDidMount() {
    if (typeof window !== 'undefined') {
      require('scriptjs')('https://platform.twitter.com/widgets.js', 'tw', () => {
        if (!this.mounted) return;
        if (!window.twttr) {
          // tslint:disable-next-line
          console.error('Failed to load Twitter lib.');
          return;
        }
        window.twttr.widgets.createTweet(this.props.id, this.refs.ref, {theme: this.props.isDark ? 'dark' : 'light'});
      });
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return this.props.renderWrap(<div ref="ref" className={blockClass} />);
  }
}

export default TwitterTweet;
