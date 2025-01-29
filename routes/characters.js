const express = require("express");

const axios = require("axios");
const router = express.Router();

router.get("/characters", async (req, res) => {
  const { name, limit, skip } = req.query;
  try {
    const response = await axios.get(
      "https://lereacteur-marvel-api.herokuapp.com/characters",
      {
        params: {
          apiKey: process.env.API_KEY,
          name: name,
          limit: limit,
          skip: skip,
        },
      }
    );

    // console.log(response.data);[
    //  {
    // "count": 1493,
    // "limit": 100,
    // "results": [
    //     {
    //         "thumbnail": {
    //             "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784",
    //             "extension": "jpg"
    //         },
    //         "comics": [
    //             "5fce213378edeb0017c9602f",
    //             "5fce213478edeb0017c96040",
    //             "5fce20fe78edeb0017c95fb7",
    //             "5fce20e078edeb0017c95f01",
    //             "5fce20ab78edeb0017c95e56",
    //             "5fce207678edeb0017c95d8b",
    //             "5fce207678edeb0017c95d8c",
    //             "5fce202078edeb0017c95c8e",
    //             "5fce292678edeb0017c97e05",
    //             "5fce31ee78edeb0017c9a305",
    //             "5fce31dc78edeb0017c9a2b0",
    //             "5fce31c778edeb0017c9a276"
    //         ],
    //         "_id": "5fcf91f4d8a2480017b91453",
    //         "name": "3-D Man",
    //         "description": "",
    //         "__v": 0
    //     },
    //  ....
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

router.get("/character/:characterId", async (req, res) => {
  const id = req.params.characterId;

  try {
    const response = await axios.get(
      `https://lereacteur-marvel-api.herokuapp.com/character/${id}`,
      {
        params: {
          apiKey: process.env.API_KEY,
        },
      }
    );
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
});

module.exports = router;
