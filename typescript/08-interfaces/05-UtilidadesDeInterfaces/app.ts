(() => {
  /* Cuando creamos una constante de un objeto donde al final le ponemos 
  as const hacemos que todas las propiedades del objeto sean readonly, es decir,
  que no las vamos a poder modificar ni de agregar nuevas propiedades en 
  tiempo de ejecucion */
  const ROLES_VALUES = {
    admin_user: 'admin',
    user: 'user',
    editor_user: 'editor',
  } as const

  /* La palabra typeof en TypeScript nos permite acceder al tipo de dato de 
  una variable, la keyof lo que hace es acceder a una key de un objeto 
  asi en este ejemplo accedemos a las keys del objeto (admin_user, user, editor_user)
  por ende keyof typeof ROLES_VALUES despues cuando usamos ROLE_VALUES[...]
  lo que hacemos es acceder a cada uno de los valores del objeto dependiendo
  la key que se este obteniendo, despues al usar typeof ... lo que hacemos es
  acceder al tipo de los datos, pero como accemos a diferentes valores que 
  son constantes lo que hara es crearnos un tipo donde accederemos a los valores
  del objeto como asi: "admin" | "user" | "editor" */
  type Role = typeof ROLES_VALUES[keyof typeof ROLES_VALUES]

  interface User {
    id: string
    name: string
    age: number
    email: string
    username: string
    isActive: boolean
    role?: Role
  }

  /* Creamos un tipo con usa sola propiedad que sera el name de la interface User */
  type NameOfUser = Pick<User, 'name'>
  /* Creamos un tipo con las mismas propiedades que User menos id */
  type ResponseUser = Omit<User, 'id'>
  /* Creamos un tipo con todas las propiedades de User pero donde todas son opcionales */
  type NonRequiredUser = Partial<User>
  /* Creamos un tipo con todas las propiedades de User donde todas son obligatorias */
  type RequiredUser = Required<User>
  /* Creamos un tipo donde sera un objeto en el que cada tipo que puede tener
  Role "admin" | "user" | "editor" sera una key y como valor tendra un objeto
  con las propiedades name y id */
  type RoleStored = Record<Role, { id: string, name: string }>

  const user: User = {
    id: '1',
    name: 'Cesar 1',
    age: 21,
    email: 'cesar@gmail.com',
    username: 'cesar',
    isActive: true,
  }

  const nameOfUser: NameOfUser = {
    name: 'Cesar 2',
  }

  const responseUser: ResponseUser = {
    name: 'Cesar',
    age: 21,
    email: 'cesar@gmail.com',
    username: 'cesar',
    isActive: true,
    role: 'admin',
  }

  const nonRequiredUser: NonRequiredUser = {
    name: 'Cesar',
    age: 21,
  }

  const requiredUser: RequiredUser = {
    id: '1',
    name: 'Cesar',
    age: 21,
    email: 'cesar@gmail.com',
    username: 'cesar',
    isActive: true,
    role: 'admin',
  }

  const roleStored: RoleStored = {
    admin: {
      id: '1',
      name: 'admin',
    },
    user: {
      id: '2',
      name: 'user',
    },
    editor: {
      id: '3',
      name: 'editor',
    }
  }

  console.log(user)
  console.log(user as NameOfUser)
  console.log(nameOfUser)
  console.log(responseUser)
  console.log(nonRequiredUser)
  console.log(requiredUser)
  console.log(roleStored)

  const returnedFunction = (msg: string): { message: string } => ({
    message: msg.toUpperCase()
  })

  /* Con ReturnType podemos acceder al tipo que retorna una funcion */
  type returnedType = ReturnType<typeof returnedFunction>
})()
