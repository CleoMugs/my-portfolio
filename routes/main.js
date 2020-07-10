const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()


router.get('/', (req, res) => {

	const data = req.context // {page:..., global:...}
	res.render('landing', data)

})


module.exports = router