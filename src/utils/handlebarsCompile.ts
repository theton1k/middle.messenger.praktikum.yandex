import Handlebars from 'handlebars';
import { TGlobalContext } from '../data/context';

export const handlebarsCompile =
  (handlebarsComponent: string, context?: TGlobalContext) => () => {
    return Handlebars.compile(handlebarsComponent)(context);
  };
