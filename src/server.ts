import express, { Request, Response } from "express";
import path, { dirname } from "path";
import mainRoutes from './routes/index';
import mustache from 'mustache-express';

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname,'views'));
server.engine('mustache',mustache());

server.use(express.static(path.join(__dirname,'../public')));
server.use(mainRoutes);

server.use((req: Request, res: Response) => {
  res.status(404).send('Página nao encontrada!')
});

server.listen(3000, () => {
  console.log("server rodando")
});




