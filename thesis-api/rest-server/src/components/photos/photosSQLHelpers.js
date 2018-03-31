export const fetchAllPhotosHelper = ({ post_id }) => `
  SELECT * 
  FROM photos 
  WHERE photos.post_id=${post_id}
  `;

export const addPhotosHelper = ({ post_id }, url) => `
  INSERT INTO photos (post_id, url)
  VALUES (${post_id}, '${url}')
  RETURNING id, post_id, url
  `;

export const removePhotosHelper = ({ post_id, photo_id }) => `
  DELETE FROM photos
  WHERE photos.post_id=${post_id} AND id=${photo_id}
  `;
