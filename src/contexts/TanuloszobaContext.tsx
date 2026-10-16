/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, type ReactNode } from 'react'
import { SZOBALISTA, type szobaTipus } from '../tanuloszobak'

interface TanuloszobaContextValue {
  foglalasKezelo: (index: number) => void
  szobaLista: szobaTipus[]
}

export const TanuloszobaContext = createContext<TanuloszobaContextValue | undefined>(undefined)

interface TanuloszobaProviderProps {
  children: ReactNode
}

export function TanuloszobaProvider({ children }: TanuloszobaProviderProps) {
  const [szobaLista, setSzobaLista] = useState<szobaTipus[]>(SZOBALISTA)

  function foglalasKezelo(index: number) {
    setSzobaLista(elozoLista => elozoLista.map((szoba, szobaIndex) =>
      szobaIndex === index && szoba.foglalt_helyek < szoba.ferohely
        ? { ...szoba, foglalt_helyek: szoba.foglalt_helyek + 1 }
        : szoba
    ))
  }

  return (
    <TanuloszobaContext.Provider value={{ szobaLista, foglalasKezelo }}>
      {children}
    </TanuloszobaContext.Provider>
  )
}

export function useTanuloszobaContext() {
  const context = useContext(TanuloszobaContext)

  if (context === undefined) {
    throw new Error('A tanulószoba alkalmazás csak TanuloszobaProvideren belül használható.')
  }

  return context
}

