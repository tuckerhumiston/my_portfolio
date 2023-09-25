import React, { useRef } from "react";
import '../styles/About.css';
import Nav from '../components/Nav';


function About() {

    // Create a reference to the audio element
    const audioRef = useRef(null);

    // Function to handle the play/pause action
    const toggleAudio = () => {
        const audio = audioRef.current;

        if (audio.paused) {
        audio.play();
        } else {
        audio.pause();
        }
    };

    return (
        <div className="About">
            <Nav />
            <h1>My Story</h1>
            <div className="story">
                <div className="audio-controls">
                    Hear it from my homie Snoop Dogg
                    <button id="play-button" onClick={toggleAudio}>
                    ▶️
                    </button>
                </div>

                {/* Audio element */}
                <audio id="audio" ref={audioRef} src={require('./snoop.mp3')} type="audio/mpeg"></audio>

                <p>
                    <span className="par-title">Introduction:</span><br />

                    In a world dominated by screens and circuits, my journey into the realm of technology was nothing short of destiny. I've been captivated by computers and their infinite possibilities since my earliest memories. It wasn't until middle school, however, that I took my first step into the world of tech, setting the course for an exhilarating adventure that continues to this day. <br /><br />

                    <span className="par-title">Exploring the World of Tech:</span><br />

                    Middle school marked the genesis of my technological odyssey. As a member of the I-Team, I delved into the inner workings of computers and programming. My days were filled with unraveling the fundamentals of this digital realm. Yet, what truly ignited my passion was my role in the school's computer repair shop, where I became the go-to guru for fixing students' ailing laptops.<br /><br />

                    <span className="par-title">High School Adventures:</span><br />

                    High school saw me diving deeper into the intricate landscape of computer architecture. Armed with an Arduino Uno and a Raspberry Pi Model B, I embarked on countless passion projects. From crafting a nimble line-following robot to building my very own personal PC, a programmable 3D LED matrix, and beyond, I was relentless in my pursuit of technological mastery. My high school journey culminated in a monumental project – a painstakingly assembled 8-bit breadboard computer kit. Over 300 hours of dedication to this endeavor provided me with priceless insights into computer architecture, setting the stage for what lay ahead.<br /><br />

                    <span className="par-title">College and the Unleashing of Passion:</span><br />

                    College life at Southern Maine Community College and later at The University of Maine in Orono further fueled my enthusiasm for electronics. Here, I found kindred spirits who shared my fervor for all things tech. As I honed my programming skills in languages like Java and C, I also delved into advanced mathematics, including multivariable calculus and Differential Equations. However, it wasn't until my third year of college that I uncovered my true calling... Full-Stack Engineering<br /><br />

                    <span className="par-title">The Full-Stack Revelation:</span><br />

                    A serendipitous weekend of free time led me to the world of full-stack engineering, a career path that would alter the trajectory of my life. Hungry for knowledge, I embarked on a self-paced full-stack engineering certification program at Codecademy. With each passing week, my fascination with this newfound passion grew. It consumed my thoughts and dreams, compelling me to dedicate every spare moment between university lectures to my new hobby. After an intense six months of learning, coding, and building a multitude of portfolio projects, the pivotal moment arrived on September 7th, 2023 – the day I received my full-stack engineering certification.<br /><br />

                    <span className="par-title">Conclusion:</span><br />

                    Today, I stand at the crossroads of opportunity, ready to embark on a full-time journey as a full-stack engineer. My passion is my driving force, and my dedication knows no bounds. The path from childhood curiosity to certified full-stack developer has been marked by countless hours of learning, growth, and unwavering determination. The future beckons, and I am thrilled to seize it with both hands, ready to make my mark in the ever-evolving world of technology.<br /><br />
                </p>
            </div>
            
        </div>
    )
}

export default About;