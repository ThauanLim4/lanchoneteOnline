import { Request, Response } from "express";
import { comidas } from '../models/comidas'

export const search = (req: Request, res: Response) =>{
    let query: string = req.query.res as string

    if(!query){
        res.redirect('/')
        return
    }

    let lista = comidas.filtrarPorNome(query)
    res.render('pages/page', {
        lista,
        query
    })    
}