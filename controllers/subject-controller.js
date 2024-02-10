// import { Request, Response } from "express"
import SubjectItem from "../models/subjectModel.js"
import ExamEndItem from "../models/examEndModel.js"
import { AllExams, EndExam } from '../models/index.js'


export const addSubject = (req, res) => {

    console.log('worked')

    console.log(req.body.info, 'req.body.info')

    AllExams.create({
        ...req.body.info
    })
        .then((data) => {
            res.send(data)
        })
        .catch((err) => {
            console.log(err)
            res.redirect('/')
        });


}


export const changePicFunc = async (req, res) => {


    // console.log(req.body.info, 'req.body.info first')


    let dataArr = []
    await AllExams
        .findAll({ subjectName: req.body.info.subjectName })
        .then((data) => {
            dataArr = [...data]
        })
        .catch((error) => {
            console.log(error)
        })

    dataArr[0].picture = req.body.info.picture



    await AllExams
        .update({ picture: dataArr[0].picture }, { where: { subjectName: req.body.info.subjectName } })

        .then((data) => {
            console.log('successed')
        })
        .catch((error) => {
            console.log(error)
        })


}



export const endExamFunc = (req, res) => {

    console.log('info', req.body.info, 'infoooo')

    EndExam.create({
        ...req.body.info.info
    })
        .then((data) => {
            console.log(data, 'data')
            res.send(data)
        })
        .catch((err) => {
            console.log(err)
            res.redirect('/')
        });

}