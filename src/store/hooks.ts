import { useContext } from 'react'
import { StoreContext } from './store'

export const useStore = () => {
  return useContext(StoreContext)
}

export const useDataStore = () => {
  const store = useContext(StoreContext)
  if (!store) {
    throw new Error('useStore must be used within a StoreProvider.')
  }
  return store
}
