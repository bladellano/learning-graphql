module.exports = {
    db: [
        {
            id: 1,
            nome: 'Paulo',
            email: 'paulo@x.com.br',
            telefone:'+351 927860522',
            salario_liquido: 500.15,
            ativo: false,
            idade: 23,
            perfil: 1
        },
        {
            id: 2,
            nome: 'Ana',
            email: 'ana@x.com.br',
            telefone:'+351 927860541',
            salario_liquido: 2000.25,
            ativo: true,
            idade: 34,
            perfil: 2
        }
    ],
    perfis: [
        { id: 1, descricao: "ADMIN" },
        { id: 2, descricao: "NORMAL" }
    ]
}