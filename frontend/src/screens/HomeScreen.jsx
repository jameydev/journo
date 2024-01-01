import { useSelector, useDispatch } from 'react-redux';
import Hero from '../components/Hero';
import NewEntryScreen from './NewEntryScreen';

export default function HomeScreen() {
    const { userInfo } = useSelector(state => state.auth);

    return (
        <>
            {userInfo ? <NewEntryScreen /> : <Hero />}
        </>
    );
}