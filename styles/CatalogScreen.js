import { StyleSheet } from 'react-native';

export const createStyles = (theme) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.base,
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
  botaoSucesso: {
    backgroundColor: theme.green,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoSucessoTexto: {
    color: theme.base,
    fontWeight: 'bold',
    fontSize: 15,
  },
  botaoSecundario: {
    backgroundColor: theme.surface0,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoSecundarioTexto: {
    color: theme.text,
    fontWeight: '600',
    fontSize: 15,
  },
  contador: {
    color: theme.subtext,
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: '500',
  },
  contadorDestaque: {
    color: theme.green,
  },
  lista: {
    paddingBottom: 30,
  }
});