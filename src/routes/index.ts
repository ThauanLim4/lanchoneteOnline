import { Router } from "express";
import * as PageController from '../controllers/pageController'
import * as searchController from '../controllers/searchController'

const router = Router()

router.get('/', PageController.home);
router.get('/pizza', PageController.pizza);
router.get('/hamburguer', PageController.hamburguer);
router.get('/hotdog', PageController.hotdog);
router.get('/refrigerantes', PageController.refrigerantes);
router.get('/sucos', PageController.sucos);
router.get('/pratos', PageController.pratos);

router.get('/search', searchController.search);


export default router;