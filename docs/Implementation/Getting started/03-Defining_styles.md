<!-- 
Agregar fuentes personalizadas
Agregar íconos de la tienda app
Reemplazar íconos
-->
# Estilos globales en la plantilla

Los estilos globales en nuestra plantilla son esenciales para garantizar la coherencia visual en todos los componentes nativos. Estos estilos se definen y aplican para facilitar la personalización y mejorar la eficiencia al realizar cambios que afectan diferentes partes de la aplicación.

## Ajuste de valores y pautas de diseño

Es crucial ajustar los valores de los estilos globales para cumplir con las pautas de diseño de la aplicación en desarrollo. Por ejemplo, si queremos cambiar el color de fondo base de nuestra aplicación, simplemente modificamos el valor correspondiente dentro del objeto backgroundColor en el archivo de estilos global.

```ts
import type { GlobalStylesType } from './typeTest'

const GlobalStyles: GlobalStylesType = {
   // Background Colors
  backgroundColor: {
    base: '#ffffff',  // Background Colors
    baseInverted: '#03044e',
     // Other colors...
  },
```

## Consideraciones adicionales

Es importante tener en cuenta que los cambios en los estilos globales afectarán a todos los componentes nativos que los utilicen, a menos que se anulen con estilos personalizados. Por lo tanto, comprender cómo se aplican y ajustan estos estilos es esencial para mantener la coherencia visual en toda la aplicación.

## Ejemplos de uso de estilos globales en estilos personalizados

```css
text: {
   color: '#000', ...GlobalStyles.typography.heading1;
}
```

# Estilos de componentes específicos

Se proporciona una forma de modificar estilos de componentes específicos a través de un hook.

Esta implementación no solo agrega flexibilidad al proceso de desarrollo sino que también promueve la reutilización de componentes al permitir que se personalicen según las necesidades específicas de cada proyecto.

## Organización y estructura de estilos.

Para mantener la claridad y organización de estilos en los proyectos, se adopta una estructura específica. Los estilos se crearán en archivos individuales para cada pantalla o vista de la aplicación, como "home" o "auth". Estos archivos estarán ubicados dentro de la carpeta "styles" y tendrán la extensión ".ts".

Cada clase de estilo se nombrará siguiendo una convención simple: el nombre de la vista seguido del nombre del estilo, separados por un guión. Por ejemplo, para los estilos de la vista "home", podríamos tener una clase llamada "home-title".

Los estilos para cada vista se organizarán dentro de un archivo ".ts", utilizando un objeto para agruparlos. Dentro de este objeto, las claves de nivel superior representarán las clases de estilo para esa vista y cada clase, a su vez, será un objeto que contiene los estilos aplicables a las etiquetas del componente.

Para mantener la coherencia, el nombre de la constante que contiene los estilos de una vista será el nombre de la vista seguido de "Styles". Por ejemplo, para la vista "home", la constante se llamará "homeStyles".

A continuación se muestra un ejemplo de cómo se estructuran los estilos para la vista "home":

```ts
const homeStyles: Styles = {
  'home-text-1': { // Class name
    container: { // Class of the tag to which styles will be applied
      backgroundColor: 'pink', // CSS Property / Value
    },
    text: {
      color: 'black',
      fontSize: 20,
      textAlign: 'center',
    },
  },
  'home-text-2': {
    container: {
      backgroundColor: 'black',
    },
    text: {
      color: 'white',
      fontSize: 20,
      padding: 5,
    },
  },
}
```

## Uso de estilos (use el hook CustomStyles)

Para aplicar estilos a un componente, utilizamos el hook useCustomStyles. Este hook toma como argumento el nombre de la clase de estilo que queremos aplicar, la cual debe ser proporcionada vía props.

El hook devuelve un objeto `StyleSheet` que contiene los estilos definidos para esa clase en particular.

Usando el ejemplo anterior, supongamos que queremos aplicar los estilos definidos para la clase "home-text-1". Podemos hacerlo de la siguiente manera:

```ts
const styles = useCustomStyles('home-text-1');
```
Esto nos proporcionará el objeto que contiene los estilos definidos para la clase "home-text-1":

```ts
{
  container: {
    backgroundColor: 'pink',
  },
  text: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
  }, 
}
```

Finalmente, podemos aplicar fácilmente estos estilos a las etiquetas dentro del componente:

```tsx
<View style={styles.container}>
  <Text style={styles.text}>Example</Text>
</View>
```

## Estilos específicos para Android/iOS

En React Native, los estilos pueden variar según el sistema operativo en el que se ejecuta la aplicación. Para abordar esta variación, proporcionamos una solución flexible para aplicar estilos específicos para Android o iOS a una clase particular.

Para lograr esto, en nuestros estilos definimos el nombre de la clase de etiqueta seguido de un punto (.) y el nombre del sistema operativo. Por ejemplo: 'container.ios'.

```ts
{
  container: {
    backgroundColor: 'pink',
    padding: 20
  },
  'container.ios': {
    padding: 15
  },
}
```

En este ejemplo, si la aplicación se ejecuta en un dispositivo Android, solo se aplicarán los estilos definidos en 'contenedor'. Sin embargo, si se ejecuta en un dispositivo iOS, se aplicarán los estilos definidos tanto en 'container' como en 'container.ios', pero la última clase tendrá prioridad. Esto significa que si hay una clase repetida, se priorizarán los estilos específicos de la plataforma correspondiente (iOS o Android).

