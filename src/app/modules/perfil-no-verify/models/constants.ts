import { IInputProfile, ISelectProfile } from './constants.interface';

export const contantsKYC: any = {
  title: 'Completar los datos de mi cuenta',

  personalData: {
    subtitle: 'Datos personales',
    fields: [
      {
        title: 'Telefono',
        placeholder: 'Ingresa a celular',
        custom: 'default',
      },
      {
        label: 'Nivel de estudios*',
        info: ['Ninguno', 'Bachiller', 'Universitario'],
      },
      {
        label: 'Situación laboral*',
        info: [
          'Desempleado',
          'Jubilado',
          'Independiente',
          'Empleado',
          'Estudiante',
        ],
      },
    ],
  },

  finance: {
    subtitle: 'Finanzas',
    fields: [
      {
        label: 'Ingreso total anual estimado (USD)*',
        info: [
          'Menos de 5,000 USD',
          '5,000 USD - 10,000 USD',
          '10,000 USD - 50,000 USD',
          '50,000 USD - 100,000 USD',
          '100,000 USD - 250,000 USD',
          '250,000 USD - 500,000 USD',
          '500,000 USD - 1,000,000 USD',
          'mayor a 1,000,000 USD',
        ],
      },
      {
        label: 'Patrimonio total estimado (USD)*',
        info: [
          'Menos de 5,000 USD',
          '5,000 USD - 10,000 USD',
          '10,000 USD - 50,000 USD',
          '50,000 USD - 100,000 USD',
          '100,000 USD - 250,000 USD',
          '250,000 USD - 500,000 USD',
          'MAS A 500,000 USD',
        ],
      },
    ],
  },

  profile: {
    subtitle: 'Perfil de la cuenta',
    fields: [
      {
        label: 'Moneda*',
        info: ['USD'],
      },
      {
        label: 'Apalancamiento*',
        info: ['1:100', 'Apalancamiento 1:30'],
      },
    ],
  },

  experience: {
    subtitle: 'Experiencia',
    question: "¿Cuentas con experiencia en el mercado forex y/o CFD's?",
    response: ['Sí', 'No'],
    fields: [
      {
        label: 'Años de experiencia*',
        info: ['menos de 1 año', 'De 1 año a 3 años', 'Más de 3 años'],
      },
      {
        title: 'Operaciones al día*',
        placeholder: 'Operaciones al día *',
        custom: 'default',
      },
      {
        title: 'Operación a la semana*',
        placeholder: 'Operaciones a la semana *',
        custom: 'default',
      },
      {
        title: 'Operaciones al mes*',
        placeholder: 'Operaciones al mes *',
        custom: 'default',
      },
      {
        label: 'Instrumentos que más opera',
        info: ['menos de 1 año', 'De 1 año a 3 años', 'Más de 3 años'],
      },
      {
        label: 'Propósito y Naturaleza de las Transacciones',
        info: ['Especulativo', 'Cobertura', 'Inversión', 'Diversificación'],
      },
    ],
  },

  residence: {
    subtitle: 'Prueba de Residencia',
    description: 'El nombre del títular no es el tuyo',
    fields: [
      {
        label: 'No aparacere mi nombre porque...',
        info: [
          'Vivo en arrendamiento',
          'Vivo en casa familiar',
          'No registra ningun recibo a mi nombre',
        ],
      },
    ],
    condicional: 'Estoy de acuerdo',
    text: 'En pleno ejercicio de mis derechos ciudadanos y de conformidad con lo dispuesto en la Ley de Simplificación de la Certificación Domiciliaria, DECLARO BAJO JURAMENTO que mi domicilio actual es el que proporcioné anteriormente. En caso de que la información resulte ser falsa, declaro haber incurrido en los delitos de falsa declaración en proceso.',
  },

  document: {
    subtitle: 'Documentos',
    description: [
      'Se admiten solo imágenes de los siguientes formatos: ',
      '.jpeg, ',
      '.jpg, ',
      '.png, ',
      ' así como docuemntos en ',
      '.pdf, ',
      'peso máximo de los mismos ',
      '5MB',
    ],
    filesUploader: ['Frontal del documento de identidad*', 'Reverso del documento de identidad*', 'Recibo de servicio público*']
  },

  button: {
    text: "ENVIAR INFORMACIÓN",
    custom: "page"
  }
};
