const { gql, ApolloServer } = require("apollo-server")

/**
 * Scalar Types
 * - Int
 * - Float
 * - String
 * - Boolean
 * - ID 
 *  */

/**
 * => Schema
 * -> Schema Definition Language ou Linguagem de Definição de Esquema
 * -> SDL
 */

const resolvers = {
    Query: {
        id() {
            return 123456789
        },
        idade() {
            return 18
        },
        salario() {
            return 750.50
        },
        nome() {
            return 'GraphQL'
        },
        ativo() {
            return true
        },
        tecnologias() {
            return ['GraphQL', 'PHP', 'Javascript', 8]
        }
    }
}

const typeDefs = gql`
    type Query {
        idade: String
        salario: Float
        nome: String
        ativo: Boolean
        id: ID,
        tecnologias: [String!]!
    }
`

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen()