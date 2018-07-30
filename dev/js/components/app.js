import React from 'react';
require("../../scss/style.scss");
import UserList from "../containers/user-list";
import UserDetail from "../containers/user-detail";
import AlertDismissable from "../containers/alerts";
import BadgeItem from "../containers/badge";
import BreadscrumbList from "../containers/breadcrumb";


const App = () => (
    <div>
        <h2>Username List:</h2>
        <UserList />
        <hr/>
        <h2>User Detail:</h2>
        <UserDetail />
        <hr/>
        <h2>Testing bs3:</h2>
        <div>
        </div>
    </div>
);

export default App;