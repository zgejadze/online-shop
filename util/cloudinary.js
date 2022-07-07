const cloudinary = require('cloudinary').v2


cloudinary.config({ 
    cloud_name: 'dncd7skph', 
    api_key: '148719366765231', 
    api_secret: 'J_d31wFgDBcVX5BABAZroDDZ3ks',
    secure: true
  });
  

  module.exports = cloudinary