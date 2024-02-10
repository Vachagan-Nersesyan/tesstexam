import Sequelize from "sequelize"


const endExamSchema = function (sequelize) {
    return sequelize.define('Answers', {
        nameFirst: {
            type: Sequelize.STRING(15),
        },
        nameSecond: {
            type: Sequelize.STRING(15),
        },
        nameThird: {
            type: Sequelize.STRING(15),
        },
        classNumber: {
            type: Sequelize.STRING(15),
        },
        testNumber: {
            type: Sequelize.NUMBER(),
        },
        isWriten: {
            type: Sequelize.BOOLEAN(),
        },
        answersArr: {
            type: Sequelize.JSON(),
        },


    }, {
        tableName: 'answers',
        timestamps: false
    })
}



export default endExamSchema

