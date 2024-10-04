/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Elimina los registros existentes en la tabla
  await knex('usersData').del();

  // Inserta nuevos registros
  await knex('usersData').insert([
    { nombre: 'Juan Pérez', edad: 30, habilidades: ['JavaScript', 'React'], precio_por_hora: 20, descripcion: 'Desarrollador web con experiencia en JavaScript.' },
    { nombre: 'Ana Gómez', edad: 25, habilidades: ['Python', 'Django'], precio_por_hora: 25, descripcion: 'Desarrolladora de backend con experiencia en Python.' },
    { nombre: 'Luis Martínez', edad: 28, habilidades: ['Java', 'Spring'], precio_por_hora: 30, descripcion: 'Desarrollador Java con 5 años de experiencia.' },
    { nombre: 'Marta Sánchez', edad: 22, habilidades: ['PHP', 'Laravel'], precio_por_hora: 22, descripcion: 'Desarrolladora PHP con experiencia en Laravel.' },
    { nombre: 'Carlos López', edad: 35, habilidades: ['C#', '.NET'], precio_por_hora: 40, descripcion: 'Desarrollador C# con experiencia en aplicaciones empresariales.' },
    { nombre: 'Laura Torres', edad: 27, habilidades: ['Ruby', 'Rails'], precio_por_hora: 28, descripcion: 'Desarrolladora Ruby on Rails apasionada por el diseño de aplicaciones.' },
    { nombre: 'Pedro Ramírez', edad: 32, habilidades: ['Go', 'Microservicios'], precio_por_hora: 35, descripcion: 'Ingeniero de software con experiencia en microservicios.' },
    { nombre: 'Sofía Herrera', edad: 26, habilidades: ['Swift', 'iOS'], precio_por_hora: 30, descripcion: 'Desarrolladora iOS con un enfoque en la experiencia del usuario.' },
    { nombre: 'Fernando Castro', edad: 31, habilidades: ['Kotlin', 'Android'], precio_por_hora: 30, descripcion: 'Desarrollador Android con un gran interés en el diseño de UI.' },
    { nombre: 'Valeria Díaz', edad: 24, habilidades: ['HTML', 'CSS', 'JavaScript'], precio_por_hora: 18, descripcion: 'Diseñadora web con experiencia en front-end.' },
    { nombre: 'Javier Morales', edad: 29, habilidades: ['SQL', 'PostgreSQL'], precio_por_hora: 25, descripcion: 'Experto en bases de datos con conocimientos en PostgreSQL.' },
    { nombre: 'Isabel Gómez', edad: 23, habilidades: ['Node.js', 'Express'], precio_por_hora: 23, descripcion: 'Desarrolladora full-stack con experiencia en Node.js.' },
    { nombre: 'Diego Fernández', edad: 33, habilidades: ['TypeScript', 'Angular'], precio_por_hora: 27, descripcion: 'Desarrollador front-end especializado en Angular.' },
    { nombre: 'Cristina Núñez', edad: 26, habilidades: ['Flutter', 'Dart'], precio_por_hora: 28, descripcion: 'Desarrolladora móvil con experiencia en Flutter.' },
    { nombre: 'Alberto García', edad: 30, habilidades: ['C++', 'Python'], precio_por_hora: 35, descripcion: 'Ingeniero de software con experiencia en programación de sistemas.' },
    { nombre: 'Gina Salazar', edad: 25, habilidades: ['HTML', 'CSS', 'SEO'], precio_por_hora: 20, descripcion: 'Especialista en marketing digital con conocimientos en desarrollo web.' },
    { nombre: 'Eduardo Torres', edad: 28, habilidades: ['JavaScript', 'Vue.js'], precio_por_hora: 29, descripcion: 'Desarrollador front-end con pasión por Vue.js.' },
    { nombre: 'Camila Méndez', edad: 27, habilidades: ['React Native', 'JavaScript'], precio_por_hora: 32, descripcion: 'Desarrolladora móvil con enfoque en aplicaciones multiplataforma.' },
    { nombre: 'Miguel Ángel', edad: 34, habilidades: ['Ruby', 'Sinatra'], precio_por_hora: 31, descripcion: 'Desarrollador Ruby con un enfoque en aplicaciones ligeras.' },
    { nombre: 'Elena Ruiz', edad: 29, habilidades: ['Rust', 'WebAssembly'], precio_por_hora: 38, descripcion: 'Desarrolladora especializada en aplicaciones de alto rendimiento.' },
    { nombre: 'Jorge Silva', edad: 31, habilidades: ['Scala', 'Akka'], precio_por_hora: 36, descripcion: 'Desarrollador con experiencia en programación funcional y sistemas concurrentes.' }
  ]);
};

