/**
 * --------------------------------
 * Reffly customizable configurations
 * --------------------------------
 */

const getApi_url = () => {
  if (typeof window != 'undefined') {
    if (window.location.hostname == 'localhost') {
      // return 'http://localhost:8103';
      return 'https://api-staging.reff.ly';
    }
    if (window.location.hostname == 'staging.reff.ly') {
      return 'https://api-staging.reff.ly';
    }
  }
  return 'https://api.reff.ly';
};

export default {
  url_api: getApi_url(),
};
