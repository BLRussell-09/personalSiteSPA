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

const getBlogs = () =>
{
  return new Promise((resolve, reject) =>
  {
    const allBlogs = [];
    $.ajax(
      {
        url: `${firebaseConfig.databaseURL}/blogs/blogs.json`,
      })
      .done((allBlogsObj) =>
      {
        if (allBlogsObj !== null)
        {
          Object.keys(allBlogsObj).forEach(fbKey =>
          {
            allBlogsObj[fbKey].id = fbKey;
            allBlogs.unshift(allBlogsObj[fbKey]);
          });
        }
        resolve(allBlogs);
      })
      .fail((err) => { reject(err); });
  });
};

module.exports = { getBlogs, getKeys,};
