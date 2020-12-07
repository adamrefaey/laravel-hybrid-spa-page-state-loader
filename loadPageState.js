let axios = require('axios');

// if a global instance of axios exists, grab it
if (window.axios) {
  axios = window.axios;
}

/**
 *  Loads page state
 *
 * @param {String} pageStateVar
 * @param {String} pageFullPath
 * @param {CallableFunction} failLoadStateCallback
 * @returns {Promise<Boolean>} isPageStateLoaded
 */
export default async function loadPageState(
  pageStateVar,
  pageFullPath,
  failLoadStateCallback
) {
  // skip once, if window.__SKIP_LOADING_PAGE_STATE_ONCE__ is true
  if (window.__SKIP_LOADING_PAGE_STATE_ONCE__) {
    window.__SKIP_LOADING_PAGE_STATE_ONCE__ = false;
    return true;
  }

  try {
    // get the page state from the back-end
    const response = await axios.get(pageFullPath);
    if (response.status && response.data && response.data.status) {
      // assign global page state's variable's value
      window[pageStateVar] = response.data.data;
      return true;
    }
  } catch (error) {
    failLoadStateCallback(error);
  }

  return false;
}
