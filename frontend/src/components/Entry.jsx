import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

export default function Entry({ title, children, _id }) {
    if (!title) {
        title = 'Untitled';
    }

    if (!children) {
        children = 'No content';
    }

    return (
                <>
                    <div className="card mt-3">
                        <div className="card-title mt-2 mx-2">
                            <h3>{title}</h3>
                            <Link to={`/journal/${_id}`}>View</Link>
                        </div>
                        <div className="card-body">
                            <p>{children}</p>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-primary mx-2">Edit</button>
                            <button className="btn btn-danger mx-2">Delete</button>
                        </div>
                    </div>
                </>
    );
}

Entry.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
}