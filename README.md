# Aplicativo de Previsão do Tempo

Uma aplicação web simples que fornece informações meteorológicas em tempo real para qualquer cidade utilizando a API OpenWeatherMap. O aplicativo exibe a temperatura atual, descrição das condições meteorológicas, umidade, velocidade do vento e a bandeira do país com base na localização da cidade.

## Funcionalidades

- Busca de dados meteorológicos por nome da cidade
- Exibe a temperatura em Celsius
- Fornece uma descrição das condições do tempo
- Mostra a bandeira do país com base na cidade selecionada
- Exibe a umidade e a velocidade do vento
- Ícones de condições meteorológicas baseados no clima atual

## Tecnologias Utilizadas

- **HTML5**: Para estruturar o layout da aplicação
- **CSS3**: Para estilizar a interface do usuário
- **JavaScript (ES6)**: Para buscar dados da API e atualizar dinamicamente o DOM
- **API OpenWeatherMap**: Para obter os dados meteorológicos
- **FlagsAPI**: Para exibir as bandeiras dos países com base na cidade

## Como Executar o Projeto

### Pré-requisitos

Você precisará ter os seguintes itens instalados:

- Um navegador moderno (ex: Chrome, Firefox)
- Um editor de texto (ex: VS Code, Sublime Text)
- Chave da API do [OpenWeatherMap](https://home.openweathermap.org/users/sign_up)

### Configuração

1. Clone o repositório para sua máquina local:

    ```bash
    git clone https://github.com/seu-usuario/weather-forecast-app.git
    ```

2. Navegue até o diretório do projeto:

    ```bash
    cd weather-forecast-app
    ```

3. Abra o arquivo `index.html` no seu navegador.

4. Substitua `YOUR_API_KEY_HERE` no arquivo JavaScript pela sua própria chave da API OpenWeatherMap.

    ```js
    const APIKey = 'YOUR_API_KEY_HERE';
    ```

## Como Usar

1. Digite o nome da cidade no campo de entrada.
2. Clique no botão de pesquisa para obter as informações meteorológicas para essa cidade.
3. O aplicativo exibirá a temperatura, descrição do tempo, umidade, velocidade do vento e a bandeira do país da cidade selecionada.

## Exemplo

![Captura de Tela do Aplicativo](caminho/para/captura-de-tela.png)

## Estrutura do Projeto

weather-forecast-app/ │ ├── index.html # Arquivo HTML principal ├── style.css # Arquivo de estilos da aplicação ├── script.js # Lógica principal em JavaScript └── README.md # Documentação do projeto

## Referências de API

- [API OpenWeatherMap](https://openweathermap.org/api) - Fornece dados meteorológicos
- [FlagsAPI](https://flagsapi.com) - Fornece bandeiras de países

## Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.