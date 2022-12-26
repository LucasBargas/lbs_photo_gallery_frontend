const authUser = async (setAuthenticated, data, router) => {
  setAuthenticated(true);
  localStorage.setItem('galleryPhotoApiToken', JSON.stringify(data));
  setTimeout(() => {
    router.push('/');
  }, 1000);
};

export default authUser;
