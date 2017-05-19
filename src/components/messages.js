import React, {Component} from 'react'
import {Link, browserHistory } from 'react-router-dom'
export class Messages extends Component {
  render() {
    return (
      <div id="page-wrapper" onload="prettyPrint()">
      <div className="content container-fluid bootstrap snippets">
            <div className="row row-broken">
              <div className="col-sm-3 col-md-4 col-xs-12">
                <div className="col-inside-lg decor-default chat" style={{overflow: 'hidden',  height:'700', outline: 'none'}} tabindex="5000">
                  <div className="chat-users">
                    <h6>Online</h6>


                          <a data-id="" data-mine="" data-user="" href="#" id="openChat"><div class="user">
                          <div className="avatar">

                          <div className="status "></div>
                          </div>
                          <div className="name"></div>
                          <div className="mood"></div>
                              </div></a>




                  </div>
                </div>
              </div>
                <div className="myChatArea">
                <h3 className="lead text-center">Click on a friend</h3></div>
            </div>
          </div>
      <div id="area-chart-spline" style={{width: '100', height: '300', display: 'none'}} ></div>
      </div>
    );
  }
}
