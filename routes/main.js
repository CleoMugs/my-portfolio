const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()
const ProjectController = require('../controllers/ProjectController')


router.get('/', (req, res) => {
	const projectCtr = new ProjectController()
	projectCtr.get()
	.then(projects => {

	})
	.catch(err => {
		res.send('Oops!' '+err.message')
	})

	const data = req.context // {page:..., global:...}
	res.render('landing', data)

})


module.exports = router