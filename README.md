# Cardify

## Descripción:

### ¿Cómo funciona?

Cardify es un plugin de jQuery que aplica un efecto de hover a tus imágenes envolviendolas en una etiqueta `<figure>`,   rescatando su descripción del atributo `alt` e insertando el texto en una etiqueta `<figcaption>`. Es fácil de usar y rápido de configurar.

## Instalación

### Global (navegador)

#### .html
```
<script src="dist/app.js"></script>
```

## Uso

#### .js
```
/*
 * `container` es el selector del contenedor donde se buscarán todas las
 * imágenes a ser procesadas.
 */
 
$(container).cardify({});
var cardify = require('cardify');
```

1. Para que el plugin funcione en tu proyecto primero debes inicializar tu proyecto en la terminal con el comando

   `npm init`

2. Descargar cardify desde tu terminal con el comando

   `npm install cardify`

3. Para que tu proyecto se vea en el navegador debes instalar [**Browserify**](http://browserify.org/) de manera global en tu computadora con el siguiente comando en tu terminal

   `npm install -g browserify`

   y luego ejecutarlo de la siguiente manera para crear la carpeta donde se guardará tu código modificado

   `browserify src/app.js -o dist/app.js`

4. Enlaza el archivo 'Browserificado en tu .html'

   `<script src="dist/app.js"></script>`

4. En tu archivo .js principal pega el siguiente código

   `var cardify = require('cardify');`

5. Finalmente, recuerda envolver tus imagenes dentro de una etiqueta con clase `container` y asignarle el atributo `alt` como en el siguiente ejemplo.

   ```
   <div class='container'>
      <img src='https://pbs.twimg.com/media/ClFixn2UoAA85OZ.jpg' alt='Osito'>
   </div>

   ```
Y listo! ya estás preparado para usar browserify.

## Ejemplos

   [**Da click aquí para ver un ejemplo**](https://pazautumn.github.io/ejemplocardify/)

## Herramientas

**Desarrollo:**
* browserify: 15.2.0
* chai: 4.1.2
* jquery: 3.3.1
* jsdom: 11.6.1
* mocha: 5.0.0

**Producción:**
* babel-cli: 6.26.0
* eslint: 4.16.0
