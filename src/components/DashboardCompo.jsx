import { Col, Divider, Row } from 'antd';
import React from 'react';

const style = {
  minHeight: '100px',
  backgroundColor: 'white',
  borderRadius: '5px',
  boxShadow: 'rgba(47, 43, 61, 0.1) 0px 4px 18px 0px',
};
function DashboardCompo() {
  return (
    <>
      <Divider orientation="left">Auction Info</Divider>
      <div>
        <Row gutter={[20, 20]}>
          <Col
            className="gutter-row"
            md={{ span: 8 }}
            sm={{ span: 12 }}
            xs={{ span: 24 }}
          >
            <div style={style}></div>
          </Col>
          <Col
            className="gutter-row"
            md={{ span: 8 }}
            sm={{ span: 12 }}
            xs={{ span: 24 }}
          >
            <div style={style}></div>
          </Col>
          <Col
            className="gutter-row"
            md={{ span: 8 }}
            sm={{ span: 12 }}
            xs={{ span: 24 }}
          >
            <div style={style}></div>
          </Col>
        </Row>
      </div>
      <Divider orientation="left">People Info</Divider>
      <div>
        <Row gutter={[20, 20]}>
          <Col
            className="gutter-row"
            md={{ span: 8 }}
            sm={{ span: 12 }}
            xs={{ span: 24 }}
          >
            <div style={style}></div>
          </Col>
          <Col
            className="gutter-row"
            md={{ span: 8 }}
            sm={{ span: 12 }}
            xs={{ span: 24 }}
          >
            <div style={style}></div>
          </Col>
          <Col
            className="gutter-row"
            md={{ span: 8 }}
            sm={{ span: 12 }}
            xs={{ span: 24 }}
          >
            <div style={style}></div>
          </Col>
        </Row>
      </div>
      <Divider orientation="left">Money Info</Divider>
      <div>
        <Row gutter={[20, 20]}>
          <Col
            className="gutter-row"
            md={{ span: 8 }}
            sm={{ span: 12 }}
            xs={{ span: 24 }}
          >
            <div style={style}></div>
          </Col>
          <Col
            className="gutter-row"
            md={{ span: 8 }}
            sm={{ span: 12 }}
            xs={{ span: 24 }}
          >
            <div style={style}></div>
          </Col>
          <Col
            className="gutter-row"
            md={{ span: 8 }}
            sm={{ span: 12 }}
            xs={{ span: 24 }}
          >
            <div style={style}></div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default DashboardCompo;
