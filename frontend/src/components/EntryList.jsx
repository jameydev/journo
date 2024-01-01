import Entry from './Entry';

export default function EntryList() {
    
    return (
        <>
            {entries.map(entry => (
                <Entry key={entry._id} title={entry.title}>
                    {entry.content}
                </Entry>
            ))};
        </>
    );
}