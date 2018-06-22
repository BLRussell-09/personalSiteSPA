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

const displayBlogs = () =>
{
  return Promise((resolve, reject) =>
  {
    const allBlogs = [];
    $.ajax(
      {
        method: 'GET',
        url: '../../db/blogs.json',
      })
      .done((allBlogsObj) =>
      {
        if (allBlogsObj !== null)
        {
          Object.keys(allBlogsObj).forEach(fbKey =>
          {
            allBlogsObj[fbKey].id = fbKey;
            allBlogs.push(allBlogsObj[fbKey]);
          });
        }
        resolve(allBlogs);
      })
      .fail((err) =>
      {
        reject(err);
      });
  });
};
module.exports =
{
  displayBlogs,
};
