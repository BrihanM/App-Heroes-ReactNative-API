import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const BACKGROUND_HEIGHT = width * 0.6;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    paddingBottom: 20,
  },
  background: {
    width: '100%',
    height: BACKGROUND_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  card: {
    width: '80%',
    backgroundColor: 'rgba(255,255,255,0.8)',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    elevation: 6,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 70,
    marginBottom: 12,
    borderWidth: 3,
    borderColor: '#fff',
  },
  name: {
    fontSize: 24,
    fontWeight: '800',
    color: '#222',
    textAlign: 'center',
  },
  infoSection: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#333',
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    paddingBottom: 4,
    width: '60%',
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: '700',
    color: '#555',
    marginBottom: 4,
    alignSelf: 'flex-start',
  },
  text: {
    fontSize: 16,
    color: '#666',
    marginBottom: 6,
    textAlign: 'left',
    width: '100%',
  },
});