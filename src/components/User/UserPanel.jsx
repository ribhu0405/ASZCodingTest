import React, { Component } from 'react';
import { Button, Space, Table } from 'antd';
import './../../App.css';

export default class UserPanel extends Component {
    render() {
        let {
            UserList,
        } = this.props.User;

        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Email',
                dataIndex: 'email',
                key: 'email',
            },
            {
                title: 'Action',
                key: 'action',
                render: (text, record) => (
                    <Space size="middle">
                        <span className="action-span" onClick={() => {
                            this.props.openModal({
                                Selecteduser: record,
                                showModalForTodo: false,
                                showModalForUser: true,
                            })

                        }}>Edit</span> |
                        <span
                            onClick={() => {
                                this.props.deleteUser({
                                    SelectedUser: record,
                                })
                            }
                            }
                            className="action-span">Delete</span>
                    </Space>
                ),
            },
        ];
        console.log("UserList ", UserList);
        return (
            <React.Fragment>

                <Button
                    onClick={() => {
                        this.props.openModal({
                            showModalForUser: true,
                            showModalForTodo: false,
                        })
                    }}
                >
                    Create User
                </Button>
                <Table

                    dataSource={UserList}
                    columns={columns} />
            </React.Fragment>
        )
    }
}
