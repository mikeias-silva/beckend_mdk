const Dados_mdk = require('../models/dados_mdk');
const status = require('http-status');

exports.Insert = (req, res, next) => {
    const titulo = req.body.titulo;
    const fase = req.body.fase;
    const teste= teste;



    Dados_mdks.create({
        titulo: titulo,
        fase: fase
    })
        .then(dados_mdk => {
            if (dados_mdk) {
                res.status(status.OK).send(dados_mdk);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
}




exports.searchAll = (req, res, next) => {
    console.log("teste")
    Dados_mdk.findAll()
        .then(dados_mdk => {
            if (dados_mdk) {
                res.status(status.OK).send(dados_mdk)
            }
        })
        .catch(error => next(error));
}

exports.searchOne = (req, res, next) => {
    const id = req.params.id;

    Dados_mdk.findByPk(id)
        .then(dados_mdk => {
            if (dados_mdk) {
                res.status(status.OK).send(dados_mdk)
            }
        })
        .catch(error => next(error));

}

exports.atualizar = (req, res, next) => {
    const id = req.params.id;
    const titulo = req.body.titulo;
    const fase = req.body.fase;


    Dados_mdk.findByPk(id)
        .then(dados_mdk => {
            if (dados_mdk) {
                dados_mdk.update({
                    titulo: titulo,
                    fase: fase
                },
                    {
                        where: { id: id }
                    })
                    .then(() => {
                        res.status(status.OK).send();

                    })
                    .catch(error => next(error));
            } else {
                res.status(status.NOT_FOUND).send();

            }
        })
        .catch(error => next(error));

}


exports.Delete = (req, res, next) => {
    const id = req.params.id;

    Dados_mdk.findByPk(id)
        .then(dados_mdk => {
            if (dados_mdk) {
                dados_mdk.destroy({
                    where: { id: id }
                })
                    .then(() => {
                        res.status(status.OK).send();

                    })
                    .catch(error => next(error));
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
}