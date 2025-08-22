# Projeto Angular - Search d_evs

Aplicação Angular para busca de usuários e visualização de perfis do GitHub.
Foi usado para a estilização, tanto Material UI, quanto o css clássico. Assim, foi mostrado domínio em ambos os métodos. Alguns componentes foram 
feitos a mão, para ser o mais fiel possível ao layout disponibilizado.

## 🔧 Pré-requisitos

Antes de instalar o projeto, certifique-se de ter instalado em sua máquina:

- **Angular** versão 16.2.8.
- **Node.js** versão 18.x recomendada 
- **Gerenciador de pacotes**: npm 8.x 

## Para verificar se estão instalados:

node -v

npm -v

Caso o seu node seja o mais atual e o projeto apresentar avisos (warnings), ele rodará normalmente. Mas se desejar, pode mudar sua versão do node instalando o nvm no Windows. https://github.com/coreybutler/nvm-windows/releases

Depois de instalado o NVM do Windowns:

nvm list - vai mostrar todas as versões
nvm install (18.10.0) - versão escolhida
nvm use 18.10.0 - usar a versão ja baixada anteriormente

Agora verifique a versão do node e npm:

node -v

npm -v

## Instalação do projeto:
Clone o repositório:

Acesse o terminal na sua maquina com o CMD e digite: git clone https://github.com/limatechx/search-dev.git


Acesse a pasta do projeto:

cd seu-projeto


Instale as dependências:

npm install

 
Para rodar a aplicação localmente:

ng serve


A aplicação será executada em: http://localhost:4200/


Qualquer alteração no código será atualizada automaticamente no navegador.


Para gerar a build otimizada para produção:

ng build --prod

A build será gerada na pasta dist/


Você pode hospedar os arquivos gerados em qualquer servidor web.

## Estrutura do projeto


pages/: Contém os componentes que correspondem a cada página da aplicação (Home, Perfil).

github.service.ts: Contém serviços Angular, responsáveis por chamadas HTTP e lógica de negócio.

assets/: Imagens, ícones e arquivos estáticos usados no projeto. (Ex: Twitter-logo)

app.module.ts: Onde todos os módulos, componentes e serviços são registrados.

app-routing.module.ts: Define as rotas da aplicação.

📌 Observações
Use sempre a mesma versão do Node.js que está especificada na seção de pré-requisitos para evitar problemas com dependências.

Para instalar novas bibliotecas, utilize npm install 














