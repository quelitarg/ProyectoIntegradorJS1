const { conn } = require('../config/conn');
const getItems = async ()=> {
    try{
        const [rows] = await conn.query('SELECT * FROM items;');
    return rows;    
 } catch(error) {
    throw error;
 } finally {
    conn.releaseConnection();
 }
}

module.exports = {
    getItems
}

const getItems1 = async (params) => {
  const {price, limit, offset} = params;
  try{
    const [rows] = await conn.query('SELECT * FROM items WHERE price >? LIMIT ? OFFSET ?;',
    {price, limit, offset});
    return rows;
  } catch(error) {
    throw error;
 } finally {
    conn.releaseConnection();
 }
}
module.exports = {
  getItems1
}

const getAll = async () => {
  try {
    const [rows] = await conn.query('SELECT * FROM product;');
    return rows;
  } catch (error) {
    throw error;
  }
}

const getOne = async (params) => {
  try {
    const [rows] = await conn.query('SELECT * FROM product WHERE ?;', params);
    return rows;
  } catch (error) {
    throw error;
  }
}




const edit = async (params,id) => {
  try{
    const [rows] = await conn.query('SELECT * FROM product SET ? WHERE ?;', [params, id]);
    const response = {
      idError : false,
      message: 'El item fue modificado exitosamente',
      status:rows 

    };

    return response;

  }catch(e){
    const error= {
      isError: true,
      message: 'No puedes modificar el item seleccionado, error:${e}'
    };
  }

module.exports = {
  getAll,
  getOne
};
}
