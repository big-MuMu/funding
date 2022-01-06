import React from 'react';
import { Route, Switch } from 'react-router-dom';
import User from './user';

export default function ChildrenRoutes(props: any) {
  return (
    <Switch>
     
      {/* demo 表单列表-编辑表单 */}
      <Route path="/user" exact>
        <User />
      </Route>
      {/* <Route path="/">
        <ListComponent {...props} />
      </Route> */}
    </Switch>
  );
}
