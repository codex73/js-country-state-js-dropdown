// Country State JS Dropdown

document.addEventListener("DOMContentLoaded", function(event) {

  var country_arr = {
    "PR": "Puerto Rico",
    "US": "Estados Unidos",
    "MX": "México",
    "CR": "Costa Rica",
    "CO": "Colombia",
    "AR": "Argentina",
    "CL": "Chile",
    "PE": "Perú",
    "PA": "Panama",
    "CA": "Canada",
    "HN": "Honduras",
    "DO": "Republica Dominicana",
    "ES": "España",
    ""  : "Otro"
  }

  for (var key in country_arr) {

    var country_opt = document.createElement('option');

    if (country_arr.hasOwnProperty(key)) {

      country_opt.value = key;
      country_opt.text = country_arr[key];
      document.getElementById("country").appendChild(country_opt);
    }
  }
});

var states_arr = {
  "PR": ["Adjuntas", "Aguada", "Aguadilla", "Aguas Buenas", "Aibonito", "Anasco", "Arecibo", "Arroyo", "Barceloneta", "Barranquitas", "Bayamon", "Cabo Rojo", "Caguas", "Camuy", "Canovanas", "Carolina", "Catano", "Cayey", "Ceiba", "Ciales", "Cidra", "Coamo", "Comerio", "Corozal", "Culebra", "Dorado", "Fajardo", "Florida", "Guanica", "Guayama", "Guayanilla", "Guaynabo", "Gurabo", "Hatillo", "Hormigueros", "Humacao", "Isabela", "Jayuya", "Juana Diaz", "Juncos", "Lajas", "Lares", "Las Marias", "Las Piedras", "Loiza", "Luquillo", "Manati", "Maricao", "Maunabo", "Mayaguez", "Moca", "Morovis", "Naguabo", "Naranjito", "Orocovis", "Patillas", "Penuelas", "Ponce", "Quebradillas", "Rincon", "Rio Grande", "Sabana Grande", "Salinas", "San German", "San Juan", "San Lorenzo", "San Sebastian", "Santa Isabel", "Toa Alta", "Toa Baja", "Trujillo Alto", "Utuado", "Vega Alta", "Vega Baja", "Vieques", "Villalba", "Yabucoa", "Yauco"],
  "US": ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "District of Columbia", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"],
  "MX": ["Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Chiapas", "Chihuahua", "Coahuila de Zaragoza", "Colima", "Distrito Federal", "Durango", "Guanajuato", "Guerrero", "Hidalgo", "Jalisco", "Mexico", "Michoacan de Ocampo", "Morelos", "Nayarit", "Nuevo Leon", "Oaxaca", "Puebla", "Queretaro de Arteaga", "Quintana Roo", "San Luis Potosi", "Sinaloa", "Sonora", "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz-Llave", "Yucatan", "Zacatecas"],
  "CR": ["Alajuela", "Cartago", "Guanacaste", "Heredia", "Limon", "Puntarenas", "San Jose"],
  "CO": ["Amazonas", "Antioquia", "Arauca", "Atlantico", "Bolivar", "Boyaca", "Caldas", "Caqueta", "Casanare", "Cauca", "Cesar", "Choco", "Cordoba", "Cundinamarca", "Distrito Capital de Santa Fe de Bogota", "Guainia", "Guaviare", "Huila", "La Guajira", "Magdalena", "Meta", "Narino", "Norte de Santander", "Putumayo", "Quindio", "Risaralda", "San Andres y Providencia", "Santander", "Sucre", "Tolima", "Valle del Cauca", "Vaupes", "Vichada"],
  "AR": ["Antartica e Islas del Atlantico Sur", "Buenos Aires", "Buenos Aires Capital Federal", "Catamarca", "Chaco", "Chubut", "Cordoba", "Corrientes", "Entre Rios", "Formosa", "Jujuy", "La Pampa", "La Rioja", "Mendoza", "Misiones", "Neuquen", "Rio Negro", "Salta", "San Juan", "San Luis", "Santa Cruz", "Santa Fe", "Santiago del Estero", "Tierra del Fuego", "Tucuman"],
  "CL": ["Aisen del General Carlos Ibanez del Campo", "Antofagasta", "Araucania", "Atacama", "Bio-Bio", "Coquimbo", "Libertador General Bernardo O'Higgins", "Los Lagos", "Magallanes y de la Antartica Chilena", "Maule", "Region Metropolitana (Santiago)", "Tarapaca", "Valparaiso"],
  "PE": ["Amazonas", "Antioquia", "Arauca", "Atlantico", "Bolivar", "Boyaca", "Caldas", "Caqueta", "Casanare", "Cauca", "Cesar", "Choco", "Cordoba", "Cundinamarca", "Distrito Capital de Santa Fe de Bogota", "Guainia", "Guaviare", "Huila", "La Guajira", "Magdalena", "Meta", "Narino", "Norte de Santander", "Putumayo", "Quindio", "Risaralda", "San Andres y Providencia", "Santander", "Sucre", "Tolima", "Valle del Cauca", "Vaupes", "Vichada"],
  "PA": ["Bocas del Toro", "Chiriqui", "Cocle", "Colon", "Darien", "Herrera", "Los Santos", "Panama", "San Blas", "Veraguas"],
  "CA": ["Alberta", "British Columbia", "Manitoba", "New Brunswick", "Newfoundland", "Northwest Territories", "Nova Scotia", "Nunavut", "Ontario", "Prince Edward Island", "Quebec", "Saskatchewan", "Yukon Territory"],
  "HN": ["Atlantida", "Choluteca", "Colon", "Comayagua", "Copan", "Cortes", "El Paraiso", "Francisco Morazan", "Gracias a Dios", "Intibuca", "Islas de la Bahia", "La Paz", "Lempira", "Ocotepeque", "Olancho", "Santa Barbara", "Valle", "Yoro"],
  "DO": ["Azua", "Baoruco", "Barahona", "Dajabon", "Distrito Nacional", "Duarte", "El Seibo", "Elias Pina", "Espaillat", "Hato Mayor", "Independencia", "La Altagracia", "La Romana", "La Vega", "Maria Trinidad Sanchez", "Monsenor Nouel", "Monte Cristi", "Monte Plata", "Pedernales", "Peravia", "Puerto Plata", "Salcedo", "Samana", "San Cristobal", "San Juan", "San Pedro de Macoris", "Sanchez Ramirez", "Santiago", "Santiago Rodriguez", "Valverde"],
  "ES": ["Andalucia", "Aragon", "Asturias", "Baleares (Balearic Islands)", "Canarias (Canary Islands)", "Cantabria", "Castilla y Leon", "Castilla-La Mancha", "Cataluna", "Ceuta", "Communidad Valencian", "Extremadura", "Galicia", "Islas Chafarinas", "La Rioja", "Madrid", "Melilla", "Murcia", "Navarra", "Pais Vasco (Basque Country)", "Penon de Alhucemas", "Penon de Velez de la Gomera"],
}

function showstates(iso) {

  if (iso!='') {

    setTimeout(function() {

      document.getElementById('state_sec').style.display = 'block';

      var states = states_arr[iso];
      Object.prototype.newMethod = "cc";

      document.getElementById('state').innerHTML = '';

      for (var i = 0; i < states.length; i++) {

        var states_opt = document.createElement('option');
        states_opt.value = states[i];
        states_opt.text = states[i];

        document.getElementById("state").appendChild(states_opt);
      }

    }, 10);

  } else {

    document.getElementById('state_sec').style.display = 'none';
    return;
  }
}
