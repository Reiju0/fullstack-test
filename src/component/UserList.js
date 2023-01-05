import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  return (
    <div className="container mx-auto">
      <div class="columns mt-5 is-centered ">
        <div class="table-container">
          <table class="table is-stripped is-fullwidth">
            <thead>
              <tr>
                <th>id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;
