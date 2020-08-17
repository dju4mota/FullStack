import { Router } from 'express';
import appointmentRouter from './appointments.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';

const routes = Router();

routes.use('/appointments', appointmentRouter); // use => qualquer um dos 4 metodos
routes.use('/users', usersRouter); //
routes.use('/sessions', sessionsRouter); //

export default routes;
