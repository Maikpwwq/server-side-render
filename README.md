# server-side-render
React, Router, Redux, Webpack, Babel

Decidi actualizar las dependencias del repositorio:
> https://github.com/platzi/PlatziVideo/tree/feature/server-side-render-2020 

**Fue necesario:**

- Se actualizan importaciones de modulos para react-router-dom:
> https://reactrouter.com/docs/en/v6/guides/ssr
- Importante comprender las actualizaciones de la version v5 -> v6:
> https://reactrouter.com/docs/en/v6/upgrading/v5
- react-hot-loader esta obsoleto y ha sido reemplazado por react-refresh 
- Se implementa react-refresh para Webpack a traves del pluggin:
https://github.com/pmmmwh/react-refresh-webpack-plugin
- Loaders
Webpack Assets Modules https://webpack.js.org/guides/asset-modules
- Destacar ademas que useEffect se ejecuta después del procesamiento. No se ejecuta en el renderizado del lado del servidor.
> https://redux.js.org/usage/server-rendering
> https://www.npmjs.com/package/@redux-devtools/extension
- Se actualiza acceso a props, disponiendo acciones hacia el store desde el contenedor Player
```
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useStore } from 'react-redux';
```

**Resultado del codigo visible en el repositorio:**
> https://github.com/Maikpwwq/server-side-render/tree/feature/2022
Clonar el repositorio y ejecutar con:
'''
nvm use --lts
npm rebuild node-sass
npm run start:dev
'''