import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  
    server: {
      host: '0.0.0.0',  // Cela permet à l'application de Vite d'écouter sur toutes les interfaces réseau
      port: 5173
    },
    optimizeDeps: {
      exclude: ['some-dependency', 'another-dependency'], // Ajouter les dépendances problématiques ici
      include: ['react', 'react-dom'] // Assurez-vous que les dépendances cruciales sont bien optimisées
    }
  
  
})