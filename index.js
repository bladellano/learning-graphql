const { gql, ApolloServer } = require("apollo-server")

const db = [{
    id: 1,
    nome: 'Paulo',
    salario_liquido: 500.15,
    ativo: false,
    idade: 23,
    perfil: 1
},
{
    id: 2,
    nome: 'Ana',
    salario_liquido: 2000.25,
    ativo: true,
    idade: 34,
    perfil: 2
}]

const perfis = [
    { id: 1, descricao: "ADMIN" },
    { id: 2, descricao: "NORMAL" }
]

const resolvers = {

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
        perfis() {
            return perfis
        }
    }
}

const typeDefs = gql`

    type Perfil {
        id: Int
        descricao: String
    }

    type Usuario {  
        idade: String
        salario: Float
        nome: String
        ativo: Boolean
        id: ID,
        perfil: Perfil
    }

    type Query {
        usuario(id: Int): Usuario
        perfis: [Perfil]
    }
`

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen()