import { StyleSheet } from 'react-native';

export const createStyles = (theme) => StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: theme.base,
    padding: 24,
  },
  genero: {
    color: theme.mauve,
    fontSize: 14,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  titulo: {
    color: theme.text,
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
    backgroundColor: theme.surface0,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  badgeAssistido: {
    backgroundColor: theme.green,
  },
  badgePendente: {
    backgroundColor: theme.yellow,
  },
  badgeTexto: {
    color: theme.text,
    fontWeight: 'bold',
    fontSize: 13,
  },
  badgeTextoAssistido: {
    color: theme.mantle,
  },
  label: {
    color: theme.subtext,
    fontSize: 14,
    marginBottom: 8,
  },
  input: {
    backgroundColor: theme.mantle,
    color: theme.text,
    borderWidth: 1,
    borderColor: theme.surface0,
    placeholderTextColor: theme.subtext,
    borderRadius: 12,
    minHeight: 180,
    padding: 16,
    textAlignVertical: 'top',
    fontSize: 16,
  },
  footerBtn: {
    marginTop: 'auto',
    paddingTop: 20,
  },
  botaoVoltar: {
    backgroundColor: theme.blue,
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoVoltarTexto: {
    color: theme.base, 
    fontSize: 16,
    fontWeight: '600',
  }
});