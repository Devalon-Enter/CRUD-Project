import { Form, Input, Button } from "antd";
import FormItem from "antd/lib/form/FormItem";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { User } from "../Models/User";
import { UserRepositoryContext } from "./UserManagement";

type PropType = {
    updateUser: (user: User) => User
}

const UserUpdate = (props: PropType) => {
    const { id }: any = useParams();
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState<User>();
    const [form] = Form.useForm();
    console.log("Edit for for user with id:", id);

    const userRepository = useContext(UserRepositoryContext)
    useEffect(() => {
        const fetchData = async () => {
            const obj = await userRepository.GetUser(id);
            console.log(obj);
            setCurrentUser(obj);
            form.setFieldsValue(obj);
        }
        fetchData();
    }, [id]);


    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    //Function for exporting userObject
    const onFinish = (user: User) => {
        props.updateUser({ ...user, id: currentUser?.id || "asdf" });
        console.log(props.updateUser);
        navigate('/users/list');
    }
    
    return (
        <>
            <h1>Benutzer bearbeiten</h1>
            <Form
                name="basic"
                labelCol={{ offset: 8 }}
                wrapperCol={{ span: 16 }}
                onFinishFailed={onFinishFailed}
                onFinish={onFinish}
                autoComplete="off"
                form={form}
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

export default UserUpdate;