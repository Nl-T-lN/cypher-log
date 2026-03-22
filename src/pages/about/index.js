import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
  services,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="12" className="d-flex align-items-center">
            <div>
              <p>{dataabout.aboutme}</p>
            </div>
          </Col>
        </Row>
        {worktimeline.length > 0 && (
          <Row className=" sec_sp">
            <Col lg="5">
              <h3 className="color_sec py-4">Work Timline</h3>
            </Col>
            <Col lg="7">
              <table className="table caption-top">
                <tbody>
                  {worktimeline.map((data, i) => {
                    return (
                      <tr key={i}>
                        <th scope="row">{data.jobtitle}</th>
                        <td>{data.where}</td>
                        <td>{data.date}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </Col>
          </Row>
        )}

        {/* === TECHNOLOGY STACK — Minimal Circle Icons === */}
        <Row className="sec_sp">
          <Col lg="12" className="text-center">
            <h3 className="techstack-title">Technology Stack</h3>
            <p className="techstack-subtitle">Tools & technologies I work with regularly</p>
          </Col>
          <Col lg="12">
            <div className="techstack-grid">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className={`techstack-circle ${i % 3 === 0 ? 'techstack-circle--orbit' : ''}`}
                  title={skill.name}
                >
                  <div className="techstack-circle__inner">
                    {skill.icon ? (
                      <i className={skill.icon}></i>
                    ) : (
                      <span className="techstack-circle__emoji">{skill.emoji}</span>
                    )}
                  </div>
                  <span className="techstack-circle__label">{skill.name}</span>
                </div>
              ))}
            </div>
          </Col>
        </Row>

      </Container>
    </HelmetProvider>
  );
};