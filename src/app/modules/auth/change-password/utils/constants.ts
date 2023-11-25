import { ICONSTANTS_CHANGE_PASSWORD } from "./constants.interface";

export const CONSTANTS_CHANGE_PASSWORD: ICONSTANTS_CHANGE_PASSWORD = {
  title: 'Cambia tu contraseña',
  fields: [
    {
      label: 'Contraseña actual',
      placeholder: 'Ingresa tu contraseña',
    },
    {
      label: 'Nueva contraseña',
      placeholder: 'Ingresa tu nueva contraseña',
    },
    {
      label: 'Confirma su nueva contraseña',
      placeholder: 'Confirma tu contraseña',
    },
  ],
  requirements: [
    'Entre 5 a 20 caracteres',
    'Al menos una mayúscula',
    'Al menos una minúscula',
    'Al menos una número',
  ],
  button: {
    text: 'Empíeza',
    custom: 'min',
  },
};
