var express = require('express');
var router = express.Router();
const modelDistributor = require('../models/distributor');




/* GET users listing. */
router.get('/test', function (req, res, next) {
  res.send('respond with a resource Distributor test');
});

router.post('/add', async (req, res, next) => {
  try {
    const model = new modelDistributor(req.body);
    const require = await model.save(); // them du lieu vao database

    if (require) {
      res.json({
        "status": 200,
        "messenge": "Them Thanh Cong",
        "data": require
      })
    } else {
      res.json({
        "status": 400,
        "messenge": "Them Khong Thanh Cong",
        "data": []
      })
    }
    // res.send(require)
  } catch (ex) {
    console.log(ex);
  }
});

router.get('/list', async (req, res, next) => {
  const result = await modelDistributor.find({})
  try {
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});


router.get('/getbyid/:id', async (req, res, next) => {

  try {
    const result = await modelDistributor.findById(req.params.id)
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
    const result = await modelDistributor.findByIdAndUpdate(req.params.id, req.body);
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
    const result = await modelDistributor.findByIdAndDelete(req.params.id);
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
module.exports = router;
