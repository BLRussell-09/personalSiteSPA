let firebaseConfig = {};

const setConfig = (fbConfig) =>
{
  firebaseConfig = fbConfig;
  return firebaseConfig;
};

module.exports =
{
  setConfig,
  firebaseConfig,
};
