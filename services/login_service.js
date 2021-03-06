import ProfileService from './profile_service.js';

export default {
  signIn(profile) {
    localStorage.setItem('googleId', profile.getId());
    localStorage.setItem('name', profile.getName());
    localStorage.setItem('imageUrl', profile.getImageUrl());
    localStorage.setItem('email', profile.getEmail());

    ProfileService.createProfile(profile);
  },

  isSignedIn() {
    googleId = LocalStorage.getItem('googleId');
    name = LocalStorage.getItem('name');
    imageUrl = LocalStorage.getItem('imageUrl');
    email = LocalStorage.getItem('email');

    return googleId.length() > 0 && name.length() > 0 && imageUrl.length() > 0 && email.length() > 0;
  },

  signOut() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut();
  }
}
