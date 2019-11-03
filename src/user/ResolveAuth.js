import { useContext, useEffect } from 'react'
import Context from './Context'

function ResolveAuth() {
  const { onSigninLocal } = useContext(Context)
  useEffect(() => {
    onSigninLocal()
  }, [])
  return null
}

export default ResolveAuth
