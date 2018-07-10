const Photo = require('../models/photo');

module.exports = {
  readAll: async (req, res) => {
    try {
      let allPhoto = await Photo.find();
      res.status(200).json({
        message: 'all photo',
        photos: allPhoto
      });
    } catch(error) {
      res.status(500).json({
        message: 'something went wrong'
      });
    }
  }
};