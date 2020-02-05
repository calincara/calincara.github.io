import React from 'react';
import './App.css';
import { Menu, Icon, Avatar } from 'antd';
import { Link, Element, Events, animateScroll as scroller } from 'react-scroll';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import avatarIcon from './assets/RGB-180612-10061.jpg'
import angularIcon from './assets/angular-icon.svg';
import chromeIcon from './assets/chrome.svg';
import cssIcon from './assets/css-3.svg';
import expressIcon from './assets/express.svg';
import firebaseIcon from './assets/firebase.svg';
import gitIcon from './assets/git-icon.svg';
import highchartsIcon from './assets/highcharts.svg';
import htmlIcon from './assets/html-5.svg';
import javaScirptIcon from './assets/javascript.svg';
import jestIcon from './assets/jest.svg';
import materialIcon from './assets/material-ui.svg';
import reactIcon from './assets/react.svg';
import typescriptIcon from './assets/typescript-icon.svg';
import vscodeIcon from './assets/vscode.svg';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import rideNowVideo from './assets/ride_now_video.mp4';

class App extends React.Component {
    state = {
        shadow1: 3,
        shadow2: 3,
        shadow3: 3,
        shadow4: 3
    }

    componentDidMount() {
        Events.scrollEvent.register('begin', function () {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register('end', function () {
            console.log("end", arguments);
        });
    }

    scrollTo() {
        scroller.scrollTo('scroll-to-element', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    render() {
        return (
            <div className="App">
                <Menu
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    theme="dark"
                    selectable={false}
                    style={{ width: '260px', height: '100%', position: 'fixed', top: '0px', zIndex: '100' }}
                >
                    <Menu.Item key="1" style={{ height: '150px', backgroundColor: 'rgb(0, 21, 41)', marginTop: '30px' }}>
                        <Avatar shape="square" size={128} src={avatarIcon} />
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Icon type="book" style={{ fontSize: '18px' }} />
                        <span style={{ fontSize: '18px' }}>
                            <Link activeClass="active" className="education" to="education" spy={true} smooth={true} duration={500} >About me</Link>
                        </span>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Icon type="code" style={{ fontSize: '18px' }} />
                        <span style={{ fontSize: '18px' }}>
                            <Link activeClass="active" className="technicalSkills" to="technicalSkills" spy={true} smooth={true} duration={500} >Technical skills</Link>
                        </span>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Icon type="profile" style={{ fontSize: '18px' }} />
                        <span style={{ fontSize: '18px' }}>
                            <Link activeClass="active" className="professionalExperience" to="professionalExperience" spy={true} smooth={true} duration={500} >Professional experience</Link>
                        </span>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Icon type="build" style={{ fontSize: '18px' }} />
                        <span style={{ fontSize: '18px' }}>
                            <Link activeClass="active" className="personalProjects" to="personalProjects" spy={true} smooth={true} duration={500} >Personal projects</Link>
                        </span>
                    </Menu.Item>
                    <Menu.Item key="6">
                        <Icon type="book" style={{ fontSize: '18px' }} />
                        <span style={{ fontSize: '18px' }}>
                            <Link activeClass="active" className="hobbies" to="hobbies" spy={true} smooth={true} duration={500} >In my free time</Link>
                        </span>
                    </Menu.Item>
                </Menu>
                <div className='content'>
                    <Element name="education" className='content-sections-first'>
                        <Typography gutterBottom variant="h3" component="h2" className='typography-title'>
                            Călin Cara
                        </Typography>
                        <Typography gutterBottom variant="h5" component="h2" className='typography-title'>
                            Short bio
                        </Typography>
                        <div className='intro-text'>
                            <Typography gutterBottom variant="h6" component="h2" className='typography-title' align={"left"}>
                            <div dangerouslySetInnerHTML={{
                                    __html: `Ride Now offers professional guided ski and mountain bike tours in Romania. <br/><br/>Built from scratch in React,
                                        it uses Google's Firebase service for storage and database, as well as Flamelink CMS (content management system -
                                        also offered by Google) <br/> because of its nice integration with Firebase, allowing the content administrator to
                                        easily make changes to the app's content. <br/><br/>For web components and styling, Material UI was chosen, as
                                        it's one of the most popular options for use alongside React. <br/> Aside from this, Redux is used for state
                                            management and EmailJS for mailing service.` }} >
                                </div>
                            </Typography>
                        </div>
                    </Element>
                    <Element name="technicalSkills" className='content-sections'>
                        <div className='skills-container'>
                            <img alt="" src={javaScirptIcon} className='skillsImg' title="JavaScript" />
                            <img alt="" src={reactIcon} className='skillsImg' title="React" />
                            <img alt="" src={htmlIcon} className='skillsImg' title="HTML" />
                            <img alt="" src={cssIcon} className='skillsImg' title="CSS" />
                            <img alt="" src={gitIcon} className='skillsImg' title="Git" />
                            <img alt="" src={typescriptIcon} className='skillsImg' title="TypeScript" />
                            <img alt="" src={angularIcon} className='skillsImg' title="Angular" />
                            <img alt="" src={materialIcon} className='skillsImg' title="Material UI" />
                            <img alt="" src={chromeIcon} className='skillsImg' title="Chrome Devtools" />
                            <img alt="" src={expressIcon} className='skillsImg' title="Express" />
                            <img alt="" src={highchartsIcon} className='skillsImg' title="Highcharts" />
                            <img alt="" src={firebaseIcon} className='skillsImg' title="Firebase" />
                            <img alt="" src={vscodeIcon} className='skillsImg' title="VSCode" />
                            <img alt="" src={jestIcon} className='skillsImg' title="Jest" />
                        </div>
                    </Element>
                    <Element name="professionalExperience" className='content-sections'>
                        <div className='work-projects-container'>
                            <Paper className='project-xp-card' elevation={this.state.shadow1} onMouseOver={() => this.setState({ shadow1: 5 })} onMouseOut={() => this.setState({ shadow1: 3 })}>
                                <Typography gutterBottom variant="h5" component="h2" className='typography-title'>
                                    Loss Management and Reporting (LMR)
                                </Typography>
                                <Typography gutterBottom variant="subtitle1" component="h2" className='typography-title'>
                                    Some description
                                </Typography>
                                <Typography gutterBottom variant="subtitle2" component="h2" className='typography-title'>
                                    Technologies used: SAP UI5, S/4HANA (CDS Views, BOPF, Gateway services)<br/>
                                    Responsibilities: dasdasd <br/>
                                    Tasks: description of tasks
                                </Typography>
                            </Paper>
                            <Paper className='project-xp-card' elevation={this.state.shadow2} onMouseOver={() => this.setState({ shadow2: 5 })} onMouseOut={() => this.setState({ shadow2: 3 })} />
                            <Paper className='project-xp-card' elevation={this.state.shadow3} onMouseOver={() => this.setState({ shadow3: 5 })} onMouseOut={() => this.setState({ shadow3: 3 })} />
                            <Paper className='project-xp-card' elevation={this.state.shadow4} onMouseOver={() => this.setState({ shadow4: 5 })} onMouseOut={() => this.setState({ shadow4: 3 })} />
                        </div>
                    </Element>
                    <Element name="personalProjects" className='content-sections'>
                        <div className='project-container'>
                            <Typography gutterBottom variant="h5" component="h2" className='typography-title'>
                                Ride Now
                            </Typography>
                            <Typography gutterBottom variant="subtitle2" component="h2" className='typography-title'>
                                <div dangerouslySetInnerHTML={{
                                    __html: `Ride Now offers professional guided ski and mountain bike tours in Romania. <br/><br/>Built from scratch in React,
                                        it uses Google's Firebase service for storage and database, as well as Flamelink CMS (content management system -
                                        also offered by Google) <br/> because of its nice integration with Firebase, allowing the content administrator to
                                        easily make changes to the app's content. <br/><br/>For web components and styling, Material UI was chosen, as
                                        it's one of the most popular options for use alongside React. <br/> Aside from this, Redux is used for state
                                            management and EmailJS for mailing service.` }} >
                                </div>

                            </Typography>
                            <video src={rideNowVideo} autoPlay loop className='project-video'></video>
                            <br />
                            <br />
                            <Typography gutterBottom variant="h6" component="h2" className='typography-title' >
                                <a href='https://ridenow-transilvania.com' rel="noopener noreferrer" target="_blank" className='project-link'>ridenow-transilvania.com</a>
                            </Typography>
                        </div>
                    </Element>
                    <div className='content-sections'>
                        <Element name="hobbies" className="hobbies">
                            <div className='container-carousel'>
                                <div id="carouselIndicator" className="carousel slide" data-ride="carousel" data-interval="2800" data-pause="false">
                                    <ol className="carousel-indicators">
                                        <li data-target="#carouselIndicator" data-slide-to="0" className="active"></li>
                                        <li data-target="#carouselIndicator" data-slide-to="1"></li>
                                        <li data-target="#carouselIndicator" data-slide-to="2"></li>
                                        <li data-target="#carouselIndicator" data-slide-to="3"></li>
                                    </ol>
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                            <img className="d-block w-100" src={img1} alt="First slide" style={{ maxHeight: '100vh', objectFit: 'contain' }} />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src={img2} alt="Second slide" style={{ maxHeight: '100vh', objectFit: 'contain' }} />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src={img3} alt="Third slide" style={{ maxHeight: '100vh', objectFit: 'contain' }} />
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src={img4} alt="Third slide" style={{ maxHeight: '100vh', objectFit: 'contain' }} />
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselIndicator" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselIndicator" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </Element>
                    </div>
                </div>
            </div >
        )
    }
}

export default App;
