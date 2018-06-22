const domCraft = (blogsArr) =>
{
  let domString = '';
  domString += `<div class="row">`;
  blogsArr.forEach((blog, index) =>
  {
    if (index % 2 === 0)
    {
      domString += `<div class="row">`;
    }
    domString += `<div class="col s12 m6">`;
    domString += `<div class="card blue-grey darken-1">`;
    domString += `<div class="card-content white-text">`;
    domString += `<span class="card-title">${blog.title}${blog.date}</span>`;
    domString += `<p>${blog.post}</p>`;
    domString += `</div>`;
    domString += `</div>`;
    domString += `</div>`;
    domString += `</div>`;
    if (index % 2 === 0)
    {
      domString += `</div>`;
    }
  });
  domString += `</div>`;
  $('#blogBox').html(domString);
};

module.exports =
{
  domCraft,
};
