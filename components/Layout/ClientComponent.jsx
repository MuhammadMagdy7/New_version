"use client"
import { useEffect } from 'react'

const ClientComponent = ({useEff}) => {
    useEffect(() => {
        useEff
    }, []);
  return null;
}

export default ClientComponent