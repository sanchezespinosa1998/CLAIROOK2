// Datos de workshops de Clairo
const workshopsData = [
  {
    slug: "auditoria-ecommerce",
    titulo: "Auditoría de Oportunidades de Venta",
    subtitulo: "Detecta y prioriza las oportunidades que realmente van a aumentar tus ventas",
    duracion: "4 horas",
    formato: "Presencial / Remoto",
    nivel_recomendado: "Intermedio",
    perfil_recomendado: "Equipos de ecommerce, responsables de marketing digital, founders con tienda online",
    pilar_principal: "Análisis y Diagnóstico",
    beneficios: [
      "Identifica las 5-7 oportunidades de mayor impacto en tu ecommerce",
      "Prioriza acciones basándote en datos reales, no en suposiciones",
      "Obtén un plan de acción claro y ejecutable para los próximos 3 meses",
      "Descubre oportunidades ocultas en tu funnel de conversión",
      "Aprende metodologías aplicables a cualquier análisis futuro"
    ],
    modulos: [
      {
        nombre: "Análisis del Funnel Actual",
        descripcion: "Mapeamos tu funnel completo, identificando puntos de fricción y abandono"
      },
      {
        nombre: "Auditoría de Conversión",
        descripcion: "Revisamos página por página los elementos que están limitando tus ventas"
      },
      {
        nombre: "Análisis de Datos y Métricas",
        descripcion: "Extraemos insights accionables de Google Analytics, heatmaps y datos de venta"
      },
      {
        nombre: "Identificación de Oportunidades",
        descripcion: "Priorizamos oportunidades usando matriz de impacto/esfuerzo"
      },
      {
        nombre: "Plan de Acción",
        descripcion: "Definimos roadmap concreto con acciones, responsables y métricas de éxito"
      }
    ],
    metodologia: "Trabajamos directamente sobre tu ecommerce real. Durante el workshop analizamos en tiempo real tu tienda, tus datos y tus procesos. No es teoría: es trabajo práctico que te da resultados inmediatos.",
    para_quien: [
      "Ecommerces que quieren vender más pero no saben por dónde empezar",
      "Equipos que tienen muchas ideas pero necesitan priorizar",
      "Empresas que han crecido pero han estancado sus conversiones",
      "Funders que quieren entender mejor su negocio online"
    ],
    para_quien_no: [
      "Ecommerces que aún no tienen tráfico suficiente para hacer análisis",
      "Tiendas que buscan servicios de implementación (este es un workshop de diagnóstico)",
      "Empresas que no están dispuestas a trabajar sobre su propio negocio"
    ],
    logistica: {
      duracion: "4 horas en sesión única o 2 sesiones de 2 horas",
      formato: "Presencial en tu oficina o remoto vía videollamada",
      participantes: "Ideal para equipos de 2-4 personas",
      requisitos: "Acceso a Google Analytics, datos de ventas, y acceso a tu CMS/ecommerce"
    },
    faq: [
      {
        pregunta: "¿Necesito preparar algo antes del workshop?",
        respuesta: "Solo necesitas tener acceso a tus herramientas (Analytics, CMS, datos de venta) y definir 1-2 personas clave que participen en la sesión."
      },
      {
        pregunta: "¿Qué pasa después del workshop?",
        respuesta: "Recibirás un documento resumen con las oportunidades identificadas, priorizadas, y un plan de acción. Podemos también hacer seguimiento posterior si lo necesitas."
      },
      {
        pregunta: "¿Funciona para cualquier tipo de ecommerce?",
        respuesta: "Sí, la metodología es aplicable a cualquier tienda online. Hemos trabajado con ecommerces de moda, alimentación, tecnología, b2b, y más."
      },
      {
        pregunta: "¿Cuánto tiempo tarda en verse resultados?",
        respuesta: "Depende de la complejidad de las oportunidades identificadas. Algunas se pueden implementar en días, otras requieren más tiempo. El workshop te da claridad inmediata sobre qué hacer."
      }
    ],
    cta_principal_label: "Reservar plaza o solicitar información",
    cta_principal_url: "contacto.html"
  },
  {
    slug: "optimizacion-conversion",
    titulo: "Optimización de Conversión Práctica",
    subtitulo: "Aprende a mejorar tu tasa de conversión con técnicas probadas y aplicables",
    duracion: "6 horas",
    formato: "Presencial / Remoto",
    nivel_recomendado: "Intermedio-Avanzado",
    perfil_recomendado: "Equipos de marketing, responsables de conversión, diseñadores UX",
    pilar_principal: "Optimización",
    beneficios: [
      "Aumenta tu tasa de conversión aplicando técnicas validadas",
      "Aprende a diseñar y ejecutar tests A/B efectivos",
      "Domina la psicología del comportamiento aplicada a ecommerce",
      "Optimiza tus landing pages y páginas de producto",
      "Implementa mejoras que realmente mueven la aguja"
    ],
    modulos: [
      {
        nombre: "Fundamentos de Conversión",
        descripcion: "Principios psicológicos y técnicas básicas de optimización"
      },
      {
        nombre: "Optimización de Landing Pages",
        descripcion: "Cómo estructurar y optimizar páginas de aterrizaje que convierten"
      },
      {
        nombre: "Páginas de Producto Efectivas",
        descripcion: "Elementos clave de una página de producto que vende"
      },
      {
        nombre: "Testing y Experimentación",
        descripcion: "Cómo diseñar y ejecutar tests que generan aprendizaje real"
      },
      {
        nombre: "Implementación Práctica",
        descripcion: "Trabajamos sobre tus propias páginas identificando mejoras inmediatas"
      }
    ],
    metodologia: "Combinamos teoría con práctica intensiva. Trabajamos sobre tus propias páginas, analizando qué funciona y qué no, y diseñando mejoras concretas que puedes implementar.",
    para_quien: [
      "Ecommerces con tráfico pero baja tasa de conversión",
      "Equipos que quieren empezar a hacer testing serio",
      "Marketers que quieren profundizar en optimización",
      "Empresas que necesitan mejorar resultados sin aumentar presupuesto de adquisición"
    ],
    para_quien_no: [
      "Ecommerces sin tráfico suficiente para hacer tests",
      "Equipos que buscan solo teoría sin aplicación práctica",
      "Empresas que no están dispuestas a iterar y experimentar"
    ],
    logistica: {
      duracion: "6 horas (puede dividirse en 2 sesiones de 3 horas)",
      formato: "Presencial o remoto",
      participantes: "Máximo 5 personas para mantener enfoque práctico",
      requisitos: "Acceso a herramientas de testing, CMS, y datos de conversión"
    },
    faq: [
      {
        pregunta: "¿Necesito saber programar?",
        respuesta: "No es necesario. Trabajamos con herramientas no-code y te enseñamos a implementar mejoras sin necesidad de código."
      },
      {
        pregunta: "¿Qué herramientas necesito?",
        respuesta: "Básicamente tu CMS y acceso a datos. Te recomendamos herramientas de testing según tu setup actual."
      },
      {
        pregunta: "¿Veré resultados inmediatos?",
        respuesta: "Las mejoras identificadas puedes implementarlas rápido, pero los tests requieren tiempo para generar resultados significativos. Te enseñamos cómo medir correctamente."
      }
    ],
    cta_principal_label: "Reservar plaza o solicitar información",
    cta_principal_url: "contacto.html"
  },
  {
    slug: "estrategia-funnel",
    titulo: "Diseño de Funnel de Ventas Efectivo",
    subtitulo: "Construye un funnel que guía a tus usuarios desde el primer contacto hasta la compra",
    duracion: "5 horas",
    formato: "Presencial / Remoto",
    nivel_recomendado: "Intermedio",
    perfil_recomendado: "Funders, responsables de estrategia, equipos de growth",
    pilar_principal: "Estrategia",
    beneficios: [
      "Diseña un funnel optimizado para tu modelo de negocio",
      "Identifica y elimina puntos de fricción en el customer journey",
      "Aumenta el valor promedio por cliente",
      "Mejora la retención y el lifetime value",
      "Crea una experiencia de compra coherente y efectiva"
    ],
    modulos: [
      {
        nombre: "Mapeo del Customer Journey",
        descripcion: "Identificamos todos los touchpoints desde que conocen tu marca hasta que compran"
      },
      {
        nombre: "Diseño de Funnel Ideal",
        descripcion: "Construimos el funnel que deberías tener según tu modelo de negocio"
      },
      {
        nombre: "Estrategias de Nurturing",
        descripcion: "Cómo mantener el engagement y guiar hacia la conversión"
      },
      {
        nombre: "Optimización por Etapas",
        descripcion: "Técnicas específicas para cada etapa del funnel"
      },
      {
        nombre: "Implementación y Roadmap",
        descripcion: "Plan concreto para implementar mejoras en tu funnel actual"
      }
    ],
    metodologia: "Partimos de tu funnel actual, lo analizamos en profundidad, y diseñamos el funnel ideal para tu negocio. Todo basado en datos reales y mejores prácticas probadas.",
    para_quien: [
      "Ecommerces que quieren mejorar su customer journey completo",
      "Empresas con múltiples productos o servicios complejos",
      "Equipos que necesitan claridad sobre su estrategia de ventas",
      "Negocios que quieren aumentar el valor por cliente"
    ],
    para_quien_no: [
      "Ecommerces muy simples con un único producto",
      "Empresas que solo buscan optimización puntual de una página",
      "Negocios sin datos suficientes para analizar el funnel completo"
    ],
    logistica: {
      duracion: "5 horas (1 sesión completa o 2 sesiones)",
      formato: "Presencial o remoto",
      participantes: "2-5 personas del equipo estratégico",
      requisitos: "Acceso a datos de venta, Analytics, y conocimiento del negocio"
    },
    faq: [
      {
        pregunta: "¿Es diferente para B2B y B2C?",
        respuesta: "Sí, adaptamos la metodología según tu modelo. Los principios son similares pero la aplicación varía."
      },
      {
        pregunta: "¿Qué resultados puedo esperar?",
        respuesta: "Depende de tu situación inicial, pero normalmente vemos mejoras del 15-30% en conversión cuando se implementan las mejoras identificadas."
      }
    ],
    cta_principal_label: "Reservar plaza o solicitar información",
    cta_principal_url: "contacto.html"
  }
];

