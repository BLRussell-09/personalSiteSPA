const blogsMain = require('./blogs/blogsMain');
const projectsMain = require('./projects/projectsMain');
// Nav Buttons
$('#blogsBtn').click(() =>
{
  $(document).ready(() =>
  {
    if ($('#blogsPage').hasClass('hide'))
    {
      $('#blogsPage').removeClass('hide');
      $('#welcomePage').addClass('hide');
      $('.projectsPage').addClass('hide');
      $('#blogsBtn').addClass('hide');
      blogsMain;
    }
  });
});

$('.brand-logo').click(() =>
{
  resetPage();
});

const resetPage = () =>
{
  $('#welcomePage').removeClass('hide');
  $('#projectsPage').removeClass('hide');
  $('#blogsBtn').removeClass('hide');
  $('#blogsPage').addClass('hide');
  projectsMain;
};
