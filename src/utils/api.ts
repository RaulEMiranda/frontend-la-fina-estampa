import axios from "axios";

const logoutUser = () => {
  console.log("Sesión expirada. Redirigiendo al login...");
  window.location.href = "/login"; // O usa tu sistema de estado global (Redux, Zustand, etc.)
};

const apiPublic = axios.create({
  baseURL: "http://127.0.0.1:8000/api", // URL de tu backend en Django
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false,
});

const apiAuth = axios.create({
  baseURL: "http://127.0.0.1:8000/api", // URL de tu backend en Django
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

apiAuth.interceptors.response.use(
  (response) => response, // Si la respuesta es exitosa, continúa normal
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Intentamos renovar el token
        await apiPublic.post("/token/refresh-cookie/");
        return apiAuth(originalRequest); // Reintenta la petición original
      } catch (refreshError) {
        console.log(refreshError); //
        logoutUser(); // Si falla el refresh, cerramos sesión
      }
    }

    return Promise.reject(error);
  }
);

const apiPrivate = apiAuth;

export { apiPublic, apiAuth, apiPrivate };
