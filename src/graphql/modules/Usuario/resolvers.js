const { db, perfis } = require('../../../db')

module.exports = {
    Usuario: {
        salario(_) {
            return _.salario_liquido
        },
        perfil(usuario) {
            return perfis.find(p => p.id === usuario.perfil)
        }
    },
    Query: {
        usuario(_, args) {
            return db.find(db => db.id === args.id)
        },
        usuarios: () => db,
    }
}