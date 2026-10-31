export const site = {
  name: 'Creatividad y Videojuegos',
  tagline: 'Extraescolares de creatividad, robótica y videojuegos en La Rioja',
  email: 'angelgomezochi@gmail.com',
  phone: '601 079 251',
  phoneIntl: '+34601079251',
  region: 'La Rioja',
  ages: 'De 6 a 12 años',
  schedule: 'De 16:00 a 17:30',
  course: '2025-26',
  // Endpoint que recibe el formulario de inscripción (Formspree, Netlify Forms, Web3Forms...)
  formEndpoint: 'https://formspree.io/f/TU_ID_AQUI',
};

export const activities = {
  creatividad: {
    slug: 'creatividad-arte-diseno-de-juegos',
    name: 'Creatividad, Arte y Diseño de Juegos',
    short: 'Creatividad y Arte',
    color: 'sky',
    summary: 'Una extraescolar desenchufada para inventar historias, dibujar personajes, crear mundos y modelar ideas con las manos.',
    points: [
      ['', 'Escriben sus propias historias', 'Desarrollarán un mundo propio, los personajes que lo habitan y lo que tienen de especial.'],
      ['', 'Dibujan personajes únicos', 'Empiezan a dar forma a esas ideas que pueblan sus mundos imaginarios.'],
      ['', 'Pintan y dan vida a sus ideas', 'El color es lo que le dará vida a esas historias, entornos y personajes.'],
      ['', 'Modelan ideas en arcilla', 'Con arcilla y sus propias manos terminan por darle forma a sus ideas.'],
    ],
  },
  robotica: {
    slug: 'robotica-programacion-videojuegos',
    name: 'Robótica y Programación de Videojuegos',
    short: 'Robótica y Videojuegos',
    color: 'amber',
    summary: 'Aprenden a programar creando videojuegos, programando robots, resolviendo retos y diseñando sus propias ideas en 3D.',
    points: [
      ['', 'Crean videojuegos desde cero', 'Aprenden programación mientras diseñan sus propios juegos.'],
      ['', 'Programan robots y superan retos', 'Dan instrucciones, prueban soluciones y completan misiones.'],
      ['', 'Diseñan en 3D sus ideas', 'Modelan piezas, personajes y objetos que luego pueden hacerse reales.'],
      ['', 'Resuelven misiones', 'Tecnología, creatividad y pensamiento lógico en proyectos propios.'],
    ],
  },
};

// Colegios: cada uno genera su propia página local (/colegios/<slug>/)
export const schools = [
  { slug: 'villamediana-gonzalo-de-berceo', name: 'CEIP Gonzalo de Berceo', town: 'Villamediana de Iregua', activities: ['creatividad'] },
  { slug: 'logrono-escultor-vicente-ochoa', name: 'CEIP Escultor Vicente Ochoa', town: 'Logroño', activities: ['creatividad'] },
  { slug: 'alberite-avelina-cortazar', name: 'CEIP Doña Avelina Cortázar', town: 'Alberite', activities: ['creatividad'] },
  { slug: 'navarrete-ns-del-sagrario', name: 'CEIP Nuestra Señora del Sagrario', town: 'Navarrete', activities: ['creatividad'] },
  { slug: 'najera-ns-de-la-piedad', name: 'FEC Nuestra Señora de la Piedad', town: 'Nájera', activities: ['creatividad', 'robotica'] },
  { slug: 'logrono-breton-de-los-herreros', name: 'CEIP Bretón de los Herreros', town: 'Logroño', activities: ['creatividad'] },
  { slug: 'logrono-escolapias-sotillo', name: 'Colegio Escolapias Sotillo', town: 'Logroño', activities: ['creatividad'] },
  { slug: 'lardero-eduardo-gonzalez-gallarza', name: 'CEIP Eduardo González Gallarza', town: 'Lardero', activities: ['robotica'] },
  { slug: 'logrono-sancho-iii-el-mayor', name: 'CEIP Sancho III el Mayor', town: 'Logroño', activities: ['creatividad'] },
];

export const faqs = [
  ['¿Para qué edades es?', 'De 6 a 12 años.'],
  ['¿Qué horario tiene?', 'De 16:00 a 17:30, en el propio colegio.'],
  ['¿Recogéis a los niños del comedor?', 'Sí. En la inscripción nos indicas si hay que recogerle del comedor y quién le recoge al terminar.'],
  ['Somos socios del AMPA, ¿qué hacemos?', 'Márcalo en la inscripción. Te mandaremos un correo y nos respondes con la foto del carnet.'],
];
