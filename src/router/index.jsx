import { createBrowserRouter, Route } from 'react-router-dom'
import { CreateUser, Login, Register, TableUser } from '../pages'
import { Layouts } from '../components'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layouts />,
    children: [
      {
        path: 'user',
        element: <TableUser />,
      },
      ,
      {
        path: 'user/create',
        element: <CreateUser />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
])

export default router
