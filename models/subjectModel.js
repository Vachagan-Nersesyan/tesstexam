import Sequelize from "sequelize"


const allExamsSchema = function (sequelize) {
    return sequelize.define('AllExams', {
        subjectName: {
            type: Sequelize.STRING(15),
        },
        exams: {
            type: Sequelize.JSON(),

        },
        date: {
            type: Sequelize.STRING(15),
        },
        picture: {
            type: Sequelize.STRING(2000),

        },
        teacherName: {
            type: Sequelize.STRING(15),

        },

    }, {
        tableName: 'allexams',
        timestamps: false
    })
}



export default allExamsSchema

