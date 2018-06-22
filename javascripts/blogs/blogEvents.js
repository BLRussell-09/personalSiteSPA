const { getBlogs,} = require('./blogsCrud.js');
const {domCraft, } = require('./blogsDom.js');

// Save blogs that admin has created

// const saveBlogsEvent = () =>
// {
//   $(document).on('click', '#saveBlog', (e) =>
//   {
//     console.log('I work');
//     const blogToAdd =
//     {
//       title: $('#blogTitle').val(),
//       // date: date1.toDateString(),
//       post: $('#blogPost').val(),
//     };
//     saveBlogs(blogToAdd)
//     .then(() =>
//     {
//       $('#blogTitle').val('')
//       $('#blogPost').val('');
//       $('#startHere').html('');
//       getBlogsEvnt();
//     })
//     .catch((err) =>
//     {
//       console.error('Error in saving the blog', err);
//     });
//   });
// };

// Show blogs

const getBlogsEvnt = () =>
{
  $(document).ready(() =>
  {
    getBlogs()
      .then((results) =>
      {
        domCraft(results);
      })
      .catch((err) =>
      {
        console.error('Error in Get All Blogs', err);
      });
  });
};

module.exports =
{
  getBlogsEvnt,
};
