# CSS

CSS significa Cascading Style Sheets (Hojas de estilo en cascada)
- Es el lenguaje que usamos para estilizar un documento HTML.
- Describe cómo deben mostrarse los elementos HTML.
- Puede controlar el diseño de varias páginas web a la vez.
- Las hojas de estilo externas se almacenan en archivos CSS

![alt text](img_selector.gif)

- El selector apunta al elemento HTML al que desea aplicar estilo.
- El bloque de declaración contiene una o más declaraciones separadas por punto y coma.
- Cada declaración incluye un nombre de propiedad CSS y un valor, separados por dos puntos.
- Varias declaraciones CSS están separadas por punto y coma y los bloques de declaración están rodeados por llaves.

## Selectores

Un selector de CSS selecciona los elementos HTML a los que desea aplicar estilo.
Los selectores CSS se utilizan para "buscar" (o seleccionar) los elementos HTML a los que desea aplicar estilo.
Podemos dividir los selectores CSS en cinco categorías:

- Selectores simples (seleccione elementos según el nombre, identificación, clase)
- Selectores combinadores (selecciona elementos en función de una relación específica entre ellos)
- Selectores de pseudoclase (seleccionan elementos según un determinado estado)
- Selectores de pseudoelementos (seleccionan y aplican estilo a una parte de un elemento)
- Selectores de atributos (seleccione elementos según un atributo o valor de atributo)


### Ejemplo con id
- ` index-a ` `index-b `

### Ejemplos con hoja de estilo
- `index-c`

### Ejemplo con style directo
- `index-d`

### Ejemplo Jerarquía
- `index-e` 

## Ejemplo class id div
 `Div (división):` "div" es un elemento de HTML utilizado para dividir el contenido de una página web en secciones. Es un contenedor genérico que no tiene un significado semántico específico, pero se utiliza comúnmente para agrupar elementos y aplicar estilos a esos grupos. Por ejemplo:
