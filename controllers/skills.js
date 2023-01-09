import { Skill } from "../models/skill.js"


function index(req, res) {
  Skill.find({})
  .then(skills=> {
    res.render('skills/index', {
      skills: skills
    })
  })
}

function newSkill(req, res) {
  res.render('skills/new')
}
export {
	index,
  newSkill as new
}