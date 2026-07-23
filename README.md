# logica-programacion-1
Comparación de Números 
Descripción del Proyecto
Este es un proyecto práctico de lógica de programación desarrollado como parte de un Bootcamp. Consiste en un script ejecutable desde la terminal que solicita al usuario tres números, los analiza y muestra en pantalla:
- El número mayor.
- El número del centro.
- El número menor.
- El orden de los números de mayor a menor y de menor a mayor.
- Un aviso especial si los tres números ingresados son exactamente iguales.
Tecnologías Usadas
- **JavaScript :** Lenguaje principal utilizado para la lógica matemática, manejo de arreglos y algoritmos de ordenamiento.

Características Técnicas del Código
- Uso del **Spread Operator (`...`)** para clonar arreglos y mantener la inmutabilidad de los datos originales.
- Implementación del método **`.sort()`** con funciones comparadoras matemáticas (`(a, b) => b - a`) para ordenar números de forma segura.
- Validaciones lógicas condicionales (`if/else`) para la detección de errores (entradas no numéricas `NaN`) y comprobación de igualdad estricta.
