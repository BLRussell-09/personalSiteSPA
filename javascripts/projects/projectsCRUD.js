let firebaseConfig = {};

const setConfig = (fbConfig) =>
{
  firebaseConfig = fbConfig;
  return firebaseConfig;
};

const apiKeys = () =>
{
  return new Promise((resolve, reject) =>
  {
    $.ajax('../../db/apiKeys.json')
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
    })
    .catch();
};

const getProjects = () =>
{
  return new Promise((resolve, reject) =>
  {
    const allProjects = [];
    $.ajax(
      {
        url: `${firebaseConfig.databaseURL}/projects/projects.json`,
      })
      .done((data) =>
      {
        if (data !== null)
        {
          Object.keys(data).forEach((fbKey) =>
          {
            data[fbKey].id = fbKey;
            allProjects.push(data[fbKey]);
          });
        }
        resolve(allProjects);
      })
      .fail((err) => { reject(err); });
  });
};

module.exports =
{
  getKeys,
  getProjects,
};
