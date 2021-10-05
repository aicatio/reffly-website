import { Typography } from '@mui/material';
import React, { Fragment } from 'react';
// import { TcsofService } from '@aicat/reffly/build/web';
import { Helmet } from 'react-helmet';

export default function TermsPage() {
  return (
    <Fragment>
      <Helmet
        title="Reff.ly | Terms &amp; Conditions of service"
        defer={false}
      />
      <Typography my={30} align="center" variant="h4">
        Terms &amp; Conditions of service will goes here, please check back
        later.
      </Typography>
    </Fragment>
  );
}
