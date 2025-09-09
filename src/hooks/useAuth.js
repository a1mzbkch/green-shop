import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase";
import { setUser, clearUser, setLoading } from "../redux/userSlice";
export const useAuth = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    useEffect(() => {
        dispatch(setLoading(true));
        const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
            if (firebaseUser) {
                dispatch(setUser({
                    email: firebaseUser.email,
                    name: firebaseUser.displayName,
                    photoURL: firebaseUser.photoURL,
                    uid: firebaseUser.uid,
                }));
            }
            else {
                dispatch(clearUser());
            }
            dispatch(setLoading(false));
        });
        return () => unsubscribe();
    }, [dispatch]);
    const logout = async () => {
        try {
            await signOut(auth);
            dispatch(clearUser());
        }
        catch (error) {
            console.error("Logout error:", error);
        }
    };
    return {
        user: user.isAuthenticated ? user : null,
        isLoading: user.loading,
        isAuthenticated: user.isAuthenticated,
        logout,
    };
};
