import { Request, Response } from "express";
import {createMenuObject} from '../helpers/createMenuObject';
import {pets} from '../models/pet'

// Todos
export const home = (req:Request , res:Response)=>{

    let list = pets.getAll();

   res.render('pages/page', {
        menu: createMenuObject('all'),
        banner:{
            title: 'Todos os animais',
            background:'allanimals.jpg'
        },
        list
        
   });
}

// Cachorros
export const dogs = (req:Request , res:Response)=>{
    let list = pets.getFromTypes('dog');
    res.render('pages/page', {
        menu: createMenuObject('dog'),
        banner:{
            title: 'Cachorros',
            background:'banner_dog.jpg'
        },
        list
        
   });
}

//Gatos
export const cats = (req:Request , res:Response)=>{
    let list = pets.getFromTypes('cat');
    res.render('pages/page', {
        menu: createMenuObject('cat'),
        banner:{
            title: 'Gatos',
            background:'banner_cat.jpg'
        },
        list
        
   });
}

//Peixes
export const fishes = (req:Request , res:Response)=>{
    let list = pets.getFromTypes('fish');
    res.render('pages/page', {
        menu: createMenuObject('fish'),
        banner:{
            title: 'Peixes',
            background:'banner_fish.jpg'
        },
        list
        
   });
}