// styles/DetailScreen.js
import { StyleSheet } from 'react-native';
import { COLORS } from './theme';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.base,
    padding: 24,
  },
  genero: {
    color: COLORS.mauve,
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  titulo: {
    color: COLORS.text,
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  badgesContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 24,
  },
  badge: {
    backgroundColor: COLORS.surface0,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  badgeAssistido: {
    backgroundColor: COLORS.green,
  },
  badgePendente: {
    backgroundColor: COLORS.yellow,
  },
  badgeTexto: {
    color: COLORS.text,
    fontWeight: 'bold',
    fontSize: 13,
  },
  label: {
    color: COLORS.subtext,
    fontSize: 14,
    marginBottom: 8,
  },
  input: {
    backgroundColor: COLORS.mantle,
    color: COLORS.text,
    borderWidth: 1,
    borderColor: COLORS.surface0,
    borderRadius: 12,
    minHeight: 180,
    padding: 16,
    textAlignVertical: 'top',
    fontSize: 16,
  },
  footerBtn: {
    marginTop: 'auto',
    paddingTop: 20,
  }
});