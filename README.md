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


Implementación a través de npm:

1-Descargar cardify desde su propio módulo, utilizando algo como Node.js. Este es npm install el comportamiento predeterminado.

2- El paquete  cardify se puede descargar con el comando:> npm install <package_name>

3- Esto creará el node_modulesdirectorio en su directorio actual  y descargará el paquete cardify a ese directorio.

4- Para confirmar que npm install funcionó correctamente, verifique que node_modules exista un directorio y que contenga un directorio para el paquete de cardify que instaló.


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
