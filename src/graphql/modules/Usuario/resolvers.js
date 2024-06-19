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
        criarUsuario(_, { data }) {
            const { email } = data;

            const usuarioExistente = db.some(u => u.email === email);

            if (usuarioExistente) {
                throw new Error(`Usuario existente: ${data.nome}`);
            }

            const novoUsuario = {
                ...data,
                id: geradorDeId(db),
                perfil: 2,
            };

            db.push(novoUsuario);
            return novoUsuario;
        },
        atualizarUsuario(_, { id, data }) {
            const usuario = db.find(u => u.id === id);
            const indice = db.findIndex(u => u.id === id);

            const updateUsuario = {
                ...usuario,
                ...data
            }

            db.splice(indice, 1, updateUsuario);

            return updateUsuario;
        },
        deletarUsuario(_, { filtro: { id, email } }) {

            if (id) {
                const usuarioEncontrado = db.find(u => u.id === id);
                const indice = db.findIndex(u => u.id === id);
                if (usuarioEncontrado)
                    db.splice(indice, 1)

                return !!usuarioEncontrado;
            } else {
                const usuarioEncontrado = db.find(u => u.email === email);
                const indice = db.findIndex(u => u.email === email);
                if (usuarioEncontrado)
                    db.splice(indice, 1)

                return !!usuarioEncontrado;
            }


        }
    },
};

// console.log(geradorDeId(db))
