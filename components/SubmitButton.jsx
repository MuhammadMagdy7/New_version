'use client'
 
import { useFormStatus } from 'react-dom'
 
export function SubmitButton({value, ...props}) {
  const { pending } = useFormStatus()
 
  return (
    <button disabled={pending} {...props} >
      {pending ? "...Loading" : value}
    </button>
  )
}