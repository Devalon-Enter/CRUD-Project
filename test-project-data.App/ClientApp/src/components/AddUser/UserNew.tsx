import React from 'react';
import { Form, Input, Button } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

import { User } from "../../Models/User";

type PropsType = {
    newUser: (user: User) => Promise<string>
}

const UserNew = (props: PropsType) => {
    const navigate = useNavigate();


    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    //Function for exporting userObject
    const onFinish = (user: User) => {
        props.newUser({ ...user });
        console.log(props.newUser);
        navigate('/users/list');
    }

    return (
        <>
            <h1>Neuen Benutzer erstellen</h1>

            <Form
                name="basic"
                labelCol={{ offset: 8 }}
                wrapperCol={{ span: 16 }}
                onFinishFailed={onFinishFailed}
                onFinish={onFinish}
                autoComplete="off"
                style={{ margin: '2rem' }}>

                <FormItem
                    label="Vorname"
                    name="vorname"
                    rules={[{ required: true, message: 'Bitte geben Sie Ihren Vornamen an!' }]}>
                    <Input />
                </FormItem>

                <FormItem
                    label="Name"
                    name="name"
                    rules={[{ required: true, message: 'Bitte geben Sie Ihren Namen an!' }]}>
                    <Input />
                </FormItem>

                <FormItem
                    label="E-Mail"
                    name="e_mail"
                    rules={[{ required: true, message: 'Bitte geben Sie Ihre E-Mail Adresse an!' }]}>
                    <Input />
                </FormItem>

                <FormItem
                    label="Telefon"
                    name="telefon"
                    rules={[{ required: true, message: 'Bitte geben Sie ihre Telefonnummer an!' }]}>
                    <Input />
                </FormItem>

                <FormItem
                    label="Geburtstag"
                    name="geburtstag"
                    rules={[{ required: true, message: 'Bitte geben Sie Ihr Geburtsdatum an!' }]}>
                    <Input />
                </FormItem>

                <Form.Item wrapperCol={{ offset: 1, span: 16 }}>
                    <Button type="primary" htmlType="submit" style={{ marginRight: "1rem" }}>
                        Submit
                    </Button>
                    <Link type='primary' to="/users/list">
                        <Button type="default" htmlType="button">
                            Cancel
                        </Button>
                    </Link>
                </Form.Item>
            </Form>
        </>
    );
}

export default UserNew;