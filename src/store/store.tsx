import { createContext } from 'react'
import { UIStore } from './uiStore'

export interface IStore {
  UIStore: UIStore
}
export const store: IStore = {
  UIStore: new UIStore()
}

export const StoreContext = createContext(store)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const DataStoreProvider = ({ children }: any) => {
  return <StoreContext.Provider value={store}>{children}. </StoreContext.Provider>
}
