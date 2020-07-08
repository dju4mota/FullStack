import { Router } from 'express';
import appointmentRouter from './appointments.routes';

const routes = Router();

routes.use('/appointments', appointmentRouter); // use => qualquer um dos 4 metodos

export default routes;
