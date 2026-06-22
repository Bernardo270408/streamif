// /styles/AddMediaForm.js
import { COLORS } from '../styles/theme';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(17, 17, 27, 0.85)', // crust com 85% de opacidade
    justifyContent: 'flex-end',
  },
  modalBody: {
    backgroundColor: COLORS.mantle,
    padding: 24,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopWidth: 1,
    borderTopColor: COLORS.surface0,
  },
  titulo: {
    color: COLORS.text,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    backgroundColor: COLORS.crust,
    color: COLORS.text,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: COLORS.surface0,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 12,
    fontSize: 15,
  },
  erro: {
    color: COLORS.red,
    textAlign: 'center',
    marginBottom: 12,
    fontWeight: '500',
  },
  botoesAcao: {
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 10,
  }
});