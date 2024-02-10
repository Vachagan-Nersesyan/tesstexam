import { Sequelize } from "sequelize";
import TeacherModel from './teacherModel.js'
import AllExamsModel from './subjectModel.js'
import EndExamModel from './examEndModel.js'
import InstituteModel from './instituteModel.js'

export const sequelize = new Sequelize("testexamdb", "root", "", {
    dialect: 'mysql',
    host: process.env.MYSQL_HOST,
    logging: false
})

export const Teacher = TeacherModel(sequelize)
export const AllExams = AllExamsModel(sequelize)
export const EndExam = EndExamModel(sequelize)
export const InstituteM = InstituteModel(sequelize)


