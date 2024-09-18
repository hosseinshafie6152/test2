import { useRoutes } from "react-router-dom"
import HomePage from "./pages/HomePage"
//import UserPage from "./pages/UserPage"
import NotFoundPage from "./components/NotFound.Component"
//import BiographyPage from "./components/BiographyPage.component"
//import PublicationsPage from "./components/PublicationsPage.Component"
//import CoursesPage from "./components/CoursesPage.Component"
//import ContactsPage from "./components/ContactsPage.Component"

//https://sharif.edu/~amini/
//https://sharif.edu/~ansari/
function App() {
  const routs = useRoutes([
    {
      path:'/',
      element:<HomePage/>,
      /*children:[
        {
          index: true,
          element:<UserPage/>
        },
        {
          path:'/biography',
          element:<BiographyPage/>
        },
        {
          path:'/publications',
          element:<PublicationsPage/>
        },
        {
          path:'/courses',
          element:<CoursesPage/>
        },
        {
          path:'/contacts',
          element:<ContactsPage/>
        }
      ]*/
    },
    {
      path : '/*',
      element:<NotFoundPage/>
    }
  ])
  return (
    <>
      {routs}
    </>
  )
}

export default App
