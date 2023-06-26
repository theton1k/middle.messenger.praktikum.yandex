import widgets from '../../../widgets';
import context from '../../../data';
import Handlebars from 'handlebars';

const NotFoundPage = widgets.ErrorBlock;

export default () => Handlebars.compile(NotFoundPage)(context.notFound);
