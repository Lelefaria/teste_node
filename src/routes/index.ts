import { Request, Response, Router } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send('ola mundo ')
})

router.get('/sobre', (req: Request, res: Response) => {
  res.send('Pagina Institucional ')
})

router.get('/conato', (req: Request, res: Response) => {
  res.send('instagram e facebook ')
})

export default Router