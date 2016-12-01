import React, { Component, PropTypes } from 'react';

export default class Storename extends Component {
    render() {
        const storeNamesPre = ["fancy","simple","elegant","extravagant","expensive"];
        const storeNamesMid = ["red","green","orange","blue","cyan"];
        const storeNamesSuf = ["hut","house","bungalow","condo","palace"];

        let i = Math.floor(Math.random() * (4 + 1));
        let storename = storeNamesPre[i];

        i = Math.floor(Math.random() * (4 + 1));
        storename += "-"+storeNamesMid[i];

        i = Math.floor(Math.random() * (4 + 1));
        storename += "-"+storeNamesSuf[i];

        return (
            <form className="store-selector" action={"/store/"+storename}>
                <h2>Please Enter A Store</h2>
                <input type="text" required="" value={storename} />
                <input type="Submit" value="Submit" />
            </form>
        )
    }
}
