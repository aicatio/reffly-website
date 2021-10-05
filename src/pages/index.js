import React, { Fragment } from 'react';
import { Homepage } from '@aicat/reffly/build/web';
import { Helmet } from 'react-helmet';

export default function Index() {
  return (
    <Fragment>
      <Helmet
        title="Reff.ly | Open source Url shortening service"
        defer={false}
      />
      <Homepage />
    </Fragment>
  );
}
