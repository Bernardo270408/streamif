// styles/EmptyState.js
import { StyleSheet } from 'react-native';

export const createStyles = (theme) => StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 80,
      paddingHorizontal: 30,
    },

    icone: {
      fontSize: 48,
      marginBottom: 12,
    },

    titulo: {
      color: theme.text,
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 6,
    },

    texto: {
      color: theme.subtext,
      fontSize: 14,
      textAlign: 'center',
      lineHeight: 20,
    },
  });