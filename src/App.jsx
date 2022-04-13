// import logo from './logo.svg';
import './App.css';
import Me from './Images/me2.jpg'
import Fade from 'react-reveal/Fade'
import FadeIn from 'react-fade-in';
import Typewriter from 'typewriter-effect';
import IRL from './Images/irl.JPG'
import React from 'react';
// import postit from './Images/postit.png'
// function App() {
//     const Page = (props) => {
//         return (
//             <div className={props.className} style={{ width: "100vw", height: "100vh", ...props.style, minHeight: 570, background: props.bg || "#fff" }}>
//                 {props.children}
//             </div>
//         )
//     }
//     const Projects = (props) => {
//         return (
//             <div className='project flex aic jcc fdc' onClick={() => window.open(props.link)}>
//                 <h3 style={{ overflow: "hidden" }}>{props.title}</h3>
//                 <h4><Typewriter options={{
//                     delay: 50,
//                 }} onInit={(typewriter) => { typewriter.typeString(props.des).start(); }} /></h4>
//             </div>
//         )
//     }
//     return (
//         <div>
//             <Header />
//             <Page className="flex aic jcc one-container" style={{ gap: "5vw" }}>
//                 <FadeIn className="flex aic jcc noOver one" style={{ gap: "5vw", overflow: "visible" }} delay={200}>
//                     <div>
//                         <div style={{ width: "100vw", minWidth: 700 }} className="flex aic jcc fdc">
//                             <h1 style={{ fontSize: "8vw", marginBottom: 0 }}>
//                                 Hi, <br />
//                                 I'm <span style={{ color: "#fcca3f" }}>Ethan</span>
//                             </h1>
//                             <h3 style={{ fontSize: "2vw" }}>
//                                 <Typewriter options={{
//                                     delay: 100,
//                                     loop: true
//                                 }} onInit={(typewriter) => { typewriter.typeString("Fullstack web developer").start().pauseFor(2000).deleteChars(13).typeString("app developer").pauseFor(4000); }} />
//                             </h3>
//                         </div>
//                     </div>
//                     <img src={Me} alt="MeMoji" style={{
//                         width: "40vw", maxWidth: 700, minWidth: 260
//                     }} className="bumpyImage" />
//                 </FadeIn>
//             </Page>
//             <Page bg="#8097A8">
//                 <div style={{ padding: "0px 80px", color: "#fff", height: "100%" }} className="flex jcsb fdc">
//                     <div style={{ marginTop: 60 }}>
//                         <h1 style={{ fontSize: "4vh" }}>About me</h1>
//                         <div style={{ background: "rgba(255,255,255,.5)", height: 5, width: 100 }}></div>
//                     </div>
//                     <p>
//                         Hey, I’m Ethan, a student from the UK.  I’m a fullstack developer and I adore working on intresting and complex projects involving web and app development!
//                         <br /><br />
//                         I’ve had 3 years worth of experience in development, doing internships and working on Fiverr as a freelancer for a range of clientele.
//                     </p>
//                     <div className='flex aic' style={{ marginBottom: 120, gap: "5vh", overflow: "visible" }}>
//                         <img src={IRL} alt="" style={{ height: "15vh", borderRadius: "50%", boxShadow: "-10px 8px 0px #fcca3f", overflow: "visible" }} />
//                         <div>
//                             <h3 style={{ fontSize: "4vh", marginBottom: 0 }}>Me, age 14</h3>
//                             <h3 style={{ fontWeight: "normal", fontSize: "3vh", marginTop: 20, color: "#fcca3f" }}>Obsessed with web <br /> development</h3>
//                         </div>
//                     </div>
//                 </div>
//             </Page>
//             <Page bg="#002F51" className="flex jcc aic fdc" style={{ color: "#fff" }}>
//                 <div className='flex aic jcc fdc'>
//                     <h1 style={{ fontSize: "6vw", marginBottom: 30 }}><span style={{ color: "#fcca3f" }}>My</span> Projects</h1>
//                     <div style={{ width: "10vw", background: "#fcca3f", height: 10 }} />
//                 </div>
//                 <div className='flex aic jcc' style={{ flexWrap: "wrap", marginTop: 50 }}>
//                     <Projects link="https://picipici.games" title="PiciBox (Web Game)" des="Pici box is a small web based game built using react, nodejs and websockets" />
//                     <Projects link="https://www.fiverr.com/ethancrabb" title="Statisics tracking API" des="I built and managed a statistics tracking API, handdling millions of request a day for a fiverr client" />
//                     <Projects link="https://www.louisewade.com/" title="Louise Wade Jewelry" des="I’ve helped expand uppon Louise Wade Jewelry’s website using cusotm code as part of the shoppify SDK" />
//                 </div>
//                 <div className='flex aic jcc fdc'>
//                     <h3>Contact me</h3>
//                     <div style={{ width: 10, height: 3, background: "#fff" }} />
//                     <div className='flex aic jcc contactLinks' style={{ gap: 10, color: "#fcca3f" }}>
//                         <h4 onClick={() => window.location.href = "mailto:ethancrabb.dev@gmail.com"}>Email</h4>
//                         •
//                         <h4 onClick={() => window.open("https://twitter.com/Ethan__Crabb")}>Twitter</h4>
//                         •
//                         <h4 onClick={() => window.open("https://www.fiverr.com/ethancrabb")}>Fiverr</h4>
//                     </div>
//                 </div>
//             </Page>
//         </div >
//     )
// }

// export default App;

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
            <button className={props.sk ? "sk" : null} onClick={() => props.onClick()}>{props.children}</button>
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
