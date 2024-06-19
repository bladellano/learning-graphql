const { db, perfis } = require("../../../db");

function geradorDeId(lista) {
    let novoId;
    let ultimo = lista[lista.length - 1];

    if (!ultimo) {
        novoId = 0;
    } else {
        novoId = ultimo.id;
    }

    return ++novoId;
}

module.exports = {
    Usuario: {
        salario(_) {
            return _.salario_liquido;
        },
        perfil(usuario) {
            return perfis.find((p) => p.id === usuario.perfil);
        },
    },
    Query: {
        usuario(_, args) {
            return db.find((db) => db.id === args.id);
        },
        usuarios: () => db,
    },
    Mutation: {
        criarUsuario(_, args) {
            const { email } = args;

            const usuarioExistente = db.some(u => u.email === email);

            if (usuarioExistente) {
                throw new Error(`Usuario existente: ${args.nome}`);
            }

            const novoUsuario = {
                ...args,
                id: geradorDeId(db),
                perfil: 2,
            };

            db.push(novoUsuario);
            return novoUsuario;
        },
    },
};

// console.log(geradorDeId(db))
