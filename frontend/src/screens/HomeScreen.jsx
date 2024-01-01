import { useSelector, useDispatch } from 'react-redux';
import Hero from '../components/Hero';
// import NewEntryScreen from './NewEntryScreen';
// import EntryList from '../components/EntryList';
// import { useGetEntriesQuery } from '../slices/entriesApiSlice';

export default function HomeScreen() {
    const { userInfo } = useSelector(state => state.auth);

    // const { data, isLoading } = useGetEntriesQuery();

    return (
        <>
            {userInfo ? 
                (
                    <>
                        <h1 className="text-center mt-5">
                            Welcome {userInfo.name}!
                        </h1>
                    </>
                ):
                <Hero />
            }
        </>
    );
}