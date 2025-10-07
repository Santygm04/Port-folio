
# Portfolio Espacial — Santiago

Landing page de portfolio personal con temática espacial, hecha con **React + Vite** y **CSS Modules**, animada con **Framer Motion**.

## 🚀 Instalación
```bash
npm install
npm run dev
```
Producción:
```bash
npm run build
npm run preview
```

## 🧱 Estructura
```
src/
├── components/
│   ├── About/
│   ├── Contact/
│   ├── Hero/
│   ├── Navbar/
│   ├── Particles/
│   ├── Projects/
│   ├── Skills/
│   └── Footer/
├── assets/
├── styles/
└── utils/
```

## ✨ Funciones clave
- Fondo de estrellas (Canvas) + nebulosa con gradientes
- Animaciones de scroll (Framer Motion)
- Efecto typing en el hero
- Sticky navbar con **scroll spy**
- Grid de habilidades con barras de progreso animadas
- Filtros de proyectos (Todos/React)
- Formulario con validación en tiempo real
- Responsive **mobile‑first** y **lazy loading** de imágenes

## 🛠 Tecnologías
React, Vite, CSS Modules, Framer Motion

## 🔑 Accesibilidad
- Semántica HTML cuidada
- Contraste alto
- Foco visible
- Etiquetas y `aria-*` en el formulario

---

© 2025 Santiago — Hecho con 💙 y un poco de polvo de estrellas.


## 📮 Formulario (Formspree)
- Crea un formulario en Formspree y copia el ID (formato: `xxxxx`).
- En un archivo `.env` en la raíz, agrega:
```
VITE_FORMSPREE_ID=tu_id_de_formspree
```
- Reinicia el servidor de desarrollo.

Si no configuras Formspree, el formulario usa **mailto** como fallback.

## 🛡 Vulnerabilidades de npm
Al instalar, npm puede avisar de 1-2 vulnerabilidades de dependencias transitivas. Para inspeccionar/solucionar:
```bash
npm audit
npm audit fix
# (opcional, con cuidado) npm audit fix --force
```
> Nota: Las advertencias no impiden ejecutar el proyecto. Este repo ya incluye `@vitejs/plugin-react` para evitar errores de Vite.


## 💬 Enviar formulario por WhatsApp
Además del envío por Formspree, podés habilitar un botón para enviar el contenido al WhatsApp del dueño del sitio.

1. Creá un archivo `.env` en la raíz con tu número en **formato internacional** (sin `+`, espacios, ni `15`).
   - Para Argentina (línea móvil) suele ser: `549` + código de área + número. Ej: Tucumán `381` → `VITE_WHATSAPP_PHONE=5493811234567`
2. Opcional: mantené también `VITE_FORMSPREE_ID` si querés el envío por email.

```
VITE_WHATSAPP_PHONE=5493811234567
VITE_FORMSPREE_ID=tu_id_de_formspree
```
> El botón abre `wa.me` con el mensaje prellenado (nombre, email y texto).
