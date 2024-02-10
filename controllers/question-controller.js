
import { AllExams } from '../models/index.js'


export const addQuestion = async (req, res) => {

    console.log(req.body.info.subjjectName, 'req.body.info.subjjectName')
    console.log(req.body.info, 'req.body.info.subjjectName')


    let dataArr = []
    await AllExams
        .findAll({ where: { subjectName: req.body.info.subjjectName } })
        .then((data) => {
            console.log(data)
            dataArr = [...data]
            console.log(dataArr)
            dataArr[0].textInfo = req.body.info.textInfo

            dataArr[0].exams = JSON.parse(dataArr[0].exams)
            dataArr[0].exams.push(req.body.info)
            console.log(dataArr)
        })
        .catch((error) => {
            console.log(error)
        })



    await AllExams
        .update({ exams: dataArr[0].exams }, { where: { subjectName: req.body.info.subjjectName } })
        .then((data) => {
            console.log(data, 'data')
            res.send(dataArr[0])

        })
        .catch((error) => {
            console.log(error)
        })





}



export const getAllExams = (req, res) => {
    AllExams
        .findAll()
        .then((data) => {
            console.log(data, 'need parse')
            res.send(data)
        })
        .catch((error) => {
            console.log(error)
        })

}



export const updateTestFunc = async (req, res) => {

    let dataArr = []
    let currentExam = {}
    await AllExams
        .findAll({ where: { subjectName: req.body.info.subjjectName } })

        .then((data) => {
            dataArr = [...data]
        })
        .catch((error) => {
            console.log(error)
        })

    console.log(req.body.info, 'req.body.info')
    console.log(dataArr, 'dataArr')
    // console.log(dataArr[0].exams, 'before')
    dataArr[0].exams = JSON.parse(dataArr[0].exams)
    console.log(dataArr[0].exams, 'dataArr[0].exams')
    dataArr[0].exams.map((val) => {

        if (val.name === req.body.info.name) {
            val.info = [...req.body.info.info]

            console.log(val, 'valvalval')

            let isValidOtherInfo = true

            if (isValidOtherInfo) {
                console.log('okay')
                val.otherInfo = { ...req.body.info.otherInfo }
                val.questionCount = { ...req.body.info.questionCount }
                // val.textInfo = { ...req.body.info.textInfo }

            }



        }
    })
    console.log(dataArr[0].exams, 'after')


    await AllExams
        .update({ exams: dataArr[0].exams }, { where: { subjectName: req.body.info.subjjectName } })

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





export const deletePostFunc = async (req, res) => {


    console.log(req.body.info, 'req.body.infosd223231321')


    let dataArr = []
    let currentExam = {}

    await AllExams
        .findAll({ where: { subjectName: req.body.info.subjjectName } })

        .then((data) => {
            dataArr = [...data]
        })
        .catch((error) => {
            console.log(error)
        })

    dataArr[0].exams = JSON.parse(dataArr[0].exams)
    dataArr[0].exams.map((val) => {

        if (val.name === req.body.info.name) {
            val.info.map((val1) => {
                if (val1.category === req.body.info.val1.category) {
                    val1.questions.map((val2) => {
                        if (val2.uniqName === req.body.info.val.selectedRpValue) {


                            val2.questionType.map((val3, ind3) => {
                                if (val3.questionDescText === req.body.info.val.questionDescText) {
                                    console.log(val2.questionType, 'val2.questionType')
                                    val2.questionType.splice(ind3, 1)

                                }
                            })

                        }
                    })
                }
            })

        }
    })


    await AllExams
        .update({ exams: dataArr[0].exams }, { where: { subjectName: req.body.info.subjjectName } })

        .then((data) => {
            console.log('successed deleted')

            // console.log(data, 'data')
            res.send(dataArr[0])
        })
        .catch((error) => {
            console.log(error)
        })




}


