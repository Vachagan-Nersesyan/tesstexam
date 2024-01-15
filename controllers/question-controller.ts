import { Request, Response } from "express"
import AddQuestionItem from "../models/questionModel"
import SubjectItem from "../models/subjectModel"


export const addQuestion = async (req: Request, res: Response) => {


    // console.log(req.body.info, 'req.body.info')

    // const questionItem = new AddQuestionItem({ ...req.body.info })
    // console.log(questionItem)

    // console.log(questionItem, 'questionItemquestionItemquestionItem')

    // questionItem
    //     .save()
    //     .then((data) => res.send(data))
    //     .catch((error) => {
    //         console.log(error)
    //         res.redirect('/')
    //     })

    console.log(req.body.info.subjjectName, 'req.body.info.subjjectName')

    let dataArr: any = []
    await SubjectItem
        .find({ subjectName: req.body.info.subjjectName })
        .then((data) => {
            console.log(data)
            dataArr = [...data]
            console.log(dataArr)
            dataArr[0].exams.push(req.body.info)
            console.log(dataArr)
        })
        .catch((error) => {
            console.log(error)
        })



    await SubjectItem
        .updateOne({ subjectName: req.body.info.subjjectName }, { $set: { exams: dataArr[0].exams } })
        .then((data) => {
            console.log(data, 'data')
        })
        .catch((error) => {
            console.log(error)
        })


}



// export const getQuestion = (req: Request, res: Response) => {
//     AddQuestionItem
//         .find()
//         .then((data) => {
//             res.send(data)
//         })
//         .catch((error) => {
//             console.log(error)
//         })


// }

export const getAllExams = (req: Request, res: Response) => {
    SubjectItem
        .find()
        .then((data) => {
            res.send(data)
        })
        .catch((error) => {
            console.log(error)
        })

}