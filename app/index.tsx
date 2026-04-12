import { Redirect } from 'expo-router';

/**
 * Point d’entrée `/` : toujours envoyer vers l’écran de connexion au lancement.
 */
export default function Index() {
  return <Redirect href="/login" />;
}
