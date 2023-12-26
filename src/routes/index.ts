import { Request, Response, Router } from "express";

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.render('home')
})

router.get('/sobre', (req: Request, res: Response) => {
  res.send('Pagina Institucional ')
})

router.get('/contatos', (req: Request, res: Response) => {
  res.send('instagram e facebook ')
})

export default router