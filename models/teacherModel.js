import Sequelize from "sequelize"


const teacherSchema = function (sequelize) {
    return sequelize.define('Teachers', {
        name: {
            type: Sequelize.STRING(15),
        },
        lastName: {
            type: Sequelize.STRING(15),
        },
        password: {
            type: Sequelize.STRING(15),
        },
        isAuth: {
            type: Sequelize.STRING(15),
        },

    }, {
        tableName: 'teachers',
        timestamps: false
    })
}



export default teacherSchema

