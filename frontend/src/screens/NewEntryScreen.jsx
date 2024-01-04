import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import FormContainer from '../components/FormContainer';
import Loader from '../components/Loader';
import { useAddEntryMutation } from '../slices/entriesApiSlice';
import { addEntry } from '../slices/entriesSlice';

export default function NewEntryScreen() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { userInfo } = useSelector((state) => state.auth);

    const [entry, { isLoading }] = useAddEntryMutation();

    useEffect(() => {
        if (!userInfo) {
            navigate('/login');
        }
    }, [navigate, userInfo]);

    const submitHandler = async (e) => {
        e.preventDefault();
        if (!title || !content) {
            toast.error('Please title your entry and/or add some content');
        } 
        else {
        try {
            const res = await entry({ title, content }).unwrap();
            dispatch(addEntry({ ...res }));
            toast.success('Entry added');
            // navigate(`/journal/${res._id}`);
        } 
        catch (err) {
            toast.error(err?.data?.message || err.error);   
        }
    }
}

    return (
        <>
        <FormContainer>
            <h1 className="text-center">New Entry</h1>

            <Form onSubmit={submitHandler}>
                <Form.Group className="my-2" controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Entry Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="my-2" controlId="content">
                    <Form.Label>Content</Form.Label>
                        <Form.Control
                        as="textarea"
                        placeholder="What do you want to write about?"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </Form.Group>

                <Button type="submit" variant="primary">
                    Save Entry
                </Button>
            </Form>
        </FormContainer>
        </>
    );
}