const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()


router.get('/', (req, res) => {
	const data = {
		image_profile: 'https://pbs.twimg.com/profile_images/994716153606914048/i6UMX-ie_400x400.jpg',
		greeting: 'Hello! Welcome to my portfolio site!',
		introduction: 'I am a web developer from Kenya',
		languages: [
			{name:'javascript', years:5},
			{name:'python', years:4},
			{name:'swift', years:5},
			{name:'c#', years:1}
		]
	}
	res.render('landing', data)

})


module.exports = router