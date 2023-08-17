import { Request, Response } from "express";
import {createMenuObject} from '../helpers/createMenuObject'


export const home = (req:Request, res:Response)=> {
    res.render('../views/pages/page',{
        menu:createMenuObject('all'),
        banner:{
            title:'all pets',
            background: 'allanimals.jpg'
        }
    })
    //res.render('pages/page')
};

export const dogs = (req:Request, res:Response)=> {
    res.render('../views/pages/page',{
        menu: createMenuObject("dog"),
        banner:{
            title:'dogs',
            background: 'banner_dog.jpg'
        }
    })
    //res.render('pages/page')
};

export const cats = (req:Request, res:Response)=> {
    res.render('../views/pages/page',{
        menu: createMenuObject('cat'),
        banner:{
            title:'cats',
            background: 'banner_cat.jpg'
        }
    })
};

export const fitshes = (req:Request, res:Response)=> {
    res.render('../views/pages/page',{
        menu: createMenuObject('fish'),
        banner:{
            title:'fitshes',
            background: 'banner_fish.jpg'
        }
    })
};