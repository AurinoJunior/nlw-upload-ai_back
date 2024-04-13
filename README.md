<div align="center">
   <h3>Upload AI | Backend</h3>
</div>

<p align="center">
   <a href="https://www.instagram.com/aurigod97/">
      <img alt="Aurino Junior" src="https://img.shields.io/badge/-aurigod97-0390fc?style=flat&logo=Instagram&logoColor=white&color=blue" />
   </a>
    <a href="https://www.linkedin.com/in/aurino-junior-7718a4158/">
      <img alt="Aurino Junior" src="https://img.shields.io/badge/-Aurino%20Junior-0390fc?style=flat&logo=Linkedin&logoColor=white&color=blue" />
   </a>
</p>

📍 **Conteúdo**

- [Contexto](#blue_book-contexto)
- [Tecnologias](#computer-tecnologias)
- [Iniciando o projeto](#video_game-iniciando-o-projeto)
- [Como usar](#beers-como-usar)
- [Licença](#page_with_curl-licença)

## :blue_book: Contexto

Upload AI é uma aplicação que possibilita realizar upload de videos e por meio de IA, criar automaticamente títulos chamativos e descrições com um boa indexação, esse projeto foi dividido em 2 micro serviços um para o frontend e outro para o backend, **este é o backend**

## :computer: Tecnologias

- Node
- Fastify
- Prisma
- PNPM
- openai
- zod

## :video_game: Iniciando o projeto

1. Intale as dependencia usando `pnpm install`
2. Suba o servidor usando `pnpm run dev`
3. Clone o arquivo .env.example para .env substituindo o valor das variaveis de ambiente, **Importante ter uma chave de acesso do openai.**
4. O projeto estará disponivel no browser no endereço http://localhost:5173/

Na raiz do projeto existe um arquivo com a coleção de requests para o insomnia `insomnia.json`.

## :beers: Como usar

1. Rode as migrations da aplicação com `npx prisma migrate dev`
2. Importe o arquivo do insomnia no software para fazer as requests.
3. Na rota upload videos, adicione no campo `filename` o seu .mp3
4. Para ver o banco de dados rode `pnpm run studio`
5. Pegue o ID do audio que acabou de subir para joga na rota create transcription.
6. A request pode demorar um pouco mas o retorno irá te trazer a transcrição completa do audio.

## :page_with_curl: Licença

MIT
