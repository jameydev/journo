import PropTypes from 'prop-types';
import Entry from './Entry';

export default function EntryList({ entries: [...entries]}) {
    
    return (
        <>
            {entries.map(entry => (
                <Entry key={entry._id} _id={entry._id} title={entry.title}>
                    {entry.content}
                </Entry>
            ))}
        </>
    );
}

EntryList.propTypes = {
    entries: PropTypes.array.isRequired
};