import { ICategory } from './ICategory';
import { IOption } from './IOption';

export interface ISurvey
{   
    id : number,
    name : string,
    options : IOption[],
    Category : ICategory,
} 
