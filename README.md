# Cardify

* **Track:** _Common Core_
* **Curso:** _JS Deep Dive: Crea tu propia librería usando JavaScript_
* **Unidad:** _Producto final_

***

Implementar un plugin de jQuery que dado un _contenedor_ debe buscar todas las
imágenes que encuentre dentro del _contenedor_ y reemplazarlas por un nuevo
elemento `<figure>` que contenga la imagen (`<img>`) además de un `<figcaption>`
con el texto del atributo `alt` de la imagen.

Plugin:Cardify

Descripción:
Cardify es un impresionante efecto de hover impulsado por puro js, el mismo permite buscar  imágenes en un contenedor de una manera simple y flexible, encapsulando todas las etiquetas (`<img>`) dentro de elementos  `<figure>`, ademas de crear un `<figcaption>` por cada imagen con el texto que contiene el atributo `alt` de la misma. Es fácil de usar y rápido de configurar y de facíl adapción  según sus necesidades. 


Implementación:

1-Descargue el paquete desde su propio módulo, utilizando algo como Node.js. Este es npm install el comportamiento predeterminado.

2- Un paquete se puede descargar con el comando:> npm install <package_name>

3- Esto creará el node_modulesdirectorio en su directorio actual (si aún no existe uno) y descargará el paquete a ese directorio.



O de la siguiente manera:
1- Ingresando  a la pagina www.npmjs.com.
2- Colocar  en el buscador cardify
3- Una vez en la página copiar el comando que esta en el lado superior derecho
4. Posicionarse en la consola en la carpeta del proyecto y anexar el comando que se obtuvo en el punto anterior



Desarrolladorres: Paz Autum y Gabriela Castillo

## Flujo de trabajo

1. Se realizó un [**fork**](https://gist.github.com/ivandevp/1de47ae69a5e139a6622d78c882e1f74)
   del repositorio de Laboratoria.

2. Se **clonó** el fork en el computador.

3. Se editó readme con explicación general del proyecto.

4. Se creó primer Issue y Milestone.

5. Se creo index.html con ejemplo principal de uso.

***

## Instalación

### Global (navegador)

```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="path-to-cardify.js"></script>
```

## Uso

```js
// `container` es el selector del contenedor donde se buscarán todas las
// imágenes a ser procesadas.
$(container).cardify({});
```

## Ejemplos

...

## Metodología de Tabajo

*  Se utilizará Slack como medio de comunicación entre los integrantes.
*  Se utilizarán los issues para registrar tareas pendientes.

## Herramientas

**Desarrollo:**
* jQuery ~v.3.2.1.

**Producción:**
* Editor de texto: Sublime Text 3.
