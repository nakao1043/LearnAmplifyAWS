import React from 'react';
import { Link } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import { TextField } from '@material-ui/core';
import Toggle from 'material-ui/Toggle';
import { grey400 } from 'material-ui/styles/colors';
import Divider from 'material-ui/Divider';
import PageBase from '../components/PageBase';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from 'material-ui/MenuItem';
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from '@date-io/date-fns';
import { DatePicker } from "@material-ui/pickers";
import jaLocale from "date-fns/locale/ja";
import format from "date-fns/format";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
 
export const FormPage = () => {
    return (
        <Tabs>
            <TabList>
                <Tab>Tab1</Tab>
            </TabList>
            <TabPanel>
                <h2>タブ1</h2>
            </TabPanel>
        </Tabs>
    )
}

export default FormPage;