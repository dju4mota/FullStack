import { Router } from 'express';
import appointmentRouter from './appointments.routes';
import usersRouter from './users.routes';

const routes = Router();

routes.use('/appointments', appointmentRouter); // use => qualquer um dos 4 metodos
routes.use('/users', usersRouter); //

export default routes;
