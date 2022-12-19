const authUser = async (setAuthenticated, data, router) => {
  setAuthenticated(true);
  localStorage.setItem('galleryPhotoApiToken', JSON.stringify(data));
  router.push('/');
};

export default authUser;
