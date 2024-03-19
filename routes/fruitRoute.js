var express = require('express');
var router = express.Router();
const modelFruit = require('../models/fruits');
const upload = require('../config/common/uploat');
const fruits = require('../models/fruits');



/* GET users listing. */
router.get('/test', function (req, res, next) {
  res.send('respond with a resource Fruit test');
});

router.post('/add', upload, (req, res, next) => {
  // console.log(req.file);
  // console.log(req.body);
  const { name, price, status, description, id_distributor } = req.body;
  const fruit = new fruits({
    name, price, status, description, id_distributor,
    image: "/images/" + req.file.originalname
  });
  fruit.save().then(data => res.json(data)).catch(next);
});
// router.post('/add' ,upload,   (req, res, next) => {
//   console.log(req.file);
//   const model = new modelFruit(req.body);

//   console.log(model)
//    model.save(); // them du lieu vao database

//   // if (require) {
//   //   res.json({
//   //     "status": 200,
//   //     "messenge": "Them Thanh Cong",
//   //     "data": require
//   //   })
//   // } else {
//   //   res.json({
//   //     "status": 400,
//   //     "messenge": "Them Khong Thanh Cong",
//   //     "data": []
//   //   })
//   // }
// });

router.get('/list', async (req, res, next) => {
  const result = await modelFruit.find({})
  try {
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});


router.get('/getbyid/:id', async (req, res, next) => {

  try {
    const result = await modelFruit.findById(req.params.id)
    if (result) {
      res.send(result);
    } else {
      res.json({
        "status": 400,
        "messenge": " Khong tim thay id ",
        "data": []
      });
    }
  } catch (error) {
    if (error.name === "CastError") {
      res.status(400).send("Invalid id format");
    } else {
      console.log(error);
      res.status(500).send("Server Error");
    }
  }
});

router.patch('/edit/:id', async (req, res, next) => {

  try {
    const result = await modelFruit.findByIdAndUpdate(req.params.id, req.body);
    if (result) {
      const rs = await result.save();
      res.send(rs);
    } else {
      res.json({
        "status": 400,
        "messenge": " Khong tim thay id ",
        "data": []
      });
    }
  } catch (error) {
    if (error.name === "CastError") {
      res.status(400).send("Invalid id format");
    } else {
      console.log(error);
      res.status(500).send("Server Error");
    }
  }
});

router.delete('/delete/:id', async (req, res, next) => {

  try {
    const result = await modelFruit.findByIdAndDelete(req.params.id);
    if (result) {
      res.json({
        "status": 200,
        "messenge": " Xoa thanh cong ",
        "data": result
      });

    } else {
      res.json({
        "status": 400,
        "messenge": " Xoa khong Thanh Cong ",
        "data": []
      });
    }
  } catch (error) {
    if (error.name === "CastError") {
      res.status(400).send("Invalid id format");
    } else {
      console.log(error);
      res.status(500).send("Server Error");
    }
  }
});
upload
router.get('/form-fruit', (req, res, text) => {
  res.render('../views/create.hbs')
})
module.exports = router;
