import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import {
    Table,
    Space,
    Button
} from "antd";
import { Link, useNavigate } from "react-router-dom";
import { User } from "../Models/User";


type PropType = {
    users: User[],
    method: (id: string) => boolean
}


export const UserList = (props: PropType) => {

    const navigate = useNavigate();

    const columns = [
        {
            title: 'Vorname',
            dataIndex: 'vorname',
            key: 'vorname',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'E-Mail',
            dataIndex: 'e_mail',
            key: 'e_mail'
        },
        {
            title: 'Telefon',
            dataIndex: 'telefon',
            key: 'telefon',
        },
        {
            title: 'Geburtstag',
            dataIndex: 'geburtstag',
            key: 'geburtstag'
        },
        {
            key: 'action',
            render: (record: User) => (
                <Space size='middle'>
                    <Button type="default" onClick={() => navigate(`/users/edit/${record.id}`)}>
                        <EditOutlined>Bearbeiten</EditOutlined>
                    </Button>
                    <Button type="default" onClick={() => props.method(record.id)} >
                        <DeleteOutlined>Löschen</DeleteOutlined>
                    </Button>
                </Space>
            )
        }
    ];

    return (
        <>
            <div style={{margin: '2rem'}}>
                <code>
                    {JSON.stringify(props.users, null, 2)}
                </code>
                <h1 style={{paddingBottom: '1rem'}}>Benutzerverwaltung</h1>
                <Table columns={columns} dataSource={props.users}/>
                <Link to="/users/new"><Button type='primary'>+ Benutzer hinzufügen</Button></Link>
            </div>
        </>        
    );
}