export default {
  signIn(profile) {
    localStorage.setItem('googleId', profile.getId());
    localStorage.setItem('name', profile.getName());
    localStorage.setItem('imageUrl', profile.getImageUrl());
    localStorage.setItem('email', profile.getEmail());
  }
}
