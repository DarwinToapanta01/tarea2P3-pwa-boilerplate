# 🚀 Boilerplate PWA con Material Design Lite

Este repositorio provee una plantilla lista para comenzar cualquier PWA con **Material Design Lite** y buenas prácticas. Incluye todo el entorno de desarrollo optimizado para programar de manera profesional, minimizando errores y acelerando tu flujo de trabajo.

## 🚀 Inicio Rápido

```bash
#Clonar el repositorio
git clone https://github.com/DarwinToapanta01/tarea2P3-pwa-boilerplate.git

```bash
# Instalar dependencias
npm install

# Iniciar desarrollo
npm run dev
```

## 📜 Scripts Principales

| Script            | Descripción                                     |
| ----------------- | ----------------------------------------------- |
| `npm run dev`     | Servidor desarrollo + live-reload (puerto 3000) |
| `npm run serve`   | Servidor producción (puerto 8080)               |
| `npm run lint`    | Analizar código JavaScript                      |
| `npm run format`  | Formatear código automáticamente                |
| `npm run quality` | Verificar calidad completa                      |
| `npm run fix`     | Corregir problemas automáticamente              |

## � Estructura del Proyecto

```bash
├── assets/icons/     # Iconos PWA
├── css/styles.css    # Estilos personalizados
├── js/app.js         # Lógica principal
├── index.html        # Página principal
├── manifest.json     # Manifiesto PWA
├── sw.js            # Service Worker
└── package.json     # Scripts y dependencias
```

## ✨ Características Incluidas

- 📱 **PWA completa** - Service Worker + Manifest + Iconos
- 🎨 **Material Design Lite** - UI responsivo y moderno
- 🔧 **Calidad de código** - ESLint + Prettier configurados
- 🚀 **Live-reload** - Recarga automática al guardar
- 📦 **Scripts automatizados** - Desarrollo y producción

## �️ Flujo de Trabajo

1. **Desarrollar:** `npm run dev`
2. **Antes de commit:** `npm run quality`
3. **Corregir problemas:** `npm run fix`
4. **Probar producción:** `npm run serve`

## 🎨 Personalización Rápida

- **Cambiar nombre:** Edita `manifest.json` y `index.html`
- **Cambiar colores:** Modifica variables CSS en `css/styles.css`
- **Agregar iconos:** Reemplaza archivos en `assets/icons/`
- **Nueva funcionalidad:** Agrega código en `js/app.js`

## 📁 Repositorio

🔗 **GitHub:** [tarea2P3-pwa-boilerplate](https://github.com/DarwinToapanta01/tarea2P3-pwa-boilerplate.git)

---