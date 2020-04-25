const express = require('express');
const router = express.Router();
const dados_mdkController = require('../controllers/dados_mdkController');


router.post('/dados_mdk', dados_mdkController.Insert);
router.get('/dados_mdk', dados_mdkController.searchAll);
router.get('/dados_mdk/:id', dados_mdkController.searchOne);
router.put('/dados_mdk/:id', dados_mdkController.atualizar);
router.delete('/dados_mdk/:id', dados_mdkController.Delete);

module.exports = router;