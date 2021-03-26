import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow} from 'material-ui/Table';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentCreate from 'material-ui/svg-icons/content/create';
import ContentAdd from 'material-ui/svg-icons/content/add';
import { pink500, grey200, grey500 } from 'material-ui/styles/colors';
import PageBase from '../components/PageBase';

import RaisedButton from 'material-ui/RaisedButton';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';


const TablePage = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [modaleditIsOpen, setIseditOpen] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [items, setItems] = useState([]);
  const [count, setCount] = useState();
  const [data, setData] = useState();
  const [modaltableOpen, settableOpen] = useState(false);


  //モーダル表示処理
  const handleClose = () => {
    settableOpen(false);
  };

  //編集モーダルクローズ時処理
  const handleOpen = (item) => {
    settableOpen(true);
    setData(item);
};

//登録モーダルクローズ時処理
  const handleEditClose = () => {
    setIseditOpen(false);
  };
  //テーブルページ変更処理
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  //テーブル表示件数変更処理
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  //スタイル
  const styles = {
    floatingActionButton: {
      margin: 0,
      top: 'auto',
      right: 20,
      bottom: 20,
      left: 'auto',
      position: 'fixed',
    },
    editButton: {
      fill: grey500
    },
    columns: {
      id: {
        width: '10%'
      },
      name: {
        width: '30%'
      },
      price: {
        width: '20%'
      },
      category: {
        width: '20%'
      },
      edit: {
        width: '10%'
      },
      modaledit: {
        width: '10%'
      }
    }
  };
  //スタイル
  const modalStyle = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      backgroundColor: "rgba(0,0,0,0.50)"
    },
    content: {
      position: "absolute",
      top: "5rem",
      left: "5rem",
      right: "5rem",
      bottom: "5rem",
      backgroundColor: "white",
      borderRadius: "1rem",
      padding: "1.5rem"
    }
  };

  return (
    <PageBase title="Master Table Page"
      navigation="Application / Master Table Page">
      <div>
        <FloatingActionButton style={styles.floatingActionButton} backgroundColor={pink500} onClick={() => setIseditOpen(true)}>
          <ContentAdd />
        </FloatingActionButton>
        
        <TableContainer >
          <Table >
            <TableHeader
              adjustForCheckbox={false}
              displaySelectAll={false}
            >
              <TableRow>
                <TableHeaderColumn style={styles.columns.id}>productID</TableHeaderColumn>
                <TableHeaderColumn style={styles.columns.name}>name</TableHeaderColumn>
                <TableHeaderColumn style={styles.columns.price}>price</TableHeaderColumn>
                <TableHeaderColumn style={styles.columns.category}>category</TableHeaderColumn>
                <TableHeaderColumn style={styles.columns.modaledit}>モーダル編集</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody
              displayRowCheckbox={false}
            >
              {items.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item) => (
                <TableRow key={item.productID}>
                  <TableCell style={styles.columns.id}>{item.productID}</TableCell>
                  <TableCell style={styles.columns.name}>{item.name}</TableCell>
                  <TableCell style={styles.columns.price}>{item.price}</TableCell>
                  <TableCell style={styles.columns.category}>{item.category}</TableCell>
                  <TableCell style={styles.columns.modaledit}>
                    <Link value={item.productID} className="button" onClick={() => { handleOpen(item) }}>
                      <FloatingActionButton
                        zDepth={0}
                        mini={true}
                        backgroundColor={grey200}
                        iconStyle={styles.editButton}>
                        <ContentCreate />
                      </FloatingActionButton>
                    </Link>
                  </TableCell>
                  {/* <TableCell style={styles.columns.edit}>
                    <Link to={"/formLinkEdit?" + item.productID} className="button" >
                      <FloatingActionButton
                        zDepth={0}
                        mini={true}
                        backgroundColor={grey200}
                        iconStyle={styles.editButton}>
                        <ContentCreate />
                      </FloatingActionButton>
                    </Link>
                  </TableCell> */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          owsPerPageOptions={[10, 25, 100]}
          component="div"
          count={items.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        
      </div>
    </PageBase>
  );
};
export default TablePage;
