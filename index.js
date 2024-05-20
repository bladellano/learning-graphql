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

const usuarios = [
    {
        id: 1,
        nome: 'Paulo',
        salario: 123.23,
        ativo: true,
        idade: 23
    },
    {
        id: 2,
        nome: 'Ana',
        salario: 2000.00,
        ativo: true,
        idade: 34
    },
    {
        id: 3,
        nome: 'Carlos',
        salario: 1500.50,
        ativo: false,
        idade: 45
    },
    {
        id: 4,
        nome: 'Mariana',
        salario: 3200.75,
        ativo: true,
        idade: 28
    },
    {
        id: 5,
        nome: 'Felipe',
        salario: 1750.80,
        ativo: true,
        idade: 31
    },
    {
        id: 6,
        nome: 'Bruna',
        salario: 2500.40,
        ativo: false,
        idade: 29
    },
    {
        id: 7,
        nome: 'Ricardo',
        salario: 2200.99,
        ativo: true,
        idade: 38
    },
    {
        id: 8,
        nome: 'Juliana',
        salario: 1800.25,
        ativo: true,
        idade: 26
    },
    {
        id: 9,
        nome: 'Fernando',
        salario: 2700.50,
        ativo: false,
        idade: 41
    },
    {
        id: 10,
        nome: 'Luciana',
        salario: 3000.00,
        ativo: true,
        idade: 37
    }
]

const produtos = [
    {
        id: 1,
        nome: 'Mouse',
        valor: 50.50
    },
    {
        id: 2,
        nome: 'Teclado',
        valor: 150.00
    },
    {
        id: 3,
        nome: 'Monitor',
        valor: 750.75
    },
    {
        id: 4,
        nome: 'Impressora',
        valor: 1200.40
    },
    {
        id: 5,
        nome: 'Notebook',
        valor: 3500.99
    },
    {
        id: 6,
        nome: 'Webcam',
        valor: 200.50
    },
    {
        id: 7,
        nome: 'Headset',
        valor: 180.25
    },
    {
        id: 8,
        nome: 'Cabo HDMI',
        valor: 25.00
    },
    {
        id: 9,
        nome: 'Pen Drive',
        valor: 45.75
    },
    {
        id: 10,
        nome: 'HD Externo',
        valor: 300.99
    }
]

const resolvers = {
    Query: {
        usuarios() {
            return usuarios
        },
        produtos() {
            return produtos
        },
        produto(_, args) {
            const { id, nome } = args

            if (id) return produtos.find(item => item.id == id)

            return produtos.find(item => item.nome == nome)
        },
        usuario(_, args) {
            const { id, nome } = args

            if (id) return usuarios.find(item => item.id == id)

            return usuarios.find(item => item.nome == nome)
        }
    }

}

const typeDefs = gql`

    type Produto {
        id:ID,
        nome: String,
        valor:Float
    }

    type Usuario {
        idade: String
        salario: Float
        nome: String
        ativo: Boolean
        id: ID,
    }

    type Query {
        usuarios: [Usuario]
        produtos: [Produto]
        produto(id:Int, nome:String): Produto
        usuario(id:Int, nome: String): Usuario
        tecnologias: [String!]!
    }
`

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen()