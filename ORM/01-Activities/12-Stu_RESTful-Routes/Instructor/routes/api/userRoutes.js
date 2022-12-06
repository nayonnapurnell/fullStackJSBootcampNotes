const router = require('express').Router();
const User = require('../../models/User');

// TODO: Use try/catch to catch errors
// TODO: Return the appropriate HTTP status codes

// GET a user
router.get('/:id', async (req, res) => {
  try{
    const userData = await User.findByPk(req.params.id);
    if(userData === null){
      // error if user does not exist
      return res.status(404).json({
        "message": "No user with this id!"
      });
    }
    res.status(200).json(userData);
  }
  catch(err){
    // if(err.name === "SequelizeDatabaseError" && err.parent.errno === 1054){
    //   // error if user does not exist
    //   return res.status(404).json({
    //     "message": "Error with SQL???"
    //   });
    // }
    // it is possible to do other types of errors in the future
    // later you will make more specific errors depending on the error message is
    res.status(500).json(err);
  }
});

// UPDATE a user
router.put('/:id', async (req, res) => {
  try{
    const userData = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if(userData === 0){
      // error if user does not exist
      return res.status(404).json({
        "message": "No user with this id!"
      });
    }

    res.status(200).json(userData);
  }
  catch(err){
    // it is possible to do other types of errors in the future
    // later you will make more specific errors depending on the error message is
    res.status(500).json(err);
  }
});

// DELETE a user
router.delete('/:id', async (req, res) => {
  try{
    const userData = await User.destroy({
      where: {
        id: req.params.id,
      },
    });
    if(userData === 0){
      // error if user does not exist
      return res.status(404).json({
        "message": "No user with this id!"
      });
    }
    res.status(200).json(userData);
  }
  catch(err){
    console.log(JSON.stringify(err));
    
    // it is possible to do other types of errors in the future
    // later you will make more specific errors depending on the error message is
    res.status(500).json(err);
  }
});

module.exports = router;
