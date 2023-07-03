import { Router, Request, Response } from "express";
import * as pagesController from '../controllers/pageController';
import * as searchController from '../controllers/searchController';

const router = Router();

//Rotas
router.get('/',pagesController.home);
router.get('/dogs',pagesController.dogs);
router.get('/cats',pagesController.cats);
router.get('/fishes',pagesController.fishes);

// Rota de Busca
router.get('/search',searchController.search)

export default router;