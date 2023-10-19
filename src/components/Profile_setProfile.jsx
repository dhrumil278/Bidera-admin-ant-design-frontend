import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Col, Form, Input, Row } from 'antd';
import React from 'react';

function Profile_setProfile() {
  return (
    <div
      style={{
        maxWidth: '900px',
        margin: 'auto',
      }}
    >
      <Row
        gutter={40}
        style={{
          padding: '35px 35px',
          backgroundColor: 'white',
          borderRadius: '7px',
          boxShadow: 'rgba(47, 43, 61, 0.1) 0px 4px 18px 0px',
          maxWidth: '100%',
        }}
      >
        <Col sm={24} md={5}>
          <Avatar shape="square" size={100} icon={<UserOutlined />} />
        </Col>
        <Col
          sm={24}
          md={19}
          style={{ display: 'flex', alignItems: 'end', paddingTop: 15 }}
        >
          <Button type="primary" style={{ boxShadow: 'none' }}>
            Upload Image
          </Button>
          <Button style={{ marginLeft: 15 }}>Save</Button>
        </Col>
      </Row>
      <Row
        gutter={40}
        style={{
          // maxWidth: '100%',
          padding: '35px 35px',
          backgroundColor: 'white',
          borderRadius: '7px',
          boxShadow: 'rgba(47, 43, 61, 0.1) 0px 4px 18px 0px',
          marginTop: '25px',
          maxWidth: '100%',
        }}
      >
        <Col span={24}>
          <Form
            name="basic"
            layout="vertical"
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
            // onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Row gutter={24}>
              <Col sx={24} sm={24} md={12}>
                <Form.Item
                  style={{ marginBottom: 12 }}
                  label="Firstname"
                  name="firstname"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your firstname!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  style={{ marginBottom: 12 }}
                  label="Phone No."
                  name="phone"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Phone Number!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  style={{ marginBottom: 12 }}
                  label="State"
                  name="state"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your State!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  style={{ marginBottom: 12 }}
                  label="Country"
                  name="country"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Country!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col sx={24} sm={24} md={12}>
                <Form.Item
                  style={{ marginBottom: 12 }}
                  label="Lastname"
                  name="lastname"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Lastname!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  style={{ marginBottom: 12 }}
                  label="Address"
                  name="address"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your Address!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  style={{ marginBottom: 12 }}
                  label="Zip Code"
                  name="zipcode"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your ZipCode!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Item
                  wrapperCol={{
                    span: 16,
                  }}
                >
                  <Button
                    type="primary"
                    htmlType="submit"
                    style={{ width: '150px', boxShadow: 'none' }}
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
}

export default Profile_setProfile;
