# Frameworks soportados

Fireploy posee un número limitado de frameworks disponibles para despliegue, existen algunas que requieren una sintaxis especial para sus variables de entorno, así como otras difieren en su complejidad de configuración.

## 1. React

Se soporta ReactJS en conjunto con la herramienta de compilación Vite.

Debido a la incorporación de Vite, resultaría indispensable agregar el prefijo `VITE` a cualquier variable de entorno. Por ejemplo si se quisiese añadir una variable NOMBRE_UNIVERSIDAD, quedaría de la siguiente manera:

```
    VITE_NOMBRE_UNIVERSIDAD = Universidad Francisco de Paula Santander
```

Para realizar el llamado a la variable de entorno usamos la siguiente notación `import.meta.env.NOMBRE_VARIABLE`:

```ts
    function printUniversity(){
        console.log(import.meta.env.VITE_NOMBRE_UNIVERSIDAD)
    }
```

No obstante, al momento de declarar la variable, Fireploy incorpora automaticamente este prefijo, por lo cual, pueden ingresarse de manera normal.

### 1.1. React con Typescript

1. Debe configurarse el archivo `vite.config.ts` para que presente la siguiente información:

```ts title="vite.config.ts"
import { ConfigEnv, defineConfig, loadEnv, UserConfigExport } from "vite";
import react from "@vitejs/plugin-react";

export default ({ mode }: ConfigEnv): UserConfigExport => {
  const env = loadEnv(mode, process.cwd());

  return defineConfig({
    base: `${env.VITE_BASE_PATH}`,
    plugins: [react()],
    server: {
      port: parseInt(env.VITE_PORT),
      host: true,
    },
    preview: {
      port: parseInt(env.VITE_PORT),
      host: true, // permite 0.0.0.0
    },
  });
};
```

2. Llamar la variable de entorno `VITE_BASE_PATH` en el `createBrowserRouter` del proyecto, quedando de la siguiente manera:

```ts title="router.ts"
export const router = createBrowserRouter(
  [
    {
      path: "/",
      errorElement: <Error />,
      children: [
        //Enrutamiento del aplicativo...
      ],
    },
  ],
  {
    basename: import.meta.env.VITE_BASE_PATH,
  }
);
```

### 1.2. React con Javascript

1. Debe configurarse el archivo `vite.config.ts` para que presente la siguiente información:

```js title="vite.config.js"
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return defineConfig({
    base: `${env.VITE_BASE_PATH}`,
    plugins: [react()],
    server: {
      port: parseInt(env.VITE_PORT),
      host: true,
      cors: true,
      allowedHosts: ["proyectos.fireploy.online"],
    },
    preview: {
      port: parseInt(env.VITE_PORT),
      host: true, // permite 0.0.0.0
      cors: true,
      allowedHosts: ["proyectos.fireploy.online"],
    },
  });
};
```

2. Llamar la variable de entorno `VITE_BASE_PATH` en el `createBrowserRouter` del proyecto, quedando de la siguiente manera:

```js title="router.js"
const router = createBrowserRouter(
  [
    {
      path: "/",
      //Enrutamiento del aplicativo...
    },
  ],
  // Base path where the app is hosted
  {
    basename: import.meta.env.VITE_BASE_PATH,
  }
);
```

## 2. NextJS

Similar a la configuración de React en el sentido de requerirse de un prefijo, en este caso seria: `NEXT_PUBLIC_*`

### 2.1. Configurar next.config.mjs

El archivo requiere contener la siguiente información:

```js title="next.config.mjs"
    /** @type {import('next').NextConfig} */
    const nextConfig = {
    basePath: process.env.NEXT_PUBLIC_BASE_PATH,
    assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH,
    };

    export const getSrcImage = (s) => {
    return `${process.env.NEXT_PUBLIC_BASE_PATH}/${s}`;
    };

    export default nextConfig;
```

### 2.2. Referenciar imágenes

Debido a que se configuró un **basepath**, se van a perder las referencias a las imagenes ubicadas en el código del aplicativo. Para preservar su funcionamiento, se dispone de la función `getSrcImage`, en la cual se llama la ruta local de la imagen, y se le agrega el basepath. Esto debe realizarse con cada imagen.

```jsx title="ejemplo.jsx"
      <img
              src={getSrcImage("database-fill.svg")}
              alt="Database Icon"
              className="iconElement"
        />
```

