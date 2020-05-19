import * as React from 'react';
import {BlockProps} from '../../ReactEmbed';
import {rule} from 'p4-css';

const blockClass = rule({});

const wnd = window as any;

class TwitterTweet extends React.PureComponent<BlockProps, {}> {
  mounted: boolean = true;

  componentDidMount() {
    require('scriptjs')('https://platform.twitter.com/widgets.js', 'tw', () => {
      if (!this.mounted) return;
      if (!wnd.twttr) {
        // tslint:disable-next-line
        console.error('Failed to load Twitter lib.');
        return;
      }
      wnd.twttr.widgets.createTweet(this.props.id, this.refs.ref, {theme: this.props.isDark ? 'dark' : 'light'});
    });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    return this.props.renderWrap(<div ref="ref" className={blockClass} />);
  }
}

export default TwitterTweet;
