<!-- 
Documentar la configuración por cada provider de Ecommerce
Documentar la configuración por cada provider de CMS
Renombrar la tienda 
-->

# Estructura del proyecto

El proyecto sigue una estructura típica de una aplicación de React Native, con la adición de una configuración específica en el archivo plugins.config.js ubicado en la raíz del proyecto.

## Carpeta src

La carpeta src contiene los archivos principales de la aplicación. Aquí se encuentran las siguientes subcarpetas:

components: Esta carpeta contiene los componentes propios o personalizados de la tienda (si aplica), como botones, tarjetas, barras de navegación, etc. Si la tienda que se quiere construir no requiere personalización en la lógica de los componentes base o algún componente personalizado, esta carpeta puede estar vacía.

styles: Aquí se almacenan los estilos globales y específicos de la aplicación, como hojas de estilo, temas y variables.

tests: Esta carpeta contiene los archivos de pruebas automatizadas para asegurar los flujos de compra principales de la aplicación.

index.js: Este archivo sirve como punto de entrada principal de la aplicación, donde se realiza la inicialización de React Native y se monta el componente raíz de la aplicación envíandole la información requerida al componente Core del framework.

## Archivo plugins.config.js

El archivo plugins.config.js en la raíz del proyecto es responsable de especificar la configuración del CMS (Sistema de Gestión de Contenidos) y la plataforma de comercio electrónico que se utilizarán en la aplicación. Este archivo puede contener la siguiente información:

Configuración del CMS: Se pueden incluir detalles como las claves de acceso, la configuración de autenticación, etc.

Configuración de la plataforma de ecommerce: Aquí se pueden definir detalles como las claves de autenticación, las configuraciones generales de la cuenta, etc.

Integraciones de plugins: Si la aplicación utiliza plugins o extensiones específicas para el CMS o la plataforma de ecommerce, estas configuraciones también pueden incluirse aquí.

Ejemplo de plugins.config.js:

```javascript
module.exports = {
  plugins: [
    {
      resolve: `itg-cms-plugin`,
      options: {
        provider: `itg`,
        account: `itglobers`,
        workspace: `master`,
      },
    },
    {
      resolve: `itg-ecommerce-plugin`,
      options: {
        provider: `vtex`,
        account: `itglobers`,
        workspace: `master`,
        culture: {
          country: 'COL',
          currency: 'COP',
          customCurrencyDecimalDigits: 0,
          customCurrencySymbol: '$',
          language: 'es',
          locale: 'es-CO',
        },
      },
    },
  ],
}
```

Esta estructura y el archivo de configuración proporcionan una base sólida para comenzar a desarrollar la aplicación de comercio electrónico en React Native, permitiendo una fácil expansión y personalización según las necesidades del proyecto.
