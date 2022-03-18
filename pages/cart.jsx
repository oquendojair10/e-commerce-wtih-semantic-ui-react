import { useContext } from "react";
import { CartContext } from "../context/cart.context";
import { formatter } from "../lib/formatter";

import Container from "../components/Container";
import { Item, Header, Icon, Button } from "semantic-ui-react";

function CartPage() {
  const { items, onAdd, onDelete, decreaseQuantity } = useContext(CartContext);

  return (
    <Container title="Bicycles | cart">
      <div className="cart-wrapper">
        <div className="cart-content">
          {items.length ? (
            items.map((item) => (
              <Item.Group>
                <Item>
                  <Item.Image size="tiny" src={item.imageBicycle} />
                  <Item.Content>
                    <Item.Header>{item.model}</Item.Header>
                    <Item.Meta>
                      <span>
                        {formatter.format(parseInt(item.price) * item.quantity)}
                      </span>
                    </Item.Meta>
                    <Item.Extra>
                      <Button.Group size="mini">
                        <Button
                          icon="minus"
                          disabled={item.quantity === 1}
                          onClick={() =>
                            item.quantity >= 2
                              ? decreaseQuantity(item.bicycleId)
                              : onDelete(item.bicycleId)
                          }
                        />
                        <Button icon="plus" onClick={() => onAdd(item)} />
                      </Button.Group>
                      <Button
                        animated
                        compact
                        color="red"
                        size="tiny"
                        onClick={() => onDelete(item.bicycleId)}
                      >
                        <Button.Content visible>Delete</Button.Content>
                        <Button.Content hidden>
                          <Icon name="trash" />
                        </Button.Content>
                      </Button>
                    </Item.Extra>
                  </Item.Content>
                </Item>
              </Item.Group>
            ))
          ) : (
            <Header
              as="h4"
              color="grey"
              icon="meh outline"
              content="Please add a bike"
            />
          )}
        </div>
      </div>
      <style jsx>{`
        .cart-wrapper {
          margin: auto;
          max-width: 800px;
        }
        .cart-header,
        .cart-content {
          margin-top: 2em;
        }
      `}</style>
    </Container>
  );
}

export default CartPage;
