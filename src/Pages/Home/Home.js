import React, {Component} from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import './Home.css';
import {Link} from 'react-router-dom';
import images from '../ProjectImages/ProjectImages';
export default class HomePage extends Component{
    render(){
        return(
           <div>
                <Header/>
                <div class="splash-container">
                    <div class="splash">
                        <h1 class="splash-head">WEB CHAT APP</h1>
                        <p class="splash-subhead">
                            Let's talk with our loved ones
                        </p>

                        <div id="custom-button-wrapper">
                        <Link to = '/login'>
                            <a href class="my-super-cool-btn">
                            <div class="dots-container">
                                <div class="dot"></div>
                                <div class="dot"></div>
                                <div class="dot"></div>
                                <div class="dot"></div>
                            </div>
                            <span className="buttoncooltext">Get Started</span>
                            </a>
                            </Link>
                        </div>
                    </div>
                </div>

                <div class="content-wrapper">
                    <div class="content">
                        <h2 class="content-head is-center"> Features of WebChat Application</h2>


                        <div className="Appfeatures">
                                <div className="contenthead">

                                    <h3 class="content-subhead">
                                        <i class="fa fa-rocket"></i>
                                        Get Started Quickly
                                    </h3>
                                    <p>
                                        Just register yourself with this app and start chating with your loved ones
                                    </p>
                                </div>
                                <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                                    <h3 class="content-subhead">
                                        <i class="fa fa-sign-in"></i>
                                        Firebase Authentication
                                    </h3>
                                    <p>
                                        Firebase Authentication has been implemented in this app 
                                    </p>
                                </div>
                                <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                                    <h3 class="content-subhead">
                                        <i class="fa fa-th-large"></i>
                                        Media 
                                    </h3>
                                    <p>
                                        You can share images with your friends for better experience
                                    </p>
                                </div>
                                <div class="l-box pure-u-1 pure-u-md-1-2 pure-u-lg-1-4">
                                    <h3 class="content-subhead">
                                        <i class="fa fa-refresh"></i>
                                        Updates
                                    </h3>
                                    <p>
                                        I will working with new features for this app for better experience in future
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="AppfeaturesFounder">
                            <div class="l-box-lrg is-center pure-u-1 pure-u-md-1-2 pure-u-lg-2-5">
                                <img width="300" alt="File Icons" class="pure-img-responsive" src={images.ashish}/>
                            </div>
                            <div class="pure-u-1 pure-u-md-1-2 pure-u-lg-3-5">

                                <h2 class="content-head content-head-ribbon">Ashish</h2>

                                <p style={{color:'white'}}>
                                    The Founder of project. 
                                </p>
                                <p style={{color:'white'}}>
                                Currently i am fresher and busy to explore new ideas with new technologies being developed
                                </p>
                            </div>
                        </div>

                        <div class="content">
                        <h2 class="content-head is-center">Who We Are?</h2>

                        <div class="Appfeatures">
                            <div class="l-box-lrg pure-u-1 pure-u-md-2-5">
                                <form class="pure-form pure-form-stacked">
                                    <fieldset>

                                        <label for="name">Your Name</label>
                                        <input id="name" type="text" placeholder="Your Name"/>


                                        <label for="email">Your Email</label>
                                        <input id="email" type="email" placeholder="Your Email"/>

                                        <label for="password">Your Password</label>
                                        <input id="password" type="password" placeholder="Your Password"/>

                                        <button type="submit" class="pure-button">Sign Up</button>
                                    </fieldset>
                                </form>
                            </div>

                            <div class="l-box-lrg pure-u-1 pure-u-md-3-5">
                                <h4>Contact Us</h4>
                                <p>
                                For any question or suggestion you can directly contact us on our Facebook Page:
                                
                            
                                Facebook: <a href="https://www.facebook.com/Ashish852201/ ">https://web.facebook.com/alizeb438 </a>
                                </p>
                                <p>
                                Instagram:<a href=" https://www.instagram.com/being_ashish___/"> https://www.instagram.com/alizeb438/</a>
                                </p>
                                

                                <h4>More Information</h4>
                                <p>
                                To whom it may concern
                        
                                </p>
                                <p>
                                This App is developed for project purpose - 
                                Developed by -Ashish kumar
                                </p>
                            </div>
                        </div>

                    </div>
                    <Footer/>
                </div>
                
           </div>
        )
    }
}