"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

console.log('Destructuración de arreglos');
var nombres = ['Luis Fernando', 'Monse', 'Brandon', 'Oscar', 'David'];
var numero_caracter = nombres.map(function (nombre) {
  return "".concat(nombre, " tiene ").concat(nombre.length, " letras de caracteres");
});
console.log(numero_caracter);
/* (parametro) => {
    return //codigo
} */
// PARAMETROS POR DEFECTO

console.log('Parametros por defecto');

function registrarUsuario() {
  var nombre = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Sin nombre';
  var pais = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Sin pais';
  var correo = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'Sin correo';
  var telefono = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '0000000';
  return "Nombre: ".concat(nombre, ", pais: ").concat(pais, ", correo: ").concat(correo, ", telefono: ").concat(telefono);
}

console.log(registrarUsuario('Luis', 'México', 'correo@correo.com')); //DESTRUCTURAR ARREGLOS 

console.log('Destructuración de Objetos');
var persona = ['Luis Fernando', 23, 'México'];

var mostrarInfo = function mostrarInfo() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : persona,
      _ref2 = _slicedToArray(_ref, 4),
      nombre = _ref2[0],
      edad = _ref2[1],
      pais = _ref2[2],
      _ref2$ = _ref2[3],
      profesion = _ref2$ === void 0 ? 'No especificado' : _ref2$;

  return console.log("Nombre: ".concat(nombre, ", Edad: ").concat(edad, ", Pais: ").concat(pais, ", Profesion: ").concat(profesion));
};

mostrarInfo(persona);
alert('Revistar la consola del navegador'); // CLASES

console.log('Uso de Clases');

var Usuario = /*#__PURE__*/function () {
  function Usuario() {
    var nombre = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'No definida';
    var edad = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'No definida';

    _classCallCheck(this, Usuario);

    this.nombre = nombre, this.edad = edad;
  }

  _createClass(Usuario, [{
    key: "mostrarInfo",
    value: function mostrarInfo() {
      $('#bodyT').append("<tr>\n                <td>\n                ".concat(this.nombre, "\n                </td>\n                <td>\n                ").concat(this.edad, "\n                </td>\n            </tr>"));
    }
  }]);

  return Usuario;
}();

var nombre;
var edad;
$('#btn').click(function () {
  nombre = $('#sample3').val();
  edad = $('#sample4').val();
  var persona = new Usuario(nombre, edad);
  persona.mostrarInfo();
});