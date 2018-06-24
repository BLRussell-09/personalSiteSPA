const {getProjects, } = require('./projectsCRUD');
const {projectTitles, projectCards, } = require('./projectsDom');

const getProjectsEvent = () =>
{
  $(document).ready(() =>
  {
    getProjects().then((data) =>
    {
      projectTitles(data);
      projectCards(data);
    }).catch((err) => { console.error(err); });
  });
};

module.exports =
{
  getProjectsEvent,
};
