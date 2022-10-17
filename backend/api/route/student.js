const express = require('express');
const router = express.Router();
const Student = require('../model/student');
const mongoose = require('mongoose');
const cloudinary = require('cloudinary').v2;


cloudinary.config({
    cloud_name: 'drygcfes5',
    api_key: '938667767878386',
    api_secret: 'Py3K_6yEjQs4kt4mXkbt8OpyeYk'
})

//get request
router.get('/', (req, res, next) => {
    Student.find()
        .then(result => {
            res.status(200).json({
                studentData: result
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
})

//post request
router.post('/', (req, res, next) => {
    console.log(req.body);
    const file = req.files.photo;
    cloudinary.uploader.upload(file.tempFilePath, (err, result) => {
        console.log(result);
        const student = new Student({
            _id: new mongoose.Types.ObjectId,
            title: req.body.title,
            description: req.body.description,
            imagePath: result.imageUrl,
        })

        student.save()
            .then(result => {
                console.log(result);
                res.status(200).json({
                    newStudent: result
                })
            })

        .catch(err => {
            console.log(err);
            res.console(500).json({
                error: err
            })
        })
    })
})

module.exports = router;