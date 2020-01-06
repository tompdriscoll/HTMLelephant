import React from 'react';
import { ProtectedRoute } from '../util/route_util';
import { Route, Switch} from 'react-router-dom';
import Modal from "./modal/modal"
import NavBarContainer from "./navbar/navbar_container";
import './modal/modal.css'
import EditDocumentContainer from "../components/document/edit_document_container"

const App = () => (

  <div id="main">
    <Modal />
    <header>
      <NavBarContainer />
    </header>
    <div id='testyboy'></div>
    <Switch>
      <Route exact path="/" component={EditDocumentContainer} /> 
      <ProtectedRoute exact path="/edit/:id" component={EditDocumentContainer} /> 
    </Switch> 
  </div>
);



export default App;