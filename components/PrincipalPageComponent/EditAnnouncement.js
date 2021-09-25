import React, { useState, useEffect } from 'react';
import styles from './editAnnouncement.module.css';
import useInput from '../hooks/useInput';
import { useRouter } from 'next/router';
import axios from 'axios';
import Modal from '../../components/Layout/Modal.';
import Button from '../UI/Button';

function EditAnnouncement(props) {
    const router = useRouter();

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const [updated, setUpdated] = useState(false);
    const [archive, setArchive] = useState(false);
    const [confirmation, setConfirmation] = useState(false);

    const [titleIsTouched, settitleIsTouched] = useState(false);
    const [contentIsTouched, setcontentIsTouched] = useState(false);

    useEffect(async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/principal/annc/${props.id}`, {
                withCredentials: true,
            });
            const data = await response.data.annc;
            console.log(data);
            setTitle(data.title);
            setContent(data.content);
        } catch (error) {
            console.log(error);
        }
    }, []);

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const anncData = {
            title: title,
            content: content,
        };

        const postData = async () => {
            try {
                const response = await axios.put(`http://localhost:4000/api/principal/annc/${props.data._id}`, anncData, { withCredentials: true });
                console.log(response);
                if (response.data.success) {
                    setUpdated(true);
                } else {
                    setUpdated(false);
                }
            } catch (error) {
                console.log(error);
            }
        };
        postData();
    };
    const archiveAnnc = async () => {
        try {
            const response = await axios.delete(`http://localhost:4000/api/principal/annc/${props.data._id}`, {
                withCredentials: true,
                credentials: 'include',
            });
            console.log(response);
            if (response.data.success) {
                setArchive(true);
                setConfirmation(false);
            } else {
                setArchive(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <form className={styles.container} onSubmit={onSubmitHandler}>
            <h1 className={styles.header}>Edit/Archive Announcement</h1>
            <div className={styles.formWrapper}>
                <div className={styles.formContainer}>
                    <div className={styles.formFields}>
                        <div className={styles.titleLabelContainer}>
                            <label htmlFor="title" className={styles.label}>
                                Title
                            </label>
                        </div>
                        <div className={styles.titleInputContainer}>
                            <input
                                type="text"
                                id="title"
                                className={styles.input}
                                value={title}
                                onChange={(e) => {
                                    setTitle(e.target.value);
                                }}
                            />
                        </div>
                    </div>
                    <div className={styles.formFields}>
                        <div className={styles.contentLabelContainer}>
                            <label htmlFor="content" className={styles.label}>
                                Content
                            </label>
                        </div>
                        <div className={styles.contentInputContainer}>
                            <textarea
                                type="text"
                                id="content"
                                className={styles.input && styles.textarea}
                                value={content}
                                onChange={(e) => {
                                    setContent(e.target.value);
                                }}
                            />
                        </div>
                    </div>

                    <div className={styles.buttonContainer}>
                        <Button className={styles.buttonUpdate} type={'submit'}>
                            Update
                        </Button>
                        <Button
                            className={styles.buttonArchive}
                            onClick={() => {
                                setConfirmation(true);
                            }}
                        >
                            Archive
                        </Button>
                    </div>

                    {updated && (
                        <Modal className={styles.modalDesign}>
                            <div className={styles.messageContainer}>
                                <h2 className={styles.messageHeader}>Account Updated</h2>
                                <h4 className={styles.messageBody}>Please check in the updated announcement to the List of Announcement.</h4>
                                <h4 className={styles.messageFooter}>Thank you.</h4>
                                <Button
                                    className={styles.modalButton}
                                    onClick={() => {
                                        router.push('/principal/Announcement');
                                    }}
                                >
                                    Go back to announcement list
                                </Button>
                            </div>
                        </Modal>
                    )}
                    {archive && (
                        <Modal className={styles.modalDesign}>
                            <div className={styles.messageContainer}>
                                <h2 className={styles.messageHeader}>Announcement Successfully Archived</h2>
                                <h4 className={styles.messageBody}></h4>
                                <h4 className={styles.messageFooter}>Thank you.</h4>
                                <Button
                                    className={styles.modalButton}
                                    onClick={() => {
                                        router.push('/principal/Announcement');
                                    }}
                                >
                                    Go back to announcement list
                                </Button>
                            </div>
                        </Modal>
                    )}
                    {confirmation && (
                        <Modal className={styles.modalDesign}>
                            <div className={styles.messageContainer}>
                                <h2 className={styles.messageHeader}>Are you sure you want to archive this announcement?</h2>
                                <h4 className={styles.messageFooter}></h4>
                                <div className={styles.buttonConfirmationContainer}>
                                    <Button className={styles.modalButtonYes} onClick={archiveAnnc}>
                                        Yes
                                    </Button>
                                    <Button
                                        className={styles.modalButtonNo}
                                        onClick={() => {
                                            setConfirmation(false);
                                        }}
                                    >
                                        No
                                    </Button>
                                </div>
                            </div>
                        </Modal>
                    )}
                </div>
            </div>
        </form>
    );
}

export default EditAnnouncement;
