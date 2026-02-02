# Proyecto Landing (esqueleto)

they  repository contiene un **scaffold** ready for  develoment a landing page profesionaly
con React + Vite + TypeScript + Tailwind.

Algunos puntos importantes:
- Los archivos contienen *comentarios explicativos* sobre qué implementar.
- La página principal muestra al iniciar: **"Proyecto listo para comenzar a programar 🚀"**
- Incluye ejemplos de componentes (Hero, Features, Pricing, Testimonials, FAQ) con estructura y accesibilidad básica.
- Incluye 2 páginas adicionales: **Cart (Carrito)** y **Catalog (Catálogo)** (vacías con comentarios).
- Integración base con Supabase (archivo `src/lib/supabase.ts`) con instrucciones en `.env.example`.

## ⚡ Arrancar localmente

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar en modo desarrollo:
```bash
npm run dev
```

3. Abrir http://localhost:5173

## Estructura (resumen)
```
src/
├── components/
│   ├── layout/
│   ├── sections/
│   ├── ui/
├── pages/
├── hooks/
├── lib/
├── assets/
└── styles/
```

> Este scaffold está pensado para aprobar la rúbrica académica: agrega accesibilidad, rutas, Tailwind configurado,
> y comentarios en cada archivo que indican qué debe ir implementado.

