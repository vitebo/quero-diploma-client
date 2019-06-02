import axios from 'axios';

export default {
  createProfile(profile) {
    const url = this.buildUrl(profile.getId(), profile.getName(), profile.getImageUrl(), profile.getEmail());
    console.log(url)

    axios.get(url)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
  },

  buildUrl(googleId, studentName, photoUrl, studentEmail) {
    return `http://ec2-18-217-117-80.us-east-2.compute.amazonaws.com/profiles/show?student_google_id=${googleId}&student_name=${studentName}&student_email=${studentEmail}&student_photo_url=${photoUrl}`;
  }
}


