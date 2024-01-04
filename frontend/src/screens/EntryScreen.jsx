import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Entry from '../components/Entry';
export default function EntryScreen(props) {
    const { id } = useParams();
    const entry = props.entry;

    return (
        <>
            <Entry _id={id} title={entry.title}>
                {entry.content}
            </Entry>
        </>
    );
}

EntryScreen.propTypes = {
    entry: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
    }).isRequired,
};
