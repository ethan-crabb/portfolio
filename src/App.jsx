// import logo from './logo.svg';
import './App.css';
import Me from './Images/me2.jpg'
import Zoom from 'react-reveal/Zoom'
import FadeIn from 'react-fade-in';
import Fade from 'react-reveal/Fade'
import Typewriter from 'typewriter-effect';
import IRL from './Images/irl.JPG'
import React from 'react';

export default function App() {
    const Header = () => {
        return (
            <div style={{ width: "100vw", height: 100, position: "fixed", boxShadow: "0px 0px 10px rgba(0,0,0,.15)", background: "#fff", zIndex: 9999 }}>
                <div style={{ height: "100%" }} className="flex aic jcc">
                    <svg className='cp' onClick={() => window.scrollTo(0, 0)} width="30" height="65" viewBox="0 0 51 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.6953 65H11.8828V0.3125H14.6953V65ZM9.07031 65H6.25781V0.3125H9.07031V65ZM3.44531 65H0.632812V0.3125H3.44531V65ZM20.3203 50.9375H50.2422V53.75H20.3203V56.5625H50.2422V59.375H20.3203V62.1875H50.2422V65H17.5078V0.3125H50.2422V3.125H20.3203V5.9375H50.2422V8.75H20.3203V11.5625H50.2422V14.375H20.3203V25.625H35.6719V28.4375H20.3203V31.25H35.6719V34.0625H20.3203V36.875H35.6719V39.6875H20.3203V50.9375Z" fill="black" />
                    </svg>
                </div>
            </div>
        )
    }
    const Container = (props) => {
        return (
            <div id={props.id || null} style={{ width: "100%", paddingTop: props.pad ? 30 : 0, height: "100vh", ...props.style }} className="flex aic fdc">
                {props.children}
            </div>
        )
    }
    const Project = (props) => {
        return (
            <div className='project flex aic jcc fdc'>
                <h3 style={{ textAlign: "center" }}>{props.title}</h3>
                <p style={{ textAlign: "center", maxWidth: "80%", marginTop: 0 }}>{props.des}</p>
                <h4 style={{ margin: 0, textDecoration: "underline", color: "#fcca3f", fontSize: 12 }}><a href={props.link}>Visit {"->"}</a></h4>
            </div>
        )
    }
    const ContactButton = (props) => {
        return (
            <Zoom left>
                <button className={props.sk ? "sk" : null} onClick={() => props.onClick()}>{props.children}</button>
            </Zoom>
        )
    }
    return (
        <>
            <Header />
            <div style={{ marginTop: 100, overflow: "visible" }}>
                <Container id="helloContainer" pad style={{ maxHeight: 650 }}>
                    <img src={Me} alt="" className='meImg bumpyImage' />
                    <div style={{ overflow: "visible" }} className="flex aic jcc fdc">
                        <h1 className='parallelogram' style={{ marginTop: 50, fontWeight: "bolder", fontSize: 40, marginBottom: 0, textAlign: "center", background: "#000", color: "white", padding: 10 }}>
                            <Typewriter options={{
                                delay: 80,
                            }} onInit={(typewriter) => { typewriter.typeString("Hello, I'm Ethan").start(); }} />
                        </h1>
                        <h3 style={{ fontStyle: "italic", overflow: "visible", opacity: .8, textAlign: "center" }}>Fullstack web/app developer</h3>
                        <div style={{ background: "#fcca3f", width: 30, height: 10, marginTop: 40 }} />
                    </div>
                </Container>
                <Fade bottom>
                    <Container style={{ maxHeight: 700 }}>
                        <h1 style={{ marginTop: 0, marginBottom: 0 }}>About me</h1>
                        <img src={IRL} style={{ height: 125, borderRadius: 125, width: 125, objectFit: "cover", marginTop: 50, marginBottom: 0 }} />
                        <div style={{ background: "#fcca3f", width: 30, height: 10, marginTop: 30 }} />
                        <p style={{ textAlign: "center", maxWidth: 500, fontSize: 20, marginTop: 30, padding: "0px 10px" }}>Hey, I’m Ethan Crabb, a student from the UK.  I’m a fullstack developer and I adore working on intresting and complex projects involving web and app development!
                            <br />
                            <br />
                            I’ve had 3 years worth of experience in development, doing internships and working on Fiverr as a freelancer for a range of clientel.
                        </p>
                    </Container>
                </Fade>
                <Container style={{ height: 1400 }} id="projectContainer">
                    <h1 style={{ marginTop: 0, marginBottom: 0 }}>My Projects</h1>
                    <div style={{ background: "#fcca3f", width: 30, height: 10, marginTop: 20 }} />
                    <div className='flex aic jcc' style={{ flexWrap: "wrap", marginTop: 50, overflow: "visible" }}>
                        <Project link="https://picipici.games" title="PiciBox" des="Pici box is a small web based game built using react, nodejs and websockets" />
                        <Project link="https://louisewade.com" title="Louise Wade Jewelry" des="I’ve helped expand uppon Louise Wade Jewelry’s website using cusotm code as part of the shoppify SDK" />
                        <Project link="https://www.fiverr.com/ethancrabb" title="Statisics tracking API" des="I built and managed a statistics tracking API, handdling millions of request a day for a fiverr client" />
                    </div>
                </Container>
                <Container style={{ height: 500 }}>
                    <h1 style={{ marginTop: 0, marginBottom: 0 }}>Contact Me</h1>
                    <div style={{ background: "#fcca3f", width: 30, height: 10, marginTop: 20 }} />
                    <p style={{ textAlign: "center", width: "80%", marginBottom: 0 }}>Shoot me a message and I'll get back to you ASAP. <br /> I'd love to hear more about your project.</p>
                    <div style={{ marginTop: 30, width: "100%", overflow: "visible" }} className="flex aic jcc fdc">
                        <ContactButton onClick={() => window.open("https://www.fiverr.com/ethancrabb")}>Fiverr</ContactButton>
                        <ContactButton onClick={() => window.open("https://twitter.com/Ethan__Crabb")} sk>Twitter</ContactButton>
                        <ContactButton onClick={() => window.location.href = "mailto:ethancrabb.dev@gmail.com"}>Email</ContactButton>
                    </div>
                </Container>
            </div>
        </>
    )
}
