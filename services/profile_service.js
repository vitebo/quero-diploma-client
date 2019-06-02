import axios from 'axios';

export default {
  createProfile(profile) {
    const url = this.buildProfileUrl(profile.getId(), profile.getName(), profile.getImageUrl(), profile.getEmail());
    console.log(url)

    axios.get(url)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
  },

  buildProfileUrl(googleId, studentName, photoUrl, studentEmail) {
    return `http://ec2-18-217-117-80.us-east-2.compute.amazonaws.com/profiles/show?google_id=${googleId}&student_name=${studentName}&student_email=${studentEmail}&student_photo_url=${photoUrl}`;
  },

  createCertification(googleId, school, course) {
    console.log(school);
    const url = this.buildCertificationUrl(googleId, school, course)

    console.log(url);

    axios.get(url)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      })
  },

  buildCertificationUrl(googleId, school, course) {
    return `http://ec2-18-217-117-80.us-east-2.compute.amazonaws.com/certifications/create?student_google_id=${googleId}&school=${school}&course=${course}`;
  }
}

