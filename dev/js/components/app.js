import React from 'react';
require("../../scss/style.scss")
import UserList from "../containers/user-list"
import UserDetail from "../containers/user-detail"
const App = () => (
    <div>
        <h2>Username List:</h2>
        <UserList />
        <hr/>
        <h2>User Detail:</h2>
        <UserDetail />
        <hr/>
    </div>
);

export default App; 