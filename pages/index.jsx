import { useContext } from "react";
import useSWR from "swr";
import fetcher from "../lib/fetcher";
import { CartContext } from "../context/cart.context";

import Container from "../components/Container";
import { Card, Image, Icon, Header, Label, Button } from "semantic-ui-react";
import { formatter } from "../lib/formatter";

function HomePage() {
  const { data, error } = useSWR("/api/bicycles", fetcher);
  const { onAdd } = useContext(CartContext);

  if (error) return <div>failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <Container>
      <div className="home-wrapper">
        <Card.Group itemsPerRow={3}>
          {data.length ? (
            data.map((item) => (
              <Card key={item.bicycleId}>
                <Image
                  src={item.imageBicycle}
                  style={{ width: "100%", height: 225, objectFit: "cover" }}
                  fluid
                />
                <Card.Content>
                  <Card.Header>{item.model}</Card.Header>
                  {/* <Card.Meta>{item.date}</Card.Meta> */}
                  {/* <Card.Description>{item.description}</Card.Description> */}
                </Card.Content>
                <Card.Content>
                  {item.soldOut ? (
                    <Label basic size="medium" color="red" ribbon>
                      Sold Out
                    </Label>
                  ) : (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Button
                        size="mini"
                        icon="shopping cart"
                        onClick={() => onAdd({ ...item, quantity: 1 })}
                        content="Add to cart"
                        color="teal"
                      />
                      <span>{formatter.format(parseInt(item.price))}</span>
                    </div>
                  )}
                </Card.Content>
              </Card>
            ))
          ) : (
            <Header
              as="h4"
              icon="meh outline"
              content="No bicycles"
              color="grey"
              style={{ marginTop: "1em" }}
            />
          )}
        </Card.Group>
      </div>
      <style jsx>{`
        .home-wrapper {
          margin: auto;
          max-width: 800px;
        }
      `}</style>
    </Container>
  );
}

export default HomePage;
