const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()
const port = process.env.PORT || 3000
const app = express()
app.use(cors())
const jobs = [
    {id: 0, employer: 'Whoogle', role: 'Full Stack Engineer', description: 'Lorem ipsum dolepso'},
    {id: 1, employer: 'Amigone', role: 'Frontend Developer', description: 'Lorem ipsum dolepso'},
    {id: 2, employer: 'Xilften', role: 'Full Stack Developer', description: 'Lorem ipsum dolepso'},
    {id: 3, employer: 'Tesel', role: 'Backend Engineer', description: 'Lorem ipsum dolepso'},
    {id: 4, employer: 'Bookface', role: 'Back End Engineer', description: 'Lorem ipsum dolepso'},
    {id: 5, employer: 'NikNok', role: 'Full Stack Developer', description: 'Lorem ipsum dolepso'},
    {id: 6, employer: 'Readit', role: 'Full-Stack Engineer', description: 'Lorem ipsum dolepso'},
    {id: 7, employer: 'Freebay', role: 'Full Stack Engineer', description: 'Lorem ipsum dolepso'},
    {id: 8, employer: 'Seabay', role: 'Backend Engineer', description: 'Lorem ipsum dolepso'},
    {id: 9, employer: 'Alipapa', role: 'Front-End Engineer', description: 'Lorem ipsum dolepso'},
    {id: 10, employer: 'Whoogle', role: 'Full Stack Engineer', description: 'Lorem ipsum dolepso'},
    {id: 11, employer: 'Amigone', role: 'Frontend Programmer', description: 'Lorem ipsum dolepso'},
    {id: 12, employer: 'Xilften', role: 'Full Stack Developer', description: 'Lorem ipsum dolepso'},
    {id: 13, employer: 'Tesel', role: 'Backend Engineer', description: 'Lorem ipsum dolepso'},
    {id: 14, employer: 'Bookface', role: 'Back End Dev', description: 'Lorem ipsum dolepso'},
    {id: 15, employer: 'NikNok', role: 'Full Stack Developer', description: 'Lorem ipsum dolepso'},
    {id: 16, employer: 'Readit', role: 'Full-Stack Engineer', description: 'Lorem ipsum dolepso'},
    {id: 17, employer: 'Freebay', role: 'Full Stack Engineer', description: 'Lorem ipsum dolepso'},
    {id: 18, employer: 'Readit', role: 'Backend Engineer', description: 'Lorem ipsum dolepso'},
    {id: 19, employer: 'Bookface', role: 'Front-End Engineer', description: 'Lorem ipsum dolepso'},
    {id: 20, employer: 'Moogle', role: 'Full Stack Engineer', description: 'Lorem ipsum dolepso'},
    {id: 21, employer: 'Gonagain', role: 'Frontend Developer', description: 'Lorem ipsum dolepso'},
    {id: 22, employer: 'SooperGram', role: 'Full Stack Developer', description: 'Lorem ipsum dolepso'},
    {id: 23, employer: 'EasternUnion', role: 'Backend Engineer', description: 'Lorem ipsum dolepso'},
    {id: 24, employer: 'Readit', role: 'Back End Engineer', description: 'Lorem ipsum dolepso'},
    {id: 25, employer: 'NikNok', role: 'Full Stack Developer', description: 'Lorem ipsum dolepso'},
    {id: 26, employer: 'Bookface', role: 'Full-Stack Engineer', description: 'Lorem ipsum dolepso'},
    {id: 27, employer: 'Freebay', role: 'Full Stack Engineer', description: 'Lorem ipsum dolepso'},
    {id: 28, employer: 'Baypal', role: 'Backend Engineer', description: 'Lorem ipsum dolepso'},
    {id: 29, employer: 'Alidada', role: 'Front-End Engineer', description: 'Lorem ipsum dolepso'},
    {id: 30, employer: 'Whoogle', role: 'Full Stack Engineer', description: 'Lorem ipsum dolepso'},
    {id: 31, employer: 'Amigone', role: 'Frontend Programmer', description: 'Lorem ipsum dolepso'},
    {id: 32, employer: 'Xilften', role: 'Full Stack Developer', description: 'Lorem ipsum dolepso'},
    {id: 33, employer: 'Tesel', role: 'Backend Engineer', description: 'Lorem ipsum dolepso'},
    {id: 34, employer: 'Bookface', role: 'Back End Programmer', description: 'Lorem ipsum dolepso'},
    {id: 35, employer: 'Bokbok', role: 'Full Stack Developer', description: 'Lorem ipsum dolepso'},
    {id: 36, employer: 'Readthat', role: 'Full-Stack Engineer', description: 'Lorem ipsum dolepso'},
    {id: 37, employer: 'Teebay', role: 'Full-Stack Dev', description: 'Lorem ipsum dolepso'},
    {id: 38, employer: 'Readit', role: 'Back-end Engineer', description: 'Lorem ipsum dolepso'},
    {id: 39, employer: 'Bookface', role: 'FrontEnd Engineer', description: 'Lorem ipsum dolepso'},
]
app.get('/jobs/:start/:end',(req,res)=>{
    const selected = jobs.reverse().slice(parseInt(req.params.start),parseInt(req.params.end) + 1)
    res.json({listings: selected, numberOfJobs:jobs.length})
})

app.get('/job/:term',(req,res)=>{
    const selected = jobs.filter(job => 
        (job.employer.toLowerCase().includes(req.params.term.toLowerCase()) 
        || job.role.toLowerCase().includes(req.params.term)))
    res.json(selected)
})

app.get('/job/id/:id',(req,res)=>{
    const ids = jobs.map(job=> job.id)
    if(ids.includes(parseInt(req.params.id))){
        res.send({contact: 'Some Manager', email: 'some@email.com'})
    }
})

app.listen(port, ()=> console.log('listening on port ',port))