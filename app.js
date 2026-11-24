/* ==========================================================================
   ARCHIVO PRINCIPAL DE LÓGICA (app.js)
   Envuelto en una IIFE (Función autoejecutable) para proteger nuestras
   variables y evitar conflictos con otros scripts.
   ========================================================================== */
(function () {
  "use strict"; // Activa el modo estricto para detectar errores comunes

  // ========================================================================
  // PASO 1: ESTADO DE LA APLICACIÓN (Memoria temporal)
  // Guarda qué categoría tiene seleccionada el usuario en este momento.
  // ========================================================================
  var categoriaActual = "Todas";

  // ========================================================================
  // PASO 2: FUNCIONES AUXILIARES (Herramientas de apoyo)
  // ========================================================================
  
  // Evita inyección de código malicioso (XSS) convirtiendo símbolos en texto seguro
  function esc(texto) {
    return String(texto)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // Quita acentos y convierte a minúsculas para que "farmacia" encuentre "Farmacía"
  function sinAcentos(texto) {
    return texto
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  // Genera dinámicamente el link de Google Maps a partir de la dirección
 // Genera dinámicamente el link de Google Maps:
  // Si el negocio tiene un link exacto en "mapa", usa ese; si está vacío, busca por dirección.
  function enlaceMapa(direccion, urlExacta) {
    if (urlExacta && urlExacta.trim() !== "") {
      return urlExacta.trim();
    }
    return (
      "https://www.google.com/maps/search/?api=1&query=" +
      encodeURIComponent(direccion)
    );
  }

  // Genera el link directo a WhatsApp con el código de México (+52) y un saludo
  function enlaceWhatsApp(telefono, nombre) {
    var mensaje = "Hola, vi su negocio " + nombre + " en el directorio local de los alumnos del Conalep 320.";
    return (
      "https://wa.me/52" + telefono + "?text=" + encodeURIComponent(mensaje)
    );
  }

  // ========================================================================
  // PASO 3: PLANTILLAS HTML (Moldes para crear tarjetas)
  // Reciben un objeto de datos.js y devuelven el código HTML listo para pintar.
  // ========================================================================
 function tarjetaNegocio(n) {
    return (
      '<article class="tarjeta">' +
      '<span class="etiqueta">' + esc(n.categoria) + "</span>" +
      "<h2>" + esc(n.nombre) + "</h2>" +
      "<p>" + esc(n.descripcion) + "</p>" +
      '<p class="dato">' + esc(n.direccion) + "</p>" +
      '<p class="dato">' + esc(n.horario) + "</p>" +
      '<div class="acciones">' +
      '<a class="boton whatsapp" href="' + esc(enlaceWhatsApp(n.telefono, n.nombre)) + '" target="_blank" rel="noopener noreferrer">WhatsApp</a>' +
      '<a class="boton" href="tel:+52' + esc(n.telefono) + '">Llamar</a>' +
      '<a class="boton mapa" href="' + esc(enlaceMapa(n.direccion, n.mapa)) + '" target="_blank" rel="noopener noreferrer">Cómo llegar</a>' +
      "</div></article>"
    );
  }

  function tarjetaLugar(l) {
    return (
      '<article class="tarjeta">' +
      "<h2>" + esc(l.nombre) + "</h2>" +
      "<p>" + esc(l.descripcion) + "</p>" +
      '<p class="dato">Consejo: ' + esc(l.consejo) + "</p>" +
      '<div class="acciones">' +
      '<a class="boton mapa" href="' + esc(enlaceMapa(l.nombre + ", " + l.direccion)) + '" target="_blank" rel="noopener noreferrer">Cómo llegar</a>' +
      "</div></article>"
    );
  }

  // ========================================================================
  // PASO 4: FUNCIONES DE RENDERIZADO (Dibujan los elementos en pantalla)
  // ========================================================================
  
  // Extrae las categorías únicas de NEGOCIOS y crea los botones superiores
  function pintarCategorias() {
    var nombres = ["Todas"];
    NEGOCIOS.forEach(function (n) {
      if (nombres.indexOf(n.categoria) === -1) nombres.push(n.categoria);
    });
    var contenedor = document.getElementById("categorias");
    contenedor.innerHTML = nombres
      .map(function (c) {
        var activa = c === categoriaActual ? " activa" : "";
        return (
          '<button class="chip' + activa + '" data-categoria="' + esc(c) + '">' +
          esc(c) +
          "</button>"
        );
      })
      .join("");
  }

  // Filtra los negocios según la categoría elegida y lo escrito en el buscador
  function pintarNegocios() {
    var texto = sinAcentos(document.getElementById("buscar").value.trim());
    var resultado = NEGOCIOS.filter(function (n) {
      var coincideCategoria =
        categoriaActual === "Todas" || n.categoria === categoriaActual;
      var base = sinAcentos(n.nombre + " " + n.descripcion + " " + n.categoria);
      return coincideCategoria && base.indexOf(texto) !== -1;
    });

    var lista = document.getElementById("lista-negocios");
    lista.innerHTML = resultado.length
      ? resultado.map(tarjetaNegocio).join("")
      : '<div class="vacio">No encontramos negocios con esa búsqueda. Prueba con otra palabra o elige “Todas”.</div>';
    
    document.getElementById("contador").textContent =
      resultado.length + " resultado(s)";
  }

  // Dibuja todas las tarjetas de lugares turísticos
  function pintarTurismo() {
    document.getElementById("lista-turismo").innerHTML =
      LUGARES.map(tarjetaLugar).join("");
  }

  // Controla qué sección se muestra y cuál se oculta al hacer clic en las pestañas
  function cambiarVista(vista) {
    document.getElementById("vista-negocios").hidden = vista !== "negocios";
    document.getElementById("vista-turismo").hidden = vista !== "turismo";
    document.getElementById("vista-equipo").hidden = vista !== "equipo";

    document.querySelectorAll(".pestana").forEach(function (b) {
      var activa = b.getAttribute("data-vista") === vista;
      b.classList.toggle("activa", activa);
      b.setAttribute("aria-selected", activa ? "true" : "false");
    });
  }

  // ========================================================================
  // PASO 5: EVENTOS (Escuchan las acciones del usuario)
  // ========================================================================
  
  // 1. Clic en las pestañas (Negocios, Turismo, Equipo)
  document.querySelectorAll(".pestana").forEach(function (b) {
    b.addEventListener("click", function () {
      cambiarVista(b.getAttribute("data-vista"));
    });
  });

  // 2. Clic en los botones de categoría (Delegación de eventos)
  document.getElementById("categorias").addEventListener("click", function (e) {
    var chip = e.target.closest(".chip");
    if (!chip) return;
    categoriaActual = chip.getAttribute("data-categoria");
    pintarCategorias();
    pintarNegocios();
  });

  // 3. Escribir en la barra de búsqueda (Se ejecuta con cada letra presionada)
  document.getElementById("buscar").addEventListener("input", pintarNegocios);

  // 4. Botón de Modo Oscuro / Claro (Guarda la preferencia en el navegador)
  var btnTema = document.getElementById("btn-tema");
  if (btnTema) {
    // Al cargar, revisa si el usuario ya había elegido modo oscuro anteriormente
    if (localStorage.getItem("tema") === "oscuro") {
      document.body.classList.add("modo-oscuro");
      btnTema.textContent = "☀️ Modo Claro";
    }

    btnTema.addEventListener("click", function () {
      var esOscuro = document.body.classList.toggle("modo-oscuro");
      btnTema.textContent = esOscuro ? "☀️ Modo Claro" : "🌙 Modo Oscuro";
      localStorage.setItem("tema", esOscuro ? "oscuro" : "claro");
    });
  }

  // ========================================================================
  // PASO 6: CONEXIÓN A API EXTERNA (Clima en tiempo real)
  // ========================================================================
  function cargarClima() {
    var tempEl = document.getElementById("clima-temp");
    var iconoEl = document.getElementById("clima-icono");
    if (!tempEl || !iconoEl) return;

    // Coordenadas exactas de Emilio Carranza, Vega de Alatorre, Ver.
    var url =
      "https://api.open-meteo.com/v1/forecast?latitude=19.9708&longitude=-96.6125&current_weather=true";

    // fetch() pide los datos por internet de forma asíncrona (sin congelar la página)
    fetch(url)
      .then(function (respuesta) {
        return respuesta.json();
      })
      .then(function (datos) {
        var clima = datos.current_weather;
        var temp = Math.round(clima.temperature);
        var codigo = clima.weathercode;

        // Traduce el código numérico de la API a un emoji
        var icono = "☀️";
        if (codigo >= 1 && codigo <= 3) icono = "⛅";
        else if (codigo >= 45 && codigo <= 48) icono = "🌫️";
        else if (codigo >= 51 && codigo <= 67) icono = "🌧️";
        else if (codigo >= 80 && codigo <= 99) icono = "⛈️";

        iconoEl.textContent = icono;
        tempEl.textContent = temp + "°C";
      })
      .catch(function () {
        // Plan B: Si falla el internet, muestra el nombre de la localidad
        iconoEl.textContent = "🌤️";
        tempEl.textContent = "Emilio Carranza";
      });
  }

  // ========================================================================
  // PASO 7: ARRANQUE INICIAL DE LA APLICACIÓN
  // Todo lo anterior eran definiciones; aquí es donde realmente se ejecuta
  // por primera vez al abrir la página.
  // ========================================================================
  pintarCategorias();
  pintarNegocios();
  pintarTurismo();
  cargarClima();
})();