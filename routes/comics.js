const express = require("express");

const axios = require("axios");
const router = express.Router();

router.get("/comics", async (req, res) => {
  // console.log(req.query);
  // { apiKey: 'CADgxRwOc45WnlzR', title: 'Hunter' }
  const { title, limit, skip } = req.query;
  // console.log(title);
  // Hunter

  try {
    const response = await axios.get(
      "https://lereacteur-marvel-api.herokuapp.com/comics",
      {
        params: {
          apiKey: process.env.API_KEY,
          title: title,
          limit: limit,
          skip: skip,
        },
      }
    );
    //     console.log(response.data);
    //     {
    //   count: 47397,
    //   limit: 100,
    //   results: [
    //     {
    //       thumbnail: [Object],
    //       _id: '5fce13de78edeb0017c92d68',
    //       title: '100th Anniversary Special (2014) #1',
    //       description: 'Just in time for the release of their SEVENTH epic motion picture, the Guardians of the Galaxy are celebrating their 100th Anniversary...by taking on the THE SILVER GALACTUS!',
    //       __v: 0
    //     },
    //     {
    //       thumbnail: [Object],
    //       _id: '5fce13df78edeb0017c92d81',
    //       title: '100th Anniversary Special (2014) #1',
    //       description: 'CELEBRATE 100 YEARS OF EARTH&#39;S MIGHTIEST HEROES &ndash; THE AVENGERS! Following the failed Badoon invasion of Earth and America&#39;s disappearance into the Negative Zone, how will the Avengers of 2061 cope?!',
    //       __v: 0
    //     },

    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.get("/comic/:comicId", async (req, res) => {
  const id = req.params.comicId;
  // console.log(id);

  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comic/${id}`,
      {
        params: {
          apiKey: process.env.API_KEY,
        },
      }
    );
    // console.log(response.data);
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.get("/comics/:characterId", async (req, res) => {
  const id = req.params.characterId;
  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/comics/${id}`,
      {
        params: {
          apiKey: process.env.API_KEY,
        },
      }
    );
    // console.log(response.data);
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
