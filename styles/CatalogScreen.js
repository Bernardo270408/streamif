// styles/CatalogScreen.js
import { StyleSheet } from 'react-native';
import { COLORS } from './theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.base,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  barraBotoes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    gap: 10,
  },
  botaoWrapper: {
    flex: 1,
  },
  contador: {
    color: COLORS.subtext,
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: '500',
  },
  lista: {
    paddingBottom: 30,
  }
});