[Example](https://www.w3schools.com/css/tryit.asp?filename=trycss_important4)
`ID (identificador): `"id" es un atributo de HTML utilizado para identificar de manera única un elemento dentro de un documento HTML. En CSS, se puede usar el ID de un elemento para aplicar estilos específicos solo a ese elemento. Cada ID en un documento HTML debe ser único. Por ejemplo:

## Layouts

En CSS, un ``layout`` se refiere a la estructura y disposición de los elementos en una página web. Definir un layout en CSS implica establecer cómo se colocan y organizan los elementos HTML en relación entre sí y con el contenedor principal de la página.

https://www.w3schools.com/css/css_website_layout.asp

## Background
En CSS, el término "background" se refiere a las propiedades que permiten establecer el fondo de un elemento HTML, como un color sólido, una imagen o un gradiente. Estas propiedades son utilizadas para decorar y personalizar la apariencia visual de los elementos en una página web.

**background-color:** Esta propiedad establece el color de fondo de un elemento. Puedes especificar el color utilizando nombres de color, valores hexadecimales, RGB, RGBA, HSL, HSLA, entre otros formatos.
**background-image:** Esta propiedad permite establecer una imagen como fondo de un elemento. Puedes especificar la URL de la imagen que deseas utilizar.
**background-repeat:** Controla cómo se repite la imagen de fondo si el tamaño de la imagen es menor que el tamaño del elemento. Puede tomar valores como "repeat" (repetir tanto horizontal como verticalmente), "repeat-x" (repetir solo horizontalmente), "repeat-y" (repetir solo verticalmente) y "no-repeat" (no repetir).
**background-position:** Esta propiedad establece la posición inicial de una imagen de fondo. Puedes especificar la posición utilizando valores como píxeles, porcentajes o palabras clave como "top", "bottom", "left", "right", "center", etc.
**background-size:** Controla el tamaño de la imagen de fondo. Puedes especificar valores como "auto" (el tamaño original de la imagen), valores específicos de ancho y alto, porcentajes, entre otros.
https://www.w3schools.com/css/tryit.asp?filename=trycss3_background_multiple

Propiedades: 
https://www.w3schools.com/css/tryit.asp?filename=trycss3_background-size_contain


## Imagen
Pa incluir imagenes en miniatura:
[imagen](https://www.w3schools.com/css/tryit.asp?filename=trycss_ex_images_thumbnail)


## Borders

**border-width:** Define el ancho del borde. Puedes especificar un valor único para todos los lados (border-width: 2px;) o valores individuales para cada lado (border-width: 2px 1px 3px 4px; para arriba, derecha, abajo e izquierda respectivamente).

**border-style:** Define el estilo del borde, como solid, dashed, dotted, double, groove, ridge, inset, outset, entre otros. Puedes utilizar uno de estos valores o una lista separada por espacios para especificar un estilo diferente para cada lado.

**border-color:** Define el color del borde. Puedes especificar un color utilizando nombres de color, valores hexadecimales, RGB, RGBA, HSL, HSLA, entre otros formatos. Al igual que con border-width, puedes especificar un solo color para todos los lados o colores individuales para cada lado.

**border-radius:** Define el radio de las esquinas del borde, lo que permite crear bordes redondeados. Puedes especificar un valor único para todas las esquinas (border-radius: 10px;) o valores individuales para cada esquina (border-radius: 10px 20px 15px 5px; para la esquina superior izquierda, superior derecha, inferior derecha e inferior izquierda respectivamente).

**border-image:** Permite establecer una imagen como borde en lugar de un color sólido. Esta propiedad es más avanzada y te permite especificar una imagen, un relleno, un ancho del borde y un relleno para el borde.

https://www.w3schools.com/css/tryit.asp?filename=trycss_border-style
https://www.w3schools.com/css/tryit.asp?filename=trycss_border-color1
https://www.w3schools.com/css/tryit.asp?filename=trycss_border_round

## Margin
Propiedades de margin:
**margin-top:** Define el margen superior del elemento.

**margin-right:** Define el margen derecho del elemento.

**margin-bottom:** Define el margen inferior del elemento.

**margin-left:** Define el margen izquierdo del elemento.

https://www.w3schools.com/css/tryit.asp?filename=trycss_margin_intro
## Padding
Las propiedades de padding de CSS se utilizan para generar espacio alrededor del contenido de un elemento, dentro de los bordes definidos.
Ejemplo: plumavit en paquetes de envío.
https://www.w3schools.com/css/tryit.asp?filename=trycss_padding_sides
## Pagination

[simple](https://www.w3schools.com/css/tryit.asp?filename=trycss_ex_pagination)

## aside
https://www.w3schools.com/tags/tag_aside.asp


## Navbar
- vertical: https://www.w3schools.com/css/tryit.asp?filename=trycss_navbar_vertical_gray

- horizontal: https://www.w3schools.com/css/tryit.asp?filename=trycss_navbar_horizontal_black_right

https://www.w3schools.com/css/tryit.asp?filename=trycss_navbar_horizontal_black_fixed


## Dropdown 

[Menú](https://www.w3schools.com/css/tryit.asp?filename=trycss_dropdown_button)

[Imagen](https://www.w3schools.com/css/tryit.asp?filename=trycss_dropdown_image)


## Gallery

[imagen](https://www.w3schools.com/css/css_image_gallery.asp)


## Fonts

- Serif fonts tienen un pequeño trazo en los bordes de cada letra.  Crean una sensación de formalidad y elegancia.

- Sans-serif fonts tienen líneas limpias (sin pequeños trazos).  Crean un aspecto moderno y minimalista.

- Monospace fonts aquí todas las letras tienen el mismo ancho fijo.  Crean una apariencia mecánica. 

- Cursive fonts imitan la escritura humana.

- Fantasy fonts son fuentes decorativas y divertidas.

![alt text](serif.gif)

https://www.w3schools.com/css/css_font.asp
https://www.w3schools.com/css/tryit.asp?filename=trycss_font-family

## Formulario
[Form](https://www.w3schools.com/css/tryit.asp?filename=trycss_forms)

[Search](https://www.w3schools.com/css/tryit.asp?filename=trycss_form_search_anim)

[TextArea](https://www.w3schools.com/css/tryit.asp?filename=trycss_form_textarea)

[select](https://www.w3schools.com/css/tryit.asp?filename=trycss_form_select)

[button](https://www.w3schools.com/css/tryit.asp?filename=trycss_form_button)



## Box Model

Todos los elementos HTML pueden considerarse boxes.

https://www.w3schools.com/css/tryit.asp?filename=trycss_boxmodel



## Jerarquía de especificidad

Cada selector de CSS tiene su lugar en la jerarquía de especificidad.

Hay cuatro categorías que definen el nivel de especificidad de un selector:


    Estilos en línea - Ejemplo: <h1 estilo="color: rosa;">
    ID - Ejemplo: #barra de navegación
    Clases, pseudoclases, selectores de atributos - Ejemplo: .test, : flotar, [href]
    Elementos y pseudoelementos - Ejemplo: h1, ::before

