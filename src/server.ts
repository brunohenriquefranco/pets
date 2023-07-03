// Dependencias
import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';
//Rotas
import mainRoutes from './routes/index';


// Variaveis de ambiente 
dotenv.config();

const server = express();

// Configurando as dependencias
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache',mustache());

// Diretorio de produção
server.use(express.static(path.join(__dirname,'../public')));

//Rotas
server.use(mainRoutes);
server.use((req, res)=>{
    res.send("PAGINA NÃO ENCONTRADA!");
});

server.listen(process.env.PORT);
