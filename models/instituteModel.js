import Sequelize from "sequelize"


const instituteSchema = function (sequelize) {
    return sequelize.define('InstituteM', {
        name: {
            type: Sequelize.STRING(15),
        },
        logo: {
            type: Sequelize.BLOB,
        },

    }, {
        tableName: 'instituteinfo',
        timestamps: false
    })
}



export default instituteSchema

