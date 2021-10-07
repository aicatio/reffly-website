import React, { Fragment, useEffect } from 'react';
import { Homepage } from '@aicat/reffly/build/web';
import { Helmet } from 'react-helmet';
import useScript from 'react-script-hook';

export default function Index() {
  useScript({
    src: 'https://s.skimresources.com/js/200998X1679463.skimlinks.js',
  });
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
