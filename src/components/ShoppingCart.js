import React from 'react';
import { Panel, Table, Button, Glyphicon } from 'react-bootstrap';
//import store from '../store';
import { removeFromCart } from '../actionCreators';
import { connect} from 'react-redux';

const styles = {
  footer: {
    fontWeight: 'bold'
  }
}

//SE QUITO LA CLASE, YA QUE SE POR MEDIO DE REACT-REDUX SE PUEDE UTILIZAR EL MAPSTATETOPROPS Y EL MAPDISPATCHTOPROPS PARA PASARLE OBJETOS COMO PROPS, Y SE PUEDEN UTILIZAR ESTE TIPO DE FUNCIONES, LLAMADOS COMPONENTES PRESENTACIONALES (NO TIENE NINGUNA LOGICA NO MANEJA ESTADO, DE ESO SE ENCARGA EL CONNECT DE REACT-REDUX)
//SE PUEDE PASAR COMO PARÁMETRO LAS KEYS DE LOS OBJETOS QUE SE HAN PASADO, ESTO SE LLAMADA DESTRUCTURAR UN ARGUMENTO EN ES6, PARTIENDO LAS LLAVES
const ShoppingCart = ({ cart, removeFromCart }) => {
  /*constructor() {
    super();
    this.removeFromCart = this.removeFromCart.bind(this);

    this.state = {
      cart: []
    }

    store.subscribe(() => {
      this.setState({
        cart: store.getState().cart
      });
    });
  }*/

    return (
      <Panel header="Shopping Cart">
        <Table fill>
          <tbody>
            {cart.map(product =>
              <tr key={product.id}>
                <td>{product.name}</td>
                <td className="text-right">${product.price}</td>
                <td className="text-right"><Button bsSize="xsmall" bsStyle="danger" onClick={() => removeFromCart(product)}><Glyphicon glyph="trash" /></Button></td>
              </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4" style={styles.footer}>
                Total: ${cart.reduce((sum, product) => sum + product.price, 0)}
              </td>
            </tr>
          </tfoot>
        </Table>

      </Panel>
    )
  }


//IMPORTANTE: TANTO LOS OBJETOS DE MAPSTATETOPROPS COMO LOS DE MAPDISPATCHTOPROPS VAN A SER PASADOS AL COMPONENTE
//encarga de retornar un objeto que es el q vamos a pasar como propiedades a nuestro componente presentacional
const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

const mapDispatchToProps = dispatch => {
  return {
      removeFromCart(product) {
        dispatch(removeFromCart(product));
      }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
