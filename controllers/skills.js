import { Skill } from "../models/skill.js"


function index(req, res) {
  Skill.find({})
  .then(skills=> {
    res.render('skills/index', {
      skills: skills
    })
  })
}
export {
	index
}