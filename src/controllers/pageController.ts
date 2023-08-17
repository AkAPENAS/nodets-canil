import { Request, Response } from "express";
import {createMenuObject} from '../helpers/createMenuObject'
import {pet} from '../models/Pet'

export const home = (req:Request, res:Response)=> {
    let list = pet.getALL();

    res.render('../views/pages/page',{
        menu:createMenuObject('all'),
        banner:{
            title:'all pets',
            background: 'allanimals.jpg'
        },
        list
    })
    //res.render('pages/page')
};

export const dogs = (req:Request, res:Response)=> {
    let list = pet.getFromType('dog');

    res.render('../views/pages/page',{
        menu: createMenuObject("dog"),
        banner:{
            title:'dogs',
            background: 'banner_dog.jpg'
        },
        list
    })
    //res.render('pages/page')
};

export const cats = (req:Request, res:Response)=> {
    let list = pet.getFromType('cat');

    res.render('../views/pages/page',{
        menu: createMenuObject('cat'),
        banner:{
            title:'cats',
            background: 'banner_cat.jpg'
        },
        list
    })
};

export const fitshes = (req:Request, res:Response)=> {
    let list = pet.getFromType('fish');

    res.render('../views/pages/page',{
        menu: createMenuObject('fish'),
        banner:{
            title:'fitshes',
            background: 'banner_fish.jpg'
        },
        list
    })
};