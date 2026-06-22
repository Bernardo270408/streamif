// styles/EmptyState.js
import { StyleSheet } from 'react-native';
import { COLORS } from './theme';

export const styles = StyleSheet.create({
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
    color: COLORS.text,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  texto: {
    color: COLORS.subtext,
    fontSize: 14,
    textAlign: 'center',
    lineHeight: 20,
  },
});