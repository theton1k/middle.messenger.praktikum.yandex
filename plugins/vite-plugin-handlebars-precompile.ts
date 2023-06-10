import {PluginOption} from "vite";
import Handlebars from "handlebars"
export default function handlebars(): PluginOption {
  const fileRegex = /\.hbs$/;

  return {
    name: 'vite-plugin-handlebars-precompile',
    transform(src, filename){
      if(!fileRegex.test(filename)){
        return;
      }

      // language=javascript
      const code = `
        import Handlebars from 'handlebars/runtime'
        
        
        export default Handlebars.template(${Handlebars.precompile(src)})
      `

      return {
        code
      }
    }
  }
}
