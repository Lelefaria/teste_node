import { Request, Response } from 'express';

export const formAction = (req: Request, res: Response) => {
  
  const name: string = req.body as string;
  

  res.render('formulario', {
    name
  });

};