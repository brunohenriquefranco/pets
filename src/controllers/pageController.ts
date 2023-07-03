import { Request, Response } from "express";

// Todos
export const home = (req:Request , res:Response)=>{
    res.send('Home no controller uzando padrao MVC')
}

// Cachorros
export const dogs = (req:Request , res:Response)=>{
    
}

//Gatos
export const cats = (req:Request , res:Response)=>{
    
}

//Peixes
export const fishes = (req:Request , res:Response)=>{
    
}