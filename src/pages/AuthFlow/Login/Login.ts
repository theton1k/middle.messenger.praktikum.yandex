import widgets from '../../../widgets';
import context from '../../../data/context';
import { handlebarsCompile } from '../../../utils/handlebarsCompile.ts';

const LoginPage = widgets.AuthForm;

export default handlebarsCompile(LoginPage, context.login);
