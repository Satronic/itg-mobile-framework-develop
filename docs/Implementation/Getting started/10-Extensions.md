# Extensiones para Visual Studio Code

En el área de tecnología, nos esforzamos por mejorar continuamente nuestra productividad y la calidad de nuestro código. Una de las formas en que lo hacemos es mediante el uso de Visual Studio Code (VSCode) junto con una selección de extensiones.

## Extensiones recomendadas

### Extensiones de calidad del código

1. [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): Prettier es una herramienta de formateo de código que garantiza un estilo consistente de codificación en todo el proyecto. Automáticamente reformatea los archivos según las reglas configuradas, lo que ayuda a mantener una base de código limpia y legible.
Ejemplo de configuración de archivo prettierrc.js:

```js
module.exports = {
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: false,
  singleQuote: true,
  trailingComma: 'all',
};
```

2. [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): ESLint es una herramienta de análisis estático de código para identificar y reportar patrones problemáticos en el código JavaScript y TypeScript. Ayuda a mantener un código limpio y consistente al adherirse a las reglas definidas en el proyecto.
Ejemplo de configuración de archivo eslintrc.js:

```js
module.exports = {
  root: true,
  extends: '@react-native',
};
```

### Extensiones de colaboración en equipo

1. [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig): EditorConfig for VS Code garantiza que todos los miembros del equipo sigan las mismas convenciones de estilo de código, como la indentación y el formato de archivos, independientemente de la configuración de su editor.
Ejemplo de configuración de archivo .editorconfig:

```js
# editorconfig.org
root = true

[*]
end_of_line = lf
insert_final_newline = true
indent_style = space
indent_size = 2
charset = utf-8
trim_trailing_whitespace = true

[*.md]
trim_trailing_whitespace = false
```

2. [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens): GitLens proporciona una integración potente de Git en VSCode, permitiendo una visión detallada de la historia del repositorio, seguimiento de cambios, autoría del código y más. Esta extensión es invaluable para colaborar en proyectos de desarrollo.
Ejemplo de uso:

![Git Lens](./imagenes/git-lens.png)

3. [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare): Live Share permite la colaboración en tiempo real dentro de VSCode. Con esta extensión, puedes compartir tu entorno de desarrollo con otros miembros del equipo, permitiendo la codificación en colaboración, depuración y edición de código en tiempo real.
Ejemplo de uso:

![Live Share](./imagenes/live-share.png)

### Otras extensiones

1. [Import Cost](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost): Import Cost muestra el tamaño de los paquetes importados en tu código, lo que te ayuda a identificar y eliminar dependencias innecesariamente grandes que podrían afectar el rendimiento de la aplicación.
Ejemplo de uso:

![Import Cost](./imagenes/import-cost.png)

2. [Turbo Console Log](https://marketplace.visualstudio.com/items?itemName=ChakrounAnas.turbo-console-log): Turbo Console Log agiliza el proceso de depuración al generar rápidamente declaraciones de registro de consola para las variables seleccionadas. Esto ayuda a reducir el tiempo necesario para depurar y comprender el flujo de ejecución del código.
Ejemplo de uso:

![Turbo Console Log](./imagenes/turbo-console-log.png)

#### Recuerda

Si bien estas extensiones son útiles para mejorar la productividad y la calidad del código, es importante recordar que las necesidades y preferencias personales pueden variar. Te alentamos a que explores y pruebes diferentes extensiones para encontrar las que mejor se adapten a tu flujo de trabajo y proyectos específicos.

Además, para asegurarte de aprovechar al máximo cada extensión, te recomendamos que revises la documentación oficial de cada una. Allí encontrarás información detallada sobre cómo configurarlas según tus necesidades específicas, así como una descripción de las diferentes opciones y funcionalidades que ofrecen.

¡Bienvenido/a a nuestro equipo y esperamos que estas extensiones te ayuden a tener una experiencia de desarrollo fluida y productiva!
