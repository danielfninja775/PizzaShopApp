import React, {useState, createContext, ReactNode, useEffect } from 'react';
import { api } from '../Services/api'  








export function AuthProvider({children}: AuthProviderProps){
    const [user, setUser] = useState<UserProps>({
      id: '',
      name: '',
      email: '',
      token: ''
    })
  
 
    const isAuthenticated = !!user.name; 
  
    useEffect(()=> {
  
     async function getUser(){
      // pegar os dados salvos do user
   const userInfo = await AsyncStorage.getItem('@Pizzashop');
   let hasUser: UserProps = JSON.parse(userInfo || '{}')
  
  // verificar se recebemos as informacoes
  if(Object.keys(hasUser).length > 0){
    api.defaults.headers.common['Authorization'] = `Bearer ${hasUser.token}` 
  
     setUser({
      id: hasUser.id,
      name: hasUser.name,
      email: hasUser.email,
      token: hasUser.token
     })
   }
   setLoading(false);
  }
     getUser();
  
    }, [])
    
  
    async function signIn({ username, password}){
      setLoadingAuth(true);
  
      try{
        const response = await api.post('/session', {
          username,
          password
        })
      console.log(response.data);
  
        const { id, name, token } = response.data;
  
        const data = {
          ...response.data
        };
  
        await AsyncStorage.setItem('@Pizzashop', JSON.stringify(data))
  
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`
  
  
        setUser({
          id,
          name,
          email,
          token,
        })
  
        setLoadingAuth(false);
  
  
      }catch(err){
        console.log('erro ao acessar', err)
        setLoadingAuth(false);
      }
  
    }
  
  async function signOut(){
    await AsyncStorage.clear()
    .then( () => {
      setUser({
        id: '',
        name:'',
        email:'',
        token:''
      })
    })
  }
    return(
      <AuthContext.Provider value={{
         user,
      isAuthenticated, 
      signIn,
      signOut, 
      loading,
      loadingAuth
       }}
       >
        {children}
      </AuthContext.Provider>
    )
  }