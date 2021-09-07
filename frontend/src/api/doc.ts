import axios from 'axios';

export default {
  getMainDoc: () => axios.get('doc'),
  getDoc: (docId: string) => axios.get(`doc/${docId}`),
}
