import {createBrowserRouter} from 'react-router-dom'
import Main from '../layout/Main'
import Home from '../pages/Home/Home/Home'
import Login from '../pages/Login/Login'
import SignUp from '../pages/SignUp/SignUp'
import AddBook from '../pages/AddBook/AddBook'
import AllBooks from '../pages/AllBooks/AllBooks'
import BorrowedBooks from '../pages/BorrowedBooks/BorrowedBooks'
import ErrorPage from '../pages/ErrorPage/ErrorPage'
import BookDetails from '../pages/BookDetails/BookDetails'
import UpdateBooks from '../pages/UpdateBooks/UpdateBooks'
import Novel from '../pages/Categories/Novel'
import ScienceFiction from '../pages/Categories/ScienceFiction'
import Fantasy from '../pages/Categories/Fantasy'
import Thriller from '../pages/Categories/Thriller'
import PrivateRoute from './PrivateRoute'





const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,

        children:[
            {
                path:'/',
                element: <Home></Home>

            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path:'/sign-up',
                element: <SignUp></SignUp>
            },
            {
                path: '/add-book',
                element: <PrivateRoute><AddBook></AddBook></PrivateRoute>
            },
            {
                path: '/all-books',
                element: <PrivateRoute><AllBooks></AllBooks></PrivateRoute>,
                loader: () => fetch('http://localhost:3000/books')
            },
            {
                path: '/borrowed-books',
                element: <PrivateRoute><BorrowedBooks></BorrowedBooks></PrivateRoute>,
                loader: () => fetch('http://localhost:3000/books')
            },
            {
                path: '/book/:id',
                element: <PrivateRoute><BookDetails></BookDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:3000/book/${params.id}`)
            },
            {
                path: '/all-books/update-book/:id',
                element: <PrivateRoute><UpdateBooks></UpdateBooks></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:3000/book/${params.id}`)
            },
            {
                path: '/novel',
                element: <PrivateRoute><Novel></Novel></PrivateRoute>,
                loader: () => fetch('http://localhost:3000/books')
            },
            {
                path: '/science-fiction',
                element: <PrivateRoute><ScienceFiction></ScienceFiction></PrivateRoute>,
                loader: () => fetch('http://localhost:3000/books')
            },
            {
                path: '/fantasy',
                element: <PrivateRoute><Fantasy></Fantasy></PrivateRoute>,
                loader: () => fetch('http://localhost:3000/books')
            },
            {
                path: '/thriller',
                element: <PrivateRoute><Thriller></Thriller></PrivateRoute>,
                loader: () => fetch('http://localhost:3000/books')
            }

            
        ]
    },
])


export default router 
