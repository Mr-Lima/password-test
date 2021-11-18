# Aplicação password-test

Objetivo  
Api para test de senhas

## Requisitos
- retornar se a senha é válida dentro das regras:
  - Nove ou mais caracteres
  - Ao menos 1 dígito
  - Ao menos 1 letra minúscula
  - Ao menos 1 letra maiúscula
  - Ao menos 1 caractere especial
    - Considere como especial os seguintes caracteres: !@#$%^&*()-+
  - Não possuir caracteres repetidos dentro do conjunto

## Como executar
- Caso deseje, já existe um ec2 com a aplicação rodando em http://ec2-18-228-240-46.sa-east-1.compute.amazonaws.com:3000/, caso contrário leia abaixo
- Clone o repositório
- é necessário NodeJS previamente instalado
- ``` npm run start ``` para transpilar e startar o servidor ou ``` npm run start:dev ``` para o modo de desenvolvimento com hot-reload
- por padrão o servidor estará na porta 3000, mas pode ser alterado em um arquivo .env com ``` PORT=INSIRA_PORTA_DESEJADA ``` ou no arquivo src/config/env.js

### Aplicação
- possui duas rotas
  - POST /api/v1/password 
    - body:  
    {"password": "senhasuperSegura!123"}
  - GET /api/v1/password/:password
    - criei esse endpoint apenas para facilitar quem estiver testando, já que pode usa-lo no navegador
    - exemplo:  
    /api/v1/password/senhasuperSegura!123

### Detalhes
- como a aplicação possui requisitos mínimos, tive que pensar em uma balança entre Over-engineering e mostrar demonstrar conhecimentos.  
  Com isso apliquei o seguinte:
- TDD
  - unitários
  - integração
- DDD
- Versionamento
- NO_LIST: apliquei também, além das regras de caracteres, uma lista de senhas fáceis que o usuário não poderia ter ex.:
  - P@SsW0rD
  - PasSword!1
- Claro que a bíblia do programador (clean code) sempre presente 
- outros detalhes como:
  - retrocompatibilidade para versões mais antigas de Node
  - padronização de código via linting
  - hot-reload, etc... 

### Observações

- Poderiam ter sido aplicadas N outras coisas, mas preferi não aumentar uma aplicação que deveria ser simples, entre elas:
  - factory patterns
  - validação regressiva
  - orientação funcional
  - emissão de eventos
  - auditoria, etc...

### Referências

- https://github.com/dhruvbird/regexp-js/blob/master/complexity.md e https://regex101.com/ para os regex
- https://nimbletext.com/ e https://passwordsgenerator.net/plus/ para fazer as massas de test
- e o rei de todos, https://stackoverflow.com/
