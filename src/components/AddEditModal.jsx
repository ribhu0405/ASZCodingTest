import React, { Component } from 'react'
import { Modal, Input, DatePicker, Descriptions } from 'antd';

export default class AddEditModal extends Component {
    render() {

        let {
            showModalForUser,
            SelectedUser,
        } = this.props.User;
        let {
            showModalForTodo,
            SelectedTodo
        } = this.props.Todo;

        return (
            <Modal
                onOk={() => {
                    if (showModalForUser) {
                        this.props.saveUser({
                            User: SelectedUser
                        });
                        setTimeout(() => {
                            this.props.loadModal()
                        }, 1500);
                    }
                    else if (showModalForTodo) {
                        this.props.saveTodo({
                            Todo: SelectedTodo
                        });
                        setTimeout(() => {
                            this.props.loadModal()
                        }, 1500);
                    }
                }}
                onCancel={() => {
                    this.props.closeModal()
                }}
                okButtonProps={{
                    disabled: (showModalForTodo && !SelectedTodo.dateAdded) || (showModalForUser && !SelectedUser.name),
                    loading: this.props.Todo.loading || this.props.User.loading
                }}
                okText="Save"
                title={showModalForUser ? "User" : "Todo"}
                visible={showModalForUser || showModalForTodo}>
                {showModalForUser &&
                    <React.Fragment>
                        <Descriptions>
                            <Descriptions.Item label="Name *">
                                <Input
                                    onChange={(event) => {
                                        this.props.changeUserField({
                                            SelectedUser,
                                            name: event.target.value
                                        })
                                    }}
                                    value={SelectedUser.name}
                                    placeholder="Name" />

                            </Descriptions.Item>
                        </Descriptions>
                        <Descriptions>

                            <Descriptions.Item label="Email">
                                <Input
                                    onChange={(event) => {
                                        this.props.changeUserField({
                                            SelectedUser,
                                            email: event.target.value
                                        })
                                    }}
                                    value={SelectedUser.email}
                                    placeholder="Email" />

                            </Descriptions.Item>
                        </Descriptions>
                    </React.Fragment>
                }
                {showModalForTodo &&
                    <React.Fragment>
                        <Descriptions>
                            <Descriptions.Item label="Action">
                                <Input
                                    value={SelectedTodo.action}
                                    onChange={(event) => {
                                        this.props.changeTodoField({
                                            SelectedTodo,
                                            action: event.target.value
                                        })
                                    }}
                                    placeholder="Action" />

                            </Descriptions.Item>
                        </Descriptions>
                        <Descriptions>
                            <Descriptions.Item label="DateAdded *">
                                <DatePicker

                                    value={SelectedTodo.dateAdded}
                                    onChange={(date) => {
                                        this.props.changeTodoField({
                                            SelectedTodo,
                                            dateAdded: date
                                        })
                                    }}
                                    placeholder="Date Added" />

                            </Descriptions.Item>
                        </Descriptions>
                    </React.Fragment>
                }
            </Modal>
        )
    }
}
