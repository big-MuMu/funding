import React, { useEffect } from 'react';
import { Table, Button } from 'antd';
import { gql, useMutation, useQuery } from '@apollo/client';

const INCREMENT_COUNTER = gql`
  mutation UserCreate($username: String!, $realname: String!) {
    userCreate(data: {username: $username, realname: $realname}) {
            id,
            username,
            realname
    }
  }
`;


const GET_DOGS = gql`
  query GetList {
    userList {
        username,
        realname
      }
  }
`;

const User = () => {
    const { loading, error, data } = useQuery(GET_DOGS);
    const [addUser] = useMutation(INCREMENT_COUNTER);
    console.log(121212, data)
    useEffect(() => {

    }, [])

    const add = () => {
        addUser({
            variables: { username: 'zhangsen11', realname: 'sen11' }
        })
    }
    const columns = [
        {
          title: 'Name',
          dataIndex: 'username',
          key: 'username',
          render: text => <a>{text}</a>,
        },
        {
          title: 'Age',
          dataIndex: 'realname',
          key: 'realname',
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <div>
              <a>Invite {record.realname} </a>
              <a> Delete</a>
            </div>
          ),
        },
      ];
      
    return (
        <>
            <Button type="primary" onClick={add}>新增</Button>
            <Table columns={columns} dataSource={data?.userList} rowKey='username' />
        </>
    )
}

export { User };

export default User;
