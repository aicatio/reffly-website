import React, { Fragment, useEffect } from 'react';
import { Homepage, refflyConfig } from '@aicat/reffly/web';
import { Helmet } from 'react-helmet';

export default function Index() {
  useEffect(() => {
    console.log('refflyConfig', refflyConfig);
  }, []);

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
