import { NextFunction, Request, RequestHandler, Response, Router } from 'express';
import { AuthController } from '../controllers/auth.controller';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();
const asyncHandler = (handler: (req: Request, res: Response) => Promise<void>): RequestHandler =>
	(req, res, next: NextFunction) => {
		void handler(req, res).catch(next);
	};

router.get('/me', authMiddleware, asyncHandler(AuthController.me));
router.post('/login', asyncHandler(AuthController.login));
router.post('/register', asyncHandler(AuthController.register));
router.post('/signup', asyncHandler(AuthController.register));
router.post('/demo', asyncHandler(AuthController.demoLogin));
router.post('/forgot-password', asyncHandler(AuthController.forgotPassword));

export default router;
