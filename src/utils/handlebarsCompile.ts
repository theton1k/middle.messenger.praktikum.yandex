import Handlebars from "handlebars";

export const handlebarsCompile = (handlebarsComponent: string, context:{} = {}) => () => {
  return Handlebars.compile(handlebarsComponent)(context)
}




