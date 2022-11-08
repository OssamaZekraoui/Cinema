
// Afficher la liste de tout les films

exports.getFilms = (req,res)=>{
    res.status(200).json({
        success : true,
        message:"Affichage des films"
    })
}

// Afficher un seul film avec id

exports.getFilm = (req,res)=>{
    var id = req.params.id
    res.status(200).json({
        success : true,
        message:"Affichage d'un seul film d'id= "+id
    })
}

//-----------------Récupérer tous les eneregistrements------------
let Film = require("../models/film")
exports.getAllFilms = async (req,res)=>{
    const films = await Film.find()
    res.status(200).json({
        success:true,
        count:films.length,
        films
    })
}


//----------------- Ajouter un enregistrement-------------------------
exports.addFilm = async (req,res)=>{
    const film = new Film(req.body)
    await film.save()
    res.status(200).json({
        success:true,
        film
    })

}


//----------------Rechercher un enregistrement ----------------
exports.getOneFilmById = async (req,res)=>{
    _id = req.params.id
    const fil = await Film.findOne({
        _id:_id
    })
    res.status(200).json({
        success:true,
        fil
    })
}


//---------------Update---------------
exports.updateFilm = async (req,res)=>{
    const filmUpdated =await Film.updateOne({
        _id:req.params.id
    },
    {
        $set:req.body
    },
    )
    res.status(200).json({
        success:true,
        filmUpdated
    })
}


//------------delete------------
exports.deleteFilm =async (req,res)=>{
    del_fil = await Film.deleteOne({
    _id:req.params.id
    })
    res.status(200).json({
    success:true,
    del_fil
    })
}    