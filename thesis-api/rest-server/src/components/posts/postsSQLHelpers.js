<<<<<<< HEAD
export const fetchAllPostsHelper = () => {
  return `
  SELECT posts.id, posts.title, posts.description, posts.condition, posts.location, posts.demand, posts.user_id, posts.status, posts.main_photo, posts.created_at, users.username FROM posts
  INNER JOIN users on (posts.user_id=users.id) 
=======
export const fetchAllPostsHelper = () => `
  SELECT posts.id, posts.title, posts.description, posts.condition, posts.location, posts.demand, posts.user_id, posts.status, posts.main_photo, users.username FROM posts
  INNER JOIN users on (posts.user_id=users.id)
>>>>>>> syntax issues
  `;

export const fetchUserPostsHelper = ({ user_id }) => `
  SELECT * 
  FROM posts 
  WHERE user_id = ${user_id}
  `;

export const fetchSinglePostsHelper = ({ post_id }) =>
  `
  SELECT * 
  FROM users 
  INNER JOIN posts  ON  posts.user_id = users.id 
  WHERE posts.id=${post_id}
  `;
// SELECT * FROM posts INNER JOIN users
// post.id is overwriten by users.id when inner JOiNIng second table

export const addPostsHelper = (
  { user_id },
  {
    title, description, condition, location, demand, status,
  },
) => `
   INSERT INTO posts (title, description, condition, location, demand, user_id, status)
   VALUES ('${title}', '${description}', '${condition}', '${location}', '${demand}', ${user_id}, '${status}')
   RETURNING *
  `;

export const deletePostsHelper = ({ user_id, post_id }) => `
    DELETE FROM posts
    WHERE id=${post_id} AND user_id=${user_id}
  `;

export const updatePostsHelper = (
  { user_id, post_id },
  {
    title, description, condition, location, demand, status, main_photo,
  },
) => `
   UPDATE posts 
   SET  title='${title}', 
        description='${description}', 
        condition='${condition}', 
        location='${location}', 
        demand='${demand}', 
        status='${status}',
        user_id=${user_id},
        main_photo='${main_photo}'
   WHERE id=${post_id}
   RETURNING *
  `;
