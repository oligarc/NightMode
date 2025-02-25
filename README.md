# Proyecto Currículo Persona integrado con Night Mode

Este proyecto tiene como objetivo crear un prototipo de portfolio/currículo que represente a una persona. 

Utilizaremos **React Router** para la construcción de componentes y **Tailwind CSS** para el estilo, con soporte para **tema claro** y **oscuro**.

El diseño muestra una variedad de tarjetas de información que presentan datos sobre una persona, como su biografía, personalidad, puntos de dolor y metas.

## Estructura del Proyecto

```bash
src/
├── components/
│   ├── Card.tsx         # Componente de tarjeta que muestra información
│   ├── ThemeToggle.tsx  # Componente para alternar entre temas claro y oscuro
│   ├── UserInfo.tsx     # Componente con información personal del usuario
│   └── UserPersona.tsx  # Componente principal que integra todos los demás
└── App.tsx              # Componente raíz de la aplicación
```


## 📌 Descripción de Componentes  

### 🃏 Tarjeta de Información  

Las tarjetas muestran contenido estructurado sobre la persona, adaptando su apariencia según el tema seleccionado.  

#### 🔹 Características:  
- **Título**: Encabezado de la tarjeta.  
- **Contenido**: Texto informativo o una lista de elementos.  
- **Estilo Personalizable**: Usa clases de **Tailwind CSS** para modificar colores y fondos.  

---

### 🌗 Interruptor de Tema  

Permite alternar entre **modo claro y oscuro** con un botón que muestra un icono de **sol o luna** según el estado actual.  

#### 🔹 Funcionalidad:  
- **Estado Dinámico**: Un booleano indica si el modo oscuro está activado.  
- **Cambio de Estilo**: Usa las clases `dark` de **Tailwind CSS** para modificar la interfaz.  

---

### 👤 Información del Usuario  

Sección dedicada a los detalles personales del usuario, incluyendo:  
📌 **Nombre, edad, educación, ubicación, trabajo y hobbies**.  
📷 **Imagen de perfil responsiva y centrada**.  

El diseño se adapta a distintos tamaños de pantalla para una visualización óptima.  

---

### 🎭 Organización de la Interfaz  

Estructura visual que integra todos los elementos del portafolio.  

#### 🔹 Contenido:  
✅ **Título de la página**  
✅ **Interruptor de tema**  
✅ **Tarjetas de información organizadas en una cuadrícula responsiva**  

El diseño se basa en **Tailwind CSS**, garantizando una distribución eficiente en diferentes dispositivos.  

---

## 🔗 Repositorio  
[GitHub - oligarc](https://github.com/oligarc)
