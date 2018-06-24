const projectTitles = (projectArr) =>
{
  var projectTitles = [];
  projectArr.forEach((project) => { projectTitles.push(project.title); });
  $('#tab1').text(projectTitles[0]);
  $('#tab2').text(projectTitles[1]);
  $('#tab3').text(projectTitles[2]);

};

const projectCards = (projectArr) =>
{
  let domString = '';
  projectArr.forEach((project) =>
  {
    if (project.id === '0')
    {
      domString += `<p class="projectDesc"><strong>${project.description}</strong></p>`;
      domString += `<a href="${project.url}" ><img class="projectImg" src="${project.imageUrl}"></a>`;
      domString += `<p><strong>${project.technologiesUsed}</strong></p>`;
      domString += `<p>You can find the source code for this project`;
      domString += `<a href="${project.githubUrl}"> Here</a></p>`;
      $('#project1').html(domString);
      domString = '';
    }
    else if (project.id === '1')
    {
      domString += `<p class="projectDesc"><strong>${project.description}</strong></p>`;
      domString += `<a href="${project.url}" ><img class="projectImg" src="${project.imageUrl}"></a>`;
      domString += `<p><strong>${project.technologiesUsed}</strong></p>`;
      domString += `<p>You can find the source code for this project`;
      domString += `<a href="${project.githubUrl}"> Here</a></p>`;
      $('#project2').html(domString);
      domString = '';
    }
    else if (project.id === '2')
    {
      domString += `<p class="projectDesc"><strong>${project.description}</strong></p>`;
      domString += `<a href="${project.url}" ><img class="projectImg" src="${project.imageUrl}"></a>`;
      domString += `<p><strong>${project.technologiesUsed}</strong></p>`;
      domString += `<p>You can find the source code for this project`;
      domString += `<a href="${project.githubUrl}"> Here</a></p>`;
      $('#project3').html(domString);
      domString = '';
    }
  });
};

module.exports =
{
  projectTitles,
  projectCards,
};
