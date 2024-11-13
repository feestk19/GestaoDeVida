#Visão Geral
Este projeto foi desenvolvido utilizando a stack Electron para a interface gráfica e .NET para o backend. A ideia é criar uma aplicação desktop multiplataforma que oferece funcionalidades para controle de dados pessoais, como registros financeiros, lembretes e visualização de previsões financeiras.

#Instalação
##Requisitos
Antes de iniciar a instalação, verifique se você tem os seguintes requisitos:

- Node.js (versão 16 ou superior) – necessário para o gerenciamento de pacotes.
- Electron – framework para criar a interface desktop.
- .NET 6 ou superior – para o backend da aplicação.

#Como instalar

1. Clone o repositório:

Primeiro, faça o clone do repositório para a sua máquina local:

git clone https://github.com/feestk19/GestaoDeVida.git
cd GestaoDeVida

2. Instale as dependências:

Execute o seguinte comando para instalar as dependências do Node.js:

npm install

3. Instale as dependências do .NET:

Caso ainda não tenha o .NET SDK instalado, siga as instruções no link: https://dotnet.microsoft.com/pt-br/download para instalar a versão adequada.

Depois, instale as dependências do backend executando:
dotnet restore

4. Rode a aplicação:

Para rodar o servidor backend, execute o seguinte comando:
dotnet run --project C:/DEV/PROJETOS_MASTER/GESTAO_VIDA/GESTAO_VIDA/GESTAO_VIDA.csproj

Para rodar o Electron, execute:
npm run electron

5. Crie o build (opcional):

Caso queira gerar a versão empacotada da aplicação, execute o comando:
npm run dist

Isso criará o instalador da aplicação (por exemplo, um .exe para Windows ou .dmg para macOS).

#USO
Após a instalação, basta executar o seguinte comando para iniciar a aplicação:

npm run dev
Isso abrirá a interface do Electron, conectada ao backend feito com .NET.

##Funcionalidades Principais
- Gerenciamento Financeiro: Adicione, edite e visualize seus registros financeiros.
- Previsões Financeiras: Visualize previsões de saldo com base nos seus registros.
- Lembretes: Defina lembretes para ações financeiras.

#Contribuindo
Se você deseja contribuir para o desenvolvimento do Gestão de Vida, siga os passos abaixo:

1. Faça um fork deste repositório.
2. Crie uma branch para suas modificações (git checkout -b feature/novafeature).
3. Faça as modificações necessárias e adicione os testes.
4. Envie as mudanças para o repositório remoto (git push origin feature/novafeature).
5. Abra um pull request explicando suas mudanças.

Certifique-se de que seus commits sigam a convenção de mensagens de commit e que seu código esteja devidamente testado.

#Licença
Este projeto é licenciado sob a licença MIT - veja o arquivo LICENSE para mais detalhes.

#Contato

Autor: Fellipe Strombeck
Email: fellipe.strombeck@gmail.com
GitHub: https://github.com/feestk19