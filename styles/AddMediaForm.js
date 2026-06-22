import { StyleSheet } from 'react-native';

export const createStyles = (theme) => StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(17, 17, 27, 0.85)', 
    justifyContent: 'flex-end',
  },
  modalBody: {
    backgroundColor: theme.mantle,
    padding: 24,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopWidth: 1,
    borderTopColor: theme.surface0,
  },
  titulo: {
    color: theme.text,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    backgroundColor: theme.crust,
    color: theme.text,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.surface0,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 12,
    fontSize: 15,
  },
  placeholder: {
    color: theme.subtext, // Usado como ponte para a prop placeholderTextColor
  },
  erro: {
    color: theme.red,
    textAlign: 'center',
    marginBottom: 12,
    fontWeight: '500',
  },
  botoesAcao: {
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 10,
  },
  botao: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoCancelar: {
    backgroundColor: theme.red,
    marginRight: 12,
  },
  botaoSalvar: {
    backgroundColor: theme.green,
  },
  textoBotao: {
    color: theme.mantle,
    fontSize: 16,
    fontWeight: 'bold',
  },
});