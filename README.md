# JGcourses

## Tecnlogias a serem utilizadas

- React
- Next
- Typescript
- FaunaDB
- Stripe
- NextAuth
- Styled-components

## Funcionalidades

- Autenticação do usuário com o Github utilizando o NextAuth
- Inscrição de usuários(autenticados) no curso utilizando a API do stripe
- Usuários inscritos no curso podem ter acesso à tela de cursos

## FaunaDB

- A collection de usuários deve ter um index para buscar o user pelo email
- Quando o usuário for para a checkout session pela primeira vez, deve ser inserido o id do stripe dele na collection
- Quando o usuário fizer a inscrição, devemos adicionar o campo isSubscribed: true para ele