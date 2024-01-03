import { Request, Response, Router } from 'express';
import * as FormControler from '../controllers/formControllers'; 
import * as HomeControllers from '../controllers/homeControllers';
import * as FormActionControllers from '../controllers/formActionControllers';

const router = Router();

//------------------------------------------------------------------------------------------------------------------------------------------------------------------

router.get ('/home', HomeControllers.home );


//------------------------------------------------------------------------------------------------------------------------------------------------------------------

router.get('/formulario',FormControler.form );


//-------------------------------------------------------------------------------------------------------------------------------------------------------------------

router.post('/formulario', FormActionControllers.formAction);

export default router;