import { Request, Response } from "express";
import {createMenuObject} from '../helpers/createMenuObject';
import {pets} from '../models/pet';

export const search = (req:Request , res:Response)=>{
    let query:string = req.query.q as string;

    let list = pets.getFromName(query);

    if(!query){
        res.redirect('/');
        return;

    }
        res.render('pages/page',{
            menu: createMenuObject(''),
            list,
            query


        });
}