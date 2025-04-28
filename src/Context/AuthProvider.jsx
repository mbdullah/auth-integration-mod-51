
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase.init';

const AuthProvider = ({children}) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth,  email, password);
    } 

    onAuthStateChanged(auth, (currentUser) => {
        if (currentUser) {
            console.log('current user ase', currentUser);
        }else{
            console.log("current user nai", currentUser);
        }
    })

    const userInfo = {
        createUser,
        signInUser
    }

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;