// Responsible for fetching data
const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function() {
    let url = `https://script.google.com/macros/s/AKfycbwOUpcxq6ifDZM5Im1jJKGjmhEa3qhRpmpAROeVoiINFCW6mqNvzIxqomgV94q_H_pc/exec`;
  
    const response = await EleventyFetch(url, {
      duration: "1d",
      type: "json"
    });
  
    return response.data;
};