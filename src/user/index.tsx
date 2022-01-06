import React, { useEffect } from 'react';
import { Table, Button } from 'antd';
import { gql, useMutation, useQuery } from '@apollo/client';

const INCREMENT_COUNTER = gql`
  mutation UserCreate($username: String!, $realname: String!) {
    userCreate(username: $username, realname: $realname) {
        id,
        username,
        realname
    }
  }
`;


const GET_DOGS = gql`
  query GetList {
    userList {
        username
      }
  }
`;

const User = () => {
    const { loading, error, data } = useQuery(GET_DOGS);
    const [userCreate] = useMutation(INCREMENT_COUNTER);
    console.log(121212, data)
    useEffect(() => {

    }, [])

    const add = () => {
        userCreate({
            variables: { username: 'zhangsen', realname: 'sen' }
        })
    }
    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
          render: text => <a>{text}</a>,
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Tags',
          key: 'tags',
          dataIndex: 'tags',
          render: tags => (
            <>
              {tags.map(tag => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'loser') {
                  color = 'volcano';
                }
                return (
                  <div color={color} key={tag}>
                    {tag.toUpperCase()}
                  </div>
                );
              })}
            </>
          ),
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => (
            <div>
              <a>Invite {record.name}</a>
              <a>Delete</a>
            </div>
          ),
        },
      ];
      
      const data1 = [
        {
          key: '1',
          name: 'John Brown',
          age: 32,
          address: 'New York No. 1 Lake Park',
          tags: ['nice', 'developer'],
        },
        {
          key: '2',
          name: 'Jim Green',
          age: 42,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: '3',
          name: 'Joe Black',
          age: 32,
          address: 'Sidney No. 1 Lake Park',
          tags: ['cool', 'teacher'],
        },
      ];

    return (
        <>
            <Button type="primary" onClick={add}>新增</Button>
            <Table columns={columns} dataSource={data1} />
        </>
    )
}

export { User };

export default User;
