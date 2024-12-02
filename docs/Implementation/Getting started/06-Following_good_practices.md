# Buenas prácticas para el desarrollo de la aplicación

Desarrollar una aplicación de comercio electrónico requiere seguir una serie de buenas prácticas para garantizar la calidad del código y la eficiencia del proceso de desarrollo. A continuación, se detallan algunas de estas prácticas:

## Diligenciar correctamente la plantilla de información para subir un Pull Request

Al enviar cambios al repositorio a través de un pull request, es importante proporcionar una descripción detallada de los cambios realizados. Esto incluye una explicación clara del propósito de los cambios, las nuevas características implementadas o los problemas resueltos. Además, asegúrate de seguir las pautas de contribución establecidas por el proyecto.

## Atender los errores y/o advertencias de los bots de GitHub Actions

GitHub Actions está configurado en el proyecto para ejecutar análisis de código estático con ESLint, asegurándote de que tu código cumpla con las convenciones de estilo y las mejores prácticas de codificación. Presta atención a los errores y advertencias que notifican los bots de GitHub Actions y resuélvelos antes de fusionar los cambios en la rama principal.

## Implementar pruebas unitarias a los componentes personalizados

Asegúrate de escribir pruebas unitarias para los componentes personalizados. Usamos bibliotecas de pruebas como Jest y @testing-library/react-native para escribir pruebas que cubran diferentes casos de uso y escenarios. Las pruebas unitarias garantizan el correcto funcionamiento de los componentes y ayudan a prevenir regresiones durante el desarrollo.

## Manejar el registro de Ccambio de versiones en el archivo CHANGELOG

Mantén un registro detallado de los cambios realizados en la aplicación en el archivo CHANGELOG. Documenta cada versión de la aplicación junto con una lista de cambios, nuevas características, correcciones de errores y cualquier otra información relevante. Esto facilita el seguimiento de la evolución de la aplicación y ayuda a los colaboradores a comprender los cambios introducidos en cada versión.

Ejemplo de Archivo CHANGELOG:

```shell
# Cambios Recientes

## [1.1.0] - 2024-03-28
### Agregado
- Nueva funcionalidad de búsqueda avanzada.
- Componente de filtro de productos personalizado.

### Corregido
- Solucionado el problema de carga lenta en la pantalla de inicio.

## [1.0.1] - 2024-03-15
### Corregido
- Corregido el error de renderizado en el carrito de compras.
```

Al seguir estas buenas prácticas, podrás mantener un proceso de desarrollo organizado y eficiente, asegurando la calidad y la confiabilidad de la tienda.
