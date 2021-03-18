/**
 * Allows to use hooks like directives
 * @param { hook, name, transformReturnData, params } props
 * @returns {object} hooksResults
 */
export const useHooksLikeDirectives = (props) => {
  const hooksParams = props?.hooks;
  if (!hooksParams) {
    return null;
  }

  return hooksParams.reduce((retData, oneHookParams, index) => {
    const { hook, name, transformReturnData, params } = oneHookParams;
    let hookRetData = hook(...params);

    if (transformReturnData && typeof transformReturnData === 'function') {
      hookRetData = transformReturnData(hookRetData);
    }

    retData[name || index] = hookRetData;
    return retData;
  }, {});
};
