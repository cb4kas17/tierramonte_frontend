import React, { useState, useEffect } from 'react';
import styles from './specificBalance.module.css';
import { useRouter } from 'next/router';
import axios from 'axios';
import useInput from '../hooks/useInput';
import Modal from '../../components/Layout/Modal.';
import Button from '../UI/Button';
function SpecificBalance(props) {
    const router = useRouter();

    const [balanceData, setBalanceData] = useState([]);
    const [userData, setUserData] = useState([]);

    const [dropDown, setDropDown] = useState('Debit');

    const dropDownHandler = (event) => {
        setDropDown(event.target.value);
        console.log(event.target.value);
    };
    //modal prompt
    const [addTransacHandler, setAddTransacHandler] = useState(false);

    const currentTime = new Date().toLocaleString();

    const {
        value: enteredTransactionType,
        isValid: enteredTransactionTypeIsValid,
        hasError: enteredTransactionTypeHasError,
        valueChangeHandler: transactionTypeChangeHandler,
        inputBlurHandler: transactionTypeBlurHandler,
    } = useInput((value) => value.trim() !== '');
    const {
        value: enteredAmount,
        isValid: enteredAmountIsValid,
        hasError: enteredAmountHasError,
        valueChangeHandler: amountChangeHandler,
        inputBlurHandler: amountBlurHandler,
    } = useInput((value) => !isNaN(value));

    useEffect(async () => {
        try {
            const response = await axios.get(`http://localhost:4000/api/accountant/students/${props.studID}/${props.balanceID}`, {
                withCredentials: true,
            });
            setBalanceData(response.data.balance);
            setUserData(response.data.user);
            console.log(response.data.balance);
            console.log(response.data.user);
        } catch (error) {
            console.log(error);
        }
    }, []);
    return (
        <div>
            <form className={styles.container}>
                <h1 className={styles.header}>Specific Balance</h1>
                <div className={styles.formWrapper}>
                    <div className={styles.formContainer}>
                        <div className={styles.formFields}>
                            <div className={styles.labelContainer}>
                                <label htmlFor="schoolYearFrom" className={styles.label}>
                                    School Year From
                                </label>
                            </div>
                            <div className={styles.inputContainer}>
                                <div className={styles.input}>{balanceData.schoolYearFrom}</div>
                            </div>
                        </div>
                        <div className={styles.formFields}>
                            <div className={styles.labelContainer}>
                                <label htmlFor="schoolYearTo" className={styles.label}>
                                    School Year To
                                </label>
                            </div>
                            <div className={styles.inputContainer}>
                                <div className={styles.input}>{balanceData.schoolYearTo}</div>
                            </div>
                        </div>

                        <div className={styles.formFields}>
                            <div className={styles.labelContainer}>
                                <label htmlFor="yearLevel" className={styles.label}>
                                    Grade Level
                                </label>
                            </div>

                            <div className={styles.inputContainer}>
                                <div className={styles.input}>{balanceData.yearLevel}</div>
                            </div>
                        </div>
                        <div className={styles.formFields}>
                            <div className={styles.labelContainer}>
                                <label htmlFor="semester" className={styles.label}>
                                    Semester
                                </label>
                            </div>

                            <div className={styles.inputContainer}>
                                <div className={styles.input}>{balanceData.semester}</div>
                            </div>
                        </div>
                        <div className={styles.formFields}>
                            <div className={styles.labelContainer}>
                                <label htmlFor="paymentTerms" className={styles.label}>
                                    Payment Terms
                                </label>
                            </div>
                            <div className={styles.inputContainer}>
                                <div className={styles.input}>{balanceData.paymentTerms}</div>
                            </div>
                        </div>
                        <div className={styles.formFields}>
                            <div className={styles.labelContainer}>
                                <label htmlFor="mop" className={styles.label}>
                                    Mode of Payment
                                </label>
                            </div>
                            <div className={styles.inputContainer}>
                                <div className={styles.input}>{balanceData.modeOfPayment}</div>
                            </div>
                        </div>
                        <Button
                            onClick={() => {
                                setAddTransacHandler(true);
                            }}
                        >
                            Add Transaction
                        </Button>
                        {addTransacHandler && (
                            <Modal className={styles.modalDesign}>
                                <div className={styles.messageContainer}>
                                    <h2 className={styles.messageHeader}>Add transaction</h2>
                                    <div className={styles.modalFormField}>
                                        <div className={styles.formFields}>
                                            <div className={styles.labelContainer}>
                                                <label htmlFor="schoolYearFrom" className={styles.label}>
                                                    Transaction Date
                                                </label>
                                            </div>
                                            <div className={styles.inputContainer}>{currentTime}</div>
                                        </div>
                                        <div
                                            className={
                                                !enteredTransactionTypeHasError
                                                    ? styles.formFields
                                                    : `${styles.formFields} 
                  ${styles.invalid}`
                                            }
                                        >
                                            <div className={styles.labelContainer}>
                                                <label htmlFor="transacType" className={styles.label}>
                                                    Transaction Type
                                                </label>
                                            </div>
                                            <div className={styles.inputContainer}>
                                                <input
                                                    type="text"
                                                    required={true}
                                                    id="transacType"
                                                    className={styles.input}
                                                    value={enteredTransactionType}
                                                    onChange={transactionTypeChangeHandler}
                                                    onBlur={transactionTypeBlurHandler}
                                                />
                                            </div>
                                        </div>
                                        <div className={styles.formFields}>
                                            <div className={styles.dropdown}>
                                                <select name="dropdown" id="dropdown" onChange={dropDownHandler} value={dropDown}>
                                                    <option value="Debit">Debit</option>
                                                    <option value="Credit">Credit</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div
                                            className={
                                                !enteredAmountHasError
                                                    ? styles.formFields
                                                    : `${styles.formFields} 
                  ${styles.invalid}`
                                            }
                                        >
                                            <div className={styles.labelContainer}>
                                                <label htmlFor="amount" className={styles.label}>
                                                    Amount
                                                </label>
                                            </div>
                                            <div className={styles.inputContainer}>
                                                <input
                                                    type="number"
                                                    required={true}
                                                    id="amount"
                                                    className={styles.input}
                                                    value={enteredAmount}
                                                    onChange={amountChangeHandler}
                                                    onBlur={amountBlurHandler}
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.buttonConfirmationContainer}>
                                        <Button className={styles.modalButtonYes}>Yes</Button>
                                        <Button
                                            className={styles.modalButtonNo}
                                            onClick={() => {
                                                setAddTransacHandler(false);
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
        </div>
    );
}

export default SpecificBalance;
