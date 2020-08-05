import express from 'express';
import routes from '../routes';
import { home, search, getUpload, postUpload } from '../controllers/videoController';
import { getLogin, postLogin, getJoin, postJoin, logout } from '../controllers/userController';

const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.upload, getUpload);
globalRouter.post(routes.upload, postUpload);

globalRouter.get(routes.search, search);
globalRouter.get(routes.home, home);
globalRouter.get(routes.logout, logout);

export default globalRouter;
