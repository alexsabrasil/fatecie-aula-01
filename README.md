### Unifatecie -  Curso: Bach. Sistema de Informação 4º Período 

# Projeto Consulta CEP

Este projeto permite a consulta de informações de endereço a partir de um cep (Código postal) brasileiro. Ele utiliza HTML, CSS, JavaScript e API para buscar dados do ViaCEP ([https://viacep.com.br/](https://viacep.com.br/))

**Antes da Correção**

Inicialmente, o código apresentava alguns problemas que impediam o funcionamento correto da busca de CEPs:

1. **CEP Inválido**: A função de validação do CEP não estava sendo chamada corretamente, e qualquer CEP digitado era considerado inválido.
2. **Erros de Sintaxe e Lógica**: Havia pequenos erros de sintaxe e lógica no código JavaScript que impediam a execução correta da função de busca.
3. **Mensagens de Erro Não Limpas**: As mensagens de erro não eram removidas corretamente, causando confusão ao usuário.
 
**Depois da Correção**

Após a correção, os problemas foram resolvidos e a busca de CEPs passou a funcionar corretamente:

1. **Validação Correta do CEP:** A função de validação foi ajustada para garantir que o CEP é validado corretamente antes de fazer a busca.
2. **Limpeza de Erros:** As mensagens de erro são removidas adequadamente antes de uma nova tentativa de busca.
3. **Exibição Correta dos Resultados:** Os resultados são exibidos corretamente na interface do usuário.

**Principais Ajustes:**

1. **Função clearErrors:**

 - Garantiu que os erros são removidos antes de uma nova busca.
   
2. **Função getCep:**

- Adicionou chamada para clearErrors antes de validar o CEP.
- Validou o CEP corretamente usando isCepValid.
- Tratou corretamente os erros da API e exibições de mensagens.

**Função addErrorMessage:**

- Garantiu que a mensagem de erro seja exibida apenas uma vez.

**Correção da Lógica de Busca:**

- Garantiu que a busca fosse realizada apenas com CEPs válidos e que os resultados fossem exibidos corretamente.

Com essas correções, o projeto de consulta de CEP agora funciona conforme o esperado, validando os CEPs corretamente e exibindo os resultados ou mensagens de erro apropriadas.

**Como executar o projeto**

1. Clone o repositório do projeto:

`git clone https://github.com/alexsabrasil/fatecie-aula-01.git` 

2. Navegue até o diretório do projeto:

`cd fatecie-aula-01`

3. Abra o arquivo `index.html` em um navegador ou use uma ferramenta como o Live Server no VS Code para rodar o projeto localmente.
4. Digite um CEP e clique no botão "Buscar" para ver os resultados.

## **Licença**

Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

##

Figma: https://www.figma.com/design/g8gJow9BcryB5CPjAVzrrS/Fatecie---Aula-01?node-id=0%3A1&t=bnzvyVJXlLFjQwki-1

Google Fonts: https://fonts.google.com/

### Professor: Victor Kamei Kay
### Aluna: Alexsandra Tavares
