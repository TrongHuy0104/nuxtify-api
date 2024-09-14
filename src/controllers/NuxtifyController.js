const { Nuxtify } = require("nuxtify-api");

const NuxtifyController = {
    getSong(req, res) {
        Nuxtify.song.getUrl(req.query.id).then((data) => {
            res.json(data);
        });
    },
};

module.exports = NuxtifyController;
