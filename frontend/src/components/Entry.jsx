export default function Entry(props) {
    const title = props.title;
    return (
        <>
            <div className="card">
                <div className="card-title">
                    <h3>{title}</h3>
                </div>
                <div className="card-body">
                    <p>{props.children}</p>
                </div>
                <div className="card-footer">
                    <button className="btn btn-primary">Edit</button>
                    <button className="btn btn-danger">Delete</button>
                </div>
            </div>
        </>
    );
}