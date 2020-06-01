import React, { Component } from 'react';
import { Button, Space, Table } from 'antd';
import AddEditModal from '../AddEditModal';
import './../../App.css';

export default class TodoPanel extends Component {

    render() {
        let {
            TodoList,

        } = this.props.Todo;

        let columns = [
            {
                title: 'Action',
                dataIndex: 'action',
                key: 'action',
            },
            {
                title: 'Date Added',
                dataIndex: 'dateAdded',
                key: 'dateAdded',
                render: (text, record) => (

                    <Space size="middle">
                        {record.dateAdded._d.toLocaleDateString()}
                    </Space>
                ),
            },
            {
                title: 'Actions',
                key: 'actions',
                render: (text, record) => (
                    <Space size="middle">
                        <span className="action-span" onClick={() => {
                            this.props.openModal({
                                SelectedTodo: record,
                                showModalForTodo: true,
                                showModalForUser: false,
                            })

                        }}>Edit</span> |
                        <span onClick={() => {
                            this.props.deleteTodo({
                                SelectedTodo: record,
                            })
                        }
                        } className="action-span">Delete</span>
                    </Space>
                ),
            },
        ];
        return (
            <React.Fragment>

                <Button
                    type="primary"
                    onClick={() => {
                        this.props.openModal({
                            showModalForUser: false,
                            showModalForTodo: true,
                        })
                    }}>
                    Add Todo
                </Button>
                <Table dataSource={TodoList} columns={columns} />
                <AddEditModal {...this.props} />

            </React.Fragment>
        )
    }
}
