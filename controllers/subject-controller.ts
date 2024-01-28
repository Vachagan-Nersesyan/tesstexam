import { Request, Response } from "express"
import SubjectItem from "../models/subjectModel"
import ExamEndItem from "../models/examEndModel"


export const addSubject = (req: Request, res: Response) => {

    const subjectItem = new SubjectItem({ ...req.body.info })

    // console.log(subjectItem, 'subjectItem')

    subjectItem
        .save()
        .then((data) => res.send(data))
        .catch((error) => {
            console.log(error)
            res.redirect('/')
        })


}


export const changePicFunc = async (req: Request, res: Response) => {


    // console.log(req.body.info, 'req.body.info first')


    let dataArr: any = []
    await SubjectItem
        .find({ subjectName: req.body.info.subjectName })
        .then((data) => {
            dataArr = [...data]
            // console.log(dataArr, 'finded datagggggggggggggggArr')

            // console.log(dataArr, 'dataArr')
        })
        .catch((error) => {
            console.log(error)
        })

    // console.log(dataArr, 'dataArrdataArr')
    // console.log(dataArr[0].picture, '[icicic')
    // console.log(req.body.info.picture, 'req.body.info.picture')
    dataArr[0].picture = req.body.info.picture



    await SubjectItem
        .updateOne({ subjectName: req.body.info.subjectName }, { $set: { picture: dataArr[0].picture } })
        .then((data) => {
            // console.log(data, 'data')
            // console.log(dataArr[0].picture, 'picture]')
            // res.send(data)
            console.log('successed')
        })
        .catch((error) => {
            console.log(error)
        })


}



export const endExamFunc = (req: Request, res: Response) => {
    

    const examEndItem = new ExamEndItem({ ...req.body.info.info })

    console.log(req.body.info, 'req.body.info ')

    examEndItem
        .save()
        .then((data) => res.send(data))
        .catch((error) => {
            console.log(error)
            res.redirect('/')
        })


}