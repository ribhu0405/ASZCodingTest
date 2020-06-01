import React, { Component } from 'react';
import { UserTodoActions } from '../actions/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import 'antd/dist/antd.css';
import { Tabs, Row, Col } from 'antd';
import TodoPanel from './Todo/TodoPanel';
import UserPanel from './User/UserPanel';

const mapStateToProps = (state) => {

    return {
        User: state.User,
        Todo: state.Todo,
    }
}

export class ManageDashboard extends Component {
    render() {

        let { TabPane } = Tabs;


        return (
            <Row>
                <Col span={1}></Col>
                <Col span={22}>
                    <Tabs defaultActiveKey="1">
                        <TabPane tab="Todos" key="1">
                            <TodoPanel {...this.props} />
                        </TabPane>
                        <TabPane tab="Users" key="2">
                            <UserPanel {...this.props} />
                        </TabPane>
                    </Tabs>
                </Col>
                <Col span={1}></Col>
            </Row>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    let userTodoActions = new UserTodoActions();
    return bindActionCreators({ ...userTodoActions }, dispatch);
}
const Dashboard = connect(mapStateToProps, mapDispatchToProps)(ManageDashboard);
export default Dashboard;