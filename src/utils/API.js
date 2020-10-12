import axios from "axios";

// Utilize Random User Generator API to generate random users
export default {
    getUsers: function() {
      return axios.get("https://randomuser.me/api/?results=200&nat=us");
    }
  };