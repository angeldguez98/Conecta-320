/* ==========================================================================

   BASE DE DATOS DEL DIRECTORIO - EMILIO CARRANZA Y LECHUGUILLAS, VER.

   Aquí se almacenan todos los negocios y lugares turísticos en forma de

   "Arreglos de Objetos" [ { ... }, { ... } ].

   

   REGLAS PARA EDITAR ESTE ARCHIVO SIN ROMPER LA PÁGINA:

   1. Todos los textos van entre comillas (" ").

   2. Cada propiedad termina con una coma (,), excepto la última de cada bloque.

   3. El teléfono debe tener 10 dígitos sin espacios ni guiones (para WhatsApp).

   ========================================================================== */



const NEGOCIOS = [

  // ==========================================

  // 1. FARMACIAS

  // ==========================================

  {

    nombre: "Farmacia Guadalupana",

    categoria: "Farmacias",

    descripcion: "Medicamentos de patente, genéricos y artículos para el cuidado de la salud.",

    telefono: "2353274304",

    direccion: "5 de Mayo 607, Col. Centro, 93980 Emilio Carranza, Ver.",

    horario: "Lun a Dom, 8:00 a 22:00",
    mapa: "https://maps.app.goo.gl/hQxHNYGP79PJjKwp9",

  },

  {

    nombre: "Farmacias Similares (Reforma)",

    categoria: "Farmacias",

    descripcion: "Medicamentos genéricos, suplementos y productos de higiene personal.",

    telefono: "8009116666",

    direccion: "Reforma 25, Col. Centro, 93980 Emilio Carranza, Ver.",

    horario: "Lun a Sáb, 8:00 a 21:00; Dom, 8:00 a 20:00",

  },

  {

    nombre: "Farmacias Similares (Hombres Ilustres)",

    categoria: "Farmacias",

    descripcion: "Medicamentos genéricos, vitaminas y material de curación.",

    telefono: "",

    direccion: "Hombres Ilustres 36, Col. Centro, 93980 Emilio Carranza, Ver.",

    horario: "Lun a Sáb, 8:00 a 22:00; Dom, 8:00 a 21:00",

  },

  {

    nombre: "Farmacia Real",

    categoria: "Farmacias",

    descripcion: "Surtido de recetas médicas, medicamentos y productos de farmacia.",

    telefono: "",

    direccion: "Av. Independencia, Plaza Hidalgo (Centro), Col. Centro, 93980 Emilio Carranza, Ver.",

    horario: "Lun a Dom, 9:00 a 21:00",

  },



  // ==========================================

  // 2. TAXIS

  // ==========================================

  {

    nombre: "Base de Taxis Emilio Carranza Centro",

    categoria: "Taxis",

    descripcion: "Servicio de taxi local y traslados en Emilio Carranza y alrededores.",

    telefono: "2356883589",

    direccion: "Av. Independencia 212, Plaza Hidalgo (Centro), Col. Centro, 93980 Emilio Carranza, Ver.",

    horario: "",

  },



  // ==========================================

  // 3. COMIDA

  // ==========================================

  {

    nombre: "La Casa de Mago",

    categoria: "Comida",

    descripcion: "Desayunos y comida tradicional por la mañana en Los Mangos.",

    telefono: "2321482407",

    direccion: "Los Mangos, 93980 Emilio Carranza, Ver.",

    horario: "Lun a Dom, 9:00 a 11:30",

  },

  {

    nombre: "La Estación Tacos",

    categoria: "Comida",

    descripcion: "Venta de tacos y cena de jueves a domingo en La Firmeza.",

    telefono: "2351066460",

    direccion: "Calle Ignacio Zaragoza, La Firmeza, 93980 Emilio Carranza, Ver.",

    horario: "Jue a Dom, 18:00 a 00:00",

  },

  {

    nombre: "La Fonda",

    categoria: "Comida",

    descripcion: "Comida casera, guisados del día y platillos tradicionales.",

    telefono: "",

    direccion: "Agustín de Iturbide 319, Col. Centro, 93980 Emilio Carranza, Ver.",

    horario: "Lun a Sáb, 9:30 a 20:00; Dom, 10:30 a 20:30",

  },

  {

    nombre: "El Kurandero",

    categoria: "Comida",

    descripcion: "Alimentos, botanas y antojitos frente a Plaza Hidalgo.",

    telefono: "2281226131",

    direccion: "Miguel Hidalgo 79, Plaza Hidalgo (Centro), Col. Centro, 93980 Emilio Carranza, Ver.",

    horario: "Lun, Mar, Jue a Dom, 14:00 a 21:00",

  },

  {

    nombre: "Del Llano Emilio Carranza",

    categoria: "Comida",

    descripcion: "Comida y cenas tradicionales en la zona centro.",

    telefono: "2351097448",

    direccion: "Emilio Carranza, Col. Centro, 93980 Emilio Carranza, Ver.",

    horario: "Lun, Mié a Vie, 13:00 a 22:00; Sáb, 9:00 a 22:00; Dom, 16:20 a 22:00",

  },

  {

    nombre: "Cremería Chihuahua (Tortas de Lomo)",

    categoria: "Comida",

    descripcion: "Tortas de lomo tradicionales y productos de cremería sobre carretera.",

    telefono: "2353274194",

    direccion: "Carretera Federal México 180, 93980 Emilio Carranza, Ver.",

    horario: "Lun a Dom, 7:00 a 23:00",

  },

  {

    nombre: "Restaurant El Porro",

    categoria: "Comida",

    descripcion: "Mariscos frescos y cocina regional en la localidad de Lechuguillas.",

    telefono: "2351123789",

    direccion: "Sin Nombre s/n, 93981 Lechuguillas, Ver.",

    horario: "Lun a Dom, 9:00 a 20:00",

  },

  {

    nombre: "Restaurant Anita - Playa Lechuguillas",

    categoria: "Comida",

    descripcion: "Pescados, mariscos y platillos típicos frente al mar en Playa Lechuguillas.",

    telefono: "2282886155",

    direccion: "Playa Lechuguillas s/n, 93960 Lechuguillas, Ver.",

    horario: "Lun a Dom, 9:00 a 21:00",

  },

  {

    nombre: "Paraíso Escondido Restaurante Fish & Fastfood",

    categoria: "Comida",

    descripcion: "Mariscos, especialidades del mar y comida rápida en Lechuguillas.",

    telefono: "2291642055",

    direccion: "Zona de Playa, 93984 Lechuguillas, Ver.",

    horario: "Lun a Dom, 9:00 a 21:00",

  },

  {

    nombre: "La Cazuela de Mariscos",

    categoria: "Comida",

    descripcion: "Cocteles, caldos y mariscos preparados en Lechuguillas.",

    telefono: "",

    direccion: "93984 Lechuguillas, Ver.",

    horario: "Lun a Dom, 24 horas",

  },



  // ==========================================

  // 4. TIENDAS

  // ==========================================

 

  

  {

    nombre: "Mini Abarrotes Emmanuel",

    categoria: "Tiendas",

    descripcion: "Abarrotes, despensa diaria y productos de primera necesidad.",

    telefono: "2351084796",

    direccion: "Calle Azucena, Torres Méndez, 93981 Emilio Carranza, Ver.",

    horario: "Lun a Sáb, 7:00 a 20:00; Dom, 7:00 a 13:00",

  },

  {

    nombre: "Abarrotes Hernández y Leña Hernández",

    categoria: "Tiendas",

    descripcion: "Productos de abarrotes, despensa básica y venta de leña.",

    telefono: "",

    direccion: "Benito Juárez 313, La Firmeza, 93980 Emilio Carranza, Ver.",

    horario: "",

  },

  {

    nombre: "Carnicería y Abarrotes Ahorre Más",

    categoria: "Tiendas",

    descripcion: "Abarrotes, artículos de primera necesidad y productos cárnicos en Los Robles.",

    telefono: "",

    direccion: "Camino a Lechuguillas, Col. Los Robles, 93980 Emilio Carranza, Ver.",

    horario: "",

  },

  {

    nombre: "Abarrotes Dalia",

    categoria: "Tiendas",

    descripcion: "Tienda de abarrotes y despensa diaria en Manuel L. Morales.",

    telefono: "",

    direccion: "Antonio Jaimes Aguilar 112, Manuel L. Morales, 93980 Emilio Carranza, Ver.",

    horario: "",

  },

  {

    nombre: "Papelería Arcoíris",

    categoria: "Tiendas",

    descripcion: "Útiles escolares, artículos de papelería y material de oficina.",

    telefono: "",

    direccion: "Av. Independencia 21-311, Col. Centro, 93980 Emilio Carranza, Ver.",

    horario: "Lun a Vie, 8:30 a 20:00; Sáb, 9:00 a 19:00",

  },

  {

    nombre: "Papelería y Abarrotes La Pequeña",

    categoria: "Tiendas",

    descripcion: "Artículos escolares, copias y productos de abarrotes.",

    telefono: "2351009535",

    direccion: "5 de Mayo 316, Col. Centro, 93980 Emilio Carranza, Ver.",

    horario: "Lun a Vie, 7:00 a 21:00; Sáb y Dom, 7:00 a 20:00",

  },

  {

    nombre: "Mueblería Viveros",

    categoria: "Tiendas",

    descripcion: "Venta de muebles, colchones y artículos para el hogar.",

    telefono: "2353274458",

    direccion: "5 de Mayo 26, Col. Centro, 93980 Emilio Carranza, Ver.",

    horario: "Lun a Mié, Vie a Dom, 9:00 a 20:00; Jue, 9:00 a 12:00",

  },

  {

    nombre: "Boutique & Nails LessYuu",

    categoria: "Tiendas",

    descripcion: "Ropa, accesorios de moda y servicio de aplicación de uñas.",

    telefono: "2351071796",

    direccion: "Hombres Ilustres, 93980 Emilio Carranza, Ver.",

    horario: "Lun a Dom, 9:00 a 20:00",

  },



  // ==========================================

  // 5. TORTILLERÍAS

  // ==========================================

  {

    nombre: "Tortillería Veguense",

    categoria: "Tortillerías",

    descripcion: "Elaboración y venta de tortilla de maíz fresca.",

    telefono: "",

    direccion: "Nicolás Bravo, Lomas Verdes, 93980 Emilio Carranza, Ver.",

    horario: "",

  },

  {

    nombre: "Tortillería Santa Bárbara",

    categoria: "Tortillerías",

    descripcion: "Tortilla de maíz caliente y masa fresca todos los días.",

    telefono: "2351034958",

    direccion: "5 de Mayo 110-Local 2, Col. Centro, 93980 Emilio Carranza, Ver.",

    horario: "Lun a Dom, 5:30 a 20:00",

  },

  {

    nombre: "Tortillería Higueras",

    categoria: "Tortillerías",

    descripcion: "Venta de tortilla de maíz recién hecha en la zona centro.",

    telefono: "",

    direccion: "Francisco I. Madero 313, Col. Centro, 93980 Emilio Carranza, Ver.",

    horario: "",

  },



  // ==========================================

  // 6. CARNICERÍAS

  // ==========================================

  {

    nombre: "Carnicería Ortiz",

    categoria: "Carnicerías",

    descripcion: "Cortes frescos de res y cerdo del día.",

    telefono: "2353274154",

    direccion: "C. Ofelia Ortiz González, Col. Centro, 93980 Emilio Carranza, Ver.",

    horario: "Lun a Sáb, 6:30 a 18:30; Dom, 6:00 a 15:00",

  },

  {

    nombre: "Carnicería Juanita",

    categoria: "Carnicerías",

    descripcion: "Venta de carne fresca de res y cerdo para el hogar.",

    telefono: "2351052973",

    direccion: "Vicente Guerrero, Col. Centro, 93980 Emilio Carranza, Ver.",

    horario: "Lun a Dom, 7:00 a 20:30",

  },

  {

    nombre: "Carnicería Olvera",

    categoria: "Carnicerías",

    descripcion: "Productos cárnicos frescos y cortes tradicionales.",

    telefono: "",

    direccion: "Miguel Hidalgo 702, Col. Centro, 93980 Emilio Carranza, Ver.",

    horario: "",

  },

  {

    nombre: "Carnicería y Tamalería Olvera",

    categoria: "Carnicerías",

    descripcion: "Carne fresca y venta de tamales tradicionales.",

    telefono: "",

    direccion: "Benito Juárez 912, Col. Centro, 93980 Emilio Carranza, Ver.",

    horario: "",

  },

  {

    nombre: "Pescadería Villegas 2",

    categoria: "Carnicerías",

    descripcion: "Venta de pescados y mariscos frescos en la zona centro.",

    telefono: "",

    direccion: "Col. Centro, 93980 Emilio Carranza, Ver.",

    horario: "",

  },



  // ==========================================

  // 7. QUESERÍAS

  // ==========================================

  {

    nombre: "Quesería Chela",

    categoria: "Queserías",

    descripcion: "Queso fresco, de hebra, crema y productos lácteos tradicionales de la región.",

    telefono: "2351007376",

    direccion: "5 de Febrero 5, Col. Centro, 93980 Emilio Carranza, Ver.",

    horario: "",

  },

  {

    nombre: "Quesería Torres",

    categoria: "Queserías",

    descripcion: "Venta de quesos artesanales y derivados lácteos.",

    telefono: "",

    direccion: "Reforma 203, Col. Centro, 93980 Emilio Carranza, Ver.",

    horario: "Lun a Dom, 8:30 a 18:30",

  },

  {

    nombre: "Quesería Lorméndez",

    categoria: "Queserías",

    descripcion: "Queso fresco, crema y lácteos locales con horario extendido.",

    telefono: "2351141222",

    direccion: "Hombres Ilustres 725, Col. Centro, 93980 Emilio Carranza, Ver.",

    horario: "Lun a Dom, 7:00 a 22:00",

  },

  {

    nombre: "Quesos y Crema Los Dagos",

    categoria: "Queserías",

    descripcion: "Quesos regionales y crema fresca elaborados localmente.",

    telefono: "",

    direccion: "Francisco I. Madero 13-109, Col. Centro, 93980 Emilio Carranza, Ver.",

    horario: "Lun a Dom, 7:00 a 21:00",

  },



  // ==========================================

  // 8. PANADERÍAS

  // ==========================================

  {

    nombre: "Panadería El Maná",

    categoria: "Panaderías",

    descripcion: "Pan dulce tradicional, bolillo y repostería recién horneada.",

    telefono: "2351051926",

    direccion: "Reforma 59, Col. Centro, 93980 Emilio Carranza, Ver.",

    horario: "Lun a Dom, 7:00 a 22:00",

  },

  {

    nombre: "Panadería La Nueva Providencia",

    categoria: "Panaderías",

    descripcion: "Variedad de pan dulce y pan blanco fresco todos los días.",

    telefono: "2281792261",

    direccion: "Calle Vicente Guerrero, Av. Independencia 413 esquina, Col. Centro, 93980 Emilio Carranza, Ver.",

    horario: "Lun a Dom, 8:00 a 21:30",

  },



  // ==========================================

  // 9. HOTELES

  // ==========================================

  {

    nombre: "Hotel Carranza Inn",

    categoria: "Hoteles",

    descripcion: "Servicio de hospedaje y habitaciones sobre carretera federal.",

    telefono: "2353274770",

    direccion: "Carretera Federal Cardel-Nautla S/N, 93980 Emilio Carranza, Ver.",

    horario: "Lun a Dom, 24 horas",

  },

  {

    nombre: "Hotel Delicias",

    categoria: "Hoteles",

    descripcion: "Alojamiento cómodo con atención continua sobre la carretera costera.",

    telefono: "2282683625",

    direccion: "Carr. Costera del Golfo 24, Col. Centro, 93980 Emilio Carranza, Ver.",

    horario: "Lun a Dom, 24 horas",

  },

  {

    nombre: "Hotel Marea Baja",

    categoria: "Hoteles",

    descripcion: "Servicio de hospedaje para visitantes y viajeros en La Firmeza.",

    telefono: "2353274281",

    direccion: "Hernán Cortes, La Firmeza, 93980 Emilio Carranza, Ver.",

    horario: "",

  },

  {

    nombre: "Hotel Garza Canela",

    categoria: "Hoteles",

    descripcion: "Hospedaje céntrico en Emilio Carranza.",

    telefono: "",

    direccion: "Col. Centro, 93980 Emilio Carranza, Ver.",

    horario: "",

  },



  // ==========================================

  // 10. VETERINARIA Y AGRO

  // ==========================================

  {

    nombre: "Veterinaria La Herradura",

    categoria: "Veterinaria y Agro",

    descripcion: "Atención veterinaria, medicamentos y productos para mascotas y ganado.",

    telefono: "2353274204",

    direccion: "5 de Mayo 508, Col. Centro, 93980 Emilio Carranza, Ver.",

    horario: "Lun a Dom, 9:00 a 20:00",

  },

  {

    nombre: "Forrajera Albagran",

    categoria: "Veterinaria y Agro",

    descripcion: "Alimento balanceado para ganado, aves, mascotas e insumos agropecuarios.",

    telefono: "2351036787",

    direccion: "Carr. Costera del Golfo 12, 93980 Cong. Miraflores, Emilio Carranza, Ver.",

    horario: "Lun a Sáb, 8:00 a 18:00",

  },

  {

    nombre: "Asociación Ganadera",

    categoria: "Veterinaria y Agro",

    descripcion: "Gestión, apoyo y servicios para productores ganaderos de la localidad.",

    telefono: "",

    direccion: "Benito Juárez 30, Col. Centro, 93980 Emilio Carranza, Ver.",

    horario: "Lun a Vie, 8:00 a 14:00 y 15:00 a 17:00; Sáb, 8:00 a 13:00",

  },



  // ==========================================

  // 11. FERRETERÍAS

  // ==========================================

  {

    nombre: "Materiales El Tajín",

    categoria: "Ferreterías",

    descripcion: "Materiales para construcción, herramientas y artículos de ferretería.",

    telefono: "2353274883",

    direccion: "5 de Mayo 502, Col. Centro, 93980 Emilio Carranza, Ver.",

    horario: "Lun a Sáb, 8:00 a 20:00",

  },

  {

    nombre: "Ferretería y Materiales Santa Rosa",

    categoria: "Ferreterías",

    descripcion: "Ferretería general, plomería, material eléctrico y de construcción.",

    telefono: "2353274747",

    direccion: "5 de Mayo 37, Col. Centro, 93980 Emilio Carranza, Ver.",

    horario: "Lun a Vie, 8:00 a 14:00 y 16:00 a 20:00; Sáb, 8:00 a 16:00",

  },

  {

    nombre: "Maderas Finas del Sur",

    categoria: "Ferreterías",

    descripcion: "Maderería, tablas, polines y materiales para carpintería y obra.",

    telefono: "2351067073",

    direccion: "Benito Juárez, La Firmeza, 93980 Emilio Carranza, Ver.",

    horario: "Lun a Sáb, 8:00 a 20:00",

  },



  // ==========================================

  // 12. TALLERES

  // ==========================================

  {

    nombre: "Taller Mecánico Macha",

    categoria: "Talleres",

    descripcion: "Mantenimiento y reparación mecánica automotriz.",

    telefono: "",

    direccion: "La Firmeza, 93980 Emilio Carranza, Ver.",

    horario: "Lun a Sáb, 8:00 a 20:00",

  },

  {

    nombre: "Taller Aldo",

    categoria: "Talleres",

    descripcion: "Servicio mecánico y reparaciones generales.",

    telefono: "",

    direccion: "5 de Mayo entre Nicolás Bravo, Centro, 93980 Emilio Carranza, Ver.",

    horario: "",

  },

  {

    nombre: "Talachera Móvil",

    categoria: "Talleres",

    descripcion: "Reparación de llantas, parcheo y auxilio vial en carretera.",

    telefono: "2351059217",

    direccion: "Poza Rica - Veracruz 71, Col. Centro, 93980 Emilio Carranza, Ver.",

    horario: "",

  },

  {

    nombre: "Refaccionaría y Taller Eléctrico Robert",

    categoria: "Talleres",

    descripcion: "Venta de refacciones y servicio eléctrico automotriz.",

    telefono: "",

    direccion: "Vicente Guerrero, Col. Centro, 93980 Emilio Carranza, Ver.",

    horario: "Lun a Sáb, 8:00 a 18:00",

  },

  {

    nombre: "Taller Eléctrico Automotriz",

    categoria: "Talleres",

    descripcion: "Diagnóstico y reparación del sistema eléctrico para vehículos.",

    telefono: "2351048647",

    direccion: "Poza Rica - Veracruz 71, Col. Centro, 93980 Emilio Carranza, Ver.",

    horario: "",

  },

  {

    nombre: "Moto Servicio Bravo",

    categoria: "Talleres",

    descripcion: "Mantenimiento, servicio general y reparación de motocicletas.",

    telefono: "2229245388",

    direccion: "Reforma s/n, La Firmeza, 93980 Emilio Carranza, Ver.",

    horario: "Lun a Dom, 9:30 a 20:00",

  },



  // ==========================================

  // 13. SERVICIOS

  // ==========================================
  {

    nombre: "Conalep 320 Hermila Acosta",

    categoria: "Servicios",

    descripcion: "Institución pública de educación media superior en Emilio Carranza.",

    telefono: "235 327 48 04",

    direccion: "Carretera federal Cardel-Nautla, Km. 127, Col. Miraflores Deportiva, 93960 Vega de Alatorre, Ver.",

    horario: "Lun a Vie, , 8:00 a 15:30",

  },

  {

    nombre: "Servicio Eléctrico Carros y Tráiler 24 Horas",

    categoria: "Servicios",

    descripcion: "Reparación eléctrica automotriz y para transporte pesado las 24 horas.",

    telefono: "2351092682",

    direccion: "93980 Emilio Carranza, Ver.",

    horario: "Lun a Dom, 24 horas",

  },

  {

    nombre: "Reparación de Electrodomésticos",

    categoria: "Servicios",

    descripcion: "Mantenimiento y compostura de aparatos electrodomésticos del hogar.",

    telefono: "2351099779",

    direccion: "5 de Mayo 58, Col. Centro, 93980 Emilio Carranza, Ver.",

    horario: "",

  },

  {

    nombre: "Terminal ADO Emilio Carranza",

    categoria: "Servicios",

    descripcion: "Venta de boletos y corridas de autobuses de pasajeros.",

    telefono: "",

    direccion: "Hombres Ilustres 203, Col. Centro, 93980 Emilio Carranza, Ver.",

    horario: "Lun a Dom, 24 horas",

  },

  {

    nombre: "Gasolinera Pemex",

    categoria: "Servicios",

    descripcion: "Estación de servicio de combustible y lubricantes.",

    telefono: "5519442500",

    direccion: "Carr. Costera del Golfo 26, Col. Centro, 93980 Emilio Carranza, Ver.",

    horario: "Lun a Dom, 24 horas",

  },

  {

    nombre: "VIVCOM S.A. de C.V.",

    categoria: "Servicios",

    descripcion: "Servicios de internet y de conectividad en la zona centro.",

    telefono: "2353274269",

    direccion: "Reforma 19, Col. Centro, 93980 Emilio Carranza, Ver.",

    horario: "",

  },

  {

    nombre: "Banco del Bienestar Sucursal Emilio Carranza",

    categoria: "Servicios",

    descripcion: "Servicios bancarios, ventanilla y cajero automático frente a Plaza Hidalgo.",

    telefono: "8009002000",

    direccion: "Pl. Hidalgo SN, Col. Centro, 93981 Emilio Carranza, Ver.",

    horario: "Lun a Vie, 9:00 a 16:30",

  },

  {

    nombre: "Comisión de Agua del Estado de Veracruz (CAEV)",

    categoria: "Servicios",

    descripcion: "Oficina operativa para trámites, reportes y pago del servicio de agua.",

    telefono: "2353274202",

    direccion: "Calle Ignacio Zaragoza 33, Col. Centro, 93980 Emilio Carranza, Ver.",

    horario: "",

  },

  {

    nombre: "Telebachillerato Emilio Carranza",

    categoria: "Servicios",

    descripcion: "Institución pública de educación media superior en Emilio Carranza.",

    telefono: "",

    direccion: "Miguel Lerdo 502, La Firmeza, 93980 Emilio Carranza, Ver.",

    horario: "",

  },



  // ==========================================

  // 14. SALUD Y BELLEZA

  // ==========================================

  {

    nombre: "Barbería Carranza",

    categoria: "Salud y Belleza",

    descripcion: "Cortes de cabello, arreglo de barba y estilo masculino.",

    telefono: "2351129774",

    direccion: "Francisco I. Madero 608, La Firmeza, 93980 Emilio Carranza, Ver.",

    horario: "Mar a Sáb, 10:00 a 14:00 y 16:00 a 20:00; Dom, 12:00 a 16:00",

  },

  {

    nombre: "Nano Beauty",

    categoria: "Salud y Belleza",

    descripcion: "Estética, belleza y cuidado personal en la colonia Centro.",

    telefono: "2281513750",

    direccion: "5 de Mayo entre 5 de febrero y carretera federal, Col. Centro, 93980 Emilio Carranza, Ver.",

    horario: "Lun a Sáb, 10:00 a 20:00",

  },

  {

    nombre: "Chabe Nails & Teo Beauty Salón",

    categoria: "Salud y Belleza",

    descripcion: "Salón de belleza, aplicación de uñas y arreglo personal.",

    telefono: "2351037424",

    direccion: "Reforma esquina Zaragoza Centro, 93980 Emilio Carranza, Ver.",

    horario: "Lun a Sáb, 9:00 a 20:00",

  },

  {

    nombre: "MakeUp Artist Ingrid GO",

    categoria: "Salud y Belleza",

    descripcion: "Maquillaje profesional para eventos sociales y sesiones.",

    telefono: "2351038070",

    direccion: "Calle Ignacio Zaragoza 414, Col. Centro, 93980 Emilio Carranza, Ver.",

    horario: "Vie a Dom, 9:00 a 17:00",

  },

  {

    nombre: "Nails Yuli",

    categoria: "Salud y Belleza",

    descripcion: "Diseño de uñas, gelish y cuidado de manos.",

    telefono: "2351052384",

    direccion: "Emilio Carranza 17, Luz Maria Zapata, 93980 Emilio Carranza, Ver.",

    horario: "",

  },

  {

    nombre: "Estudio de Belleza Ivette Olvera",

    categoria: "Salud y Belleza",

    descripcion: "Servicios de estética y belleza sobre calle 5 de Mayo.",

    telefono: "",

    direccion: "5 de Mayo, Col. Centro, 93980 Emilio Carranza, Ver.",

    horario: "",

  },

  {

    nombre: "Fundación Doctor Hernández Zurita, I.B.P.",

    categoria: "Salud y Belleza",

    descripcion: "Consulta médica y servicios de salud comunitaria.",

    telefono: "2726885015",

    direccion: "5 de Mayo 201, Col. Centro, 93980 Emilio Carranza, Ver.",

    horario: "Lun a Vie, 8:00 a 18:00; Sáb, 8:00 a 14:00",

  },

  {

    nombre: "Centro de Salud Emilio Carranza",

    categoria: "Salud y Belleza",

    descripcion: "Atención médica primaria y servicios de salud pública en Los Robles.",

    telefono: "2351035095",

    direccion: "A Lechuguillas, Manuel L. Morales, Col. Los Robles, 93980 Emilio Carranza, Ver.",

    horario: "Lun a Vie, 8:00 a 16:00",

  },

  {

    nombre: "Consultorio Dental Dra. Paula María Sánchez Rodríguez",

    categoria: "Salud y Belleza",

    descripcion: "Consulta odontológica, limpiezas y tratamientos dentales.",

    telefono: "",

    direccion: "Calle Diamante 9 A, Fraccionamiento Bugambilias, 91637 Emilio Carranza, Ver.",

    horario: "",

  },

  {

    nombre: "Área Cross Gym Club",

    categoria: "Salud y Belleza",

    descripcion: "Gimnasio de entrenamiento funcional, acondicionamiento físico y rutinas.",

    telefono: "2351129362",

    direccion: "Benito Juárez 45, La Firmeza, 93980 Emilio Carranza, Ver.",

    horario: "Lun a Vie, 6:00 a 14:00 y 16:00 a 22:00; Sáb, 6:30 a 13:00",

  },

  {

    nombre: "Gorila Gym",

    categoria: "Salud y Belleza",

    descripcion: "Gimnasio y entrenamiento con pesas en la zona centro.",

    telefono: "",

    direccion: "Av. Independencia, Col. Centro, 93980 Emilio Carranza, Ver.",

    horario: "",

  },



  // ==========================================

  // 15. BOTAS Y CINTURONES

  // ==========================================

  {

    nombre: "Botas y Botines Martínez",

    categoria: "Botas y Cinturones",

    descripcion: "Botas vaqueras, botines de piel y calzado de trabajo.",

    telefono: "2351093681",

    direccion: "Vicente Guerrero, Col. Centro, 93980 Emilio Carranza, Ver.",

    horario: "Lun, Mar, Jue a Sáb, 9:00 a 20:30; Mié, 9:00 a 16:30; Dom, 14:00 a 20:00",

  },

  {

    nombre: "Cueros Carranza",

    categoria: "Botas y Cinturones",

    descripcion: "Artículos de piel, cinturones y trabajos de talabartería.",

    telefono: "",

    direccion: "4 de Junio 8, La Firmeza, 93980 Emilio Carranza, Ver.",

    horario: "",

  },

  {

    nombre: "Remodelador de Calzado",

    categoria: "Botas y Cinturones",

    descripcion: "Reparación, costura y restauración de calzado y artículos de piel.",

    telefono: "",

    direccion: "Vicente Guerrero 41, Col. Centro, 93980 Emilio Carranza, Ver.",

    horario: "",

  },

];





