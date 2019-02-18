import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID b5c8f23cd8a86177640c36808c455e9302b818c51705ffd151557e7bb74dc3e5"
  }
});
