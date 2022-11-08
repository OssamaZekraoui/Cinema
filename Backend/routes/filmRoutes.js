const express = require("express")
const router = express.Router()

const {
    getFilms ,
    getFilm , 
    getAllFilms , 
    addFilm , 
    getOneFilmById ,
    updateFilm ,
    deleteFilm
    } = require("../controllers/filmsControllers")

router.route("/films").get(getFilms)
router.route("/film/:id").get(getFilm)
router.route("/allfilms").get(getAllFilms)




module.exports = router