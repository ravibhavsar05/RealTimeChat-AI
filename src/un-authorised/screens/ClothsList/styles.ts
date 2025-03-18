import {StyleSheet, Dimensions, ViewStyle, TextStyle, ImageStyle} from 'react-native';

interface Styles {

  container:ViewStyle,
  content:ViewStyle,
  cardContainer:ViewStyle,
  gridCard:ViewStyle,
  listCard:ViewStyle,
  imageContainer:ImageStyle,
  image:ImageStyle,
  hiddenImage:ImageStyle,
  gridContent:ViewStyle,
  listContent:ViewStyle,
  title:TextStyle,
  price:TextStyle,
  skeleton:ViewStyle,
  viewSelector:ViewStyle,
  viewButton:ViewStyle,
  activeViewButton:ViewStyle,
  footer:ViewStyle,
  listContainer:ViewStyle
  }

  const styles = StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
  cardContainer: {
    overflow: 'hidden',
  },
  gridCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#eee',
  },
  listCard: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#eee',
  },
  imageContainer: {
    position: 'relative',
    backgroundColor: '#f5f5f5',
    overflow: 'hidden',
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  hiddenImage: {
    opacity: 0,
  },
  gridContent: {
    padding: 8,
  },
  listContent: {
    flex: 1,
    padding: 12,
    justifyContent: 'center',
  },
  title: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  skeleton: {
    backgroundColor: '#f0f0f0',
  },
  viewSelector: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  viewButton: {
    padding: 8,
    marginLeft: 8,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
  },
  activeViewButton: {
    backgroundColor: '#e0e0e0',
  },
  footer: {
    flexDirection: 'row',
  },
  listContainer: {
    padding: 10,
  },
});
export default styles;
