import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Hero from '../components/Hero';
// import NewEntryScreen from './NewEntryScreen';
import EntryList from '../components/EntryList';
// import { useGetEntriesQuery } from '../slices/entriesApiSlice';

export default function HomeScreen() {
    const [entries, setEntries] = useState([]);
    const { userInfo } = useSelector(state => state.auth);

    useEffect(() => {
        const fetchEntries = async () => {
            const res = await fetch('/api/journal');
            const data = await res.json();
            setEntries(data);
        };

        fetchEntries();
    });

    return (
        <>
            {userInfo ? 
                (
                    <>
                        <h1 className="text-center mt-5">
                            Welcome, {userInfo.name}!
                        </h1>
                        <EntryList entries={entries} />
                    </>
                ) :
                <Hero />
            }
        </>
    );
}