import { Request, Response } from "express";
import { title } from "process";

export const home = (req: Request, res: Response) =>{
    res.render('pages/page', {
        banner: {
            background: 'banner_home.png',
        }
    });
}

export const pizza = (req: Request, res: Response) =>{
    res.render('pages/page', {
        banner: {
            title: 'Pizzas',
            background: 'pizza.jpg',
        }
    });
}

export const sucos = (req: Request, res: Response) =>{
    res.render('pages/page', {
        banner: {
            title: 'Sucos',
            background: 'juices.jpg',
        }
    });
}

export const refrigerantes = (req: Request, res: Response) =>{
    res.render('pages/page', {
        banner: {
            title: 'Refrigerantes',
            background: 'soft_drinks.jpg',
        }
    });
}

export const fast_food = (req: Request, res: Response) =>{
    res.render('pages/page', {
        banner: {
            title: 'Lanches',
            background: 'fast_foods.jpg',
        }
    });
}

export const pratos = (req: Request, res: Response) =>{
    res.render('pages/page', {
        banner: {
            title: 'Pratos',
            background: 'dishes.jpg',
        }
    });
}