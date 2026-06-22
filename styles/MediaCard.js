import { StyleSheet } from 'react-native';

export const createStyles = (theme) => StyleSheet.create({
  card: {
    backgroundColor: theme.mantle,
    borderRadius: 12,
    padding: 16,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: theme.surface0,
  },
  cabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titulo: {
    color: theme.text,
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
    marginRight: 8,
  },
  nota: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  // NOVOS ESTILOS: Tratando as variações de cores direto pelo tema
  notaVerde: {
    color: theme.green,
  },
  notaAmarela: {
    color: theme.yellow,
  },
  notaVermelha: {
    color: theme.red,
  },
  genero: {
    color: theme.mauve,
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
    borderTopColor: theme.surface0,
    paddingTop: 10,
  },
  statusTexto: {
    color: theme.subtext,
    fontSize: 13,
  },
  assistido: {
    color: theme.green,
    fontWeight: 'bold',
  },
  pendente: {
    color: theme.yellow,
    fontWeight: '500',
  },
  // NOVO ESTILO: Para o botão de exclusão que substituiu o componente nativo
  botaoExcluirTexto: {
    color: theme.red,
    fontWeight: 'bold',
    fontSize: 14,
    paddingVertical: 4,
    paddingHorizontal: 8,
  }
});