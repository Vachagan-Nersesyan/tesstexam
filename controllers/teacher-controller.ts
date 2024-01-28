import { Request, Response } from "express"
import TeacherItem from "../models/teacherModel"


export const getTeacherInfo = (req: Request, res: Response) => {

    console.log('getting info')

    TeacherItem
        .find()
        .then((data) => {
            console.log(data, 'teacher info data')
            res.send(data)
        })
        .catch((error) => {
            console.log(error)
        })

}


export const checkPasswordValidFunc = async (req: Request, res: Response) => {
    let dataArr: any = []
    console.log(req.body.info, 'req.body.info')
    await TeacherItem
        .find({ password: req.body.info.info })
        .then((data) => {
            dataArr = [...data]

            console.log(dataArr, 'admin password')
        })
        .catch((error) => {
            console.log(error)
        })

    if (dataArr.length === 0) {
        console.log('empty')
        res.send(null)
    } else {
        dataArr[0].isAuth = true

        await TeacherItem
            .updateOne({ password: req.body.info.info }, { $set: { isAuth: dataArr[0].isAuth } })
            .then((data) => {
                console.log(data, 'data')
                // console.log(dataArr[0].picture, 'picture]')
                res.send(dataArr[0])
                console.log('successed')
            })
            .catch((error) => {
                console.log(error)
            })

        // res.send({})


        console.log(dataArr, 'admin password')
    }

}


export const logOutFunc = async (req: Request, res: Response) => {
    let dataArr: any = []
    console.log(req.body.info, 'req.body.info')
    await TeacherItem
        .find({ password: req.body.info.info })
        .then((data) => {
            dataArr = [...data]

            console.log(dataArr, 'admin password')
        })
        .catch((error) => {
            console.log(error)
        })


    dataArr[0].isAuth = false

    await TeacherItem
        .updateOne({ password: req.body.info.info }, { $set: { isAuth: dataArr[0].isAuth } })
        .then((data) => {
            console.log(data, 'data')
            // console.log(dataArr[0].picture, 'picture]')
            res.send(dataArr[0])
            console.log('successed')
        })
        .catch((error) => {
            console.log(error)
        })

    // res.send({})


    console.log(dataArr, 'admin password')


}