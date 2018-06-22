const {setConfig, } = require('./firebase');

const apiKeys = () =>
{
  return new Promise((resolve, reject) =>
  {
    $.ajax('../db/apiKeys.json')
      .done((data) => { resolve(data.apiKeys); })
      .fail((err) => { reject(err); });
  });
};

const getKeys = () =>
{
  apiKeys()
    .then((result) =>
    {
      setConfig(result.firebase);
      firebase.initializeApp(result.firebase);
    })
    .catch();
};

module.exports =
{
  getKeys,
};
