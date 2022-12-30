const { Router } = require('express')
const router = Router()
const urlController = require('../controller/urlController')

router.post('/url/shorten', urlController.createShortUrl )

router.get('/:urlCode', urlController.getShortUrl )

router.all("/*", (req, res)=>{
    return res.status(404).send({status:false, message:" Invalid HTTP request "})
})

module.exports = router
