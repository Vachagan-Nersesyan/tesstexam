import { Request, Response } from "express"
import SubjectItem from "../models/subjectModel"


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
