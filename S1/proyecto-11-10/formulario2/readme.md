Existen varias formas de ajustar la altura y el ancho de elementos en HTML y CSS. Aquí le presento un resumen de las principales opciones, incluyendo `max-content`:

1. Valores fijos:
   - Píxeles: `width: 100px;` `height: 50px;`
   - Porcentajes: `width: 50%;` `height: 75%;`

2. Valores relativos al viewport:
   - `vw` (viewport width): `width: 50vw;`
   - `vh` (viewport height): `height: 75vh;`

3. Valores de contenido:
   - `max-content`: Ajusta al contenido más ancho
   - `min-content`: Ajusta al contenido más estrecho
   - `fit-content`: Combina `max-content` y espacio disponible

4. Valores automáticos:
   - `width: auto;` `height: auto;`

5. Valores mínimos y máximos:
   - `min-width`, `max-width`, `min-height`, `max-height`

6. Unidades flexibles:
   - `fr` en Grid: `grid-template-columns: 1fr 2fr 1fr;`

7. Flexbox:
   - `flex-grow`, `flex-shrink`, `flex-basis`

8. Valores intrínsecos:
   - `width: intrinsic;` `height: intrinsic;`

9. Medidas relativas a la fuente:
   - `em`, `rem`

Ejemplo con `max-content`:

```html
<div style="width: max-content; background-color: lightblue; padding: 10px;">
  Este div se ajustará al contenido más ancho
</div>
```

Este div se expandirá para acomodar su contenido, sin importar cuán largo sea.

¿Le gustaría ver ejemplos más detallados de alguna de estas técnicas en particular?