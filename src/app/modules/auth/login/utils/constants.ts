export const constantsLogin = {
  title: "Ingresa a tu cuenta",
  logos: [
    {
      src: "../../../../assets/icons/facebook.png",
      alt: "facebook"
    },
    {
      src: "../../../../assets/icons/apple.png",
      alt: "apple"
    },    {
      src: "../../../../assets/icons/google.png",
      alt: "google"
    }
  ],
  alternative: 'o',
  formInput: [
    {
      title: "email",
      input: {
        type: "text",
        placeholder: "Ingresé su email"
      }
    },
    {
      title: "contraseña",
      input: {
        type: "password",
        placeholder: "Ingresé su contraseña"
      }
    }
  ],
  forgotPassword: {
    href: "",
    text: "¿Olvidaste tu contraseña?"
  },
  button: "INICIAR SESIÓN",
  ask: {
    text: "¿No tienes cuenta aún?",
    anchor: "Registrate"
  }
}
