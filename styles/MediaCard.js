// styles/MediaCard.js
import { StyleSheet } from 'react-native';
import { COLORS } from './theme';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.mantle,
    borderRadius: 12,
    padding: 16,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: COLORS.surface0,
  },
  cabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titulo: {
    color: COLORS.text,
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    marginRight: 8,
  },
  nota: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  genero: {
    color: COLORS.mauve,
    fontSize: 13,
    fontWeight: '500',
    marginTop: 2,
    marginBottom: 12,
  },
  rodape: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: COLORS.surface0,
    paddingTop: 10,
  },
  statusTexto: {
    color: COLORS.subtext,
    fontSize: 13,
  },
  assistido: {
    color: COLORS.green,
    fontWeight: 'bold',
  },
  pendente: {
    color: COLORS.yellow,
    fontWeight: '500',
  }
});