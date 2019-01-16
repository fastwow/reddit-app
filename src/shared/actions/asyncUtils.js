export const asyncActionNames = baseName => (
  {
    failure: `${baseName}_FAILURE`,
    request: `${baseName}_REQUEST`,
    success: `${baseName}_SUCCESS`,
  }
);

export const buildAsyncActions = actionName => ({
  request: () => ({
    type: actionName.request,
  }),
  failure: error => ({
    type: actionName.failure,
    error,
  }),
  success: data => ({
    type: actionName.success,
    data,
  }),
});
