import { Request, Response } from "express";

export const home = (req:Request, res:Response)=> {
    res.send('home in controller')
    //res.render('pages/page')
};

export const dogs = (req:Request, res:Response)=> {
    res.send('dogs in controller')
    //res.render('pages/page')
};

export const cats = (req:Request, res:Response)=> {
    //res.render('pages/page')
};

export const fitshes = (req:Request, res:Response)=> {
    //res.render('pages/page')
};