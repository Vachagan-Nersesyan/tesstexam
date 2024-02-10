// import { Request, Response } from "express"

import { InstituteM, Teacher } from '../models/index.js'


export const getInstituteInfoFunc = (req, res) => {
    console.log('worked')
    InstituteM.findAll().then((data) => {
        console.log(res, data, 'data')
        res.send(data)
    })
}


export const getTeacherInfo = (req, res) => {

    console.log('getting info')
    Teacher.findAll().then((data) => {
        console.log(res)
        res.send(data)
    })

}


export const checkPasswordValidFunc = async (req, res) => {
    let dataArr = []
    console.log(req.body.info, 'req.body.info')
    console.log('asdasdsa')

    await Teacher
        .findAll({ where: { password: req.body.info.info } })
        .then((data) => {
            dataArr = [...data]

            console.log(dataArr, 'admin password')
            if (dataArr.length === 0) {
                console.log('empty')
                res.send(null)
            } else {
                dataArr[0].isAuth = 'true'

                console.log(dataArr, 'admin password')
            }
        })
        .catch((error) => {
            console.log(error)
        })

    if (dataArr.length === 0) {
        console.log('empty')
        res.send(null)
    } else {
        dataArr[0].isAuth = true

        await Teacher
            .update({ isAuth: dataArr[0].isAuth }, { where: { password: req.body.info.info } })
            .then((data) => {
                console.log(data, 'data')
                res.send(dataArr[0])
                console.log('successed')
            })
            .catch((error) => {
                console.log(error)
            })

    }
}


export const logOutFunc = async (req, res) => {
    let dataArr = []
    console.log(req.body.info, 'req.body.info')

    await Teacher
        .findAll({ where: { password: req.body.info.info } })
        .then((data) => {
            dataArr = [...data]


            console.log(dataArr, 'admin password')



        })
        .catch((error) => {
            console.log(error)
        })


    dataArr[0].isAuth = ''

    await Teacher
        .update({ isAuth: dataArr[0].isAuth }, { where: { password: req.body.info.info } })
        .then((data) => {
            console.log(data, 'data')
            res.send(dataArr[0])
            console.log('successed')
        })
        .catch((error) => {
            console.log(error)
        })

    console.log(dataArr, 'admin password')



}