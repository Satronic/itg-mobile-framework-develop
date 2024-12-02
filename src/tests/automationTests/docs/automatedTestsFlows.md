# Pruebas Automáticas de flujos básicos

Esta documentación detalla los flujos de prueba esenciales utilizados para garantizar el correcto funcionamiento de la aplicación. Cada prueba está diseñada para verificar aspectos críticos del funcionamiento de la aplicación.

---

## `Test 1: Flujo de Inicio de Sesión con Correo y Contraseña`

### Descripción

Este test valida el flujo de inicio de sesión utilizando correo y contraseña.

### Precondiciones

- Aplicación levantada.
- Sesión cerrada.
- Cuenta creada con correo y contraseña.

### Datos de Entrada

- Correo electrónico
- Contraseña

### Pasos de Ejecución

1. Se hace clic en el botón "Iniciar Ahora".
2. Se rellenan los campos de correo y contraseña.
3. Se hace clic en "Iniciar Sesión".
4. Una vez en la página de inicio, se comprueba que existe el header para verificar que se ha ingresado correctamente.

[Ver funcionamiento](https://drive.google.com/file/d/1cDNJPR__XxC_oQyDSHbZuj87tzPguAum/view?usp=sharing)

### Comando para Correr el Test

```bash
node loginTest.js
```

## `Test 2: Flujo de Búsqueda de Producto, Navegación hacia PLP y PDP`

### Descripción

Este test verifica el flujo de búsqueda de un producto, la navegación hacia la página de listado de productos (PLP) y la página de detalles del producto (PDP).

### Precondiciones

- Aplicación levantada.
- Sesión cerrada.

### Datos de Entrada

- Término de búsqueda (por ejemplo: _"camisa"_)

> Elegir un término que tenga productos disponibles!

### Pasos de Ejecución

1. Se ingresa como invitado.
2. Se realiza la búsqueda en la barra de búsqueda con el término establecido.
3. Se ingresa a la PLP.
4. Se comprueba que exista al menos un producto en la PLP.
5. Se ingresa a la PDP del primer producto.
6. Se comprueba que el nombre del producto esté visible en la PDP.

[Ver funcionamiento](https://drive.google.com/file/d/1QtYalC7h2mCZYXsNUorFMQXvSZHvO26S/view?usp=sharing)

### Comando para Correr el Test

```bash
node productSearchTest.js
```

## `Test 3: Flujo de Compra`

### Descripción

Este test valida el flujo de compra, incluyendo agregar un producto al carrito y completar la compra en el checkout.

### Precondiciones

- Aplicación levantada.
- Sesión cerrada.
- Cuenta creada con dirección agregada.
- Vitrina visible en la página de inicio (para agregar un producto).

### Datos de Entrada

- Email de la cuenta

### Pasos de Ejecución

1. Se ingresa como invitado.
2. Se agrega el primer producto de la vitrina al carrito.
3. Se ingresa al checkout.
4. Se comprueba que el producto esté en el checkout.
5. Se avanza en el proceso de compra.
6. Se rellenan los datos de usuario de prueba, utilizando el email especificado en los datos de entrada.
7. Se hace clic en "Continuar".
8. Se utiliza la dirección agregada en la cuenta por defecto.
9. Se continúa al pago.
10. Si existe una tarjeta guardada, se utiliza, estableciendo cuotas y código de tarjeta. Si no hay tarjeta guardada, se rellenan los campos con una tarjeta de prueba.
11. Se finaliza la compra.

[Ver funcionamiento](https://drive.google.com/file/d/1HNKVnmQZH8A6fRq7l5NO-H91HEzjBFLd/view?usp=sharing)

### Comando para Correr el Test

```bash
node buyProductTest.js
```

> Estos tests están pendientes de ser integrados en la integración continua de GitHub. Se actualizará la documentación cuando la integración esté completa.
