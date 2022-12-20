const authUser = async (setAuthenticated, data, navigate) => {
  setAuthenticated(true);
  localStorage.setItem('galleryPhotoApiToken', JSON.stringify(data));
  navigate('/');
};

export default authUser;