/* ==========================================================================

   BASE DE DATOS DE TURISMO

   Alimentará la pestaña "Turismo" usando las mismas reglas de formato.

   ========================================================================== */

const LUGARES = [

  {

    nombre: "Playa Lechuguillas",

    descripcion: "Destino costero natural con zona de playa, palapas y restaurantes de mariscos frescos.",

    direccion: "Playa Lechuguillas, 93960 Lechuguillas, Ver.",

    consejo: "Ideal para disfrutar mariscos frescos y caminar por la costa por la tarde.",

  },

  {

    nombre: "Parroquia Santa Bárbara",

    descripcion: "Templo parroquial principal de la comunidad en el corazón de Emilio Carranza.",

    direccion: "Benito Juárez 30, Col. Centro, 93980 Emilio Carranza, Ver.",

    consejo: "Ideal para conocer el centro histórico y respetar horarios de celebración.",

  },

  {

    nombre: "Plaza Hidalgo (Parque Central)",

    descripcion: "Plaza principal de Emilio Carranza con áreas verdes y comercios alrededor.",

    direccion: "Av. Independencia, Col. Centro, 93980 Emilio Carranza, Ver.",

    consejo: "Mejor visita por la tarde-noche para disfrutar los antojitos de los alrededores.",

  },

  {

    nombre: "Unidad Deportiva La Carretera",

    descripcion: "Espacio público recreativo y deportivo para partidos y actividad física al aire libre.",

    direccion: "Carr. Costera del Golfo 24, Col. Centro, 93980 Emilio Carranza, Ver.",

    consejo: "Mejor horario por la tarde cuando baja el sol.",

  },

];