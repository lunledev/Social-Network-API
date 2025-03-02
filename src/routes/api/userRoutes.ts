import {Router} from 'express';
import { getAllUsers } from '../../controllers/userController';


const router = Router();

// /api/users
router.route('/').get(getAllUsers);


export default router;


