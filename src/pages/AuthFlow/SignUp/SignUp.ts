import widgets from "../../../widgets";
import context from "../../../data/context";
import {handlebarsCompile} from "../../../utils/handlebarsCompile.ts";

const SignUpPage =  widgets.AuthForm

export default handlebarsCompile(SignUpPage, context.signUp)