## 3. Angular

Se requiere establecer el basePath en el archivo **app.component.ts**:

```ts title = "app.component.ts"

import { APP_BASE_HREF } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '../environments/environment';
import { DOCUMENT } from '@angular/common'; // Usamos @angular/common

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [{ provide: APP_BASE_HREF, useValue: environment.basePath }], // Usa el valor desde environment.basePath
})
export class AppComponent {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit(): void {
    // Accedemos a todos los elementos <base> en el documento
    const bases = this.document.getElementsByTagName('base');

    // Verificamos que haya al menos un elemento <base>
    if (bases.length > 0) {
      // Establecemos dinámicamente el atributo href de la primera etiqueta <base>
      bases[0].setAttribute('href', environment.basePath);
    }
  }

  title = 'template-Angular';
}

```

Verificamos que se acceda al **routes** adecuado:

```ts title = "app.config.ts"

import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
};

```

## 4. Tecnologías backend de NodeJS

Entre este tipo de tecnologías soportadas por el sistema, tenemos las siguientes:

- NodeJS (propiamente)
- ExpressJS

Solo requerimos establecer un **router** que referencie el path_name en el archivo `App.js`:

```js title='app.js
    var createError = require('http-errors');
    var express = require('express');
    var path = require('path');
    var cookieParser = require('cookie-parser');
    var logger = require('morgan');

    var indexRouter = require('./routes/index');
    var usersRouter = require('./routes/users');
    const { zstdDecompress } = require('zlib');
    const basePath = process.env.BASE_PATH || '/app';
    var app = express();

    // view engine setup
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');

    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
    app.use(express.static(path.join(__dirname, 'public')));

    /***
     * Declaración del router
    ***/
    const router = express.Router();
    router.use(express.static(path.join(__dirname, 'public')));
    router.use('/', indexRouter);
    router.use('/users', usersRouter);zstdDecompress

    app.use(basePath, router);

    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
    next(createError(404));
    });

    // error handler
    app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
    });

    module.exports = app;
```

## 5. SpringBoot

En el archivo `application.properties`, agregamos las siguientes dos líneas:

``` title="application.properties"
    server.servlet.context-path=${BASE_PATH}
    server.port=${PORT}
```

## 6. FastAPI

Debe hacerse lectura de las variables de entorno en el archivo `db.py`:

``` title= 'config/db.py'
import os
from fastapi import Depends
from sqlmodel import SQLModel
from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import sessionmaker
from typing import AsyncGenerator, Annotated
from dotenv import load_dotenv
load_dotenv()

PROTOCOLE = "postgresql+asyncpg"
DB_USER = os.getenv("DB_USER")
DB_PASSWORD = os.getenv("DB_PASSWORD")
DB_HOST = os.getenv("DB_HOST")
DB_PORT = os.getenv("DB_PORT")
DB_DATABASE = os.getenv("DB_DATABASE")
DATABASE_URI = f"{PROTOCOLE}://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_DATABASE}"
DATABASE_URL=os.getenv("DATABASE_URL")

engine = create_async_engine(DATABASE_URL, echo=True)

AsyncSessionLocal = sessionmaker(
    bind=engine, class_=AsyncSession, expire_on_commit=False
)


async def init_db():
    async with engine.begin() as conn:
        await conn.run_sync(SQLModel.metadata.create_all)


async def get_session() -> AsyncGenerator[AsyncSession, None]:
    async with AsyncSessionLocal() as session:
        yield session


SessionDep = Annotated[AsyncSession, Depends(get_session)]
```

Igualmente definimos el base_path en `main.py`:


``` title = "main.py"

import os
from fastapi import FastAPI, APIRouter
from fastapi.middleware.cors import CORSMiddleware
from routes import auth_route, category_route, faq_route, resource_route, user_route
from dotenv import load_dotenv
load_dotenv()

prefix = os.getenv("BASE_PATH", "/default")
app = FastAPI()
main_router = APIRouter(prefix=prefix)
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

main_router.include_router(user_route.router)
main_router.include_router(auth_route.router)
main_router.include_router(resource_route.router)
main_router.include_router(category_route.router)
main_router.include_router(faq_route.router)

app.include_router(main_router)
@app.get("/")
def read_root():
    return {"Hello": "World"}

```