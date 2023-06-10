import widgets from "../../../widgets";
import context from "../../../data/context";
import {handlebarsCompile} from "../../../utils/handlebarsCompile.ts";

const ServerErrorPage = widgets.ErrorBlock

export default handlebarsCompile(ServerErrorPage, context.serverError)
