import React, { Fragment, useEffect } from 'react';
import { Homepage, refflyConfig } from '@aicat/reffly/web';
import { Helmet } from 'react-helmet';
import useScript from 'react-script-hook';

export default function Index() {
  useScript({
    src: 'https://s.skimresources.com/js/200998X1679463.skimlinks.js',
  });

  console.log('refflyConfig', refflyConfig);

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
