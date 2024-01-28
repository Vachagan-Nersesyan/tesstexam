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
    console.log(req.body.info, 'req.body.info.subjjectName')


    let dataArr: any = []
    await SubjectItem
        .find({ subjectName: req.body.info.subjjectName })
        .then((data) => {
            console.log(data)
            dataArr = [...data]
            console.log(dataArr)
            dataArr[0].textInfo = req.body.info.textInfo
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



export const updateTestFunc = async (req: Request, res: Response) => {

    let dataArr: any = []
    let currentExam: any = {}
    await SubjectItem
        .find({ subjectName: req.body.info.subjjectName })
        .then((data) => {
            dataArr = [...data]
        })
        .catch((error) => {
            console.log(error)
        })

    console.log(req.body.info, 'req.body.info')
    console.log(dataArr, 'dataArr')
    console.log(dataArr[0].exams, 'before')
    dataArr[0].exams.map((val: any) => {

        if (val.name === req.body.info.name) {
            val.info = [...req.body.info.info]

            console.log(val, 'valvalval')

            let isValidOtherInfo = true

            // for (let i in req.body.info.otherInfo) {
            //     if (req.body.info.otherInfo[i] === '') {
            //         isValidOtherInfo = false
            //     }
            // }

            // for (let i in req.body.info.questionCount) {
            //     if (req.body.info.otherInfo[i] === '') {
            //         console.log(val.questionCount)
            //         isValidOtherInfo = false
            //     }
            // }

            // for (let i in req.body.info.textInfo) {
            //     if (req.body.info.otherInfo[i] === '') {
            //         console.log(val.textInfo)
            //         isValidOtherInfo = false
            //     }
            // }

            if (isValidOtherInfo) {
                console.log('okay')
                val.otherInfo = { ...req.body.info.otherInfo }
                val.questionCount = { ...req.body.info.questionCount }
                // val.textInfo = { ...req.body.info.textInfo }

            }



        }
    })
    console.log(dataArr[0].exams, 'after')


    await SubjectItem
        .updateOne({ subjectName: req.body.info.subjjectName }, { $set: { exams: dataArr[0].exams } })
        .then((data) => {
            // console.log(data, 'data')
            console.log('successed')
            res.send(dataArr[0])
        })
        .catch((error) => {
            console.log(error)
        })



    console.log(currentExam, 'currentExamcurrentExam')
}





export const deletePostFunc = async (req: Request, res: Response) => {


    console.log(req.body.info, 'req.body.infosd223231321')

    // req.body.info.val1.questions.map((val2: any) => {
    //     if (val2.uniqName === req.body.info.val.selectedRpValue) {
    //         // console.log(val2.questionType, 'dd')

    //         val2.questionType.map((val3: any, ind3: any) => {
    //             if (val3.questionDescText === req.body.info.val.questionDescText) {
    //                 // arrClone = [...val2.questionType]
    //                 // console.log(arrClone, val2.questionType, 'arrClone')

    //                 // arrClone.splice(ind3, 1)
    //                 val2.questionType.splice(ind3, 1)


    //             }
    //         })

    //     }
    // })


    // console.log(req.body.info, 'req.body.before')



    let dataArr: any = []
    let currentExam: any = {}
    await SubjectItem
        .find({ subjectName: req.body.info.subjjectName })
        .then((data) => {
            dataArr = [...data]
        })
        .catch((error) => {
            console.log(error)
        })

    // console.log(req.body.info, 'req.body.info')
    // console.log(dataArr, 'dataArr')
    dataArr[0].exams.map((val: any) => {

        if (val.name === req.body.info.name) {
            // console.log(val,'val',newArr)
            val.info.map((val1: any) => {
                if (val1.category === req.body.info.val1.category) {
                    val1.questions.map((val2: any) => {
                        if (val2.uniqName === req.body.info.val.selectedRpValue) {
                            // console.log(val2.questionType, 'dd')

                            val2.questionType.map((val3: any, ind3: any) => {
                                if (val3.questionDescText === req.body.info.val.questionDescText) {
                                    // arrClone = [...val2.questionType]
                                    // console.log(arrClone, val2.questionType, 'arrClone')
                                    console.log(val2.questionType, 'val2.questionType')

                                    // arrClone.splice(ind3, 1)
                                    val2.questionType.splice(ind3, 1)

                                }
                            })

                        }
                    })
                }
            })

        }
    })


    await SubjectItem
        .updateOne({ subjectName: req.body.info.subjjectName }, { $set: { exams: dataArr[0].exams } })
        .then((data) => {
            console.log('successed')

            // console.log(data, 'data')
            res.send(dataArr[0])
        })
        .catch((error) => {
            console.log(error)
        })




    // let dataArr: any = []
    // let currentExam: any = {}
    // await SubjectItem
    //     .find({ subjectName: req.body.info.subjjectName })
    //     .then((data) => {
    //         dataArr = [...data]
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })

    // console.log(req.body.info, 'req.body.info')
    // console.log(dataArr, 'dataArr')
    // console.log(dataArr[0].exams, 'before')
    // dataArr[0].exams.map((val: any) => {

    //     if (val.name === req.body.info.name) {
    //         val.info = [...req.body.info.info]


    //         val.otherInfo = { ...req.body.info.otherInfo }
    //         val.questionCount = { ...req.body.info.questionCount }
    //         val.textInfo = { ...req.body.info.textInfo }


    //     }
    // })
    // // console.log(dataArr[0].exams, 'after')


    // await SubjectItem
    //     .updateOne({ subjectName: req.body.info.subjjectName }, { $set: { exams: dataArr[0].exams } })
    //     .then((data) => {
    //         // console.log(data, 'data')
    //         console.log('successed')
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //     })



    // console.log(currentExam, 'currentExamcurrentExam')
}


