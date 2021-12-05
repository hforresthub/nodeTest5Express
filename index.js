const express = require('express')
const app = express()
const bodyParser = require('body-parser')

// create aoo/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false})

app.use(express.static('public'))

// handle homepage requests 
app.get('/index.html', (req, res) => {
	res.sendFile(__dirname + "/" + "index.html")
})

// process post
app.post('/process_post', urlencodedParser, (req, res) => {
	// prep output in json
	response = {
		firstName:req.body.firstNameP,
		lastName:req.body.lastNameP
	}
	console.log(response)
	res.end(JSON.stringify(response))
})

// process get
app.get('/process_get', (req, res) => {
	// prep output in JSON
	response = {
		firstName:req.query.firstName,
		lastName:req.query.lastName
	}
	console.log(response)
	res.end(JSON.stringify(response))
})

// this responds with hello get to a get request
app.get('/', (req, res) => {
	console.log('to gather to get her together');
	res.send('hey GET')
})

// this responds to a post request for the homepage
app.post('/', (req, res) => {
	console.log('post the postmans poster');
	res.send('hello POST')
})

// this responds to a delete request for the /del_user page
app.delete('/del_user', (req, res) => {
	console.log('deleted deleter delete')
	res.send('hi DELETE')
})

// this responds to a get request for the /list_user page
app.get('/list_user', (req, res) => {
	console.log('got a get request for list user')
	res.send('Page Listing')
})

// this responds a get request for anything of the form /ab*cd like /abcd or /absajkhlkjashdcd
app.get('/ab*cd', (req, res) => {
	console.log('got a get but only for /ab*cd')
	res.send('yo pattern')
})

const server = app.listen(8081, 'localhost', () => {
	const host = server.address().address
	const port = server.address().port

	console.log('My app is listening at http://%s:%s', host, port);
})