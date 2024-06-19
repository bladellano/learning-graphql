## Comandos (organizar readme)

### Instalação:

npm init -y

npm i -D nodemon

npm i graphql apollo-server

---

npm start

`http://localhost:4000/`

### Extension:

Install the VSCode GraphQL Extension (Orsen Kucher)

---

### Organizar codigo

`npm run format`

### Exemplos:

```
query pesquisaDeUsuario($id: Int) {
  usuario(id: $id) {
    nome idade
  }
}
```

```
query pesquisaDeUsuario($id: Int) {
  usuario(id: $id) {
    nome idade
    perfil {
      id descricao
    }
  }
}
```

```
query pesquisaDeUsuario($id: Int, $comPerfil: Boolean!) {
  usuario(id: $id) {
    nome idade
    perfil @include(if:$comPerfil){
      id descricao
    }
  }
}
#variables
{
  "id":1,
  "comPerfil":false
}
```

```
query pesquisaDeUsuario($id: Int, $comPerfil: Boolean!, $pular:Boolean!) {
  usuario(id: $id) {
    nome idade
    salario @skip(if:$pular)
    perfil @include(if:$comPerfil){
      id descricao
    }
  }
}
#variables
{
  "id":1,
  "comPerfil":false,
  "pular": false
}
```

```
query {
  primeiroUsuario: usuario(id:1) {
   id
   ...camposUsuario
  }

  segundoUsuario: usuario(id:2) {
   ...camposUsuario
  }
}

fragment camposUsuario on Usuario{
     nome idade perfil {
      id descricao
    }
}
```
