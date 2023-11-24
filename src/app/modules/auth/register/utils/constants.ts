import { ICONTANTS_REGISTER } from "./constants.interface";

export const constantsRegister: ICONTANTS_REGISTER = {
  title: 'Regístrate',
  socialRegister: [
    {
      src: '../../../../assets/icons/facebook.png',
      alt: 'facebook',
    },
    {
      src: '../../../../assets/icons/apple.png',
      alt: 'apple',
    },
    {
      src: '../../../../assets/icons/google.png',
      alt: 'google',
    },
  ],
  alternative: 'o',
  fields: [
    {
      name: "Nombre",
      placeholder: "Ingresa tu(s) nombre(s)"
    },
    {
      name: "Apellido(s)",
      placeholder: "Ingresa tu(s) apellido(s)"
    },
    {
      name: "Sexo",
      placeholder: "ESTE TIENE QUE SER UN SELECT",
      options: ["Femenino", "Masculino"]
    },
    {
      name: "DNI",
      placeholder: "Ingresa su número de DNI"
    },
    {
      name: "Email",
      placeholder: "Ingresa tu dirección de email"
    },
    {
      name: "Teléfono",
      placeholder: "Ingrese su teléfono"
    },
    {
      name: "País",
      placeholder: "SELECT",
      options: ["añadir los paises", "añadir los paises", "añadir los paises"]
    },
    {
      name: "Ciudad",
      placeholder: "Ingresa tu ciudad"
    },
  ],
  button: {
    text: "Regístrate",
    min: "min"
  },
  ask: ["¿Ya tienes una cuenta? ", "Inicia tu sesión"]
};
