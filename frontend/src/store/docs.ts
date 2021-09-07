import { ActionFuncs } from ".";
import api from "@/api";

export interface User {
  firstName: string;
  lastName: string;
  avatarUrl: string;
}

export interface Link {
  linkText: string;
  docId: string;
}

export interface Dialog {
  sender: User;
  time: Date;
  message: string;
}

export interface Doc {
  id: string;
  maker: User;
  expDate: Date;
  title: string;
  text: string;
  textLinks: Link[];
  dialogs: Dialog[];
  visitors: User[];
  isExpanded?: boolean;
}

interface Docs {
  docs: Doc[];
}

const docs = {
  namespaced: true,
  state: (): Docs => ({
    docs: []
  }),
  getters: {
    docs(state: Docs): Doc[] {
      return state.docs;
    }
  },
  mutations: {
    ADD_DOC(state: Docs, newDoc: Doc) {
      if (!state.docs.find((doc: Doc) => doc.id === newDoc.id)) {
        if (state.docs.length > 1) {
          state.docs = state.docs.map((doc, index) => index === state.docs.length - 2 ? {...doc, isExpanded: false} : {...doc} )
        }
        state.docs = [...state.docs, {isExpanded: true, ...newDoc}];
      }
    },
    REMOVE_DOC(state: Docs, docId: string) {
      state.docs = state.docs.filter(doc => doc.id !== docId).sort((a, b) => a.isExpanded === true && b.isExpanded === false ? 0 : -1);
    },
    OPEN_DOC(state: Docs, docId: string) {
      state.docs = state.docs.map((doc, index) => index === state.docs.length - 1 ? {...doc, isExpanded: false} : doc);
      state.docs = state.docs.map(doc => doc.id === docId ? {...doc, isExpanded: true} : doc).sort((a, b) => a.isExpanded === true && b.isExpanded === false ? 0 : -1);
    },
    CLOSE_DOC(state: Docs, docId: string) {
      state.docs = state.docs.map(doc => doc.id === docId ? {...doc, isExpanded: false} : doc).sort((a, b) => a.isExpanded === true && b.isExpanded === false ? 0 : -1);
    },
  },
  actions: {
    addMainDoc({commit}: ActionFuncs): void {
      api.doc
        .getMainDoc()
        .then(response => {
          commit('ADD_DOC', response.data)
        })
        .catch(err => {
          console.log('getMainDoc', err)
        })
    },
    addDoc({commit}: ActionFuncs, docId: string): void {
      api.doc
        .getDoc(docId)
        .then(response => {
          commit('ADD_DOC', response.data)
        })
        .catch(err => {
          console.log('getDoc', err)
        })
    },
    removeDoc({commit}: ActionFuncs, docId: string): void {
      commit('REMOVE_DOC', docId);
    },
    openDoc({commit}: ActionFuncs, docId: string): void {
      commit('OPEN_DOC', docId);
    },
    closeDoc({commit}: ActionFuncs, docId: string): void {
      commit('CLOSE_DOC', docId);
    },
  }
};

export default docs;
