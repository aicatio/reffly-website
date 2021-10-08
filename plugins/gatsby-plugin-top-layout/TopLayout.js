import * as React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Provider } from 'react-redux';

import { Layout, store } from '@aicat/reffly/build/web';
import { ribbonCorner } from 'ribbon-corner';

export default function TopLayout({ children }) {
  ribbonCorner({
    backgroundColor: '#67C23A',
    text: 'TEST MODE',
  });
  return (
    <React.Fragment>
      <Helmet>
        <meta charset="UTF-8" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Beth+Ellen&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Provider store={store}>
        <Layout>{children}</Layout>
      </Provider>
    </React.Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};
