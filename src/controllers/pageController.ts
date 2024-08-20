import { Request, Response } from "express";
import { title } from "process";
import { comidas } from '../models/comidas'

export const home = (req: Request, res: Response) => {
    let lista = comidas.pegarTodas()
    res.render('pages/page', {
        banner: {
            background: 'banner_home.png',
        },
        svg: {
            background: 'undraw_hamburger_re_7sfy.svg'
        },
        lista
    });
}

export const pizza = (req: Request, res: Response) => {
    let lista = comidas.filtrarPorTipo('pizza')

    res.render('pages/page', {
        banner: {
            title: 'Pizzas',
            background: 'pizza.jpg',
        },
        lista
    });
}

export const sucos = (req: Request, res: Response) => {

    res.render('pages/page', {
        banner: {
            title: 'Sucos',
            background: 'juices.jpg',
        }
    });
}

export const refrigerantes = (req: Request, res: Response) => {
    res.render('pages/page', {
        banner: {
            title: 'Refrigerantes',
            background: 'soft_drinks.jpg',
        }
    });
}

export const fast_food = (req: Request, res: Response) => {
    let lista = comidas.filtrarPorTipo('lanche')

    res.render('pages/page', {
        banner: {
            title: 'Lanches',
            background: 'fast_foods.jpg',
        },
        lista
    });
}

export const pratos = (req: Request, res: Response) => {
    let lista = comidas.filtrarPorTipo('prato')

    res.render('pages/page', {
        banner: {
            title: 'Pratos',
            background: 'dishes.jpg',
        },
        lista
    });
}