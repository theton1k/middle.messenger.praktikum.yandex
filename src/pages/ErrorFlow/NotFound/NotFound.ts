import widgets from '../../../widgets';
import context from '../../../data/context';
import Handlebars from 'handlebars';

const NotFoundPage = widgets.ErrorBlock;

export default () => Handlebars.compile(NotFoundPage)(context.notFound);
