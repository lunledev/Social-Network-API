//default path for routes

//import {Router, Request, Response} from 'express';
import {Router} from 'express';

const router = Router();


import apiRoutes from './api/index.js';

router.use('/api', apiRoutes);

/*router.use((_req: Request, res: Response, next) => { 
  res.send('hit a snag!');
  next(new Error('Something went wrong!'));
   
});*/

export default router;



