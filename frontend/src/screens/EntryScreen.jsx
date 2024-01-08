import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Entry from '../components/Entry';
import { fetchEntries } from '../slices/entriesSlice';

export default function EntryScreen() {
    const { id } = useParams();

    const dispatch = useDispatch();
    const entries = useSelector((state) => state.entries);
    console.log(entries);
    const entry = entries.find((entry) => entry._id === id);
    const user = useSelector((state) => state.auth.userInfo);

    useEffect(() => {
        if (user) {
            dispatch(fetchEntries(user._id));
        }
    }, [dispatch, user]);

    // TO-DO: Add a 404 page or something similar
    if (!entry) {
        return <h1>Entry not found</h1>;
    }

    return (
        <>
            <Entry _id={id} title={entry.title} isSingle={true}>
                {entry.content}
            </Entry>
        </>
    );
}
