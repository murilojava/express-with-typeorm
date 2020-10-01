# Projeto para start de um servidor express

### Então porque não usar um framework que já entrega tudo pronto?
### Talvez para ter o trabalho de configurar tudo?

Bom eu tentei utilizar alguns frameworks porém eu sempre esbarrava em ter que fazer algum gancho para me antender em alguns requisitos.
E esse é deve ser um base mais simples para para dar inicio a algumas demandas que tenho.
A proposta dele é deixar rodando typescript + express + typeorm
Ainda falta alguns pontos a serem tratados porém esse é uma proposta inicial
Vou colocar um midleware para autênticação JWT e tentar manter de forma simplificada.

É necessário configurar a conexão com o banco de dados que criando um arquivo .env raiz do projeto, tem um arquivo .env.example lá mostrando quais são as configurações necessárias.

Para executar o projeto em modo dev executar `npm run dev`