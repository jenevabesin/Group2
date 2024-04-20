import { useEffect, useState } from 'react';
import SignUp from './components/register';
import Register from './register';


function App() {
  // State variables to store user information and loading status
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // useEffect hook to listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, user => {
      console.log('onAuthStateChanged', user);
      setUser(user);
      setLoading(false);
    });
    // Clean up the subscription when the component unmounts
    return () => unsubscribe();
  }, []);



  return (
    <div>
      {
        loading ? <div>Loading...</div> : <>
          {/* Render sign out button if user is logged in */}
          <Router>
            <Routes>
              {/* Route for sign up page */}
              <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
              {/* Route for sign in page */}
              <Route path="*" element={<Error404 />} />
            </Routes>
          </Router>
        </>
      }
    </div>
  )
}

export default App;
