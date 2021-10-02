const api = require('../../config/api')
const User = require('../models/User')
const Token = require('../models/Token');
const { findOne } = require('../models/User');


class UserController {
  async show(req, res) {
    const {username} = req.params
    const user = await User.findOne({ where: { username } });

    if (user){
      return res.json(user)
    }
    else{
      const githubUser = await api.get(`/users/${username}`)
      if (githubUser.data){
        const {name, email, location, avatar_url, bio} = githubUser.data
        const user = await User.create({ 
          name: name,
          email: email,
          location: location,
          avatar: avatar_url,
          username,
          bio: bio,
         });
        
         await Token.create({
           user_id: user.id
         })
        
         return res.json(user)
      }
      else{
        return res.status(400).json('User not found.')
      }
    }
    
  }
    
}

module.exports = new UserController()