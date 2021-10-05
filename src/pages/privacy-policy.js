import React, { Fragment } from 'react';
import { Typography } from '@mui/material';
// import { PrivacyPolicy } from '@aicat/reffly/build/web';
import { Helmet } from 'react-helmet';

export default function PrivacyPage() {
  return (
    <Fragment>
      <Helmet title="Reff.ly | Privacy Policy" defer={false} />
      <Typography my={30} align="center" variant="h4">
        Privacy Policy will goes here, please check back later.
      </Typography>
    </Fragment>
  );
}
